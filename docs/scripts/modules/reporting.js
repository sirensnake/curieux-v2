/**
 * Module de Reporting - Le Monde des Curieux
 * Gère les statistiques d'utilisation localement sans erreurs de clonage
 */
const CurioReporting = {
    logAvatarChoice(avatarId) {
        // Sécurité : On s'assure que avatarId est une chaîne pour éviter DataCloneError
        if (typeof avatarId !== 'string') {
            console.warn("[Reporting] ID invalide ignoré pour éviter plantage.");
            return;
        }

        try {
            let stats = JSON.parse(localStorage.getItem('curio_stats_avatars') || '{}');
            
            // Incrémentation
            stats[avatarId] = (stats[avatarId] || 0) + 1;
            
            localStorage.setItem('curio_stats_avatars', JSON.stringify(stats));
            console.log(`[Reporting] Avatar ${avatarId} enregistré.`);
        } catch (e) {
            console.error("[Reporting] Erreur de sauvegarde :", e);
        }
    },

    getAvatarStats() {
        return JSON.parse(localStorage.getItem('curio_stats_avatars') || '{}');
    }
};