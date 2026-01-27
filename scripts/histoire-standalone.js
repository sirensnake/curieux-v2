// ========================================
// SYSTÈME COMPLET STANDALONE - HISTOIRE
// Le Monde des Curieux
// Version : 12 leçons complètes (96 questions)
// Compatible dashboard
// ========================================

console.log('🏰 Initialisation Section Histoire...');

const SECTION_NAME = 'histoire';

// ========================================
// CONTENU ÉDUCATIF - BASE DE DONNÉES
// ========================================
const EDUCATIONAL_CONTENT = {
    paleolithique: {
        title: "Paléolithique",
        icon: "🔥",
        description: "L'âge de la pierre taillée",
        exercises: [
            {
                question: "Que signifie Paléolithique ?",
                options: ["Pierre ancienne", "Pierre nouvelle", "Âge du fer", "Âge du bronze"],
                correct: "Pierre ancienne",
                explanation: "Paléolithique vient du grec 'palaios' (ancien) et 'lithos' (pierre)"
            },
            {
                question: "Quelle était la principale activité des hommes du Paléolithique ?",
                options: ["L'agriculture", "La chasse et la cueillette", "L'élevage", "Le commerce"],
                correct: "La chasse et la cueillette",
                explanation: "Les hommes du Paléolithique étaient nomades, chasseurs-cueilleurs"
            },
            {
                question: "Comment s'appelle la grotte préhistorique la plus célèbre en France ?",
                options: ["Lascaux", "Chauvet", "Cosquer", "Altamira"],
                correct: "Lascaux",
                explanation: "La grotte de Lascaux en Dordogne contient des peintures vieilles de 17 000 ans"
            },
            {
                question: "Quelle découverte a révolutionné la vie des hommes préhistoriques ?",
                options: ["Le feu", "La roue", "L'écriture", "Le bronze"],
                correct: "Le feu",
                explanation: "La maîtrise du feu vers -400 000 ans a permis de se chauffer, cuire et se protéger"
            },
            {
                question: "Les hommes du Paléolithique étaient :",
                options: ["Sédentaires", "Nomades", "Agriculteurs", "Commerçants"],
                correct: "Nomades",
                explanation: "Ils se déplaçaient en suivant les troupeaux d'animaux"
            },
            {
                question: "Avec quoi les hommes préhistoriques fabriquaient-ils leurs outils ?",
                options: ["Pierre taillée", "Bronze", "Fer", "Plastique"],
                correct: "Pierre taillée",
                explanation: "Ils taillaient le silex pour fabriquer des outils tranchants"
            },
            {
                question: "Que chassaient principalement les hommes du Paléolithique ?",
                options: ["Mammouths et rennes", "Vaches et moutons", "Poules et lapins", "Poissons rouges"],
                correct: "Mammouths et rennes",
                explanation: "Ils chassaient de grands animaux comme les mammouths, rennes, bisons"
            },
            {
                question: "Où vivaient les hommes du Paléolithique ?",
                options: ["Dans des grottes et des abris", "Dans des maisons", "Dans des châteaux", "Dans des villes"],
                correct: "Dans des grottes et des abris",
                explanation: "Ils s'abritaient dans des grottes ou construisaient des huttes temporaires"
            }
        ]
    },
    
    neolithique: {
        title: "Néolithique",
        icon: "🌾",
        description: "L'agriculture et l'élevage",
        exercises: [
            {
                question: "Que signifie Néolithique ?",
                options: ["Pierre nouvelle", "Pierre ancienne", "Âge du bronze", "Âge du fer"],
                correct: "Pierre nouvelle",
                explanation: "Néolithique vient du grec 'neos' (nouveau) et 'lithos' (pierre)"
            },
            {
                question: "Quelle grande révolution caractérise le Néolithique ?",
                options: ["L'agriculture et l'élevage", "L'écriture", "La roue", "L'électricité"],
                correct: "L'agriculture et l'élevage",
                explanation: "C'est la révolution néolithique : passage de la chasse à l'agriculture"
            },
            {
                question: "Les hommes du Néolithique étaient :",
                options: ["Sédentaires", "Nomades", "Explorateurs", "Marins"],
                correct: "Sédentaires",
                explanation: "Ils se sont installés dans des villages permanents pour cultiver la terre"
            },
            {
                question: "Quel était le premier animal domestiqué ?",
                options: ["Le chien", "Le chat", "La vache", "Le mouton"],
                correct: "Le chien",
                explanation: "Le chien a été domestiqué vers -15 000 ans pour aider à la chasse"
            },
            {
                question: "Comment appelle-t-on les grandes pierres dressées du Néolithique ?",
                options: ["Menhirs", "Pyramides", "Châteaux", "Cathédrales"],
                correct: "Menhirs",
                explanation: "Les menhirs sont de grandes pierres dressées, comme ceux de Carnac"
            },
            {
                question: "Quelle céréale était cultivée au Néolithique ?",
                options: ["Le blé", "Le riz", "Le maïs", "Le café"],
                correct: "Le blé",
                explanation: "Le blé et l'orge étaient les premières céréales cultivées"
            },
            {
                question: "Où vivaient les hommes du Néolithique ?",
                options: ["Dans des villages", "Dans des grottes", "Dans des châteaux", "Dans des immeubles"],
                correct: "Dans des villages",
                explanation: "Ils construisaient des villages avec des maisons en bois et torchis"
            },
            {
                question: "Quelle invention technique importante date du Néolithique ?",
                options: ["La poterie", "Le téléphone", "L'ordinateur", "La télévision"],
                correct: "La poterie",
                explanation: "Ils fabriquaient des poteries pour conserver les aliments"
            }
        ]
    },
    
    metaux: {
        title: "Âge des Métaux",
        icon: "⚔️",
        description: "Bronze et fer",
        exercises: [
            {
                question: "Quel métal a été utilisé en premier ?",
                options: ["Le bronze", "Le fer", "L'or", "L'argent"],
                correct: "Le bronze",
                explanation: "L'âge du bronze (vers -3000 ans) précède l'âge du fer"
            },
            {
                question: "Le bronze est un mélange de :",
                options: ["Cuivre et étain", "Fer et carbone", "Or et argent", "Plomb et zinc"],
                correct: "Cuivre et étain",
                explanation: "Le bronze est un alliage de cuivre et d'étain"
            },
            {
                question: "Pourquoi le fer était-il meilleur que le bronze ?",
                options: ["Plus solide et résistant", "Plus joli", "Plus léger", "Plus cher"],
                correct: "Plus solide et résistant",
                explanation: "Le fer est plus dur et résistant, meilleur pour les armes et outils"
            },
            {
                question: "Comment appelle-t-on le peuple qui excellait dans le travail du fer ?",
                options: ["Les Celtes", "Les Égyptiens", "Les Grecs", "Les Romains"],
                correct: "Les Celtes",
                explanation: "Les Celtes (Gaulois) étaient d'excellents forgerons"
            },
            {
                question: "À quoi servait principalement le bronze ?",
                options: ["Armes et outils", "Vêtements", "Nourriture", "Décoration uniquement"],
                correct: "Armes et outils",
                explanation: "Le bronze permettait de fabriquer des épées, haches et outils"
            },
            {
                question: "Quand a commencé l'âge du fer en Europe ?",
                options: ["Vers -800 ans", "Vers -3000 ans", "Vers -10000 ans", "En l'an 0"],
                correct: "Vers -800 ans",
                explanation: "L'âge du fer débute vers -800 ans avant J.-C. en Europe"
            },
            {
                question: "Comment fondait-on les métaux ?",
                options: ["Dans des fours très chauds", "Au soleil", "Dans l'eau froide", "Avec des pierres"],
                correct: "Dans des fours très chauds",
                explanation: "Il fallait des fours à très haute température pour fondre les métaux"
            },
            {
                question: "Quel avantage donnaient les armes en métal ?",
                options: ["Supériorité militaire", "Plus jolies", "Plus légères", "Moins chères"],
                correct: "Supériorité militaire",
                explanation: "Les peuples avec des armes en métal dominaient les autres"
            }
        ]
    },
    
    art_prehistorique: {
        title: "Art Préhistorique",
        icon: "🗿",
        description: "Grottes et mégalithes",
        exercises: [
            {
                question: "Qu'appelle-t-on les peintures sur les parois des grottes ?",
                options: ["L'art pariétal", "L'art moderne", "La sculpture", "La calligraphie"],
                correct: "L'art pariétal",
                explanation: "L'art pariétal désigne les peintures et gravures sur les parois rocheuses"
            },
            {
                question: "Quelle couleur n'était PAS utilisée dans les grottes préhistoriques ?",
                options: ["Le bleu", "Le rouge", "Le noir", "Le jaune"],
                correct: "Le bleu",
                explanation: "Les préhistoriques utilisaient surtout le rouge (ocre), noir (charbon) et jaune"
            },
            {
                question: "Qu'est-ce qu'un dolmen ?",
                options: ["Une tombe en pierre", "Une grotte", "Un outil", "Un animal"],
                correct: "Une tombe en pierre",
                explanation: "Un dolmen est une construction de grosses pierres servant de sépulture"
            },
            {
                question: "Comment les hommes préhistoriques fabriquaient-ils leurs peintures ?",
                options: ["Avec des pigments naturels", "Avec de la peinture en tube", "Avec des feutres", "Avec de l'encre"],
                correct: "Avec des pigments naturels",
                explanation: "Ils utilisaient des terres colorées (ocre), du charbon, de la craie"
            },
            {
                question: "Quel animal est le plus représenté dans les grottes ?",
                options: ["Le cheval", "Le chat", "Le chien", "Le lapin"],
                correct: "Le cheval",
                explanation: "Les chevaux, bisons et aurochs sont les animaux les plus représentés"
            },
            {
                question: "Où se trouve le site de Carnac et ses menhirs ?",
                options: ["En Bretagne", "À Paris", "À Marseille", "À Lyon"],
                correct: "En Bretagne",
                explanation: "Carnac en Bretagne possède le plus grand site de menhirs d'Europe"
            },
            {
                question: "Pourquoi les hommes préhistoriques peignaient-ils dans les grottes ?",
                options: ["Raisons religieuses/magiques", "Pour décorer", "Pour s'amuser", "Pour écrire"],
                correct: "Raisons religieuses/magiques",
                explanation: "On pense qu'ils peignaient pour des rituels de chasse et raisons spirituelles"
            },
            {
                question: "Comment s'appelle un cercle de pierres dressées ?",
                options: ["Un cromlech", "Un dolmen", "Une pyramide", "Un château"],
                correct: "Un cromlech",
                explanation: "Un cromlech est un cercle de pierres dressées, comme Stonehenge"
            }
        ]
    },
    
    egypte: {
        title: "Égypte Antique",
        icon: "🐫",
        description: "Pharaons et pyramides",
        exercises: [
            {
                question: "Comment appelait-on les rois d'Égypte ?",
                options: ["Pharaons", "Empereurs", "Rois", "Présidents"],
                correct: "Pharaons",
                explanation: "Les rois d'Égypte portaient le titre de pharaon"
            },
            {
                question: "Quel fleuve traverse l'Égypte ?",
                options: ["Le Nil", "La Seine", "Le Rhône", "La Loire"],
                correct: "Le Nil",
                explanation: "Le Nil est le plus long fleuve d'Afrique et irriguait l'Égypte antique"
            },
            {
                question: "À quoi servaient les pyramides ?",
                options: ["Tombeaux des pharaons", "Maisons", "Écoles", "Magasins"],
                correct: "Tombeaux des pharaons",
                explanation: "Les pyramides étaient des tombeaux monumentaux pour les pharaons"
            },
            {
                question: "Comment s'appelle l'écriture égyptienne ?",
                options: ["Hiéroglyphes", "Alphabet", "Cunéiforme", "Chinois"],
                correct: "Hiéroglyphes",
                explanation: "Les hiéroglyphes sont l'écriture sacrée des anciens Égyptiens"
            },
            {
                question: "Quel pharaon était encore enfant quand il est devenu roi ?",
                options: ["Toutânkhamon", "Ramsès II", "Cléopâtre", "Khéops"],
                correct: "Toutânkhamon",
                explanation: "Toutânkhamon est devenu pharaon vers 9 ans"
            },
            {
                question: "Que faisaient les Égyptiens avec les morts ?",
                options: ["Les momifiaient", "Les brûlaient", "Les enterraient simplement", "Rien"],
                correct: "Les momifiaient",
                explanation: "Ils embaumaient et momifiaient les corps pour la vie après la mort"
            },
            {
                question: "Quel dieu égyptien avait une tête de chacal ?",
                options: ["Anubis", "Râ", "Osiris", "Horus"],
                correct: "Anubis",
                explanation: "Anubis, dieu des morts, était représenté avec une tête de chacal"
            },
            {
                question: "Quelle est la plus grande pyramide d'Égypte ?",
                options: ["Pyramide de Khéops", "Pyramide de Toutânkhamon", "Pyramide de Ramsès", "Pyramide de Cléopâtre"],
                correct: "Pyramide de Khéops",
                explanation: "La pyramide de Khéops à Gizeh est la plus grande (146 mètres à l'origine)"
            }
        ]
    },
    
    grece: {
        title: "Grèce Antique",
        icon: "🏺",
        description: "Dieux et démocratie",
        exercises: [
            {
                question: "Quelle ville grecque a inventé la démocratie ?",
                options: ["Athènes", "Sparte", "Rome", "Paris"],
                correct: "Athènes",
                explanation: "Athènes a créé la première démocratie vers -507 avant J.-C."
            },
            {
                question: "Comment s'appelait le roi des dieux grecs ?",
                options: ["Zeus", "Poséidon", "Hadès", "Apollon"],
                correct: "Zeus",
                explanation: "Zeus était le roi des dieux, maître du ciel et de la foudre"
            },
            {
                question: "Quelle déesse est née de l'écume de la mer ?",
                options: ["Aphrodite", "Athéna", "Héra", "Artémis"],
                correct: "Aphrodite",
                explanation: "Aphrodite, déesse de l'amour, est née de l'écume de la mer"
            },
            {
                question: "Où avaient lieu les premiers Jeux Olympiques ?",
                options: ["À Olympie en Grèce", "À Rome", "À Paris", "À Londres"],
                correct: "À Olympie en Grèce",
                explanation: "Les premiers Jeux Olympiques ont eu lieu à Olympie en -776 avant J.-C."
            },
            {
                question: "Comment s'appelle le temple d'Athéna à Athènes ?",
                options: ["Le Parthénon", "Le Colisée", "La Tour Eiffel", "Notre-Dame"],
                correct: "Le Parthénon",
                explanation: "Le Parthénon sur l'Acropole est dédié à la déesse Athéna"
            },
            {
                question: "Qui a écrit l'Iliade et l'Odyssée ?",
                options: ["Homère", "Socrate", "Platon", "Aristote"],
                correct: "Homère",
                explanation: "Homère est l'auteur de ces deux grandes épopées grecques"
            },
            {
                question: "Qu'est-ce qu'un philosophe ?",
                options: ["Un ami de la sagesse", "Un soldat", "Un commerçant", "Un esclave"],
                correct: "Un ami de la sagesse",
                explanation: "Philosophe vient de 'philos' (ami) et 'sophia' (sagesse)"
            },
            {
                question: "Quelle cité grecque était réputée pour ses guerriers ?",
                options: ["Sparte", "Athènes", "Thèbes", "Corinthe"],
                correct: "Sparte",
                explanation: "Sparte était une cité militaire avec des guerriers redoutables"
            }
        ]
    },
    
    rome: {
        title: "Rome Antique",
        icon: "🏟️",
        description: "Empire et conquêtes",
        exercises: [
            {
                question: "Qui étaient les deux frères fondateurs légendaires de Rome ?",
                options: ["Romulus et Remus", "César et Pompée", "Zeus et Poséidon", "Paul et Pierre"],
                correct: "Romulus et Remus",
                explanation: "Selon la légende, Romulus et Remus ont fondé Rome en -753"
            },
            {
                question: "Comment s'appelaient les combattants dans l'arène ?",
                options: ["Les gladiateurs", "Les soldats", "Les chevaliers", "Les boxeurs"],
                correct: "Les gladiateurs",
                explanation: "Les gladiateurs combattaient dans les arènes pour divertir le peuple"
            },
            {
                question: "Quel grand monument servait aux combats de gladiateurs ?",
                options: ["Le Colisée", "Le Parthénon", "La Tour Eiffel", "Big Ben"],
                correct: "Le Colisée",
                explanation: "Le Colisée de Rome pouvait accueillir 50 000 spectateurs"
            },
            {
                question: "Comment s'appelait l'empereur célèbre qui a conquis la Gaule ?",
                options: ["Jules César", "Auguste", "Néron", "Constantin"],
                correct: "Jules César",
                explanation: "Jules César a conquis la Gaule entre -58 et -51 avant J.-C."
            },
            {
                question: "Quelle langue parlaient les Romains ?",
                options: ["Le latin", "Le grec", "Le français", "L'anglais"],
                correct: "Le latin",
                explanation: "Le latin était la langue de Rome, ancêtre du français"
            },
            {
                question: "Que portaient les Romains comme vêtement ?",
                options: ["Une toge", "Un jean", "Un kimono", "Un costume"],
                correct: "Une toge",
                explanation: "La toge était le vêtement traditionnel des citoyens romains"
            },
            {
                question: "Comment appelait-on les routes romaines ?",
                options: ["Voies romaines", "Autoroutes", "Chemins de fer", "Pistes"],
                correct: "Voies romaines",
                explanation: "Les Romains construisaient des routes pavées dans tout l'empire"
            },
            {
                question: "Quel peuple a finalement détruit l'Empire romain d'Occident ?",
                options: ["Les Barbares", "Les Grecs", "Les Égyptiens", "Les Chinois"],
                correct: "Les Barbares",
                explanation: "Les invasions barbares ont mis fin à l'Empire romain d'Occident en 476"
            }
        ]
    },
    
    gaulois: {
        title: "Les Gaulois",
        icon: "⚔️",
        description: "Nos ancêtres les Gaulois",
        exercises: [
            {
                question: "Comment s'appelaient nos ancêtres en France ?",
                options: ["Les Gaulois", "Les Romains", "Les Vikings", "Les Égyptiens"],
                correct: "Les Gaulois",
                explanation: "Les Gaulois sont les ancêtres des Français, ils étaient Celtes"
            },
            {
                question: "Qui était le chef gaulois qui a résisté aux Romains ?",
                options: ["Vercingétorix", "Astérix", "Obélix", "César"],
                correct: "Vercingétorix",
                explanation: "Vercingétorix a mené la révolte gauloise contre César en -52"
            },
            {
                question: "Quelle bataille a marqué la défaite de Vercingétorix ?",
                options: ["Alésia", "Waterloo", "Verdun", "Poitiers"],
                correct: "Alésia",
                explanation: "Le siège d'Alésia en -52 a marqué la défaite des Gaulois"
            },
            {
                question: "Comment s'appelaient les prêtres gaulois ?",
                options: ["Les druides", "Les curés", "Les moines", "Les imams"],
                correct: "Les druides",
                explanation: "Les druides étaient les prêtres, médecins et savants gaulois"
            },
            {
                question: "Quel arbre était sacré pour les Gaulois ?",
                options: ["Le chêne", "Le sapin", "Le palmier", "Le cerisier"],
                correct: "Le chêne",
                explanation: "Les druides cueillaient le gui sacré sur les chênes"
            },
            {
                question: "Que cultivaient principalement les Gaulois ?",
                options: ["Des céréales", "Du riz", "Du café", "Des bananes"],
                correct: "Des céréales",
                explanation: "Ils cultivaient du blé, de l'orge et de l'épeautre"
            },
            {
                question: "Dans quoi vivaient les Gaulois ?",
                options: ["Dans des villages fortifiés", "Dans des grottes", "Dans des châteaux", "Dans des immeubles"],
                correct: "Dans des villages fortifiés",
                explanation: "Ils habitaient dans des oppidums, villages fortifiés sur des hauteurs"
            },
            {
                question: "Après la conquête romaine, comment s'appelait la Gaule ?",
                options: ["Gaule romaine", "France", "Germanie", "Bretagne"],
                correct: "Gaule romaine",
                explanation: "La Gaule conquise est devenue une province romaine"
            }
        ]
    },
    
    moyen_age: {
        title: "Moyen-Âge",
        icon: "🏰",
        description: "Féodalité et chevaliers",
        exercises: [
            {
                question: "Quand a commencé le Moyen-Âge ?",
                options: ["En 476 après J.-C.", "En l'an 1000", "En 1789", "En 2000"],
                correct: "En 476 après J.-C.",
                explanation: "Le Moyen-Âge débute avec la chute de l'Empire romain d'Occident en 476"
            },
            {
                question: "Qui était au sommet de la société féodale ?",
                options: ["Le roi", "Les paysans", "Les marchands", "Les enfants"],
                correct: "Le roi",
                explanation: "Le roi était au sommet, suivi des seigneurs, chevaliers et paysans"
            },
            {
                question: "Comment s'appelait la cérémonie où on devenait chevalier ?",
                options: ["L'adoubement", "Le baptême", "Le mariage", "Le couronnement"],
                correct: "L'adoubement",
                explanation: "L'adoubement était la cérémonie où l'écuyer devenait chevalier"
            },
            {
                question: "Où vivaient les seigneurs ?",
                options: ["Dans des châteaux forts", "Dans des grottes", "Dans des immeubles", "Dans des tentes"],
                correct: "Dans des châteaux forts",
                explanation: "Les seigneurs vivaient dans des châteaux forts pour se défendre"
            },
            {
                question: "Qui travaillait la terre au Moyen-Âge ?",
                options: ["Les paysans", "Les chevaliers", "Les rois", "Les prêtres"],
                correct: "Les paysans",
                explanation: "Les paysans (ou serfs) cultivaient la terre pour le seigneur"
            },
            {
                question: "Quel roi franc a été sacré empereur en l'an 800 ?",
                options: ["Charlemagne", "Louis XIV", "François Ier", "Napoléon"],
                correct: "Charlemagne",
                explanation: "Charlemagne a été couronné empereur d'Occident par le pape en 800"
            },
            {
                question: "Comment s'appelait la guerre pour reprendre Jérusalem ?",
                options: ["Les Croisades", "La guerre de Cent Ans", "La Révolution", "La Première Guerre mondiale"],
                correct: "Les Croisades",
                explanation: "Les Croisades (XIe-XIIIe siècle) visaient à reprendre Jérusalem"
            },
            {
                question: "Quelle maladie terrible a ravagé l'Europe au XIVe siècle ?",
                options: ["La peste noire", "La grippe", "Le rhume", "La rougeole"],
                correct: "La peste noire",
                explanation: "La peste noire (1347-1352) a tué un tiers de la population européenne"
            }
        ]
    },
    
    cathedrales: {
        title: "Cathédrales",
        icon: "⛪",
        description: "Architecture gothique",
        exercises: [
            {
                question: "Quel style architectural caractérise les cathédrales du Moyen-Âge ?",
                options: ["Le gothique", "Le roman", "Le moderne", "Le baroque"],
                correct: "Le gothique",
                explanation: "L'art gothique (XIIe-XVe siècle) a permis de construire de hautes cathédrales"
            },
            {
                question: "Quelle cathédrale célèbre se trouve à Paris ?",
                options: ["Notre-Dame", "Sacré-Cœur", "La Madeleine", "Saint-Pierre"],
                correct: "Notre-Dame",
                explanation: "Notre-Dame de Paris est une cathédrale gothique du XIIe siècle"
            },
            {
                question: "Quelle innovation permet aux cathédrales d'être si hautes ?",
                options: ["Les arcs-boutants", "Les ascenseurs", "Les grues modernes", "Le béton"],
                correct: "Les arcs-boutants",
                explanation: "Les arcs-boutants soutiennent les murs et permettent de grandes hauteurs"
            },
            {
                question: "Comment s'appellent les grandes fenêtres colorées des cathédrales ?",
                options: ["Les vitraux", "Les tableaux", "Les mosaïques", "Les miroirs"],
                correct: "Les vitraux",
                explanation: "Les vitraux sont des fenêtres de verre coloré racontant des histoires bibliques"
            },
            {
                question: "Qui a construit les cathédrales ?",
                options: ["Des artisans et ouvriers", "Des machines", "Des robots", "Personne"],
                correct: "Des artisans et ouvriers",
                explanation: "Des milliers d'artisans travaillaient pendant des décennies sur une cathédrale"
            },
            {
                question: "Quelle cathédrale française possède les tours les plus hautes ?",
                options: ["Cathédrale de Chartres", "Notre-Dame de Paris", "Sacré-Cœur", "Arc de Triomphe"],
                correct: "Cathédrale de Chartres",
                explanation: "Chartres possède une flèche qui culmine à 115 mètres"
            },
            {
                question: "À quoi servaient les gargouilles ?",
                options: ["Évacuer l'eau de pluie", "Décorer seulement", "Faire peur", "Sonner les cloches"],
                correct: "Évacuer l'eau de pluie",
                explanation: "Les gargouilles servaient de gouttières pour évacuer l'eau des toits"
            },
            {
                question: "Combien de temps fallait-il pour construire une cathédrale ?",
                options: ["Des décennies (50-100 ans)", "1 an", "1 mois", "1 semaine"],
                correct: "Des décennies (50-100 ans)",
                explanation: "Il fallait souvent plus de 100 ans pour terminer une cathédrale"
            }
        ]
    },
    
    renaissance: {
        title: "Renaissance",
        icon: "🎨",
        description: "Arts et sciences",
        exercises: [
            {
                question: "Quand a eu lieu la Renaissance ?",
                options: ["XVe-XVIe siècle", "IXe siècle", "XIXe siècle", "XXIe siècle"],
                correct: "XVe-XVIe siècle",
                explanation: "La Renaissance européenne s'étend du XVe au XVIe siècle"
            },
            {
                question: "Qui a peint la Joconde ?",
                options: ["Léonard de Vinci", "Picasso", "Monet", "Van Gogh"],
                correct: "Léonard de Vinci",
                explanation: "Léonard de Vinci a peint la Joconde entre 1503 et 1506"
            },
            {
                question: "Quel artiste a peint le plafond de la chapelle Sixtine ?",
                options: ["Michel-Ange", "Raphaël", "Botticelli", "Donatello"],
                correct: "Michel-Ange",
                explanation: "Michel-Ange a peint les fresques de la chapelle Sixtine (1508-1512)"
            },
            {
                question: "Quelle invention de Gutenberg a révolutionné la Renaissance ?",
                options: ["L'imprimerie", "L'ordinateur", "La télévision", "Le téléphone"],
                correct: "L'imprimerie",
                explanation: "Gutenberg invente l'imprimerie vers 1450, permettant de diffuser les livres"
            },
            {
                question: "Dans quel pays la Renaissance a-t-elle commencé ?",
                options: ["Italie", "France", "Angleterre", "Espagne"],
                correct: "Italie",
                explanation: "La Renaissance est née en Italie (Florence) avant de se répandre en Europe"
            },
            {
                question: "Quel roi français a invité Léonard de Vinci en France ?",
                options: ["François Ier", "Louis XIV", "Henri IV", "Charlemagne"],
                correct: "François Ier",
                explanation: "François Ier a accueilli Léonard de Vinci au château du Clos Lucé"
            },
            {
                question: "Que signifie le mot 'Renaissance' ?",
                options: ["Renouveau", "Déclin", "Guerre", "Paix"],
                correct: "Renouveau",
                explanation: "Renaissance signifie 'renouveau' des arts et des sciences antiques"
            },
            {
                question: "Qui a découvert que la Terre tourne autour du Soleil ?",
                options: ["Copernic", "Einstein", "Newton", "Pasteur"],
                correct: "Copernic",
                explanation: "Nicolas Copernic (1473-1543) a prouvé l'héliocentrisme"
            }
        ]
    },
    
    rois: {
        title: "Rois de France",
        icon: "⚜️",
        description: "De Clovis à Louis XIV",
        exercises: [
            {
                question: "Qui était le premier roi des Francs ?",
                options: ["Clovis", "Charlemagne", "Louis XIV", "Napoléon"],
                correct: "Clovis",
                explanation: "Clovis (465-511) est le premier roi des Francs, baptisé à Reims"
            },
            {
                question: "Quel roi est surnommé le 'Roi-Soleil' ?",
                options: ["Louis XIV", "François Ier", "Henri IV", "Louis XVI"],
                correct: "Louis XIV",
                explanation: "Louis XIV (1638-1715) est le Roi-Soleil, symbole de l'absolutisme"
            },
            {
                question: "Où se trouve le château de Louis XIV ?",
                options: ["Versailles", "Louvre", "Chambord", "Fontainebleau"],
                correct: "Versailles",
                explanation: "Le château de Versailles est le symbole du règne de Louis XIV"
            },
            {
                question: "Quel roi a dit 'Paris vaut bien une messe' ?",
                options: ["Henri IV", "Louis XIV", "François Ier", "Charles V"],
                correct: "Henri IV",
                explanation: "Henri IV s'est converti au catholicisme pour devenir roi"
            },
            {
                question: "Quel symbole représente la royauté française ?",
                options: ["La fleur de lys", "La rose", "L'aigle", "Le lion"],
                correct: "La fleur de lys",
                explanation: "La fleur de lys était le symbole héraldique de la monarchie française"
            },
            {
                question: "Qui était Jeanne d'Arc ?",
                options: ["Une héroïne qui a sauvé la France", "Une reine", "Une princesse", "Une actrice"],
                correct: "Une héroïne qui a sauvé la France",
                explanation: "Jeanne d'Arc a libéré Orléans et fait sacrer Charles VII en 1429"
            },
            {
                question: "Quel roi a construit le château de Chambord ?",
                options: ["François Ier", "Louis XIV", "Henri IV", "Louis XVI"],
                correct: "François Ier",
                explanation: "François Ier a fait construire Chambord à partir de 1519"
            },
            {
                question: "Comment appelle-t-on le pouvoir absolu du roi ?",
                options: ["L'absolutisme", "La démocratie", "La république", "Le communisme"],
                correct: "L'absolutisme",
                explanation: "L'absolutisme est le pouvoir total du roi sur son royaume"
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
// SYSTÈME DE SONS
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
    welcome: "Bienvenue en histoire ! Choisis une période pour voyager dans le temps !",
    startActivity: "Super ! Lis bien chaque question et découvre le passé !",
    correct: "Excellent ! Tu connais bien l'histoire !",
    incorrect: "Pas grave ! L'histoire s'apprend avec le temps.",
    halfDone: "Tu es à mi-chemin ! Continue ton voyage dans le temps !",
    complete: "Bravo ! Tu as terminé cette leçon d'histoire !",
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

console.log('✅ Section Histoire initialisée avec succès !');
console.log('🏰 12 leçons disponibles:', Object.keys(EDUCATIONAL_CONTENT));

// Afficher message de bienvenue après 2 secondes
setTimeout(() => {
    showCurioMessage('welcome');
}, 2000);

// ========================================
// GESTION ACTIVITÉS
// ========================================
let currentActivity = null;
let currentExerciseIndex = 0;
let currentScore = 0;

// Fonction de mélange Fisher-Yates
function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

function startActivity(activityId) {
    console.log('🎮 Démarrage activité:', activityId);
    
    const content = EDUCATIONAL_CONTENT[activityId];
    if (!content) {
        console.error('Activité non trouvée:', activityId);
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
        <div style="background: #fef9f3; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
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
    const shuffledOptions = shuffleArray(exercise.options);
    shuffledOptions.forEach(function(option) {
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
    
    // Désactiver tous les boutons
    const buttons = optionsContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        currentScore++;
        playSound('correct');
        showCurioMessage('correct');
        
        feedbackZone.innerHTML = `
            <div style="background: #d4edda; padding: 1rem; border-radius: 8px; border: 2px solid #28a745;">
                <p style="color: #155724; font-weight: bold; margin-bottom: 0.5rem;">✅ Correct !</p>
                <p style="color: #155724; font-size: 0.9rem;">${exercise.explanation}</p>
            </div>
        `;
    } else {
        // Perdre un cœur
        window.heartsSystem.loseHeart(SECTION_NAME);
        playSound('incorrect');
        showCurioMessage('incorrect');
        
        feedbackZone.innerHTML = `
            <div style="background: #f8d7da; padding: 1rem; border-radius: 8px; border: 2px solid #dc3545;">
                <p style="color: #721c24; font-weight: bold; margin-bottom: 0.5rem;">❌ Incorrect !</p>
                <p style="color: #721c24; font-size: 0.9rem;">La bonne réponse est : <strong>${exercise.correct}</strong></p>
                <p style="color: #721c24; font-size: 0.9rem; margin-top: 0.5rem;">${exercise.explanation}</p>
            </div>
        `;
        
        // Vérifier si plus de cœurs
        const hearts = window.heartsSystem.getHearts(SECTION_NAME);
        if (hearts.current === 0) {
            setTimeout(() => showCurioMessage('noHearts'), 1000);
        }
    }
    
    // Bouton suivant
    setTimeout(() => {
        if (currentExerciseIndex < content.exercises.length - 1) {
            feedbackZone.innerHTML += `
                <button 
                    onclick="nextExercise()" 
                    class="btn-complete-activity"
                    style="margin-top: 1rem;"
                >
                    ➡️ Question suivante
                </button>
            `;
        } else {
            completeActivity();
        }
    }, 100);
}

function nextExercise() {
    currentExerciseIndex++;
    displayExercise();
}

function completeActivity() {
    const content = EDUCATIONAL_CONTENT[currentActivity];
    const totalQuestions = content.exercises.length;
    const percentage = Math.round((currentScore / totalQuestions) * 100);
    
    // Calcul XP
    let xpGained = currentScore * 10;
    if (percentage === 100) {
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
window.HistoireDebug = {
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

console.log('💡 Debug disponible : HistoireDebug.listActivities()');