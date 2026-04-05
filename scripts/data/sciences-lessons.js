// ========================================
// SCIENCES LESSONS DATA - Alpine.js Format
// Le Monde des Curieux
// 106 questions CM1/CM2 réparties en 5 domaines
// ========================================

const sciencesLessons = {
    // ===== DOMAINE 1: SCIENCES DE LA TERRE =====
    terre: {
        name: 'Sciences de la Terre',
        description: 'Notre planète et l\'univers',
        imageUrl: 'images/sciences/illustration_systeme_solaire.jpg',
        lessons: {
            systeme_solaire: {
                title: '🪐 Le Système Solaire',
                content: `
                    <h3>Qu'est-ce que le système solaire ?</h3>
                    <p>Le système solaire est l'ensemble formé par le <strong>Soleil</strong> et tous les objets qui tournent autour de lui : les planètes, leurs satellites, les astéroïdes et les comètes.</p>

                    <h3>Le Soleil - notre étoile</h3>
                    <p>Le Soleil est une <strong>étoile</strong>, une boule de gaz brûlant qui produit de la lumière et de la chaleur. C'est grâce au Soleil que la vie existe sur Terre !</p>

                    <h3>Les 8 planètes</h3>
                    <p>Il y a <strong>8 planètes</strong> dans le système solaire, de la plus proche à la plus éloignée du Soleil :</p>
                    <ol>
                        <li><strong>Mercure</strong> - la plus petite et la plus proche</li>
                        <li><strong>Vénus</strong> - la plus chaude</li>
                        <li><strong>Terre</strong> - notre planète bleue</li>
                        <li><strong>Mars</strong> - la planète rouge</li>
                        <li><strong>Jupiter</strong> - la plus grosse</li>
                        <li><strong>Saturne</strong> - celle aux anneaux magnifiques</li>
                        <li><strong>Uranus</strong> - inclinée sur le côté</li>
                        <li><strong>Neptune</strong> - la plus éloignée</li>
                    </ol>

                    <h3>Les satellites naturels</h3>
                    <p>Certaines planètes ont des <strong>satellites</strong> qui tournent autour d'elles. La Terre a un satellite : la <strong>Lune</strong> !</p>

                    <h3>À retenir</h3>
                    <p>📌 Le Soleil est une <strong>étoile</strong>, pas une planète</p>
                    <p>📌 Il y a <strong>8 planètes</strong> dans notre système solaire</p>
                    <p>📌 La Terre est la seule planète connue où il y a de la <strong>vie</strong> !</p>
                `
            },
            cycle_eau: {
                title: '🌊 Le Cycle de l\'Eau',
                content: `
                    <h3>Qu'est-ce que le cycle de l'eau ?</h3>
                    <p>Le cycle de l'eau explique comment l'eau <strong>circule</strong> entre les océans, l'air et la terre. C'est un cycle qui se répète sans arrêt !</p>

                    <h3>Les étapes du cycle</h3>
                    <ol>
                        <li><strong>Évaporation</strong> : Le Soleil chauffe l'eau des océans, des lacs et des rivières. L'eau se transforme en <strong>vapeur</strong> et monte dans l'air.</li>
                        <li><strong>Condensation</strong> : En altitude, la vapeur d'eau refroidit et forme des petites gouttelettes qui créent les <strong>nuages</strong>.</li>
                        <li><strong>Précipitations</strong> : Quand les gouttelettes deviennent trop lourdes, elles retombent sous forme de <strong>pluie, neige ou grêle</strong>.</li>
                        <li><strong>Ruissellement</strong> : L'eau retourne dans les rivières, puis les océans, et le cycle recommence !</li>
                    </ol>

                    <h3>Les 3 états de l'eau</h3>
                    <ul>
                        <li><strong>Solide</strong> : glace, neige, grêle</li>
                        <li><strong>Liquide</strong> : eau des océans, rivières, pluie</li>
                        <li><strong>Gazeux</strong> : vapeur d'eau dans l'air</li>
                    </ul>

                    <h3>À retenir</h3>
                    <p>📌 L'eau sur Terre ne disparaît jamais, elle <strong>circule</strong> en permanence</p>
                    <p>📌 Le cycle de l'eau est alimenté par l'<strong>énergie du Soleil</strong></p>
                    <p>📌 Sans le cycle de l'eau, il n'y aurait <strong>pas de vie</strong> sur Terre !</p>
                `
            },
            volcans: {
                title: '🌋 Volcans & Séismes',
                content: `
                    <h3>Qu'est-ce qu'un volcan ?</h3>
                    <p>Un volcan est une <strong>montagne</strong> par laquelle remonte du <strong>magma</strong> (de la roche en fusion) depuis les profondeurs de la Terre.</p>

                    <h3>Les éruptions volcaniques</h3>
                    <p>Quand un volcan entre en éruption :</p>
                    <ul>
                        <li>Le <strong>magma</strong> remonte à la surface</li>
                        <li>Il devient de la <strong>lave</strong> (magma à l'air libre)</li>
                        <li>La lave coule sur les pentes du volcan</li>
                        <li>Des <strong>cendres</strong> et des <strong>gaz</strong> peuvent être projetés</li>
                    </ul>

                    <h3>Les volcans actifs, endormis et éteints</h3>
                    <ul>
                        <li><strong>Actifs</strong> : peuvent entrer en éruption à tout moment</li>
                        <li><strong>Endormis</strong> : n'ont pas eu d'éruption récente mais peuvent se réveiller</li>
                        <li><strong>Éteints</strong> : ne peuvent plus entrer en éruption</li>
                    </ul>

                    <h3>Qu'est-ce qu'un séisme ?</h3>
                    <p>Un séisme (ou tremblement de terre) se produit quand les <strong>plaques tectoniques</strong> (morceaux de la croûte terrestre) se déplacent et se frottent les unes contre les autres.</p>

                    <h3>Mesurer les séismes</h3>
                    <p>On utilise un <strong>sismographe</strong> pour mesurer l'intensité d'un séisme. Plus le séisme est fort, plus les secousses sont importantes.</p>

                    <h3>À retenir</h3>
                    <p>📌 Le <strong>magma</strong> est sous terre, la <strong>lave</strong> est en surface</p>
                    <p>📌 Les volcans et séismes se produisent souvent aux <strong>frontières des plaques</strong></p>
                    <p>📌 On peut <strong>prévoir</strong> les éruptions mais pas les séismes !</p>
                `
            },
            meteo: {
                title: '🌤️ Météo & Climat',
                content: `
                    <h3>Météo et climat, quelle différence ?</h3>
                    <ul>
                        <li><strong>La météo</strong> : le temps qu'il fait <strong>aujourd'hui</strong> (pluie, soleil, vent...)</li>
                        <li><strong>Le climat</strong> : le temps qu'il fait <strong>en moyenne</strong> sur une longue période</li>
                    </ul>

                    <h3>Les éléments de la météo</h3>
                    <ul>
                        <li><strong>Température</strong> : chaud ou froid (mesurée en °C)</li>
                        <li><strong>Précipitations</strong> : pluie, neige, grêle</li>
                        <li><strong>Vent</strong> : mouvement de l'air</li>
                        <li><strong>Pression atmosphérique</strong> : le poids de l'air</li>
                        <li><strong>Humidité</strong> : quantité de vapeur d'eau dans l'air</li>
                    </ul>

                    <h3>Les saisons</h3>
                    <p>La Terre tourne autour du Soleil en 1 an. Comme elle est inclinée, les rayons du Soleil n'arrivent pas de la même manière selon la période de l'année. Cela crée les <strong>4 saisons</strong> : printemps, été, automne, hiver.</p>

                    <h3>À retenir</h3>
                    <p>📌 La météo change <strong>chaque jour</strong>, le climat sur <strong>des années</strong></p>
                    <p>📌 Les saisons sont dues à l'<strong>inclinaison</strong> de la Terre</p>
                    <p>📌 On peut prévoir la météo grâce aux <strong>satellites</strong> et aux <strong>stations météo</strong> !</p>
                `
            }
        },
        quiz: [
            {q: "Quelle est l'étoile au centre du système solaire ?", o: ["Le Soleil", "La Lune", "Mars", "Jupiter"], c: "Le Soleil"},
            {q: "Combien de planètes compte le système solaire ?", o: ["8", "7", "9", "10"], c: "8"},
            {q: "Quelle est la planète la plus proche du Soleil ?", o: ["Mercure", "Vénus", "Terre", "Mars"], c: "Mercure"},
            {q: "Sur quelle planète vivons-nous ?", o: ["La Terre", "Mars", "Jupiter", "Vénus"], c: "La Terre"},
            {q: "Quelle planète est appelée la 'planète rouge' ?", o: ["Mars", "Vénus", "Jupiter", "Saturne"], c: "Mars"},
            {q: "Quelle planète possède des anneaux visibles ?", o: ["Saturne", "Jupiter", "Mars", "Terre"], c: "Saturne"},
            {q: "La Lune est le satellite naturel de quelle planète ?", o: ["La Terre", "Mars", "Jupiter", "Vénus"], c: "La Terre"},
            {q: "Quelle est la plus grosse planète du système solaire ?", o: ["Jupiter", "Saturne", "Terre", "Neptune"], c: "Jupiter"},
            {q: "Que se passe-t-il quand l'eau des océans chauffe ?", o: ["Elle s'évapore", "Elle gèle", "Elle coule", "Elle disparaît"], c: "Elle s'évapore"},
            {q: "Comment appelle-t-on la transformation de l'eau en vapeur ?", o: ["Évaporation", "Condensation", "Précipitation", "Infiltration"], c: "Évaporation"},
            {q: "Où va la vapeur d'eau qui monte dans le ciel ?", o: ["Elle forme des nuages", "Elle disparaît", "Elle retombe immédiatement", "Elle va dans l'espace"], c: "Elle forme des nuages"},
            {q: "Que se passe-t-il quand la vapeur d'eau refroidit ?", o: ["Elle se condense", "Elle s'évapore", "Elle brûle", "Elle gèle"], c: "Elle se condense"},
            {q: "Qu'est-ce que les précipitations ?", o: ["Pluie, neige, grêle", "Nuages", "Vapeur d'eau", "Arc-en-ciel"], c: "Pluie, neige, grêle"},
            {q: "Où retourne l'eau de pluie ?", o: ["Dans les rivières et océans", "Dans le ciel", "Elle disparaît", "Dans les arbres"], c: "Dans les rivières et océans"},
            {q: "Combien y a-t-il d'états de l'eau dans le cycle ?", o: ["3 états", "2 états", "4 états", "1 état"], c: "3 états"},
            {q: "Le cycle de l'eau se répète-t-il ?", o: ["Oui, constamment", "Non, jamais", "Parfois", "Une fois par an"], c: "Oui, constamment"},
            {q: "Qu'est-ce qu'un volcan ?", o: ["Une montagne qui crache du magma", "Une simple montagne", "Un trou dans le sol", "Une rivière de feu"], c: "Une montagne qui crache du magma"},
            {q: "Comment appelle-t-on la roche en fusion sous terre ?", o: ["Magma", "Lave", "Roche", "Vapeur"], c: "Magma"},
            {q: "Comment appelle-t-on le magma qui sort du volcan ?", o: ["Lave", "Magma", "Feu", "Fumée"], c: "Lave"},
            {q: "Qu'est-ce qu'un séisme ?", o: ["Un tremblement de terre", "Une éruption volcanique", "Un ouragan", "Une inondation"], c: "Un tremblement de terre"},
            {q: "Où se produisent la plupart des séismes ?", o: ["Aux frontières des plaques", "N'importe où", "Dans les océans", "Dans les villes"], c: "Aux frontières des plaques"},
            {q: "Avec quel instrument mesure-t-on les séismes ?", o: ["Sismographe", "Thermomètre", "Baromètre", "Boussole"], c: "Sismographe"},
            {q: "Tous les volcans sont-ils actifs ?", o: ["Non, certains sont éteints", "Oui, tous", "Aucun n'est actif", "Seulement en hiver"], c: "Non, certains sont éteints"},
            {q: "Qu'est-ce que la météo ?", o: ["Le temps qu'il fait aujourd'hui", "Le temps moyen sur des années", "La température", "Les saisons"], c: "Le temps qu'il fait aujourd'hui"}
        ]
    },

    // ===== DOMAINE 2: LE MONDE DU VIVANT =====
    vivant: {
        name: 'Le Monde du Vivant',
        description: 'Plantes, animaux et écosystèmes',
        imageUrl: 'images/sciences/illustration_plantes.jpg',
        lessons: {
            plantes: {
                title: '🌳 Les Plantes',
                content: `
                    <h3>Qu'est-ce qu'une plante ?</h3>
                    <p>Une plante est un <strong>être vivant</strong> qui fabrique sa propre nourriture grâce à la lumière du Soleil. C'est ce qu'on appelle la <strong>photosynthèse</strong> !</p>

                    <h3>Les parties d'une plante</h3>
                    <ul>
                        <li><strong>Racines</strong> : puisent l'eau et les sels minéraux dans le sol</li>
                        <li><strong>Tige</strong> : transporte l'eau et les nutriments</li>
                        <li><strong>Feuilles</strong> : captent la lumière du Soleil pour la photosynthèse</li>
                        <li><strong>Fleurs</strong> : permettent la reproduction</li>
                        <li><strong>Fruits</strong> : protègent les graines</li>
                    </ul>

                    <h3>La photosynthèse</h3>
                    <p>Les plantes utilisent :</p>
                    <ul>
                        <li>L'<strong>eau</strong> du sol</li>
                        <li>Le <strong>CO2</strong> de l'air</li>
                        <li>La <strong>lumière</strong> du Soleil</li>
                    </ul>
                    <p>Pour fabriquer leur <strong>nourriture</strong> (sucres) et rejeter de l'<strong>oxygène</strong> dans l'air !</p>

                    <h3>Pourquoi les plantes sont-elles importantes ?</h3>
                    <ul>
                        <li>Elles produisent l'<strong>oxygène</strong> que nous respirons</li>
                        <li>Elles sont à la base de la <strong>chaîne alimentaire</strong></li>
                        <li>Elles stabilisent les <strong>sols</strong></li>
                    </ul>

                    <h3>À retenir</h3>
                    <p>📌 Les plantes fabriquent leur nourriture grâce au <strong>Soleil</strong></p>
                    <p>📌 Sans plantes, pas d'<strong>oxygène</strong> pour respirer !</p>
                    <p>📌 Les plantes sont des <strong>êtres vivants</strong> : elles naissent, grandissent, se reproduisent et meurent</p>
                `
            },
            chaines_alimentaires: {
                title: '🦋 Chaînes Alimentaires',
                content: `
                    <h3>Qu'est-ce qu'une chaîne alimentaire ?</h3>
                    <p>Une chaîne alimentaire montre <strong>qui mange qui</strong> dans la nature. Elle commence toujours par les <strong>plantes</strong> et se termine par les <strong>prédateurs</strong>.</p>

                    <h3>Les maillons de la chaîne</h3>
                    <ol>
                        <li><strong>Producteurs</strong> : les plantes (fabriquent leur nourriture)</li>
                        <li><strong>Herbivores</strong> : mangent les plantes (ex: lapin, vache)</li>
                        <li><strong>Carnivores</strong> : mangent les herbivores (ex: renard, loup)</li>
                        <li><strong>Décomposeurs</strong> : recyclent les déchets (vers de terre, champignons)</li>
                    </ol>

                    <h3>Exemple de chaîne alimentaire</h3>
                    <p><strong>Herbe → Sauterelle → Grenouille → Serpent → Faucon</strong></p>

                    <h3>Les réseaux alimentaires</h3>
                    <p>Dans la nature, il n'y a pas une seule chaîne mais un <strong>réseau complexe</strong> : un animal peut manger plusieurs types de proies et être mangé par plusieurs prédateurs.</p>

                    <h3>L'équilibre de la nature</h3>
                    <p>Si un maillon disparaît :</p>
                    <ul>
                        <li>Ses <strong>prédateurs</strong> manquent de nourriture</li>
                        <li>Ses <strong>proies</strong> deviennent trop nombreuses</li>
                        <li>L'<strong>écosystème</strong> est déséquilibré</li>
                    </ul>

                    <h3>À retenir</h3>
                    <p>📌 Tout commence par les <strong>plantes</strong> qui utilisent le Soleil</p>
                    <p>📌 Chaque être vivant a un <strong>rôle important</strong> dans l'écosystème</p>
                    <p>📌 Il faut <strong>protéger</strong> tous les maillons de la chaîne !</p>
                `
            },
            corps_humain: {
                title: '🫀 Corps Humain',
                content: `
                    <h3>Les systèmes du corps humain</h3>
                    <p>Le corps humain est une <strong>machine incroyable</strong> composée de plusieurs systèmes qui travaillent ensemble :</p>

                    <h3>Le système digestif</h3>
                    <p>Il transforme les <strong>aliments</strong> en énergie :</p>
                    <ul>
                        <li><strong>Bouche</strong> : mastique et broie</li>
                        <li><strong>Estomac</strong> : digère avec des sucs</li>
                        <li><strong>Intestins</strong> : absorbent les nutriments</li>
                    </ul>

                    <h3>Le système respiratoire</h3>
                    <p>Il apporte l'<strong>oxygène</strong> nécessaire à la vie :</p>
                    <ul>
                        <li><strong>Nez/Bouche</strong> : entrée de l'air</li>
                        <li><strong>Poumons</strong> : échangent O2 et CO2</li>
                        <li>Le cœur pompe le sang oxygéné dans tout le corps</li>
                    </ul>

                    <h3>Le système circulatoire</h3>
                    <ul>
                        <li><strong>Cœur</strong> : pompe le sang (70 battements/minute au repos)</li>
                        <li><strong>Vaisseaux sanguins</strong> : artères, veines, capillaires</li>
                        <li><strong>Sang</strong> : transporte oxygène et nutriments</li>
                    </ul>

                    <h3>Le système nerveux</h3>
                    <ul>
                        <li><strong>Cerveau</strong> : centre de commande</li>
                        <li><strong>Nerfs</strong> : transmettent les messages</li>
                        <li>Contrôle tous les mouvements et les sens</li>
                    </ul>

                    <h3>À retenir</h3>
                    <p>📌 Le corps humain contient environ <strong>206 os</strong> et <strong>600 muscles</strong></p>
                    <p>📌 Le cœur bat environ <strong>100 000 fois par jour</strong> !</p>
                    <p>📌 Tous les systèmes travaillent <strong>ensemble</strong> pour nous maintenir en vie</p>
                `
            },
            squelette: {
                title: '🦴 Squelette & Muscles',
                content: `
                    <h3>Le squelette - notre charpente</h3>
                    <p>Le squelette est formé de <strong>206 os</strong> qui :</p>
                    <ul>
                        <li><strong>Soutiennent</strong> notre corps</li>
                        <li><strong>Protègent</strong> nos organes vitaux</li>
                        <li>Permettent les <strong>mouvements</strong></li>
                        <li>Fabriquent les <strong>cellules sanguines</strong> (moelle osseuse)</li>
                    </ul>

                    <h3>Les principaux os</h3>
                    <ul>
                        <li><strong>Crâne</strong> : protège le cerveau</li>
                        <li><strong>Colonne vertébrale</strong> : 33 vertèbres, protège la moelle épinière</li>
                        <li><strong>Cage thoracique</strong> : côtes qui protègent cœur et poumons</li>
                        <li><strong>Fémur</strong> : l'os le plus long du corps (cuisse)</li>
                    </ul>

                    <h3>Les articulations</h3>
                    <p>Les articulations sont les <strong>points de jonction</strong> entre les os :</p>
                    <ul>
                        <li><strong>Coude</strong>, <strong>genou</strong> : articulations en charnière</li>
                        <li><strong>Épaule</strong>, <strong>hanche</strong> : articulations à rotule (mouvement circulaire)</li>
                        <li>Le <strong>cartilage</strong> protège les os du frottement</li>
                    </ul>

                    <h3>Les muscles</h3>
                    <p>Le corps humain contient environ <strong>600 muscles</strong> :</p>
                    <ul>
                        <li><strong>Muscles volontaires</strong> : on les contrôle (bras, jambes)</li>
                        <li><strong>Muscles involontaires</strong> : travaillent tout seuls (cœur, intestins)</li>
                        <li>Les muscles sont attachés aux os par des <strong>tendons</strong></li>
                    </ul>

                    <h3>Comment bouger ?</h3>
                    <p>Pour bouger, il faut :</p>
                    <ol>
                        <li>Le <strong>cerveau</strong> envoie un ordre</li>
                        <li>Les <strong>nerfs</strong> transmettent le message</li>
                        <li>Les <strong>muscles</strong> se contractent</li>
                        <li>Les <strong>os</strong> bougent grâce aux articulations</li>
                    </ol>

                    <h3>À retenir</h3>
                    <p>📌 Les os sont <strong>vivants</strong> : ils grandissent et se réparent !</p>
                    <p>📌 Les muscles travaillent toujours par <strong>paires</strong> (biceps/triceps)</p>
                    <p>📌 Le <strong>calcium</strong> dans les aliments rend les os plus solides</p>
                `
            }
        },
        quiz: [
            {q: "Quel est le rôle des racines d'une plante ?", o: ["Puiser l'eau du sol", "Faire la photosynthèse", "Produire des fleurs", "Capter la lumière"], c: "Puiser l'eau du sol"},
            {q: "Comment appelle-t-on le processus par lequel les plantes fabriquent leur nourriture ?", o: ["Photosynthèse", "Respiration", "Digestion", "Transpiration"], c: "Photosynthèse"},
            {q: "De quoi les plantes ont-elles besoin pour faire la photosynthèse ?", o: ["Eau, CO2 et lumière", "Seulement de l'eau", "Seulement du soleil", "Terre uniquement"], c: "Eau, CO2 et lumière"},
            {q: "Que produisent les plantes lors de la photosynthèse ?", o: ["Oxygène", "CO2", "Azote", "Vapeur d'eau"], c: "Oxygène"},
            {q: "Qu'est-ce qu'un herbivore ?", o: ["Un animal qui mange des plantes", "Un animal qui mange de la viande", "Un animal qui mange tout", "Un animal qui ne mange rien"], c: "Un animal qui mange des plantes"},
            {q: "Quel est le premier maillon d'une chaîne alimentaire ?", o: ["Les plantes", "Les herbivores", "Les carnivores", "Les décomposeurs"], c: "Les plantes"},
            {q: "Que se passe-t-il si un maillon disparaît d'une chaîne alimentaire ?", o: ["L'équilibre est perturbé", "Rien ne change", "Tout s'arrange", "C'est mieux"], c: "L'équilibre est perturbé"},
            {q: "Qu'est-ce qu'un réseau alimentaire ?", o: ["Plusieurs chaînes liées", "Une seule chaîne", "Des plantes uniquement", "Des carnivores uniquement"], c: "Plusieurs chaînes liées"},
            {q: "Combien d'os compte le corps humain adulte ?", o: ["206 os", "150 os", "300 os", "100 os"], c: "206 os"},
            {q: "Quel organe pompe le sang dans le corps ?", o: ["Le cœur", "Les poumons", "L'estomac", "Le cerveau"], c: "Le cœur"},
            {q: "À quoi sert le système respiratoire ?", o: ["Apporter de l'oxygène", "Digérer les aliments", "Pomper le sang", "Contrôler les muscles"], c: "Apporter de l'oxygène"},
            {q: "Quel organe contrôle tous les autres ?", o: ["Le cerveau", "Le cœur", "Les poumons", "L'estomac"], c: "Le cerveau"},
            {q: "Combien de battements le cœur fait-il par jour environ ?", o: ["100 000 battements", "10 000 battements", "1 000 battements", "500 battements"], c: "100 000 battements"},
            {q: "Quel est le rôle du squelette ?", o: ["Soutenir et protéger", "Digérer", "Respirer", "Penser"], c: "Soutenir et protéger"},
            {q: "Combien de muscles compte le corps humain environ ?", o: ["600 muscles", "200 muscles", "1000 muscles", "100 muscles"], c: "600 muscles"},
            {q: "Qu'est-ce qu'une articulation ?", o: ["Jonction entre deux os", "Un muscle", "Un organe", "Un nerf"], c: "Jonction entre deux os"},
            {q: "Quel est l'os le plus long du corps ?", o: ["Le fémur", "Le tibia", "L'humérus", "Le radius"], c: "Le fémur"},
            {q: "À quoi servent les tendons ?", o: ["Attacher muscles aux os", "Protéger les os", "Faire circuler le sang", "Contrôler les nerfs"], c: "Attacher muscles aux os"},
            {q: "Quel nutriment rend les os plus solides ?", o: ["Le calcium", "Le fer", "Le sucre", "La vitamine C"], c: "Le calcium"},
            {q: "Combien de vertèbres compte la colonne vertébrale ?", o: ["33 vertèbres", "20 vertèbres", "50 vertèbres", "10 vertèbres"], c: "33 vertèbres"}
        ]
    },

    // ===== DOMAINE 3: MATIÈRE & ÉNERGIE =====
    matiere: {
        name: 'Matière & Énergie',
        description: 'États de la matière et forces',
        imageUrl: 'images/sciences/illustration_etats_matiere.jpg',
        lessons: {
            etats_matiere: {
                title: '💧 États de la Matière',
                content: `
                    <h3>Qu'est-ce que la matière ?</h3>
                    <p>La matière, c'est <strong>tout ce qui nous entoure</strong> : l'air, l'eau, les objets, notre corps... Tout est fait de matière !</p>

                    <h3>Les 3 états de la matière</h3>
                    <p>La matière existe sous <strong>3 formes principales</strong> :</p>

                    <h4>1. L'état SOLIDE</h4>
                    <ul>
                        <li>Forme <strong>fixe</strong> (un cube reste un cube)</li>
                        <li>Volume <strong>fixe</strong></li>
                        <li>Exemples : glace, bois, pierre, fer</li>
                    </ul>

                    <h4>2. L'état LIQUIDE</h4>
                    <ul>
                        <li>Forme <strong>variable</strong> (prend la forme du récipient)</li>
                        <li>Volume <strong>fixe</strong></li>
                        <li>Exemples : eau, lait, huile, jus</li>
                    </ul>

                    <h4>3. L'état GAZEUX</h4>
                    <ul>
                        <li>Forme <strong>variable</strong></li>
                        <li>Volume <strong>variable</strong> (occupe tout l'espace disponible)</li>
                        <li>Exemples : air, vapeur d'eau, fumée</li>
                    </ul>

                    <h3>Les changements d'état</h3>
                    <p>La matière peut passer d'un état à un autre :</p>
                    <ul>
                        <li><strong>Fusion</strong> : solide → liquide (glace → eau)</li>
                        <li><strong>Solidification</strong> : liquide → solide (eau → glace)</li>
                        <li><strong>Évaporation</strong> : liquide → gaz (eau → vapeur)</li>
                        <li><strong>Condensation</strong> : gaz → liquide (vapeur → eau)</li>
                    </ul>

                    <h3>À retenir</h3>
                    <p>📌 C'est la <strong>température</strong> qui fait changer d'état</p>
                    <p>📌 Quand l'eau change d'état, elle reste de l'<strong>eau</strong> !</p>
                    <p>📌 L'eau bout à <strong>100°C</strong> et gèle à <strong>0°C</strong></p>
                `
            },
            electricite: {
                title: '🔋 Électricité',
                content: `
                    <h3>Qu'est-ce que l'électricité ?</h3>
                    <p>L'électricité est une forme d'<strong>énergie</strong> qui fait fonctionner nos appareils : lumières, ordinateurs, téléphones, réfrigérateurs...</p>

                    <h3>Le circuit électrique</h3>
                    <p>Pour que l'électricité circule, il faut un <strong>circuit fermé</strong> composé de :</p>
                    <ul>
                        <li><strong>Générateur</strong> : produit l'électricité (pile, batterie)</li>
                        <li><strong>Conducteurs</strong> : transportent l'électricité (fils électriques)</li>
                        <li><strong>Récepteur</strong> : utilise l'électricité (lampe, moteur)</li>
                        <li><strong>Interrupteur</strong> : ouvre ou ferme le circuit</li>
                    </ul>

                    <h3>Conducteurs et isolants</h3>
                    <ul>
                        <li><strong>Conducteurs</strong> : laissent passer l'électricité (métaux : cuivre, fer, or)</li>
                        <li><strong>Isolants</strong> : ne laissent pas passer l'électricité (plastique, bois, caoutchouc)</li>
                    </ul>

                    <h3>Les dangers de l'électricité</h3>
                    <p>⚡ L'électricité peut être <strong>dangereuse</strong> :</p>
                    <ul>
                        <li>Ne jamais toucher une prise avec les doigts</li>
                        <li>Ne pas manipuler d'appareils avec les mains mouillées</li>
                        <li>Ne jamais ouvrir un appareil branché</li>
                    </ul>

                    <h3>Production d'électricité</h3>
                    <p>On produit l'électricité avec :</p>
                    <ul>
                        <li><strong>Centrales</strong> (hydrauliques, nucléaires, thermiques)</li>
                        <li><strong>Énergies renouvelables</strong> (solaire, éolienne)</li>
                    </ul>

                    <h3>À retenir</h3>
                    <p>📌 Pas de circuit fermé = pas d'électricité</p>
                    <p>📌 L'électricité circule très <strong>vite</strong> : à la vitesse de la lumière !</p>
                    <p>📌 Il faut <strong>économiser</strong> l'électricité pour protéger la planète</p>
                `
            },
            magnetisme: {
                title: '🧲 Magnétisme',
                content: `
                    <h3>Qu'est-ce que le magnétisme ?</h3>
                    <p>Le magnétisme est une <strong>force invisible</strong> exercée par les aimants. Cette force peut attirer ou repousser certains objets.</p>

                    <h3>Les aimants</h3>
                    <p>Un aimant possède :</p>
                    <ul>
                        <li>Un <strong>pôle Nord</strong></li>
                        <li>Un <strong>pôle Sud</strong></li>
                    </ul>

                    <h3>Les lois de l'attraction magnétique</h3>
                    <ul>
                        <li>Deux pôles <strong>différents</strong> s'<strong>attirent</strong> (Nord-Sud)</li>
                        <li>Deux pôles <strong>identiques</strong> se <strong>repoussent</strong> (Nord-Nord ou Sud-Sud)</li>
                    </ul>

                    <h3>Matériaux magnétiques</h3>
                    <ul>
                        <li><strong>Attirés</strong> par les aimants : fer, nickel, cobalt (matériaux ferromagnétiques)</li>
                        <li><strong>Non attirés</strong> : bois, plastique, verre, aluminium</li>
                    </ul>

                    <h3>Le champ magnétique</h3>
                    <p>Autour d'un aimant, il y a une zone d'influence appelée <strong>champ magnétique</strong>. Plus on est proche de l'aimant, plus la force est grande.</p>

                    <h3>Utilisations du magnétisme</h3>
                    <ul>
                        <li><strong>Boussole</strong> : aiguille magnétique qui pointe vers le Nord</li>
                        <li><strong>Moteurs électriques</strong> : utilisent des aimants</li>
                        <li><strong>Disques durs</strong> : stockent les données grâce au magnétisme</li>
                        <li><strong>IRM médicale</strong> : imagerie du corps humain</li>
                    </ul>

                    <h3>La Terre est un aimant géant !</h3>
                    <p>Notre planète possède un <strong>champ magnétique</strong> avec un pôle Nord magnétique et un pôle Sud magnétique. C'est ce qui fait fonctionner les boussoles !</p>

                    <h3>À retenir</h3>
                    <p>📌 Les pôles opposés s'<strong>attirent</strong>, les pôles identiques se <strong>repoussent</strong></p>
                    <p>📌 Le magnétisme traverse certains matériaux (papier, verre)</p>
                    <p>📌 On peut <strong>créer</strong> un aimant en frottant du fer avec un aimant !</p>
                `
            },
            lumiere: {
                title: '💡 Lumière & Ombres',
                content: `
                    <h3>Qu'est-ce que la lumière ?</h3>
                    <p>La lumière est une forme d'<strong>énergie</strong> qui nous permet de voir. Elle se propage en ligne droite à très grande vitesse : <strong>300 000 km/s</strong> !</p>

                    <h3>Les sources de lumière</h3>
                    <p>Il existe deux types de sources :</p>

                    <h4>Sources primaires (produisent de la lumière)</h4>
                    <ul>
                        <li>Le <strong>Soleil</strong> (source naturelle)</li>
                        <li>Les <strong>étoiles</strong></li>
                        <li>Le <strong>feu</strong></li>
                        <li>Les <strong>lampes</strong> (source artificielle)</li>
                    </ul>

                    <h4>Sources secondaires (reflètent la lumière)</h4>
                    <ul>
                        <li>La <strong>Lune</strong> : reflète la lumière du Soleil</li>
                        <li>Tous les <strong>objets</strong> qu'on voit : reflètent la lumière</li>
                    </ul>

                    <h3>Propagation de la lumière</h3>
                    <p>La lumière se propage :</p>
                    <ul>
                        <li>En <strong>ligne droite</strong></li>
                        <li>Dans toutes les <strong>directions</strong></li>
                        <li>Même dans le <strong>vide</strong> (espace)</li>
                    </ul>

                    <h3>Les ombres</h3>
                    <p>Une ombre se forme quand un objet <strong>opaque</strong> bloque la lumière. La lumière ne peut pas contourner l'obstacle, elle crée donc une zone sombre : l'<strong>ombre</strong>.</p>

                    <h3>Matériaux et lumière</h3>
                    <ul>
                        <li><strong>Transparents</strong> : laissent passer toute la lumière (verre, air)</li>
                        <li><strong>Translucides</strong> : laissent passer une partie de la lumière (papier calque)</li>
                        <li><strong>Opaques</strong> : ne laissent pas passer la lumière (bois, métal)</li>
                    </ul>

                    <h3>Réflexion et réfraction</h3>
                    <ul>
                        <li><strong>Réflexion</strong> : la lumière rebondit sur une surface (miroir)</li>
                        <li><strong>Réfraction</strong> : la lumière change de direction en passant d'un milieu à un autre (air → eau)</li>
                    </ul>

                    <h3>À retenir</h3>
                    <p>📌 La lumière voyage <strong>très vite</strong> : elle met 8 minutes depuis le Soleil !</p>
                    <p>📌 Sans lumière, nous ne pourrions <strong>rien voir</strong></p>
                    <p>📌 L'arc-en-ciel se forme par <strong>réfraction</strong> de la lumière dans les gouttes d'eau</p>
                `
            }
        },
        quiz: [
            {q: "Combien d'états de la matière existe-t-il principalement ?", o: ["3 états", "2 états", "4 états", "5 états"], c: "3 états"},
            {q: "Quel état de la matière a une forme et un volume fixes ?", o: ["Solide", "Liquide", "Gazeux", "Plasma"], c: "Solide"},
            {q: "Comment s'appelle le passage de l'état liquide à l'état solide ?", o: ["Solidification", "Fusion", "Évaporation", "Condensation"], c: "Solidification"},
            {q: "À quelle température l'eau bout-elle ?", o: ["100°C", "0°C", "50°C", "200°C"], c: "100°C"},
            {q: "À quelle température l'eau gèle-t-elle ?", o: ["0°C", "100°C", "-10°C", "50°C"], c: "0°C"},
            {q: "Qu'est-ce qui fait fonctionner une lampe ?", o: ["L'électricité", "Le magnétisme", "La gravité", "La lumière"], c: "L'électricité"},
            {q: "Qu'est-ce qu'un conducteur électrique ?", o: ["Un matériau qui laisse passer l'électricité", "Un matériau qui bloque l'électricité", "Une pile", "Un interrupteur"], c: "Un matériau qui laisse passer l'électricité"},
            {q: "Quel matériau est un bon isolant électrique ?", o: ["Le plastique", "Le cuivre", "Le fer", "L'or"], c: "Le plastique"},
            {q: "Que faut-il pour qu'un circuit électrique fonctionne ?", o: ["Un circuit fermé", "Un circuit ouvert", "Seulement une pile", "Seulement des fils"], c: "Un circuit fermé"},
            {q: "Combien de pôles possède un aimant ?", o: ["2 pôles", "1 pôle", "3 pôles", "4 pôles"], c: "2 pôles"},
            {q: "Que se passe-t-il quand on approche deux pôles Nord d'aimants ?", o: ["Ils se repoussent", "Ils s'attirent", "Rien", "Ils fondent"], c: "Ils se repoussent"},
            {q: "Quel matériau est attiré par un aimant ?", o: ["Le fer", "Le bois", "Le plastique", "Le verre"], c: "Le fer"},
            {q: "Qu'est-ce qu'une boussole utilise pour fonctionner ?", o: ["Le magnétisme terrestre", "L'électricité", "La gravité", "Le vent"], c: "Le magnétisme terrestre"},
            {q: "À quelle vitesse se propage la lumière ?", o: ["300 000 km/s", "100 km/s", "1000 km/s", "10 000 km/s"], c: "300 000 km/s"},
            {q: "Le Soleil est-il une source primaire de lumière ?", o: ["Oui", "Non", "Parfois", "Seulement la nuit"], c: "Oui"},
            {q: "Qu'est-ce qu'une ombre ?", o: ["Zone sombre créée par un obstacle", "Reflet dans un miroir", "Source de lumière", "Couleur"], c: "Zone sombre créée par un obstacle"},
            {q: "Quel matériau est transparent ?", o: ["Le verre", "Le bois", "Le métal", "Le carton"], c: "Le verre"},
            {q: "Comment s'appelle le phénomène quand la lumière rebondit sur un miroir ?", o: ["Réflexion", "Réfraction", "Diffraction", "Absorption"], c: "Réflexion"},
            {q: "La Lune produit-elle sa propre lumière ?", o: ["Non, elle reflète celle du Soleil", "Oui", "Parfois", "Seulement la nuit"], c: "Non, elle reflète celle du Soleil"},
            {q: "Qu'est-ce qui crée un arc-en-ciel ?", o: ["Réfraction de la lumière dans l'eau", "Magnétisme", "Électricité", "Gravité"], c: "Réfraction de la lumière dans l'eau"}
        ]
    },

    // ===== DOMAINE 4: TECHNOLOGIE =====
    technologie: {
        name: 'Technologie',
        description: 'Machines, leviers et circuits',
        imageUrl: 'images/sciences/illustration_technologie.jpg',
        lessons: {
            leviers: {
                title: '⚙️ Leviers & Mécanismes',
                content: `
                    <h3>Qu'est-ce qu'un levier ?</h3>
                    <p>Un levier est une <strong>barre rigide</strong> qui peut pivoter autour d'un point fixe appelé <strong>pivot</strong> (ou point d'appui). Les leviers permettent de soulever des objets lourds plus facilement !</p>

                    <h3>Les 3 éléments d'un levier</h3>
                    <ul>
                        <li><strong>Le pivot</strong> : point fixe autour duquel tourne le levier</li>
                        <li><strong>La charge</strong> : l'objet à déplacer ou soulever</li>
                        <li><strong>L'effort</strong> : la force qu'on applique</li>
                    </ul>

                    <h3>Les 3 types de leviers</h3>
                    <ul>
                        <li><strong>Levier du 1er genre</strong> : pivot entre charge et effort (ex : balançoire, ciseaux)</li>
                        <li><strong>Levier du 2e genre</strong> : charge entre pivot et effort (ex : brouette, casse-noix)</li>
                        <li><strong>Levier du 3e genre</strong> : effort entre pivot et charge (ex : pince à épiler, rame)</li>
                    </ul>

                    <h3>Exemples de leviers dans la vie quotidienne</h3>
                    <ul>
                        <li>🪛 <strong>Pied-de-biche</strong> : arrache les clous facilement</li>
                        <li>✂️ <strong>Ciseaux</strong> : deux leviers réunis au pivot</li>
                        <li>🚿 <strong>Robinet</strong> : levier pour contrôler l'eau</li>
                        <li>⚖️ <strong>Balance</strong> : levier pour comparer des masses</li>
                    </ul>

                    <h3>La transmission du mouvement</h3>
                    <p>Les machines transmettent le mouvement de différentes façons :</p>
                    <ul>
                        <li><strong>Engrenages</strong> : roues dentées qui s'emboîtent et transmettent la rotation</li>
                        <li><strong>Courroies</strong> : sangles qui relient deux roues (comme sur un vélo)</li>
                        <li><strong>Poulies</strong> : roues avec une gorge pour les cordes, facilitent le levage</li>
                    </ul>

                    <h3>À retenir</h3>
                    <p>📌 Un levier multiplie la force : on pousse peu pour soulever beaucoup !</p>
                    <p>📌 Plus le bras du levier est long, plus l'effort est réduit</p>
                    <p>📌 Les engrenages peuvent accélérer ou ralentir un mouvement</p>
                `
            },
            circuits_electriques: {
                title: '🔌 Circuits Électriques',
                content: `
                    <h3>Rappel : qu'est-ce qu'un circuit ?</h3>
                    <p>Un circuit électrique est un <strong>chemin fermé</strong> que suit l'électricité. Si le chemin est coupé, l'électricité ne circule plus !</p>

                    <h3>Schématiser un circuit</h3>
                    <p>Les techniciens utilisent des <strong>symboles normalisés</strong> pour représenter les circuits :</p>
                    <ul>
                        <li><strong>Pile</strong> : deux traits (un long, un court)</li>
                        <li><strong>Lampe</strong> : un cercle avec une croix</li>
                        <li><strong>Interrupteur ouvert</strong> : un trait en biais</li>
                        <li><strong>Interrupteur fermé</strong> : un trait horizontal</li>
                        <li><strong>Moteur</strong> : un cercle avec la lettre M</li>
                    </ul>

                    <h3>Circuit en série vs circuit en parallèle</h3>
                    <ul>
                        <li><strong>En série</strong> : les composants sont branchés les uns à la suite des autres. Si l'un s'éteint, tout s'éteint !</li>
                        <li><strong>En parallèle</strong> : chaque composant a son propre chemin. Si l'un s'éteint, les autres continuent.</li>
                    </ul>

                    <h3>Construire un circuit simple</h3>
                    <ol>
                        <li>Une <strong>pile</strong> (source d'énergie)</li>
                        <li>Des <strong>fils conducteurs</strong> (cuivre)</li>
                        <li>Une <strong>lampe</strong> (récepteur)</li>
                        <li>Un <strong>interrupteur</strong> (pour ouvrir/fermer)</li>
                    </ol>

                    <h3>Les détecteurs</h3>
                    <p>On peut utiliser un circuit pour <strong>tester des matériaux</strong> : si la lampe s'allume quand on place l'objet dans le circuit, c'est un <strong>conducteur</strong>. Sinon, c'est un <strong>isolant</strong>.</p>

                    <h3>À retenir</h3>
                    <p>📌 Circuit ouvert = éteint / Circuit fermé = allumé</p>
                    <p>📌 En série : une panne = tout s'arrête</p>
                    <p>📌 En parallèle : chaque appareil fonctionne indépendamment</p>
                `
            },
            objets_techniques: {
                title: '🛠️ Objets Techniques',
                content: `
                    <h3>Qu'est-ce qu'un objet technique ?</h3>
                    <p>Un objet technique est un objet <strong>fabriqué par l'homme</strong> pour répondre à un besoin. Exemples : une chaise, une voiture, un téléphone, un pont...</p>

                    <h3>Analyser un objet technique</h3>
                    <p>Pour comprendre un objet, on se pose 3 questions :</p>
                    <ul>
                        <li>🎯 <strong>À quoi ça sert ?</strong> (fonction d'usage)</li>
                        <li>🔧 <strong>Comment ça marche ?</strong> (principe de fonctionnement)</li>
                        <li>🧱 <strong>De quoi c'est fait ?</strong> (matériaux)</li>
                    </ul>

                    <h3>Les matériaux et leurs propriétés</h3>
                    <ul>
                        <li><strong>Bois</strong> : léger, naturel, isolant, facile à travailler</li>
                        <li><strong>Métal</strong> : solide, conducteur, résiste à la chaleur</li>
                        <li><strong>Plastique</strong> : léger, isolant, imperméable, peu coûteux</li>
                        <li><strong>Verre</strong> : transparent, fragile, imperméable</li>
                        <li><strong>Tissu</strong> : souple, isolant thermique</li>
                    </ul>

                    <h3>De la conception à la fabrication</h3>
                    <ol>
                        <li><strong>Identifier le besoin</strong> : à quoi servira l'objet ?</li>
                        <li><strong>Concevoir</strong> : dessiner des plans, choisir les matériaux</li>
                        <li><strong>Fabriquer</strong> : assembler les pièces</li>
                        <li><strong>Tester</strong> : vérifier que ça fonctionne</li>
                        <li><strong>Améliorer</strong> : corriger les défauts</li>
                    </ol>

                    <h3>À retenir</h3>
                    <p>📌 Tout objet technique répond à un <strong>besoin humain</strong></p>
                    <p>📌 Le choix des matériaux dépend des <strong>propriétés nécessaires</strong></p>
                    <p>📌 On peut toujours <strong>améliorer</strong> un objet existant !</p>
                `
            }
        },
        quiz: [
            {q: "Qu'est-ce qu'un levier ?", o: ["Une barre rigide pivotant autour d'un point fixe", "Un type de roue", "Un outil pour couper", "Un moteur électrique"], c: "Une barre rigide pivotant autour d'un point fixe"},
            {q: "Comment appelle-t-on le point fixe autour duquel tourne un levier ?", o: ["Le pivot", "La charge", "L'effort", "Le bras"], c: "Le pivot"},
            {q: "Lequel de ces objets est un levier ?", o: ["Les ciseaux", "La pile", "Le thermomètre", "Le miroir"], c: "Les ciseaux"},
            {q: "Comment s'appelle le chemin fermé que suit l'électricité ?", o: ["Un circuit", "Un câble", "Un fil", "Un réseau"], c: "Un circuit"},
            {q: "Que se passe-t-il si on ouvre un interrupteur dans un circuit en série ?", o: ["Tout s'éteint", "Rien ne change", "Ça brûle", "Ça accélère"], c: "Tout s'éteint"},
            {q: "Quelle est la différence entre un circuit en série et en parallèle ?", o: ["En parallèle, chaque composant a son propre chemin", "Ils sont identiques", "Le circuit en série est plus rapide", "Le circuit en parallèle consomme plus"], c: "En parallèle, chaque composant a son propre chemin"},
            {q: "Quel matériau utilise-t-on pour les fils électriques ?", o: ["Le cuivre", "Le plastique", "Le bois", "Le verre"], c: "Le cuivre"},
            {q: "Comment appelle-t-on les roues dentées qui transmettent un mouvement ?", o: ["Des engrenages", "Des poulies", "Des leviers", "Des courroies"], c: "Des engrenages"},
            {q: "Pour analyser un objet technique, quelle question NE fait PAS partie des 3 essentielles ?", o: ["Combien ça coûte ?", "À quoi ça sert ?", "Comment ça marche ?", "De quoi c'est fait ?"], c: "Combien ça coûte ?"},
            {q: "Quel matériau est à la fois léger ET isolant électrique ?", o: ["Le plastique", "Le cuivre", "Le fer", "L'aluminium"], c: "Le plastique"},
            {q: "À quoi sert une poulie ?", o: ["Faciliter le levage d'objets lourds", "Produire de l'électricité", "Mesurer la température", "Couper des matériaux"], c: "Faciliter le levage d'objets lourds"},
            {q: "Quelle est la première étape pour concevoir un objet technique ?", o: ["Identifier le besoin", "Choisir les matériaux", "Fabriquer les pièces", "Tester le résultat"], c: "Identifier le besoin"},
            // Questions avancées ajoutées le 28 mars 2026 — tag badge-ingénieur
            {q: "Une casserole a un manche en plastique et un fond en métal. Pourquoi ce choix de matériaux ?", o: ["Le métal conduit la chaleur, le plastique l'isole pour ne pas se brûler", "Le plastique conduit la chaleur, le métal isole", "Les deux conduisent la chaleur de la même façon", "Ce choix est uniquement esthétique"], c: "Le métal conduit la chaleur, le plastique l'isole pour ne pas se brûler", tags: ["badge-ingenieur"]},
            {q: "Sur un vélo, comment l'énergie musculaire du cycliste est-elle transmise à la roue arrière ?", o: ["Par une chaîne qui relie le pédalier à la roue", "Par un moteur électrique", "Par un câble direct", "Par friction directe des pieds"], c: "Par une chaîne qui relie le pédalier à la roue", tags: ["badge-ingenieur"]}
        ]
    },

    // ===== DOMAINE 5: DÉVELOPPEMENT DURABLE =====
    environnement: {
        name: 'Développement Durable',
        description: 'Écologie et protection de la planète',
        imageUrl: 'images/sciences/illustration_environnement.jpg',
        lessons: {
            ecosystemes: {
                title: '🌿 Les Écosystèmes',
                content: `
                    <h3>Qu'est-ce qu'un écosystème ?</h3>
                    <p>Un écosystème est l'ensemble formé par un <strong>milieu de vie</strong> (forêt, océan, prairie...) et tous les <strong>êtres vivants</strong> qui y habitent et interagissent entre eux.</p>

                    <h3>Les grands écosystèmes de la Terre</h3>
                    <ul>
                        <li>🌊 <strong>Océans et mers</strong> : 71% de la surface de la Terre</li>
                        <li>🌳 <strong>Forêts tropicales</strong> : « poumons de la planète »</li>
                        <li>🌾 <strong>Prairies et savanes</strong> : grandes plaines herbeuses</li>
                        <li>🏔️ <strong>Montagnes</strong> : milieux froids et rocheux</li>
                        <li>🌵 <strong>Déserts</strong> : peu d'eau, chaleur extrême</li>
                        <li>❄️ <strong>Zones polaires</strong> : glace et froid intense</li>
                    </ul>

                    <h3>Les relations entre êtres vivants</h3>
                    <ul>
                        <li><strong>Prédation</strong> : un animal en mange un autre (loup → cerf)</li>
                        <li><strong>Symbiose</strong> : deux êtres s'aident mutuellement (abeille ↔ fleur)</li>
                        <li><strong>Parasitisme</strong> : un être profite d'un autre en lui nuisant (tique → chien)</li>
                        <li><strong>Compétition</strong> : deux espèces se disputent les mêmes ressources</li>
                    </ul>

                    <h3>La biodiversité</h3>
                    <p>La <strong>biodiversité</strong>, c'est la diversité de toutes les formes de vie sur Terre. Plus un écosystème est riche en espèces, plus il est <strong>résistant</strong> aux perturbations.</p>

                    <h3>À retenir</h3>
                    <p>📌 Chaque espèce a un <strong>rôle précis</strong> dans son écosystème</p>
                    <p>📌 La disparition d'une espèce peut <strong>déstabiliser</strong> tout l'écosystème</p>
                    <p>📌 La Terre abrite environ <strong>8,7 millions d'espèces</strong> connues !</p>
                `
            },
            rechauffement: {
                title: '🌡️ Réchauffement Climatique',
                content: `
                    <h3>L'effet de serre</h3>
                    <p>La Terre est entourée d'une <strong>atmosphère</strong> composée de gaz. Certains de ces gaz (CO2, méthane...) retiennent la chaleur du Soleil comme une <strong>serre de jardin</strong>. C'est l'<strong>effet de serre</strong> : sans lui, la Terre serait à -18°C !</p>

                    <h3>Le problème actuel</h3>
                    <p>Depuis la révolution industrielle, l'être humain produit trop de <strong>gaz à effet de serre</strong> en :</p>
                    <ul>
                        <li>Brûlant du <strong>pétrole, charbon et gaz</strong> (voitures, chauffage, usines)</li>
                        <li>Déforestant massivement (moins d'arbres = moins de CO2 absorbé)</li>
                        <li>Pratiquant une agriculture intensive (méthane des élevages)</li>
                    </ul>

                    <h3>Les conséquences</h3>
                    <ul>
                        <li>🌡️ <strong>Températures en hausse</strong> : étés plus chauds, hivers plus doux</li>
                        <li>🧊 <strong>Fonte des glaces</strong> : les glaciers et banquises disparaissent</li>
                        <li>🌊 <strong>Montée des océans</strong> : des îles et côtes menacées</li>
                        <li>🌪️ <strong>Événements extrêmes</strong> : sécheresses, inondations, tempêtes plus fréquentes</li>
                        <li>🦋 <strong>Perte de biodiversité</strong> : des espèces disparaissent</li>
                    </ul>

                    <h3>À retenir</h3>
                    <p>📌 L'effet de serre naturel est <strong>utile</strong>, c'est l'excès qui pose problème</p>
                    <p>📌 La température moyenne a déjà augmenté de <strong>+1,1°C</strong> depuis 1850</p>
                    <p>📌 Chaque geste compte : <strong>tout le monde peut agir</strong> !</p>
                `
            },
            gestes_ecologiques: {
                title: '♻️ Gestes Écologiques',
                content: `
                    <h3>Pourquoi agir ?</h3>
                    <p>Notre planète a des <strong>ressources limitées</strong>. Si on continue à les gaspiller, il n'y en aura plus pour les générations futures. Le <strong>développement durable</strong>, c'est répondre à nos besoins d'aujourd'hui sans empêcher les générations futures de répondre aux leurs.</p>

                    <h3>Les 3R : Réduire, Réutiliser, Recycler</h3>
                    <ul>
                        <li>♻️ <strong>Réduire</strong> : consommer moins (emballages, énergie, eau)</li>
                        <li>🔄 <strong>Réutiliser</strong> : donner une seconde vie aux objets</li>
                        <li>🗑️ <strong>Recycler</strong> : transformer les déchets en nouvelles matières</li>
                    </ul>

                    <h3>Les gestes du quotidien</h3>
                    <ul>
                        <li>💡 Éteindre les lumières en quittant une pièce</li>
                        <li>🚿 Prendre des douches courtes (5 min max)</li>
                        <li>🚶 Marcher ou faire du vélo plutôt que prendre la voiture</li>
                        <li>🥗 Manger moins de viande (l'élevage produit beaucoup de CO2)</li>
                        <li>🛒 Acheter local et de saison</li>
                        <li>📱 Ne pas jeter les appareils électroniques n'importe où</li>
                    </ul>

                    <h3>Les énergies renouvelables</h3>
                    <p>Pour remplacer le pétrole et le charbon, on développe des énergies propres :</p>
                    <ul>
                        <li>☀️ <strong>Solaire</strong> : panneaux photovoltaïques</li>
                        <li>💨 <strong>Éolienne</strong> : éoliennes (moulins à vent géants)</li>
                        <li>💧 <strong>Hydraulique</strong> : barrages sur les rivières</li>
                        <li>🌊 <strong>Marémotrice</strong> : énergie des marées</li>
                    </ul>

                    <h3>À retenir</h3>
                    <p>📌 Les <strong>petits gestes quotidiens</strong> ont un grand impact collectif</p>
                    <p>📌 Les énergies renouvelables ne <strong>s'épuisent pas</strong></p>
                    <p>📌 Protéger la planète, c'est aussi <strong>protéger notre avenir</strong> !</p>
                `
            }
        },
        quiz: [
            {q: "Qu'est-ce qu'un écosystème ?", o: ["Un milieu de vie avec tous ses êtres vivants", "Une forêt uniquement", "Un animal sauvage", "Une plante exotique"], c: "Un milieu de vie avec tous ses êtres vivants"},
            {q: "Comment appelle-t-on la diversité de toutes les formes de vie sur Terre ?", o: ["La biodiversité", "L'écologie", "La géologie", "La météorologie"], c: "La biodiversité"},
            {q: "Quel pourcentage de la surface de la Terre représentent les océans ?", o: ["71%", "30%", "50%", "90%"], c: "71%"},
            {q: "Qu'est-ce que l'effet de serre naturel ?", o: ["Des gaz qui retiennent la chaleur du Soleil", "Une serre dans un jardin", "Un type de nuage", "La pollution des villes"], c: "Des gaz qui retiennent la chaleur du Soleil"},
            {q: "Quelle est la principale cause du réchauffement climatique actuel ?", o: ["Les gaz à effet de serre produits par l'homme", "Les volcans", "Le Soleil", "Les océans"], c: "Les gaz à effet de serre produits par l'homme"},
            {q: "Que signifie le 'R' de Réduire dans les 3R ?", o: ["Consommer moins", "Recycler les déchets", "Réparer les objets", "Refuser les emballages"], c: "Consommer moins"},
            {q: "Quelle énergie est produite par des panneaux photovoltaïques ?", o: ["L'énergie solaire", "L'énergie éolienne", "L'énergie hydraulique", "L'énergie nucléaire"], c: "L'énergie solaire"},
            {q: "Pourquoi la déforestation aggrave-t-elle le réchauffement climatique ?", o: ["Moins d'arbres = moins de CO2 absorbé", "Les arbres produisent de la chaleur", "Les forêts bloquent le vent", "Les arbres consomment de l'oxygène"], c: "Moins d'arbres = moins de CO2 absorbé"},
            {q: "Comment appelle-t-on la relation où deux êtres vivants s'aident mutuellement ?", o: ["La symbiose", "La prédation", "Le parasitisme", "La compétition"], c: "La symbiose"},
            {q: "Qu'est-ce que le développement durable ?", o: ["Répondre aux besoins d'aujourd'hui sans nuire aux générations futures", "Construire plus de bâtiments", "Utiliser plus d'énergie", "Produire plus de déchets"], c: "Répondre aux besoins d'aujourd'hui sans nuire aux générations futures"},
            {q: "Quelle énergie renouvelable utilise la force des rivières ?", o: ["L'énergie hydraulique", "L'énergie solaire", "L'énergie éolienne", "L'énergie géothermique"], c: "L'énergie hydraulique"},
            {q: "De combien la température moyenne de la Terre a-t-elle augmenté depuis 1850 ?", o: ["+1,1°C", "+5°C", "+0,1°C", "+10°C"], c: "+1,1°C"}
        ]
    }
};


// Export pour utilisation dans la page HTML
if (typeof window !== "undefined") {
    window.sciencesLessons = sciencesLessons;
    console.log("✅ Sciences lessons chargées - 5 domaines, 17 thèmes, 106 questions");
}
