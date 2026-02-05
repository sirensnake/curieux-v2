/**
 * DATA MIGRATOR - Le Monde des Curieux
 * Migration données v1/v2 → MasterGameSystem v3.0
 * Conserve toute la progression utilisateur
 */

class DataMigrator {
    constructor() {
        this.masterSystem = null;
        this.migrationReport = {
            timestamp: Date.now(),
            success: false,
            errors: [],
            warnings: [],
            migrated: {
                sections: 0,
                totalXP: 0,
                totalLessons: 0
            },
            backupKey: null
        };
    }

    /**
     * Exécute la migration complète
     */
    async migrate() {
        console.log('🔄 Démarrage migration vers MasterGameSystem v3.0...');
        
        try {
            // 1. Diagnostic préalable
            console.log('📋 Étape 1/6: Diagnostic...');
            const diagnostic = new StorageDiagnostic();
            const report = diagnostic.run();
            
            if (report.issues.filter(i => i.severity === 'error').length > 0) {
                throw new Error('Erreurs critiques détectées - réparation nécessaire');
            }
            
            // 2. Backup des données existantes
            console.log('💾 Étape 2/6: Création backup...');
            this.migrationReport.backupKey = this.createFullBackup();
            
            // 3. Initialiser MasterGameSystem
            console.log('🎮 Étape 3/6: Initialisation système...');
            this.masterSystem = new MasterGameSystem();
            
            // 4. Migration données sections
            console.log('📚 Étape 4/6: Migration sections...');
            await this.migrateSections();
            
            // 5. Migration données globales
            console.log('🌍 Étape 5/6: Migration données globales...');
            await this.migrateGlobalData();
            
            // 6. Synchronisation et validation
            console.log('✅ Étape 6/6: Synchronisation finale...');
            this.masterSystem.syncGlobalXP();
            this.masterSystem.save();
            
            // Validation post-migration
            this.validate();
            
            this.migrationReport.success = true;
            console.log('🎉 Migration réussie!');
            
        } catch (error) {
            console.error('❌ Erreur migration:', error);
            this.migrationReport.errors.push({
                step: 'migration',
                message: error.message,
                stack: error.stack
            });
            
            // Tentative rollback
            this.rollback();
        }
        
        this.printMigrationReport();
        return this.migrationReport;
    }

    /**
     * Crée un backup complet avant migration
     */
    createFullBackup() {
        const backupData = {};
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            backupData[key] = localStorage.getItem(key);
        }
        
        const backupKey = `full_backup_pre_migration_${Date.now()}`;
        localStorage.setItem(backupKey, JSON.stringify(backupData));
        
        console.log(`💾 Backup complet créé: ${backupKey}`);
        return backupKey;
    }

    /**
     * Migre les données par section
     */
    async migrateSections() {
        const sections = ['maths', 'english', 'francais', 'histoire', 'sciences'];
        
        for (const section of sections) {
            try {
                const legacyData = this.extractSectionData(section);
                
                if (legacyData) {
                    this.masterSystem.data.sections[section] = {
                        ...this.masterSystem.data.sections[section],
                        ...legacyData
                    };
                    
                    this.migrationReport.migrated.sections++;
                    this.migrationReport.migrated.totalXP += legacyData.xp || 0;
                    this.migrationReport.migrated.totalLessons += legacyData.completed?.length || 0;
                    
                    console.log(`✅ ${section}: ${legacyData.xp || 0} XP, ${legacyData.completed?.length || 0} leçons`);
                } else {
                    console.log(`ℹ️ ${section}: Aucune donnée existante`);
                }
                
            } catch (error) {
                this.migrationReport.warnings.push({
                    section: section,
                    message: `Erreur migration section: ${error.message}`
                });
                console.warn(`⚠️ ${section}: ${error.message}`);
            }
        }
    }

    /**
     * Extrait les données d'une section depuis anciens systèmes
     */
    extractSectionData(section) {
        const data = {
            completed: [],
            xp: 0,
            streak: 0,
            hearts: 5,
            lastActivity: null
        };
        
        let foundData = false;
        
        // Essayer différents formats de clés
        const possibleKeys = {
            completed: [
                `${section}_completed`,
                `${section}Completed`,
                `lessonEngine_${section}_completed`
            ],
            xp: [
                `${section}_xp`,
                `${section}XP`,
                `lessonEngine_${section}_xp`
            ],
            streak: [
                `${section}_streak`,
                `${section}Streak`,
                `${section}_daily_streak`
            ],
            hearts: [
                `${section}_hearts`,
                `${section}Hearts`,
                `${section}_lives`
            ]
        };
        
        // Extraire completed
        for (const key of possibleKeys.completed) {
            const stored = localStorage.getItem(key);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed)) {
                        data.completed = parsed;
                    } else if (parsed.completed && Array.isArray(parsed.completed)) {
                        data.completed = parsed.completed;
                    }
                    foundData = true;
                    break;
                } catch (e) {
                    console.warn(`⚠️ Parse error ${key}`);
                }
            }
        }
        
        // Extraire XP
        for (const key of possibleKeys.xp) {
            const stored = localStorage.getItem(key);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    data.xp = parsed.total || parsed.xp || parsed || 0;
                    foundData = true;
                    break;
                } catch (e) {
                    data.xp = parseInt(stored) || 0;
                    if (data.xp > 0) foundData = true;
                }
            }
        }
        
        // Extraire Streak
        for (const key of possibleKeys.streak) {
            const stored = localStorage.getItem(key);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    data.streak = parsed.currentStreak || parsed.streak || parsed || 0;
                    if (parsed.lastActivityDate) {
                        data.lastActivity = new Date(parsed.lastActivityDate).getTime();
                    }
                    foundData = true;
                    break;
                } catch (e) {
                    data.streak = parseInt(stored) || 0;
                    if (data.streak > 0) foundData = true;
                }
            }
        }
        
        // Extraire Hearts
        for (const key of possibleKeys.hearts) {
            const stored = localStorage.getItem(key);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    data.hearts = parsed.currentHearts || parsed.hearts || parsed || 5;
                    foundData = true;
                    break;
                } catch (e) {
                    data.hearts = parseInt(stored) || 5;
                }
            }
        }
        
        return foundData ? data : null;
    }

    /**
     * Migre les données globales
     */
    async migrateGlobalData() {
        // XPProgressionSystem
        const xpProgressData = localStorage.getItem('xpProgressData');
        if (xpProgressData) {
            try {
                const xpData = JSON.parse(xpProgressData);
                
                // On ne migre PAS directement le totalXP car il sera recalculé
                // via syncGlobalXP() depuis les sections
                
                console.log('✅ XPProgressionSystem data détectée');
            } catch (e) {
                this.migrationReport.warnings.push({
                    system: 'XPProgressionSystem',
                    message: 'Données corrompues - ignorées'
                });
            }
        }
        
        // ProgressionSystem
        const userProgression = localStorage.getItem('userProgression');
        if (userProgression) {
            try {
                const progData = JSON.parse(userProgression);
                
                if (progData.levelUpHistory) {
                    this.masterSystem.data.progression.levelUpHistory = progData.levelUpHistory;
                }
                
                console.log('✅ ProgressionSystem data migrée');
            } catch (e) {
                this.migrationReport.warnings.push({
                    system: 'ProgressionSystem',
                    message: 'Données corrompues - ignorées'
                });
            }
        }
    }

    /**
     * Valide la migration
     */
    validate() {
        const stats = this.masterSystem.getGlobalStats();
        
        // Vérifier que XP > 0 si leçons complétées
        if (this.migrationReport.migrated.totalLessons > 0 && stats.totalXP === 0) {
            this.migrationReport.warnings.push({
                validation: 'xp_check',
                message: 'Leçons complétées mais XP = 0'
            });
        }
        
        // Vérifier cohérence sections
        Object.entries(this.masterSystem.data.sections).forEach(([section, data]) => {
            if (data.completed.length > data.lessonsTotal) {
                this.migrationReport.warnings.push({
                    validation: 'lessons_count',
                    section: section,
                    message: `Plus de leçons complétées (${data.completed.length}) que prévu (${data.lessonsTotal})`
                });
            }
        });
        
        console.log('✅ Validation terminée');
    }

    /**
     * Rollback en cas d'erreur
     */
    rollback() {
        console.warn('🔙 Tentative rollback...');
        
        if (!this.migrationReport.backupKey) {
            console.error('❌ Pas de backup disponible!');
            return false;
        }
        
        try {
            const backupData = localStorage.getItem(this.migrationReport.backupKey);
            if (!backupData) {
                throw new Error('Backup introuvable');
            }
            
            const data = JSON.parse(backupData);
            
            // Restaurer toutes les clés
            Object.entries(data).forEach(([key, value]) => {
                localStorage.setItem(key, value);
            });
            
            // Supprimer MasterGameSystem
            localStorage.removeItem('masterGameSystem_v3');
            
            console.log('✅ Rollback réussi - données restaurées');
            return true;
            
        } catch (error) {
            console.error('❌ Rollback échoué:', error);
            return false;
        }
    }

    /**
     * Affiche rapport de migration
     */
    printMigrationReport() {
        console.log('\n' + '='.repeat(60));
        console.log('📋 RAPPORT DE MIGRATION');
        console.log('='.repeat(60));
        
        console.log(`\nStatut: ${this.migrationReport.success ? '✅ SUCCÈS' : '❌ ÉCHEC'}`);
        console.log(`Date: ${new Date(this.migrationReport.timestamp).toLocaleString()}`);
        console.log(`Backup: ${this.migrationReport.backupKey || 'Aucun'}`);
        
        console.log('\n📊 Données migrées:');
        console.log(`   Sections: ${this.migrationReport.migrated.sections}/5`);
        console.log(`   XP Total: ${this.migrationReport.migrated.totalXP}`);
        console.log(`   Leçons: ${this.migrationReport.migrated.totalLessons}`);
        
        if (this.migrationReport.warnings.length > 0) {
            console.log(`\n⚠️ Avertissements (${this.migrationReport.warnings.length}):`);
            this.migrationReport.warnings.forEach((w, i) => {
                console.log(`   ${i+1}. ${w.message || JSON.stringify(w)}`);
            });
        }
        
        if (this.migrationReport.errors.length > 0) {
            console.log(`\n❌ Erreurs (${this.migrationReport.errors.length}):`);
            this.migrationReport.errors.forEach((e, i) => {
                console.log(`   ${i+1}. ${e.message}`);
            });
        }
        
        if (this.migrationReport.success) {
            console.log('\n✅ Migration terminée avec succès!');
            console.log('💡 Vous pouvez maintenant utiliser: window.gameSystem = new MasterGameSystem()');
        } else {
            console.log('\n❌ Migration échouée');
            console.log('💡 Les données originales ont été préservées');
        }
        
        console.log('='.repeat(60) + '\n');
    }

    /**
     * Nettoyage post-migration
     */
    cleanup() {
        if (!confirm('⚠️ Supprimer les anciennes données? (Sauvegarde sera conservée)')) {
            return false;
        }
        
        const keysToRemove = [];
        const sections = ['maths', 'english', 'francais', 'histoire', 'sciences'];
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            
            // Garder seulement MasterGameSystem, userId et backups
            if (key !== 'masterGameSystem_v3' && 
                key !== 'curio_userId' && 
                !key.startsWith('backup_') &&
                !key.startsWith('full_backup_')) {
                
                // Vérifier si c'est une clé de section
                if (sections.some(s => key.includes(s))) {
                    keysToRemove.push(key);
                } else if (key === 'xpProgressData' || key === 'userProgression') {
                    keysToRemove.push(key);
                }
            }
        }
        
        keysToRemove.forEach(key => {
            localStorage.removeItem(key);
        });
        
        console.log(`🗑️ Nettoyage terminé: ${keysToRemove.length} anciennes clés supprimées`);
        console.log('💾 Backups conservés pour sécurité');
        
        return true;
    }
}

// Export global
if (typeof window !== 'undefined') {
    window.DataMigrator = DataMigrator;
}

// Fonction helper migration complète
window.runMigration = async function() {
    console.log('🚀 Lancement migration complète...\n');
    
    const migrator = new DataMigrator();
    const report = await migrator.migrate();
    
    if (report.success) {
        console.log('\n💡 Migration réussie! Pour nettoyer les anciennes données:');
        console.log('   migrator.cleanup()');
        console.log('\n💡 Pour initialiser le nouveau système:');
        console.log('   window.gameSystem = new MasterGameSystem()');
    }
    
    return report;
};

console.log('✅ DataMigrator chargé');
console.log('💡 Utilisation: runMigration()');
