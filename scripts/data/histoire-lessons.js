/**
 * ==========================================
 * DONNÉES LEÇONS HISTOIRE CM1-CM2
 * Le Monde des Curieux
 * ==========================================
 * 15 leçons chronologiques avec contextes historiques
 */

const histoireLessons = [
    // ========================================
    // LEÇON 1 : PRÉHISTOIRE - PALÉOLITHIQUE
    // ========================================
    {
        id: 'histoire-01-paleolithique',
        title: 'Préhistoire : Paléolithique',
        emoji: '🦴',
        xp: 45,
        difficulty: 'facile',
        context: 'Le Paléolithique (pierre ancienne) s\'étend de -3 millions d\'années à -10 000 ans. Les hommes sont nomades, chasseurs-cueilleurs, et découvrent le feu.',
        contextIcon: '🔥',
        exercises: [
            { question: 'Comment appelle-t-on les hommes du Paléolithique ?', answer: 'nomades', hint: 'NOMADES (ils se déplacent pour suivre les troupeaux)' },
            { question: 'Quelle grande découverte du Paléolithique change la vie des hommes ?', answer: 'le feu', hint: 'LE FEU (vers -400 000 ans, pour se chauffer et cuire)' },
            { question: 'Comment s\'appelle l\'homme préhistorique le plus connu ?', answer: 'homo sapiens', hint: 'HOMO SAPIENS (notre ancêtre direct, "homme sage")' },
            { question: 'Où vivaient les hommes du Paléolithique ?', answer: 'dans des grottes', hint: 'DANS DES GROTTES (ou des abris naturels)' },
            { question: 'Comment se nourrissaient-ils principalement ?', answer: 'chasse et cueillette', hint: 'CHASSE ET CUEILLETTE (animaux et plantes sauvages)' },
            { question: 'Quel célèbre site préhistorique français a des peintures ?', answer: 'lascaux', hint: 'LASCAUX (grottes ornées de peintures rupestres)' },
            { question: 'En quelle matière fabriquaient-ils leurs outils ?', answer: 'pierre', hint: 'PIERRE (silex taillé pour couper et gratter)' }
        ]
    },

    // ========================================
    // LEÇON 2 : PRÉHISTOIRE - NÉOLITHIQUE
    // ========================================
    {
        id: 'histoire-02-neolithique',
        title: 'Préhistoire : Néolithique',
        emoji: '🌾',
        xp: 45,
        difficulty: 'facile',
        context: 'Le Néolithique (pierre nouvelle) débute vers -10 000 ans. Les hommes deviennent sédentaires grâce à l\'agriculture et l\'élevage.',
        contextIcon: '🏡',
        exercises: [
            { question: 'Comment appelle-t-on les hommes du Néolithique ?', answer: 'sédentaires', hint: 'SÉDENTAIRES (ils restent au même endroit)' },
            { question: 'Quelle révolution marque le début du Néolithique ?', answer: 'agriculture', hint: 'AGRICULTURE (cultiver des plantes)' },
            { question: 'Que font les hommes avec les animaux au Néolithique ?', answer: 'élevage', hint: 'ÉLEVAGE (domestication des animaux)' },
            { question: 'Comment s\'appellent les grandes pierres dressées ?', answer: 'menhirs', hint: 'MENHIRS (grosses pierres verticales)' },
            { question: 'Comment s\'appelle un cercle de pierres ?', answer: 'cromlech', hint: 'CROMLECH (ou dolmen pour table de pierre)' },
            { question: 'En quoi sont fabriqués les premiers récipients ?', answer: 'terre cuite', hint: 'TERRE CUITE (poterie, céramique)' },
            { question: 'Quelle activité artisanale se développe ?', answer: 'tissage', hint: 'TISSAGE (fabrication de tissus avec le lin)' }
        ]
    },

    // ========================================
    // LEÇON 3 : ANTIQUITÉ ÉGYPTIENNE
    // ========================================
    {
        id: 'histoire-03-egypte',
        title: 'Antiquité : Égypte',
        emoji: '🐫',
        xp: 50,
        difficulty: 'moyen',
        context: 'La civilisation égyptienne s\'épanouit de -3000 à -30 av. J-C le long du Nil. Les pharaons règnent et construisent des pyramides gigantesques.',
        contextIcon: '🔺',
        exercises: [
            { question: 'Comment s\'appelle le roi d\'Égypte ?', answer: 'pharaon', hint: 'PHARAON (chef politique et religieux)' },
            { question: 'Quel fleuve traverse l\'Égypte ?', answer: 'le nil', hint: 'LE NIL (fleuve vital pour l\'agriculture)' },
            { question: 'Comment s\'appellent les tombeaux des pharaons ?', answer: 'pyramides', hint: 'PYRAMIDES (ou mastabas pour les nobles)' },
            { question: 'Quel pharaon célèbre a une tombe intacte découverte ?', answer: 'toutankhamon', hint: 'TOUTÂNKHAMON (tombe découverte en 1922)' },
            { question: 'Comment s\'appelle l\'écriture égyptienne ?', answer: 'hiéroglyphes', hint: 'HIÉROGLYPHES (écriture sacrée avec symboles)' },
            { question: 'Comment préparait-on les morts pour l\'au-delà ?', answer: 'momification', hint: 'MOMIFICATION (conservation du corps)' },
            { question: 'Quel monument mi-homme mi-lion garde les pyramides ?', answer: 'sphinx', hint: 'SPHINX de Gizeh (lion à tête humaine)' }
        ]
    },

    // ========================================
    // LEÇON 4 : GRÈCE ANTIQUE
    // ========================================
    {
        id: 'histoire-04-grece',
        title: 'Antiquité : Grèce',
        emoji: '🏛️',
        xp: 50,
        difficulty: 'moyen',
        context: 'La Grèce antique (-800 à -146) invente la démocratie, les Jeux Olympiques et développe philosophie, théâtre et sciences.',
        contextIcon: '⚡',
        exercises: [
            { question: 'Quelle cité invente la démocratie ?', answer: 'athènes', hint: 'ATHÈNES (démocratie = pouvoir du peuple)' },
            { question: 'Où se déroulent les premiers Jeux Olympiques ?', answer: 'olympie', hint: 'OLYMPIE (tous les 4 ans, en l\'honneur de Zeus)' },
            { question: 'Comment s\'appelle le temple principal d\'Athènes ?', answer: 'parthénon', hint: 'PARTHÉNON (temple dédié à Athéna)' },
            { question: 'Quel philosophe célèbre boit la ciguë ?', answer: 'socrate', hint: 'SOCRATE (condamné à mort, maître de Platon)' },
            { question: 'Quel héros combat le Minotaure ?', answer: 'thésée', hint: 'THÉSÉE (dans le labyrinthe de Crète)' },
            { question: 'Quelle cité est connue pour ses guerriers ?', answer: 'sparte', hint: 'SPARTE (éducation militaire stricte)' },
            { question: 'Comment s\'appelle le dieu des dieux grecs ?', answer: 'zeus', hint: 'ZEUS (roi de l\'Olympe, dieu de la foudre)' }
        ]
    },

    // ========================================
    // LEÇON 5 : EMPIRE ROMAIN
    // ========================================
    {
        id: 'histoire-05-rome',
        title: 'Antiquité : Rome',
        emoji: '🏺',
        xp: 55,
        difficulty: 'moyen',
        context: 'L\'Empire romain domine le bassin méditerranéen de -27 av. J-C à 476 ap. J-C. Rome construit routes, aqueducs et diffuse sa culture.',
        contextIcon: '🦅',
        exercises: [
            { question: 'Qui est le premier empereur romain ?', answer: 'auguste', hint: 'AUGUSTE (neveu de César, 27 av. J-C)' },
            { question: 'Comment s\'appelle la région dominée par Rome ?', answer: 'empire', hint: 'EMPIRE (autour de la Méditerranée)' },
            { question: 'Où se battaient les gladiateurs ?', answer: 'colisée', hint: 'COLISÉE (ou amphithéâtre)' },
            { question: 'Comment s\'appellent les conquérants de territoires ?', answer: 'légions', hint: 'LÉGIONS (armée romaine organisée)' },
            { question: 'Quelle construction permet d\'amener l\'eau ?', answer: 'aqueduc', hint: 'AQUEDUC (pont pour transporter l\'eau)' },
            { question: 'Comment s\'appelle la place publique romaine ?', answer: 'forum', hint: 'FORUM (centre politique et commercial)' },
            { question: 'Quel général célèbre conquiert la Gaule ?', answer: 'jules césar', hint: 'JULES CÉSAR (de -58 à -51)' },
            { question: 'Quelle langue parlaient les Romains ?', answer: 'latin', hint: 'LATIN (origine des langues romanes)' }
        ]
    },

    // ========================================
    // LEÇON 6 : MOYEN ÂGE - CHÂTEAUX FORTS
    // ========================================
    {
        id: 'histoire-06-chateaux',
        title: 'Moyen Âge : Châteaux Forts',
        emoji: '🏰',
        xp: 50,
        difficulty: 'moyen',
        context: 'Le Moyen Âge s\'étend de 476 à 1492. Les seigneurs construisent des châteaux forts pour se protéger et contrôler leurs terres.',
        contextIcon: '⚔️',
        exercises: [
            { question: 'Comment s\'appelle la tour principale du château ?', answer: 'donjon', hint: 'DONJON (tour la plus haute et fortifiée)' },
            { question: 'Comment s\'appelle le fossé autour du château ?', answer: 'douves', hint: 'DOUVES (remplies d\'eau pour la défense)' },
            { question: 'Quel pont mobile permet de franchir les douves ?', answer: 'pont-levis', hint: 'PONT-LEVIS (se lève et se baisse)' },
            { question: 'Comment s\'appellent les ouvertures pour tirer des flèches ?', answer: 'meurtrières', hint: 'MEURTRIÈRES (fentes étroites)' },
            { question: 'Qui vit dans le château avec le seigneur ?', answer: 'chevaliers', hint: 'CHEVALIERS (guerriers à cheval)' },
            { question: 'Comment s\'appelle la cérémonie pour devenir chevalier ?', answer: 'adoubement', hint: 'ADOUBEMENT (rituel sacré)' },
            { question: 'Quelle pièce sert aux banquets ?', answer: 'salle des fêtes', hint: 'SALLE DES FÊTES (ou grande salle)' }
        ]
    },

    // ========================================
    // LEÇON 7 : MOYEN ÂGE - ROIS DE FRANCE
    // ========================================
    {
        id: 'histoire-07-rois',
        title: 'Moyen Âge : Rois de France',
        emoji: '👑',
        xp: 55,
        difficulty: 'moyen',
        context: 'Les Capétiens règnent sur la France de 987 à 1328. Les rois renforcent progressivement leur pouvoir face aux seigneurs.',
        contextIcon: '⚜️',
        exercises: [
            { question: 'Quel roi fonde la dynastie des Capétiens en 987 ?', answer: 'hugues capet', hint: 'HUGUES CAPET (élu roi de France)' },
            { question: 'Quel roi part en croisade et meurt à Tunis ?', answer: 'saint louis', hint: 'SAINT LOUIS (Louis IX, roi pieux)' },
            { question: 'Sous quel arbre rendait-il la justice ?', answer: 'chêne', hint: 'CHÊNE (à Vincennes)' },
            { question: 'Quel roi agrandit beaucoup le royaume ?', answer: 'philippe auguste', hint: 'PHILIPPE AUGUSTE (victoire de Bouvines 1214)' },
            { question: 'Comment s\'appelle la guerre de religion du Moyen Âge ?', answer: 'croisades', hint: 'CROISADES (expéditions en Terre Sainte)' },
            { question: 'Dans quelle ville les rois se font sacrer ?', answer: 'reims', hint: 'REIMS (cathédrale du sacre)' },
            { question: 'Quelle héroïne aide Charles VII à être sacré ?', answer: 'jeanne d\'arc', hint: 'JEANNE D\'ARC (libère Orléans en 1429)' }
        ]
    },

    // ========================================
    // LEÇON 8 : RENAISSANCE
    // ========================================
    {
        id: 'histoire-08-renaissance',
        title: 'Renaissance',
        emoji: '🎨',
        xp: 50,
        difficulty: 'moyen',
        context: 'La Renaissance (XVe-XVIe siècles) voit renaître les arts, les sciences et l\'humanisme. Les artistes italiens rayonnent en Europe.',
        contextIcon: '🖼️',
        exercises: [
            { question: 'Quel peintre italien peint la Joconde ?', answer: 'léonard de vinci', hint: 'LÉONARD DE VINCI (génie universel)' },
            { question: 'Quel roi invite Léonard en France ?', answer: 'françois premier', hint: 'FRANÇOIS Ier (roi de 1515 à 1547)' },
            { question: 'Quel château de la Loire François Ier fait-il construire ?', answer: 'chambord', hint: 'CHAMBORD (chef-d\'œuvre architectural)' },
            { question: 'Quelle invention de Gutenberg révolutionne les livres ?', answer: 'imprimerie', hint: 'IMPRIMERIE (vers 1450, caractères mobiles)' },
            { question: 'Quel navigateur découvre l\'Amérique en 1492 ?', answer: 'christophe colomb', hint: 'CHRISTOPHE COLOMB (cherchait les Indes)' },
            { question: 'Quel artiste peint la chapelle Sixtine ?', answer: 'michel-ange', hint: 'MICHEL-ANGE (plafond et Jugement dernier)' },
            { question: 'Dans quel pays la Renaissance débute-t-elle ?', answer: 'italie', hint: 'ITALIE (Florence, Rome, Venise)' }
        ]
    },

    // ========================================
    // LEÇON 9 : RÉVOLUTION FRANÇAISE
    // ========================================
    {
        id: 'histoire-09-revolution',
        title: 'Révolution Française',
        emoji: '⚖️',
        xp: 60,
        difficulty: 'difficile',
        context: 'La Révolution française (1789-1799) renverse la monarchie absolue. Le peuple prend le pouvoir et proclame les droits de l\'homme.',
        contextIcon: '🗽',
        exercises: [
            { question: 'En quelle année commence la Révolution française ?', answer: '1789', hint: '1789 (prise de la Bastille le 14 juillet)' },
            { question: 'Quelle prison parisienne est prise le 14 juillet ?', answer: 'bastille', hint: 'BASTILLE (symbole de l\'absolutisme royal)' },
            { question: 'Quel roi est guillotiné en 1793 ?', answer: 'louis xvi', hint: 'LOUIS XVI (roi de France)' },
            { question: 'Comment s\'appelle la devise de la République ?', answer: 'liberté égalité fraternité', hint: 'LIBERTÉ, ÉGALITÉ, FRATERNITÉ' },
            { question: 'Quel document proclame les droits de l\'homme ?', answer: 'déclaration des droits de l\'homme', hint: 'DÉCLARATION DES DROITS DE L\'HOMME (août 1789)' },
            { question: 'Comment s\'appelle la période de terreur ?', answer: 'terreur', hint: 'TERREUR (1793-1794, Robespierre)' },
            { question: 'Quelle chanson devient l\'hymne français ?', answer: 'marseillaise', hint: 'MARSEILLAISE (composée en 1792)' }
        ]
    },

    // ========================================
    // LEÇON 10 : NAPOLÉON
    // ========================================
    {
        id: 'histoire-10-napoleon',
        title: 'Napoléon Bonaparte',
        emoji: '🦅',
        xp: 55,
        difficulty: 'moyen',
        context: 'Napoléon Bonaparte (1769-1821) devient empereur en 1804. Il conquiert l\'Europe mais finit exilé après Waterloo en 1815.',
        contextIcon: '👨‍✈️',
        exercises: [
            { question: 'En quelle année Napoléon devient-il empereur ?', answer: '1804', hint: '1804 (sacre à Notre-Dame de Paris)' },
            { question: 'Sur quelle île Napoléon naît-il ?', answer: 'corse', hint: 'CORSE (Ajaccio, 1769)' },
            { question: 'Quelle bataille importante gagne-t-il en 1805 ?', answer: 'austerlitz', hint: 'AUSTERLITZ (victoire éclatante)' },
            { question: 'Quelle dernière bataille perd-il en 1815 ?', answer: 'waterloo', hint: 'WATERLOO (Belgique, défaite finale)' },
            { question: 'Sur quelle île est-il exilé après Waterloo ?', answer: 'sainte-hélène', hint: 'SAINTE-HÉLÈNE (Atlantique Sud, où il meurt)' },
            { question: 'Quel code de lois écrit-il ?', answer: 'code civil', hint: 'CODE CIVIL (ou Code Napoléon, 1804)' },
            { question: 'Où ses cendres reposent-elles à Paris ?', answer: 'invalides', hint: 'INVALIDES (tombeau sous le dôme)' }
        ]
    },

    // ========================================
    // LEÇON 11 : XIXe SIÈCLE - INDUSTRIALISATION
    // ========================================
    {
        id: 'histoire-11-industrie',
        title: 'XIXe : Industrialisation',
        emoji: '🏭',
        xp: 50,
        difficulty: 'moyen',
        context: 'Le XIXe siècle voit la révolution industrielle transformer l\'économie. Les machines à vapeur révolutionnent transports et production.',
        contextIcon: '🚂',
        exercises: [
            { question: 'Quelle invention permet de faire fonctionner les trains ?', answer: 'machine à vapeur', hint: 'MACHINE À VAPEUR (James Watt)' },
            { question: 'Comment s\'appelle la matière première de l\'industrie ?', answer: 'charbon', hint: 'CHARBON (extrait des mines)' },
            { question: 'Où travaillent les ouvriers dans les usines ?', answer: 'fabriques', hint: 'FABRIQUES (ou manufactures)' },
            { question: 'Quel nouveau moyen de transport sur rails apparaît ?', answer: 'train', hint: 'TRAIN (chemin de fer, locomotives)' },
            { question: 'Comment s\'appelle la tour métallique construite en 1889 ?', answer: 'tour eiffel', hint: 'TOUR EIFFEL (Exposition universelle Paris)' },
            { question: 'Quel inventeur français crée le cinéma ?', answer: 'lumière', hint: 'Frères LUMIÈRE (1895, cinématographe)' },
            { question: 'Quelle énergie commence à remplacer la vapeur ?', answer: 'électricité', hint: 'ÉLECTRICITÉ (fin XIXe siècle)' }
        ]
    },

    // ========================================
    // LEÇON 12 : PREMIÈRE GUERRE MONDIALE
    // ========================================
    {
        id: 'histoire-12-ww1',
        title: 'Première Guerre Mondiale',
        emoji: '🪖',
        xp: 60,
        difficulty: 'difficile',
        context: 'La Grande Guerre (1914-1918) oppose deux alliances d\'empires. C\'est une guerre de tranchées terrible qui fait 10 millions de morts.',
        contextIcon: '🕊️',
        exercises: [
            { question: 'Quelles années dure la Première Guerre mondiale ?', answer: '1914-1918', hint: '1914-1918 (4 ans de conflit)' },
            { question: 'Comment s\'appellent les soldats français ?', answer: 'poilus', hint: 'POILUS (surnom affectueux)' },
            { question: 'Dans quoi se battaient les soldats ?', answer: 'tranchées', hint: 'TRANCHÉES (fossés creusés dans la terre)' },
            { question: 'Quelle grande bataille dure 10 mois en 1916 ?', answer: 'verdun', hint: 'VERDUN (bataille la plus meurtrière)' },
            { question: 'Quel jour férié commémore la fin de la guerre ?', answer: '11 novembre', hint: '11 NOVEMBRE 1918 (armistice)' },
            { question: 'Quel traité de paix est signé en 1919 ?', answer: 'versailles', hint: 'VERSAILLES (traité très dur pour l\'Allemagne)' },
            { question: 'Quel président français négocie la paix ?', answer: 'clemenceau', hint: 'CLEMENCEAU (le Tigre)' }
        ]
    },

    // ========================================
    // LEÇON 13 : SECONDE GUERRE MONDIALE
    // ========================================
    {
        id: 'histoire-13-ww2',
        title: 'Seconde Guerre Mondiale',
        emoji: '✈️',
        xp: 65,
        difficulty: 'difficile',
        context: 'La Seconde Guerre mondiale (1939-1945) est le conflit le plus meurtrier de l\'histoire. L\'Allemagne nazie envahit l\'Europe avant d\'être vaincue.',
        contextIcon: '🎖️',
        exercises: [
            { question: 'Quelles années dure la Seconde Guerre mondiale ?', answer: '1939-1945', hint: '1939-1945 (6 ans de guerre totale)' },
            { question: 'Quel dictateur allemand déclenche la guerre ?', answer: 'hitler', hint: 'HITLER (chef nazi)' },
            { question: 'Quel général appelle à résister depuis Londres ?', answer: 'de gaulle', hint: 'DE GAULLE (appel du 18 juin 1940)' },
            { question: 'Comment s\'appelle le débarquement allié en 1944 ?', answer: 'débarquement', hint: 'DÉBARQUEMENT (6 juin 1944, Normandie)' },
            { question: 'Quel jour férié célèbre la fin de la guerre en Europe ?', answer: '8 mai', hint: '8 MAI 1945 (capitulation allemande)' },
            { question: 'Quelle bombe met fin à la guerre au Japon ?', answer: 'atomique', hint: 'BOMBE ATOMIQUE (Hiroshima, Nagasaki)' },
            { question: 'Quelle organisation internationale est créée après ?', answer: 'onu', hint: 'ONU (Organisation des Nations Unies, 1945)' }
        ]
    },

    // ========================================
    // LEÇON 14 : XXe SIÈCLE - DÉCOLONISATION
    // ========================================
    {
        id: 'histoire-14-decolonisation',
        title: 'XXe : Décolonisation',
        emoji: '🌍',
        xp: 55,
        difficulty: 'moyen',
        context: 'Après 1945, les colonies européennes obtiennent leur indépendance. C\'est la fin des empires coloniaux et l\'émergence du Tiers-Monde.',
        contextIcon: '🗺️',
        exercises: [
            { question: 'Quel grand pays asiatique devient indépendant en 1947 ?', answer: 'inde', hint: 'INDE (indépendance britannique)' },
            { question: 'Qui guide l\'indépendance de l\'Inde pacifiquement ?', answer: 'gandhi', hint: 'GANDHI (résistance non-violente)' },
            { question: 'En quelle année l\'Algérie devient-elle indépendante ?', answer: '1962', hint: '1962 (accords d\'Évian)' },
            { question: 'Quel continent se libère massivement dans les années 60 ?', answer: 'afrique', hint: 'AFRIQUE (années 1960, "année africaine")' },
            { question: 'Comment s\'appelle la séparation USA-URSS ?', answer: 'guerre froide', hint: 'GUERRE FROIDE (1947-1991, sans combat direct)' },
            { question: 'Quel mur symbolise la division de l\'Europe ?', answer: 'mur de berlin', hint: 'MUR DE BERLIN (1961-1989)' },
            { question: 'En quelle année tombe le mur de Berlin ?', answer: '1989', hint: '1989 (réunification Allemagne)' }
        ]
    },

    // ========================================
    // LEÇON 15 : MONUMENTS HISTORIQUES
    // ========================================
    {
        id: 'histoire-15-monuments',
        title: 'Monuments Historiques',
        emoji: '🗿',
        xp: 100,
        difficulty: 'moyen',
        context: 'Les monuments historiques français témoignent de siècles d\'histoire. Chaque époque a laissé ses chefs-d\'œuvre architecturaux.',
        contextIcon: '🏛️',
        exercises: [
            { question: 'Quel monument parisien est une cathédrale gothique ?', answer: 'notre-dame', hint: 'NOTRE-DAME de Paris (XIIe-XIIIe siècle)' },
            { question: 'Où se trouve le palais des rois de France ?', answer: 'versailles', hint: 'VERSAILLES (château de Louis XIV)' },
            { question: 'Quel arc célèbre est sur les Champs-Élysées ?', answer: 'arc de triomphe', hint: 'ARC DE TRIOMPHE (Napoléon, 1836)' },
            { question: 'Quel pont médiéval est à Avignon ?', answer: 'pont d\'avignon', hint: 'PONT D\'AVIGNON (Saint-Bénézet)' },
            { question: 'Quel célèbre château est dans la Loire ?', answer: 'chambord', hint: 'CHAMBORD (François Ier, Renaissance)' },
            { question: 'Quel monument romain est à Nîmes ?', answer: 'arènes', hint: 'ARÈNES (amphithéâtre romain)' },
            { question: 'Quel château abrite la galerie des Glaces ?', answer: 'versailles', hint: 'VERSAILLES (chef-d\'œuvre du classicisme)' },
            { question: 'Quelle abbaye est sur un rocher en Normandie ?', answer: 'mont-saint-michel', hint: 'MONT-SAINT-MICHEL (merveille de l\'Occident)' },
            { question: 'Où les rois de France sont-ils enterrés ?', answer: 'saint-denis', hint: 'SAINT-DENIS (basilique nécropole)' },
            { question: 'Quel musée parisien était un palais royal ?', answer: 'louvre', hint: 'LOUVRE (forteresse puis palais)' }
        ]
    }
];

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = histoireLessons;
}

// ==========================================
// LEÇONS DÉDIÉES — LOUIS XIV & RÉVOLUTION
// Programme CM2
// ==========================================

histoireLessons.push(
    // ========================================
    // LEÇON 16 : LOUIS XIV ET VERSAILLES
    // ========================================
    {
        id: 'histoire-16-louisxiv',
        title: 'Louis XIV et Versailles',
        emoji: '👑',
        xp: 50,
        difficulty: 'moyen',
        period: 'tempsmodernes',
        context: 'Louis XIV règne de 1661 à 1715, soit 54 ans ! C\'est le plus long règne de l\'histoire de France. Il concentre tous les pouvoirs et fait de Versailles le symbole de sa grandeur.',
        contextIcon: '🏰',
        questions: [
            {
                question: 'Quel surnom portait Louis XIV ?',
                options: ['Le Roi-Soleil', 'Le Grand Roi', 'Le Roi de Fer', 'Le Roi Guerrier'],
                correct: 0,
                explanation: 'Louis XIV choisit le Soleil comme emblème : comme le Soleil, il éclaire et gouverne tout.'
            },
            {
                question: 'Combien d\'années environ Louis XIV a-t-il régné ?',
                options: ['30 ans', '45 ans', '72 ans', '100 ans'],
                correct: 2,
                explanation: 'Louis XIV règne de 1643 à 1715, soit 72 ans — le plus long règne de l\'histoire de France !'
            },
            {
                question: 'Où Louis XIV a-t-il fait construire son célèbre palais ?',
                options: ['Paris', 'Versailles', 'Fontainebleau', 'Lyon'],
                correct: 1,
                explanation: 'Le château de Versailles, construit à partir de 1661, est le symbole de la puissance royale.'
            },
            {
                question: 'Quelle est la fameuse galerie du château de Versailles ?',
                options: ['Galerie des Batailles', 'Galerie des Glaces', 'Grande Galerie', 'Galerie du Roi'],
                correct: 1,
                explanation: 'La Galerie des Glaces (357 miroirs !) est le chef-d\'œuvre de Versailles, construite en 1684.'
            },
            {
                question: 'Que signifie la monarchie absolue ?',
                options: ['Le roi partage le pouvoir', 'Le roi a tous les pouvoirs', 'Le peuple vote les lois', 'Le pape dirige la France'],
                correct: 1,
                explanation: 'Louis XIV concentre tous les pouvoirs. Sa devise : "L\'État, c\'est moi."'
            },
            {
                question: 'Qui a conçu les jardins de Versailles ?',
                options: ['Molière', 'Le Nôtre', 'Mansart', 'Colbert'],
                correct: 1,
                explanation: 'André Le Nôtre dessine les jardins à la française : symmétriques, géométriques, immenses.'
            },
            {
                question: 'Quel célèbre auteur de comédies vivait à la cour de Louis XIV ?',
                options: ['Racine', 'La Fontaine', 'Molière', 'Corneille'],
                correct: 2,
                explanation: 'Molière (Jean-Baptiste Poquelin) écrit ses plus grandes pièces grâce au soutien de Louis XIV.'
            },
            {
                question: 'Quelle décision de Louis XIV chassa 300 000 Français de leur pays ?',
                options: ['L\'Édit de Nantes', 'La Révocation de l\'Édit de Nantes', 'Le Traité de Westphalie', 'La Grande Ordonnance'],
                correct: 1,
                explanation: 'En 1685, Louis XIV révoque l\'Édit de Nantes : les protestants (huguenots) doivent fuir ou se convertir.'
            },
            {
                question: 'Qui était le ministre des finances de Louis XIV, artisan de la prospérité française ?',
                options: ['Richelieu', 'Mazarin', 'Colbert', 'Vauban'],
                correct: 2,
                explanation: 'Colbert organise l\'économie française, développe le commerce et les manufactures royales.'
            },
            {
                question: 'Quelle ville devient la capitale royale avec Louis XIV ?',
                options: ['Paris reste capitale', 'Versailles devient la nouvelle capitale', 'Lyon', 'Orléans'],
                correct: 1,
                explanation: 'En 1682, Louis XIV installe sa cour à Versailles. Toute la vie politique se déroule désormais au château.'
            }
        ]
    },

    // ========================================
    // LEÇON 17 : LA RÉVOLUTION FRANÇAISE
    // ========================================
    {
        id: 'histoire-17-revolution',
        title: 'La Révolution française',
        emoji: '🇫🇷',
        xp: 55,
        difficulty: 'moyen',
        period: 'epoquecontemporaine',
        context: 'En 1789, le peuple français, épuisé par la misère et les impôts injustes, se révolte contre le roi Louis XVI. C\'est le début d\'une transformation radicale de la France.',
        contextIcon: '⚡',
        questions: [
            {
                question: 'En quelle année a eu lieu la Révolution française ?',
                options: ['1776', '1789', '1792', '1799'],
                correct: 1,
                explanation: '1789 est l\'année clé : prise de la Bastille, Déclaration des Droits de l\'Homme, fin de l\'Ancien Régime.'
            },
            {
                question: 'Quel événement symbolise le début de la Révolution ?',
                options: ['L\'exécution du roi', 'La prise de la Bastille', 'La fuite de Louis XVI', 'La proclamation de la République'],
                correct: 1,
                explanation: 'Le 14 juillet 1789, le peuple de Paris prend d\'assaut la Bastille, prison symbole du pouvoir royal.'
            },
            {
                question: 'Quelle est la devise de la République française, née de la Révolution ?',
                options: ['Dieu et Roi', 'Travail, Famille, Patrie', 'Liberté, Égalité, Fraternité', 'Un pour tous, tous pour un'],
                correct: 2,
                explanation: '"Liberté, Égalité, Fraternité" — cette devise est toujours celle de la France aujourd\'hui.'
            },
            {
                question: 'Quel texte fondamental est adopté le 26 août 1789 ?',
                options: ['La Constitution', 'La Déclaration des Droits de l\'Homme et du Citoyen', 'Le Code Civil', 'Le Traité de Paris'],
                correct: 1,
                explanation: 'Ce texte proclame que tous les hommes naissent libres et égaux. Il inspire encore nos lois aujourd\'hui.'
            },
            {
                question: 'Qui était le roi de France au moment de la Révolution ?',
                options: ['Louis XIV', 'Louis XV', 'Louis XVI', 'Louis XVIII'],
                correct: 2,
                explanation: 'Louis XVI (et son épouse Marie-Antoinette) sont arrêtés, jugés et exécutés guillotinés en 1793.'
            },
            {
                question: 'Qu\'est-ce que la guillotine ?',
                options: ['Une prison', 'Un instrument d\'exécution', 'Une arme de guerre', 'Un outil de torture'],
                correct: 1,
                explanation: 'Inventée pour exécuter "plus humainement", la guillotine est utilisée massivement pendant la Terreur (1793-1794).'
            },
            {
                question: 'Comment s\'appellent les trois groupes sociaux (les "ordres") avant la Révolution ?',
                options: ['Nobles, Bourgeois, Pauvres', 'Clergé, Noblesse, Tiers État', 'Roi, Ministres, Peuple', 'Seigneurs, Chevaliers, Serfs'],
                correct: 1,
                explanation: 'Le Tiers État (97% des Français : paysans, artisans, bourgeois) paie tous les impôts alors que nobles et clergé en sont exemptés.'
            },
            {
                question: 'En quelle année la République française est-elle proclamée pour la première fois ?',
                options: ['1789', '1790', '1792', '1795'],
                correct: 2,
                explanation: 'Le 21 septembre 1792, la monarchie est abolie et la Première République est proclamée.'
            },
            {
                question: 'Qui est Robespierre ?',
                options: ['Un général victorieux', 'Un chef révolutionnaire qui dirige la Terreur', 'Le frère du roi', 'Un philosophe des Lumières'],
                correct: 1,
                explanation: 'Robespierre dirige le Comité de Salut Public pendant la Terreur (1793-1794) : des milliers de personnes sont guillotinées.'
            },
            {
                question: 'Quelle date est aujourd\'hui la fête nationale française ?',
                options: ['1er mai', '14 juillet', '11 novembre', '8 mai'],
                correct: 1,
                explanation: 'Le 14 juillet commémore la prise de la Bastille en 1789, symbole de la liberté du peuple français.'
            }
        ]
    }
);



// ==========================================
// CONTENU DES LEÇONS PAR PÉRIODE
// Externalisé depuis histoire_section_COMPLET.html
// ==========================================
const histoireLeconData = {

    prehistoire: {
        title: "La Préhistoire : Les débuts de l'humanité",
        content: `
            <h3>🦴 Qu'est-ce que la Préhistoire ?</h3>
            <p>La Préhistoire est la période la plus longue de l'histoire humaine. Elle commence il y a <strong>environ 3 millions d'années</strong> avec les premiers hommes et se termine vers <strong>-3300 avant J.-C.</strong> avec l'invention de l'écriture.</p>

            <h3>📅 Les deux grandes périodes</h3>
            <ul>
                <li><strong>Paléolithique</strong> (pierre ancienne, -3M → -10 000 ans) : nomades, chasseurs-cueilleurs</li>
                <li><strong>Néolithique</strong> (pierre nouvelle, -10 000 → -3300 av. J.-C.) : sédentaires, agriculteurs, premiers villages</li>
            </ul>

            <h3>🔥 Les grandes découvertes</h3>
            <ul>
                <li><strong>Le feu</strong> : Maîtrisé il y a environ 400 000 ans</li>
                <li><strong>Les outils</strong> : En pierre taillée puis polie</li>
                <li><strong>L'art</strong> : Peintures rupestres (Lascaux, Chauvet)</li>
                <li><strong>L'agriculture</strong> : Vers -10 000 ans</li>
            </ul>

            <h3>🪨 Les mégalithes</h3>
            <p>Au Néolithique, les hommes dressent d'immenses pierres : <strong>menhirs</strong> (pierres dressées), <strong>dolmens</strong> (tombes), <strong>cromlechs</strong> (cercles de pierres, comme Stonehenge).</p>

            <div style="background:#0d3020;border-left:4px solid #27ae60;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;" + " color:#fff;">
                <strong style="color:inherit;">>📌 À retenir :</strong> Préhistoire = avant l'écriture. Paléolithique = nomades. Néolithique = sédentaires et agriculteurs.
            </div>
        `
    },

    antiquite: {
        title: "L'Antiquité : Les grandes civilisations",
        content: `
            <h3>🏛️ Qu'est-ce que l'Antiquité ?</h3>
            <p>L'Antiquité débute avec l'<strong>invention de l'écriture</strong> vers -3300 av. J.-C. et se termine avec la <strong>chute de l'Empire romain d'Occident</strong> en <strong>476 après J.-C.</strong></p>

            <h3>🏺 Les grandes civilisations</h3>
            <ul>
                <li><strong>Les Égyptiens</strong> : Pyramides, pharaons, hiéroglyphes, momification</li>
                <li><strong>Les Grecs</strong> : Démocratie, philosophie, Jeux Olympiques (776 av. J.-C.)</li>
                <li><strong>Les Romains</strong> : Empire, routes, aqueducs, droit romain</li>
                <li><strong>Les Gaulois</strong> : Nos ancêtres, résistance à César</li>
            </ul>

            <h3>⚔️ Jules César et la Gaule</h3>
            <p>Entre <strong>58 et 52 av. J.-C.</strong>, Jules César conquiert la Gaule. <strong>Vercingétorix</strong> résiste mais est vaincu à <strong>Alésia</strong> en 52 av. J.-C. La Gaule devient romaine pour 500 ans.</p>

            <h3>🏗️ L'héritage romain</h3>
            <p>Routes (30 000 km !), aqueducs, amphithéâtres (Colisée), thermes. Nous utilisons encore l'<strong>alphabet latin</strong> et le <strong>calendrier</strong> de Jules César.</p>

            <div style="background:#0d1e2d;border-left:4px solid #2980b9;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;" + " color:#fff;">
                <strong style="color:inherit;">>📌 À retenir :</strong> Antiquité = de -3300 à 476. Égypte + Grèce + Rome = bases de notre civilisation.
            </div>
        `
    },

    moyenage: {
        title: "Le Moyen Âge : Châteaux, chevaliers et cathédrales",
        content: `
            <h3>🏰 Qu'est-ce que le Moyen Âge ?</h3>
            <p>Le Moyen Âge commence en <strong>476</strong> (chute de Rome) et se termine en <strong>1492</strong> (découverte de l'Amérique). C'est une période de <strong>1 000 ans</strong> !</p>

            <h3>👑 Charlemagne (742-814)</h3>
            <p>Roi des Francs couronné <strong>Empereur d'Occident</strong> par le pape en 800. Il unifie l'Europe et crée des écoles dans les monastères.</p>

            <h3>⚔️ Le système féodal</h3>
            <ul>
                <li><strong>Le clergé</strong> (ceux qui prient) : moines, prêtres, évêques</li>
                <li><strong>La noblesse</strong> (ceux qui combattent) : rois, seigneurs, chevaliers</li>
                <li><strong>Le peuple</strong> (ceux qui travaillent) : paysans, artisans, marchands</li>
            </ul>

            <h3>⚜️ Jeanne d'Arc et la Guerre de Cent Ans</h3>
            <p>La <strong>Guerre de Cent Ans</strong> (1337-1453) oppose la France à l'Angleterre. <strong>Jeanne d'Arc</strong>, guidée par des "voix", libère Orléans et permet à la France de gagner. Brûlée vive à 19 ans.</p>

            <div style="margin-top:20px; padding:16px 18px; background:rgba(79,195,247,0.1); border:2px solid #4fc3f7; border-radius:10px;">
                <p style="font-family:'Press Start 2P',monospace; font-size:0.55rem; color:#4fc3f7; margin-bottom:10px;">🔍 ALLER PLUS LOIN</p>
                <p style="margin-bottom:12px; line-height:1.7;">Tu veux découvrir un vrai château du Moyen Âge ? Explore la leçon sur le <strong>château de Châteaubriant</strong> !</p>
                <a href="lecon_chateau_chateaubriant.html" style="display:inline-block; font-family:'Press Start 2P',monospace; font-size:0.55rem; background:linear-gradient(135deg,#1a3a5c,#2d5a87); color:#4fc3f7; border:2px solid #4fc3f7; padding:10px 16px; border-radius:8px; text-decoration:none;">
                    🏰 Leçon : Le Château de Châteaubriant →
                </a>
            </div>

            <div style="background:#0d2a0d;border-left:4px solid #27ae60;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;" + " color:#fff;">
                <strong style="color:inherit;">>📌 À retenir :</strong> Moyen Âge = 476 à 1492. Féodalité, châteaux, chevaliers, cathédrales. Jeanne d'Arc = héroïne française.
            </div>
        `
    },

    tempsmodernes: {
        title: "Les Temps Modernes : Découvertes et Renaissance",
        content: `
            <h3>⛵ Qu'est-ce que les Temps Modernes ?</h3>
            <p>Les Temps Modernes commencent en <strong>1492</strong> avec la découverte de l'Amérique et se terminent en <strong>1789</strong> avec la Révolution française.</p>

            <h3>🌍 Les grandes découvertes</h3>
            <ul>
                <li><strong>1492</strong> : Christophe Colomb découvre l'Amérique</li>
                <li><strong>1498</strong> : Vasco de Gama atteint les Indes par l'Afrique</li>
                <li><strong>1519-1522</strong> : Magellan réalise le premier tour du monde</li>
            </ul>

            <h3>📖 La Renaissance</h3>
            <ul>
                <li><strong>1455</strong> : Gutenberg invente l'imprimerie</li>
                <li><strong>Léonard de Vinci</strong> : La Joconde, inventions géniales</li>
                <li><strong>Copernic et Galilée</strong> : La Terre tourne autour du Soleil</li>
            </ul>

            <h3>👑 La monarchie absolue</h3>
            <p><strong>Louis XIV</strong>, le "Roi-Soleil", règne 72 ans et construit <strong>Versailles</strong>. Devise : <em>"L'État, c'est moi."</em> À la fin du XVIIIe siècle, le peuple est épuisé par les impôts — la Révolution approche.</p>

            <div style="background:#2a1a1a;border-left:4px solid #e74c3c;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;" + " color:#fff;">
                <strong style="color:inherit;">>📌 À retenir :</strong> Temps Modernes = 1492 à 1789. Découverte Amérique + Renaissance + imprimerie + Louis XIV.
            </div>
        `
    },

    louisxiv: {
        title: "Louis XIV : Le Roi-Soleil et Versailles",
        content: `
            <h3>👑 Qui est Louis XIV ?</h3>
            <p>Louis XIV devient roi à <strong>4 ans</strong> en 1643, après la mort de son père Louis XIII. Il prend réellement le pouvoir en <strong>1661</strong> à la mort de son ministre Mazarin. Il régnera jusqu'en <strong>1715</strong> : <strong>72 ans de règne</strong>, le plus long de l'histoire de France !</p>

            <h3>☀️ Le Roi-Soleil</h3>
            <p>Louis XIV choisit le <strong>Soleil</strong> comme emblème : comme l'astre du jour, il éclaire tout et gouverne tout. Sa devise : <em>"Nec pluribus impar"</em> (à nul autre pareil). Il concentre <strong>tous les pouvoirs</strong> — c'est la <strong>monarchie absolue</strong> : "L'État, c'est moi."</p>

            <h3>🏰 Le château de Versailles</h3>
            <p>À partir de <strong>1661</strong>, Louis XIV transforme le petit pavillon de chasse de son père en un palais gigantesque. Des <strong>30 000 ouvriers</strong> travaillent pendant 50 ans. En <strong>1682</strong>, toute la cour royale s'y installe :</p>
            <ul>
                <li>La <strong>Galerie des Glaces</strong> : 73 mètres de long, 357 miroirs, 20 000 bougies</li>
                <li>Les <strong>jardins à la française</strong> d'André Le Nôtre : 800 hectares, 50 fontaines</li>
                <li><strong>6 000 personnes</strong> vivent au château (nobles, serviteurs, gardes)</li>
            </ul>

            <h3>🎭 Le siècle de Louis XIV</h3>
            <p>La cour de Versailles attire les plus grands artistes de France :</p>
            <ul>
                <li><strong>Molière</strong> : comédies (Le Bourgeois gentilhomme, L'Avare)</li>
                <li><strong>Racine</strong> : tragédies (Phèdre, Andromaque)</li>
                <li><strong>La Fontaine</strong> : Fables</li>
                <li><strong>Lully</strong> : musique et opéras</li>
            </ul>

            <h3>⚔️ Les guerres et la fin du règne</h3>
            <p>Louis XIV mène de nombreuses guerres pour agrandir la France. Mais elles coûtent très cher. En <strong>1685</strong>, il révoque l'Édit de Nantes : <strong>300 000 protestants</strong> fuient la France. À sa mort en 1715, la France est puissante mais endettée — ses arrière-petits-fils hériteront de cette dette explosive.</p>

            <div style="background:#3a3010;border-left:4px solid #f39c12;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#f39c12;">📌 À retenir :</strong> Louis XIV = Roi-Soleil, 72 ans de règne, Versailles, monarchie absolue. "L'État, c'est moi."
            </div>

            <div style="margin-top:20px; padding:16px; background:rgba(243,156,18,0.1); border:2px solid #f39c12; border-radius:10px;">
                <p style="font-family:'Press Start 2P',monospace; font-size:0.55rem; color:#f39c12; margin-bottom:12px;">🎬 VIDÉO — MAÎTRE LUCAS</p>
                <p style="margin-bottom:12px; font-size:0.9em; line-height:1.6;">Louis XIV expliqué en dessin animé pour CM1-CM2 :</p>
                <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:8px;">
                    <iframe
                        src="https://www.youtube.com/embed/KO5h5J1myzc"
                        title="Louis XIV - Maître Lucas CM1 CM2"
                        style="position:absolute; top:0; left:0; width:100%; height:100%; border:none; border-radius:8px;"
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        `
    },

    revolution: {
        title: "La Révolution française (1789)",
        content: `
            <h3>💥 Pourquoi une révolution ?</h3>
            <p>En 1789, la France est en crise :</p>
            <ul>
                <li><strong>Le peuple a faim</strong> : mauvaises récoltes, pain très cher</li>
                <li><strong>Les impôts</strong> écrasent les pauvres — nobles et clergé n'en paient pas</li>
                <li><strong>Louis XVI</strong> est faible, Marie-Antoinette dépense trop</li>
                <li>Les idées des <strong>philosophes</strong> (Rousseau, Voltaire, Montesquieu) ont semé le doute sur le pouvoir royal</li>
            </ul>

            <h3>📅 Les grandes dates</h3>
            <ul>
                <li><strong>5 mai 1789</strong> : Louis XVI réunit les États Généraux (clergé + noblesse + Tiers État)</li>
                <li><strong>14 juillet 1789</strong> : Prise de la Bastille → fête nationale française</li>
                <li><strong>4 août 1789</strong> : Abolition des privilèges de la noblesse</li>
                <li><strong>26 août 1789</strong> : Déclaration des Droits de l'Homme et du Citoyen</li>
                <li><strong>21 septembre 1792</strong> : Proclamation de la Première République</li>
                <li><strong>21 janvier 1793</strong> : Exécution de Louis XVI à la guillotine</li>
            </ul>

            <h3>⚡ La Terreur (1793-1794)</h3>
            <p><strong>Robespierre</strong> et le Comité de Salut Public gouvernent par la peur. Des milliers de personnes sont guillotinées, accusées d'être "ennemies de la Révolution". Cette période s'appelle la <strong>Terreur</strong>. Elle se termine quand Robespierre lui-même est guillotiné en juillet 1794.</p>

            <h3>🇫🇷 L'héritage de la Révolution</h3>
            <p>La Révolution change la France pour toujours :</p>
            <ul>
                <li>La <strong>devise</strong> : Liberté, Égalité, Fraternité</li>
                <li>La <strong>Marseillaise</strong> : hymne national</li>
                <li>Le <strong>drapeau tricolore</strong> bleu-blanc-rouge</li>
                <li>L'<strong>égalité devant la loi</strong> : plus de privilèges de naissance</li>
                <li>Le <strong>14 juillet</strong> : fête nationale</li>
            </ul>

            <div style="background:#0d2a3a;border-left:4px solid #3498db;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#3498db;">📌 À retenir :</strong> 1789 = Révolution. Bastille le 14 juillet. DDHC. République en 1792. Devise : Liberté, Égalité, Fraternité.
            </div>

            <div style="margin-top:20px; padding:16px; background:rgba(52,152,219,0.1); border:2px solid #3498db; border-radius:10px;">
                <p style="font-family:'Press Start 2P',monospace; font-size:0.55rem; color:#3498db; margin-bottom:12px;">🎬 VIDÉO — MAÎTRE LUCAS</p>
                <p style="margin-bottom:12px; font-size:0.9em; line-height:1.6;">La Révolution française expliquée en dessin animé pour CM1-CM2 :</p>
                <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:8px;">
                    <iframe
                        src="https://www.youtube.com/embed/D8fel30lK78"
                        title="La Révolution française - Maître Lucas CM1 CM2"
                        style="position:absolute; top:0; left:0; width:100%; height:100%; border:none; border-radius:8px;"
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                </div>
            </div>

            <div style="margin-top:16px; padding:16px; background:rgba(241,196,15,0.1); border:2px solid #f1c40f; border-radius:10px;">
                <p style="font-family:'Press Start 2P',monospace; font-size:0.55rem; color:#f1c40f; margin-bottom:12px;">🎬 IL ÉTAIT UNE FOIS L'HOMME (1978)</p>
                <p style="margin-bottom:12px; font-size:0.9em; line-height:1.6;">L'épisode classique sur la Révolution française (~25 min) :</p>
                <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:8px;">
                    <iframe
                        src="https://www.dailymotion.com/embed/video/x7vp1bt"
                        title="Il était une fois l'Homme - La Révolution française"
                        style="position:absolute; top:0; left:0; width:100%; height:100%; border:none; border-radius:8px;"
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        `
    },

    epoquecontemporaine: {
        title: "L'Époque Contemporaine : De 1789 à aujourd'hui",
        content: `
            <h3>🏭 Qu'est-ce que l'Époque Contemporaine ?</h3>
            <p>Elle commence en <strong>1789</strong> avec la Révolution française et continue jusqu'à aujourd'hui.</p>

            <h3>🇫🇷 La Révolution française (1789)</h3>
            <ul>
                <li><strong>14 juillet 1789</strong> : Prise de la Bastille → fête nationale</li>
                <li>Déclaration des Droits de l'Homme et du Citoyen</li>
                <li>Devise : <strong>"Liberté, Égalité, Fraternité"</strong></li>
            </ul>

            <h3>⚔️ Napoléon Bonaparte (1769-1821)</h3>
            <p>Général puis <strong>Empereur</strong> en 1804. Il réforme la France (Code Civil, lycées) et conquiert l'Europe. Vaincu à <strong>Waterloo</strong> en 1815.</p>

            <h3>⚙️ La Révolution industrielle (XIXe s.)</h3>
            <ul>
                <li>Machine à vapeur, trains, usines, exode rural</li>
                <li><strong>1889</strong> : Tour Eiffel pour l'Exposition Universelle</li>
            </ul>

            <h3>⚔️ Les guerres mondiales</h3>
            <ul>
                <li><strong>1914-1918</strong> : Première Guerre mondiale — 18 millions de morts</li>
                <li><strong>1939-1945</strong> : Seconde Guerre mondiale — Hitler, Shoah, Libération</li>
                <li><strong>1944</strong> : Débarquement en Normandie</li>
            </ul>

            <h3>🚀 Le monde d'aujourd'hui</h3>
            <ul>
                <li><strong>1957</strong> : Traité de Rome → Union Européenne</li>
                <li><strong>1969</strong> : Neil Armstrong marche sur la Lune</li>
                <li><strong>1989</strong> : Chute du mur de Berlin</li>
                <li><strong>1990s</strong> : Internet</li>
            </ul>

            <div style="background:#1a0d2a;border-left:4px solid #9b59b6;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;" + " color:#fff;">
                <strong style="color:inherit;">>📌 À retenir :</strong> Époque contemporaine = 1789 à aujourd'hui. Révolution → Napoléon → guerres mondiales → monde actuel.
            </div>
        `
    },

    napoleon: {
        title: "Napoléon Bonaparte : de la Révolution à l'Empire",
        content: `
            <h3>🦅 Qui est Napoléon Bonaparte ?</h3>
            <p>Né en <strong>1769 en Corse</strong>, Napoléon est un général brillant qui profite de la Révolution pour s'imposer. En <strong>1799</strong>, il prend le pouvoir et devient <strong>Premier Consul</strong>. En <strong>1804</strong>, il se fait sacrer <strong>Empereur des Français</strong> à Notre-Dame de Paris.</p>

            <h3>⚔️ Le Grand Empire</h3>
            <ul>
                <li><strong>Austerlitz (1805)</strong> : victoire éclatante contre l'Autriche et la Russie — son chef-d'œuvre</li>
                <li><strong>Iéna (1806)</strong> : défaite de la Prusse en quelques semaines</li>
                <li>À son apogée, il contrôle la majeure partie de l'Europe</li>
            </ul>

            <h3>📜 Les réformes durables</h3>
            <ul>
                <li><strong>Le Code Civil (1804)</strong> : encore en vigueur aujourd'hui dans ses grandes lignes</li>
                <li><strong>Les lycées</strong> : création de l'enseignement secondaire public</li>
                <li><strong>La Légion d'honneur</strong> : décoration nationale toujours existante</li>
                <li><strong>La Banque de France</strong> et la monnaie stable</li>
            </ul>

            <h3>📉 La chute</h3>
            <ul>
                <li><strong>1812</strong> : désastre de la campagne de Russie — 500 000 soldats morts dans le froid</li>
                <li><strong>1814</strong> : abdication, exil à l'île d'Elbe</li>
                <li><strong>1815</strong> : les Cent-Jours, puis défaite définitive à <strong>Waterloo</strong></li>
                <li>Exil définitif à <strong>Sainte-Hélène</strong>, où il meurt en <strong>1821</strong></li>
            </ul>

            <div style="background:#3a2a10;border-left:4px solid #f39c12;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#f39c12;">📌 À retenir :</strong> Napoléon = Empereur 1804, Code Civil, Austerlitz, défaite à Waterloo 1815, exil Sainte-Hélène.
            </div>
        `
    },

    ww1: {
        title: "La Première Guerre Mondiale (1914-1918)",
        content: `
            <h3>🪖 Comment la guerre commence-t-elle ?</h3>
            <p>Le <strong>28 juin 1914</strong>, l'archiduc François-Ferdinand est assassiné à Sarajevo. Par un jeu d'alliances, toute l'Europe bascule dans la guerre. D'un côté : <strong>France, Royaume-Uni, Russie</strong>. De l'autre : <strong>Allemagne et Autriche-Hongrie</strong>.</p>

            <h3>⛏️ La guerre des tranchées</h3>
            <p>Les soldats français — les <strong>Poilus</strong> — vivent dans la boue, sous les obus, sur 700 km de tranchées creusées de la mer du Nord à la Suisse.</p>
            <ul>
                <li><strong>Verdun (1916)</strong> : 300 jours de bataille, près de 700 000 morts — symbole de l'horreur</li>
                <li><strong>La Somme (1916)</strong> : 1 million de morts des deux côtés</li>
                <li>Nouvelles armes terrifiantes : gaz de combat, chars d'assaut, avions</li>
            </ul>

            <h3>🕊️ L'armistice</h3>
            <p>Le <strong>11 novembre 1918 à 11h</strong>, les canons se taisent. Le <strong>Traité de Versailles (1919)</strong> punit lourdement l'Allemagne — ce qui causera la Seconde Guerre mondiale.</p>
            <p>Bilan : <strong>18 à 20 millions de morts</strong>. On l'appelle alors « la Der des Ders ».</p>

            <div style="background:#1a2a1a;border-left:4px solid #27ae60;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#27ae60;">📌 À retenir :</strong> 1914-1918. Tranchées. Poilus. Verdun. Armistice 11 novembre 1918. 18 millions de morts.
            </div>
        `
    },

    ww2: {
        title: "La Seconde Guerre Mondiale (1939-1945)",
        content: `
            <h3>💥 Les causes</h3>
            <p>La crise économique des années 1930 et l'humiliation du Traité de Versailles permettent à <strong>Adolf Hitler</strong> de prendre le pouvoir en Allemagne en 1933. Il impose le nazisme et envahit l'Europe.</p>

            <h3>📅 Les grandes étapes</h3>
            <ul>
                <li><strong>1er septembre 1939</strong> : l'Allemagne envahit la Pologne → la France et l'Angleterre déclarent la guerre</li>
                <li><strong>Juin 1940</strong> : défaite française éclair. La France est occupée</li>
                <li><strong>18 juin 1940</strong> : depuis Londres, <strong>de Gaulle</strong> appelle à résister — début de la <strong>Résistance</strong></li>
                <li><strong>6 juin 1944</strong> : <strong>Débarquement en Normandie</strong> — les Alliés libèrent la France</li>
                <li><strong>8 mai 1945</strong> : capitulation de l'Allemagne → <strong>Victoire en Europe</strong> (jour férié)</li>
                <li><strong>Août 1945</strong> : bombes atomiques sur Hiroshima et Nagasaki → fin de la guerre</li>
            </ul>

            <h3>😢 La Shoah</h3>
            <p>Le régime nazi organise l'extermination systématique des Juifs d'Europe. <strong>6 millions de victimes</strong> sont assassinées dans des camps comme Auschwitz. C'est l'un des crimes les plus graves de l'histoire humaine.</p>

            <div style="background:#1a1a2a;border-left:4px solid #3498db;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#3498db;">📌 À retenir :</strong> 1939-1945. Hitler, occupation, Résistance, de Gaulle. Débarquement 6 juin 1944. Shoah : 6 millions de victimes. 8 mai 1945 = victoire.
            </div>
        `
    },

    republique: {
        title: "La Ve République et les institutions françaises",
        content: `
            <h3>🏛️ Qu'est-ce qu'une République ?</h3>
            <p>Une <strong>République</strong> est un régime politique où le pouvoir appartient au peuple, exercé par des représentants élus. La France a connu <strong>5 Républiques</strong> depuis la Révolution de 1789.</p>

            <h3>📜 La naissance de la Ve République (1958)</h3>
            <p>En <strong>1958</strong>, le général <strong>de Gaulle</strong> fait adopter une nouvelle Constitution qui renforce les pouvoirs du <strong>Président de la République</strong>. C'est la <strong>Ve République</strong>, toujours en vigueur aujourd'hui.</p>

            <h3>⚖️ Les trois pouvoirs</h3>
            <ul>
                <li><strong>Pouvoir exécutif</strong> : Président de la République (élu pour 5 ans) + gouvernement (Premier ministre + ministres)</li>
                <li><strong>Pouvoir législatif</strong> : Assemblée nationale (577 députés) + Sénat (348 sénateurs) — ils votent les lois</li>
                <li><strong>Pouvoir judiciaire</strong> : tribunaux et juges — ils font respecter les lois</li>
            </ul>
            <p>Cette séparation des pouvoirs vient du philosophe <strong>Montesquieu</strong> au XVIIIe siècle.</p>

            <h3>🗳️ La démocratie en France</h3>
            <ul>
                <li>Tous les citoyens de <strong>18 ans et plus</strong> peuvent voter</li>
                <li>Le Président est élu au <strong>suffrage universel direct</strong> depuis 1962</li>
                <li>La devise reste : <strong>Liberté, Égalité, Fraternité</strong></li>
            </ul>

            <h3>🇪🇺 La France en Europe</h3>
            <p>La France est membre fondateur de l'<strong>Union Européenne</strong> (Traité de Rome, 1957) et partage la monnaie <strong>euro</strong> avec 19 autres pays depuis 2002.</p>

            <div style="background:#0d2a3a;border-left:4px solid #9b59b6;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#9b59b6;">📌 À retenir :</strong> Ve République = 1958, de Gaulle. 3 pouvoirs séparés. Vote à 18 ans. France dans l'Union Européenne depuis 1957.
            </div>
        `
    }
};

// Export global
if (typeof window !== 'undefined') {
    window.histoireLessons = histoireLessons;
    window.histoireLeconData = histoireLeconData;
}

console.log('✅ Histoire chargée : ' + histoireLessons.length + ' leçons + 7 contenus de périodes');
