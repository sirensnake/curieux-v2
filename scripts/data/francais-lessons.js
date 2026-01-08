/**
 * ==========================================
 * DATA : francais-lessons.js
 * Plateforme : Le Monde des Curieux
 * Contenu : 15 Leçons (Version Intégrale)
 * ==========================================
 */

const francaisLessons = [
    {
        id: 'francais-01-present',
        title: 'Verbes au Présent',
        emoji: '📝',
        xp: 40,
        difficulty: 'facile',
        curioHint: "Au présent, les verbes en -ER chantent la même chanson : -e, -es, -e, -ons, -ez, -ent !",
        exercises: [
            { question: "Je (manger) une pomme.", answer: "mange" },
            { question: "Tu (jouer) au ballon.", answer: "joues" },
            { question: "Il (sauter) la haie.", answer: "saute" },
            { question: "Nous (marcher) vite.", answer: "marchons" },
            { question: "Ils (chanter) fort.", answer: "chantent" }
        ]
    },
    {
        id: 'francais-02-passe-compose',
        title: 'Passé Composé',
        emoji: '⏰',
        xp: 50,
        difficulty: 'moyen',
        curioHint: "Attention à l'auxiliaire ! Avec 'Être', on accorde le participe passé avec le sujet.",
        exercises: [
            { question: "J'ai (finir) mon assiette.", answer: "fini" },
            { question: "Elle est (partir) hier.", answer: "partie" },
            { question: "Nous avons (gagner) le match.", answer: "gagné" },
            { question: "Tu as (regarder) le film.", answer: "regardé" },
            { question: "Ils sont (tomber).", answer: "tombés" }
        ]
    },
    {
        id: 'francais-03-futur',
        title: 'Futur Simple',
        emoji: '🔮',
        xp: 50,
        difficulty: 'moyen',
        curioHint: "Le futur est facile : garde le verbe entier (l'infinitif) et ajoute : -ai, -as, -a, -ons, -ez, -ont.",
        exercises: [
            { question: "Demain, je (ranger) ma chambre.", answer: "rangerai" },
            { question: "Tu (avoir) une surprise.", answer: "auras" },
            { question: "Elle (parler) avec lui.", answer: "parlera" },
            { question: "Nous (manger) tard.", answer: "mangerons" },
            { question: "Ils (finir) demain.", answer: "finiront" }
        ]
    },
    {
        id: 'francais-04-accords',
        title: 'Accords Sujet-Verbe',
        emoji: '🎯',
        xp: 45,
        difficulty: 'moyen',
        curioHint: "Le sujet est le chef ! Pose-toi la question : 'Qui est-ce qui fait l'action ?' pour trouver la terminaison.",
        exercises: [
            { question: "Les enfants (jouer) dehors.", answer: "jouent" },
            { question: "La petite fille (chanter).", answer: "chante" },
            { question: "Le chien et le chat (dormir).", answer: "dorment" },
            { question: "On (écouter) la musique.", answer: "écoute" },
            { question: "Mes parents (arriver).", answer: "arrivent" }
        ]
    },
    {
        id: 'francais-05-pluriels',
        title: 'Pluriels Difficiles',
        emoji: '🔢',
        xp: 50,
        difficulty: 'moyen',
        curioHint: "Bijou, caillou, chou, genou, hibou, joujou, pou... ces sept-là prennent un X au pluriel !",
        exercises: [
            { question: "Le pluriel de 'caillou' ?", answer: "cailloux" },
            { question: "Le pluriel de 'hibou' ?", answer: "hiboux" },
            { question: "Le pluriel de 'journal' ?", answer: "journaux" },
            { question: "Le pluriel de 'clou' ?", answer: "clous" },
            { question: "Le pluriel de 'cheval' ?", answer: "chevaux" }
        ]
    },
    {
        id: 'francais-06-homophones',
        title: 'Homophones',
        emoji: '🎭',
        xp: 55,
        difficulty: 'moyen',
        curioHint: "Astuce : Remplace 'a' par 'avait'. Si ça marche, c'est le verbe avoir, donc pas d'accent !",
        exercises: [
            { question: "Il (a/à) froid.", answer: "a" },
            { question: "Elle va (a/à) la mer.", answer: "à" },
            { question: "C'est (et/est) fini.", answer: "est" },
            { question: "Du pain (et/est) du lait.", answer: "et" },
            { question: "(son/sont) cartable est là.", answer: "son" }
        ]
    },
    {
        id: 'francais-07-ponctuation',
        title: 'Ponctuation',
        emoji: '❓',
        xp: 40,
        difficulty: 'facile',
        curioHint: "La ponctuation, c'est la respiration du texte ! Le point d'interrogation attend toujours une réponse.",
        exercises: [
            { question: "Quel signe finit une question ?", answer: "?" },
            { question: "Quel signe sépare les mots d'une liste ?", answer: "," },
            { question: "Quel signe marque la surprise ?", answer: "!" },
            { question: "Une phrase finit par un ?", answer: "." },
            { question: "Quel signe introduit un dialogue ?", answer: "-" }
        ]
    },
    {
        id: 'francais-08-nature',
        title: 'Nature des Mots',
        emoji: '🏷️',
        xp: 50,
        difficulty: 'moyen',
        curioHint: "La nature d'un mot, c'est son identité (nom, verbe...). Elle ne change jamais, contrairement à sa fonction.",
        exercises: [
            { question: "Nature du mot 'manger' ?", answer: "verbe" },
            { question: "Nature du mot 'petit' ?", answer: "adjectif" },
            { question: "Nature du mot 'Paris' ?", answer: "nom propre" },
            { question: "Nature du mot 'elle' ?", answer: "pronom" },
            { question: "Nature du mot 'pomme' ?", answer: "nom commun" }
        ]
    },
    {
        id: 'francais-09-complements',
        title: 'COD / COI',
        emoji: '🎯',
        xp: 60,
        difficulty: 'difficile',
        curioHint: "Pour le COD, demande 'Quoi ?' ou 'Qui ?' après le verbe. S'il y a une préposition (à, de), c'est un COI !",
        exercises: [
            { question: "Il boit son lait. 'son lait' est un ?", answer: "cod" },
            { question: "Elle écrit à son ami. 'à son ami' est ?", answer: "coi" },
            { question: "Je regarde le chat. 'le chat' est ?", answer: "cod" },
            { question: "Il parle de son chien. 'de son chien' ?", answer: "coi" },
            { question: "Tu lances le ballon. 'le ballon' est ?", answer: "cod" }
        ]
    },
    {
        id: 'francais-10-adjectifs',
        title: 'Adjectifs Qualificatifs',
        emoji: '🎨',
        xp: 45,
        difficulty: 'moyen',
        curioHint: "L'adjectif est un caméléon : il prend le genre (masculin/féminin) et le nombre (singulier/pluriel) du nom.",
        exercises: [
            { question: "Une (grand) forêt.", answer: "grande" },
            { question: "Des chiens (noir).", answer: "noirs" },
            { question: "Une fleur (bleu).", answer: "bleue" },
            { question: "Des gâteaux (sucré).", answer: "sucrés" },
            { question: "Une (joli) maison.", answer: "jolie" }
        ]
    },
    {
        id: 'francais-11-synonymes',
        title: 'Synonymes & Antonymes',
        emoji: '🔄',
        xp: 50,
        difficulty: 'moyen',
        curioHint: "Synonyme = même sens. Antonyme = sens contraire. C'est pratique pour éviter les répétitions !",
        exercises: [
            { question: "Synonyme de 'beau' ?", answer: "magnifique" },
            { question: "Antonyme de 'petit' ?", answer: "grand" },
            { question: "Synonyme de 'rapidement' ?", answer: "vite" },
            { question: "Antonyme de 'froid' ?", answer: "chaud" },
            { question: "Synonyme de 'maison' ?", answer: "habitation" }
        ]
    },
    {
        id: 'francais-12-vocabulaire',
        title: 'Vocabulaire Thématique',
        emoji: '📖',
        xp: 45,
        difficulty: 'facile',
        curioHint: "Les mots d'une même famille partagent le même radical (ex: terre, terrain, déterrer).",
        exercises: [
            { question: "Radical de 'dentiste' ?", answer: "dent" },
            { question: "Mot de la famille de 'lait' ?", answer: "laiterie" },
            { question: "Radical de 'jardinage' ?", answer: "jardin" },
            { question: "Mot de la famille de 'fleur' ?", answer: "fleuriste" },
            { question: "Radical de 'camionnette' ?", answer: "camion" }
        ]
    },
    {
        id: 'francais-13-phrases',
        title: 'Types de Phrases',
        emoji: '💬',
        xp: 40,
        difficulty: 'facile',
        curioHint: "Une phrase impérative donne un ordre ou un conseil. Elle finit souvent par un point ou un point d'exclamation.",
        exercises: [
            { question: "Ferme la porte ! Type ?", answer: "impératif" },
            { question: "Comment vas-tu ? Type ?", answer: "interrogatif" },
            { question: "Le ciel est bleu. Type ?", answer: "déclaratif" },
            { question: "Quelle chance ! Type ?", answer: "exclamatif" },
            { question: "Viens ici. Type ?", answer: "impératif" }
        ]
    },
    {
        id: 'francais-14-analyse',
        title: 'Analyse de Phrase',
        emoji: '🔍',
        xp: 60,
        difficulty: 'difficile',
        curioHint: "Commence toujours par chercher le verbe conjugué, puis son sujet. Le reste, ce sont des compléments.",
        exercises: [
            { question: "Dans 'Le chat dort', qui est le sujet ?", answer: "le chat" },
            { question: "Dans 'Maman mange', qui est le sujet ?", answer: "maman" },
            { question: "Dans 'Nous lisons', quel est le verbe ?", answer: "lisons" },
            { question: "Sujet de 'Tu ris' ?", answer: "tu" },
            { question: "Verbe de 'Ils courent' ?", answer: "courent" }
        ]
    },
    {
        id: 'francais-15-exam',
        title: 'Examen Final',
        emoji: '🏆',
        xp: 100,
        difficulty: 'difficile',
        curioHint: "Relis bien chaque question ! Curio a confiance en toi, tu es devenu un vrai pro du français.",
        exercises: [
            { question: "Terminaison de 'Nous' au présent ?", answer: "ons" },
            { question: "Pluriel de 'bijou' ?", answer: "bijoux" },
            { question: "Mélanie (a/à) faim.", answer: "a" },
            { question: "Nature du mot 'petit' ?", answer: "adjectif" },
            { question: "Capital de la France ?", answer: "Paris" }
        ]
    }
];

// Exportation pour le moteur de leçon
if (typeof module !== 'undefined' && module.exports) {
    module.exports = francaisLessons;
}