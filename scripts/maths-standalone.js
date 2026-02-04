// ========================================
// SYSTÈME COMPLET STANDALONE - MATHÉMATIQUES
// Le Monde des Curieux
// Version : 12 leçons complètes (96 questions)
// CORRIGÉ : Compatible avec dashboard index-dashboard.html
// ========================================

console.log('🧮 Initialisation Section Mathématiques...');

const SECTION_NAME = 'maths';

// ========================================
// CONTENU ÉDUCATIF - BASE DE DONNÉES
// ========================================
const EDUCATIONAL_CONTENT = {
    additions: {
        title: "Additions",
        icon: "➕",
        description: "Calcule des additions avec des nombres à 3-4 chiffres",
        exercises: [
            {
                question: "345 + 128 = ?",
                options: ["463", "473", "483", "493"],
                correct: "473",
                explanation: "345 + 128 = 473 (5+8=13, pose 3 retiens 1, 4+2+1=7, 3+1=4)"
            },
            {
                question: "789 + 456 = ?",
                options: ["1235", "1245", "1255", "1265"],
                correct: "1245",
                explanation: "789 + 456 = 1245"
            },
            {
                question: "1234 + 567 = ?",
                options: ["1791", "1801", "1811", "1821"],
                correct: "1801",
                explanation: "1234 + 567 = 1801"
            },
            {
                question: "452 + 389 = ?",
                options: ["831", "841", "851", "861"],
                correct: "841",
                explanation: "452 + 389 = 841"
            },
            {
                question: "678 + 234 = ?",
                options: ["902", "912", "922", "932"],
                correct: "912",
                explanation: "678 + 234 = 912"
            },
            {
                question: "1567 + 845 = ?",
                options: ["2402", "2412", "2422", "2432"],
                correct: "2412",
                explanation: "1567 + 845 = 2412"
            },
            {
                question: "999 + 1 = ?",
                options: ["1000", "1001", "999", "998"],
                correct: "1000",
                explanation: "999 + 1 = 1000 (passage au millier)"
            },
            {
                question: "3456 + 789 = ?",
                options: ["4235", "4245", "4255", "4265"],
                correct: "4245",
                explanation: "3456 + 789 = 4245"
            }
        ]
    },
    
    soustractions: {
        title: "Soustractions",
        icon: "➖",
        description: "Effectue des soustractions avec retenues",
        exercises: [
            {
                question: "543 - 128 = ?",
                options: ["405", "415", "425", "435"],
                correct: "415",
                explanation: "543 - 128 = 415 (3-8 impossible, emprunte 1: 13-8=5)"
            },
            {
                question: "1000 - 456 = ?",
                options: ["534", "544", "554", "564"],
                correct: "544",
                explanation: "1000 - 456 = 544"
            },
            {
                question: "789 - 234 = ?",
                options: ["545", "555", "565", "575"],
                correct: "555",
                explanation: "789 - 234 = 555"
            },
            {
                question: "2345 - 678 = ?",
                options: ["1657", "1667", "1677", "1687"],
                correct: "1667",
                explanation: "2345 - 678 = 1667"
            },
            {
                question: "500 - 245 = ?",
                options: ["245", "255", "265", "275"],
                correct: "255",
                explanation: "500 - 245 = 255"
            },
            {
                question: "1234 - 567 = ?",
                options: ["657", "667", "677", "687"],
                correct: "667",
                explanation: "1234 - 567 = 667"
            },
            {
                question: "3000 - 1234 = ?",
                options: ["1756", "1766", "1776", "1786"],
                correct: "1766",
                explanation: "3000 - 1234 = 1766"
            },
            {
                question: "852 - 367 = ?",
                options: ["475", "485", "495", "505"],
                correct: "485",
                explanation: "852 - 367 = 485"
            }
        ]
    },
    
    multiplications: {
        title: "Multiplications",
        icon: "✖️",
        description: "Révise tes tables et calcule",
        exercises: [
            {
                question: "7 × 8 = ?",
                options: ["54", "56", "58", "60"],
                correct: "56",
                explanation: "7 × 8 = 56 (table de 7)"
            },
            {
                question: "9 × 6 = ?",
                options: ["52", "54", "56", "58"],
                correct: "54",
                explanation: "9 × 6 = 54 (table de 9)"
            },
            {
                question: "12 × 5 = ?",
                options: ["50", "55", "60", "65"],
                correct: "60",
                explanation: "12 × 5 = 60"
            },
            {
                question: "25 × 4 = ?",
                options: ["90", "95", "100", "105"],
                correct: "100",
                explanation: "25 × 4 = 100"
            },
            {
                question: "15 × 3 = ?",
                options: ["35", "40", "45", "50"],
                correct: "45",
                explanation: "15 × 3 = 45"
            },
            {
                question: "8 × 9 = ?",
                options: ["70", "72", "74", "76"],
                correct: "72",
                explanation: "8 × 9 = 72 (table de 8)"
            },
            {
                question: "20 × 6 = ?",
                options: ["110", "115", "120", "125"],
                correct: "120",
                explanation: "20 × 6 = 120"
            },
            {
                question: "11 × 7 = ?",
                options: ["75", "77", "79", "81"],
                correct: "77",
                explanation: "11 × 7 = 77"
            }
        ]
    },
    
    divisions: {
        title: "Divisions",
        icon: "➗",
        description: "Apprends la division euclidienne",
        exercises: [
            {
                question: "56 ÷ 7 = ?",
                options: ["7", "8", "9", "10"],
                correct: "8",
                explanation: "56 ÷ 7 = 8 (7 × 8 = 56)"
            },
            {
                question: "72 ÷ 9 = ?",
                options: ["7", "8", "9", "10"],
                correct: "8",
                explanation: "72 ÷ 9 = 8 (9 × 8 = 72)"
            },
            {
                question: "45 ÷ 5 = ?",
                options: ["7", "8", "9", "10"],
                correct: "9",
                explanation: "45 ÷ 5 = 9 (5 × 9 = 45)"
            },
            {
                question: "63 ÷ 7 = ?",
                options: ["8", "9", "10", "11"],
                correct: "9",
                explanation: "63 ÷ 7 = 9 (7 × 9 = 63)"
            },
            {
                question: "100 ÷ 4 = ?",
                options: ["20", "25", "30", "35"],
                correct: "25",
                explanation: "100 ÷ 4 = 25 (4 × 25 = 100)"
            },
            {
                question: "81 ÷ 9 = ?",
                options: ["7", "8", "9", "10"],
                correct: "9",
                explanation: "81 ÷ 9 = 9 (9 × 9 = 81)"
            },
            {
                question: "48 ÷ 6 = ?",
                options: ["6", "7", "8", "9"],
                correct: "8",
                explanation: "48 ÷ 6 = 8 (6 × 8 = 48)"
            },
            {
                question: "84 ÷ 12 = ?",
                options: ["5", "6", "7", "8"],
                correct: "7",
                explanation: "84 ÷ 12 = 7 (12 × 7 = 84)"
            }
        ]
    },
    
    decimaux: {
        title: "Nombres Décimaux",
        icon: "🔢",
        description: "Comprends les nombres à virgule",
        exercises: [
            {
                question: "Quel est le nombre décimal qui s'écrit : trois unités et cinq dixièmes ?",
                options: ["3,5", "3,05", "35", "0,35"],
                correct: "3,5",
                explanation: "3 unités + 5 dixièmes = 3,5"
            },
            {
                question: "Quel nombre est le plus grand ?",
                options: ["2,5", "2,45", "2,9", "2,05"],
                correct: "2,9",
                explanation: "2,9 > 2,5 > 2,45 > 2,05"
            },
            {
                question: "4,7 + 2,3 = ?",
                options: ["6,0", "7,0", "6,10", "7,10"],
                correct: "7,0",
                explanation: "4,7 + 2,3 = 7,0 (ou simplement 7)"
            },
            {
                question: "Dans 12,35 combien y a-t-il de centièmes ?",
                options: ["12", "35", "5", "1235"],
                correct: "1235",
                explanation: "12,35 = 1235 centièmes"
            },
            {
                question: "Quel nombre est égal à 5 dixièmes ?",
                options: ["0,5", "5", "0,05", "50"],
                correct: "0,5",
                explanation: "5 dixièmes = 5/10 = 0,5"
            },
            {
                question: "6,8 - 3,2 = ?",
                options: ["3,6", "3,4", "4,6", "9,0"],
                correct: "3,6",
                explanation: "6,8 - 3,2 = 3,6"
            },
            {
                question: "Quel nombre est entre 7,5 et 7,7 ?",
                options: ["7,4", "7,6", "7,8", "7,3"],
                correct: "7,6",
                explanation: "7,5 < 7,6 < 7,7"
            },
            {
                question: "0,25 c'est la même chose que :",
                options: ["25 centièmes", "25 millièmes", "25 dixièmes", "2,5"],
                correct: "25 centièmes",
                explanation: "0,25 = 25/100 = 25 centièmes"
            }
        ]
    },
    
    fractions: {
        title: "Fractions",
        icon: "🍰",
        description: "Découpe et partage !",
        exercises: [
            {
                question: "Si je coupe un gâteau en 2 parts égales et j'en prends 1, quelle fraction ai-je ?",
                options: ["1/2", "1/3", "2/1", "1/4"],
                correct: "1/2",
                explanation: "1 part sur 2 = 1/2 (la moitié)"
            },
            {
                question: "Quelle fraction représente un quart ?",
                options: ["1/2", "1/3", "1/4", "1/5"],
                correct: "1/4",
                explanation: "Un quart = 1/4"
            },
            {
                question: "2/4 c'est la même chose que :",
                options: ["1/2", "1/3", "2/3", "1/4"],
                correct: "1/2",
                explanation: "2/4 = 1/2 (on simplifie en divisant par 2)"
            },
            {
                question: "J'ai mangé 3 parts d'une pizza coupée en 8. Quelle fraction ai-je mangée ?",
                options: ["3/8", "8/3", "3/5", "5/8"],
                correct: "3/8",
                explanation: "3 parts sur 8 = 3/8"
            },
            {
                question: "Quelle fraction est la plus grande ?",
                options: ["1/2", "1/3", "1/4", "1/5"],
                correct: "1/2",
                explanation: "1/2 > 1/3 > 1/4 > 1/5 (plus le dénominateur est petit, plus la fraction est grande)"
            },
            {
                question: "3/3 c'est égal à :",
                options: ["0", "1", "3", "1/3"],
                correct: "1",
                explanation: "3/3 = 1 (l'entier complet)"
            },
            {
                question: "1/2 + 1/2 = ?",
                options: ["2/2 = 1", "1/4", "2/4", "1/2"],
                correct: "2/2 = 1",
                explanation: "1/2 + 1/2 = 2/2 = 1"
            },
            {
                question: "Si 1/3 d'un gâteau pèse 100g, combien pèse le gâteau entier ?",
                options: ["100g", "200g", "300g", "400g"],
                correct: "300g",
                explanation: "1/3 = 100g, donc 3/3 = 100 × 3 = 300g"
            }
        ]
    },
    
    mesures: {
        title: "Mesures",
        icon: "📏",
        description: "Convertis les unités de mesure",
        exercises: [
            {
                question: "1 mètre = combien de centimètres ?",
                options: ["10 cm", "100 cm", "1000 cm", "10000 cm"],
                correct: "100 cm",
                explanation: "1 m = 100 cm"
            },
            {
                question: "500 centimètres = combien de mètres ?",
                options: ["5 m", "50 m", "0,5 m", "500 m"],
                correct: "5 m",
                explanation: "500 cm ÷ 100 = 5 m"
            },
            {
                question: "1 kilogramme = combien de grammes ?",
                options: ["10 g", "100 g", "1000 g", "10000 g"],
                correct: "1000 g",
                explanation: "1 kg = 1000 g"
            },
            {
                question: "2500 grammes = combien de kilogrammes ?",
                options: ["2,5 kg", "25 kg", "250 kg", "0,25 kg"],
                correct: "2,5 kg",
                explanation: "2500 g ÷ 1000 = 2,5 kg"
            },
            {
                question: "3 mètres + 50 centimètres = ?",
                options: ["3,5 m", "350 cm", "Les deux", "53 m"],
                correct: "Les deux",
                explanation: "3 m + 50 cm = 3,5 m = 350 cm"
            },
            {
                question: "1 kilomètre = combien de mètres ?",
                options: ["10 m", "100 m", "1000 m", "10000 m"],
                correct: "1000 m",
                explanation: "1 km = 1000 m"
            },
            {
                question: "750 millilitres = combien de litres ?",
                options: ["0,75 L", "7,5 L", "75 L", "750 L"],
                correct: "0,75 L",
                explanation: "750 mL ÷ 1000 = 0,75 L"
            },
            {
                question: "20 mm = combien de centimètres ?",
                options: ["2 cm", "20 cm", "200 cm", "0,2 cm"],
                correct: "2 cm",
                explanation: "20 mm ÷ 10 = 2 cm"
            }
        ]
    },
    
    problemes: {
        title: "Problèmes",
        icon: "🤔",
        description: "Résous des situations concrètes",
        exercises: [
            {
                question: "Pierre a 12 billes. Il en gagne 5 puis en perd 3. Combien en a-t-il maintenant ?",
                options: ["10", "14", "16", "20"],
                correct: "14",
                explanation: "12 + 5 - 3 = 14 billes"
            },
            {
                question: "Un livre coûte 8€. J'en achète 3. Combien vais-je payer ?",
                options: ["11€", "16€", "24€", "32€"],
                correct: "24€",
                explanation: "8 × 3 = 24€"
            },
            {
                question: "Il y a 24 élèves dans une classe. On fait 4 groupes égaux. Combien d'élèves par groupe ?",
                options: ["4", "5", "6", "8"],
                correct: "6",
                explanation: "24 ÷ 4 = 6 élèves par groupe"
            },
            {
                question: "Marie a 50€. Elle achète un jeu à 32€. Combien lui reste-t-il ?",
                options: ["12€", "18€", "22€", "28€"],
                correct: "18€",
                explanation: "50 - 32 = 18€"
            },
            {
                question: "Un paquet de 6 yaourts coûte 3€. Quel est le prix d'un yaourt ?",
                options: ["0,30€", "0,50€", "0,60€", "2€"],
                correct: "0,50€",
                explanation: "3 ÷ 6 = 0,50€ par yaourt"
            },
            {
                question: "Thomas mesure 1m30. Son frère mesure 20cm de plus. Quelle est la taille du frère ?",
                options: ["1m40", "1m50", "1m60", "1m70"],
                correct: "1m50",
                explanation: "1m30 + 20cm = 1m50"
            },
            {
                question: "Une voiture roule à 90 km/h. En 2 heures, quelle distance parcourt-elle ?",
                options: ["90 km", "180 km", "270 km", "360 km"],
                correct: "180 km",
                explanation: "90 × 2 = 180 km"
            },
            {
                question: "J'ai 3 paquets de 8 bonbons. Combien ai-je de bonbons en tout ?",
                options: ["11", "16", "24", "32"],
                correct: "24",
                explanation: "3 × 8 = 24 bonbons"
            }
        ]
    },
    
    formes: {
        title: "Formes Géométriques",
        icon: "🔺",
        description: "Reconnais les formes",
        exercises: [
            {
                question: "Combien de côtés a un triangle ?",
                options: ["2", "3", "4", "5"],
                correct: "3",
                explanation: "Un triangle a toujours 3 côtés."
            },
            {
                question: "Comment s'appelle un quadrilatère avec 4 côtés égaux et 4 angles droits ?",
                options: ["Rectangle", "Carré", "Losange", "Trapèze"],
                correct: "Carré",
                explanation: "Un carré a 4 côtés égaux et 4 angles droits."
            },
            {
                question: "Combien d'angles a un rectangle ?",
                options: ["2", "3", "4", "5"],
                correct: "4",
                explanation: "Un rectangle a 4 angles (tous droits)."
            },
            {
                question: "Quelle forme a tous ses points à égale distance du centre ?",
                options: ["Triangle", "Carré", "Cercle", "Rectangle"],
                correct: "Cercle",
                explanation: "Dans un cercle, tous les points sont à la même distance du centre (le rayon)."
            },
            {
                question: "Comment appelle-t-on un triangle avec 3 côtés égaux ?",
                options: ["Isocèle", "Équilatéral", "Rectangle", "Scalène"],
                correct: "Équilatéral",
                explanation: "Un triangle équilatéral a ses 3 côtés de même longueur."
            },
            {
                question: "Combien de côtés a un pentagone ?",
                options: ["4", "5", "6", "7"],
                correct: "5",
                explanation: "Un pentagone a 5 côtés."
            },
            {
                question: "Quelle forme a 4 côtés mais n'a pas tous ses angles droits ?",
                options: ["Carré", "Rectangle", "Losange", "Tous ces choix"],
                correct: "Losange",
                explanation: "Le losange a 4 côtés égaux mais ses angles ne sont pas droits."
            },
            {
                question: "Combien de sommets (coins) a un cube ?",
                options: ["4", "6", "8", "12"],
                correct: "8",
                explanation: "Un cube a 8 sommets (coins)."
            }
        ]
    },
    
    perimetres: {
        title: "Périmètres",
        icon: "📏",
        description: "Calcule le contour des formes",
        exercises: [
            {
                question: "Le périmètre d'un carré de côté 5 cm est :",
                options: ["10 cm", "15 cm", "20 cm", "25 cm"],
                correct: "20 cm",
                explanation: "Périmètre carré = 4 × côté = 4 × 5 = 20 cm"
            },
            {
                question: "Un rectangle a une longueur de 8 cm et une largeur de 3 cm. Quel est son périmètre ?",
                options: ["11 cm", "16 cm", "22 cm", "24 cm"],
                correct: "22 cm",
                explanation: "Périmètre = 2 × (longueur + largeur) = 2 × (8 + 3) = 22 cm"
            },
            {
                question: "Le périmètre d'un triangle équilatéral de côté 6 cm est :",
                options: ["12 cm", "15 cm", "18 cm", "24 cm"],
                correct: "18 cm",
                explanation: "Périmètre = 3 × côté = 3 × 6 = 18 cm"
            },
            {
                question: "Un carré a un périmètre de 24 cm. Quelle est la longueur d'un côté ?",
                options: ["4 cm", "6 cm", "8 cm", "12 cm"],
                correct: "6 cm",
                explanation: "Côté = Périmètre ÷ 4 = 24 ÷ 4 = 6 cm"
            },
            {
                question: "Le périmètre d'un rectangle de 10 cm sur 4 cm est :",
                options: ["14 cm", "20 cm", "28 cm", "40 cm"],
                correct: "28 cm",
                explanation: "Périmètre = 2 × (10 + 4) = 2 × 14 = 28 cm"
            },
            {
                question: "Un triangle a des côtés de 5 cm, 7 cm et 8 cm. Quel est son périmètre ?",
                options: ["15 cm", "18 cm", "20 cm", "21 cm"],
                correct: "20 cm",
                explanation: "Périmètre = 5 + 7 + 8 = 20 cm"
            },
            {
                question: "Pour entourer un carré de côté 12 cm avec une ficelle, quelle longueur faut-il ?",
                options: ["24 cm", "36 cm", "48 cm", "60 cm"],
                correct: "48 cm",
                explanation: "Périmètre = 4 × 12 = 48 cm"
            },
            {
                question: "Un rectangle a un périmètre de 30 cm et une longueur de 10 cm. Quelle est sa largeur ?",
                options: ["3 cm", "5 cm", "7 cm", "10 cm"],
                correct: "5 cm",
                explanation: "Largeur = (Périmètre ÷ 2) - Longueur = (30 ÷ 2) - 10 = 5 cm"
            }
        ]
    },
    
    aires: {
        title: "Aires",
        icon: "🟦",
        description: "Calcule la surface des formes",
        exercises: [
            {
                question: "L'aire d'un carré de côté 4 cm est :",
                options: ["8 cm²", "12 cm²", "16 cm²", "20 cm²"],
                correct: "16 cm²",
                explanation: "Aire carré = côté × côté = 4 × 4 = 16 cm²"
            },
            {
                question: "Un rectangle mesure 6 cm de long et 3 cm de large. Quelle est son aire ?",
                options: ["9 cm²", "12 cm²", "18 cm²", "24 cm²"],
                correct: "18 cm²",
                explanation: "Aire rectangle = longueur × largeur = 6 × 3 = 18 cm²"
            },
            {
                question: "Un carré a une aire de 25 cm². Quelle est la longueur de son côté ?",
                options: ["4 cm", "5 cm", "6 cm", "7 cm"],
                correct: "5 cm",
                explanation: "Côté = √25 = 5 cm (5 × 5 = 25)"
            },
            {
                question: "L'aire d'un rectangle de 10 cm sur 5 cm est :",
                options: ["15 cm²", "30 cm²", "50 cm²", "100 cm²"],
                correct: "50 cm²",
                explanation: "Aire = 10 × 5 = 50 cm²"
            },
            {
                question: "Quelle est l'aire d'un carré de côté 7 cm ?",
                options: ["14 cm²", "28 cm²", "49 cm²", "56 cm²"],
                correct: "49 cm²",
                explanation: "Aire = 7 × 7 = 49 cm²"
            },
            {
                question: "Un terrain rectangulaire mesure 20 m sur 15 m. Quelle est son aire ?",
                options: ["35 m²", "70 m²", "300 m²", "600 m²"],
                correct: "300 m²",
                explanation: "Aire = 20 × 15 = 300 m²"
            },
            {
                question: "L'aire d'un rectangle est 24 cm² et sa longueur est 8 cm. Quelle est sa largeur ?",
                options: ["2 cm", "3 cm", "4 cm", "6 cm"],
                correct: "3 cm",
                explanation: "Largeur = Aire ÷ Longueur = 24 ÷ 8 = 3 cm"
            },
            {
                question: "Quel carré a la plus grande aire ?",
                options: ["Côté 3 cm", "Côté 5 cm", "Côté 4 cm", "Côté 2 cm"],
                correct: "Côté 5 cm",
                explanation: "Aire = 5 × 5 = 25 cm² (la plus grande)"
            }
        ]
    },
    
    angles: {
        title: "Angles",
        icon: "📐",
        description: "Identifie les différents types d'angles",
        exercises: [
            {
                question: "Un angle droit mesure :",
                options: ["45°", "90°", "180°", "360°"],
                correct: "90°",
                explanation: "Un angle droit = 90° (comme le coin d'un carré)"
            },
            {
                question: "Comment s'appelle un angle plus petit qu'un angle droit ?",
                options: ["Angle aigu", "Angle obtus", "Angle plat", "Angle nul"],
                correct: "Angle aigu",
                explanation: "Un angle aigu est plus petit que 90°"
            },
            {
                question: "Comment s'appelle un angle plus grand qu'un angle droit mais plus petit que 180° ?",
                options: ["Angle aigu", "Angle obtus", "Angle plat", "Angle droit"],
                correct: "Angle obtus",
                explanation: "Un angle obtus est entre 90° et 180°"
            },
            {
                question: "Un angle plat mesure :",
                options: ["45°", "90°", "180°", "360°"],
                correct: "180°",
                explanation: "Un angle plat = 180° (une ligne droite)"
            },
            {
                question: "Combien d'angles droits y a-t-il dans un carré ?",
                options: ["1", "2", "3", "4"],
                correct: "4",
                explanation: "Un carré a 4 angles droits (4 × 90° = 360°)"
            },
            {
                question: "Si un angle mesure 45°, c'est un angle :",
                options: ["Droit", "Aigu", "Obtus", "Plat"],
                correct: "Aigu",
                explanation: "45° < 90° donc c'est un angle aigu"
            },
            {
                question: "Si un angle mesure 120°, c'est un angle :",
                options: ["Droit", "Aigu", "Obtus", "Plat"],
                correct: "Obtus",
                explanation: "120° > 90° et < 180° donc c'est un angle obtus"
            },
            {
                question: "Combien vaut la somme des angles d'un triangle ?",
                options: ["90°", "180°", "270°", "360°"],
                correct: "180°",
                explanation: "Dans tout triangle, la somme des 3 angles = 180°"
            }
        ]
    }
};

// ========================================
// XP SYSTEM - COMPATIBLE DASHBOARD
// ========================================
class XPSystem {
    constructor() {
        this.storageKey = 'lemondedescurieux_xp';
        this.data = this.load();
        console.log('📊 XP System initialisé:', this.data);
    }
    
    load() {
        const stored = localStorage.getItem(this.storageKey);
        
        if (!stored) {
            return {
                total: 0,
                bySection: {
                    francais: 0,
                    maths: 0,
                    anglais: 0,
                    sciences: 0,
                    histoire: 0
                },
                level: 1,
                xpToNextLevel: 200,
                history: [],
                lastActivity: null
            };
        }
        
        return JSON.parse(stored);
    }
    
    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        
        // Déclencher événement pour le dashboard
        window.dispatchEvent(new CustomEvent('xp:updated', {
            detail: { 
                section: SECTION_NAME,
                total: this.data.total,
                level: this.data.level
            }
        }));
        
        console.log('💾 XP sauvegardés:', this.data);
    }
    
    addXP(section, amount) {
        const xpToAdd = Math.max(0, parseInt(amount) || 0);
        if (xpToAdd === 0) return;
        
        const previousLevel = this.data.level;
        
        // Ajouter XP à la section
        if (!this.data.bySection[section]) {
            this.data.bySection[section] = 0;
        }
        this.data.bySection[section] += xpToAdd;
        
        // Ajouter au total
        this.data.total += xpToAdd;
        
        // Mettre à jour activité
        this.data.lastActivity = new Date().toISOString();
        
        // Recalculer niveau
        this.recalculateLevel();
        
        // Sauvegarder
        this.save();
        
        // Afficher
        this.updateDisplay();
        
        // Level up notification
        if (this.data.level > previousLevel) {
            console.log(`🎉 LEVEL UP ! Niveau ${this.data.level}`);
            showCurioMessage(`🎉 Niveau ${this.data.level} atteint !`);
        }
        
        console.log(`✅ +${xpToAdd} XP (${section})`);
        console.log(`📊 Section: ${this.data.bySection[section]} XP`);
        console.log(`🌍 Total: ${this.data.total} XP`);
    }
    
    recalculateLevel() {
        let level = 1;
        let totalNeeded = 0;
        const baseXP = 200;
        const multiplier = 1.5;
        
        while (totalNeeded <= this.data.total) {
            const xpForLevel = Math.floor(baseXP * Math.pow(multiplier, level - 1));
            totalNeeded += xpForLevel;
            if (totalNeeded <= this.data.total) level++;
        }
        
        this.data.level = level;
        this.data.xpToNextLevel = Math.floor(baseXP * Math.pow(multiplier, level - 1));
    }
    
    getBySection(section) {
        return this.data.bySection[section] || 0;
    }
    
    getTotal() {
        return this.data.total;
    }
    
    getLevel() {
        return this.data.level;
    }
    
    updateDisplay() {
        const element = document.getElementById('xp-value');
        
        if (!element) {
            console.warn('⚠️ Élément xp-value non trouvé');
            return;
        }
        
        const level = this.getLevel();
        const xp = this.getBySection(SECTION_NAME);
        const total = this.getTotal();
        const text = `Niv.${level} • ${xp} XP`;
        
        element.textContent = text;
        console.log('🎨 Badge XP mis à jour:', text);
        console.log(`📊 Total global: ${total} XP`);
    }
}

// ========================================
// STREAKS SYSTEM
// ========================================
class StreaksSystem {
    constructor() {
        this.storageKey = 'lemondedescurieux_streaks';
        this.data = this.load();
        console.log('🔥 Streaks System initialisé:', this.data);
    }
    
    load() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {
            currentStreak: 0,
            lastActivityDate: null
        };
    }
    
    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }
    
    recordActivity() {
        const today = new Date().toDateString();
        
        if (this.data.lastActivityDate !== today) {
            this.data.currentStreak++;
            this.data.lastActivityDate = today;
            this.save();
            this.updateDisplay();
            console.log('🔥 Streak enregistré:', this.data.currentStreak);
        }
    }
    
    getCurrentStreak() {
        return this.data.currentStreak;
    }
    
    updateDisplay() {
        const element = document.getElementById('streak-value');
        if (element) {
            element.textContent = this.data.currentStreak;
        }
    }
}

// ========================================
// HEARTS SYSTEM
// ========================================
class HeartsSystem {
    constructor() {
        this.storageKey = 'lemondedescurieux_hearts';
        this.data = this.load();
        console.log('❤️ Hearts System initialisé:', this.data);
    }
    
    load() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {
            bySection: {}
        };
    }
    
    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }
    
    getHearts(section) {
        if (!this.data.bySection[section]) {
            this.data.bySection[section] = { current: 5, max: 5 };
        }
        return this.data.bySection[section];
    }
    
    loseHeart(section) {
        const hearts = this.getHearts(section);
        if (hearts.current > 0) {
            hearts.current--;
            this.save();
            this.updateDisplay(section);
            console.log('💔 Cœur perdu:', hearts.current);
        }
    }
    
    updateDisplay(section) {
        const element = document.getElementById('hearts-value');
        if (element) {
            const hearts = this.getHearts(section);
            element.textContent = hearts.current;
        }
    }
}

// ========================================
// SYSTÈME DE SONS (SANS VOIX)
// ========================================

function playSound(type) {
    console.log('🔊 Tentative son:', type);
    
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        
        if (!AudioContext) {
            console.warn('⚠️ Web Audio API non disponible');
            return;
        }
        
        const audioContext = new AudioContext();
        
        const sounds = {
            correct: () => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = 800;
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
                
                console.log('✅ Son correct joué');
            },
            incorrect: () => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = 200;
                oscillator.type = 'sawtooth';
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.5);
                
                console.log('❌ Son incorrect joué');
            },
            complete: () => {
                [523, 659, 784].forEach((freq, index) => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.value = freq;
                    oscillator.type = 'sine';
                    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + index * 0.15);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.15 + 0.3);
                    
                    oscillator.start(audioContext.currentTime + index * 0.15);
                    oscillator.stop(audioContext.currentTime + index * 0.15 + 0.3);
                });
                
                console.log('🎉 Son complétion joué');
            }
        };
        
        if (sounds[type]) {
            sounds[type]();
        }
        
    } catch (e) {
        console.error('❌ Erreur son:', e);
    }
}

// ========================================
// SYSTÈME BULLE CURIO
// ========================================

const CURIO_MESSAGES = {
    welcome: "Bienvenue en maths ! Choisis une activité pour commencer à calculer !",
    startActivity: "Super ! Lis bien chaque question et prends ton temps pour réfléchir.",
    correct: "Excellent calcul ! Tu es vraiment doué !",
    incorrect: "Pas grave ! Les erreurs aident à progresser.",
    halfDone: "Tu es à mi-chemin ! Continue, tu te débrouilles bien !",
    complete: "Bravo ! Tu as terminé cette activité de maths !",
    noHearts: "Tu n'as plus de cœurs ! Repose-toi 30 minutes.",
    streak: "Tu continues ta série ! Reviens demain !"
};

function showCurioMessage(messageKey, autoHide = true) {
    const bubble = document.getElementById('curio-help');
    const messageElement = document.getElementById('curio-message');
    
    if (!bubble || !messageElement) return;
    
    messageElement.textContent = CURIO_MESSAGES[messageKey] || messageKey;
    bubble.classList.add('visible');
    
    if (autoHide) {
        setTimeout(() => {
            bubble.classList.remove('visible');
        }, 5000);
    }
}

function closeCurioHelp() {
    const bubble = document.getElementById('curio-help');
    if (bubble) {
        bubble.classList.remove('visible');
    }
}

// ========================================
// INITIALISATION GLOBALE
// ========================================
window.xpSystem = new XPSystem();
window.streaksSystem = new StreaksSystem();
window.heartsSystem = new HeartsSystem();

// Afficher valeurs initiales
window.xpSystem.updateDisplay();
window.streaksSystem.updateDisplay();
window.heartsSystem.updateDisplay(SECTION_NAME);

console.log('✅ Section Mathématiques initialisée avec succès !');
console.log('🧮 12 leçons disponibles:', Object.keys(EDUCATIONAL_CONTENT));

// Afficher message de bienvenue après 2 secondes
setTimeout(() => {
    showCurioMessage('welcome');
}, 2000);

// ========================================
// GESTION ACTIVITÉS AVEC QUIZ
// ========================================
let currentActivity = null;
let currentExerciseIndex = 0;
let currentScore = 0;

// ✅ COOLDOWN : Vérifier si activité peut être démarrée (24h)
function canStartActivity(activityId) {
    const cooldownKey = `quiz_cooldown_maths_${activityId}`;
    const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{}');
    
    if (!cooldownData.lastCompleted) return true;
    
    const now = Date.now();
    const timeSinceCompletion = now - cooldownData.lastCompleted;
    const cooldownDuration = 24 * 60 * 60 * 1000; // 24 heures
    
    return timeSinceCompletion >= cooldownDuration;
}

// Obtenir temps restant avant déblocage
function getCooldownTimeRemaining(activityId) {
    const cooldownKey = `quiz_cooldown_maths_${activityId}`;
    const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{}');
    
    if (!cooldownData.lastCompleted) return null;
    
    const now = Date.now();
    const timeSinceCompletion = now - cooldownData.lastCompleted;
    const cooldownDuration = 24 * 60 * 60 * 1000;
    const remaining = cooldownDuration - timeSinceCompletion;
    
    if (remaining <= 0) return null;
    
    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
    
    return { hours: hours, minutes: minutes };
}

// Enregistrer cooldown après complétion
function recordActivityCompletion(activityId) {
    const cooldownKey = `quiz_cooldown_maths_${activityId}`;
    const cooldownData = {
        lastCompleted: Date.now(),
        count: (JSON.parse(localStorage.getItem(cooldownKey) || '{}').count || 0) + 1
    };
    localStorage.setItem(cooldownKey, JSON.stringify(cooldownData));
    console.log(`🔒 Cooldown activé pour ${activityId} jusqu'à`, new Date(cooldownData.lastCompleted + 24*60*60*1000).toLocaleString('fr-FR'));
}

function startActivity(activityId) {
    console.log('🎮 Démarrage activité:', activityId);
    
    // ✅ VÉRIFIER COOLDOWN
    if (!canStartActivity(activityId)) {
        const remaining = getCooldownTimeRemaining(activityId);
        const message = `⏰ Activité déjà complétée aujourd'hui !\n\nReviens dans ${remaining.hours}h ${remaining.minutes}min pour la refaire.`;
        
        showCurioMessage(message);
        alert(message);
        return; // BLOQUER le démarrage
    }
    
    const content = EDUCATIONAL_CONTENT[activityId];
    if (!content) {
        console.error('Activité non trouvée:', activityId);
        return;
    }
    
    // ✅ VÉRIFIER QUE LE DOM EST PRÊT
    const modalContainer = document.getElementById('activity-modal');
    if (!modalContainer) {
        console.error('❌ activity-modal non trouvé dans le DOM !');
        alert('Erreur: Élément modal manquant. Rechargez la page.');
        return;
    }
    
    currentActivity = activityId;
    currentExerciseIndex = 0;
    currentScore = 0;
    
    showCurioMessage('startActivity');
    displayExercise();
}

function displayExercise() {
    const content = EDUCATIONAL_CONTENT[currentActivity];
    const exercise = content.exercises[currentExerciseIndex];
    
    const modalContainer = document.getElementById('activity-modal');
    
    const modal = document.createElement('div');
    modal.className = 'activity-modal-overlay';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'activity-modal-content';
    
    const progressText = `Question ${currentExerciseIndex + 1}/${content.exercises.length}`;
    const scoreText = `Score : ${currentScore}/${currentExerciseIndex}`;
    
    // Créer le conteneur principal
    contentDiv.innerHTML = `
        <h2 class="activity-modal-title">${content.icon} ${content.title}</h2>
        <p style="margin-bottom: 1rem; color: #666;">${progressText} • ${scoreText}</p>
        <div style="background: #fff5f5; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
            <p style="font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">${exercise.question}</p>
            <div id="options-container" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>
        </div>
        <div id="feedback-zone" style="min-height: 60px;"></div>
        <button onclick="closeActivity()" class="btn-close-activity">
            ❌ Quitter
        </button>
    `;
    
    modal.appendChild(contentDiv);
    modalContainer.innerHTML = '';
    modalContainer.appendChild(modal);
    
    // CRÉER LES BOUTONS AVEC DES EVENT LISTENERS
    const optionsContainer = document.getElementById('options-container');
    
    exercise.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        
        // Event listener au lieu de onclick
        btn.addEventListener('click', () => {
            checkAnswer(option);
        });
        
        optionsContainer.appendChild(btn);
    });
    
    // Message Curio à mi-parcours
    if (currentExerciseIndex === Math.floor(content.exercises.length / 2)) {
        setTimeout(() => showCurioMessage('halfDone'), 1000);
    }
}

function checkAnswer(selectedAnswer) {
    const content = EDUCATIONAL_CONTENT[currentActivity];
    const exercise = content.exercises[currentExerciseIndex];
    const isCorrect = selectedAnswer === exercise.correct;
    
    const feedbackZone = document.getElementById('feedback-zone');
    const optionsContainer = document.getElementById('options-container');
    
    // Désactiver tous les boutons de réponse
    const buttons = optionsContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
    
    // Afficher feedback
    if (isCorrect) {
        currentScore++;
        playSound('correct');
        showCurioMessage('correct');
        
        feedbackZone.innerHTML = `
            <div style="background: #d4edda; padding: 1rem; border-radius: 8px; border: 2px solid #28a745;">
                <p style="color: #155724; font-weight: bold; margin-bottom: 0.5rem;">✅ Correct !</p>
                <p style="color: #155724; font-size: 0.9rem;">${exercise.explanation}</p>
                <p style="color: #155724; font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.7;">⏳ Prochaine question dans 2 secondes...</p>
            </div>
        `;
    } else {
        window.heartsSystem.loseHeart(SECTION_NAME);
        playSound('incorrect');
        showCurioMessage('incorrect');
        
        feedbackZone.innerHTML = `
            <div style="background: #f8d7da; padding: 1rem; border-radius: 8px; border: 2px solid #dc3545;">
                <p style="color: #721c24; font-weight: bold; margin-bottom: 0.5rem;">❌ Incorrect !</p>
                <p style="color: #721c24; font-size: 0.9rem;">La bonne réponse est : <strong>${exercise.correct}</strong></p>
                <p style="color: #721c24; font-size: 0.9rem; margin-top: 0.5rem;">${exercise.explanation}</p>
                <p style="color: #721c24; font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.7;">⏳ Prochaine question dans 2 secondes...</p>
            </div>
        `;
        
        const hearts = window.heartsSystem.getHearts(SECTION_NAME);
        if (hearts.current === 0) {
            setTimeout(() => showCurioMessage('noHearts'), 1000);
        }
    }
    
    // ✅ AUTO-AVANCE STRICT : Aucun bouton, juste le timer
    setTimeout(() => {
        if (currentExerciseIndex < content.exercises.length - 1) {
            nextExercise();
        } else {
            completeActivity();
        }
    }, 2000);
}

function nextExercise() {
    currentExerciseIndex++;
    displayExercise();
}

function completeActivity() {
    const content = EDUCATIONAL_CONTENT[currentActivity];
    const totalQuestions = content.exercises.length;
    const percentage = Math.round((currentScore / totalQuestions) * 100);
    const isPerfect = (percentage === 100);
    
    // Calcul XP
    let xpGained = currentScore * 10;
    if (isPerfect) {
        xpGained += 50;
    }
    
    console.log(`🎉 Activité "${currentActivity}" terminée ! Score: ${currentScore}/${totalQuestions} (${percentage}%) | +${xpGained} XP`);
    
    // Son de complétion
    playSound('complete');
    
    // Ajouter XP
    window.xpSystem.addXP(SECTION_NAME, xpGained);
    
    // Enregistrer streak
    window.streaksSystem.recordActivity();
    
    // Message Curio
    showCurioMessage('complete');
    
    // --- BADGE SYSTEM : écriture quiz_stats ---
    try {
        const raw = localStorage.getItem('lemondedescurieux_quiz_stats');
        const stats = raw ? JSON.parse(raw) : { totalCompleted: 0, perfectCount: 0, bySubject: { francais: 0, anglais: 0, maths: 0, sciences: 0, histoire: 0 } };
        stats.totalCompleted = (stats.totalCompleted || 0) + 1;
        if (isPerfect) stats.perfectCount = (stats.perfectCount || 0) + 1;
        if (!stats.bySubject) stats.bySubject = {};
        stats.bySubject[SECTION_NAME] = (stats.bySubject[SECTION_NAME] || 0) + 1;
        localStorage.setItem('lemondedescurieux_quiz_stats', JSON.stringify(stats));
        console.log('📊 [' + SECTION_NAME + '] Quiz stats mis à jour:', stats);
    } catch(e) { console.warn('[' + SECTION_NAME + '] Erreur stats quiz:', e); }

    // --- BADGE SYSTEM : check + sync ---
    if (window.badgeSystem) {
        const newBadges = window.badgeSystem.checkBadges();
        if (newBadges && newBadges.length > 0) {
            console.log('🏆 [' + SECTION_NAME + '] Nouveaux badges:', newBadges.map(function(b){ return b.name; }));
            showCurioMessage('🏆 Badge débloqué : ' + newBadges[0].name + ' !');
        }
        if (window.BRIDGE) window.BRIDGE.syncBadges();
    }
    
    // ✅ ENREGISTRER COOLDOWN (24h)
    recordActivityCompletion(currentActivity);
    
    // Feedback final
    showCompletionFeedback(currentScore, totalQuestions, xpGained);
}

function closeActivity() {
    const modalContainer = document.getElementById('activity-modal');
    modalContainer.innerHTML = '';
    currentActivity = null;
    currentExerciseIndex = 0;
    currentScore = 0;
}

function showCompletionFeedback(score, total, xp) {
    const percentage = Math.round((score / total) * 100);
    
    let message = '';
    let emoji = '';
    
    if (percentage === 100) {
        message = 'Score parfait !';
        emoji = '🎉';
    } else if (percentage >= 80) {
        message = 'Excellent travail !';
        emoji = '🌟';
    } else if (percentage >= 60) {
        message = 'Bien joué !';
        emoji = '👏';
    } else {
        message = 'Continue à t\'entraîner !';
        emoji = '💪';
    }
    
    const feedbackContainer = document.getElementById('completion-feedback');
    
    const feedback = document.createElement('div');
    feedback.className = 'completion-feedback-overlay';
    
    feedback.innerHTML = `
        <div class="feedback-icon">${emoji}</div>
        <div class="feedback-text">${message}</div>
        <div style="font-size: 1.2rem; color: #666; margin: 1rem 0;">
            Score : ${score}/${total} (${percentage}%)
        </div>
        <div class="feedback-xp">+${xp} XP</div>
    `;
    
    feedbackContainer.appendChild(feedback);
    
    setTimeout(() => {
        feedbackContainer.innerHTML = '';
        closeActivity();
    }, 3000);
}

// ========================================
// DEBUG API
// ========================================
window.MathsDebug = {
    addXP: (amount) => {
        window.xpSystem.addXP(SECTION_NAME, amount);
    },
    
    loseHeart: () => {
        window.heartsSystem.loseHeart(SECTION_NAME);
    },
    
    getInfo: () => {
        return {
            section: SECTION_NAME,
            xp: window.xpSystem.getBySection(SECTION_NAME),
            level: window.xpSystem.getLevel(),
            hearts: window.heartsSystem.getHearts(SECTION_NAME),
            streak: window.streaksSystem.getCurrentStreak()
        };
    },
    
    reset: () => {
        localStorage.removeItem('lemondedescurieux_xp');
        localStorage.removeItem('lemondedescurieux_streaks');
        localStorage.removeItem('lemondedescurieux_hearts');
        location.reload();
    },
    
    listActivities: () => {
        return Object.keys(EDUCATIONAL_CONTENT);
    },
    
    showCurio: (message) => {
        showCurioMessage(message);
    }
};

console.log('💡 Debug disponible : MathsDebug.listActivities()');