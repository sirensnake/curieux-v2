/**
 * MISSION : MATHÉMATIQUES - LE MONDE DES CURIEUX
 */
const missionMaths = {
    id: "maths_01",
    subject_key: "maths", // Indispensable pour tes graphiques violets
    badge: "🔢",
    title: "Curio et les Nombres Mystères",
    steps: [
        {
            subject: "Calcul - Addition",
            question: "Curio a trouvé 15 cristaux bleus et 7 cristaux rouges. Combien a-t-il de cristaux en tout ?",
            options: ["21", "22", "23"],
            correct: 1,
            feedback: "Bravo ! 15 + 7 font bien 22."
        },
        {
            subject: "Géométrie - Formes",
            question: "Comment appelle-t-on une figure géométrique qui possède 3 côtés ?",
            options: ["Un carré", "Un rectangle", "Un triangle"],
            correct: 2,
            feedback: "C'est ça ! Le triangle a 3 côtés et 3 sommets."
        },
        {
            subject: "Logique - Suite numérique",
            question: "Complète la suite logique : 2 - 4 - 6 - 8 - ... ?",
            options: ["9", "10", "12"],
            correct: 1,
            feedback: "Excellent ! C'est la table de 2, le nombre suivant est 10."
        },
        {
            subject: "Calcul - Soustraction",
            question: "Si Curio avait 20 points d'énergie et qu'il en utilise 8 pour voler, combien lui en reste-t-il ?",
            options: ["12", "14", "10"],
            correct: 0,
            feedback: "Parfait ! 20 - 8 = 12."
        }
    ]
};

/**
 * Fonction de secours pour lancer la mission manuellement 
 * si elle n'est pas appelée par le moteur universel
 */
function terminerMissionMaths() {
    if (typeof ProgressionManager !== 'undefined') {
        ProgressionManager.saveMissionSuccess('maths', 20);
        confetti();
        alert("Bravo ! Tu as gagné 20 XP en Maths !");
        window.location.href = 'index.html';
    }
}