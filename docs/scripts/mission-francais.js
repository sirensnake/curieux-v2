const missionFrancais = {
    id: "francais_01",
    subject_key: "francais", // Pour le graphique vert
    badge: "🔍",
    title: "Curio : Détective des Mots",
    steps: [
        {
            subject: "Grammaire - Nature des mots",
            question: "Dans la phrase : 'Le petit renard court vite', quelle est la nature du mot **petit** ?",
            options: ["Un nom", "Un adjectif", "Un verbe"],
            correct: 1
        },
        {
            subject: "Grammaire - Le Verbe",
            question: "Curio cherche l'action dans la phrase : 'Les enfants mangent une pomme'. Quel est le verbe ?",
            options: ["enfants", "pomme", "mangent"],
            correct: 2
        },
        {
            subject: "Orthographe - Accords",
            question: "Comment écrit-on correctement : 'Les curieux ____ les étoiles' ?",
            options: ["regarde", "regardent", "regardes"],
            correct: 1
        },
        {
            subject: "Vocabulaire - Synonymes",
            question: "Trouve un synonyme du mot **immense** :",
            options: ["Géant", "Minuscule", "Rapide"],
            correct: 0
        }
    ]
};