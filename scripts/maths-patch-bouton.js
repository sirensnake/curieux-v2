// 🔧 PATCH URGENT : Suppression forcée bouton "Suivant" dans Maths
// Ce script détruit tous les boutons indésirables créés par le CSS

console.log('🔧 Patch anti-bouton "Suivant" activé pour Maths');

// Fonction pour supprimer tous les boutons "Suivant"
function destroyNextButtons() {
    // Chercher tous les boutons avec classes suspectes
    const selectors = [
        '.btn-complete-activity',
        '.next-btn',
        'button[onclick*="nextExercise"]',
        'button:contains("Suivant")',
        '.feedback-zone button',
        '#feedback-zone button'
    ];
    
    selectors.forEach(selector => {
        try {
            const buttons = document.querySelectorAll(selector);
            buttons.forEach(btn => {
                if (btn.textContent.includes('Suivant') || btn.textContent.includes('suivant')) {
                    console.log('🗑️ Bouton "Suivant" détruit:', btn);
                    btn.remove();
                }
            });
        } catch(e) {
            // Sélecteur invalide, on ignore
        }
    });
}

// Observer les changements dans le DOM pour supprimer les boutons dès qu'ils apparaissent
const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length > 0) {
            destroyNextButtons();
        }
    });
});

// Démarrer l'observation quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        observer.observe(document.body, { childList: true, subtree: true });
        console.log('👁️ Observateur de boutons "Suivant" démarré');
    });
} else {
    observer.observe(document.body, { childList: true, subtree: true });
    console.log('👁️ Observateur de boutons "Suivant" démarré');
}

// Nettoyage initial au cas où
destroyNextButtons();
