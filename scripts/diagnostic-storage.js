/**
 * DIAGNOSTIC STORAGE TOOL
 * Analyse complète de l'état actuel du localStorage
 * Détection d'incohérences et génération rapport
 */

class StorageDiagnostic {
    constructor() {
        this.report = {
            timestamp: new Date().toISOString(),
            totalKeys: 0,
            gamificationKeys: [],
            otherKeys: [],
            systems: {
                unifiedStorage: { found: false, keys: [] },
                xpProgression: { found: false, keys: [] },
                progressionSystem: { found: false, keys: [] },
                sections: {}
            },
            issues: [],
            recommendations: []
        };
    }

    /**
     * Exécute diagnostic complet
     */
    run() {
        console.log('🔍 Démarrage diagnostic localStorage...');
        
        this.scanAllKeys();
        this.analyzeUnifiedStorage();
        this.analyzeXPProgression();
        this.analyzeProgressionSystem();
        this.analyzeSections();
        this.detectIssues();
        this.generateRecommendations();
        
        console.log('✅ Diagnostic terminé');
        return this.report;
    }

    /**
     * Scanner toutes les clés localStorage
     */
    scanAllKeys() {
        const sections = ['maths', 'english', 'francais', 'histoire', 'sciences'];
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            this.report.totalKeys++;
            
            // Classer par type
            const isGamification = sections.some(s => key.includes(s)) || 
                                  key.includes('xp') || 
                                  key.includes('progress') ||
                                  key.includes('level') ||
                                  key.includes('streak') ||
                                  key.includes('hearts');
            
            if (isGamification) {
                this.report.gamificationKeys.push(key);
            } else {
                this.report.otherKeys.push(key);
            }
        }
        
        console.log(`📊 ${this.report.totalKeys} clés trouvées (${this.report.gamificationKeys.length} gamification)`);
    }

    /**
     * Analyser données UnifiedStorage
     */
    analyzeUnifiedStorage() {
        const sections = ['maths', 'english', 'francais', 'histoire', 'sciences'];
        
        sections.forEach(section => {
            const keys = {
                completed: `${section}_completed`,
                xp: `${section}_xp`,
                streak: `${section}_streak`,
                hearts: `${section}_hearts`
            };
            
            const sectionData = {
                section: section,
                keys: {},
                valid: true,
                data: {}
            };
            
            // Vérifier chaque clé
            Object.entries(keys).forEach(([type, key]) => {
                const value = localStorage.getItem(key);
                sectionData.keys[type] = {
                    key: key,
                    exists: value !== null,
                    value: value
                };
                
                if (value) {
                    this.report.systems.unifiedStorage.found = true;
                    this.report.systems.unifiedStorage.keys.push(key);
                    
                    try {
                        sectionData.data[type] = JSON.parse(value);
                    } catch (e) {
                        sectionData.data[type] = value;
                        sectionData.valid = false;
                        this.report.issues.push({
                            severity: 'warning',
                            type: 'PARSE_ERROR',
                            key: key,
                            message: `Impossible de parser ${key}`
                        });
                    }
                }
            });
            
            this.report.systems.sections[section] = sectionData;
        });
    }

    /**
     * Analyser système XPProgression
     */
    analyzeXPProgression() {
        const key = 'xpProgressData';
        const value = localStorage.getItem(key);
        
        if (value) {
            this.report.systems.xpProgression.found = true;
            this.report.systems.xpProgression.keys.push(key);
            
            try {
                this.report.systems.xpProgression.data = JSON.parse(value);
            } catch (e) {
                this.report.issues.push({
                    severity: 'error',
                    type: 'PARSE_ERROR',
                    key: key,
                    message: 'Données XPProgression corrompues'
                });
            }
        }
    }

    /**
     * Analyser système Progression
     */
    analyzeProgressionSystem() {
        const key = 'userProgression';
        const value = localStorage.getItem(key);
        
        if (value) {
            this.report.systems.progressionSystem.found = true;
            this.report.systems.progressionSystem.keys.push(key);
            
            try {
                this.report.systems.progressionSystem.data = JSON.parse(value);
            } catch (e) {
                this.report.issues.push({
                    severity: 'error',
                    type: 'PARSE_ERROR',
                    key: key,
                    message: 'Données ProgressionSystem corrompues'
                });
            }
        }
    }

    /**
     * Analyser données par section
     */
    analyzeSections() {
        const sections = Object.keys(this.report.systems.sections);
        
        sections.forEach(section => {
            const data = this.report.systems.sections[section];
            
            // Calculer XP total section
            if (data.data.xp) {
                const xpValue = typeof data.data.xp === 'object' ? 
                              data.data.xp.total || 0 : 
                              parseInt(data.data.xp) || 0;
                data.totalXP = xpValue;
            }
            
            // Compter leçons complétées
            if (data.data.completed) {
                const completed = Array.isArray(data.data.completed) ? 
                                data.data.completed : 
                                data.data.completed.completed || [];
                data.completedCount = completed.length;
            }
        });
    }

    /**
     * Détecter incohérences
     */
    detectIssues() {
        // Vérifier cohérence XP global vs sections
        if (this.report.systems.xpProgression.found) {
            const globalXP = this.report.systems.xpProgression.data?.totalXP || 0;
            
            const sectionsXP = Object.values(this.report.systems.sections)
                .reduce((sum, section) => sum + (section.totalXP || 0), 0);
            
            if (globalXP !== sectionsXP && sectionsXP > 0) {
                this.report.issues.push({
                    severity: 'warning',
                    type: 'XP_MISMATCH',
                    message: `XP global (${globalXP}) ≠ XP sections (${sectionsXP})`,
                    globalXP: globalXP,
                    sectionsXP: sectionsXP,
                    difference: Math.abs(globalXP - sectionsXP)
                });
            }
        }

        // Vérifier cohérence niveaux
        if (this.report.systems.xpProgression.found && 
            this.report.systems.progressionSystem.found) {
            
            const xpLevel = this.report.systems.xpProgression.data?.level || 1;
            const progressionLevel = this.report.systems.progressionSystem.data?.currentLevel || 1;
            
            if (xpLevel !== progressionLevel) {
                this.report.issues.push({
                    severity: 'warning',
                    type: 'LEVEL_MISMATCH',
                    message: `Niveau XPSystem (${xpLevel}) ≠ Niveau ProgressionSystem (${progressionLevel})`,
                    xpLevel: xpLevel,
                    progressionLevel: progressionLevel
                });
            }
        }

        // Vérifier sections sans données
        Object.entries(this.report.systems.sections).forEach(([section, data]) => {
            const hasData = data.keys.completed?.exists || 
                           data.keys.xp?.exists || 
                           data.keys.streak?.exists;
            
            if (!hasData) {
                this.report.issues.push({
                    severity: 'info',
                    type: 'EMPTY_SECTION',
                    message: `Section "${section}" sans données`,
                    section: section
                });
            }
        });

        // Vérifier valeurs aberrantes
        Object.entries(this.report.systems.sections).forEach(([section, data]) => {
            if (data.totalXP > 50000) {
                this.report.issues.push({
                    severity: 'warning',
                    type: 'SUSPICIOUS_VALUE',
                    message: `XP anormalement élevé pour "${section}" (${data.totalXP})`,
                    section: section,
                    value: data.totalXP
                });
            }
        });
    }

    /**
     * Générer recommandations
     */
    generateRecommendations() {
        const systemsCount = [
            this.report.systems.unifiedStorage.found,
            this.report.systems.xpProgression.found,
            this.report.systems.progressionSystem.found
        ].filter(Boolean).length;

        if (systemsCount > 1) {
            this.report.recommendations.push({
                priority: 'high',
                type: 'CONSOLIDATION',
                message: `${systemsCount} systèmes de gestion détectés → Migration vers MasterGameSystem recommandée`,
                action: 'Utiliser MasterGameSystem pour unifier les données'
            });
        }

        const errorCount = this.report.issues.filter(i => i.severity === 'error').length;
        if (errorCount > 0) {
            this.report.recommendations.push({
                priority: 'critical',
                type: 'DATA_REPAIR',
                message: `${errorCount} erreur(s) critique(s) détectée(s)`,
                action: 'Exécuter outil de réparation avant migration'
            });
        }

        const warningCount = this.report.issues.filter(i => i.severity === 'warning').length;
        if (warningCount > 0) {
            this.report.recommendations.push({
                priority: 'medium',
                type: 'DATA_SYNC',
                message: `${warningCount} incohérence(s) détectée(s)`,
                action: 'Synchroniser les données avant migration'
            });
        }

        if (this.report.gamificationKeys.length > 20) {
            this.report.recommendations.push({
                priority: 'low',
                type: 'CLEANUP',
                message: `${this.report.gamificationKeys.length} clés gamification → Nettoyage recommandé`,
                action: 'Supprimer clés obsolètes après migration'
            });
        }
    }

    /**
     * Afficher rapport console formaté
     */
    printReport() {
        console.log('\n='.repeat(60));
        console.log('📋 RAPPORT DIAGNOSTIC LOCALSTORAGE');
        console.log('='.repeat(60));
        
        console.log(`\n📊 Vue d'ensemble:`);
        console.log(`   Total clés: ${this.report.totalKeys}`);
        console.log(`   Clés gamification: ${this.report.gamificationKeys.length}`);
        console.log(`   Autres clés: ${this.report.otherKeys.length}`);
        
        console.log(`\n🔧 Systèmes détectés:`);
        console.log(`   UnifiedStorage: ${this.report.systems.unifiedStorage.found ? '✅' : '❌'} (${this.report.systems.unifiedStorage.keys.length} clés)`);
        console.log(`   XPProgression: ${this.report.systems.xpProgression.found ? '✅' : '❌'}`);
        console.log(`   ProgressionSystem: ${this.report.systems.progressionSystem.found ? '✅' : '❌'}`);
        
        console.log(`\n📚 Sections:`);
        Object.entries(this.report.systems.sections).forEach(([section, data]) => {
            const xp = data.totalXP || 0;
            const completed = data.completedCount || 0;
            console.log(`   ${section}: ${xp} XP, ${completed} leçons`);
        });
        
        if (this.report.issues.length > 0) {
            console.log(`\n⚠️ Problèmes détectés (${this.report.issues.length}):`);
            this.report.issues.forEach((issue, i) => {
                const icon = issue.severity === 'error' ? '❌' : 
                           issue.severity === 'warning' ? '⚠️' : 'ℹ️';
                console.log(`   ${i+1}. ${icon} [${issue.type}] ${issue.message}`);
            });
        } else {
            console.log(`\n✅ Aucun problème détecté`);
        }
        
        if (this.report.recommendations.length > 0) {
            console.log(`\n💡 Recommandations (${this.report.recommendations.length}):`);
            this.report.recommendations.forEach((rec, i) => {
                const icon = rec.priority === 'critical' ? '🚨' :
                           rec.priority === 'high' ? '⚡' :
                           rec.priority === 'medium' ? '⚠️' : 'ℹ️';
                console.log(`   ${i+1}. ${icon} ${rec.message}`);
                console.log(`      → ${rec.action}`);
            });
        }
        
        console.log('\n' + '='.repeat(60));
        console.log('📄 Rapport complet disponible: diagnostic.report');
        console.log('='.repeat(60) + '\n');
    }

    /**
     * Exporter rapport JSON
     */
    exportJSON() {
        return JSON.stringify(this.report, null, 2);
    }

    /**
     * Sauvegarder rapport dans localStorage
     */
    saveReport() {
        const reportKey = 'diagnostic_report_' + Date.now();
        localStorage.setItem(reportKey, this.exportJSON());
        console.log(`💾 Rapport sauvegardé: ${reportKey}`);
        return reportKey;
    }
}

// Export global
if (typeof window !== 'undefined') {
    window.StorageDiagnostic = StorageDiagnostic;
}

// Fonction helper pour exécution rapide
window.runDiagnostic = function() {
    const diagnostic = new StorageDiagnostic();
    diagnostic.report = diagnostic.run();
    diagnostic.printReport();
    diagnostic.saveReport();
    return diagnostic.report;
};

console.log('✅ Outil Diagnostic Storage chargé');
console.log('💡 Utilisation: runDiagnostic()');
