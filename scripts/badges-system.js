/**
 * SYSTÈME DE BADGES - Le Monde des Curieux
 * Gestion badges milestones avec vérification automatique
 * Persistance localStorage, notifications visuelles
 */

class BadgeSystem {
    constructor() {
        this.badges = this.initBadges();
        this.userBadges = this.loadUserBadges();
    }

    /**
     * Définition des 7 badges milestones
     */
    initBadges() {
        return {
            // STREAKS
            streak_7: {
                id: 'streak_7',
                name: '🔥 Semaine de feu',
                description: '7 jours consécutifs d\'activité',
                category: 'streak',
                xpBonus: 100,
                condition: (userData) => userData.currentStreak >= 7
            },

            streak_30: {
                id: 'streak_30',
                name: '🏆 Champion du mois',
                description: '30 jours consécutifs d\'activité',
                category: 'streak',
                xpBonus: 500,
                condition: (userData) => userData.currentStreak >= 30
            },

            // XP TOTAL
            xp_1000: {
                id: 'xp_1000',
                name: '📚 Érudit',
                description: 'Atteindre 1000 XP au total',
                category: 'xp',
                xpBonus: 200,
                condition: (userData) => userData.totalXP >= 1000
            },

            xp_5000: {
                id: 'xp_5000',
                name: '🎓 Savant',
                description: 'Atteindre 5000 XP au total',
                category: 'xp',
                xpBonus: 1000,
                condition: (userData) => userData.totalXP >= 5000
            },

            // QUIZ PERFORMANCE
            perfect_10: {
                id: 'perfect_10',
                name: '⭐ Sans faute',
                description: 'Réussir 10 quiz avec 100%',
                category: 'performance',
                xpBonus: 150,
                condition: (userData) => userData.perfectQuizCount >= 10
            },

            quiz_100: {
                id: 'quiz_100',
                name: '💯 Centurion',
                description: 'Compléter 100 quiz',
                category: 'completion',
                xpBonus: 300,
                condition: (userData) => userData.totalQuizCompleted >= 100
            },

            // POLYVALENCE
            all_subjects: {
                id: 'all_subjects',
                name: '🌟 Polyvalent',
                description: 'Au moins 1 quiz dans chaque matière',
                category: 'polyvalence',
                xpBonus: 250,
                condition: (userData) => {
                    const subjects = ['francais', 'maths', 'anglais', 'sciences', 'histoire'];
                    const quizBySubject = userData.quizBySubject || {};
                    return subjects.every(s => (quizBySubject[s] || 0) > 0);
                }
            }
        };
    }

    /**
     * Charger badges utilisateur depuis localStorage
     * ✅ CORRECTION : Lire depuis lemondedescurieux_badges (clé officielle dashboard)
     */
    loadUserBadges() {
        // ✅ Lire clé officielle EN PREMIER
        const official = localStorage.getItem('lemondedescurieux_badges');
        if (official) {
            try {
                const badges = JSON.parse(official);
                // Convertir format dashboard vers format interne
                return {
                    earned: badges.filter(b => b.unlocked).map(b => b.id),
                    earnedDates: badges.reduce((acc, b) => {
                        if (b.unlocked && b.unlockedAt) acc[b.id] = new Date(b.unlockedAt).getTime();
                        return acc;
                    }, {}),
                    notifications: []
                };
            } catch(e) {
                console.error('[BadgeSystem] Erreur parsing badges officiels:', e);
            }
        }
        
        // Fallback : ancienne clé userBadges
        const saved = localStorage.getItem('userBadges');
        if (saved) {
            return JSON.parse(saved);
        }
        
        return {
            earned: [], // IDs des badges gagnés
            earnedDates: {}, // { badgeId: timestamp }
            notifications: [] // Badges à notifier
        };
    }

    /**
     * Sauvegarder badges utilisateur
     * ✅ CORRECTION : Écrire dans lemondedescurieux_badges (clé officielle dashboard)
     */
    saveUserBadges() {
        // ✅ Convertir format interne vers format dashboard
        const dashboardFormat = Object.keys(this.badges).map(badgeId => {
            const isUnlocked = this.userBadges.earned.includes(badgeId);
            return {
                id: badgeId,
                unlocked: isUnlocked,
                unlockedAt: isUnlocked ? new Date(this.userBadges.earnedDates[badgeId] || Date.now()).toISOString() : null
            };
        });
        
        // ✅ Sauvegarder clé officielle
        localStorage.setItem('lemondedescurieux_badges', JSON.stringify(dashboardFormat));
        
        // Aussi sauvegarder ancienne clé pour compatibilité
        localStorage.setItem('userBadges', JSON.stringify(this.userBadges));
        
        console.log('✅ Badges sauvegardés:', dashboardFormat.filter(b => b.unlocked).length, 'badges débloqués');
    }

    /**
     * Récupérer données utilisateur depuis XP system
     * Lit les clés officielles (lemondedescurieux_*) EN PREMIER,
     * puis les anciennes clés comme fallback.
     */
    getUserData() {
        let userData = {
            totalXP: 0,
            currentStreak: 0,
            perfectQuizCount: 0,
            totalQuizCompleted: 0,
            quizBySubject: {
                francais: 0,
                maths: 0,
                anglais: 0,
                sciences: 0,
                histoire: 0
            }
        };

        // --- XP TOTAL ---
        // ✅ CORRECTION : Calculer VRAI total en additionnant toutes les sections
        // (même méthode que dashboard-extended.html)
        const officialXP = localStorage.getItem('lemondedescurieux_xp');
        if (officialXP) {
            try {
                const xp = JSON.parse(officialXP);
                const bySection = xp.bySection || {};
                
                // ✅ ADDITIONNER TOUTES LES SECTIONS (pas lire xp.total qui est obsolète)
                userData.totalXP = (
                    (bySection.francais || 0) +
                    (bySection.anglais || 0) +
                    (bySection.maths || 0) +
                    (bySection.sciences || 0) +
                    (bySection.histoire || 0) +
                    (bySection.badges || 0)
                );
                
                console.log('[BadgeSystem] Total XP recalculé:', userData.totalXP, 'depuis sections:', bySection);
            } catch(e) {
                console.error('[BadgeSystem] Erreur parsing XP:', e);
            }
        }
        // Fallback : section-xp-data (ancien système)
        if (userData.totalXP === 0) {
            const oldXP = localStorage.getItem('section-xp-data');
            if (oldXP) {
                try {
                    const xp = JSON.parse(oldXP);
                    userData.totalXP = Object.values(xp).reduce((sum, val) => typeof val === 'number' ? sum + val : sum, 0);
                } catch(e) {}
            }
        }

        // --- STREAK ---
        // Source principale : lemondedescurieux_streaks (écrit par section-xp-system.js)
        const officialStreak = localStorage.getItem('lemondedescurieux_streaks');
        if (officialStreak) {
            try {
                const streak = JSON.parse(officialStreak);
                userData.currentStreak = streak.currentStreak || 0;
            } catch(e) {}
        }
        // Fallback : dailyStreak (ancien système)
        if (userData.currentStreak === 0) {
            const oldStreak = localStorage.getItem('dailyStreak');
            if (oldStreak) {
                try {
                    const streak = JSON.parse(oldStreak);
                    userData.currentStreak = streak.currentStreak || 0;
                } catch(e) {}
            }
        }

        // --- QUIZ STATS ---
        // Source principale : lemondedescurieux_quiz_stats (écrit par les sections)
        const quizStats = localStorage.getItem('lemondedescurieux_quiz_stats');
        if (quizStats) {
            try {
                const stats = JSON.parse(quizStats);
                userData.totalQuizCompleted = stats.totalCompleted || 0;
                userData.perfectQuizCount = stats.perfectCount || 0;
                if (stats.bySubject) {
                    Object.keys(userData.quizBySubject).forEach(s => {
                        userData.quizBySubject[s] = stats.bySubject[s] || 0;
                    });
                }
            } catch(e) {}
        }
        // Fallback : progressData (ancien système)
        if (userData.totalQuizCompleted === 0) {
            const progressData = localStorage.getItem('progressData');
            if (progressData) {
                try {
                    const progress = JSON.parse(progressData);
                    Object.keys(progress).forEach(section => {
                        const sectionData = progress[section];
                        if (sectionData.quizResults) {
                            Object.values(sectionData.quizResults).forEach(result => {
                                userData.totalQuizCompleted++;
                                if (result.score === 100 || result.correctAnswers === result.totalQuestions) {
                                    userData.perfectQuizCount++;
                                }
                                const subjectKey = section.toLowerCase();
                                if (userData.quizBySubject.hasOwnProperty(subjectKey)) {
                                    userData.quizBySubject[subjectKey]++;
                                }
                            });
                        }
                    });
                } catch(e) {}
            }
        }

        return userData;
    }

    /**
     * Vérifier tous les badges et débloquer nouveaux
     * @returns {Array} Nouveaux badges débloqués
     */
    checkBadges() {
        const userData = this.getUserData();
        const newBadges = [];

        Object.keys(this.badges).forEach(badgeId => {
            const badge = this.badges[badgeId];
            
            // Badge déjà gagné ?
            if (this.userBadges.earned.includes(badgeId)) {
                return;
            }

            // Condition remplie ?
            if (badge.condition(userData)) {
                this.unlockBadge(badgeId);
                newBadges.push(badge);
            }
        });

        return newBadges;
    }

    /**
     * Débloquer un badge
     */
    unlockBadge(badgeId) {
        if (this.userBadges.earned.includes(badgeId)) {
            return; // Déjà gagné
        }

        const badge = this.badges[badgeId];
        const now = Date.now();

        // Ajouter aux badges gagnés
        this.userBadges.earned.push(badgeId);
        this.userBadges.earnedDates[badgeId] = now;
        this.userBadges.notifications.push(badgeId);

        // Sauvegarder
        this.saveUserBadges();

        // Ajouter XP bonus
        if (badge.xpBonus > 0) {
            this.addBadgeXP(badgeId, badge.xpBonus);
        }

        console.log(`🎉 Badge débloqué: ${badge.name}`);
    }

    /**
     * Ajouter XP bonus d'un badge
     * Écrit dans lemondedescurieux_xp (clé officielle du dashboard)
     */
    addBadgeXP(badgeId, xpAmount) {
        try {
            const raw = localStorage.getItem('lemondedescurieux_xp');
            let xp = raw ? JSON.parse(raw) : { total: 0, bySection: {} };

            // Les XP badge vont dans une section dédiée "badges"
            if (!xp.bySection) xp.bySection = {};
            xp.bySection.badges = (xp.bySection.badges || 0) + xpAmount;
            xp.total = (xp.total || 0) + xpAmount;

            localStorage.setItem('lemondedescurieux_xp', JSON.stringify(xp));
            console.log(`✨ +${xpAmount} XP bonus badge ${badgeId} → total: ${xp.total}`);
        } catch(e) {
            console.warn('[BadgeSystem] Erreur addBadgeXP:', e);
        }
    }

    /**
     * Obtenir badges gagnés
     */
    getEarnedBadges() {
        return this.userBadges.earned.map(id => ({
            ...this.badges[id],
            earnedDate: this.userBadges.earnedDates[id]
        }));
    }

    /**
     * Obtenir badges non gagnés avec progression
     */
    getUnlockedBadges() {
        const userData = this.getUserData();
        
        return Object.keys(this.badges)
            .filter(id => !this.userBadges.earned.includes(id))
            .map(id => {
                const badge = this.badges[id];
                return {
                    ...badge,
                    progress: this.calculateProgress(badge, userData)
                };
            });
    }

    /**
     * Calculer progression vers un badge
     */
    calculateProgress(badge, userData) {
        switch (badge.id) {
            case 'streak_7':
                return { current: userData.currentStreak, target: 7 };
            case 'streak_30':
                return { current: userData.currentStreak, target: 30 };
            case 'xp_1000':
                return { current: userData.totalXP, target: 1000 };
            case 'xp_5000':
                return { current: userData.totalXP, target: 5000 };
            case 'perfect_10':
                return { current: userData.perfectQuizCount, target: 10 };
            case 'quiz_100':
                return { current: userData.totalQuizCompleted, target: 100 };
            case 'all_subjects': {
                const completed = Object.values(userData.quizBySubject).filter(v => v > 0).length;
                return { current: completed, target: 5 };
            }
            default:
                return { current: 0, target: 1 };
        }
    }

    /**
     * Obtenir badges à notifier
     */
    getPendingNotifications() {
        return this.userBadges.notifications.map(id => this.badges[id]);
    }

    /**
     * Marquer notifications comme vues
     */
    clearNotifications() {
        this.userBadges.notifications = [];
        this.saveUserBadges();
    }

    /**
     * Statistiques badges
     */
    getStats() {
        const total = Object.keys(this.badges).length;
        const earned = this.userBadges.earned.length;
        const totalXPBonus = this.getEarnedBadges()
            .reduce((sum, badge) => sum + badge.xpBonus, 0);

        return {
            total,
            earned,
            remaining: total - earned,
            completionRate: Math.round((earned / total) * 100),
            totalXPBonus
        };
    }

    /**
     * Réinitialiser badges (dev/debug)
     */
    reset() {
        this.userBadges = {
            earned: [],
            earnedDates: {},
            notifications: []
        };
        this.saveUserBadges();
        console.log('🔄 Badges réinitialisés');
    }
}

// Export global
window.BadgeSystem = BadgeSystem;

// Instance globale
window.badgeSystem = new BadgeSystem();

console.log('✅ Badge System chargé');
