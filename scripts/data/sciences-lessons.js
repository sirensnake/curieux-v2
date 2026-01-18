/**
 * ==========================================
 * DONNÉES LEÇONS SCIENCES CM1-CM2
 * Le Monde des Curieux
 * ==========================================
 * 15 leçons progressives : astronomie, physique, biologie, environnement
 */

const sciencesLessons = [
    // ========================================
    // LEÇON 1 : SYSTÈME SOLAIRE
    // ========================================
    {
        id: 'sciences-01-systeme-solaire',
        title: 'Système Solaire',
        emoji: '🌍',
        xp: 45,
        difficulty: 'facile',
        exercises: [
            { question: 'Quelle étoile est au centre du système solaire ?', answer: 'le soleil', hint: 'LE SOLEIL (notre étoile, source de lumière et chaleur)' },
            { question: 'Combien de planètes y a-t-il dans le système solaire ?', answer: '8', hint: '8 planètes (depuis que Pluton n\'est plus considérée comme planète)' },
            { question: 'Quelle est la planète la plus proche du Soleil ?', answer: 'mercure', hint: 'MERCURE (la plus petite et la plus chaude)' },
            { question: 'Sur quelle planète vivons-nous ?', answer: 'terre', hint: 'TERRE (la planète bleue, 3ème depuis le Soleil)' },
            { question: 'Quelle est la plus grosse planète du système solaire ?', answer: 'jupiter', hint: 'JUPITER (planète géante gazeuse)' },
            { question: 'Comment s\'appelle le satellite naturel de la Terre ?', answer: 'lune', hint: 'LUNE (tourne autour de la Terre en 28 jours)' },
            { question: 'Quelle planète est surnommée la planète rouge ?', answer: 'mars', hint: 'MARS (rouge à cause de l\'oxyde de fer)' },
            { question: 'Combien de temps met la Terre pour tourner autour du Soleil ?', answer: '1 an', hint: '1 AN (365 jours, une révolution complète)' }
        ]
    },

    // ========================================
    // LEÇON 2 : CYCLE DE L'EAU
    // ========================================
    {
        id: 'sciences-02-cycle-eau',
        title: 'Cycle de l\'Eau',
        emoji: '💧',
        xp: 45,
        difficulty: 'facile',
        exercises: [
            { question: 'Que devient l\'eau liquide quand elle chauffe ?', answer: 'vapeur', hint: 'VAPEUR (évaporation, transformation en gaz)' },
            { question: 'Comment s\'appelle le passage de l\'eau liquide à la vapeur ?', answer: 'évaporation', hint: 'ÉVAPORATION (sous l\'effet de la chaleur)' },
            { question: 'Comment s\'appelle la vapeur qui redevient liquide ?', answer: 'condensation', hint: 'CONDENSATION (formation des nuages)' },
            { question: 'Comment appelle-t-on l\'eau qui tombe du ciel ?', answer: 'précipitations', hint: 'PRÉCIPITATIONS (pluie, neige, grêle)' },
            { question: 'Où va l\'eau de pluie qui tombe sur le sol ?', answer: 'rivières', hint: 'RIVIÈRES (ou fleuves, puis océans)' },
            { question: 'Dans quel état est l\'eau dans les nuages ?', answer: 'liquide', hint: 'LIQUIDE (gouttelettes en suspension)' },
            { question: 'Que forme la vapeur d\'eau en altitude quand il fait froid ?', answer: 'nuages', hint: 'NUAGES (condensation de la vapeur)' }
        ]
    },

    // ========================================
    // LEÇON 3 : ÉTATS DE LA MATIÈRE
    // ========================================
    {
        id: 'sciences-03-etats-matiere',
        title: 'États de la Matière',
        emoji: '🧊',
        xp: 50,
        difficulty: 'moyen',
        exercises: [
            { question: 'Quels sont les 3 états de la matière ?', answer: 'solide liquide gaz', hint: 'SOLIDE, LIQUIDE, GAZ' },
            { question: 'Dans quel état est la glace ?', answer: 'solide', hint: 'SOLIDE (forme fixe, dur)' },
            { question: 'Dans quel état est l\'eau du robinet ?', answer: 'liquide', hint: 'LIQUIDE (coule, prend la forme du récipient)' },
            { question: 'Dans quel état est l\'air que nous respirons ?', answer: 'gaz', hint: 'GAZ (invisible, se répand partout)' },
            { question: 'Comment s\'appelle le passage du solide au liquide ?', answer: 'fusion', hint: 'FUSION (la glace fond en eau)' },
            { question: 'Comment s\'appelle le passage du liquide au solide ?', answer: 'solidification', hint: 'SOLIDIFICATION (l\'eau gèle en glace)' },
            { question: 'À quelle température l\'eau gèle-t-elle ?', answer: '0 degrés', hint: '0 DEGRÉS Celsius (ou 0°C)' },
            { question: 'À quelle température l\'eau bout-elle ?', answer: '100 degrés', hint: '100 DEGRÉS Celsius (ou 100°C)' }
        ]
    },

    // ========================================
    // LEÇON 4 : ÉLECTRICITÉ
    // ========================================
    {
        id: 'sciences-04-electricite',
        title: 'Électricité',
        emoji: '⚡',
        xp: 55,
        difficulty: 'moyen',
        exercises: [
            { question: 'Que faut-il pour faire fonctionner une lampe électrique ?', answer: 'pile', hint: 'PILE (ou batterie, source d\'électricité)' },
            { question: 'Comment appelle-t-on le chemin que suit l\'électricité ?', answer: 'circuit', hint: 'CIRCUIT ÉLECTRIQUE (boucle fermée)' },
            { question: 'Quel matériau laisse passer l\'électricité ?', answer: 'conducteur', hint: 'CONDUCTEUR (métaux comme le cuivre)' },
            { question: 'Quel matériau ne laisse pas passer l\'électricité ?', answer: 'isolant', hint: 'ISOLANT (plastique, caoutchouc, bois)' },
            { question: 'Comment s\'appelle un circuit où l\'électricité circule ?', answer: 'circuit fermé', hint: 'CIRCUIT FERMÉ (boucle complète)' },
            { question: 'Que se passe-t-il si on coupe le circuit ?', answer: 'il s\'ouvre', hint: 'IL S\'OUVRE (l\'électricité ne passe plus)' },
            { question: 'Quel appareil permet d\'ouvrir/fermer un circuit ?', answer: 'interrupteur', hint: 'INTERRUPTEUR (bouton on/off)' }
        ]
    },

    // ========================================
    // LEÇON 5 : LUMIÈRE ET OMBRES
    // ========================================
    {
        id: 'sciences-05-lumiere',
        title: 'Lumière et Ombres',
        emoji: '💡',
        xp: 45,
        difficulty: 'facile',
        exercises: [
            { question: 'Quelle est notre principale source de lumière naturelle ?', answer: 'le soleil', hint: 'LE SOLEIL (étoile qui éclaire la Terre)' },
            { question: 'Comment se déplace la lumière ?', answer: 'en ligne droite', hint: 'EN LIGNE DROITE (rayons rectilignes)' },
            { question: 'Que se forme quand on cache la lumière ?', answer: 'ombre', hint: 'OMBRE (zone sombre derrière l\'objet)' },
            { question: 'Un objet qui laisse passer la lumière est...', answer: 'transparent', hint: 'TRANSPARENT (comme le verre)' },
            { question: 'Un objet qui ne laisse pas passer la lumière est...', answer: 'opaque', hint: 'OPAQUE (bloque complètement la lumière)' },
            { question: 'Comment appelle-t-on un objet qui produit de la lumière ?', answer: 'source lumineuse', hint: 'SOURCE LUMINEUSE (Soleil, lampe, bougie)' },
            { question: 'Pourquoi voit-on les objets ?', answer: 'ils réfléchissent la lumière', hint: 'ILS RÉFLÉCHISSENT LA LUMIÈRE (renvoient vers nos yeux)' }
        ]
    },

    // ========================================
    // LEÇON 6 : CORPS HUMAIN - SQUELETTE
    // ========================================
    {
        id: 'sciences-06-squelette',
        title: 'Corps Humain : Squelette',
        emoji: '🦴',
        xp: 50,
        difficulty: 'moyen',
        exercises: [
            { question: 'Combien d\'os a un adulte environ ?', answer: '206', hint: '206 OS (bébé en a plus, certains fusionnent)' },
            { question: 'Comment s\'appelle l\'os de la tête ?', answer: 'crâne', hint: 'CRÂNE (protège le cerveau)' },
            { question: 'Comment s\'appelle la colonne d\'os dans le dos ?', answer: 'colonne vertébrale', hint: 'COLONNE VERTÉBRALE (vertèbres empilées)' },
            { question: 'Quel os protège le cœur et les poumons ?', answer: 'côtes', hint: 'CÔTES (cage thoracique)' },
            { question: 'Comment s\'appelle l\'os du bras ?', answer: 'humérus', hint: 'HUMÉRUS (entre épaule et coude)' },
            { question: 'Comment s\'appelle l\'os de la cuisse ?', answer: 'fémur', hint: 'FÉMUR (le plus long os du corps)' },
            { question: 'Que trouve-t-on à l\'intérieur des os ?', answer: 'moelle', hint: 'MOELLE OSSEUSE (fabrique les cellules sanguines)' }
        ]
    },

    // ========================================
    // LEÇON 7 : CORPS HUMAIN - DIGESTION
    // ========================================
    {
        id: 'sciences-07-digestion',
        title: 'Corps Humain : Digestion',
        emoji: '🍽️',
        xp: 55,
        difficulty: 'moyen',
        exercises: [
            { question: 'Par où entre la nourriture dans le corps ?', answer: 'bouche', hint: 'BOUCHE (première étape de la digestion)' },
            { question: 'Comment s\'appelle le tube qui va de la bouche à l\'estomac ?', answer: 'œsophage', 'oesophage' hint: 'ŒSOPHAGE (conduit des aliments)' },
            { question: 'Dans quel organe la nourriture est-elle brassée avec des sucs ?', answer: 'estomac', hint: 'ESTOMAC (poche qui digère partiellement)' },
            { question: 'Quel organe absorbe les nutriments dans le sang ?', answer: 'intestin', hint: 'INTESTIN (intestin grêle surtout)' },
            { question: 'Par où sortent les déchets de la digestion ?', answer: 'anus', hint: 'ANUS (extrémité du gros intestin)' },
            { question: 'Quel organe produit la bile pour digérer les graisses ?', answer: 'foie', hint: 'FOIE (glande digestive importante)' },
            { question: 'Combien de temps environ dure la digestion ?', answer: '24 heures', hint: '24 HEURES environ (varie selon aliments)' }
        ]
    },

    // ========================================
    // LEÇON 8 : CLASSIFICATION ANIMALE
    // ========================================
    {
        id: 'sciences-08-classification',
        title: 'Classification Animale',
        emoji: '🦁',
        xp: 50,
        difficulty: 'moyen',
        exercises: [
            { question: 'Comment s\'appellent les animaux avec une colonne vertébrale ?', answer: 'vertébrés', hint: 'VERTÉBRÉS (mammifères, oiseaux, poissons...)' },
            { question: 'Comment s\'appellent les animaux sans colonne vertébrale ?', answer: 'invertébrés', hint: 'INVERTÉBRÉS (insectes, vers, mollusques...)' },
            { question: 'Comment s\'appellent les animaux qui allaitent leurs petits ?', answer: 'mammifères', hint: 'MAMMIFÈRES (chat, chien, humain, baleine...)' },
            { question: 'Comment s\'appellent les animaux avec des plumes ?', answer: 'oiseaux', hint: 'OISEAUX (aigle, moineau, poule...)' },
            { question: 'Comment s\'appellent les animaux qui vivent dans l\'eau et ont des branchies ?', answer: 'poissons', hint: 'POISSONS (respirent dans l\'eau)' },
            { question: 'Comment s\'appellent les animaux à sang froid avec des écailles ?', answer: 'reptiles', hint: 'REPTILES (serpent, lézard, crocodile...)' },
            { question: 'Comment s\'appellent les animaux avec 6 pattes ?', answer: 'insectes', hint: 'INSECTES (mouche, fourmi, abeille...)' },
            { question: 'Les grenouilles font partie de quel groupe ?', answer: 'amphibiens', hint: 'AMPHIBIENS (vivent dans l\'eau et sur terre)' }
        ]
    },

    // ========================================
    // LEÇON 9 : CHAÎNE ALIMENTAIRE
    // ========================================
    {
        id: 'sciences-09-chaine-alimentaire',
        title: 'Chaîne Alimentaire',
        emoji: '🌱',
        xp: 55,
        difficulty: 'moyen',
        exercises: [
            { question: 'Comment s\'appellent les êtres vivants qui fabriquent leur nourriture ?', answer: 'producteurs', hint: 'PRODUCTEURS (plantes avec photosynthèse)' },
            { question: 'Comment s\'appellent les animaux qui mangent des plantes ?', answer: 'herbivores', hint: 'HERBIVORES (vache, lapin, chenille...)' },
            { question: 'Comment s\'appellent les animaux qui mangent d\'autres animaux ?', answer: 'carnivores', hint: 'CARNIVORES (lion, renard, aigle...)' },
            { question: 'Comment s\'appellent les animaux qui mangent plantes ET animaux ?', answer: 'omnivores', hint: 'OMNIVORES (humain, ours, cochon...)' },
            { question: 'Quel est le premier maillon de la chaîne alimentaire ?', answer: 'plantes', hint: 'PLANTES (ou producteurs)' },
            { question: 'Comment s\'appellent les organismes qui décomposent les déchets ?', answer: 'décomposeurs', hint: 'DÉCOMPOSEURS (champignons, bactéries, vers)' },
            { question: 'Que se passe-t-il si un maillon disparaît ?', answer: 'la chaîne se rompt', hint: 'LA CHAÎNE SE ROMPT (déséquilibre écologique)' }
        ]
    },

    // ========================================
    // LEÇON 10 : VOLCANS ET SÉISMES
    // ========================================
    {
        id: 'sciences-10-volcans',
        title: 'Volcans et Séismes',
        emoji: '🌋',
        xp: 55,
        difficulty: 'moyen',
        exercises: [
            { question: 'Comment s\'appelle la roche en fusion dans le volcan ?', answer: 'magma', hint: 'MAGMA (roche très chaude et liquide)' },
            { question: 'Comment s\'appelle le magma quand il sort du volcan ?', answer: 'lave', hint: 'LAVE (coule à la surface)' },
            { question: 'Comment s\'appelle l\'ouverture au sommet du volcan ?', answer: 'cratère', hint: 'CRATÈRE (trou par où sort la lave)' },
            { question: 'Comment s\'appelle une secousse de la Terre ?', answer: 'séisme', hint: 'SÉISME (ou tremblement de terre)' },
            { question: 'Comment s\'appelle l\'appareil qui mesure les séismes ?', answer: 'sismographe', hint: 'SISMOGRAPHE (enregistre les vibrations)' },
            { question: 'Où se trouvent la plupart des volcans ?', answer: 'bordure des plaques', hint: 'BORDURE DES PLAQUES TECTONIQUES' },
            { question: 'Quel célèbre volcan a détruit Pompéi ?', answer: 'vésuve', hint: 'VÉSUVE (Italie, 79 ap. J-C)' }
        ]
    },

    // ========================================
    // LEÇON 11 : ÉNERGIE
    // ========================================
    {
        id: 'sciences-11-energie',
        title: 'Énergie',
        emoji: '⚙️',
        xp: 50,
        difficulty: 'moyen',
        exercises: [
            { question: 'Quelle est notre principale source d\'énergie naturelle ?', answer: 'le soleil', hint: 'LE SOLEIL (énergie solaire)' },
            { question: 'Comment s\'appelle l\'énergie du vent ?', answer: 'éolienne', hint: 'ÉOLIENNE (énergie éolienne)' },
            { question: 'Comment s\'appelle l\'énergie de l\'eau qui coule ?', answer: 'hydraulique', hint: 'HYDRAULIQUE (barrages, rivières)' },
            { question: 'Quelle énergie produit de la chaleur en brûlant ?', answer: 'thermique', hint: 'THERMIQUE (feu, combustion)' },
            { question: 'Quelles énergies ne s\'épuisent pas ?', answer: 'renouvelables', hint: 'RENOUVELABLES (soleil, vent, eau...)' },
            { question: 'Quelles énergies s\'épuisent ?', answer: 'non renouvelables', hint: 'NON RENOUVELABLES (pétrole, charbon, gaz)' },
            { question: 'Comment économiser l\'énergie à la maison ?', answer: 'éteindre les lumières', hint: 'ÉTEINDRE LES LUMIÈRES (ou appareils non utilisés)' }
        ]
    },

    // ========================================
    // LEÇON 12 : MACHINES SIMPLES
    // ========================================
    {
        id: 'sciences-12-machines',
        title: 'Machines Simples',
        emoji: '🔧',
        xp: 50,
        difficulty: 'moyen',
        exercises: [
            { question: 'Comment s\'appelle une barre rigide qui pivote sur un point ?', answer: 'levier', hint: 'LEVIER (balançoire, pince...)' },
            { question: 'Comment s\'appelle le point d\'appui du levier ?', answer: 'pivot', hint: 'PIVOT (ou point d\'appui, fulcrum)' },
            { question: 'Comment s\'appelle un plan incliné enroulé autour d\'un axe ?', answer: 'vis', hint: 'VIS (transforme rotation en mouvement)' },
            { question: 'Comment s\'appelle une roue avec une corde ?', answer: 'poulie', hint: 'POULIE (facilite le levage)' },
            { question: 'Quel système permet de déplacer des charges lourdes facilement ?', answer: 'plan incliné', hint: 'PLAN INCLINÉ (rampe)' },
            { question: 'Comment s\'appelle une roue dentée ?', answer: 'engrenage', hint: 'ENGRENAGE (transmet le mouvement)' },
            { question: 'À quoi servent les machines simples ?', answer: 'faciliter le travail', hint: 'FACILITER LE TRAVAIL (réduire l\'effort)' }
        ]
    },

    // ========================================
    // LEÇON 13 : ENVIRONNEMENT
    // ========================================
    {
        id: 'sciences-13-environnement',
        title: 'Environnement',
        emoji: '🌿',
        xp: 50,
        difficulty: 'moyen',
        exercises: [
            { question: 'Comment s\'appelle l\'ensemble des êtres vivants et leur milieu ?', answer: 'écosystème', hint: 'ÉCOSYSTÈME (forêt, océan, prairie...)' },
            { question: 'Quel gaz rejetons-nous en respirant ?', answer: 'co2', hint: 'CO2 (dioxyde de carbone)' },
            { question: 'Quel gaz les plantes produisent-elles ?', answer: 'oxygène', hint: 'OXYGÈNE (grâce à la photosynthèse)' },
            { question: 'Que faut-il faire avec les déchets recyclables ?', answer: 'les trier', hint: 'LES TRIER (poubelles de recyclage)' },
            { question: 'Comment s\'appelle le réchauffement de la planète ?', answer: 'réchauffement climatique', hint: 'RÉCHAUFFEMENT CLIMATIQUE (effet de serre)' },
            { question: 'Quel animal est menacé de disparition ?', answer: 'espèce en danger', hint: 'ESPÈCE EN DANGER (ours polaire, tigre...)' },
            { question: 'Que peut-on faire pour protéger la planète ?', answer: 'économiser l\'eau', hint: 'ÉCONOMISER L\'EAU (ou énergie, recycler...)' }
        ]
    },

    // ========================================
    // LEÇON 14 : ASTRONOMIE
    // ========================================
    {
        id: 'sciences-14-astronomie',
        title: 'Astronomie',
        emoji: '🔭',
        xp: 55,
        difficulty: 'moyen',
        exercises: [
            { question: 'Comment s\'appelle une boule de gaz brillante dans l\'espace ?', answer: 'étoile', hint: 'ÉTOILE (comme le Soleil)' },
            { question: 'Comment s\'appelle un groupe d\'étoiles formant un dessin ?', answer: 'constellation', hint: 'CONSTELLATION (Grande Ourse, Orion...)' },
            { question: 'Comment s\'appelle notre galaxie ?', answer: 'voie lactée', hint: 'VOIE LACTÉE (contient le système solaire)' },
            { question: 'Comment s\'appelle un rocher qui tombe du ciel ?', answer: 'météorite', hint: 'MÉTÉORITE (fragment qui atteint la Terre)' },
            { question: 'Comment s\'appelle une étoile filante ?', answer: 'météore', hint: 'MÉTÉORE (brûle dans l\'atmosphère)' },
            { question: 'Quel instrument sert à observer les étoiles ?', answer: 'télescope', hint: 'TÉLESCOPE (ou lunette astronomique)' },
            { question: 'Pourquoi ne voit-on pas les étoiles le jour ?', answer: 'le soleil est trop lumineux', hint: 'LE SOLEIL EST TROP LUMINEUX (éblouit)' }
        ]
    },

    // ========================================
    // LEÇON 15 : QUIZ FINAL SCIENCES
    // ========================================
    {
        id: 'sciences-15-quiz-final',
        title: 'Quiz Final Sciences',
        emoji: '🏆',
        xp: 100,
        difficulty: 'difficile',
        exercises: [
            { question: 'Combien de planètes dans le système solaire ?', answer: '8', hint: '8 PLANÈTES' },
            { question: 'Comment s\'appelle le passage de l\'eau liquide en vapeur ?', answer: 'évaporation', hint: 'ÉVAPORATION' },
            { question: 'Quels sont les 3 états de la matière ?', answer: 'solide liquide gaz', hint: 'SOLIDE, LIQUIDE, GAZ' },
            { question: 'Quel matériau laisse passer l\'électricité ?', answer: 'conducteur', hint: 'CONDUCTEUR (métaux)' },
            { question: 'Combien d\'os dans le corps humain adulte ?', answer: '206', hint: '206 OS' },
            { question: 'Comment s\'appellent les animaux qui allaitent ?', answer: 'mammifères', hint: 'MAMMIFÈRES' },
            { question: 'Quel est le premier maillon de la chaîne alimentaire ?', answer: 'plantes', hint: 'PLANTES (producteurs)' },
            { question: 'Comment s\'appelle le magma qui sort du volcan ?', answer: 'lave', hint: 'LAVE' },
            { question: 'Quelle énergie vient du vent ?', answer: 'éolienne', hint: 'ÉOLIENNE' },
            { question: 'Quel gaz les plantes produisent-elles ?', answer: 'oxygène', hint: 'OXYGÈNE (photosynthèse)' }
        ]
    }
];

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sciencesLessons;
}

console.log('✅ Données Sciences chargées : ' + sciencesLessons.length + ' leçons');
