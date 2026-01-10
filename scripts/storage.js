// ========================================
// MODULE STORAGE UNIFIÉ
// Gestion centralisée du localStorage
// ========================================

/**
 * Classe de gestion unifiée du stockage local
 * Compatible avec toutes les structures existantes
 */
class UnifiedStorage {
    
    /**
     * Récupère les données complètes d'une section
     * @param {string} sectionKey - Clé de la section (maths, english, francais, histoire, sciences)
     * @returns {Object} - Données de progression de la section
     */
    static getSectionData(sectionKey) {
        const data = {
            completed: [],
            xp: 0,
            streak: 0,
            hearts: 5,
            level: 1,
            lastActivity: null
        };

        // Essayer différentes structures de clés localStorage
        const possibleKeys = {
            completed: [
                `${sectionKey}_completed`,
                `${sectionKey}Completed`,
                `${sectionKey}_progress`,
                `lessonEngine_${sectionKey}_completed`
            ],
            xp: [
                `${sectionKey}_xp`,
                `${sectionKey}XP`,
                `lessonEngine_${sectionKey}_xp`
            ],
            streak: [
                `${sectionKey}_streak`,
                `${sectionKey}Streak`,
                `${sectionKey}_daily_streak`
            ],
            hearts: [
                `${sectionKey}_hearts`,
                `${sectionKey}Hearts`,
                `${sectionKey}_lives`
            ]
        };

        // Récupérer leçons complétées
        for (const key of possibleKeys.completed) {
            const stored = localStorage.getItem(key);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed)) {
                        data.completed = parsed;
                        break;
                    } else if (parsed.completed && Array.isArray(parsed.completed)) {
                        data.completed = parsed.completed;
                        break;
                    }
                } catch (e) {
                    console.warn(`⚠️ Erreur parsing ${key}:`, e);
                }
            }
        }

        // Récupérer XP
        for (const key of possibleKeys.xp) {
            const stored = localStorage.getItem(key);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    data.xp = parsed.total || parsed.xp || parsed || 0;
                    break;
                } catch (e) {
                    data.xp = parseInt(stored) || 0;
                }
            }
        }

        // Récupérer Streak
        for (const key of possibleKeys.streak) {
            const stored = localStorage.getItem(key);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    data.streak = parsed.currentStreak || parsed.streak || parsed || 0;
                    if (parsed.lastActivityDate) {
                        data.lastActivity = parsed.lastActivityDate;
                    }
                    break;
                } catch (e) {
                    data.streak = parseInt(stored) || 0;
                }
            }
        }

        // Récupérer Hearts
        for (const key of possibleKeys.hearts) {
            const stored = localStorage.getItem(key);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    data.hearts = parsed.currentHearts || parsed.hearts || parsed || 5;
                    break;
                } catch (e) {
                    data.hearts = parseInt(stored) || 5;
                }
            }
        }

        // Calculer niveau basé sur XP
        data.level = Math.floor(data.xp / 200) + 1;

        return data;
    }

    /**
     * Sauvegarde les données d'une section (format unifié)
     * @param {string} sectionKey - Clé de la section
     * @param {Object} data - Données à sauvegarder
     */
    static saveSectionData(sectionKey, data) {
        const timestamp = new Date().toISOString();

        if (data.completed !== undefined) {
            localStorage.setItem(`${sectionKey}_completed`, JSON.stringify(data.completed));
        }
        
        if (data.xp !== undefined) {
            localStorage.setItem(`${sectionKey}_xp`, JSON.stringify({
                total: data.xp,
                lastUpdate: timestamp
            }));
        }
        
        if (data.streak !== undefined) {
            localStorage.setItem(`${sectionKey}_streak`, JSON.stringify({
                currentStreak: data.streak,
                lastActivityDate: timestamp
            }));
        }
        
        if (data.hearts !== undefined) {
            localStorage.setItem(`${sectionKey}_hearts`, JSON.stringify({
                currentHearts: data.hearts,
                maxHearts: 5,
                lastUpdate: timestamp
            }));
        }

        console.log(`✅ Données sauvegardées pour ${sectionKey}:`, data);
    }

    /**
     * Récupère les statistiques globales de toutes les sections
     * @returns {Object} - Stats globales (XP total, streak max, etc.)
     */
    static getGlobalStats() {
        const sections = ['maths', 'english', 'francais', 'histoire', 'sciences'];
        
        let totalXP = 0;
        let totalCompleted = 0;
        let maxStreak = 0;
        let minHearts = 5;
        let sectionsData = {};

        sections.forEach(sectionKey => {
            const data = this.getSectionData(sectionKey);
            
            sectionsData[sectionKey] = data;
            totalXP += data.xp;
            totalCompleted += data.completed.length;
            maxStreak = Math.max(maxStreak, data.streak);
            minHearts = Math.min(minHearts, data.hearts);
        });

        const globalLevel = Math.floor(totalXP / 200) + 1;
        const totalLessons = sections.length * 15; // 5 sections × 15 leçons
        const globalProgress = Math.round((totalCompleted / totalLessons) * 100);

        return {
            totalXP,
            totalCompleted,
            totalLessons,
            globalProgress,
            globalLevel,
            maxStreak,
            minHearts,
            sections: sectionsData
        };
    }

    /**
     * Efface toutes les données d'une section
     * @param {string} sectionKey - Clé de la section à réinitialiser
     */
    static resetSection(sectionKey) {
        const keys = Object.keys(localStorage).filter(k => 
            k.startsWith(sectionKey) || k.includes(sectionKey)
        );
        
        keys.forEach(key => localStorage.removeItem(key));
        console.log(`🗑️ Section ${sectionKey} réinitialisée (${keys.length} clés supprimées)`);
    }

    /**
     * Efface TOUTES les données de progression
     * ⚠️ DANGER : Supprime toute la progression !
     */
    static resetAll() {
        if (confirm('⚠️ ATTENTION ! Supprimer TOUTE la progression ?')) {
            const sections = ['maths', 'english', 'francais', 'histoire', 'sciences'];
            sections.forEach(section => this.resetSection(section));
            
            // Supprimer aussi les clés globales
            localStorage.removeItem('global_stats');
            localStorage.removeItem('user_profile');
            
            console.log('🗑️ TOUTES les données effacées !');
            return true;
        }
        return false;
    }

    /**
     * Export des données pour sauvegarde
     * @returns {string} - JSON stringifié de toutes les données
     */
    static exportData() {
        const globalStats = this.getGlobalStats();
        const exportData = {
            version: '2.0',
            exportDate: new Date().toISOString(),
            globalStats,
            rawData: {}
        };

        // Copier toutes les clés liées aux sections
        Object.keys(localStorage).forEach(key => {
            const sections = ['maths', 'english', 'francais', 'histoire', 'sciences'];
            if (sections.some(s => key.includes(s))) {
                exportData.rawData[key] = localStorage.getItem(key);
            }
        });

        const json = JSON.stringify(exportData, null, 2);
        console.log('📦 Export généré:', json.length, 'caractères');
        
        return json;
    }

    /**
     * Import des données depuis un export
     * @param {string} jsonData - JSON exporté précédemment
     * @returns {boolean} - Succès de l'import
     */
    static importData(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            
            if (!data.version || !data.rawData) {
                throw new Error('Format d\'export invalide');
            }

            // Restaurer toutes les données
            Object.keys(data.rawData).forEach(key => {
                localStorage.setItem(key, data.rawData[key]);
            });

            console.log('✅ Import réussi !', Object.keys(data.rawData).length, 'clés restaurées');
            return true;
            
        } catch (e) {
            console.error('❌ Erreur d\'import:', e);
            return false;
        }
    }
}

// Rendre disponible globalement
if (typeof window !== 'undefined') {
    window.UnifiedStorage = UnifiedStorage;
}

console.log('✅ Module UnifiedStorage chargé');
