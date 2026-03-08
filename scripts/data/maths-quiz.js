/**
 * ==========================================
 * QUIZ MATHÉMATIQUES - Format QCM
 * Le Monde des Curieux
 * ==========================================
 * Indexé par domaine (clés Alpine.js)
 * Format : { question, options, correct, explanation }
 */

const mathsQuiz = {

    numeration: [
        { question: "Combien vaut le chiffre 5 dans le nombre 3 512 ?", options: ["5", "50", "500", "5 000"], correct: "500", explanation: "Le 5 est à la position des centaines, donc il vaut 500." },
        { question: "Écris en chiffres : Quatre-vingt-trois mille six cent vingt", options: ["83 620", "83 602", "80 362", "86 320"], correct: "83 620", explanation: "83 000 + 600 + 20 = 83 620." },
        { question: "Quelle fraction représente un quart ?", options: ["1/2", "1/3", "1/4", "1/5"], correct: "1/4", explanation: "Un quart = une part sur quatre = 1/4." },
        { question: "Quel nombre est le plus grand ?", options: ["999", "1 001", "1 000", "990"], correct: "1 001", explanation: "1 001 > 1 000 > 999 > 990." },
        { question: "Quel est le successeur de 99 999 ?", options: ["99 998", "100 000", "100 001", "99 990"], correct: "100 000", explanation: "99 999 + 1 = 100 000." }
    ],

    calcul: [
        { question: "346 + 227 = ?", options: ["563", "573", "583", "593"], correct: "573", explanation: "6+7=13 (retenue), 4+2+1=7, 3+2=5. Résultat : 573." },
        { question: "802 - 456 = ?", options: ["326", "336", "346", "356"], correct: "346", explanation: "802 - 400 = 402, puis 402 - 56 = 346." },
        { question: "7 × 8 = ?", options: ["48", "54", "56", "63"], correct: "56", explanation: "7 × 8 = (7×10) - (7×2) = 70 - 14 = 56." },
        { question: "72 ÷ 9 = ?", options: ["7", "8", "9", "10"], correct: "8", explanation: "9 × 8 = 72." },
        { question: "25 × 4 = ?", options: ["80", "90", "100", "110"], correct: "100", explanation: "25 × 4 = 100. Astuce : 4 fois un quart de 100." }
    ],

    geometrie: [
        { question: "Combien de côtés a un hexagone ?", options: ["4", "5", "6", "8"], correct: "6", explanation: "Hexa = 6 en grec. Un hexagone a 6 côtés." },
        { question: "Comment s'appelle un triangle avec 3 côtés égaux ?", options: ["Isocèle", "Scalène", "Rectangle", "Équilatéral"], correct: "Équilatéral", explanation: "Équilatéral = tous les côtés égaux (et tous les angles = 60°)." },
        { question: "Un angle droit mesure ?", options: ["45°", "60°", "90°", "180°"], correct: "90°", explanation: "Un angle droit mesure exactement 90°." },
        { question: "Périmètre d'un carré de côté 6 cm ?", options: ["12 cm", "18 cm", "24 cm", "36 cm"], correct: "24 cm", explanation: "Périmètre = 4 × côté = 4 × 6 = 24 cm." },
        { question: "Aire d'un rectangle L=12 cm, l=5 cm ?", options: ["34 cm²", "50 cm²", "60 cm²", "70 cm²"], correct: "60 cm²", explanation: "Aire = L × l = 12 × 5 = 60 cm²." }
    ],

    mesures: [
        { question: "2,5 km = ? m", options: ["25 m", "250 m", "2 500 m", "25 000 m"], correct: "2 500 m", explanation: "1 km = 1 000 m, donc 2,5 × 1 000 = 2 500 m." },
        { question: "3 kg 400 g = ? g", options: ["340 g", "3 040 g", "3 400 g", "34 000 g"], correct: "3 400 g", explanation: "3 kg = 3 000 g. 3 000 + 400 = 3 400 g." },
        { question: "1 heure 30 minutes = ? minutes", options: ["70 min", "80 min", "90 min", "130 min"], correct: "90 min", explanation: "1 heure = 60 minutes. 60 + 30 = 90 minutes." },
        { question: "De 8h45 à 10h15, combien de minutes ?", options: ["70 min", "80 min", "90 min", "100 min"], correct: "90 min", explanation: "De 8h45 à 9h45 = 60 min, de 9h45 à 10h15 = 30 min. Total : 90 min." },
        { question: "2 L 50 cL = ? cL", options: ["52 cL", "205 cL", "250 cL", "2050 cL"], correct: "250 cL", explanation: "1 L = 100 cL, donc 2 L = 200 cL. 200 + 50 = 250 cL." }
    ],

    problemes: [
        { question: "Un livre coûte 8 €. Paul achète 3 livres. Combien dépense-t-il ?", options: ["11 €", "21 €", "24 €", "32 €"], correct: "24 €", explanation: "3 × 8 = 24 €." },
        { question: "Il y a 156 élèves répartis en 6 classes égales. Combien par classe ?", options: ["24", "26", "28", "30"], correct: "26", explanation: "156 ÷ 6 = 26 élèves par classe." },
        { question: "Un train part à 9h15 et arrive à 11h45. Durée du trajet ?", options: ["1h30", "2h00", "2h30", "3h00"], correct: "2h30", explanation: "De 9h15 à 11h15 = 2h, de 11h15 à 11h45 = 30 min. Total : 2h30." },
        { question: "Marie a 45 €. Elle dépense 18 €. Combien lui reste-t-il ?", options: ["23 €", "27 €", "33 €", "37 €"], correct: "27 €", explanation: "45 - 18 = 27 €." },
        { question: "Un rectangle mesure 15 cm × 8 cm. Quel est son périmètre ?", options: ["23 cm", "40 cm", "46 cm", "120 cm"], correct: "46 cm", explanation: "(15 + 8) × 2 = 23 × 2 = 46 cm." }
    ],

    solides: [
        { question: "Comment s'appelle un solide avec 6 faces carrées identiques ?", options: ["Pavé droit", "Cube", "Pyramide", "Cylindre"], correct: "Cube", explanation: "Le cube a 6 faces carrées toutes identiques." },
        { question: "Combien de faces a un pavé droit (boîte rectangulaire) ?", options: ["4", "5", "6", "8"], correct: "6", explanation: "Un pavé droit a 6 faces rectangulaires (3 paires de faces identiques)." },
        { question: "Quelle est la forme de la base d'un cylindre ?", options: ["Carré", "Triangle", "Cercle", "Rectangle"], correct: "Cercle", explanation: "Un cylindre a deux bases circulaires reliées par une surface courbe." },
        { question: "Un patron est... ?", options: ["Un dessin 3D d'un solide", "Un développement à plat d'un solide", "Une formule de volume", "Une face d'un solide"], correct: "Un développement à plat d'un solide", explanation: "Un patron est la surface d'un solide qu'on peut plier pour le reconstituer." },
        { question: "1 litre = ?", options: ["1 cm³", "10 dm³", "1 dm³", "100 cm³"], correct: "1 dm³", explanation: "1 L = 1 dm³ = 1 000 cm³. C'est une équivalence fondamentale !" }
    ],

    proportionnalite: [
        { question: "Si 2 cahiers coûtent 4 €, combien coûtent 3 cahiers ?", options: ["5 €", "6 €", "7 €", "8 €"], correct: "6 €", explanation: "1 cahier = 2 €, donc 3 cahiers = 3 × 2 = 6 €." },
        { question: "Dans un tableau de proportionnalité, que reste constant ?", options: ["La somme", "Le produit", "Le rapport", "La différence"], correct: "Le rapport", explanation: "Le rapport (quotient) entre les deux lignes est toujours le même." },
        { question: "Une voiture roule à 90 km/h pendant 3h. Quelle distance ?", options: ["270 km", "300 km", "180 km", "90 km"], correct: "270 km", explanation: "Distance = vitesse × temps = 90 × 3 = 270 km." },
        { question: "Une recette pour 4 personnes : 200 g de farine. Quantité pour 6 personnes ?", options: ["250 g", "280 g", "300 g", "320 g"], correct: "300 g", explanation: "200 ÷ 4 = 50 g par personne. 50 × 6 = 300 g." },
        { question: "Sur une carte à l'échelle 1/50 000, 2 cm représentent quelle distance réelle ?", options: ["100 m", "500 m", "1 km", "10 km"], correct: "1 km", explanation: "2 cm × 50 000 = 100 000 cm = 1 000 m = 1 km." }
    ],

    donnees: [
        { question: "Quel graphique est le plus adapté pour comparer des quantités ?", options: ["Graphique en courbes", "Diagramme circulaire", "Diagramme en barres", "Tableau"], correct: "Diagramme en barres", explanation: "Le diagramme en barres permet de comparer des valeurs facilement." },
        { question: "Dans un diagramme circulaire, que représente chaque secteur ?", options: ["Une valeur absolue", "Une durée", "Une proportion du total", "Une moyenne"], correct: "Une proportion du total", explanation: "Chaque secteur représente un pourcentage ou une fraction du total (360°)." },
        { question: "Quelle est la moyenne de : 4, 6, 8, 10 ?", options: ["6", "7", "8", "28"], correct: "7", explanation: "Somme = 4+6+8+10 = 28. Moyenne = 28 ÷ 4 = 7." },
        { question: "Quel graphique est le plus adapté pour montrer une évolution dans le temps ?", options: ["Diagramme en barres", "Graphique en courbes", "Diagramme circulaire", "Tableau de données"], correct: "Graphique en courbes", explanation: "Les courbes montrent bien l'évolution et les tendances dans le temps." },
        { question: "Dans un tableau de données, les colonnes servent à ?", options: ["Compter les lignes", "Organiser les informations par catégorie", "Calculer des moyennes", "Représenter des pourcentages"], correct: "Organiser les informations par catégorie", explanation: "Les colonnes regroupent les données selon des catégories ou critères." }
    ],

    calcul_litteral: [
        { question: "Si n = 5, que vaut n + 3 ?", options: ["3", "5", "8", "15"], correct: "8", explanation: "On remplace n par sa valeur : 5 + 3 = 8." },
        { question: "Si a = 4, combien vaut 2 × a ?", options: ["2", "4", "6", "8"], correct: "8", explanation: "2 × a = 2 × 4 = 8." },
        { question: "Quelle expression représente 'le double de x' ?", options: ["x + 2", "x - 2", "2x", "x ÷ 2"], correct: "2x", explanation: "Le double de x s'écrit 2x (ou 2 × x)." },
        { question: "Si x = 3, combien vaut x² ?", options: ["6", "9", "12", "18"], correct: "9", explanation: "x² = x × x = 3 × 3 = 9." },
        { question: "Le périmètre d'un carré de côté c s'écrit ?", options: ["c²", "c + 4", "4c", "4 + c"], correct: "4c", explanation: "Périmètre = 4 × côté = 4 × c = 4c." }
    ],

    problemes_complexes: [
        { question: "Une chemise coûte 35 €. Avec une réduction de 20 %, quel est le nouveau prix ?", options: ["15 €", "25 €", "28 €", "30 €"], correct: "28 €", explanation: "20% de 35 = 7 €. Prix réduit = 35 - 7 = 28 €." },
        { question: "Un bus transporte 48 élèves. Il faut remplir des mini-bus de 8 places. Combien de mini-bus ?", options: ["5", "6", "7", "8"], correct: "6", explanation: "48 ÷ 8 = 6 mini-bus exactement." },
        { question: "Paul a lu 3/8 d'un livre de 200 pages. Combien de pages a-t-il lues ?", options: ["50", "60", "75", "80"], correct: "75", explanation: "3/8 de 200 = (200 ÷ 8) × 3 = 25 × 3 = 75 pages." },
        { question: "Un robinet remplit 15 L par minute. Combien de temps pour remplir une cuve de 180 L ?", options: ["10 min", "12 min", "15 min", "20 min"], correct: "12 min", explanation: "180 ÷ 15 = 12 minutes." },
        { question: "(12 × 5) + (8 × 3) = ?", options: ["72", "80", "84", "96"], correct: "84", explanation: "Priorité aux multiplications : 60 + 24 = 84." }
    ],

    fractions: [
        { question: "Dans 3/8, que représente le 3 ?", options: ["Le dénominateur", "Le numérateur", "Le double", "La somme"], correct: "Le numérateur", explanation: "Le nombre du haut est le numérateur : les parts prises." },
        { question: "Quelle fraction est la plus grande ?", options: ["3/8", "2/8", "1/8", "5/8"], correct: "5/8", explanation: "Même dénominateur (8) : on compare les numérateurs. 5 est le plus grand." },
        { question: "2/7 + 3/7 = ?", options: ["5/14", "1/7", "6/7", "5/7"], correct: "5/7", explanation: "Même dénominateur : 2 + 3 = 5, dénominateur reste 7." },
        { question: "Quelle est la valeur décimale de 1/2 ?", options: ["0,1", "0,2", "0,5", "1,2"], correct: "0,5", explanation: "1 ÷ 2 = 0,5. La moitié vaut 0,5." },
        { question: "Quelle est la valeur décimale de 1/4 ?", options: ["0,4", "0,25", "0,14", "0,5"], correct: "0,25", explanation: "1 ÷ 4 = 0,25. Un quart vaut 0,25." },
        { question: "Une pizza coupée en 8 parts : tu en manges 3. Quelle fraction as-tu mangée ?", options: ["3/5", "5/8", "3/8", "8/3"], correct: "3/8", explanation: "3 parts prises sur 8 au total = 3/8." },
        { question: "Laquelle de ces fractions est égale à 1/2 ?", options: ["2/6", "3/6", "4/6", "1/4"], correct: "3/6", explanation: "3/6 = 1/2 car on peut diviser numérateur et dénominateur par 3." },
        { question: "1/4 + 2/4 = ?", options: ["3/8", "2/8", "3/4", "1/2"], correct: "3/4", explanation: "Même dénominateur : 1 + 2 = 3, dénominateur reste 4. Résultat : 3/4." },
        { question: "Simplifie 6/8.", options: ["1/2", "2/3", "4/6", "3/4"], correct: "3/4", explanation: "On divise par 2 : 6÷2=3 et 8÷2=4, donc 6/8 = 3/4." },
        { question: "Un terrain de 120 m² dont 3/8 est un jardin. Surface du jardin ?", options: ["30 m²", "36 m²", "40 m²", "45 m²"], correct: "45 m²", explanation: "3/8 de 120 = (120÷8) × 3 = 15 × 3 = 45 m²." },
        { question: "Simplifie la fraction 6/8.", options: ["1/2", "2/3", "3/4", "4/6"], correct: "3/4", explanation: "On divise par 2 : 6/2=3 et 8/2=4." },
        { question: "Range dans l'ordre croissant : 2/3, 1/2, 5/6.", options: ["2/3 < 1/2 < 5/6", "1/2 < 5/6 < 2/3", "5/6 < 2/3 < 1/2", "1/2 < 2/3 < 5/6"], correct: "1/2 < 2/3 < 5/6", explanation: "En 6emes : 3/6 < 4/6 < 5/6." },
        { question: "Quelle fraction est egale a 0,75 ?", options: ["1/4", "1/2", "2/3", "3/4"], correct: "3/4", explanation: "0,75 = 75/100 = 3/4." },
        { question: "Quelle fraction est superieure a 1 ?", options: ["3/4", "5/6", "7/8", "5/4"], correct: "5/4", explanation: "5/4 = 1,25 > 1. Le numerateur depasse le denominateur." },
        { question: "3/4 - 1/4 = ?", options: ["2/0", "4/4", "2/8", "2/4"], correct: "2/4", explanation: "3 - 1 = 2, denominateur reste 4. Resultat : 2/4 = 1/2." },
        { question: "Marie a mange 2/5 d'une tarte et Paul 1/5. Quelle fraction reste-t-il ?", options: ["1/5", "2/5", "3/5", "4/5"], correct: "2/5", explanation: "Mange : 2/5 + 1/5 = 3/5. Reste : 5/5 - 3/5 = 2/5." },
        { question: "Un eleve a repondu juste a 7 questions sur 10. Quelle fraction ?", options: ["3/10", "7/3", "10/7", "7/10"], correct: "7/10", explanation: "7 bonnes reponses sur 10 questions = 7/10." },
        { question: "Laquelle de ces fractions est la plus petite ?", options: ["2/3", "3/5", "5/8", "7/12"], correct: "7/12", explanation: "En 120emes : 80, 72, 75, 70. La plus petite est 7/12." },
        { question: "2/3 de 18 = ?", options: ["6", "9", "12", "15"], correct: "12", explanation: "1/3 de 18 = 6, donc 2/3 = 2 x 6 = 12." },
        { question: "Quelle est la valeur decimale de 3/4 ?", options: ["0,25", "0,5", "0,75", "1,25"], correct: "0,75", explanation: "3 / 4 = 0,75. Trois quarts valent 0,75." }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = mathsQuiz;
}

console.log('✅ Quiz Maths chargé : ' + Object.keys(mathsQuiz).length + ' domaines');
