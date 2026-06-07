// ========================================
// RACCOURCI CLAVIER ADMIN : Ctrl+Shift+X
// ========================================
// Ce script doit être inclus dans toutes les pages du site
// pour permettre l'accès rapide au panneau admin

(function() {
    'use strict';

    // Écouter la combinaison Ctrl+Shift+X
    document.addEventListener('keydown', function(event) {
        // Vérifier Ctrl (ou Cmd sur Mac) + Shift + X
        if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'X') {
            event.preventDefault(); // Empêcher action par défaut du navigateur
            
            console.log('🔧 Raccourci admin détecté : Ctrl+Shift+X');
            
            // Ouvrir le panneau admin dans un nouvel onglet
            window.open('admin-panel.html', '_blank');
            
            // Alternative : rediriger dans le même onglet (décommenter si préféré)
            // window.location.href = 'admin-panel.html';
        }
    });

    console.log('🔐 Raccourci admin activé : Ctrl+Shift+X pour accéder au panneau');
})();
