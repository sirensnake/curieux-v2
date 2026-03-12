/**
 * ==========================================
 * DONNÉES LEÇONS MATHÉMATIQUES CM1-CM2
 * Le Monde des Curieux
 * ==========================================
 * 15 leçons progressives avec hints pédagogiques
 */

const mathsLessons = [
    // ========================================
    // LEÇON 1 : TABLES DE MULTIPLICATION
    // ========================================
    {
        id: 'maths-01-multiplications',
        title: 'Tables de Multiplication',
        emoji: '✖️',
        xp: 50,
        difficulty: 'facile',
        exercises: [
            { question: '7 × 8 = ?', answer: '56', hint: 'Astuce : 7 × 8 = (7 × 10) - (7 × 2) = 70 - 14 = 56' },
            { question: '9 × 6 = ?', answer: '54', hint: 'Pense à 9 × 6 = (10 × 6) - 6 = 60 - 6 = 54' },
            { question: '8 × 7 = ?', answer: '56', hint: 'C\'est la même que 7 × 8 ! La multiplication est commutative.' },
            { question: '6 × 9 = ?', answer: '54', hint: 'Compte par 6 : 6, 12, 18, 24, 30, 36, 42, 48, 54' },
            { question: '12 × 5 = ?', answer: '60', hint: '12 × 5 = (10 × 5) + (2 × 5) = 50 + 10 = 60' },
            { question: '8 × 9 = ?', answer: '72', hint: '8 × 9 = (8 × 10) - 8 = 80 - 8 = 72' },
            { question: '7 × 6 = ?', answer: '42', hint: 'Astuce : 7 × 6 = 7 × (5 + 1) = 35 + 7 = 42' },
            { question: '11 × 9 = ?', answer: '99', hint: '11 × 9 = (10 × 9) + 9 = 90 + 9 = 99' }
        ],
        quiz: [
            { q: "7 × 8 = ?", o: ["48", "54", "56", "63"], c: "56", e: "7 × 8 = (7×10) - (7×2) = 70 - 14 = 56." },
            { q: "9 × 6 = ?", o: ["45", "48", "54", "63"], c: "54", e: "9 × 6 = (10×6) - 6 = 60 - 6 = 54." },
            { q: "12 × 5 = ?", o: ["55", "60", "65", "70"], c: "60", e: "12 × 5 = (10×5) + (2×5) = 50 + 10 = 60." },
            { q: "8 × 9 = ?", o: ["63", "70", "72", "81"], c: "72", e: "8 × 9 = (8×10) - 8 = 80 - 8 = 72." },
            { q: "11 × 9 = ?", o: ["90", "99", "101", "109"], c: "99", e: "11 × 9 = (10×9) + 9 = 90 + 9 = 99." }
        ]
    },

    // ========================================
    // LEÇON 2 : ADDITIONS À 3 CHIFFRES
    // ========================================
    {
        id: 'maths-02-additions',
        title: 'Additions à 3 Chiffres',
        emoji: '➕',
        xp: 45,
        difficulty: 'facile',
        exercises: [
            { question: '346 + 227 = ?', answer: '573', hint: 'Commence par les unités : 6 + 7 = 13 (pose 3, retenue 1)' },
            { question: '489 + 365 = ?', answer: '854', hint: 'Attention aux retenues : 9 + 5 = 14, 8 + 6 + 1 = 15' },
            { question: '572 + 149 = ?', answer: '721', hint: 'Astuce : 572 + 150 - 1 = 722 - 1 = 721' },
            { question: '638 + 284 = ?', answer: '922', hint: 'Décompose : 638 + 200 = 838, puis + 84 = 922' },
            { question: '795 + 468 = ?', answer: '1263', hint: 'N\'oublie pas : le résultat peut dépasser 1000 !' },
            { question: '523 + 399 = ?', answer: '922', hint: 'Arrondis : 523 + 400 = 923, puis - 1 = 922' },
            { question: '814 + 697 = ?', answer: '1511', hint: 'Pense : 814 + 700 = 1514, puis - 3 = 1511' }
        ],
        quiz: [
            { q: "346 + 227 = ?", o: ["563", "573", "583", "593"], c: "573", e: "6+7=13 (retenue), 4+2+1=7, 3+2=5." },
            { q: "489 + 365 = ?", o: ["844", "854", "864", "874"], c: "854", e: "9+5=14 (retenue), 8+6+1=15 (retenue), 4+3+1=8." },
            { q: "795 + 468 = ?", o: ["1253", "1263", "1273", "1283"], c: "1263", e: "5+8=13, 9+6+1=16, 7+4+1=12." },
            { q: "523 + 399 = ?", o: ["912", "922", "932", "942"], c: "922", e: "523 + 400 = 923, puis -1 = 922." },
            { q: "814 + 697 = ?", o: ["1501", "1511", "1521", "1531"], c: "1511", e: "814 + 700 = 1514, puis -3 = 1511." }
        ]
    },

    // ========================================
    // LEÇON 3 : SOUSTRACTIONS AVEC RETENUES
    // ========================================
    {
        id: 'maths-03-soustractions',
        title: 'Soustractions Complexes',
        emoji: '➖',
        xp: 50,
        difficulty: 'moyen',
        exercises: [
            { question: '534 - 278 = ?', answer: '256', hint: 'Emprunte à la dizaine : 534 devient 4 14 - 8, puis 2 13 - 7' },
            { question: '802 - 456 = ?', answer: '346', hint: 'Astuce : 802 - 400 = 402, puis 402 - 56 = 346' },
            { question: '623 - 387 = ?', answer: '236', hint: 'Méthode : soustrais 400, puis ajoute 13 → 223 + 13 = 236' },
            { question: '710 - 543 = ?', answer: '167', hint: 'Décompose : 710 - 500 = 210, puis 210 - 43 = 167' },
            { question: '905 - 678 = ?', answer: '227', hint: 'Pense : 905 - 700 = 205, puis 205 + 22 = 227' },
            { question: '1000 - 763 = ?', answer: '237', hint: 'Compte à rebours : 763 + 237 = 1000' },
            { question: '841 - 596 = ?', answer: '245', hint: 'Arrondis : 841 - 600 = 241, puis + 4 = 245' }
        ],
        quiz: [
            { q: "534 - 278 = ?", o: ["246", "256", "266", "276"], c: "256", e: "Emprunte : 14-8=6, 12-7=5, 4-2=2." },
            { q: "802 - 456 = ?", o: ["326", "336", "346", "356"], c: "346", e: "802 - 400 = 402, puis 402 - 56 = 346." },
            { q: "1000 - 763 = ?", o: ["227", "237", "247", "257"], c: "237", e: "763 + 237 = 1000." },
            { q: "710 - 543 = ?", o: ["157", "167", "177", "187"], c: "167", e: "710 - 500 = 210, puis 210 - 43 = 167." },
            { q: "905 - 678 = ?", o: ["217", "227", "237", "247"], c: "227", e: "905 - 700 = 205, puis 205 + 22 = 227." }
        ]
    },

    // ========================================
    // LEÇON 4 : FRACTIONS SIMPLES
    // ========================================
    {
        id: 'maths-04-fractions',
        title: 'Introduction aux Fractions',
        emoji: '🍕',
        xp: 60,
        difficulty: 'moyen',
        exercises: [
            { question: 'Combien de quarts dans 1 entier ?', answer: '4', hint: '1 entier = 4/4. Donc 4 quarts = 1 entier.' },
            { question: '1/2 de 8 = ?', answer: '4', hint: 'Divise 8 en 2 parties égales : 8 ÷ 2 = 4' },
            { question: '3/4 de 12 = ?', answer: '9', hint: '1/4 de 12 = 3, donc 3/4 = 3 × 3 = 9' },
            { question: 'Combien de moitiés dans 3 entiers ?', answer: '6', hint: '1 entier = 2 moitiés, donc 3 entiers = 3 × 2 = 6' },
            { question: '1/4 + 1/4 = ?/4', answer: '2', hint: 'Additionne les numérateurs : 1 + 1 = 2. Résultat : 2/4' },
            { question: '2/3 de 9 = ?', answer: '6', hint: '1/3 de 9 = 3, donc 2/3 = 2 × 3 = 6' },
            { question: '1/2 + 1/4 = ?/4', answer: '3', hint: 'Transforme 1/2 en 2/4, puis 2/4 + 1/4 = 3/4' },
            { question: 'Simplifie 6/8.', answer: '3/4', hint: 'Divise numérateur et dénominateur par 2 : 6÷2=3 et 8÷2=4.' },
            { question: '3/4 de 120 m² = ?', answer: '90', hint: '1/4 de 120 = 30, donc 3/4 = 3 × 30 = 90 m².' },
            { question: 'Range dans l'ordre croissant : 2/3, 1/2, 5/6.', answer: '1/2, 2/3, 5/6', hint: 'Convertis en 6èmes : 3/6 < 4/6 < 5/6.' },
            { question: 'Quelle fraction est égale à 0,75 ?', answer: '3/4', hint: '0,75 = 75/100 = 3/4 en simplifiant par 25.' },
            { question: '2/5 + 1/5 = ?/5', answer: '3', hint: 'Même dénominateur : additionne les numérateurs. 2 + 1 = 3.' },
            { question: 'Une pizza coupée en 8. Tu manges 3 parts. Quelle fraction reste-t-il ?', answer: '5/8', hint: '8/8 - 3/8 = 5/8.' },
            { question: 'Quelle fraction est supérieure à 1 ?', answer: '5/4', hint: '5/4 = 1,25 > 1. Le numérateur est plus grand que le dénominateur.' },
            { question: '3/4 - 1/4 = ?', answer: '2/4', hint: 'Même dénominateur : 3 - 1 = 2. Résultat : 2/4 (= 1/2).' },
            { question: 'Marie a 3/8 d'une tarte, Paul 2/8. Quelle fraction ont-ils ensemble ?', answer: '5/8', hint: 'Même dénominateur : 3 + 2 = 5. Résultat : 5/8.' },
            { question: 'Quelle est la valeur décimale de 3/4 ?', answer: '0,75', hint: '3 ÷ 4 = 0,75. Trois quarts valent 0,75.' }
        ],
        quiz: [
            { q: "Dans 3/8, que represente le 3 ?", o: ["Le denominateur", "Le numerateur", "Le double", "La somme"], c: "Le numerateur", e: "Le nombre du haut est le numerateur." },
            { q: "Quelle fraction est la plus grande ?", o: ["3/8", "2/8", "1/8", "5/8"], c: "5/8", e: "Meme denominateur : 5 est le plus grand numerateur." },
            { q: "2/7 + 3/7 = ?", o: ["5/14", "1/7", "6/7", "5/7"], c: "5/7", e: "Meme denominateur : 2 + 3 = 5, denominateur reste 7." },
            { q: "Simplifie 6/8.", o: ["1/2", "2/3", "4/6", "3/4"], c: "3/4", e: "On divise par 2 : 6/2=3 et 8/2=4." },
            { q: "Quelle fraction est egale a 0,75 ?", o: ["1/4", "1/2", "2/3", "3/4"], c: "3/4", e: "0,75 = 75/100 = 3/4." },
            { q: "Quelle fraction est superieure a 1 ?", o: ["3/4", "5/6", "7/8", "5/4"], c: "5/4", e: "5/4 = 1,25 > 1." },
            { q: "3/4 - 1/4 = ?", o: ["2/0", "4/4", "2/8", "2/4"], c: "2/4", e: "3 - 1 = 2, denominateur reste 4." },
            { q: "Un terrain de 120 m2 dont 3/8 est jardin. Surface ?", o: ["30 m2", "36 m2", "40 m2", "45 m2"], c: "45 m2", e: "(120/8) x 3 = 15 x 3 = 45 m2." },
            { q: "1/4 + 2/4 = ?", o: ["3/8", "2/8", "3/4", "1/2"], c: "3/4", e: "1 + 2 = 3, denominateur reste 4." },
            { q: "Laquelle est la plus petite ?", o: ["2/3", "3/5", "5/8", "7/12"], c: "7/12", e: "En 120emes : 80, 72, 75, 70. Donc 7/12 est la plus petite." }
        ]
    },

    // ========================================
    // LEÇON 5 : DIVISIONS SIMPLES
    // ========================================
    {
        id: 'maths-05-divisions',
        title: 'Divisions à 1 Chiffre',
        emoji: '➗',
        xp: 55,
        difficulty: 'moyen',
        exercises: [
            { question: '48 ÷ 6 = ?', answer: '8', hint: 'Pense : 6 × ? = 48. C\'est la table de 6 !' },
            { question: '63 ÷ 7 = ?', answer: '9', hint: 'Table de 7 : 7 × 9 = 63' },
            { question: '56 ÷ 8 = ?', answer: '7', hint: 'Rappelle-toi : 8 × 7 = 56' },
            { question: '72 ÷ 9 = ?', answer: '8', hint: 'Vérifie : 9 × 8 = 72' },
            { question: '81 ÷ 9 = ?', answer: '9', hint: 'C\'est un carré parfait : 9 × 9 = 81' },
            { question: '54 ÷ 6 = ?', answer: '9', hint: 'Compte par 6 jusqu\'à 54 : 6, 12, 18... 54' },
            { question: '45 ÷ 5 = ?', answer: '9', hint: 'Table de 5 : 5 × 9 = 45' }
        ],
        quiz: [
            { q: "48 / 6 = ?", o: ["6", "7", "8", "9"], c: "8", e: "6 x 8 = 48." },
            { q: "63 / 7 = ?", o: ["7", "8", "9", "10"], c: "9", e: "7 x 9 = 63." },
            { q: "72 / 9 = ?", o: ["7", "8", "9", "10"], c: "8", e: "9 x 8 = 72." },
            { q: "81 / 9 = ?", o: ["8", "9", "10", "11"], c: "9", e: "9 x 9 = 81." },
            { q: "144 / 12 = ?", o: ["10", "11", "12", "13"], c: "12", e: "12 x 12 = 144." }
        ]
    },

    // ========================================
    // LEÇON 6 : NOMBRES DÉCIMAUX
    // ========================================
    {
        id: 'maths-06-decimaux',
        title: 'Découverte des Décimaux',
        emoji: '📏',
        xp: 65,
        difficulty: 'moyen',
        exercises: [
            { question: '0,5 + 0,3 = ?', answer: '0,8', hint: 'Additionne après la virgule : 5 + 3 = 8' },
            { question: '1,2 + 0,4 = ?', answer: '1,6', hint: '2 dixièmes + 4 dixièmes = 6 dixièmes' },
            { question: '2,5 - 0,8 = ?', answer: '1,7', hint: 'Emprunte 1 entier : 2,5 = 1,15 puis 15 - 8 = 7' },
            { question: 'Combien de dixièmes dans 1,3 ?', answer: '13', hint: '1,3 = 1 + 0,3 = 10 dixièmes + 3 dixièmes = 13' },
            { question: '0,7 + 0,6 = ?', answer: '1,3', hint: '7 + 6 = 13 dixièmes = 1,3' },
            { question: '3,4 - 1,2 = ?', answer: '2,2', hint: 'Soustrais entiers et dixièmes séparément : 3 - 1 = 2, 4 - 2 = 2' },
            { question: '0,25 × 4 = ?', answer: '1', hint: '0,25 = 1/4, donc 4 × (1/4) = 1' }
        ],
        quiz: [
            { q: "0,5 + 0,3 = ?", o: ["0,7", "0,8", "0,9", "1,0"], c: "0,8", e: "5 + 3 = 8 dixiemes." },
            { q: "2,5 - 0,8 = ?", o: ["1,5", "1,6", "1,7", "1,8"], c: "1,7", e: "1,5 - 0,8 = 0,7 ; 1 + 0,7 = 1,7." },
            { q: "0,7 + 0,6 = ?", o: ["1,1", "1,2", "1,3", "1,4"], c: "1,3", e: "7 + 6 = 13 dixiemes = 1,3." },
            { q: "Combien de dixiemes dans 1,3 ?", o: ["3", "10", "13", "130"], c: "13", e: "1,3 = 10 + 3 dixiemes = 13 dixiemes." },
            { q: "0,25 x 4 = ?", o: ["0,5", "0,75", "1", "1,25"], c: "1", e: "0,25 = 1/4, donc 4 x (1/4) = 1." }
        ]
    },

    // ========================================
    // LEÇON 7 : NOMBRES JUSQU'À 1000
    // ========================================
    {
        id: 'maths-07-mille',
        title: 'Compter jusqu\'à 1000',
        emoji: '🔢',
        xp: 40,
        difficulty: 'facile',
        exercises: [
            { question: 'Combien de centaines dans 743 ?', answer: '7', hint: 'Regarde le chiffre des centaines : 7' },
            { question: '500 + 300 = ?', answer: '800', hint: '5 centaines + 3 centaines = 8 centaines' },
            { question: 'Quel nombre suit 999 ?', answer: '1000', hint: 'Après 999 on passe au millier !' },
            { question: 'Combien de dizaines dans 840 ?', answer: '84', hint: '840 = 84 dizaines (ou 840 ÷ 10)' },
            { question: '1000 - 1 = ?', answer: '999', hint: 'Juste avant 1000 c\'est 999' },
            { question: 'Écris en chiffres : sept cent vingt-trois', answer: '723', hint: '7 centaines, 2 dizaines, 3 unités' },
            { question: 'Range du plus petit au plus grand : 567 ou 576 ?', answer: '567', hint: 'Compare les dizaines : 6 < 7, donc 567 < 576' }
        ],
        quiz: [
            { q: "Combien de centaines dans 3 500 ?", o: ["3", "35", "350", "3500"], c: "35", e: "3 500 / 100 = 35 centaines." },
            { q: "Chiffre des milliers dans 47 832 ?", o: ["4", "7", "8", "3"], c: "7", e: "4=dizaines de milliers, 7=milliers." },
            { q: "Comment ecrit-on quinze mille sept ?", o: ["1507", "15007", "15070", "15700"], c: "15007", e: "15 000 + 7 = 15 007." },
            { q: "Quel nombre est entre 9 990 et 10 010 ?", o: ["9 989", "9 999", "10 011", "10 020"], c: "9 999", e: "9 999 est compris entre 9 990 et 10 010." },
            { q: "Combien de centaines dans 12 784 ?", o: ["12", "127", "1278", "12784"], c: "127", e: "12 784 / 100 = 127 (reste 84)." }
        ]
    },

    // ========================================
    // LEÇON 8 : PÉRIMÈTRES
    // ========================================
    {
        id: 'maths-08-perimetres',
        title: 'Calcul de Périmètres',
        emoji: '📐',
        xp: 70,
        difficulty: 'moyen',
        exercises: [
            { question: 'Périmètre d\'un carré de côté 5 cm ?', answer: '20', hint: 'Carré = 4 côtés égaux, donc 5 × 4 = 20 cm' },
            { question: 'Rectangle : longueur 8 cm, largeur 3 cm. Périmètre ?', answer: '22', hint: 'Formule : (L + l) × 2 = (8 + 3) × 2 = 22 cm' },
            { question: 'Carré de côté 7 cm. Périmètre ?', answer: '28', hint: '7 + 7 + 7 + 7 = 28 cm' },
            { question: 'Triangle équilatéral de côté 6 cm. Périmètre ?', answer: '18', hint: 'Équilatéral = 3 côtés égaux, donc 6 × 3 = 18 cm' },
            { question: 'Rectangle : longueur 10 cm, largeur 4 cm. Périmètre ?', answer: '28', hint: '(10 + 4) × 2 = 14 × 2 = 28 cm' },
            { question: 'Carré dont le périmètre est 32 cm. Côté ?', answer: '8', hint: '32 ÷ 4 = 8 cm par côté' },
            { question: 'Hexagone régulier de côté 5 cm. Périmètre ?', answer: '30', hint: '6 côtés égaux : 5 × 6 = 30 cm' }
        ],
        quiz: [
            { q: "Perimetre d'un carre de cote 6 cm ?", o: ["12 cm", "18 cm", "24 cm", "36 cm"], c: "24 cm", e: "4 x 6 = 24 cm." },
            { q: "Perimetre rectangle L=15 cm, l=8 cm ?", o: ["23 cm", "40 cm", "46 cm", "120 cm"], c: "46 cm", e: "(15+8) x 2 = 46 cm." },
            { q: "Aire d'un carre de cote 9 cm ?", o: ["36 cm2", "72 cm2", "81 cm2", "90 cm2"], c: "81 cm2", e: "9 x 9 = 81 cm2." },
            { q: "Perimetre 30 cm, longueur 9 cm. Quelle largeur ?", o: ["3 cm", "6 cm", "12 cm", "21 cm"], c: "6 cm", e: "L+l = 15. 15 - 9 = 6 cm." },
            { q: "Aire rectangle L=12 cm, l=5 cm ?", o: ["34 cm2", "50 cm2", "60 cm2", "70 cm2"], c: "60 cm2", e: "12 x 5 = 60 cm2." }
        ]
    },

    // ========================================
    // LEÇON 9 : MESURES DE LONGUEUR
    // ========================================
    {
        id: 'maths-09-mesures',
        title: 'Conversions de Longueurs',
        emoji: '📏',
        xp: 55,
        difficulty: 'moyen',
        exercises: [
            { question: 'Combien de cm dans 1 mètre ?', answer: '100', hint: '1 m = 100 cm (centi = centième)' },
            { question: '3 m = ? cm', answer: '300', hint: '3 × 100 = 300 cm' },
            { question: '250 cm = ? m', answer: '2,5', hint: '250 ÷ 100 = 2,5 m (ou 2 m 50 cm)' },
            { question: 'Combien de mm dans 1 cm ?', answer: '10', hint: '1 cm = 10 mm (milli = millième)' },
            { question: '5 cm = ? mm', answer: '50', hint: '5 × 10 = 50 mm' },
            { question: '1 km = ? m', answer: '1000', hint: 'Kilo = mille, donc 1 km = 1000 m' },
            { question: '2,5 m = ? cm', answer: '250', hint: '2,5 × 100 = 250 cm' }
        ],
        quiz: [
            { q: "2,5 km = ? m", o: ["25 m", "250 m", "2 500 m", "25 000 m"], c: "2 500 m", e: "2,5 x 1 000 = 2 500 m." },
            { q: "3 kg 400 g = ? g", o: ["340 g", "3 040 g", "3 400 g", "34 000 g"], c: "3 400 g", e: "3 000 + 400 = 3 400 g." },
            { q: "1 heure 30 minutes = ? minutes", o: ["70", "80", "90", "130"], c: "90", e: "60 + 30 = 90 minutes." },
            { q: "2 L 50 cL = ? cL", o: ["52", "205", "250", "2050"], c: "250", e: "2 x 100 + 50 = 250 cL." },
            { q: "De 8h45 a 10h15, combien de minutes ?", o: ["70", "80", "90", "100"], c: "90", e: "De 8h45 a 9h45 = 60 min, + 30 min = 90 min." }
        ]
    },

    // ========================================
    // LEÇON 10 : CALCUL MENTAL RAPIDE
    // ========================================
    {
        id: 'maths-10-calcul-mental',
        title: 'Calcul Mental Rapide',
        emoji: '🧠',
        xp: 60,
        difficulty: 'moyen',
        exercises: [
            { question: '25 + 37 = ?', answer: '62', hint: 'Décompose : 25 + 30 = 55, puis + 7 = 62' },
            { question: '50 × 6 = ?', answer: '300', hint: '50 = 5 × 10, donc 5 × 6 × 10 = 300' },
            { question: '88 - 19 = ?', answer: '69', hint: 'Soustrais 20, puis ajoute 1 : 88 - 20 + 1 = 69' },
            { question: '15 × 4 = ?', answer: '60', hint: '15 × 2 = 30, donc 30 × 2 = 60' },
            { question: '99 + 78 = ?', answer: '177', hint: 'Arrondis : 100 + 78 = 178, puis - 1 = 177' },
            { question: '12 × 11 = ?', answer: '132', hint: '12 × 10 = 120, puis + 12 = 132' },
            { question: '64 ÷ 4 = ?', answer: '16', hint: 'Divise par 2 deux fois : 64 ÷ 2 = 32, 32 ÷ 2 = 16' }
        ],
        quiz: [
            { q: "25 x 4 = ?", o: ["80", "90", "100", "110"], c: "100", e: "25 x 4 = 100." },
            { q: "50 + 99 = ?", o: ["148", "149", "150", "151"], c: "149", e: "50 + 100 - 1 = 149." },
            { q: "3 x 19 = ?", o: ["54", "57", "60", "63"], c: "57", e: "3 x 20 - 3 = 57." },
            { q: "200 - 87 = ?", o: ["103", "113", "123", "133"], c: "113", e: "200 - 90 + 3 = 113." },
            { q: "16 x 5 = ?", o: ["70", "75", "80", "85"], c: "80", e: "16 x 10 / 2 = 80." }
        ]
    },

    // ========================================
    // LEÇON 11 : GÉOMÉTRIE DE BASE
    // ========================================
    {
        id: 'maths-11-geometrie',
        title: 'Formes Géométriques',
        emoji: '🔷',
        xp: 50,
        difficulty: 'facile',
        exercises: [
            { question: 'Combien de côtés a un triangle ?', answer: '3', hint: 'Tri = trois en latin' },
            { question: 'Combien d\'angles droits dans un carré ?', answer: '4', hint: 'Un carré a 4 angles de 90°' },
            { question: 'Combien de sommets a un rectangle ?', answer: '4', hint: 'Rectangle = 4 sommets (coins)' },
            { question: 'Combien de côtés a un hexagone ?', answer: '6', hint: 'Hexa = six en grec' },
            { question: 'Une figure à 5 côtés s\'appelle ?', answer: 'pentagone', hint: 'Penta = cinq' },
            { question: 'Combien de côtés égaux dans un triangle équilatéral ?', answer: '3', hint: 'Équilatéral = tous les côtés égaux' },
            { question: 'Combien de diagonales dans un carré ?', answer: '2', hint: 'Relie les coins opposés : 2 diagonales' }
        ],
        quiz: [
            { q: "Combien de cotes a un hexagone ?", o: ["4", "5", "6", "8"], c: "6", e: "Hexa = 6 en grec." },
            { q: "Triangle avec 3 cotes egaux ?", o: ["Isocele", "Scalene", "Rectangle", "Equilateral"], c: "Equilateral", e: "Equilateral = tous les cotes egaux." },
            { q: "Un angle droit mesure ?", o: ["45", "60", "90", "180"], c: "90", e: "Un angle droit = 90 degres." },
            { q: "Quadrilatere avec 4 cotes egaux et 4 angles droits ?", o: ["Rectangle", "Losange", "Carre", "Trapeze"], c: "Carre", e: "Le carre a 4 cotes egaux ET 4 angles droits." },
            { q: "Deux droites paralleles ?", o: ["Se croisent", "Ne se croisent jamais", "Sont perpendiculaires", "Forment un angle"], c: "Ne se croisent jamais", e: "Les paralleles gardent toujours la meme distance." }
        ]
    },

    // ========================================
    // LEÇON 12 : DURÉES ET HEURES
    // ========================================
    {
        id: 'maths-12-durees',
        title: 'Calculs de Durées',
        emoji: '⏰',
        xp: 65,
        difficulty: 'moyen',
        exercises: [
            { question: 'Combien de minutes dans 1 heure ?', answer: '60', hint: '1 h = 60 min' },
            { question: '2 h 30 min = ? min', answer: '150', hint: '2 × 60 + 30 = 120 + 30 = 150 min' },
            { question: 'De 9h à 11h, combien d\'heures ?', answer: '2', hint: '11 - 9 = 2 heures' },
            { question: '180 min = ? h', answer: '3', hint: '180 ÷ 60 = 3 heures' },
            { question: 'De 14h15 à 15h45, combien de minutes ?', answer: '90', hint: 'De 14h15 à 15h15 = 60 min, puis + 30 = 90 min' },
            { question: 'Combien de secondes dans 1 minute ?', answer: '60', hint: '1 min = 60 secondes' },
            { question: '1 h 15 min + 45 min = ? h', answer: '2', hint: '15 + 45 = 60 min = 1 h, donc 1 h + 1 h = 2 h' }
        ],
        quiz: [
            { q: "Combien d'heures dans une journee ?", o: ["12", "20", "24", "48"], c: "24", e: "Une journee = 24 heures." },
            { q: "Film 1h35, debut 14h20. Fin ?", o: ["15h45", "15h50", "15h55", "16h05"], c: "15h55", e: "14h20 + 1h35 = 15h55." },
            { q: "Jours dans une annee non bissextile ?", o: ["354", "360", "365", "366"], c: "365", e: "365 jours. Bissextile = 366." },
            { q: "Duree entre 9h45 et 11h15 ?", o: ["1h15", "1h30", "1h45", "2h"], c: "1h30", e: "9h45 a 10h45 = 1h, + 30 min = 1h30." },
            { q: "3 semaines = ? jours", o: ["14", "18", "21", "28"], c: "21", e: "3 x 7 = 21 jours." }
        ]
    },

    // ========================================
    // LEÇON 13 : GRANDS NOMBRES
    // ========================================
    {
        id: 'maths-13-grands-nombres',
        title: 'Nombres à 4 et 5 Chiffres',
        emoji: '💯',
        xp: 55,
        difficulty: 'moyen',
        exercises: [
            { question: 'Combien de milliers dans 5 347 ?', answer: '5', hint: 'Chiffre des milliers = 5' },
            { question: '10 000 - 1 = ?', answer: '9999', hint: 'Juste avant 10 000 c\'est 9 999' },
            { question: 'Écris en chiffres : douze mille trois cent cinquante', answer: '12350', hint: '12 milliers, 3 centaines, 5 dizaines, 0 unités' },
            { question: '7 000 + 500 + 40 + 3 = ?', answer: '7543', hint: 'Additionne par position : 7 543' },
            { question: 'Quel est le nombre suivant 19 999 ?', answer: '20000', hint: 'Après 19 999 on passe à 20 000' },
            { question: 'Décompose 8 426 : combien de centaines ?', answer: '84', hint: '8 426 = 84 centaines + 26 unités' },
            { question: 'Range du plus petit au plus grand : 9 876 ou 9 867 ?', answer: '9867', hint: 'Compare les dizaines : 6 < 7, donc 9 867 < 9 876' }
        ],
        quiz: [
            { q: "Comment ecrit-on deux millions trois cent mille ?", o: ["2 030 000", "2 300 000", "2 003 000", "20 300 000"], c: "2 300 000", e: "2 000 000 + 300 000 = 2 300 000." },
            { q: "Successeur de 999 999 ?", o: ["999 998", "1 000 000", "1 000 001", "10 000 000"], c: "1 000 000", e: "999 999 + 1 = 1 000 000." },
            { q: "Combien de milliers dans 5 000 000 ?", o: ["50", "500", "5 000", "50 000"], c: "5 000", e: "5 000 000 / 1 000 = 5 000." },
            { q: "Arrondi a la centaine de mille : 3 749 000", o: ["3 700 000", "3 750 000", "4 000 000", "3 800 000"], c: "3 700 000", e: "Chiffre des dizaines de mille = 4 (< 5) : on arrondit a 3 700 000." },
            { q: "Quel est le plus grand : 1 200 000, 980 000, 1 020 000 ?", o: ["980 000", "1 020 000", "1 200 000", "Tous egaux"], c: "1 200 000", e: "1 200 000 > 1 020 000 > 980 000." }
        ]
    },

    // ========================================
    // LEÇON 14 : PROPORTIONNALITÉ
    // ========================================
    {
        id: 'maths-14-proportionnel',
        title: 'Situations Proportionnelles',
        emoji: '⚖️',
        xp: 70,
        difficulty: 'difficile',
        exercises: [
            { question: '3 pommes coûtent 6 €. Combien coûtent 5 pommes ?', answer: '10', hint: '1 pomme = 6 ÷ 3 = 2 €, donc 5 × 2 = 10 €' },
            { question: 'En 2 heures je parcours 10 km. Combien en 5 heures ?', answer: '25', hint: 'Vitesse = 10 ÷ 2 = 5 km/h, donc 5 × 5 = 25 km' },
            { question: '4 stylos = 8 €. Prix de 1 stylo ?', answer: '2', hint: '8 ÷ 4 = 2 € par stylo' },
            { question: 'Pour 6 personnes il faut 12 œufs. Combien pour 9 ?', answer: '18', hint: '6 personnes = 12 œufs, donc 9 = (12 ÷ 6) × 9 = 18' },
            { question: '5 kg de tomates = 15 €. Prix de 3 kg ?', answer: '9', hint: '1 kg = 15 ÷ 5 = 3 €, donc 3 × 3 = 9 €' },
            { question: 'Un train parcourt 120 km en 2 h. Combien en 3 h ?', answer: '180', hint: 'Vitesse = 120 ÷ 2 = 60 km/h, donc 3 × 60 = 180 km' },
            { question: '8 bonbons coûtent 4 €. Combien avec 10 € ?', answer: '20', hint: '1 € = 8 ÷ 4 = 2 bonbons, donc 10 × 2 = 20 bonbons' }
        ],
        quiz: [
            { q: "2 cahiers = 4 euros. Combien pour 3 cahiers ?", o: ["5 euros", "6 euros", "7 euros", "8 euros"], c: "6 euros", e: "1 cahier = 2 euros, 3 x 2 = 6 euros." },
            { q: "Dans un tableau de proportionnalite, que reste constant ?", o: ["La somme", "Le produit", "Le rapport", "La difference"], c: "Le rapport", e: "Le quotient entre les deux lignes est toujours le meme." },
            { q: "90 km/h pendant 3h = ?", o: ["270 km", "300 km", "180 km", "90 km"], c: "270 km", e: "90 x 3 = 270 km." },
            { q: "Recette 4 personnes : 200g farine. Quantite pour 6 personnes ?", o: ["250 g", "280 g", "300 g", "320 g"], c: "300 g", e: "200/4 = 50 g/personne. 50 x 6 = 300 g." },
            { q: "5 stylos = 12,50 euros. Prix de 1 stylo ?", o: ["2 euros", "2,50 euros", "3 euros", "3,50 euros"], c: "2,50 euros", e: "12,50 / 5 = 2,50 euros." }
        ]
    },

    // ========================================
    // LEÇON 15 : EXAMEN FINAL MATHÉMATIQUES
    // ========================================
    {
        id: 'maths-15-examen',
        title: 'Examen Final Maths',
        emoji: '🏆',
        xp: 100,
        difficulty: 'difficile',
        exercises: [
            { question: '(12 × 5) + (8 × 3) = ?', answer: '84', hint: 'Calcule d\'abord les multiplications : 60 + 24' },
            { question: 'Aire d\'un carré de côté 9 cm = ?', answer: '81', hint: 'Aire = côté × côté = 9 × 9 = 81 cm²' },
            { question: '3/4 de 20 = ?', answer: '15', hint: '1/4 de 20 = 5, donc 3/4 = 3 × 5 = 15' },
            { question: '456 + 789 = ?', answer: '1245', hint: 'Attention aux retenues multiples !' },
            { question: '2,5 km = ? m', answer: '2500', hint: '2,5 × 1000 = 2 500 m' },
            { question: 'De 8h45 à 10h15, combien de minutes ?', answer: '90', hint: 'De 8h45 à 9h45 = 60 min, puis + 30 = 90 min' },
            { question: '144 ÷ 12 = ?', answer: '12', hint: 'Table de 12 : 12 × 12 = 144' },
            { question: 'Périmètre rectangle : L = 15 cm, l = 8 cm ?', answer: '46', hint: '(15 + 8) × 2 = 23 × 2 = 46 cm' },
            { question: '5 cahiers = 12,50 €. Prix de 1 cahier ?', answer: '2,5', hint: '12,50 ÷ 5 = 2,50 € (ou 2,5 €)' },
            { question: 'Combien de centaines dans 12 784 ?', answer: '127', hint: '12 784 = 127 centaines + 84 unités' }
        ],
        quiz: [
            { q: "(12 x 5) + (8 x 3) = ?", o: ["72", "80", "84", "96"], c: "84", e: "60 + 24 = 84." },
            { q: "Aire d'un carre de cote 9 cm ?", o: ["36 cm2", "72 cm2", "81 cm2", "90 cm2"], c: "81 cm2", e: "9 x 9 = 81 cm2." },
            { q: "3/4 de 20 = ?", o: ["10", "12", "15", "18"], c: "15", e: "1/4 de 20 = 5, 3 x 5 = 15." },
            { q: "456 + 789 = ?", o: ["1135", "1145", "1245", "1345"], c: "1245", e: "Attention aux retenues." },
            { q: "Perimetre rectangle L=15, l=8 ?", o: ["23 cm", "40 cm", "46 cm", "120 cm"], c: "46 cm", e: "(15+8) x 2 = 46 cm." }
        ]
    }
];

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mathsLessons;
}

console.log('✅ Données Maths chargées : ' + mathsLessons.length + ' leçons');
