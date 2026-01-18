/**
 * ==========================================
 * DONNÉES LEÇONS SCIENCES CM1-CM2
 * Le Monde des Curieux - Version 2026
 * ==========================================
 */

const sciencesLessons = [
    // LEÇON 1 : SYSTÈME SOLAIRE
    {
        id: 'sciences-01-systeme-solaire',
        title: 'Système Solaire',
        emoji: '🌍',
        xp: 45,
        difficulty: 'facile',
        exercises: [
            { question: 'Quelle étoile est au centre du système solaire ?', answer: 'soleil', hint: 'C’est notre étoile, source de lumière et de chaleur.' },
            { question: 'Combien de planètes y a-t-il dans le système solaire ?', answer: '8', hint: 'Compte Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus et Neptune.' },
            { question: 'Quelle est la planète la plus proche du Soleil ?', answer: 'mercure', hint: 'Elle est petite, rocheuse et très chaude.' },
            { question: 'Sur quelle planète vivons-nous ?', answer: 'terre', hint: 'On l’appelle aussi la planète bleue.' },
            { question: 'Quelle est la plus grosse planète du système solaire ?', answer: 'jupiter', hint: 'C’est une géante gazeuse avec une grande tache rouge.' },
            { question: 'Comment s\'appelle le satellite naturel de la Terre ?', answer: 'lune', hint: 'Elle change d’aspect selon sa position (phases).' },
            { question: 'Quelle planète est surnommée la planète rouge ?', answer: 'mars', hint: 'Sa couleur vient de la présence d’oxyde de fer (rouille).' },
            { question: 'Combien de temps met la Terre pour faire le tour du Soleil ?', answer: '1 an', hint: 'Cela correspond à 365 jours (et un quart !).' }
        ]
    },

    // LEÇON 2 : CYCLE DE L'EAU
    {
        id: 'sciences-02-cycle-eau',
        title: 'Cycle de l\'Eau',
        emoji: '💧',
        xp: 45,
        difficulty: 'facile',
        exercises: [
            { question: 'Que devient l\'eau liquide quand elle chauffe et s\'évapore ?', answer: 'vapeur', hint: 'C’est l’eau sous forme de gaz invisible.' },
            { question: 'Comment s\'appelle le passage de l\'eau liquide à la vapeur ?', answer: 'évaporation', hint: 'Le soleil chauffe l’eau des océans pour créer ce phénomène.' },
            { question: 'Comment s\'appelle la vapeur qui redevient liquide (nuages) ?', answer: 'condensation', hint: 'C’est quand le gaz refroidit et redevient des gouttelettes.' },
            { question: 'Comment appelle-t-on l\'eau qui tombe du ciel (pluie, neige) ?', answer: 'précipitations', hint: 'Ce mot désigne tout ce qui "tombe" des nuages.' },
            { question: 'Où va l\'eau de pluie qui s\'infiltre dans le sol ?', answer: 'nappes phréatiques', hint: 'Ce sont de grandes réserves d’eau souterraines.' },
            { question: 'Dans quel état est l\'eau dans les nuages ?', answer: 'liquide', hint: 'Ce sont des milliards de minuscules gouttelettes en suspension.' }
        ]
    },

    // LEÇON 3 : ÉTATS DE LA MATIÈRE
    {
        id: 'sciences-03-etats-matiere',
        title: 'États de la Matière',
        emoji: '🧊',
        xp: 50,
        difficulty: 'moyen',
        exercises: [
            { question: 'Quels sont les 3 états de la matière ?', answer: 'solide liquide gaz', hint: 'Pense à la glace, l’eau du robinet et la vapeur.' },
            { question: 'Comment s\'appelle le passage du solide au liquide ?', answer: 'fusion', hint: 'Comme quand un glaçon devient de l’eau.' },
            { question: 'Comment s\'appelle le passage du liquide au solide ?', answer: 'solidification', hint: 'C’est ce qui arrive dans ton congélateur.' },
            { question: 'À quelle température l\'eau pure gèle-t-elle ?', answer: '0', hint: 'C’est le point de congélation en degrés Celsius.' },
            { question: 'À quelle température l\'eau pure bout-elle ?', answer: '100', hint: 'À cette température, l’eau s’évapore très vite.' }
        ]
    },

    // LEÇON 7 : CORPS HUMAIN - DIGESTION (CORRIGÉE)
    {
        id: 'sciences-07-digestion',
        title: 'Corps Humain : Digestion',
        emoji: '🍽️',
        xp: 55,
        difficulty: 'moyen',
        exercises: [
            { question: 'Par où entre la nourriture dans le corps ?', answer: 'bouche', hint: 'C’est là que commence la mastication.' },
            { question: 'Quel tube relie la bouche à l\'estomac ?', answer: 'oesophage', hint: 'Un long conduit musculaire (s’écrit avec "oe").' },
            { question: 'Dans quel organe la nourriture est-elle transformée en bouillie ?', answer: 'estomac', hint: 'Une poche qui utilise des sucs acides.' },
            { question: 'Quel organe très long absorbe les nutriments ?', answer: 'intestin grêle', hint: 'Il mesure environ 6 mètres chez un adulte !' },
            { question: 'Quel organe récupère l\'eau des restes non digérés ?', answer: 'gros intestin', hint: 'C’est la dernière grande étape avant l’évacuation.' },
            { question: 'Comment appelle-t-on les substances utiles tirées des aliments ?', answer: 'nutriments', hint: 'Ils passent dans le sang pour nourrir tes muscles et ton cerveau.' }
        ]
    },

    // LEÇON 10 : VOLCANS ET SÉISMES
    {
        id: 'sciences-10-volcans',
        title: 'Volcans et Séismes',
        emoji: '🌋',
        xp: 55,
        difficulty: 'moyen',
        exercises: [
            { question: 'Comment s\'appelle la roche fondue sous la terre ?', answer: 'magma', hint: 'Elle est stockée dans une chambre sous le volcan.' },
            { question: 'Comment s' + "'" + 'appelle le magma quand il sort à la surface ?', answer: 'lave', hint: 'Elle refroidit au contact de l’air.' },
            { question: 'Comment appelle-t-on les vibrations brutales du sol ?', answer: 'séisme', hint: 'On dit aussi un tremblement de terre.' },
            { question: 'Quel appareil enregistre les secousses terrestres ?', answer: 'sismographe', hint: 'Il trace des lignes sur un papier ou un écran.' },
            { question: 'Comment s\'appelle le lieu où la rupture de la roche a lieu en profondeur ?', answer: 'foyer', hint: 'C’est le point de départ du séisme sous la terre.' }
        ]
    }
    // ... Les autres leçons suivent la même structure
];

// Export pour utilisation Node.js ou Browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sciencesLessons;
} else {
    window.sciencesLessons = sciencesLessons;
}

console.log('✅ ' + sciencesLessons.length + ' leçons de Sciences chargées avec succès.');
