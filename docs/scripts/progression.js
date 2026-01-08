/**
 * GESTIONNAIRE DE PROGRESSION - Le Monde des Curieux
 * Centralise les gains d'XP et la validation des missions
 */
const ProgressionManager = {
    // Matières supportées
    subjects: ['maths', 'english', 'francais', 'histoire', 'sciences'],

    /**
     * Enregistre le succès d'une mission et ajoute les XP
     */
    saveMissionSuccess(subject, xpGained) {
        if (!this.subjects.includes(subject)) {
            console.error("Sujet non reconnu");
            return;
        }

        // 1. Mise à jour des XP par matière (Pour le Dashboard)
        let subjectData = JSON.parse(localStorage.getItem(`${subject}_xp`)) || { total: 0, completed: 0 };
        subjectData.total += xpGained;
        subjectData.completed += 1;
        localStorage.setItem(`${subject}_xp`, JSON.stringify(subjectData));

        // 2. Mise à jour des XP globaux (Pour le Header de l'index)
        let globalXP = parseInt(localStorage.getItem('curio_xp') || 0);
        localStorage.setItem('curio_xp', globalXP + xpGained);

        // 3. Enregistrement de la mission dans la liste des terminées
        let missions = JSON.parse(localStorage.getItem('curio_missions') || "[]");
        const missionName = `${subject}_${new Date().toLocaleDateString()}`;
        if (!missions.includes(missionName)) {
            missions.push(missionName);
            localStorage.setItem('curio_missions', JSON.stringify(missions));
        }

        console.log(`✅ Progression sauvegardée : +${xpGained} XP en ${subject}`);
    }
};