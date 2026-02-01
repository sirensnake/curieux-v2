// ========================================
// COMPOSANT CURIO BUBBLE - ALPINE.JS
// Le Monde des Curieux - Version Production
// ========================================

document.addEventListener('alpine:init', () => {
    console.log('🦊 Initialisation Curio Bubble Alpine...');
    
    Alpine.data('curioBubble', () => ({
        // ==================
        // ÉTAT DU COMPOSANT
        // ==================
        visible: false,
        currentMessage: '',
        currentVariant: 'default', // default, success, warning, info
        autoHideTimer: null,
        
        // ==================
        // MESSAGES PRÉDÉFINIS
        // ==================
        messages: {
            // Messages généraux
            welcome: { text: "Bienvenue, explorateur ! 🦊", variant: 'default' },
            help: { text: "Besoin d'aide ? Je suis là ! 💡", variant: 'info' },
            goodbye: { text: "À bientôt ! Continue d'apprendre ! 👋", variant: 'default' },
            
            // Quiz et activités
            correct: { text: "Excellent ! Continue comme ça ! ✨", variant: 'success' },
            incorrect: { text: "Pas grave, réessaie ! 💪", variant: 'warning' },
            halfDone: { text: "Super ! Tu es à mi-chemin ! 🎯", variant: 'info' },
            complete: { text: "Bravo ! Activité terminée ! 🎉", variant: 'success' },
            perfect: { text: "Score parfait ! Tu es un champion ! 🏆", variant: 'success' },
            
            // Gamification
            streak: { text: "Série maintenue ! Tu es en feu ! 🔥", variant: 'success' },
            streakLost: { text: "Série interrompue... Recommence ! 😊", variant: 'warning' },
            newStreak: { text: "Nouvelle série commencée ! 🌟", variant: 'info' },
            levelUp: { text: "Niveau supérieur atteint ! 🎊", variant: 'success' },
            badgeEarned: { text: "Badge débloqué ! 🏅", variant: 'success' },
            
            // Système cœurs
            noHearts: { text: "Plus de cœurs ! Attends 30 min ou pratique sans limite ⏰", variant: 'warning' },
            heartLost: { text: "Attention, il te reste moins de cœurs ! ❤️", variant: 'warning' },
            heartRecovered: { text: "Un cœur récupéré ! 💚", variant: 'success' },
            
            // Par section
            histoire: { text: "Prêt à voyager dans le temps ? 🏛️", variant: 'default' },
            anglais: { text: "Let's learn English together! 🇬🇧", variant: 'default' },
            sciences: { text: "Découvrons les secrets de la nature ! 🧪", variant: 'default' },
            francais: { text: "Explorons la langue française ! 📚", variant: 'default' },
            maths: { text: "Les maths, c'est magique ! 🔢", variant: 'default' },
            programmation: { text: "Coder, c'est créer ! 💻", variant: 'default' },
            echecs: { text: "Stratégie et réflexion ! ♟️", variant: 'default' },
            philosophie: { text: "Pourquoi ? Comment ? Réfléchissons ! 🤔", variant: 'default' }
        },
        
        // ==================
        // INITIALISATION
        // ==================
        init() {
            console.log('✅ Curio Bubble initialisé');
            
            // Enregistrer instance globale pour API vanilla
            window.curioBubbleInstance = this;
            
            // Debug en mode développement
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                console.log('🔧 Mode développement - Messages disponibles:', Object.keys(this.messages));
            }
        },
        
        // ==================
        // MÉTHODES PUBLIQUES
        // ==================
        
        /**
         * Afficher un message
         * @param {string} messageKey - Clé du message prédéfini ou texte personnalisé
         * @param {boolean} autoHide - Masquer automatiquement après 5s
         * @param {string} variant - Variante visuelle (default, success, warning, info)
         */
        show(messageKey, autoHide = true, variant = null) {
            // Annuler timer précédent si existe
            if (this.autoHideTimer) {
                clearTimeout(this.autoHideTimer);
                this.autoHideTimer = null;
            }
            
            // Récupérer message (prédéfini ou personnalisé)
            if (this.messages[messageKey]) {
                this.currentMessage = this.messages[messageKey].text;
                this.currentVariant = variant || this.messages[messageKey].variant;
            } else {
                // Message personnalisé
                this.currentMessage = messageKey;
                this.currentVariant = variant || 'default';
            }
            
            this.visible = true;
            
            console.log(`💬 Curio (${this.currentVariant}):`, this.currentMessage);
            
            // Auto-masquage après 5 secondes
            if (autoHide) {
                this.autoHideTimer = setTimeout(() => {
                    this.hide();
                }, 5000);
            }
        },
        
        /**
         * Masquer la bulle
         */
        hide() {
            this.visible = false;
            if (this.autoHideTimer) {
                clearTimeout(this.autoHideTimer);
                this.autoHideTimer = null;
            }
            console.log('🚪 Curio masqué');
        },
        
        /**
         * Toggle visibilité
         */
        toggle() {
            if (this.visible) {
                this.hide();
            } else {
                this.show('help', false);
            }
        },
        
        /**
         * Obtenir la classe CSS selon la variante
         */
        getVariantClass() {
            return `curio-bubble--${this.currentVariant}`;
        }
    }));
});

// ========================================
// API VANILLA JS - RÉTROCOMPATIBILITÉ
// ========================================

window.addEventListener('alpine:initialized', () => {
    console.log('✅ Curio Alpine - API vanilla disponible');
    
    /**
     * Fonction globale pour afficher un message Curio
     * Compatible avec le code JavaScript existant
     * 
     * @param {string} messageKey - Clé du message ou texte personnalisé
     * @param {boolean} autoHide - Masquer automatiquement (défaut: true)
     * 
     * @example
     * showCurioMessage('correct');
     * showCurioMessage('Bravo pour ta réponse !', false);
     */
    window.showCurioMessage = function(messageKey, autoHide = true) {
        if (window.curioBubbleInstance) {
            window.curioBubbleInstance.show(messageKey, autoHide);
        } else {
            console.error('❌ Curio Bubble non initialisé');
        }
    };
    
    /**
     * Fonction globale pour masquer la bulle Curio
     * Compatible avec le code JavaScript existant
     * 
     * @example
     * closeCurioHelp();
     */
    window.closeCurioHelp = function() {
        if (window.curioBubbleInstance) {
            window.curioBubbleInstance.hide();
        } else {
            console.error('❌ Curio Bubble non initialisé');
        }
    };
    
    /**
     * Fonction debug pour lister les messages disponibles
     * 
     * @example
     * console.table(getCurioMessages());
     */
    window.getCurioMessages = function() {
        if (window.curioBubbleInstance) {
            return window.curioBubbleInstance.messages;
        }
        return {};
    };
});

console.log('📦 Curio Bubble Alpine component loaded');
