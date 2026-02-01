// ========================================
// FIX UNIVERSEL BADGE XP - Version Production
// Le Monde des Curieux - 2026
// ========================================

(function() {
    'use strict';
    
    // Configuration par section
    const CONFIG = {
        section: null,
        pollingInterval: 3000,
        debugMode: false
    };
    
    let lastKnownXP = 0;
    let pollingTimer = null;
    let observer = null;
    
    // Fonction centrale : Mise à jour badge
    function updateBadgeXP() {
        const xpDisplay = document.getElementById('xp-display');
        
        if (!xpDisplay || !window.xpSystem || !CONFIG.section) {
            if (CONFIG.debugMode) {
                console.warn('⚠️ Impossible de mettre à jour le badge XP:', {
                    badgeFound: !!xpDisplay,
                    xpSystemExists: !!window.xpSystem,
                    sectionDefined: !!CONFIG.section
                });
            }
            return false;
        }
        
        const sectionXP = window.xpSystem.getBySection(CONFIG.section);
        const level = window.xpSystem.getLevel();
        
        // Mise à jour badge value (chercher l'élément spécifique)
        const xpValue = document.getElementById('xp-value');
        if (xpValue) {
            const newContent = `Niv.${level} • ${sectionXP} XP`;
            xpValue.textContent = newContent;
            
            if (CONFIG.debugMode) {
                console.log('✅ Badge XP mis à jour:', newContent);
            }
        }
        
        return true;
    }
    
    // MÉTHODE 1 : Initialisation forcée
    function initializeBadge() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                updateBadgeXP();
                if (CONFIG.debugMode) {
                    console.log('⏲️ Initialisation forcée : Badge XP affiché');
                }
            }, 1000);
        });
    }
    
    // MÉTHODE 2 : Interception addXP()
    function wrapAddXP() {
        if (window.xpSystem && typeof window.xpSystem.addXP === 'function') {
            const originalAddXP = window.xpSystem.addXP.bind(window.xpSystem);
            
            window.xpSystem.addXP = function(section, amount, metadata) {
                const result = originalAddXP(section, amount, metadata);
                
                setTimeout(() => {
                    updateBadgeXP();
                    if (CONFIG.debugMode) {
                        console.log('🎯 Interception addXP() : Badge mis à jour');
                    }
                }, 50);
                
                return result;
            };
            
            if (CONFIG.debugMode) {
                console.log('✅ addXP() intercepté avec succès');
            }
        }
    }
    
    // MÉTHODE 3 : Listeners événements
    function setupEventListeners() {
        document.addEventListener('xp:updated', () => {
            updateBadgeXP();
            if (CONFIG.debugMode) {
                console.log('📡 Événement xp:updated (document) : Badge mis à jour');
            }
        });
        
        window.addEventListener('xp:updated', () => {
            updateBadgeXP();
            if (CONFIG.debugMode) {
                console.log('📡 Événement xp:updated (window) : Badge mis à jour');
            }
        });
    }
    
    // MÉTHODE 4 : Polling automatique
    function startPolling() {
        pollingTimer = setInterval(() => {
            if (!window.xpSystem || !CONFIG.section) return;
            
            const currentXP = window.xpSystem.getBySection(CONFIG.section);
            
            if (currentXP !== lastKnownXP) {
                updateBadgeXP();
                lastKnownXP = currentXP;
                
                if (CONFIG.debugMode) {
                    console.log('🔄 Polling : Changement XP détecté, badge mis à jour');
                }
            }
        }, CONFIG.pollingInterval);
        
        if (CONFIG.debugMode) {
            console.log('🔄 Polling démarré (intervalle:', CONFIG.pollingInterval, 'ms)');
        }
    }
    
    // MÉTHODE 5 : MutationObserver
    function setupMutationObserver() {
        const xpDisplay = document.getElementById('xp-display');
        
        if (!xpDisplay) return;
        
        observer = new MutationObserver(() => {
            if (!window.xpSystem || !CONFIG.section) return;
            
            const xpValue = document.getElementById('xp-value');
            if (!xpValue) return;
            
            const displayed = xpValue.textContent;
            const expected = `Niv.${window.xpSystem.getLevel()} • ${window.xpSystem.getBySection(CONFIG.section)} XP`;
            
            if (displayed !== expected) {
                setTimeout(() => {
                    updateBadgeXP();
                    if (CONFIG.debugMode) {
                        console.log('👁️ Observer : Badge corrigé');
                    }
                }, 100);
            }
        });
        
        observer.observe(xpDisplay, {
            childList: true,
            characterData: true,
            subtree: true
        });
        
        if (CONFIG.debugMode) {
            console.log('👁️ MutationObserver installé');
        }
    }
    
    // API PUBLIQUE
    window.BadgeXPFix = {
        init: function(sectionName, options = {}) {
            CONFIG.section = sectionName;
            CONFIG.debugMode = options.debug || false;
            CONFIG.pollingInterval = options.pollingInterval || 3000;
            
            if (CONFIG.debugMode) {
                console.log('🔧 BadgeXPFix initialisé pour section:', sectionName);
            }
            
            initializeBadge();
            setupEventListeners();
            startPolling();
            
            setTimeout(() => {
                wrapAddXP();
                setupMutationObserver();
            }, 500);
        },
        
        update: updateBadgeXP,
        
        stopPolling: function() {
            if (pollingTimer) {
                clearInterval(pollingTimer);
                pollingTimer = null;
                if (CONFIG.debugMode) {
                    console.log('⏹️ Polling arrêté');
                }
            }
        },
        
        stopObserver: function() {
            if (observer) {
                observer.disconnect();
                observer = null;
                if (CONFIG.debugMode) {
                    console.log('⏹️ Observer arrêté');
                }
            }
        },
        
        setDebug: function(enabled) {
            CONFIG.debugMode = enabled;
        }
    };
})();