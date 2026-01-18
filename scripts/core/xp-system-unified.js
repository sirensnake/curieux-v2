/**
 * 🎯 SYSTÈME XP UNIFIÉ - Le Monde des Curieux
 * ============================================
 * Gestion centralisée des XP pour toutes les sections
 * 
 * FONCTIONNALITÉS:
 * - XP total + par section (français, maths, anglais, etc.)
 * - Système de niveaux automatique (progression exponentielle)
 * - Historique des 100 dernières activités
 * - Events custom pour communication temps réel
 * - Synchronisation multi-onglets
 * - Migration automatique ancien système
 * 
 * USAGE:
 * - Charger EN PREMIER avant tout autre script
 * - window.xpSystem disponible globalement
 * - Écouter events: 'xp:updated', 'xp:levelup'
 */

(function() {
    'use strict';

    class UnifiedXPSystem {
        constructor() {
            // Clé unique localStorage
            this.storageKey = 'lemondedescurieux_xp';
            
            // Sections supportées (IDs normalisés)
            this.sections = [
                'francais',
                'maths', 
                'anglais',
                'sciences',
                'histoire',
                'geographie',
                'programmation',
                'philosophie'
            ];

            // Charger données ou initialiser
            this.data = this.loadData();
            
            // Migrer ancien système si nécessaire
            this.migrateOldData();
            
            console.log('✅ UnifiedXPSystem initialisé', this.data);
        }

        /**
         * Charger données depuis localStorage
         */
        loadData() {
            try {
                const saved = localStorage.getItem(this.storageKey);
                if (saved) {
                    return JSON.parse(saved);
                }
            } catch (e) {
                console.error('Erreur chargement XP:', e);
            }

            // Données par défaut
            return this.getDefaultData();
        }

        /**
         * Structure données par défaut
         */
        getDefaultData() {
            const bySection = {};
            this.sections.forEach(section => {
                bySection[section] = 0;
            });

            return {
                total: 0,
                bySection: bySection,
                level: 1,
                xpToNextLevel: 200,
                history: [],
                lastActivity: null,
                createdAt: new Date().toISOString()
            };
        }

        /**
         * Sauvegarder dans localStorage
         */
        saveData() {
            try {
                localStorage.setItem(this.storageKey, JSON.stringify(this.data));
                console.log('💾 XP sauvegardé:', this.data.total);
            } catch (e) {
                console.error('Erreur sauvegarde XP:', e);
            }
        }

        /**
         * Migrer ancien système curio_xp
         */
        migrateOldData() {
            const oldXP = parseInt(localStorage.getItem('curio_xp') || '0');
            
            if (oldXP > 0 && this.data.total === 0) {
                console.log('🔄 Migration ancien système:', oldXP, 'XP');
                
                // Affecter à la section française par défaut
                this.data.bySection.francais = oldXP;
                this.data.total = oldXP;
                
                // Recalculer niveau
                this.recalculateLevel();
                
                this.saveData();
                
                console.log('✅ Migration terminée');
            }
        }

        /**
         * MÉTHODE PRINCIPALE: Ajouter des XP
         * @param {string} section - ID section (francais, maths, etc.)
         * @param {number} amount - Quantité XP à ajouter
         * @param {object} metadata - Infos supplémentaires (leçon, exercices, etc.)
         */
        addXP(section, amount, metadata = {}) {
            // Valider section
            if (!this.sections.includes(section)) {
                console.warn(`⚠️ Section inconnue: ${section}`);
                return false;
            }

            // Valider montant
            const xpToAdd = Math.max(0, parseInt(amount) || 0);
            if (xpToAdd === 0) return false;

            const previousLevel = this.data.level;

            // Ajouter XP
            this.data.bySection[section] += xpToAdd;
            this.data.total += xpToAdd;
            this.data.lastActivity = new Date().toISOString();

            // Ajouter à l'historique
            this.addToHistory(section, xpToAdd, metadata);

            // Recalculer niveau
            this.recalculateLevel();

            // Sauvegarder
            this.saveData();

            // Événement XP mis à jour
            this.dispatchEvent('xp:updated', {
                section,
                amount: xpToAdd,
                total: this.data.total,
                level: this.data.level,
                metadata
            });

            // Événement level up si changement
            if (this.data.level > previousLevel) {
                this.dispatchEvent('xp:levelup', {
                    level: this.data.level,
                    previousLevel,
                    xpToNext: this.data.xpToNextLevel
                });
            }

            console.log(`✅ +${xpToAdd} XP (${section}) | Total: ${this.data.total} | Niv.${this.data.level}`);

            return true;
        }

        /**
         * Recalculer niveau selon XP total
         * Formule: 200 XP × 1.5^(niveau-1)
         */
        recalculateLevel() {
            let level = 1;
            let totalNeeded = 0;
            const baseXP = 200;
            const multiplier = 1.5;

            while (totalNeeded <= this.data.total) {
                const xpForLevel = Math.floor(baseXP * Math.pow(multiplier, level - 1));
                totalNeeded += xpForLevel;
                
                if (totalNeeded <= this.data.total) {
                    level++;
                }
            }

            this.data.level = level;
            
            // XP nécessaires pour niveau suivant
            this.data.xpToNextLevel = Math.floor(baseXP * Math.pow(multiplier, level - 1));
        }

        /**
         * Ajouter activité à l'historique
         */
        addToHistory(section, xp, metadata) {
            const entry = {
                section,
                xp,
                timestamp: new Date().toISOString(),
                ...metadata
            };

            this.data.history.unshift(entry);

            // Limiter à 100 entrées
            if (this.data.history.length > 100) {
                this.data.history = this.data.history.slice(0, 100);
            }
        }

        /**
         * Dispatcher événement custom
         */
        dispatchEvent(eventName, detail) {
            const event = new CustomEvent(eventName, { detail });
            window.dispatchEvent(event);
        }

        /**
         * GETTERS - API publique
         */

        getTotal() {
            return this.data.total;
        }

        getLevel() {
            return this.data.level;
        }

        getXPToNextLevel() {
            return this.data.xpToNextLevel;
        }

        getBySection(section) {
            return this.data.bySection[section] || 0;
        }

        getAllSections() {
            return { ...this.data.bySection };
        }

        getProgress() {
            // XP actuels dans le niveau en cours
            let xpInCurrentLevel = this.data.total;
            
            for (let i = 1; i < this.data.level; i++) {
                const xpForLevel = Math.floor(200 * Math.pow(1.5, i - 1));
                xpInCurrentLevel -= xpForLevel;
            }

            return {
                current: xpInCurrentLevel,
                needed: this.data.xpToNextLevel,
                percentage: Math.floor((xpInCurrentLevel / this.data.xpToNextLevel) * 100)
            };
        }

        getHistory(limit = 10) {
            return this.data.history.slice(0, limit);
        }

        getStats() {
            return {
                totalXP: this.data.total,
                level: this.data.level,
                xpToNext: this.data.xpToNextLevel,
                sections: this.getAllSections(),
                historyCount: this.data.history.length,
                lastActivity: this.data.lastActivity
            };
        }

        /**
         * ADMIN - Réinitialiser TOUT
         */
        reset() {
            if (confirm('⚠️ ATTENTION: Supprimer tous les XP ?')) {
                this.data = this.getDefaultData();
                this.saveData();
                
                // Supprimer aussi ancien système
                localStorage.removeItem('curio_xp');
                
                console.log('🔄 XP réinitialisés');
                
                this.dispatchEvent('xp:reset', {});
                
                return true;
            }
            return false;
        }
    }

    // Créer instance globale
    window.xpSystem = new UnifiedXPSystem();

    // Écouter changements localStorage (multi-onglets)
    window.addEventListener('storage', (e) => {
        if (e.key === window.xpSystem.storageKey) {
            console.log('🔄 Synchronisation multi-onglets');
            window.xpSystem.data = window.xpSystem.loadData();
            window.xpSystem.dispatchEvent('xp:updated', { source: 'storage' });
        }
    });

    console.log('🎯 UnifiedXPSystem chargé globalement');
})();