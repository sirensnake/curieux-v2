/**
 * FRANÇAIS - 7 NOUVEAUX THÈMES (4-10)
 * Niveau CM1/CM2 mixte
 * 
 * À intégrer dans francais_duolingo_section.html
 * Section: themes + lessonData + quizQuestions
 * 
 * Auteur: Guillaume (TAI RNCP 37681)
 * Date: 5 février 2026
 */

// ============================================================================
// SECTION 1 : AJOUT DANS themes: { ... }
// ============================================================================

orthographe: {
    name: 'Orthographe',
    description: 'Maîtrise les sons complexes et les lettres muettes',
    imageUrl: '/images/francais/illustration_orthographe.jpg'
},
ponctuation: {
    name: 'Ponctuation',
    description: 'Apprends à utiliser les signes de ponctuation correctement',
    imageUrl: '/images/francais/illustration_ponctuation.jpg'
},
typesphrases: {
    name: 'Types de Phrases',
    description: 'Distingue les phrases déclaratives, interrogatives, exclamatives et impératives',
    imageUrl: '/images/francais/illustration_phrases.jpg'
},
classesmots: {
    name: 'Classes de Mots',
    description: 'Identifie les noms, verbes, adjectifs et déterminants',
    imageUrl: '/images/francais/illustration_classes.jpg'
},
lecture: {
    name: 'Lecture & Compréhension',
    description: 'Comprends un texte et trouve l\'idée principale',
    imageUrl: '/images/francais/illustration_lecture.jpg'
},
production: {
    name: 'Production d\'Écrit',
    description: 'Rédige des récits, descriptions et dialogues',
    imageUrl: '/images/francais/illustration_ecriture.jpg'
},
poesie: {
    name: 'Poésie',
    description: 'Découvre les rimes, les vers et les figures de style',
    imageUrl: '/images/francais/illustration_poesie.jpg'
}

// ============================================================================
// SECTION 2 : AJOUT DANS lessonData: { ... }
// ============================================================================

orthographe: {
    title: "✍️ L'Orthographe",
    content: `
        <h3>Pourquoi l'orthographe ?</h3>
        <p>L'orthographe, c'est <strong>l'art d'écrire correctement les mots</strong>. Elle t'aide à te faire comprendre par écrit !</p>

        <h3>Les sons complexes</h3>
        
        <h4>Le son [k]</h4>
        <ul>
            <li><strong>c</strong> devant a, o, u : <span class="correct">cahier, colle, cube</span></li>
            <li><strong>qu</strong> devant e, i : <span class="correct">qui, que, quoi</span></li>
            <li><strong>k</strong> : <span class="correct">kilo, koala</span></li>
            <li><strong>ch</strong> (rare) : <span class="correct">chorale</span></li>
        </ul>

        <h4>Le son [s]</h4>
        <ul>
            <li><strong>s</strong> en début de mot : <span class="correct">soleil, savon</span></li>
            <li><strong>ss</strong> entre 2 voyelles : <span class="correct">poisson, classe</span></li>
            <li><strong>c</strong> devant e, i, y : <span class="correct">ciel, citron, cycle</span></li>
            <li><strong>ç</strong> devant a, o, u : <span class="correct">garçon, leçon, façade</span></li>
            <li><strong>t</strong> dans -tion : <span class="correct">addition, natation</span></li>
        </ul>

        <h4>Le son [g]</h4>
        <ul>
            <li><strong>g</strong> devant a, o, u : <span class="correct">gare, gorille, légume</span></li>
            <li><strong>gu</strong> devant e, i : <span class="correct">guerre, guitare</span></li>
        </ul>

        <h4>Le son [ʒ] (j)</h4>
        <ul>
            <li><strong>j</strong> devant a, o, u : <span class="correct">jardin, joli, jupe</span></li>
            <li><strong>g</strong> devant e, i, y : <span class="correct">gilet, géant, gymnase</span></li>
            <li><strong>ge</strong> devant a, o : <span class="correct">mangea, pigeon</span></li>
        </ul>

        <h3>Les lettres muettes</h3>
        <p>Certaines lettres ne se prononcent pas mais <strong>s'écrivent</strong> :</p>
        
        <h4>Lettres muettes finales</h4>
        <ul>
            <li><strong>-e</strong> : tabl<span class="muted">e</span>, amour<span class="muted">e</span></li>
            <li><strong>-s</strong> : souri<span class="muted">s</span>, tapi<span class="muted">s</span></li>
            <li><strong>-t</strong> : gran<span class="muted">t</span>, cha<span class="muted">t</span></li>
            <li><strong>-d</strong> : regar<span class="muted">d</span>, gourman<span class="muted">d</span></li>
            <li><strong>-p</strong> : dra<span class="muted">p</span>, lou<span class="muted">p</span></li>
            <li><strong>-x</strong> : voi<span class="muted">x</span>, pai<span class="muted">x</span></li>
        </ul>

        <h4>Astuce : le féminin révèle la lettre muette !</h4>
        <div class="example">
            gran<strong>d</strong> → gran<strong>d</strong>e<br>
            cha<strong>t</strong> → cha<strong>t</strong>te<br>
            gourman<strong>d</strong> → gourman<strong>d</strong>e
        </div>

        <h3>Les accents</h3>
        <ul>
            <li><strong>é</strong> (accent aigu) : <span class="correct">été, école</span></li>
            <li><strong>è / ê</strong> (accent grave/circonflexe) : <span class="correct">père, forêt</span></li>
            <li><strong>ç</strong> (cédille) : <span class="correct">français, leçon</span></li>
            <li><strong>ï / ë</strong> (tréma) : <span class="correct">maïs, Noël</span></li>
        </ul>

        <h3>Les doubles consonnes</h3>
        <p>Certains mots doublent leurs consonnes :</p>
        <ul>
            <li><strong>-enne</strong> : <span class="correct">antenne, parisienne</span></li>
            <li><strong>-ette</strong> : <span class="correct">fillette, tablette</span></li>
            <li><strong>-esse</strong> : <span class="correct">vitesse, richesse</span></li>
            <li><strong>-alle/-elle/-ille/-olle</strong> : <span class="correct">balle, belle, fille, colle</span></li>
        </ul>

        <h3>À retenir</h3>
        <p>📌 En cas de doute, consulte un dictionnaire ! 📚</p>
        <p>📌 Lis beaucoup pour mémoriser l'orthographe des mots 📖</p>
        <p>📌 Utilise le féminin pour trouver les lettres muettes 👩</p>
    `
},

ponctuation: {
    title: "🔣 La Ponctuation",
    content: `
        <h3>Pourquoi la ponctuation ?</h3>
        <p>La ponctuation, ce sont les <strong>signes qui organisent le texte</strong>. Elle aide à comprendre et à donner du sens !</p>

        <h3>Le point (.)</h3>
        <p>Le point <strong>termine une phrase déclarative</strong> :</p>
        <div class="example">
            Le chat dort sur le canapé<strong>.</strong><br>
            J'aime les pommes<strong>.</strong>
        </div>

        <h3>Le point d'interrogation (?)</h3>
        <p>Il termine une <strong>question</strong> :</p>
        <div class="example">
            Comment t'appelles-tu<strong>?</strong><br>
            Quelle heure est-il<strong>?</strong>
        </div>

        <h3>Le point d'exclamation (!)</h3>
        <p>Il exprime une <strong>émotion forte</strong> (joie, colère, surprise) :</p>
        <div class="example">
            Quelle belle journée<strong>!</strong><br>
            Attention<strong>!</strong><br>
            Bravo<strong>!</strong>
        </div>

        <h3>La virgule (,)</h3>
        <p>La virgule fait une <strong>petite pause</strong> dans la phrase :</p>
        
        <h4>Elle sépare les éléments d'une énumération</h4>
        <div class="example">
            J'aime les pommes<strong>,</strong> les poires<strong>,</strong> les bananes et les fraises.
        </div>

        <h4>Elle isole des groupes de mots</h4>
        <div class="example">
            Demain<strong>,</strong> nous irons au cinéma.<br>
            Le chat<strong>,</strong> fatigué<strong>,</strong> dort.
        </div>

        <h3>Les deux-points (:)</h3>
        <p>Ils annoncent une <strong>explication</strong> ou une <strong>énumération</strong> :</p>
        <div class="example">
            J'ai trois animaux<strong>:</strong> un chat, un chien et un poisson.<br>
            Il dit<strong>:</strong> "Bonjour !"
        </div>

        <h3>Le point-virgule (;)</h3>
        <p>Il fait une pause <strong>plus longue que la virgule</strong> mais plus courte que le point :</p>
        <div class="example">
            J'aime lire<strong>;</strong> mon frère préfère jouer.
        </div>

        <h3>Les points de suspension (...)</h3>
        <p>Ils indiquent que <strong>la phrase n'est pas terminée</strong> ou créent un suspense :</p>
        <div class="example">
            Je ne sais pas quoi dire<strong>...</strong><br>
            Et tout à coup<strong>...</strong> le lion apparut !
        </div>

        <h3>Les guillemets (« »)</h3>
        <p>Ils encadrent les <strong>paroles</strong> de quelqu'un :</p>
        <div class="example">
            Marie dit : <strong>«</strong> Bonjour ! <strong>»</strong><br>
            Le professeur demande : <strong>«</strong> As-tu fait tes devoirs ? <strong>»</strong>
        </div>

        <h3>Les tirets (–)</h3>
        <p>Dans un dialogue, chaque <strong>nouvelle réplique</strong> commence par un tiret :</p>
        <div class="example">
            <strong>–</strong> Bonjour !<br>
            <strong>–</strong> Salut ! Comment vas-tu ?<br>
            <strong>–</strong> Très bien, merci !
        </div>

        <h3>Les parenthèses ( )</h3>
        <p>Elles ajoutent une <strong>information supplémentaire</strong> :</p>
        <div class="example">
            Paul <strong>(</strong>mon meilleur ami<strong>)</strong> arrive demain.
        </div>

        <h3>À retenir</h3>
        <p>📌 La ponctuation change le sens de la phrase ! 🎭</p>
        <p>📌 Lis à voix haute pour sentir les pauses ⏸️</p>
        <p>📌 Après un point, on met une MAJUSCULE ! Ⓜ️</p>
    `
},

typesphrases: {
    title: "💬 Les Types de Phrases",
    content: `
        <h3>Qu'est-ce qu'un type de phrase ?</h3>
        <p>Une phrase peut avoir <strong>4 types différents</strong> selon ce qu'elle exprime.</p>

        <h3>1. La phrase déclarative (.)</h3>
        <p>Elle <strong>donne une information</strong> ou fait une affirmation :</p>
        <div class="example">
            Le chat dort sur le canapé<strong>.</strong><br>
            J'aime les gâteaux au chocolat<strong>.</strong><br>
            Il fait beau aujourd'hui<strong>.</strong>
        </div>
        <p>✅ Elle se termine par un <strong>point</strong>.</p>

        <h3>2. La phrase interrogative (?)</h3>
        <p>Elle <strong>pose une question</strong> :</p>
        
        <h4>Avec inversion sujet-verbe</h4>
        <div class="example">
            <strong>Viens-tu</strong> avec moi ?<br>
            <strong>Où vas-tu</strong> ?
        </div>

        <h4>Avec "est-ce que"</h4>
        <div class="example">
            <strong>Est-ce que</strong> tu viens avec moi ?<br>
            <strong>Est-ce que</strong> tu aimes le chocolat ?
        </div>

        <h4>Question simple (langage courant)</h4>
        <div class="example">
            Tu viens avec moi <strong>?</strong><br>
            C'est toi <strong>?</strong>
        </div>
        <p>✅ Elle se termine par un <strong>point d'interrogation</strong>.</p>

        <h3>3. La phrase exclamative (!)</h3>
        <p>Elle exprime une <strong>émotion forte</strong> (joie, colère, surprise, peur) :</p>
        <div class="example">
            <strong>Comme</strong> c'est beau <strong>!</strong><br>
            <strong>Quelle</strong> belle journée <strong>!</strong><br>
            <strong>Que</strong> tu es grand <strong>!</strong><br>
            Bravo <strong>!</strong> / Attention <strong>!</strong> / Génial <strong>!</strong>
        </div>
        <p>✅ Elle se termine par un <strong>point d'exclamation</strong>.</p>
        <p>🔑 Mots exclamatifs : <strong>comme, que, quel(le)(s)</strong></p>

        <h3>4. La phrase impérative (.)</h3>
        <p>Elle donne un <strong>ordre, un conseil ou une interdiction</strong> :</p>
        
        <h4>Ordre</h4>
        <div class="example">
            <strong>Range</strong> ta chambre.<br>
            <strong>Venez</strong> ici !
        </div>

        <h4>Conseil</h4>
        <div class="example">
            <strong>Prends</strong> ton parapluie, il va pleuvoir.<br>
            <strong>Mange</strong> des fruits.
        </div>

        <h4>Interdiction</h4>
        <div class="example">
            <strong>Ne cours pas</strong> dans les couloirs.<br>
            <strong>Ne parle pas</strong> la bouche pleine.
        </div>
        <p>✅ Le verbe est à l'<strong>impératif</strong> (pas de sujet visible).</p>
        <p>✅ Elle se termine par un <strong>point</strong> ou un <strong>point d'exclamation</strong>.</p>

        <h3>Récapitulatif</h3>
        <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
            <tr style="background: #f0f0f0;">
                <th style="padding: 0.5rem; border: 1px solid #ddd;">Type</th>
                <th style="padding: 0.5rem; border: 1px solid #ddd;">Fonction</th>
                <th style="padding: 0.5rem; border: 1px solid #ddd;">Ponctuation</th>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Déclarative</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Donner une information</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">.</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Interrogative</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Poser une question</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">?</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Exclamative</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Exprimer une émotion</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">!</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Impérative</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Donner un ordre/conseil</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">. ou !</td>
            </tr>
        </table>

        <h3>À retenir</h3>
        <p>📌 La ponctuation t'indique le type de phrase ! 🔍</p>
        <p>📌 Une même idée peut s'exprimer avec différents types de phrases 💡</p>
    `
},

classesmots: {
    title: "🏷️ Les Classes de Mots",
    content: `
        <h3>Qu'est-ce qu'une classe de mots ?</h3>
        <p>Les mots de la langue française sont rangés en <strong>catégories grammaticales</strong> appelées "classes".</p>

        <h3>1. Le NOM (ou substantif)</h3>
        <p>Le nom désigne une <strong>personne, un animal, une chose, un lieu ou une idée</strong> :</p>
        
        <h4>Noms communs</h4>
        <div class="example">
            un <strong>chat</strong>, une <strong>table</strong>, la <strong>joie</strong>, le <strong>courage</strong>
        </div>

        <h4>Noms propres (avec majuscule)</h4>
        <div class="example">
            <strong>Marie</strong>, <strong>Paris</strong>, la <strong>France</strong>, <strong>Noël</strong>
        </div>
        <p>🔑 Le nom a un <strong>genre</strong> (masculin/féminin) et un <strong>nombre</strong> (singulier/pluriel).</p>

        <h3>2. Le VERBE</h3>
        <p>Le verbe exprime une <strong>action</strong> ou un <strong>état</strong> :</p>
        
        <h4>Verbes d'action</h4>
        <div class="example">
            <strong>manger</strong>, <strong>courir</strong>, <strong>jouer</strong>, <strong>écrire</strong>
        </div>

        <h4>Verbes d'état</h4>
        <div class="example">
            <strong>être</strong>, <strong>paraître</strong>, <strong>sembler</strong>, <strong>devenir</strong>
        </div>
        <p>🔑 Le verbe se <strong>conjugue</strong> (il change selon le temps, la personne).</p>
        <p>🔎 Pour le trouver : "Est-ce que je peux le conjuguer ?"</p>

        <h3>3. Le DÉTERMINANT</h3>
        <p>Le déterminant se place <strong>avant le nom</strong> et l'accompagne :</p>
        
        <h4>Articles définis</h4>
        <div class="example">
            <strong>le</strong> chat, <strong>la</strong> maison, <strong>les</strong> enfants
        </div>

        <h4>Articles indéfinis</h4>
        <div class="example">
            <strong>un</strong> chien, <strong>une</strong> fleur, <strong>des</strong> livres
        </div>

        <h4>Déterminants possessifs</h4>
        <div class="example">
            <strong>mon</strong> livre, <strong>ta</strong> sœur, <strong>ses</strong> jouets
        </div>

        <h4>Déterminants démonstratifs</h4>
        <div class="example">
            <strong>ce</strong> garçon, <strong>cette</strong> fille, <strong>ces</strong> chats
        </div>
        <p>🔑 Le déterminant s'accorde en <strong>genre et nombre</strong> avec le nom.</p>

        <h3>4. L'ADJECTIF QUALIFICATIF</h3>
        <p>L'adjectif donne des <strong>précisions sur le nom</strong> (qualité, apparence) :</p>
        <div class="example">
            un chat <strong>noir</strong><br>
            une maison <strong>grande</strong><br>
            des fleurs <strong>magnifiques</strong>
        </div>
        <p>🔑 L'adjectif s'accorde en <strong>genre et nombre</strong> avec le nom qu'il qualifie.</p>
        <p>🔎 Pour le trouver : "Comment est le nom ?"</p>

        <h3>5. Le PRONOM</h3>
        <p>Le pronom <strong>remplace</strong> un nom déjà mentionné :</p>
        
        <h4>Pronoms personnels sujets</h4>
        <div class="example">
            <strong>je</strong>, <strong>tu</strong>, <strong>il/elle</strong>, <strong>nous</strong>, <strong>vous</strong>, <strong>ils/elles</strong>
        </div>

        <h4>Pronoms personnels compléments</h4>
        <div class="example">
            <strong>me</strong>, <strong>te</strong>, <strong>le/la</strong>, <strong>nous</strong>, <strong>vous</strong>, <strong>les</strong>
        </div>
        <div class="example">
            Paul arrive. → <strong>Il</strong> arrive.<br>
            Je vois Marie. → Je <strong>la</strong> vois.
        </div>

        <h3>6. L'ADVERBE</h3>
        <p>L'adverbe modifie le sens d'un <strong>verbe, d'un adjectif ou d'un autre adverbe</strong> :</p>
        
        <h4>Adverbes de manière</h4>
        <div class="example">
            Il court <strong>rapidement</strong>.<br>
            Elle parle <strong>doucement</strong>.
        </div>

        <h4>Adverbes de temps</h4>
        <div class="example">
            <strong>Hier</strong>, je suis allé au cinéma.<br>
            <strong>Demain</strong>, il pleuvra.
        </div>

        <h4>Adverbes de lieu</h4>
        <div class="example">
            Le chat est <strong>ici</strong>.<br>
            Viens <strong>là</strong> !
        </div>
        <p>🔑 L'adverbe est <strong>invariable</strong> (ne change jamais).</p>

        <h3>7. La PRÉPOSITION</h3>
        <p>La préposition relie des mots entre eux :</p>
        <div class="example">
            <strong>à</strong>, <strong>de</strong>, <strong>pour</strong>, <strong>avec</strong>, <strong>sans</strong>, <strong>dans</strong>, <strong>sur</strong>, <strong>sous</strong>, <strong>vers</strong>, <strong>chez</strong>
        </div>
        <div class="example">
            Je vais <strong>à</strong> l'école.<br>
            Il parle <strong>de</strong> son voyage.<br>
            Elle joue <strong>avec</strong> son frère.
        </div>
        <p>🔑 La préposition est <strong>invariable</strong>.</p>

        <h3>8. La CONJONCTION</h3>
        <p>La conjonction relie des mots ou des phrases :</p>
        
        <h4>Conjonctions de coordination</h4>
        <p>Moyen mnémotechnique : <strong>Mais où et donc or ni car</strong></p>
        <div class="example">
            Paul <strong>et</strong> Marie<br>
            Il pleut <strong>mais</strong> je sors<br>
            Viens <strong>car</strong> c'est l'heure
        </div>

        <h3>Récapitulatif</h3>
        <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
            <tr style="background: #f0f0f0;">
                <th style="padding: 0.5rem; border: 1px solid #ddd;">Classe</th>
                <th style="padding: 0.5rem; border: 1px solid #ddd;">Rôle</th>
                <th style="padding: 0.5rem; border: 1px solid #ddd;">Exemple</th>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Nom</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Désigne</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">chat, Paris</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Verbe</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Action/État</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">manger, être</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Déterminant</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Accompagne le nom</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">le, mon, ce</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Adjectif</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Qualifie le nom</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">beau, grand</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Pronom</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Remplace</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">il, le, nous</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Adverbe</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Modifie</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">vite, hier</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Préposition</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Relie</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">à, de, dans</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;"><strong>Conjonction</strong></td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">Relie phrases</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">et, mais, car</td>
            </tr>
        </table>

        <h3>À retenir</h3>
        <p>📌 Chaque mot appartient à une classe grammaticale ! 🏷️</p>
        <p>📌 Pour trouver la classe : pose-toi des questions ! 🤔</p>
    `
},

lecture: {
    title: "📖 Lecture & Compréhension",
    content: `
        <h3>Pourquoi lire ?</h3>
        <p>Lire, c'est <strong>comprendre un texte</strong> et en dégager les informations importantes !</p>

        <h3>Les étapes de la lecture</h3>
        
        <h4>1. Observation globale</h4>
        <p>Avant de lire, regarde :</p>
        <ul>
            <li>Le <strong>titre</strong></li>
            <li>Les <strong>illustrations</strong></li>
            <li>La <strong>mise en page</strong> (paragraphes, dialogues)</li>
            <li>Le <strong>type de texte</strong> (récit, documentaire, poème, BD)</li>
        </ul>

        <h4>2. Première lecture</h4>
        <p>Lis le texte <strong>en entier</strong> pour comprendre l'histoire générale.</p>

        <h4>3. Deuxième lecture</h4>
        <p>Relis <strong>plus attentivement</strong> pour répondre aux questions.</p>

        <h3>Les questions de compréhension</h3>
        
        <h4>Qui ? (personnages)</h4>
        <div class="example">
            Qui est le héros de l'histoire ?<br>
            Qui parle dans le texte ?
        </div>

        <h4>Quoi ? (actions, événements)</h4>
        <div class="example">
            Que se passe-t-il dans le texte ?<br>
            Quel est le problème rencontré ?
        </div>

        <h4>Où ? (lieux)</h4>
        <div class="example">
            Où se déroule l'histoire ?<br>
            Dans quel pays/ville/maison ?
        </div>

        <h4>Quand ? (temps)</h4>
        <div class="example">
            À quelle époque se passe l'histoire ?<br>
            À quel moment de la journée ?
        </div>

        <h4>Comment ? (manière)</h4>
        <div class="example">
            Comment le héros résout-il le problème ?<br>
            De quelle façon agit-il ?
        </div>

        <h4>Pourquoi ? (causes, raisons)</h4>
        <div class="example">
            Pourquoi le personnage est-il triste ?<br>
            Pour quelle raison part-il en voyage ?
        </div>

        <h3>Trouver l'idée principale</h3>
        <p>L'idée principale, c'est <strong>le message essentiel du texte</strong>.</p>
        
        <h4>Méthode</h4>
        <ol>
            <li>Lis le texte en entier</li>
            <li>Demande-toi : <strong>"De quoi parle le texte ?"</strong></li>
            <li>Résume en <strong>une phrase</strong></li>
        </ol>

        <div class="example">
            <strong>Texte :</strong> "Pierre a perdu son chat. Il cherche partout. Finalement, il le retrouve dans le grenier."<br>
            <strong>Idée principale :</strong> Pierre retrouve son chat perdu.
        </div>

        <h3>Les types de textes</h3>
        
        <h4>Le récit (histoire)</h4>
        <ul>
            <li>Raconte une <strong>histoire</strong> avec des personnages</li>
            <li>A un début, un milieu et une fin</li>
            <li>Exemple : conte, roman, nouvelle</li>
        </ul>

        <h4>Le texte documentaire</h4>
        <ul>
            <li>Donne des <strong>informations</strong> sur un sujet</li>
            <li>Explique, décrit</li>
            <li>Exemple : article encyclopédie, manuel scolaire</li>
        </ul>

        <h4>Le texte prescriptif (instructions)</h4>
        <ul>
            <li>Explique <strong>comment faire</strong> quelque chose</li>
            <li>Donne des ordres, des conseils</li>
            <li>Exemple : recette, mode d'emploi, règle du jeu</li>
        </ul>

        <h4>La poésie</h4>
        <ul>
            <li>Joue avec les <strong>sons</strong> et les <strong>rythmes</strong></li>
            <li>Organisée en vers et strophes</li>
            <li>Exemple : poème, chanson</li>
        </ul>

        <h4>Le théâtre</h4>
        <ul>
            <li>Texte écrit pour être <strong>joué sur scène</strong></li>
            <li>Composé de dialogues et didascalies</li>
            <li>Exemple : pièce de théâtre</li>
        </ul>

        <h4>La bande dessinée (BD)</h4>
        <ul>
            <li>Raconte avec des <strong>images</strong> et des <strong>bulles</strong></li>
            <li>Organisée en cases</li>
            <li>Exemple : Astérix, Tintin</li>
        </ul>

        <h3>Stratégies de lecture</h3>
        
        <h4>Surligner les mots-clés</h4>
        <p>Identifie les <strong>mots importants</strong> qui t'aident à comprendre.</p>

        <h4>Chercher les mots inconnus</h4>
        <p>Si tu ne comprends pas un mot :</p>
        <ol>
            <li>Essaie de <strong>deviner</strong> grâce au contexte</li>
            <li>Cherche dans le <strong>dictionnaire</strong></li>
            <li>Demande à un adulte</li>
        </ol>

        <h4>Faire des liens</h4>
        <p>Relie le texte à tes <strong>connaissances</strong> ou à d'autres textes lus.</p>

        <h4>Visualiser</h4>
        <p>Imagine la scène dans ta tête comme un <strong>film</strong>.</p>

        <h3>À retenir</h3>
        <p>📌 Lis régulièrement pour améliorer ta compréhension ! 📚</p>
        <p>📌 Pose-toi des questions pendant la lecture 🤔</p>
        <p>📌 Relis si tu n'as pas compris 🔄</p>
    `
},

production: {
    title: "✍️ Production d'Écrit",
    content: `
        <h3>Pourquoi écrire ?</h3>
        <p>Écrire, c'est <strong>communiquer par écrit</strong> en organisant ses idées et en respectant des règles !</p>

        <h3>Les étapes de l'écriture</h3>
        
        <h4>1. Préparation (brouillon)</h4>
        <ul>
            <li>Note tes <strong>idées</strong> en vrac</li>
            <li>Organise-les avec un <strong>plan</strong></li>
            <li>Pose-toi les questions : Qui ? Quoi ? Où ? Quand ? Comment ?</li>
        </ul>

        <h4>2. Rédaction</h4>
        <ul>
            <li>Écris ton texte au <strong>brouillon</strong></li>
            <li>Respecte ton plan</li>
            <li>Utilise des phrases complètes</li>
        </ul>

        <h4>3. Relecture et correction</h4>
        <ul>
            <li>Relis ton texte</li>
            <li>Vérifie l'<strong>orthographe</strong> (dictionnaire)</li>
            <li>Vérifie la <strong>grammaire</strong> (accords)</li>
            <li>Vérifie la <strong>ponctuation</strong></li>
            <li>Améliore ton <strong>vocabulaire</strong> (synonymes)</li>
        </ul>

        <h4>4. Mise au propre</h4>
        <ul>
            <li>Recopie ton texte <strong>proprement</strong></li>
            <li>Soigne ton écriture</li>
            <li>Aère ton texte (paragraphes)</li>
        </ul>

        <h3>Rédiger un récit</h3>
        
        <h4>Structure d'un récit</h4>
        <ol>
            <li><strong>Situation initiale</strong> : Présentation des personnages et du lieu</li>
            <li><strong>Élément déclencheur</strong> : Un problème ou événement survient</li>
            <li><strong>Péripéties</strong> : Actions pour résoudre le problème</li>
            <li><strong>Résolution</strong> : Le problème est résolu</li>
            <li><strong>Situation finale</strong> : Fin de l'histoire</li>
        </ol>

        <h4>Conseils pour écrire un récit</h4>
        <ul>
            <li>Utilise le <strong>passé simple</strong> pour les actions principales</li>
            <li>Utilise l'<strong>imparfait</strong> pour les descriptions</li>
            <li>Varie le vocabulaire (<strong>synonymes</strong>)</li>
            <li>Ajoute des <strong>dialogues</strong> pour rendre vivant</li>
            <li>Décris les <strong>lieux</strong> et les <strong>personnages</strong></li>
            <li>Crée du <strong>suspense</strong></li>
        </ul>

        <h4>Connecteurs temporels</h4>
        <p>Pour organiser les étapes de ton récit :</p>
        <div class="example">
            <strong>D'abord</strong>, il était une fois...<br>
            <strong>Puis</strong>, soudain...<br>
            <strong>Ensuite</strong>, alors...<br>
            <strong>Enfin</strong>, finalement...
        </div>

        <h3>Rédiger une description</h3>
        
        <h4>Décrire un personnage</h4>
        <ul>
            <li><strong>Aspect physique</strong> : taille, cheveux, yeux, vêtements</li>
            <li><strong>Caractère</strong> : gentil, timide, courageux, drôle</li>
            <li><strong>Actions</strong> : ce qu'il aime faire</li>
        </ul>

        <div class="example">
            <strong>Exemple :</strong> "Pierre est un garçon de 10 ans aux cheveux bruns et aux yeux bleus. Il est très curieux et adore explorer la forêt près de chez lui."
        </div>

        <h4>Décrire un lieu</h4>
        <ul>
            <li><strong>Localisation</strong> : où se trouve le lieu ?</li>
            <li><strong>Éléments visuels</strong> : couleurs, formes, tailles</li>
            <li><strong>Atmosphère</strong> : calme, effrayant, joyeux</li>
            <li><strong>Sensations</strong> : sons, odeurs, textures</li>
        </ul>

        <div class="example">
            <strong>Exemple :</strong> "La forêt était sombre et mystérieuse. Les arbres centenaires formaient une voûte au-dessus du sentier. On entendait le chant des oiseaux et le bruissement des feuilles."
        </div>

        <h3>Rédiger un dialogue</h3>
        
        <h4>Règles du dialogue</h4>
        <ul>
            <li>Utilise les <strong>guillemets</strong> : « ... »</li>
            <li>Ou les <strong>tirets</strong> : – ...</li>
            <li>Change de ligne à chaque <strong>nouvelle réplique</strong></li>
            <li>Indique <strong>qui parle</strong> (verbes de parole)</li>
        </ul>

        <div class="example">
            <strong>Avec guillemets :</strong><br>
            Marie demanda : « Où vas-tu ? »<br>
            Paul répondit : « Je vais au parc. »<br><br>
            
            <strong>Avec tirets :</strong><br>
            – Où vas-tu ?<br>
            – Je vais au parc.
        </div>

        <h4>Verbes de parole</h4>
        <p>Varie les verbes pour enrichir ton texte :</p>
        <div class="example">
            dire, demander, répondre, crier, chuchoter, murmurer, s'exclamer, répliquer, ajouter, expliquer, déclarer
        </div>

        <h3>Enrichir son vocabulaire</h3>
        
        <h4>Remplace les mots répétés</h4>
        <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
            <tr style="background: #f0f0f0;">
                <th style="padding: 0.5rem; border: 1px solid #ddd;">Mot courant</th>
                <th style="padding: 0.5rem; border: 1px solid #ddd;">Synonymes</th>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">dire</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">affirmer, déclarer, expliquer, raconter</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">faire</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">réaliser, accomplir, effectuer, fabriquer</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">content</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">heureux, joyeux, ravi, enchanté</td>
            </tr>
            <tr>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">grand</td>
                <td style="padding: 0.5rem; border: 1px solid #ddd;">immense, gigantesque, colossal, imposant</td>
            </tr>
        </table>

        <h4>Utilise des adjectifs précis</h4>
        <div class="example">
            ❌ "Il fait beau."<br>
            ✅ "Le soleil brille dans un ciel <strong>azur</strong>."
        </div>

        <h3>À retenir</h3>
        <p>📌 Fais toujours un brouillon ! 📝</p>
        <p>📌 Relis et corrige systématiquement ✔️</p>
        <p>📌 Varie ton vocabulaire pour éviter les répétitions 🔄</p>
        <p>📌 Lis beaucoup pour t'inspirer ! 📚</p>
    `
},

poesie: {
    title: "🎭 La Poésie",
    content: `
        <h3>Qu'est-ce que la poésie ?</h3>
        <p>La poésie est un <strong>texte qui joue avec les sons, les rythmes et les images</strong>. Elle exprime des émotions et des idées de façon artistique.</p>

        <h3>Structure d'un poème</h3>
        
        <h4>Le vers</h4>
        <p>Un vers est une <strong>ligne</strong> d'un poème :</p>
        <div class="example">
            <span style="color: #2196f3;">Dans le vieux parc solitaire et glacé</span> ← 1 vers
        </div>

        <h4>La strophe</h4>
        <p>Une strophe est un <strong>groupe de vers</strong> :</p>
        <div class="example">
            Dans le vieux parc solitaire et glacé<br>
            Deux spectres ont évoqué le passé<br>
            <em>(strophe de 2 vers = distique)</em>
        </div>

        <h4>Types de strophes</h4>
        <ul>
            <li><strong>Distique</strong> : 2 vers</li>
            <li><strong>Tercet</strong> : 3 vers</li>
            <li><strong>Quatrain</strong> : 4 vers</li>
            <li><strong>Quintil</strong> : 5 vers</li>
            <li><strong>Sizain</strong> : 6 vers</li>
        </ul>

        <h3>Les rimes</h3>
        <p>Les rimes sont des <strong>sons identiques</strong> à la fin des vers.</p>
        
        <h4>Types de rimes</h4>
        
        <h5>Rimes suivies (AABB)</h5>
        <div class="example">
            Maître Corbeau, sur un arbre perché, <strong>(A)</strong><br>
            Tenait en son bec un fromage. <strong>(B)</strong><br>
            Maître Renard, par l'odeur alléché, <strong>(A)</strong><br>
            Lui tint à peu près ce langage. <strong>(B)</strong>
        </div>

        <h5>Rimes croisées (ABAB)</h5>
        <div class="example">
            Il pleure dans mon cœur <strong>(A)</strong><br>
            Comme il pleut sur la ville ; <strong>(B)</strong><br>
            Quelle est cette langueur <strong>(A)</strong><br>
            Qui pénètre mon cœur ? <strong>(B)</strong>
        </div>

        <h5>Rimes embrassées (ABBA)</h5>
        <div class="example">
            Les sanglots longs <strong>(A)</strong><br>
            Des violons <strong>(B)</strong><br>
            De l'automne <strong>(B)</strong><br>
            Blessent mon cœur <strong>(A)</strong>
        </div>

        <h3>Le rythme</h3>
        <p>Le rythme est créé par le <strong>nombre de syllabes</strong> dans chaque vers.</p>

        <h4>Compter les syllabes</h4>
        <div class="example">
            De/main/, /dès/ l'au/be/, /à/ l'/heu/re/ où/ blan/chit/ la/ cam/pagne/<br>
            → 12 syllabes (alexandrin)
        </div>

        <h4>Principaux types de vers</h4>
        <ul>
            <li><strong>Octosyllabe</strong> : 8 syllabes</li>
            <li><strong>Décasyllabe</strong> : 10 syllabes</li>
            <li><strong>Alexandrin</strong> : 12 syllabes</li>
        </ul>

        <h3>Les figures de style</h3>
        
        <h4>La comparaison</h4>
        <p>Elle compare deux éléments avec un <strong>mot de comparaison</strong> (comme, tel que, pareil à) :</p>
        <div class="example">
            Il est fort <strong>comme</strong> un lion.<br>
            Elle est douce <strong>telle</strong> une brise.
        </div>

        <h4>La métaphore</h4>
        <p>Elle compare <strong>sans mot de comparaison</strong> :</p>
        <div class="example">
            Cet homme est <strong>un lion</strong>. (= il est courageux)<br>
            La vie est <strong>un long fleuve tranquille</strong>.
        </div>

        <h4>La personnification</h4>
        <p>Elle donne des <strong>caractéristiques humaines</strong> à un objet ou un animal :</p>
        <div class="example">
            Le vent <strong>chuchote</strong> dans les arbres.<br>
            La mer <strong>rugit</strong> de colère.
        </div>

        <h4>L'anaphore</h4>
        <p>Elle <strong>répète</strong> un mot en début de vers :</p>
        <div class="example">
            <strong>Mon</strong> ami, mon frère, mon guide<br>
            <strong>Mon</strong> compagnon de tous les jours
        </div>

        <h4>L'allitération</h4>
        <p>Elle répète le même <strong>son consonne</strong> :</p>
        <div class="example">
            Pour qui sont ces <strong>s</strong>erpents qui <strong>s</strong>ifflent <strong>s</strong>ur vos têtes ?
        </div>

        <h4>L'assonance</h4>
        <p>Elle répète le même <strong>son voyelle</strong> :</p>
        <div class="example">
            Tout m'afflige et me nuit et conspire à me nuire. (son [i])
        </div>

        <h3>Écrire un poème</h3>
        
        <h4>Étape 1 : Choisis un thème</h4>
        <p>Exemple : la nature, les saisons, les animaux, l'amitié, la joie, la tristesse</p>

        <h4>Étape 2 : Trouve des mots qui riment</h4>
        <div class="example">
            <strong>Thème :</strong> le printemps<br>
            <strong>Rimes :</strong> fleur/cœur, oiseau/beau, soleil/merveille
        </div>

        <h4>Étape 3 : Organise tes vers</h4>
        <p>Décide combien de strophes et de vers.</p>

        <h4>Étape 4 : Utilise des images</h4>
        <p>Ajoute des comparaisons, métaphores, etc.</p>

        <h4>Exemple de poème simple</h4>
        <div class="example" style="font-style: italic; padding: 1rem; background: #f9f9f9; border-left: 3px solid #2196f3;">
            Le printemps est arrivé, (A)<br>
            Les fleurs ont éclos dans le pré. (A)<br>
            Les oiseaux chantent à tue-tête, (B)<br>
            C'est le début de la fête ! (B)
        </div>

        <h3>Poèmes célèbres pour enfants</h3>
        <ul>
            <li><strong>Victor Hugo</strong> : "Demain, dès l'aube"</li>
            <li><strong>Jacques Prévert</strong> : "Déjeuner du matin"</li>
            <li><strong>Paul Verlaine</strong> : "Il pleure dans mon cœur"</li>
            <li><strong>Maurice Carême</strong> : "La lanterne magique"</li>
            <li><strong>Jean de La Fontaine</strong> : Les Fables</li>
        </ul>

        <h3>À retenir</h3>
        <p>📌 La poésie joue avec les sons et les images ! 🎵</p>
        <p>📌 Compte les syllabes pour respecter le rythme 🔢</p>
        <p>📌 Lis des poèmes à voix haute pour sentir la musique des mots 🗣️</p>
        <p>📌 Écris tes propres poèmes pour t'exprimer ! ✍️</p>
    `
}

// ============================================================================
// SECTION 3 : AJOUT DANS quizQuestions: { ... }
// ============================================================================

// Suite dans le prochain fichier (partie 2/2)...
