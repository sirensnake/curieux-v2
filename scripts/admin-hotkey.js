/**
 * 🔧 ADMIN PANEL HOTKEY
 * 
 * Combinaison secrète : Ctrl+Shift+A
 * Ouvre le panneau admin dans un nouvel onglet
 * 
 * À inclure dans TOUTES les pages principales du site
 */

(function() {
    'use strict';

    // Détection combinaison Ctrl+Shift+A
    document.addEventListener('keydown', function(event) {
        // Vérifier Ctrl (ou Cmd sur Mac) + Shift + A
        if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
            event.preventDefault(); // Empêcher comportement par défaut
            
            // Ouvrir panneau admin dans nouvel onglet
            window.open('admin-panel.html', '_blank');
            
            // Feedback visuel discret
            console.log('🔧 Panneau admin ouvert');
            
            // Flash visuel très rapide (optionnel)
            const flash = document.createElement('div');
            flash.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                background: rgba(231, 76, 60, 0.9);
                color: white;
                padding: 10px 20px;
                border-radius: 5px;
                font-family: 'Press Start 2P', monospace;
                font-size: 10px;
                z-index: 999999;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                animation: slideIn 0.3s ease;
            `;
            flash.textContent = '🔧 ADMIN OPENED';
            
            // Animation CSS
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 1500);
        }
    });

    console.log('🔧 Admin hotkey activé (Ctrl+Shift+A)');
})();
