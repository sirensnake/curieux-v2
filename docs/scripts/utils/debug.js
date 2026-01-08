/**
 * RESET TOTAL - LE MONDE DES CURIEUX
 * Nettoie toutes les statistiques pour les tests
 */
function resetAllCurioProgress() {
    const keysToRemove = [
        'curio_xp', 'activity_history', 'userProgress',
        'maths_xp', 'english_xp', 'francais_xp', 'histoire_xp', 'sciences_xp',
        'maths_completed', 'english_completed', 'francais_completed', 'histoire_completed', 'sciences_completed',
        'maths_streak', 'english_streak', 'francais_streak', 'histoire_streak', 'sciences_streak'
    ];
    
    if (confirm("Voulez-vous réinitialiser TOUTE la progression ?")) {
        keysToRemove.forEach(key => localStorage.removeItem(key));
        alert("Système réinitialisé !");
        location.reload();
    }
}