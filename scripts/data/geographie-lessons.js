/**
 * ==========================================
 * DONNÉES LEÇONS GÉOGRAPHIE CM2
 * Le Monde des Curieux
 * ==========================================
 * Contenu pédagogique externalisé
 * 3 thèmes : France, Europe, Déplacements
 * + 7 leçons dédiées
 */

const geographieLeconData = {

    france: {
        title: "La France dans le monde",
        content: `
            <h3>🌍 La France, où est-elle ?</h3>
            <p>La France est un pays d'Europe occidentale. Sa superficie est d'environ <strong>643 801 km²</strong> — c'est le plus grand pays d'Europe de l'Ouest ! Elle est bordée par <strong>3 mers</strong> : l'Atlantique, la Méditerranée et la Manche.</p>

            <h3>🗺️ Les frontières</h3>
            <ul>
                <li><strong>Au nord</strong> : Belgique, Luxembourg</li>
                <li><strong>À l'est</strong> : Allemagne, Suisse, Italie</li>
                <li><strong>Au sud-ouest</strong> : Espagne (séparés par les Pyrénées)</li>
                <li><strong>À l'ouest et nord</strong> : Océan Atlantique et Manche</li>
                <li><strong>Au sud-est</strong> : Mer Méditerranée</li>
            </ul>

            <h3>⛰️ Le relief</h3>
            <ul>
                <li><strong>Les Alpes</strong> (est) : culminent au Mont Blanc — <strong>4 808 m</strong>, point le plus haut de France et d'Europe de l'Ouest</li>
                <li><strong>Les Pyrénées</strong> (sud) : frontière naturelle avec l'Espagne</li>
                <li><strong>Le Massif Central</strong> : massif volcanique au cœur de la France</li>
                <li><strong>Les Vosges</strong> et le <strong>Jura</strong> : à l'est</li>
            </ul>

            <h3>🏞️ Les grands fleuves</h3>
            <ul>
                <li><strong>La Loire</strong> (1 006 km) : le plus long, coule vers l'Atlantique</li>
                <li><strong>Le Rhône</strong> : traverse Lyon, se jette dans la Méditerranée</li>
                <li><strong>La Seine</strong> : traverse Paris</li>
                <li><strong>La Garonne</strong> : traverse Toulouse et Bordeaux</li>
            </ul>

            <div style="background:#0d2a3a;border-left:4px solid #2196F3;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#2196F3;">📌 À retenir :</strong> France = 643 801 km², plus grand pays d'Europe de l'Ouest. Mont Blanc = 4 808 m. Loire = plus long fleuve. 3 mers : Atlantique, Méditerranée, Manche.
            </div>
        `
    },

    europe: {
        title: "L'Europe : un continent, une Union",
        content: `
            <h3>🌍 Le continent européen</h3>
            <p>L'Europe est un <strong>petit continent</strong> mais très peuplé, situé à l'ouest de l'Asie. Elle compte environ <strong>50 pays</strong> pour 750 millions d'habitants.</p>

            <h3>🇪🇺 L'Union Européenne</h3>
            <p>L'Union Européenne (UE) regroupe <strong>27 pays</strong> qui coopèrent sur l'économie, la politique et les droits des citoyens. Elle est née du <strong>Traité de Rome en 1957</strong>.</p>
            <ul>
                <li>Monnaie commune : l'<strong>euro</strong> (20 pays depuis 2023)</li>
                <li>Libre circulation des personnes entre les pays membres</li>
                <li>Parlement européen à <strong>Strasbourg</strong></li>
                <li>Drapeau : <strong>12 étoiles sur fond bleu</strong></li>
                <li>En 2020, le <strong>Royaume-Uni</strong> a quitté l'UE (Brexit)</li>
            </ul>

            <h3>🗺️ Quelques pays et capitales</h3>
            <ul>
                <li>🇩🇪 Allemagne → Berlin | 🇮🇹 Italie → Rome</li>
                <li>🇪🇸 Espagne → Madrid | 🇵🇹 Portugal → Lisbonne</li>
                <li>🇧🇪 Belgique → Bruxelles | 🇳🇱 Pays-Bas → Amsterdam</li>
                <li>🇵🇱 Pologne → Varsovie | 🇬🇷 Grèce → Athènes</li>
            </ul>

            <div style="background:#0d2a1a;border-left:4px solid #4CAF50;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#4CAF50;">📌 À retenir :</strong> 27 pays dans l'UE. Traité de Rome 1957. Euro = monnaie commune. Parlement à Strasbourg. 12 étoiles = symbole.
            </div>
        `
    },

    deplacements: {
        title: "Déplacements & Mobilités dans le monde",
        content: `
            <h3>🚆 Pourquoi se déplacer ?</h3>
            <p>Les humains se déplacent pour de nombreuses raisons : aller travailler, rendre visite à de la famille, fuir des dangers, chercher de meilleures conditions de vie.</p>

            <h3>🏙️ Les types de mobilités</h3>
            <ul>
                <li><strong>Mobilité quotidienne</strong> : trajets domicile-travail ou domicile-école (pendulaire)</li>
                <li><strong>Migration</strong> : déplacement durable ou définitif d'une région vers une autre</li>
                <li><strong>Tourisme</strong> : déplacement temporaire pour les loisirs</li>
                <li><strong>Exil/réfugiés</strong> : déplacements forcés pour fuir guerres ou catastrophes</li>
            </ul>

            <h3>🌍 Les grandes migrations mondiales</h3>
            <p>Chaque année, des millions de personnes migrent. En 2023, <strong>281 millions de personnes</strong> vivent dans un pays différent de leur pays de naissance. Les principales destinations : Europe, Amérique du Nord, pays du Golfe.</p>

            <h3>⚖️ Inégalités de mobilité</h3>
            <p>Tout le monde ne peut pas se déplacer aussi facilement. Les personnes des pays riches peuvent voyager librement partout. Ceux des pays pauvres ont souvent besoin de <strong>visas</strong> difficiles à obtenir.</p>

            <div style="background:#2a1a0d;border-left:4px solid #FF9800;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#FF9800;">📌 À retenir :</strong> Mobilité = se déplacer. Pendulaire = domicile/travail. Migration = changement durable. Réfugiés = déplacement forcé. 281 millions de migrants dans le monde.
            </div>
        `
    },

    relief: {
        title: "Le relief et les fleuves de France",
        content: `
            <h3>⛰️ Les grandes chaînes de montagnes</h3>
            <ul>
                <li><strong>Les Alpes</strong> (est) : Mont Blanc 4 808 m — plus haute montagne de France et d'Europe occidentale. Frontière avec l'Italie et la Suisse.</li>
                <li><strong>Les Pyrénées</strong> (sud) : Pic d'Aneto en Espagne, Vignemale côté français (3 298 m). Frontière naturelle avec l'Espagne.</li>
                <li><strong>Le Massif Central</strong> : volcans éteints, Puy de Dôme (1 465 m), Puy de Sancy (1 886 m). Auvergne.</li>
                <li><strong>Les Vosges</strong> (nord-est) : séparent l'Alsace du reste de la France.</li>
                <li><strong>Le Jura</strong> : entre France et Suisse.</li>
            </ul>

            <h3>🏞️ Les principaux fleuves</h3>
            <ul>
                <li><strong>La Loire</strong> (1 006 km) : plus long fleuve de France. Source en Ardèche, débouche dans l'Atlantique à Saint-Nazaire. Traverse Orléans, Tours, Nantes.</li>
                <li><strong>Le Rhône</strong> (812 km en France) : naît en Suisse, traverse Genève et Lyon. Se jette dans la Méditerranée à Arles.</li>
                <li><strong>La Seine</strong> (775 km) : traverse Paris. Débouche en Normandie (Le Havre).</li>
                <li><strong>La Garonne</strong> (575 km) : naît dans les Pyrénées espagnoles. Traverse Toulouse et Bordeaux.</li>
                <li><strong>Le Rhin</strong> : frontière naturelle avec l'Allemagne.</li>
            </ul>

            <div style="background:#1a2a0d;border-left:4px solid #8BC34A;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#8BC34A;">📌 À retenir :</strong> Mont Blanc = 4 808 m. Loire = plus long fleuve (1 006 km). Rhône → Méditerranée. Seine → Paris → Normandie. Garonne → Toulouse → Bordeaux.
            </div>
        `
    },

    regions: {
        title: "Les régions de France",
        content: `
            <h3>🗺️ 13 régions métropolitaines depuis 2016</h3>
            <p>En <strong>2016</strong>, la France a fusionné ses 22 anciennes régions en <strong>13 régions métropolitaines</strong> plus grandes, pour plus d'efficacité.</p>

            <h3>📋 Les 13 régions et leurs préfectures</h3>
            <ul>
                <li><strong>Île-de-France</strong> → Paris</li>
                <li><strong>Nouvelle-Aquitaine</strong> (la plus grande) → Bordeaux</li>
                <li><strong>Occitanie</strong> → Toulouse</li>
                <li><strong>Auvergne-Rhône-Alpes</strong> → Lyon</li>
                <li><strong>Grand Est</strong> → Strasbourg</li>
                <li><strong>Hauts-de-France</strong> → Lille</li>
                <li><strong>Normandie</strong> → Rouen</li>
                <li><strong>Bretagne</strong> → Rennes</li>
                <li><strong>Pays de la Loire</strong> → Nantes</li>
                <li><strong>Centre-Val de Loire</strong> → Orléans (le "jardin de la France")</li>
                <li><strong>Bourgogne-Franche-Comté</strong> → Dijon</li>
                <li><strong>PACA</strong> (Provence-Alpes-Côte d'Azur) → Marseille</li>
                <li><strong>Corse</strong> → Ajaccio</li>
            </ul>

            <h3>🏝️ Les régions et départements d'outre-mer</h3>
            <p>La France possède aussi des territoires ultramarins : <strong>Guadeloupe, Martinique, Guyane, La Réunion, Mayotte</strong> — ce sont des régions françaises à part entière, avec leurs propres caractéristiques géographiques.</p>

            <div style="background:#1a0d2a;border-left:4px solid #9C27B0;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#9C27B0;">📌 À retenir :</strong> 13 régions depuis 2016. Nouvelle-Aquitaine = la plus grande. Île-de-France = la plus peuplée. 5 régions d'outre-mer.
            </div>
        `
    },

    villes: {
        title: "Les grandes villes françaises",
        content: `
            <h3>🏙️ Le classement des grandes villes</h3>
            <ul>
                <li>1️⃣ <strong>Paris</strong> : ~2,1 millions d'habitants intra-muros, ~12 millions en Île-de-France. Capitale politique, économique et culturelle.</li>
                <li>2️⃣ <strong>Marseille</strong> : ~870 000 habitants. Grand port méditerranéen. 2ème ville de France.</li>
                <li>3️⃣ <strong>Lyon</strong> : ~520 000 habitants. Capitale de la gastronomie française, carrefour routier européen.</li>
                <li>4️⃣ <strong>Toulouse</strong> : ~480 000 habitants. "La Ville Rose" (briques roses). Capitale de l'aéronautique (Airbus).</li>
                <li>5️⃣ <strong>Nice</strong> : ~340 000 habitants. Côte d'Azur, tourisme.</li>
                <li>6️⃣ <strong>Nantes</strong> : ~320 000 habitants. Pays de la Loire, grand port atlantique historique.</li>
                <li>7️⃣ <strong>Strasbourg</strong> : siège du Parlement Européen, capitale de l'Alsace.</li>
                <li>8️⃣ <strong>Bordeaux</strong> : capitale des vins, candidate au patrimoine UNESCO.</li>
            </ul>

            <h3>🚉 Des villes bien connectées</h3>
            <p>Les grandes villes françaises sont reliées par le <strong>TGV</strong> (Train à Grande Vitesse). Par exemple : Paris-Lyon en 2h, Paris-Marseille en 3h15, Paris-Bordeaux en 2h.</p>

            <div style="background:#2a1a0d;border-left:4px solid #FF5722;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#FF5722;">📌 À retenir :</strong> Paris = capitale. Marseille = 2ème ville + grand port méd. Lyon = gastronomie. Toulouse = "ville rose" + Airbus. Strasbourg = Parlement européen.
            </div>
        `
    },

    pays_europe: {
        title: "Pays et capitales d'Europe",
        content: `
            <h3>🗺️ Les grands pays d'Europe de l'Ouest</h3>
            <ul>
                <li>🇫🇷 <strong>France</strong> → Paris (67 millions d'habitants)</li>
                <li>🇩🇪 <strong>Allemagne</strong> → Berlin (83 millions) — plus peuplé de l'UE</li>
                <li>🇮🇹 <strong>Italie</strong> → Rome (60 millions)</li>
                <li>🇪🇸 <strong>Espagne</strong> → Madrid (47 millions)</li>
                <li>🇵🇹 <strong>Portugal</strong> → Lisbonne</li>
                <li>🇧🇪 <strong>Belgique</strong> → Bruxelles (capitale de l'UE)</li>
                <li>🇳🇱 <strong>Pays-Bas</strong> → Amsterdam</li>
                <li>🇬🇧 <strong>Royaume-Uni</strong> → Londres (hors UE depuis 2020)</li>
            </ul>

            <h3>🗺️ Les pays du nord et de l'est</h3>
            <ul>
                <li>🇸🇪 <strong>Suède</strong> → Stockholm | 🇩🇰 <strong>Danemark</strong> → Copenhague</li>
                <li>🇳🇴 <strong>Norvège</strong> → Oslo (hors UE) | 🇫🇮 <strong>Finlande</strong> → Helsinki</li>
                <li>🇵🇱 <strong>Pologne</strong> → Varsovie | 🇬🇷 <strong>Grèce</strong> → Athènes</li>
                <li>🇦🇹 <strong>Autriche</strong> → Vienne | 🇨🇭 <strong>Suisse</strong> → Berne (hors UE)</li>
            </ul>

            <h3>🤏 Les micro-États</h3>
            <p><strong>Vatican</strong> (Rome), <strong>Monaco</strong> (France), <strong>Saint-Marin</strong> (Italie), <strong>Liechtenstein</strong> (entre Suisse et Autriche), <strong>Andorre</strong> (Pyrénées).</p>

            <div style="background:#0d1a2a;border-left:4px solid #03A9F4;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#03A9F4;">📌 À retenir :</strong> Allemagne = plus peuplé de l'UE. Bruxelles = capitale UE. Parlement à Strasbourg. Vatican = plus petit pays du monde. Suisse et Norvège hors UE.
            </div>
        `
    },

    ue: {
        title: "L'Union Européenne : histoire et institutions",
        content: `
            <h3>📜 La naissance de l'Europe unie</h3>
            <ul>
                <li><strong>1951</strong> : CECA — 6 pays (France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg)</li>
                <li><strong>1957</strong> : Traité de Rome → Communauté Économique Européenne (CEE)</li>
                <li><strong>1992</strong> : Traité de Maastricht → naissance officielle de l'Union Européenne</li>
                <li><strong>2002</strong> : introduction des billets et pièces en euros</li>
                <li><strong>2020</strong> : Brexit — le Royaume-Uni quitte l'UE</li>
            </ul>

            <h3>🏛️ Les institutions européennes</h3>
            <ul>
                <li><strong>Parlement Européen</strong> (Strasbourg) : 705 députés élus par les citoyens</li>
                <li><strong>Conseil Européen</strong> (Bruxelles) : réunit les chefs d'État</li>
                <li><strong>Commission Européenne</strong> (Bruxelles) : propose les lois européennes</li>
                <li><strong>Cour de Justice de l'UE</strong> (Luxembourg) : vérifie le respect des lois</li>
                <li><strong>Banque Centrale Européenne</strong> (Francfort) : gère l'euro</li>
            </ul>

            <h3>🎯 Les valeurs de l'UE</h3>
            <p>Liberté, démocratie, droits de l'homme, paix. La <strong>libre circulation</strong> permet aux citoyens européens de vivre et travailler dans n'importe quel pays membre.</p>

            <div style="background:#0d2a1a;border-left:4px solid #FFD700;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#FFD700;">📌 À retenir :</strong> 1957 = Traité de Rome. 27 pays membres. Euro depuis 2002. Parlement à Strasbourg. Libre circulation = valeur fondamentale.
            </div>
        `
    },

    transports: {
        title: "Les transports en France",
        content: `
            <h3>🚆 Le réseau ferroviaire</h3>
            <ul>
                <li><strong>TGV</strong> (Train à Grande Vitesse) : jusqu'à 320 km/h. Inauguré Paris-Lyon en <strong>1981</strong>.</li>
                <li><strong>TER</strong> (Train Express Régional) : trains régionaux, moins rapides</li>
                <li><strong>RER</strong> : réseau express régional d'Île-de-France</li>
                <li>La SNCF gère l'ensemble du réseau ferroviaire français</li>
            </ul>

            <h3>🛣️ Le réseau routier</h3>
            <p>La France possède environ <strong>12 000 km d'autoroutes</strong>, l'un des plus denses d'Europe. La plupart sont payantes (péages). Réseau de routes nationales et départementales complète l'ensemble.</p>

            <h3>✈️ Les aéroports</h3>
            <ul>
                <li><strong>Paris Charles de Gaulle (CDG)</strong> : plus grand aéroport de France, 3ème d'Europe</li>
                <li><strong>Paris Orly</strong>, <strong>Lyon Saint-Exupéry</strong>, <strong>Nice</strong>, <strong>Marseille</strong></li>
            </ul>

            <h3>🚢 Les ports et canaux</h3>
            <ul>
                <li><strong>Le Havre</strong> : plus grand port de France (Manche/Atlantique)</li>
                <li><strong>Marseille-Fos</strong> : plus grand port méditerranéen français</li>
                <li><strong>Canal du Midi</strong> (Patrimoine UNESCO) : relie Toulouse à la Méditerranée</li>
                <li><strong>Eurotunnel</strong> : tunnel sous la Manche, relie Calais à Folkestone (Angleterre)</li>
            </ul>

            <div style="background:#2a0d1a;border-left:4px solid #E91E63;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#E91E63;">📌 À retenir :</strong> TGV depuis 1981. 12 000 km d'autoroutes. CDG = plus grand aéroport. Le Havre = plus grand port. Eurotunnel = tunnel sous la Manche.
            </div>
        `
    },

    monde: {
        title: "Les mobilités mondiales",
        content: `
            <h3>🌍 Un monde qui se déplace</h3>
            <p>Aujourd'hui, les humains bougent plus que jamais. En 2022, <strong>281 millions de personnes</strong> (soit 3,5 % de la population mondiale) vivaient dans un pays différent de leur pays de naissance.</p>

            <h3>📊 Les grandes migrations</h3>
            <ul>
                <li><strong>Exode rural</strong> : des campagnes vers les villes. 55% de la population mondiale est urbaine.</li>
                <li><strong>Migrations économiques</strong> : chercher du travail dans un pays plus riche</li>
                <li><strong>Réfugiés climatiques</strong> : fuir des catastrophes naturelles ou la montée des eaux</li>
                <li><strong>Réfugiés politiques</strong> : fuir les guerres et persécutions</li>
            </ul>

            <h3>✈️ Le tourisme mondial</h3>
            <p>La France est <strong>le pays le plus visité au monde</strong> : environ 90 millions de touristes par an avant la pandémie. Paris, le Mont-Saint-Michel, les châteaux de la Loire, la Côte d'Azur...</p>

            <h3>⚖️ Des mobilités inégales</h3>
            <p>Avec un passeport européen, on peut visiter plus de 180 pays sans visa. Avec certains passeports africains, seulement une trentaine de pays. L'accès à la mobilité est très inégal dans le monde.</p>

            <div style="background:#1a1a2a;border-left:4px solid #607D8B;padding:12px 16px;border-radius:8px;margin-top:16px;color:#fff;">
                <strong style="color:#607D8B;">📌 À retenir :</strong> 281 millions de migrants dans le monde. France = pays le plus visité. Exode rural = campagnes vers villes. Mobilité inégale selon les passeports.
            </div>
        `
    }
};

// Export global
if (typeof window !== 'undefined') {
    window.geographieLeconData = geographieLeconData;
}

console.log('✅ Géographie chargée : ' + Object.keys(geographieLeconData).length + ' contenus de leçons');
