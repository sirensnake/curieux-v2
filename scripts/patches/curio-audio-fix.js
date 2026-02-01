/**
 * PATCH AUDIO CURIO - Correctif Son Indice
 * Date: 19/01/2026
 * 
 * Ce script réactive le son 8-bit de Curio lors du clic sur l'indice
 * 
 * INSTALLATION:
 * Ajouter ce script APRÈS le chargement de lesson-engine.js
 * <script src="scripts/patches/curio-audio-fix.js"></script>
 */

(function() {
    'use strict';
    
    console.log('🔊 Patch Audio Curio: Chargement...');

    /**
     * Créer contexte audio si nécessaire
     */
    function ensureAudioContext() {
        if (!window.audioContext) {
            try {
                window.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                console.log('🔊 AudioContext créé');
            } catch (e) {
                console.error('🔊 Impossible de créer AudioContext', e);
                return null;
            }
        }
        return window.audioContext;
    }

    /**
     * Générer son 8-bit pour indice Curio
     */
    function playHintSound() {
        const ctx = ensureAudioContext();
        if (!ctx) return;

        try {
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            // Son "question" montant (comme un "?" vocal)
            oscillator.type = 'square'; // Son rétro 8-bit
            oscillator.frequency.setValueAtTime(400, ctx.currentTime); // Fréquence de départ
            oscillator.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1); // Monte

            // Enveloppe sonore
            gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.15);

            console.log('🔊 Son indice Curio joué');
        } catch (e) {
            console.error('🔊 Erreur lecture son indice', e);
        }
    }

    /**
     * Patcher le LessonEngine pour réactiver le son
     */
    function patchLessonEngine() {
        // Attendre que LessonEngine soit disponible
        if (typeof LessonEngine === 'undefined') {
            console.warn('🔊 LessonEngine pas encore chargé, nouvelle tentative dans 500ms');
            setTimeout(patchLessonEngine, 500);
            return;
        }

        // Patcher la méthode showHint
        const originalShowHint = LessonEngine.prototype.showHint;
        
        LessonEngine.prototype.showHint = function() {
            // Jouer le son AVANT d'afficher l'indice
            playHintSound();
            
            // Appeler la méthode originale
            if (originalShowHint) {
                originalShowHint.call(this);
            }
            
            console.log('🔊 Patch appliqué: Son + Indice');
        };

        console.log('✅ LessonEngine patché avec succès');
    }

    /**
     * Ajouter gestionnaire de clic sur Curio
     */
    function attachCurioClickHandler() {
        // Attendre que le DOM soit prêt
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', attachCurioClickHandler);
            return;
        }

        // Rechercher l'élément Curio
        const curioElement = document.querySelector('.curio-mascot, #curio-mascot, [data-curio], img[alt*="Curio"]');
        
        if (!curioElement) {
            console.warn('🔊 Élément Curio non trouvé, nouvelle tentative dans 1s');
            setTimeout(attachCurioClickHandler, 1000);
            return;
        }

        // Attacher le gestionnaire de clic
        curioElement.addEventListener('click', function(e) {
            console.log('🔊 Clic sur Curio détecté');
            playHintSound();
            
            // Si l'élément a déjà un gestionnaire, le laisser fonctionner
            // Le son sera joué en plus
        });

        console.log('✅ Gestionnaire de clic Curio attaché');
    }

    /**
     * Initialisation du patch
     */
    function init() {
        console.log('🔊 Patch Audio Curio: Initialisation...');
        
        // Patcher LessonEngine
        patchLessonEngine();
        
        // Attacher gestionnaire Curio
        attachCurioClickHandler();
        
        console.log('✅ Patch Audio Curio: Initialisé');
    }

    // Démarrage du patch
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Exposer la fonction de test
    window.testCurioSound = playHintSound;
    console.log('💡 Test disponible: window.testCurioSound()');

})();
