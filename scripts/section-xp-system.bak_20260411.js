// ========================================
// SYSTÈME XP POUR SECTIONS (Histoire, Maths, Anglais)
// Compatible avec dashboard-alpine.html
// ========================================

(function() {
    'use strict';

    // Clés localStorage (compatibles dashboard)
    const STORAGE_KEYS = {
        XP: 'lemondedescurieux_xp',
        STREAKS: 'lemondedescurieux_streaks',
        HEARTS: 'lemondedescurieux_hearts'
    };

    // Système XP
    window.SectionXP = {
        // ========================================
        // AJOUTER DES XP
        // ========================================
        addXP(sectionName, amount) {
            // Charger les données XP
            const xpData = this.getXPData();

            // Initialiser la section si nécessaire
            if (!xpData.bySection) {
                xpData.bySection = {};
            }
            if (!xpData.bySection[sectionName]) {
                xpData.bySection[sectionName] = 0;
            }

            // Ajouter les XP
            xpData.bySection[sectionName] += amount;
            xpData.total = (xpData.total || 0) + amount;

            // Sauvegarder
            localStorage.setItem(STORAGE_KEYS.XP, JSON.stringify(xpData));

            // Log
            console.log(`✨ +${amount} XP en ${sectionName}! Total: ${xpData.bySection[sectionName]} XP`);

            // Émettre événement
            window.dispatchEvent(new CustomEvent('xp:updated', {
                detail: {
                    section: sectionName,
                    amount: amount,
                    total: xpData.bySection[sectionName],
                    globalTotal: xpData.total
                }
            }));

            return xpData.bySection[sectionName];
        },

        // ========================================
        // RÉCUPÉRER XP D'UNE SECTION
        // ========================================
        getXP(sectionName) {
            const xpData = this.getXPData();
            return xpData.bySection?.[sectionName] || 0;
        },

        // ========================================
        // RÉCUPÉRER XP TOTAL
        // ========================================
        getTotalXP() {
            const xpData = this.getXPData();
            return xpData.total || 0;
        },

        // ========================================
        // RÉCUPÉRER NIVEAU
        // ========================================
        getLevel() {
            const totalXP = this.getTotalXP();
            return Math.floor(totalXP / 200) + 1;
        },

        // ========================================
        // DONNÉES XP (privé)
        // ========================================
        getXPData() {
            const data = localStorage.getItem(STORAGE_KEYS.XP);
            return data ? JSON.parse(data) : { total: 0, bySection: {} };
        },

        // ========================================
        // GÉRER LES STREAKS (SÉRIES)
        // ========================================
        updateStreak() {
            const streakData = this.getStreakData();
            const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

            // Si dernière visite = aujourd'hui, ne rien faire
            if (streakData.lastVisit === today) {
                return streakData.currentStreak;
            }

            // Si dernière visite = hier, incrémenter
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];

            if (streakData.lastVisit === yesterdayStr) {
                streakData.currentStreak = (streakData.currentStreak || 0) + 1;
            } else {
                // Sinon, reset à 1
                streakData.currentStreak = 1;
            }

            streakData.lastVisit = today;
            streakData.longestStreak = Math.max(streakData.longestStreak || 0, streakData.currentStreak);

            // Sauvegarder
            localStorage.setItem(STORAGE_KEYS.STREAKS, JSON.stringify(streakData));

            console.log(`🔥 Streak: ${streakData.currentStreak} jours consécutifs!`);

            return streakData.currentStreak;
        },

        // ========================================
        // RÉCUPÉRER STREAK
        // ========================================
        getStreak() {
            const streakData = this.getStreakData();
            return streakData.currentStreak || 0;
        },

        // ========================================
        // DONNÉES STREAK (privé)
        // ========================================
        getStreakData() {
            const data = localStorage.getItem(STORAGE_KEYS.STREAKS);
            return data ? JSON.parse(data) : { currentStreak: 0, longestStreak: 0, lastVisit: null };
        },

        // ========================================
        // INITIALISATION (à appeler au chargement)
        // ========================================
        init(sectionName) {
            console.log(`🎮 Système XP initialisé pour: ${sectionName}`);

            // Mettre à jour le streak
            this.updateStreak();

            // Afficher les stats actuelles
            console.log(`📊 XP ${sectionName}: ${this.getXP(sectionName)}`);
            console.log(`📊 XP Total: ${this.getTotalXP()}`);
            console.log(`📊 Niveau: ${this.getLevel()}`);
            console.log(`📊 Streak: ${this.getStreak()} jours`);
        },

        // ========================================
        // RÉCOMPENSES PAR TYPE DE RÉUSSITE
        // ========================================
        rewards: {
            QUESTION_CORRECT: 10,      // Bonne réponse à une question
            QUIZ_COMPLETED: 50,        // Quiz terminé (bonus)
            PERFECT_QUIZ: 100,         // Quiz parfait (10/10)
            LESSON_READ: 20            // Leçon "En savoir plus" lue
        }
    };

    // Export global
    console.log('✅ SectionXP chargé et prêt!');
})();
