/**
 * MASTER GAME SYSTEM - Le Monde des Curieux
 * Système unifié de gestion gamification
 * Version 3.0 - Architecture préparée pour backend API
 */

class MasterGameSystem {
    constructor() {
        this.version = '3.0';
        this.storageKey = 'masterGameSystem_v3';
        this.data = this.load();
        
        console.log('🎮 MasterGameSystem v3.0 initialisé');
    }

    /**
     * Structure de données complète
     */
    getDefaultStructure() {
        return {
            // Métadonnées
            meta: {
                version: '3.0',
                createdAt: Date.now(),
                lastSync: Date.now(),
                lastBackup: null,
                userId: this.generateUserId(),
                migrated: false
            },
            
            // Progression globale
            global: {
                level: 1,
                totalXP: 0,
                xpForNextLevel: 200,
                xpThresholds: this.calculateXPThresholds(),
                currentStreak: 0,
                maxStreak: 0,
                lastActivity: null,
                totalPlayTime: 0 // en secondes
            },
            
            // Sections individuelles
            sections: {
                maths: this.getDefaultSectionData(),
                english: this.getDefaultSectionData(),
                francais: this.getDefaultSectionData(),
                histoire: this.getDefaultSectionData(),
                sciences: this.getDefaultSectionData()
            },
            
            // Système de progression et déblocages
            progression: {
                currentLevel: 1,
                advancedContentUnlocked: false,
                advancedContentThreshold: 11,
                levelUpHistory: [],
                achievements: [],
                unlockedFeatures: []
            },
            
            // Badges et récompenses
            rewards: {
                badges: [],
                inventory: [],
                powerups: {
                    doubleXP: 0,
                    freezeStreak: 0,
                    extraHearts: 0
                }
            },
            
            // Statistiques avancées
            stats: {
                totalLessonsCompleted: 0,
                totalQuizzesTaken: 0,
                totalCorrectAnswers: 0,
                totalWrongAnswers: 0,
                averageAccuracy: 0,
                favoriteSection: null,
                lessonsPerDay: [],
                weeklyProgress: []
            }
        };
    }

    /**
     * Structure par défaut pour une section
     */
    getDefaultSectionData() {
        return {
            completed: [],
            xp: 0,
            streak: 0,
            hearts: 5,
            maxHearts: 5,
            level: 1,
            lastActivity: null,
            lessonsTotal: 15,
            quizzesPassed: 0,
            accuracy: 0,
            bestScore: 0
        };
    }

    /**
     * Calcule les seuils XP par niveau
     */
    calculateXPThresholds() {
        const thresholds = [0]; // Niveau 1
        
        // Niveaux 1-5: 200 XP par niveau
        for (let i = 1; i <= 5; i++) {
            thresholds.push(200 * i);
        }
        
        // Niveaux 6-10: +400 XP par niveau
        for (let i = 6; i <= 10; i++) {
            thresholds.push(thresholds[5] + (400 * (i - 5)));
        }
        
        // Niveaux 11-20: +800 XP par niveau
        for (let i = 11; i <= 20; i++) {
            thresholds.push(thresholds[10] + (800 * (i - 10)));
        }
        
        return thresholds;
    }

    /**
     * Génère un ID utilisateur unique
     */
    generateUserId() {
        const existing = localStorage.getItem('curio_userId');
        if (existing) return existing;
        
        const userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('curio_userId', userId);
        return userId;
    }

    /**
     * Charge les données depuis localStorage
     */
    load() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            
            if (stored) {
                const data = JSON.parse(stored);
                
                // Validation version
                if (data.meta && data.meta.version === this.version) {
                    console.log('✅ Données v3.0 chargées');
                    return data;
                } else {
                    console.log('⚠️ Données anciennes détectées - migration nécessaire');
                    return this.getDefaultStructure();
                }
            }
        } catch (error) {
            console.error('❌ Erreur chargement données:', error);
        }
        
        console.log('🆕 Nouvelles données créées');
        return this.getDefaultStructure();
    }

    /**
     * Sauvegarde les données dans localStorage
     */
    save() {
        try {
            this.data.meta.lastSync = Date.now();
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
            console.log('💾 Données sauvegardées');
            return true;
        } catch (error) {
            console.error('❌ Erreur sauvegarde:', error);
            
            // Gestion localStorage plein
            if (error.name === 'QuotaExceededError') {
                console.warn('⚠️ LocalStorage plein - tentative nettoyage');
                this.cleanup();
                return this.save();
            }
            
            return false;
        }
    }

    /**
     * Synchronise XP total depuis sections
     */
    syncGlobalXP() {
        const totalXP = Object.values(this.data.sections)
            .reduce((sum, section) => sum + section.xp, 0);
        
        this.data.global.totalXP = totalXP;
        this.updateGlobalLevel();
        
        console.log(`🔄 XP synchronisé: ${totalXP} total`);
    }

    /**
     * Met à jour le niveau global basé sur XP total
     */
    updateGlobalLevel() {
        const totalXP = this.data.global.totalXP;
        const thresholds = this.data.global.xpThresholds;
        
        let newLevel = 1;
        for (let i = 0; i < thresholds.length; i++) {
            if (totalXP >= thresholds[i]) {
                newLevel = i + 1;
            } else {
                break;
            }
        }
        
        const oldLevel = this.data.global.level;
        
        if (newLevel > oldLevel) {
            this.handleLevelUp(oldLevel, newLevel);
        }
        
        this.data.global.level = newLevel;
        this.data.progression.currentLevel = newLevel;
        
        // Calculer XP pour prochain niveau
        if (newLevel < thresholds.length) {
            this.data.global.xpForNextLevel = thresholds[newLevel] - totalXP;
        } else {
            this.data.global.xpForNextLevel = 0; // Niveau max
        }
    }

    /**
     * Gère le passage de niveau
     */
    handleLevelUp(oldLevel, newLevel) {
        console.log(`🎉 LEVEL UP! ${oldLevel} → ${newLevel}`);
        
        // Enregistrer dans historique
        this.data.progression.levelUpHistory.push({
            oldLevel: oldLevel,
            newLevel: newLevel,
            timestamp: Date.now(),
            totalXP: this.data.global.totalXP
        });
        
        // Vérifier déblocage contenu avancé
        if (newLevel >= this.data.progression.advancedContentThreshold && 
            !this.data.progression.advancedContentUnlocked) {
            this.unlockAdvancedContent();
        }
        
        // Event pour animations UI
        window.dispatchEvent(new CustomEvent('game:levelup', {
            detail: { oldLevel, newLevel, totalXP: this.data.global.totalXP }
        }));
        
        this.save();
    }

    /**
     * Débloque le contenu avancé
     */
    unlockAdvancedContent() {
        this.data.progression.advancedContentUnlocked = true;
        
        console.log('🔓 Contenu avancé débloqué!');
        
        window.dispatchEvent(new CustomEvent('game:advancedunlocked', {
            detail: { level: this.data.global.level }
        }));
    }

    /**
     * Attribue XP à une section
     */
    awardXP(section, baseXP, context = {}) {
        if (!this.data.sections[section]) {
            console.error(`❌ Section inconnue: ${section}`);
            return;
        }
        
        let finalXP = baseXP;
        
        // Bonus streak (+50%)
        if (context.hasActiveStreak) {
            finalXP = Math.floor(finalXP * 1.5);
            console.log('🔥 Bonus Streak +50%');
        }
        
        // Bonus score parfait (x2)
        if (context.perfectScore) {
            finalXP *= 2;
            console.log('⭐ Bonus Perfect Score x2');
        }
        
        // Bonus powerup Double XP
        if (this.data.rewards.powerups.doubleXP > 0) {
            finalXP *= 2;
            this.data.rewards.powerups.doubleXP--;
            console.log('💎 Powerup Double XP activé!');
        }
        
        // Attribuer XP
        this.data.sections[section].xp += finalXP;
        
        console.log(`✨ ${section}: +${finalXP} XP (base: ${baseXP})`);
        
        // Synchroniser global
        this.syncGlobalXP();
        this.save();
        
        // Event pour UI
        window.dispatchEvent(new CustomEvent('game:xpawarded', {
            detail: { section, xp: finalXP, context }
        }));
        
        return finalXP;
    }

    /**
     * Complète une leçon
     */
    completeLesson(section, lessonId, score, timeSpent = 0) {
        if (!this.data.sections[section]) {
            console.error(`❌ Section inconnue: ${section}`);
            return;
        }
        
        const sectionData = this.data.sections[section];
        
        // Ajouter à completed si pas déjà fait
        if (!sectionData.completed.includes(lessonId)) {
            sectionData.completed.push(lessonId);
            sectionData.quizzesPassed++;
            
            this.data.stats.totalLessonsCompleted++;
        }
        
        // Mise à jour best score
        if (score > sectionData.bestScore) {
            sectionData.bestScore = score;
        }
        
        // Mise à jour activité
        sectionData.lastActivity = Date.now();
        this.data.global.lastActivity = Date.now();
        this.data.global.totalPlayTime += timeSpent;
        
        console.log(`✅ ${section} - Leçon ${lessonId} complétée (score: ${score})`);
        
        this.save();
    }

    /**
     * Met à jour le streak d'une section
     */
    updateStreak(section) {
        if (!this.data.sections[section]) return;
        
        const sectionData = this.data.sections[section];
        const now = Date.now();
        const oneDayMs = 24 * 60 * 60 * 1000;
        
        if (!sectionData.lastActivity) {
            // Première activité
            sectionData.streak = 1;
        } else {
            const daysSinceLastActivity = Math.floor((now - sectionData.lastActivity) / oneDayMs);
            
            if (daysSinceLastActivity <= 1) {
                // Activité quotidienne maintenue
                sectionData.streak++;
            } else {
                // Streak cassé
                console.log(`💔 Streak ${section} cassé après ${sectionData.streak} jours`);
                sectionData.streak = 1;
            }
        }
        
        // Mise à jour streak global
        const maxSectionStreak = Math.max(...Object.values(this.data.sections).map(s => s.streak));
        this.data.global.currentStreak = maxSectionStreak;
        this.data.global.maxStreak = Math.max(this.data.global.maxStreak, maxSectionStreak);
        
        console.log(`🔥 Streak ${section}: ${sectionData.streak} jours`);
        
        this.save();
    }

    /**
     * Gère les cœurs (vies)
     */
    loseHeart(section) {
        if (!this.data.sections[section]) return false;
        
        const sectionData = this.data.sections[section];
        
        if (sectionData.hearts > 0) {
            sectionData.hearts--;
            console.log(`💔 ${section}: ${sectionData.hearts}/${sectionData.maxHearts} cœurs`);
            
            this.save();
            
            window.dispatchEvent(new CustomEvent('game:heartlost', {
                detail: { section, hearts: sectionData.hearts }
            }));
            
            return sectionData.hearts > 0;
        }
        
        return false;
    }

    /**
     * Restaure les cœurs
     */
    restoreHearts(section, amount = 1) {
        if (!this.data.sections[section]) return;
        
        const sectionData = this.data.sections[section];
        sectionData.hearts = Math.min(sectionData.hearts + amount, sectionData.maxHearts);
        
        console.log(`💚 ${section}: ${sectionData.hearts}/${sectionData.maxHearts} cœurs restaurés`);
        
        this.save();
    }

    /**
     * Obtient les statistiques globales
     */
    getGlobalStats() {
        return {
            level: this.data.global.level,
            totalXP: this.data.global.totalXP,
            xpForNextLevel: this.data.global.xpForNextLevel,
            currentStreak: this.data.global.currentStreak,
            maxStreak: this.data.global.maxStreak,
            totalLessons: this.data.stats.totalLessonsCompleted,
            advancedUnlocked: this.data.progression.advancedContentUnlocked,
            playTime: this.formatPlayTime(this.data.global.totalPlayTime)
        };
    }

    /**
     * Obtient les données d'une section
     */
    getSectionData(section) {
        return this.data.sections[section] || null;
    }

    /**
     * Export complet des données
     */
    exportData() {
        const exportData = {
            ...this.data,
            exportDate: new Date().toISOString(),
            exportVersion: this.version
        };
        
        const json = JSON.stringify(exportData, null, 2);
        console.log(`📦 Export généré: ${json.length} caractères`);
        
        return json;
    }

    /**
     * Import de données
     */
    importData(jsonData) {
        try {
            const imported = JSON.parse(jsonData);
            
            if (!imported.meta || !imported.meta.version) {
                throw new Error('Format invalide');
            }
            
            this.data = imported;
            this.save();
            
            console.log('✅ Import réussi!');
            return true;
            
        } catch (error) {
            console.error('❌ Erreur import:', error);
            return false;
        }
    }

    /**
     * Crée une sauvegarde
     */
    createBackup() {
        const backupKey = `backup_${this.storageKey}_${Date.now()}`;
        const backupData = this.exportData();
        
        try {
            localStorage.setItem(backupKey, backupData);
            this.data.meta.lastBackup = Date.now();
            this.save();
            
            console.log(`💾 Backup créé: ${backupKey}`);
            return backupKey;
            
        } catch (error) {
            console.error('❌ Erreur backup:', error);
            return null;
        }
    }

    /**
     * Nettoie les anciennes données
     */
    cleanup() {
        const keysToKeep = [this.storageKey, 'curio_userId'];
        const keysToRemove = [];
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            
            // Garder seulement MasterGameSystem et userId
            if (!keysToKeep.includes(key) && !key.startsWith('backup_')) {
                keysToRemove.push(key);
            }
        }
        
        keysToRemove.forEach(key => {
            localStorage.removeItem(key);
            console.log(`🗑️ Supprimé: ${key}`);
        });
        
        console.log(`✅ Nettoyage terminé: ${keysToRemove.length} clés supprimées`);
    }

    /**
     * Réinitialisation complète
     */
    reset() {
        if (confirm('⚠️ ATTENTION! Réinitialiser TOUTES les données?')) {
            this.data = this.getDefaultStructure();
            this.save();
            console.log('🔄 Données réinitialisées');
            return true;
        }
        return false;
    }

    /**
     * Formate le temps de jeu
     */
    formatPlayTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        
        if (hours > 0) {
            return `${hours}h ${minutes}min`;
        }
        return `${minutes}min`;
    }

    /**
     * Debug: Affiche l'état complet
     */
    debugPrint() {
        console.log('\n' + '='.repeat(60));
        console.log('🎮 MASTER GAME SYSTEM - État actuel');
        console.log('='.repeat(60));
        console.log('Version:', this.version);
        console.log('UserID:', this.data.meta.userId);
        console.log('\n📊 Global:');
        console.log('   Niveau:', this.data.global.level);
        console.log('   XP Total:', this.data.global.totalXP);
        console.log('   XP prochain niveau:', this.data.global.xpForNextLevel);
        console.log('   Streak actuel:', this.data.global.currentStreak);
        console.log('\n📚 Sections:');
        Object.entries(this.data.sections).forEach(([name, data]) => {
            console.log(`   ${name}:`, data.xp, 'XP,', data.completed.length, 'leçons');
        });
        console.log('='.repeat(60) + '\n');
    }
}

// Export global
if (typeof window !== 'undefined') {
    window.MasterGameSystem = MasterGameSystem;
}

console.log('✅ MasterGameSystem v3.0 chargé');
console.log('💡 Utilisation: new MasterGameSystem()');
