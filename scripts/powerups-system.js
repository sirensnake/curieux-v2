/**
 * SYSTÈME DE POWER-UPS - Le Monde des Curieux
 * Gestion power-ups avec coûts, cooldowns, effets temporaires
 * Intégration XP system et Hearts system
 */

class PowerUpSystem {
    constructor() {
        this.powerUps = this.initPowerUps();
        this.userPowerUps = this.loadUserPowerUps();
    }

    /**
     * Définition des 3 power-ups
     */
    initPowerUps() {
        return {
            recover_heart: {
                id: 'recover_heart',
                name: '❤️ Récupération',
                description: 'Récupère 1 cœur immédiatement',
                icon: '❤️',
                costType: 'xp', // xp ou heart
                cost: 50,
                cooldown: 3600000, // 1 heure (ms)
                usageLimit: null, // Illimité (si cooldown respecté)
                effect: 'instant' // instant ou duration
            },

            double_xp: {
                id: 'double_xp',
                name: '✨ Double XP',
                description: 'Points doublés pendant 30 minutes',
                icon: '✨',
                costType: 'xp',
                cost: 100,
                cooldown: 86400000, // 24 heures (ms)
                duration: 1800000, // 30 minutes (ms)
                usageLimit: null,
                effect: 'duration'
            },

            hint: {
                id: 'hint',
                name: '💡 Indice',
                description: 'Élimine 2 mauvaises réponses',
                icon: '💡',
                costType: 'heart',
                cost: 1,
                cooldown: 0, // Pas de cooldown
                usageLimit: 1, // 1 fois par quiz
                effect: 'instant'
            }
        };
    }

    /**
     * Charger power-ups utilisateur depuis localStorage
     */
    loadUserPowerUps() {
        const saved = localStorage.getItem('userPowerUps');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            usage: {}, // { powerUpId: [timestamps] }
            active: {}, // { powerUpId: { expiresAt: timestamp, ... } }
            stats: {
                totalUsed: 0,
                byPowerUp: {}
            }
        };
    }

    /**
     * Sauvegarder power-ups utilisateur
     */
    saveUserPowerUps() {
        localStorage.setItem('userPowerUps', JSON.stringify(this.userPowerUps));
    }

    /**
     * Obtenir XP total utilisateur
     */
    getUserXP() {
        const xpData = localStorage.getItem('section-xp-data');
        if (!xpData) return 0;
        
        const xp = JSON.parse(xpData);
        return Object.values(xp).reduce((sum, val) => sum + val, 0);
    }

    /**
     * Obtenir hearts actuels utilisateur
     */
    getUserHearts() {
        const heartsData = localStorage.getItem('hearts');
        if (!heartsData) return 5; // Défaut
        
        const hearts = JSON.parse(heartsData);
        return hearts.current || 5;
    }

    /**
     * Vérifier si power-up disponible
     */
    canUsePowerUp(powerUpId) {
        const powerUp = this.powerUps[powerUpId];
        if (!powerUp) return { available: false, reason: 'Power-up inexistant' };

        const now = Date.now();

        // Vérifier coût
        if (powerUp.costType === 'xp') {
            const userXP = this.getUserXP();
            if (userXP < powerUp.cost) {
                return { 
                    available: false, 
                    reason: `XP insuffisant (besoin ${powerUp.cost}, tu as ${userXP})` 
                };
            }
        } else if (powerUp.costType === 'heart') {
            const userHearts = this.getUserHearts();
            if (userHearts < powerUp.cost) {
                return { 
                    available: false, 
                    reason: `Cœurs insuffisants (besoin ${powerUp.cost}, tu as ${userHearts})` 
                };
            }
        }

        // Vérifier cooldown
        if (powerUp.cooldown > 0) {
            const lastUsage = this.getLastUsage(powerUpId);
            if (lastUsage) {
                const timeSinceLastUse = now - lastUsage;
                if (timeSinceLastUse < powerUp.cooldown) {
                    const remainingTime = powerUp.cooldown - timeSinceLastUse;
                    return {
                        available: false,
                        reason: 'En cooldown',
                        remainingTime: remainingTime,
                        remainingTimeFormatted: this.formatTime(remainingTime)
                    };
                }
            }
        }

        // Vérifier si déjà actif (pour power-ups duration)
        if (powerUp.effect === 'duration') {
            const active = this.userPowerUps.active[powerUpId];
            if (active && active.expiresAt > now) {
                return {
                    available: false,
                    reason: 'Déjà actif',
                    remainingTime: active.expiresAt - now
                };
            }
        }

        return { available: true };
    }

    /**
     * Utiliser un power-up
     */
    usePowerUp(powerUpId, context = {}) {
        const powerUp = this.powerUps[powerUpId];
        if (!powerUp) {
            return { success: false, message: 'Power-up inexistant' };
        }

        // Vérifier disponibilité
        const check = this.canUsePowerUp(powerUpId);
        if (!check.available) {
            return { success: false, message: check.reason, ...check };
        }

        const now = Date.now();

        // Payer le coût
        if (!this.payCost(powerUp)) {
            return { success: false, message: 'Impossible de payer le coût' };
        }

        // Appliquer l'effet
        const effect = this.applyEffect(powerUpId, context);

        // Enregistrer utilisation
        if (!this.userPowerUps.usage[powerUpId]) {
            this.userPowerUps.usage[powerUpId] = [];
        }
        this.userPowerUps.usage[powerUpId].push(now);

        // Stats
        this.userPowerUps.stats.totalUsed++;
        if (!this.userPowerUps.stats.byPowerUp[powerUpId]) {
            this.userPowerUps.stats.byPowerUp[powerUpId] = 0;
        }
        this.userPowerUps.stats.byPowerUp[powerUpId]++;

        // Si effet duration, enregistrer
        if (powerUp.effect === 'duration') {
            this.userPowerUps.active[powerUpId] = {
                activatedAt: now,
                expiresAt: now + powerUp.duration
            };
        }

        this.saveUserPowerUps();

        return { 
            success: true, 
            message: `${powerUp.name} activé !`,
            effect: effect
        };
    }

    /**
     * Payer le coût d'un power-up
     */
    payCost(powerUp) {
        if (powerUp.costType === 'xp') {
            // Déduire XP (on déduit des badges car c'est du bonus)
            const xpData = localStorage.getItem('section-xp-data');
            let xp = xpData ? JSON.parse(xpData) : {};
            
            if (!xp.badges) xp.badges = 0;
            xp.badges = Math.max(0, xp.badges - powerUp.cost);
            
            localStorage.setItem('section-xp-data', JSON.stringify(xp));
            return true;

        } else if (powerUp.costType === 'heart') {
            // Déduire cœur
            const heartsData = localStorage.getItem('hearts');
            if (!heartsData) return false;
            
            const hearts = JSON.parse(heartsData);
            if (hearts.current < powerUp.cost) return false;
            
            hearts.current -= powerUp.cost;
            localStorage.setItem('hearts', JSON.stringify(hearts));
            return true;
        }

        return false;
    }

    /**
     * Appliquer effet d'un power-up
     */
    applyEffect(powerUpId, context = {}) {
        const powerUp = this.powerUps[powerUpId];

        switch (powerUpId) {
            case 'recover_heart': {
                // Récupérer 1 cœur
                const heartsData = localStorage.getItem('hearts');
                const hearts = heartsData ? JSON.parse(heartsData) : { current: 5, max: 5 };
                
                hearts.current = Math.min(hearts.current + 1, hearts.max);
                localStorage.setItem('hearts', JSON.stringify(hearts));
                
                return { heartsRecovered: 1, newHearts: hearts.current };
            }

            case 'double_xp': {
                // Activer bonus XP x2
                // L'effet sera vérifié par le XP system lors de l'ajout de XP
                return { multiplier: 2, duration: powerUp.duration };
            }

            case 'hint': {
                // Éliminer 2 mauvaises réponses
                // L'effet sera appliqué par le quiz system
                return { wrongAnswersToEliminate: 2 };
            }

            default:
                return {};
        }
    }

    /**
     * Vérifier si un power-up est actif
     */
    isActive(powerUpId) {
        const active = this.userPowerUps.active[powerUpId];
        if (!active) return false;

        const now = Date.now();
        if (active.expiresAt > now) {
            return {
                active: true,
                remainingTime: active.expiresAt - now,
                remainingTimeFormatted: this.formatTime(active.expiresAt - now)
            };
        }

        // Expiré, nettoyer
        delete this.userPowerUps.active[powerUpId];
        this.saveUserPowerUps();
        return false;
    }

    /**
     * Obtenir multiplicateur XP actif
     */
    getXPMultiplier() {
        const doubleXP = this.isActive('double_xp');
        return doubleXP ? 2 : 1;
    }

    /**
     * Obtenir dernière utilisation d'un power-up
     */
    getLastUsage(powerUpId) {
        const usage = this.userPowerUps.usage[powerUpId];
        if (!usage || usage.length === 0) return null;
        return usage[usage.length - 1];
    }

    /**
     * Obtenir tous les power-ups avec leur statut
     */
    getAllPowerUps() {
        return Object.keys(this.powerUps).map(id => {
            const powerUp = this.powerUps[id];
            const available = this.canUsePowerUp(id);
            const active = this.isActive(id);
            const usageCount = this.userPowerUps.stats.byPowerUp[id] || 0;

            return {
                ...powerUp,
                available: available.available,
                reason: available.reason || null,
                remainingCooldown: available.remainingTime || 0,
                remainingCooldownFormatted: available.remainingTimeFormatted || null,
                active: active ? active.active : false,
                activeRemaining: active ? active.remainingTime : 0,
                usageCount: usageCount
            };
        });
    }

    /**
     * Formater temps (ms) en texte lisible
     */
    formatTime(ms) {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        if (hours > 0) {
            return `${hours}h ${minutes % 60}min`;
        } else if (minutes > 0) {
            return `${minutes}min`;
        } else {
            return `${seconds}s`;
        }
    }

    /**
     * Statistiques power-ups
     */
    getStats() {
        return {
            totalUsed: this.userPowerUps.stats.totalUsed,
            byPowerUp: this.userPowerUps.stats.byPowerUp,
            activeNow: Object.keys(this.userPowerUps.active).filter(id => this.isActive(id))
        };
    }

    /**
     * Nettoyer power-ups expirés
     */
    cleanupExpired() {
        const now = Date.now();
        let cleaned = 0;

        Object.keys(this.userPowerUps.active).forEach(powerUpId => {
            const active = this.userPowerUps.active[powerUpId];
            if (active.expiresAt <= now) {
                delete this.userPowerUps.active[powerUpId];
                cleaned++;
            }
        });

        if (cleaned > 0) {
            this.saveUserPowerUps();
            console.log(`🧹 ${cleaned} power-up(s) expiré(s) nettoyé(s)`);
        }
    }

    /**
     * Réinitialiser power-ups (dev/debug)
     */
    reset() {
        this.userPowerUps = {
            usage: {},
            active: {},
            stats: {
                totalUsed: 0,
                byPowerUp: {}
            }
        };
        this.saveUserPowerUps();
        console.log('🔄 Power-ups réinitialisés');
    }
}

// Export global
window.PowerUpSystem = PowerUpSystem;

// Instance globale
window.powerUpSystem = new PowerUpSystem();

// Nettoyage automatique expirés toutes les minutes
setInterval(() => {
    window.powerUpSystem.cleanupExpired();
}, 60000);

console.log('✅ Power-Up System chargé');
