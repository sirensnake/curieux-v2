/**
 * badges-system.js
 * Système de badges pour Le Monde des Curieux
 */

class BadgeSystem {
    constructor() {
        this.badges = this.initBadges();
        this.userBadges = this.loadUserBadges();
    }

    initBadges() {
        return {
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

    loadUserBadges() {
        const saved = localStorage.getItem('userBadges');
        if (saved) return JSON.parse(saved);
        return { earned: [], earnedDates: {}, notifications: [] };
    }

    saveUserBadges() {
        localStorage.setItem('userBadges', JSON.stringify(this.userBadges));
    }

    getUserData() {
        const xpData = localStorage.getItem('section-xp-data');
        const progressData = localStorage.getItem('progressData');

        let userData = {
            totalXP: 0,
            currentStreak: 0,
            perfectQuizCount: 0,
            totalQuizCompleted: 0,
            quizBySubject: { francais: 0, maths: 0, anglais: 0, sciences: 0, histoire: 0 }
        };

        if (xpData) {
            const xp = JSON.parse(xpData);
            userData.totalXP = Object.values(xp).reduce((sum, val) => sum + val, 0);
        }

        const streakData = localStorage.getItem('dailyStreak');
        if (streakData) {
            const streak = JSON.parse(streakData);
            userData.currentStreak = streak.currentStreak || 0;
        }

        if (progressData) {
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
        }
        return userData;
    }

    checkBadges() {
        const userData = this.getUserData();
        const newBadges = [];

        Object.keys(this.badges).forEach(badgeId => {
            const badge = this.badges[badgeId];
            if (this.userBadges.earned.includes(badgeId)) return;
            if (badge.condition(userData)) {
                this.unlockBadge(badgeId);
                newBadges.push(badge);
            }
        });
        return newBadges;
    }

    unlockBadge(badgeId) {
        if (this.userBadges.earned.includes(badgeId)) return;
        const badge = this.badges[badgeId];
        this.userBadges.earned.push(badgeId);
        this.userBadges.earnedDates[badgeId] = Date.now();
        this.userBadges.notifications.push(badgeId);
        this.saveUserBadges();
        if (badge.xpBonus > 0) this.addBadgeXP(badgeId, badge.xpBonus);
        console.log(`🎉 Badge débloqué: ${badge.name}`);
    }

    addBadgeXP(badgeId, xpAmount) {
        const xpData = localStorage.getItem('section-xp-data');
        let xp = xpData ? JSON.parse(xpData) : {};
        if (!xp.badges) xp.badges = 0;
        xp.badges += xpAmount;
        localStorage.setItem('section-xp-data', JSON.stringify(xp));
    }

    getEarnedBadges() {
        return this.userBadges.earned.map(id => ({
            ...this.badges[id],
            earnedDate: this.userBadges.earnedDates[id]
        }));
    }

    getUnlockedBadges() {
        const userData = this.getUserData();
        return Object.keys(this.badges)
            .filter(id => !this.userBadges.earned.includes(id))
            .map(id => ({ ...this.badges[id], progress: this.calculateProgress(this.badges[id], userData) }));
    }

    calculateProgress(badge, userData) {
        switch (badge.id) {
            case 'streak_7': return { current: userData.currentStreak, target: 7 };
            case 'streak_30': return { current: userData.currentStreak, target: 30 };
            case 'xp_1000': return { current: userData.totalXP, target: 1000 };
            case 'xp_5000': return { current: userData.totalXP, target: 5000 };
            case 'perfect_10': return { current: userData.perfectQuizCount, target: 10 };
            case 'quiz_100': return { current: userData.totalQuizCompleted, target: 100 };
            case 'all_subjects': {
                const completed = Object.values(userData.quizBySubject).filter(v => v > 0).length;
                return { current: completed, target: 5 };
            }
            default: return { current: 0, target: 1 };
        }
    }

    getPendingNotifications() {
        return this.userBadges.notifications.map(id => this.badges[id]);
    }

    clearNotifications() {
        this.userBadges.notifications = [];
        this.saveUserBadges();
    }

    getStats() {
        const total = Object.keys(this.badges).length;
        const earned = this.userBadges.earned.length;
        const totalXPBonus = this.getEarnedBadges().reduce((sum, badge) => sum + badge.xpBonus, 0);
        return {
            total, earned,
            remaining: total - earned,
            completionRate: Math.round((earned / total) * 100),
            totalXPBonus
        };
    }

    reset() {
        this.userBadges = { earned: [], earnedDates: {}, notifications: [] };
        this.saveUserBadges();
        console.log('🔄 Badges réinitialisés');
    }
}

window.BadgeSystem = BadgeSystem;
window.badgeSystem = new BadgeSystem();
console.log('✅ Badge System chargé');
