/**
 * ❤️ UNIVERSAL HEART SYSTEM
 * Système de cœurs/vies PAR SECTION
 * Compatible avec TOUTES les sections : français, anglais, maths, sciences, histoire, etc.
 * Version: 1.0
 * Date: 19/01/2026
 */

class UniversalHeartSystem {
    constructor(sectionName = 'default') {
        this.sectionName = sectionName;
        this.storageKey = `lemondedescurieux_hearts_${sectionName}`;
        this.maxHearts = 5;
        this.regenTime = 30 * 60 * 1000; // 30 minutes en millisecondes
        this.data = this.loadData();
        this.displayElement = null;
        this.regenTimer = null;
        
        console.log(`❤️ UniversalHeartSystem (${sectionName}): Initialisé`, this.data);
        
        // Démarrer régénération automatique
        this.startRegeneration();
    }

    /**
     * 💾 Charge les données
     */
    loadData() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                const parsed = JSON.parse(stored);
                console.log(`❤️ Données cœurs (${this.sectionName}) chargées:`, parsed);
                
                // Vérifier régénération automatique
                this.processRegeneration(parsed);
                return parsed;
            }
        } catch (e) {
            console.error('❌ Erreur chargement cœurs:', e);
        }

        return this.getDefaultData();
    }

    /**
     * 🎯 Données par défaut
     */
    getDefaultData() {
        return {
            currentHearts: this.maxHearts,
            lastHeartLoss: null,
            regenStartTime: null,
            stats: {
                totalLost: 0,
                totalRecovered: 0,
                sessionsCompleted: 0
            }
        };
    }

    /**
     * 💾 Sauvegarde les données
     */
    saveData() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
            console.log(`💾 Cœurs (${this.sectionName}) sauvegardés:`, this.data.currentHearts);
            return true;
        } catch (e) {
            console.error('❌ Erreur sauvegarde cœurs:', e);
            return false;
        }
    }

    /**
     * 🔄 Traiter la régénération automatique
     */
    processRegeneration(data) {
        if (!data.regenStartTime || data.currentHearts >= this.maxHearts) {
            return;
        }

        const now = Date.now();
        const elapsed = now - data.regenStartTime;
        const heartsToRegen = Math.floor(elapsed / this.regenTime);

        if (heartsToRegen > 0) {
            const newHearts = Math.min(this.maxHearts, data.currentHearts + heartsToRegen);
            const actualRegen = newHearts - data.currentHearts;
            
            data.currentHearts = newHearts;
            data.stats.totalRecovered += actualRegen;
            
            if (data.currentHearts >= this.maxHearts) {
                data.regenStartTime = null;
            } else {
                data.regenStartTime = now - (elapsed % this.regenTime);
            }
            
            this.saveData();
            console.log(`❤️ Régénération automatique: +${actualRegen} cœur(s)`);
        }
    }

    /**
     * 💔 Perdre un cœur
     */
    loseHeart() {
        if (this.data.currentHearts <= 0) {
            console.warn('⚠️ Plus de cœurs disponibles');
            this.showNoHeartsModal();
            return false;
        }

        this.data.currentHearts--;
        this.data.lastHeartLoss = Date.now();
        this.data.stats.totalLost++;

        // Démarrer régénération si on passe sous le max
        if (this.data.currentHearts === this.maxHearts - 1) {
            this.data.regenStartTime = Date.now();
        }

        this.saveData();
        this.updateDisplay();
        
        // Animation perte cœur
        this.animateHeartLoss();
        
        // Vibration mobile
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }

        // Événement personnalisé
        this.dispatchEvent('heart:lost', {
            currentHearts: this.data.currentHearts,
            section: this.sectionName
        });

        console.log(`💔 Cœur perdu (${this.sectionName}): ${this.data.currentHearts} restants`);
        
        return this.data.currentHearts > 0;
    }

    /**
     * 💖 Gagner un cœur
     */
    gainHeart() {
        if (this.data.currentHearts >= this.maxHearts) {
            console.warn('⚠️ Déjà au maximum de cœurs');
            return false;
        }

        this.data.currentHearts++;
        this.data.stats.totalRecovered++;

        if (this.data.currentHearts >= this.maxHearts) {
            this.data.regenStartTime = null;
        }

        this.saveData();
        this.updateDisplay();
        
        // Animation gain cœur
        this.animateHeartGain();

        // Événement personnalisé
        this.dispatchEvent('heart:gained', {
            currentHearts: this.data.currentHearts,
            section: this.sectionName
        });

        console.log(`💖 Cœur gagné (${this.sectionName}): ${this.data.currentHearts}`);
        
        return true;
    }

    /**
     * 🎨 Animation perte de cœur
     */
    animateHeartLoss() {
        if (!this.displayElement) return;

        // Flash rouge
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(231, 76, 60, 0.3);
            z-index: 9999;
            pointer-events: none;
            animation: fadeOut 0.5s ease-out;
        `;
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 500);

        // Shake du badge
        this.displayElement.style.animation = 'shake 0.5s';
        setTimeout(() => {
            this.displayElement.style.animation = '';
        }, 500);
    }

    /**
     * 🎨 Animation gain de cœur
     */
    animateHeartGain() {
        if (!this.displayElement) return;

        // Particules cœurs
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.textContent = '❤️';
                particle.style.cssText = `
                    position: fixed;
                    left: ${this.displayElement.offsetLeft + Math.random() * 50}px;
                    top: ${this.displayElement.offsetTop}px;
                    font-size: 20px;
                    pointer-events: none;
                    z-index: 10000;
                    animation: floatUp 1s ease-out forwards;
                `;
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 1000);
            }, i * 50);
        }
    }

    /**
     * ⏰ Démarrer la régénération automatique
     */
    startRegeneration() {
        // Nettoyer timer existant
        if (this.regenTimer) {
            clearInterval(this.regenTimer);
        }

        // Vérifier toutes les 10 secondes
        this.regenTimer = setInterval(() => {
            if (this.data.currentHearts < this.maxHearts && this.data.regenStartTime) {
                const now = Date.now();
                const elapsed = now - this.data.regenStartTime;
                
                if (elapsed >= this.regenTime) {
                    this.gainHeart();
                }
                
                this.updateDisplay();
            }
        }, 10000);
    }

    /**
     * 🎨 Créer et initialiser l'affichage
     */
    initializeDisplay(containerId = 'gamification-bar') {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn('⚠️ Container', containerId, 'non trouvé');
            return;
        }

        // Créer le badge s'il n'existe pas
        let heartsDisplay = document.getElementById('hearts-display');
        if (!heartsDisplay) {
            heartsDisplay = document.createElement('div');
            heartsDisplay.id = 'hearts-display';
            heartsDisplay.className = 'hearts-badge';
            heartsDisplay.style.cssText = `
                display: flex;
                align-items: center;
                gap: 3px;
                background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
                padding: 8px 15px;
                border-radius: 20px;
                cursor: pointer;
                transition: transform 0.2s;
                font-size: 16px;
            `;
            
            heartsDisplay.addEventListener('click', () => this.showHeartsDetails());
            heartsDisplay.addEventListener('mouseenter', () => {
                heartsDisplay.style.transform = 'scale(1.05)';
            });
            heartsDisplay.addEventListener('mouseleave', () => {
                heartsDisplay.style.transform = 'scale(1)';
            });
            
            // Insérer après le streak
            const streakDisplay = document.getElementById('streak-display');
            if (streakDisplay) {
                container.insertBefore(heartsDisplay, streakDisplay.nextSibling);
            } else {
                container.appendChild(heartsDisplay);
            }
        }

        this.displayElement = heartsDisplay;
        this.updateDisplay();
        
        console.log('✅ Badge cœurs initialisé');
    }

    /**
     * 🔄 Mettre à jour l'affichage
     */
    updateDisplay() {
        if (!this.displayElement) return;

        let heartsHTML = '';
        for (let i = 0; i < this.maxHearts; i++) {
            if (i < this.data.currentHearts) {
                heartsHTML += '❤️';
            } else {
                heartsHTML += '🖤';
            }
        }

        this.displayElement.innerHTML = heartsHTML;

        // Afficher temps de régénération si applicable
        if (this.data.currentHearts < this.maxHearts && this.data.regenStartTime) {
            const now = Date.now();
            const elapsed = now - this.data.regenStartTime;
            const remaining = this.regenTime - elapsed;
            const minutesLeft = Math.ceil(remaining / 60000);
            
            this.displayElement.title = `Prochain cœur dans ${minutesLeft} min`;
        }
    }

    /**
     * 📋 Afficher modal de détails
     */
    showHeartsDetails() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            font-family: 'Press Start 2P', monospace;
        `;
        
        let regenInfo = '';
        if (this.data.currentHearts < this.maxHearts && this.data.regenStartTime) {
            const now = Date.now();
            const elapsed = now - this.data.regenStartTime;
            const remaining = this.regenTime - elapsed;
            const minutesLeft = Math.ceil(remaining / 60000);
            regenInfo = `
                <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px; font-size: 9px; text-align: center;">
                    ⏰ Prochain cœur dans <strong>${minutesLeft} min</strong>
                </div>
            `;
        }
        
        modal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 20px; max-width: 400px; width: 90%;">
                <h2 style="text-align: center; margin-bottom: 20px; font-size: 16px;">❤️ Système de Cœurs</h2>
                
                <div style="text-align: center; font-size: 40px; margin-bottom: 20px;">
                    ${this.displayElement.innerHTML}
                </div>
                
                <div style="font-size: 12px; margin-bottom: 15px;">
                    <strong>${this.data.currentHearts}</strong> / ${this.maxHearts} cœurs disponibles
                </div>
                
                ${regenInfo}
                
                <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 10px; font-size: 9px;">
                    <div style="margin-bottom: 5px;">📊 Statistiques ${this.sectionName}</div>
                    <div>Cœurs perdus: ${this.data.stats.totalLost}</div>
                    <div>Cœurs récupérés: ${this.data.stats.totalRecovered}</div>
                </div>

                <button onclick="this.closest('div[style*=fixed]').remove()" style="width: 100%; margin-top: 20px; padding: 15px; background: #ff6b6b; color: white; border: none; border-radius: 10px; font-family: 'Press Start 2P', monospace; font-size: 10px; cursor: pointer;">
                    FERMER
                </button>
            </div>
        `;

        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    /**
     * 🚫 Afficher modal "plus de cœurs"
     */
    showNoHeartsModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            font-family: 'Press Start 2P', monospace;
        `;
        
        modal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 20px; max-width: 400px; width: 90%; text-align: center;">
                <div style="font-size: 60px; margin-bottom: 20px;">💔</div>
                <h2 style="margin-bottom: 20px; font-size: 16px;">Plus de cœurs !</h2>
                
                <p style="font-size: 10px; margin-bottom: 20px; line-height: 1.6;">
                    Tu as épuisé tous tes cœurs pour ${this.sectionName}. 
                    Attends 30 minutes pour récupérer un cœur, ou continue en mode libre !
                </p>
                
                <button onclick="this.closest('div[style*=fixed]').remove()" style="width: 100%; padding: 15px; background: #667eea; color: white; border: none; border-radius: 10px; font-family: 'Press Start 2P', monospace; font-size: 10px; cursor: pointer; margin-bottom: 10px;">
                    ATTENDRE
                </button>
                
                <button onclick="window.practiceModeEnabled = true; this.closest('div[style*=fixed]').remove(); alert('Mode libre activé !');" style="width: 100%; padding: 15px; background: #2ecc71; color: white; border: none; border-radius: 10px; font-family: 'Press Start 2P', monospace; font-size: 10px; cursor: pointer;">
                    MODE LIBRE (sans cœurs)
                </button>
            </div>
        `;

        document.body.appendChild(modal);
    }

    /**
     * 📊 Obtenir nombre de cœurs
     */
    getCurrentHearts() {
        return this.data.currentHearts;
    }

    /**
     * ❓ Vérifier si vide
     */
    isEmpty() {
        return this.data.currentHearts <= 0;
    }

    /**
     * ✅ Vérifier si plein
     */
    isFull() {
        return this.data.currentHearts >= this.maxHearts;
    }

    /**
     * 📈 Obtenir statistiques
     */
    getStats() {
        return {
            currentHearts: this.data.currentHearts,
            maxHearts: this.maxHearts,
            stats: { ...this.data.stats },
            section: this.sectionName
        };
    }

    /**
     * 📡 Dispatcher événement personnalisé
     */
    dispatchEvent(eventName, detail) {
        const event = new CustomEvent(eventName, {
            detail: detail,
            bubbles: true
        });
        document.dispatchEvent(event);
        console.log('📡 Événement dispatché:', eventName, detail);
    }

    /**
     * 🔄 Réinitialiser (pour tests)
     */
    reset() {
        console.warn(`⚠️ RESET complet cœurs (${this.sectionName})`);
        this.data = this.getDefaultData();
        this.saveData();
        this.updateDisplay();
    }
    
    /**
     * 🧹 Nettoyer (appelé lors de la destruction)
     */
    destroy() {
        if (this.regenTimer) {
            clearInterval(this.regenTimer);
        }
    }
}

// Export global
if (typeof window !== 'undefined') {
    window.UniversalHeartSystem = UniversalHeartSystem;
    console.log('✅ UniversalHeartSystem disponible globalement');
}
