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
     */
    loadUserBadges() {
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
     */
    saveUserBadges() {
        localStorage.setItem('userBadges', JSON.stringify(this.userBadges));
    }

    /**
     * Récupérer données utilisateur depuis XP system
     */
    getUserData() {
        const xpData = localStorage.getItem('section-xp-data');
        const progressData = localStorage.getItem('progressData');
        
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

        // XP total
        if (xpData) {
            const xp = JSON.parse(xpData);
            userData.totalXP = Object.values(xp).reduce((sum, val) => sum + val, 0);
        }

        // Streak actuel
        const streakData = localStorage.getItem('dailyStreak');
        if (streakData) {
            const streak = JSON.parse(streakData);
            userData.currentStreak = streak.currentStreak || 0;
        }

        // Quiz complétés et performances
        if (progressData) {
            const progress = JSON.parse(progressData);
            
            // Parcourir toutes les sections
            Object.keys(progress).forEach(section => {
                const sectionData = progress[section];
                
                if (sectionData.quizResults) {
                    Object.values(sectionData.quizResults).forEach(result => {
                        userData.totalQuizCompleted++;
                        
                        // Quiz parfait ?
                        if (result.score === 100 || result.correctAnswers === result.totalQuestions) {
                            userData.perfectQuizCount++;
                        }
                        
                        // Compter par matière
                        const subjectKey = section.toLowerCase();
                        if (userData.quizBySubject.hasOwnProperty(subjectKey)) {
                            userData.quizBySubject[subjectKey]++;
                        }
                    });
                }
            });
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
     */
    addBadgeXP(badgeId, xpAmount) {
        // Récupérer XP actuel
        const xpData = localStorage.getItem('section-xp-data');
        let xp = xpData ? JSON.parse(xpData) : {};

        // Ajouter catégorie "badges" si inexistante
        if (!xp.badges) {
            xp.badges = 0;
        }

        xp.badges += xpAmount;

        // Sauvegarder
        localStorage.setItem('section-xp-data', JSON.stringify(xp));

        console.log(`✨ +${xpAmount} XP bonus badge ${badgeId}`);
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
