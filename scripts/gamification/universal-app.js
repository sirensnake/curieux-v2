/**
 * 🎮 UNIVERSAL GAMIFICATION APP
 * Orchestrateur principal qui intègre TOUS les systèmes gamifiés
 * Compatible avec TOUTES les sections
 * Version: 1.0
 * Date: 19/01/2026
 */

class UniversalGamificationApp {
    constructor(sectionName = 'default') {
        this.sectionName = sectionName;
        this.initialized = false;
        
        console.log(`🎮 UniversalGamificationApp: Initialisation pour ${sectionName}...`);
        
        // Initialiser les systèmes
        this.initializeSystems();
        
        // Configurer les événements
        this.setupEventListeners();
        
        // Intégrer avec LessonEngine si présent
        this.integrateLessonEngine();
        
        console.log(`✅ UniversalGamificationApp (${sectionName}): Prêt !`);
    }

    /**
     * 🚀 Initialiser tous les systèmes
     */
    initializeSystems() {
        // 1. Système Streaks (GLOBAL pour tout le site)
        if (typeof UniversalStreakManager !== 'undefined') {
            if (!window.globalStreakManager) {
                window.globalStreakManager = new UniversalStreakManager();
            }
            this.streakManager = window.globalStreakManager;
            console.log('✅ StreakManager global lié');
        } else {
            console.error('❌ UniversalStreakManager non chargé !');
        }

        // 2. Système Hearts (PAR SECTION)
        if (typeof UniversalHeartSystem !== 'undefined') {
            this.heartSystem = new UniversalHeartSystem(this.sectionName);
            console.log(`✅ HeartSystem (${this.sectionName}) créé`);
        } else {
            console.error('❌ UniversalHeartSystem non chargé !');
        }

        // 3. Système XP (déjà existant, global)
        if (window.xpSystem) {
            this.xpSystem = window.xpSystem;
            console.log('✅ XPSystem existant lié');
        } else {
            console.warn('⚠️ XPSystem non trouvé');
        }

        // Enregistrer activité quotidienne
        if (this.streakManager) {
            this.streakManager.recordActivity(this.sectionName);
        }
    }

    /**
     * 🎨 Initialiser les affichages dans le header
     */
    initializeDisplays() {
        const containerId = 'gamification-bar';
        
        // Initialiser badge Streaks
        if (this.streakManager) {
            this.streakManager.initializeDisplay(containerId);
        }

        // Initialiser badge Hearts
        if (this.heartSystem) {
            this.heartSystem.initializeDisplay(containerId);
        }

        console.log('✅ Affichages badges initialisés');
    }

    /**
     * 🔗 Intégrer avec LessonEngine
     */
    integrateLessonEngine() {
        // Attendre que engine soit disponible
        const waitForEngine = () => {
            if (typeof window.engine !== 'undefined' && window.engine) {
                this.integrateWithEngine(window.engine);
            } else {
                setTimeout(waitForEngine, 100);
            }
        };
        waitForEngine();
    }

    /**
     * 🎯 Intégration complète avec LessonEngine
     */
    integrateWithEngine(engine) {
        console.log('🔗 Intégration avec LessonEngine...');

        // 1. Intercepter validate() pour gérer les cœurs
        const originalValidate = engine.validate.bind(engine);
        engine.validate = () => {
            const userAnswer = engine.elements.userInput.value.trim().toLowerCase();
            const exercise = engine.lesson.exercises[engine.currentIndex];
            
            if (!userAnswer) {
                return originalValidate();
            }
            
            const isCorrect = engine.checkAnswer(userAnswer, exercise);
            
            if (!isCorrect && this.heartSystem && !window.practiceModeEnabled) {
                // Perdre un cœur sur erreur
                const hasHeartsLeft = this.heartSystem.loseHeart();
                
                if (!hasHeartsLeft) {
                    console.warn('💔 Plus de cœurs, mode libre activé');
                    window.practiceModeEnabled = true;
                }
            }
            
            return originalValidate();
        };

        // 2. Intercepter finish() pour calculer XP
        const originalFinish = engine.finish.bind(engine);
        engine.finish = () => {
            const lessonXP = this.calculateLessonXP(engine);
            
            if (this.xpSystem && lessonXP > 0) {
                this.xpSystem.addXP(this.sectionName, lessonXP, {
                    lessonTitle: engine.lesson.title,
                    timestamp: new Date().toISOString()
                });
                
                // Afficher XP dans modal victoire
                setTimeout(() => {
                    const xpAddedElement = document.getElementById('xp-added');
                    const totalXPElement = document.getElementById('total-xp-display');
                    
                    if (xpAddedElement) {
                        xpAddedElement.textContent = lessonXP;
                    }
                    if (totalXPElement && this.xpSystem) {
                        totalXPElement.textContent = this.xpSystem.getTotal();
                    }
                }, 100);
            }
            
            return originalFinish();
        };

        console.log('✅ LessonEngine intégré avec systèmes gamifiés');
    }

    /**
     * 🧮 Calculer XP pour une leçon
     */
    calculateLessonXP(engine) {
        let baseXP = 20;
        const exerciseCount = engine.lesson.exercises.length;
        
        // XP de base selon nombre d'exercices
        baseXP = exerciseCount * 10;
        
        // Bonus streak
        if (this.streakManager) {
            const currentStreak = this.streakManager.getCurrentStreak();
            if (currentStreak >= 7) {
                baseXP = Math.floor(baseXP * 1.5);
                console.log('🔥 Bonus streak 50% !');
            }
        }
        
        // Bonus cœurs restants
        if (this.heartSystem) {
            const heartsLeft = this.heartSystem.getCurrentHearts();
            const bonusPerHeart = 5;
            baseXP += heartsLeft * bonusPerHeart;
            console.log(`💖 Bonus cœurs: +${heartsLeft * bonusPerHeart} XP`);
        }
        
        console.log(`🎯 XP total calculé: ${baseXP}`);
        return baseXP;
    }

    /**
     * 📡 Configuration des événements personnalisés
     */
    setupEventListeners() {
        // Écouter événements streak
        document.addEventListener('streak:updated', (e) => {
            console.log('📡 Streak mis à jour:', e.detail);
        });

        // Écouter événements hearts
        document.addEventListener('heart:lost', (e) => {
            console.log('📡 Cœur perdu:', e.detail);
        });

        document.addEventListener('heart:gained', (e) => {
            console.log('📡 Cœur gagné:', e.detail);
        });

        // Écouter événements XP
        document.addEventListener('xp:updated', (e) => {
            console.log('📡 XP mis à jour:', e.detail);
            this.updateXPDisplay();
        });
    }

    /**
     * 🔄 Mettre à jour affichage XP
     */
    updateXPDisplay() {
        const xpDisplay = document.getElementById('xp-display');
        if (xpDisplay && this.xpSystem) {
            const sectionXP = this.xpSystem.getBySection(this.sectionName);
            const totalXP = this.xpSystem.getTotal();
            const level = this.xpSystem.getLevel();
            
            xpDisplay.innerHTML = `Niv.${level} • ${sectionXP} XP`;
            xpDisplay.title = `Total: ${totalXP} XP`;
        }
    }

    /**
     * 📊 Obtenir statistiques complètes
     */
    getStats() {
        return {
            section: this.sectionName,
            streaks: this.streakManager ? this.streakManager.getStats() : null,
            hearts: this.heartSystem ? this.heartSystem.getStats() : null,
            xp: this.xpSystem ? this.xpSystem.getStats() : null
        };
    }

    /**
     * 🎮 API Debug pour console
     */
    static createDebugAPI(appInstance) {
        return {
            getInfo() {
                const stats = appInstance.getStats();
                console.log('=== INFORMATIONS COMPLÈTES ===');
                console.log('Section:', stats.section);
                console.log('Streaks:', stats.streaks);
                console.log('Hearts:', stats.hearts);
                console.log('XP:', stats.xp);
                return stats;
            },
            
            loseHeart() {
                if (appInstance.heartSystem) {
                    return appInstance.heartSystem.loseHeart();
                }
                console.error('❌ HeartSystem non disponible');
                return false;
            },
            
            gainHeart() {
                if (appInstance.heartSystem) {
                    return appInstance.heartSystem.gainHeart();
                }
                console.error('❌ HeartSystem non disponible');
                return false;
            },
            
            addXP(amount) {
                if (appInstance.xpSystem) {
                    return appInstance.xpSystem.addXP(appInstance.sectionName, amount);
                }
                console.error('❌ XPSystem non disponible');
                return false;
            },
            
            updateStreak() {
                if (appInstance.streakManager) {
                    return appInstance.streakManager.recordActivity(appInstance.sectionName);
                }
                console.error('❌ StreakManager non disponible');
                return false;
            },
            
            resetAll() {
                if (confirm('⚠️ Réinitialiser TOUS les systèmes ?')) {
                    if (appInstance.streakManager) appInstance.streakManager.reset();
                    if (appInstance.heartSystem) appInstance.heartSystem.reset();
                    console.log('✅ Systèmes réinitialisés');
                }
            },
            
            enablePracticeMode() {
                window.practiceModeEnabled = true;
                console.log('✅ Mode entraînement activé (sans perte de cœurs)');
            },
            
            disablePracticeMode() {
                window.practiceModeEnabled = false;
                console.log('✅ Mode entraînement désactivé');
            }
        };
    }
}

// Export global
if (typeof window !== 'undefined') {
    window.UniversalGamificationApp = UniversalGamificationApp;
    console.log('✅ UniversalGamificationApp disponible globalement');
}
