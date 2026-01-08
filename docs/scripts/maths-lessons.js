/**
 * ==========================================
 * DATA : maths-lessons.js
 * Plateforme : Le Monde des Curieux
 * Contenu : 15 Leçons de Mathématiques
 * ==========================================
 */

const mathsLessons = [
    {
        id: 'maths-01-additions',
        title: 'Additions Mentales',
        emoji: '➕',
        xp: 40,
        difficulty: 'facile',
        curioHint: "Pour additionner 9, ajoute 10 et retire 1. C'est magique et rapide !",
        exercises: [
            { question: "8 + 7 = ?", answer: "15" },
            { question: "12 + 9 = ?", answer: "21" },
            { question: "25 + 25 = ?", answer: "50" },
            { question: "150 + 50 = ?", answer: "200" },
            { question: "9 + 6 = ?", answer: "15" }
        ]
    },
    {
        id: 'maths-02-soustractions',
        title: 'Soustractions',
        emoji: '➖',
        xp: 40,
        difficulty: 'facile',
        curioHint: "La soustraction, c'est comme reculer sur une file numérique. Combien de pas fais-tu en arrière ?",
        exercises: [
            { question: "20 - 7 = ?", answer: "13" },
            { question: "50 - 15 = ?", answer: "35" },
            { question: "100 - 25 = ?", answer: "75" },
            { question: "32 - 8 = ?", answer: "24" },
            { question: "15 - 9 = ?", answer: "6" }
        ]
    },
    {
        id: 'maths-03-multiplications-2-5',
        title: 'Tables de 2 et 5',
        emoji: '✖️',
        xp: 45,
        difficulty: 'moyen',
        curioHint: "Multiplier par 5, c'est facile : les résultats finissent toujours par 0 ou 5 !",
        exercises: [
            { question: "2 x 8 = ?", answer: "16" },
            { question: "5 x 4 = ?", answer: "20" },
            { question: "5 x 7 = ?", answer: "35" },
            { question: "2 x 9 = ?", answer: "18" },
            { question: "5 x 5 = ?", answer: "25" }
        ]
    },
    {
        id: 'maths-04-geometrie-bases',
        title: 'Formes de Base',
        emoji: '🟦',
        xp: 40,
        difficulty: 'facile',
        curioHint: "Un carré a 4 côtés égaux et 4 angles droits. C'est la forme préférée des constructeurs de Minecraft !",
        exercises: [
            { question: "Combien de côtés a un triangle ?", answer: "3" },
            { question: "Combien de côtés a un carré ?", answer: "4" },
            { question: "Un rectangle a combien d'angles droits ?", answer: "4" },
            { question: "Comment appelle-t-on une forme à 5 côtés ?", answer: "pentagone" },
            { question: "Une forme ronde sans angle est un... ?", answer: "cercle" }
        ]
    },
    {
        id: 'maths-05-unites-mesures',
        title: 'Unités de Longueur',
        emoji: '📏',
        xp: 45,
        difficulty: 'moyen',
        curioHint: "N'oublie pas : 1 mètre (m), c'est 100 centimètres (cm) !",
        exercises: [
            { question: "Combien de cm dans 1m ?", answer: "100" },
            { question: "Combien de mm dans 1cm ?", answer: "10" },
            { question: "Abréviation de kilomètre ?", answer: "km" },
            { question: "La règle mesure souvent 30... ?", answer: "cm" },
            { question: "1000 mètres font 1... ?", answer: "km" }
        ]
    },
    {
        id: 'maths-06-doubles-moities',
        title: 'Doubles et Moitiés',
        emoji: '🌓',
        xp: 45,
        difficulty: 'facile',
        curioHint: "Le double, c'est x2. La moitié, c'est partager en deux parts égales.",
        exercises: [
            { question: "Le double de 15 ?", answer: "30" },
            { question: "La moitié de 20 ?", answer: "10" },
            { question: "Le double de 50 ?", answer: "100" },
            { question: "La moitié de 50 ?", answer: "25" },
            { question: "La moitié de 100 ?", answer: "50" }
        ]
    },
    {
        id: 'maths-07-fractions-intro',
        title: 'Introduction aux Fractions',
        emoji: '🍕',
        xp: 55,
        difficulty: 'moyen',
        curioHint: "Imagine une pizza. Si tu en prends la moitié, tu prends 1 sur 2, donc 1/2 !",
        exercises: [
            { question: "Un demi s'écrit 1 sur... ?", answer: "2" },
            { question: "Un quart s'écrit 1 sur... ?", answer: "4" },
            { question: "Si je coupe en 3, j'ai des... ?", answer: "tiers" },
            { question: "2 quarts font un... ?", answer: "demi" },
            { question: "Le nombre du haut est le... ?", answer: "numérateur" }
        ]
    },
    {
        id: 'maths-08-monnaie',
        title: 'La Monnaie (€)',
        emoji: '💰',
        xp: 45,
        difficulty: 'facile',
        curioHint: "Dans 1 Euro, il y a 100 centimes !",
        exercises: [
            { question: "1€ + 50c = ... c ?", answer: "150" },
            { question: "Combien de billets de 5€ pour faire 10€ ?", answer: "2" },
            { question: "J'ai 2€, j'achète un pain à 1€. Reste ?", answer: "1" },
            { question: "50c + 50c = ... € ?", answer: "1" },
            { question: "Combien de pièces de 1€ pour faire 5€ ?", answer: "5" }
        ]
    },
    {
        id: 'maths-09-multiplications-avancées',
        title: 'Tables de 6 à 9',
        emoji: '🧨',
        xp: 60,
        difficulty: 'difficile',
        curioHint: "Pour 9x7, baisse ton 7ème doigt... tu lis 6 et 3, donc 63 !",
        exercises: [
            { question: "7 x 7 = ?", answer: "49" },
            { question: "8 x 6 = ?", answer: "48" },
            { question: "9 x 4 = ?", answer: "36" },
            { question: "8 x 9 = ?", answer: "72" },
            { question: "6 x 7 = ?", answer: "42" }
        ]
    },
    {
        id: 'maths-10-heures-durees',
        title: 'Lire l\'Heure',
        emoji: '⌚',
        xp: 50,
        difficulty: 'moyen',
        curioHint: "La petite aiguille montre les heures, la grande montre les minutes (faites de 5 en 5).",
        exercises: [
            { question: "Combien de minutes dans une heure ?", answer: "60" },
            { question: "Combien d'heures dans un jour ?", answer: "24" },
            { question: "Midi et demi = ... minutes ?", answer: "30" },
            { question: "Un quart d'heure = ... minutes ?", answer: "15" },
            { question: "3 quarts d'heure = ... minutes ?", answer: "45" }
        ]
    },
    {
        id: 'maths-11-solides',
        title: 'Les Solides',
        emoji: '📦',
        xp: 50,
        difficulty: 'moyen',
        curioHint: "Un cube a 6 faces carrées. Un bloc dans Minecraft est un cube !",
        exercises: [
            { question: "Combien de faces a un cube ?", answer: "6" },
            { question: "La pyramide a une base souvent... ?", answer: "carrée" },
            { question: "Une balle est une... ?", answer: "sphère" },
            { question: "Comment appelle-t-on le coin d'un solide ?", answer: "sommet" },
            { question: "Une face de dé est un... ?", answer: "carré" }
        ]
    },
    {
        id: 'maths-12-perimetres',
        title: 'Calcul de Périmètre',
        emoji: '🏃',
        xp: 55,
        difficulty: 'moyen',
        curioHint: "Le périmètre est le tour de la forme. Additionne tous les côtés !",
        exercises: [
            { question: "Périmètre d'un carré de côté 2cm ?", answer: "8" },
            { question: "Périmètre d'un triangle de côtés 3, 4, 5 ?", answer: "12" },
            { question: "Côté d'un carré de périmètre 20 ?", answer: "5" },
            { question: "Périmètre d'un rectangle 5cm et 2cm ?", answer: "14" },
            { question: "Tour d'un champ carré de 10m de côté ?", answer: "40" }
        ]
    },
    {
        id: 'maths-13-logique',
        title: 'Suites Logiques',
        emoji: '🧩',
        xp: 50,
        difficulty: 'moyen',
        curioHint: "Trouve la règle ! Est-ce qu'on ajoute toujours le même nombre ?",
        exercises: [
            { question: "2, 4, 6... suite ?", answer: "8" },
            { question: "10, 20, 30... suite ?", answer: "40" },
            { question: "5, 10, 15... suite ?", answer: "20" },
            { question: "1, 3, 5, 7... suite ?", answer: "9" },
            { question: "100, 90, 80... suite ?", answer: "70" }
        ]
    },
    {
        id: 'maths-14-grands-nombres',
        title: 'Milliers et Millions',
        emoji: '🌌',
        xp: 60,
        difficulty: 'difficile',
        curioHint: "Utilise le tableau des nombres : Unités, Dizaines, Centaines, Milliers !",
        exercises: [
            { question: "10 centaines = 1... ?", answer: "millier" },
            { question: "Chiffre des dizaines dans 152 ?", answer: "5" },
            { question: "Nombre de centaines dans 1200 ?", answer: "12" },
            { question: "1000 + 1000 + 500 = ?", answer: "2500" },
            { question: "Comment s'écrit mille en chiffres ?", answer: "1000" }
        ]
    },
    {
        id: 'maths-15-exam',
        title: 'EXAMEN FINAL : Grand Mage des Chiffres',
        emoji: '👑',
        xp: 100,
        difficulty: 'difficile',
        curioHint: "Dernière étape ! Respire bien, Curio est là pour t'encourager. Tu connais tout !",
        exercises: [
            { question: "8 x 7 = ?", answer: "56" },
            { question: "La moitié de 100 ?", answer: "50" },
            { question: "Périmètre d'un carré de côté 3 ?", answer: "12" },
            { question: "150 + 150 = ?", answer: "300" },
            { question: "Combien de côtés a un hexagone ?", answer: "6" }
        ]
    }
];

// Exportation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mathsLessons;
}