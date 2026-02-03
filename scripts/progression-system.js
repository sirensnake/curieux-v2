/**
 * SYSTÈME DE DÉBLOCAGE PROGRESSIF - Le Monde des Curieux
 * Gestion niveaux utilisateur, déblocage contenu avancé
 * Progression exponentielle XP, système de verrouillage
 */

class ProgressionSystem {
    constructor() {
        this.levels = this.initLevels();
        this.userProgression = this.loadUserProgression();
    }

    /**
     * Définition des niveaux et XP requis
     */
    initLevels() {
        return {
            maxLevel: 20,
            advancedContentThreshold: 11, // Niveau 11 = contenu avancé débloqué
            
            // XP cumulé requis par niveau (progression exponentielle)
            xpPerLevel: [
                0,      // Niveau 1 (départ)
                100,    // Niveau 2
                250,    // Niveau 3
                450,    // Niveau 4
                700,    // Niveau 5
                1000,   // Niveau 6
                1400,   // Niveau 7
                1900,   // Niveau 8
                2500,   // Niveau 9
                3200,   // Niveau 10
                4000,   // Niveau 11 (CONTENU AVANCÉ DÉBLOQUÉ)
                5000,   // Niveau 12
                6200,   // Niveau 13
                7600,   // Niveau 14
                9200,   // Niveau 15
                11000,  // Niveau 16
                13000,  // Niveau 17
                15300,  // Niveau 18
                18000,  // Niveau 19
                21000   // Niveau 20 (max)
            ]
        };
    }

    /**
     * Charger progression utilisateur depuis localStorage
     */
    loadUserProgression() {
        const saved = localStorage.getItem('userProgression');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            currentLevel: 1,
            currentXP: 0,
            lastLevelUpDate: Date.now(),
            levelUpHistory: [] // { level, date, xp }
        };
    }

    /**
     * Sauvegarder progression utilisateur
     */
    saveUserProgression() {
        localStorage.setItem('userProgression', JSON.stringify(this.userProgression));
    }

    /**
     * Obtenir XP total utilisateur
     */
    getTotalXP() {
        const xpData = localStorage.getItem('section-xp-data');
        if (!xpData) return 0;
        
        const xp = JSON.parse(xpData);
        return Object.values(xp).reduce((sum, val) => sum + val, 0);
    }

    /**
     * Calculer niveau actuel basé sur XP total
     */
    calculateLevel() {
        const totalXP = this.getTotalXP();
        let level = 1;

        for (let i = 0; i < this.levels.xpPerLevel.length; i++) {
            if (totalXP >= this.levels.xpPerLevel[i]) {
                level = i + 1;
            } else {
                break;
            }
        }

        return Math.min(level, this.levels.maxLevel);
    }

    /**
     * Mettre à jour niveau utilisateur
     * @returns {Object} { leveledUp: boolean, newLevel: number, oldLevel: number }
     */
    updateLevel() {
        const currentLevel = this.calculateLevel();
        const oldLevel = this.userProgression.currentLevel;

        if (currentLevel > oldLevel) {
            // Level up !
            this.userProgression.currentLevel = currentLevel;
            this.userProgression.lastLevelUpDate = Date.now();
            this.userProgression.levelUpHistory.push({
                level: currentLevel,
                date: Date.now(),
                xp: this.getTotalXP()
            });

            this.saveUserProgression();

            console.log(`🎉 LEVEL UP ! Niveau ${currentLevel} atteint !`);

            return {
                leveledUp: true,
                newLevel: currentLevel,
                oldLevel: oldLevel
            };
        }

        // Pas de changement
        this.userProgression.currentLevel = currentLevel;
        this.saveUserProgression();

        return {
            leveledUp: false,
            newLevel: currentLevel,
            oldLevel: oldLevel
        };
    }

    /**
     * Obtenir XP requis pour prochain niveau
     */
    getXPToNextLevel() {
        const currentLevel = this.userProgression.currentLevel;
        
        if (currentLevel >= this.levels.maxLevel) {
            return 0; // Niveau max atteint
        }

        const currentXP = this.getTotalXP();
        const nextLevelXP = this.levels.xpPerLevel[currentLevel];
        const xpNeeded = nextLevelXP - currentXP;

        return Math.max(0, xpNeeded);
    }

    /**
     * Obtenir progression vers prochain niveau (0-100%)
     */
    getProgressToNextLevel() {
        const currentLevel = this.userProgression.currentLevel;
        
        if (currentLevel >= this.levels.maxLevel) {
            return 100; // Niveau max
        }

        const currentXP = this.getTotalXP();
        const currentLevelXP = currentLevel > 1 ? this.levels.xpPerLevel[currentLevel - 1] : 0;
        const nextLevelXP = this.levels.xpPerLevel[currentLevel];

        const xpInCurrentLevel = currentXP - currentLevelXP;
        const xpNeededForLevel = nextLevelXP - currentLevelXP;

        const progress = (xpInCurrentLevel / xpNeededForLevel) * 100;
        return Math.min(100, Math.max(0, progress));
    }

    /**
     * Vérifier si contenu avancé est débloqué
     */
    isAdvancedContentUnlocked() {
        return this.userProgression.currentLevel >= this.levels.advancedContentThreshold;
    }

    /**
     * Vérifier si un quiz spécifique est débloqué
     * @param {Object} quiz - { difficulty: 'base' | 'advanced', minLevel: number }
     */
    isQuizUnlocked(quiz) {
        const currentLevel = this.userProgression.currentLevel;

        // Quiz base : toujours débloqué
        if (quiz.difficulty === 'base') {
            return true;
        }

        // Quiz avancé : niveau 11 minimum
        if (quiz.difficulty === 'advanced') {
            const minLevel = quiz.minLevel || this.levels.advancedContentThreshold;
            return currentLevel >= minLevel;
        }

        return true; // Par défaut débloqué
    }

    /**
     * Obtenir message de verrouillage pour un quiz
     */
    getLockMessage(quiz) {
        if (this.isQuizUnlocked(quiz)) {
            return null;
        }

        const minLevel = quiz.minLevel || this.levels.advancedContentThreshold;
        const currentLevel = this.userProgression.currentLevel;
        const levelsNeeded = minLevel - currentLevel;

        return {
            locked: true,
            minLevel: minLevel,
            currentLevel: currentLevel,
            levelsNeeded: levelsNeeded,
            message: `🔒 Niveau ${minLevel} requis`,
            detailMessage: `Encore ${levelsNeeded} niveau${levelsNeeded > 1 ? 'x' : ''} à passer !`
        };
    }

    /**
     * Obtenir infos complètes niveau actuel
     */
    getCurrentLevelInfo() {
        const currentLevel = this.userProgression.currentLevel;
        const totalXP = this.getTotalXP();
        const xpToNext = this.getXPToNextLevel();
        const progress = this.getProgressToNextLevel();
        const advancedUnlocked = this.isAdvancedContentUnlocked();

        return {
            level: currentLevel,
            maxLevel: this.levels.maxLevel,
            totalXP: totalXP,
            xpToNextLevel: xpToNext,
            progressPercent: Math.round(progress),
            advancedContentUnlocked: advancedUnlocked,
            advancedContentThreshold: this.levels.advancedContentThreshold,
            isMaxLevel: currentLevel >= this.levels.maxLevel
        };
    }

    /**
     * Obtenir historique level ups
     */
    getLevelUpHistory() {
        return this.userProgression.levelUpHistory;
    }

    /**
     * Obtenir statistiques globales
     */
    getStats() {
        const info = this.getCurrentLevelInfo();
        const history = this.getLevelUpHistory();

        return {
            ...info,
            totalLevelUps: history.length,
            firstLevelUpDate: history.length > 0 ? history[0].date : null,
            lastLevelUpDate: this.userProgression.lastLevelUpDate,
            averageXPPerLevel: history.length > 0 ? 
                Math.round(info.totalXP / (info.level - 1)) : 0
        };
    }

    /**
     * Simuler progression (dev/debug)
     * @param {number} xpAmount - XP à ajouter
     */
    simulateXP(xpAmount) {
        const xpData = localStorage.getItem('section-xp-data');
        let xp = xpData ? JSON.parse(xpData) : {};
        
        if (!xp.debug) xp.debug = 0;
        xp.debug += xpAmount;
        
        localStorage.setItem('section-xp-data', JSON.stringify(xp));
        
        const result = this.updateLevel();
        console.log(`🧪 Simulation: +${xpAmount} XP ajouté`);
        
        return result;
    }

    /**
     * Réinitialiser progression (dev/debug)
     */
    reset() {
        this.userProgression = {
            currentLevel: 1,
            currentXP: 0,
            lastLevelUpDate: Date.now(),
            levelUpHistory: []
        };
        this.saveUserProgression();
        console.log('🔄 Progression réinitialisée');
    }

    /**
     * Obtenir toutes les infos de tous les niveaux
     */
    getAllLevelsInfo() {
        return this.levels.xpPerLevel.map((xpRequired, index) => {
            const level = index + 1;
            const isUnlocked = this.userProgression.currentLevel >= level;
            const isAdvanced = level >= this.levels.advancedContentThreshold;

            return {
                level: level,
                xpRequired: xpRequired,
                unlocked: isUnlocked,
                advanced: isAdvanced,
                current: level === this.userProgression.currentLevel
            };
        });
    }
}

// Export global
window.ProgressionSystem = ProgressionSystem;

// Instance globale
window.progressionSystem = new ProgressionSystem();

// Vérifier niveau automatiquement au chargement
window.addEventListener('DOMContentLoaded', () => {
    const result = window.progressionSystem.updateLevel();
    if (result.leveledUp) {
        console.log(`🎊 Tu es maintenant niveau ${result.newLevel} !`);
    }
});

console.log('✅ Progression System chargé');
