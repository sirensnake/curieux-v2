// ========================================
// SYSTÈME COMPLET STANDALONE - FRANÇAIS
// Le Monde des Curieux
// Version : 12 leçons complètes
// ========================================

console.log('🇫🇷 Initialisation Section Français...');

const SECTION_NAME = 'francais';

// ========================================
// CONTENU ÉDUCATIF - BASE DE DONNÉES
// ========================================
const EDUCATIONAL_CONTENT = {
    homophones: {
        title: "Homophones",
        icon: "🔤",
        description: "Distingue les mots qui se prononcent pareil mais s'écrivent différemment",
        exercises: [
            {
                question: "Il ___ joué au foot.",
                options: ["a", "à"],
                correct: "a",
                explanation: "On utilise 'a' (verbe avoir) car on peut dire 'il avait joué'."
            },
            {
                question: "Je vais ___ l'école.",
                options: ["a", "à"],
                correct: "à",
                explanation: "'à' est une préposition (ne change pas avec le temps)."
            },
            {
                question: "Elle mange ___ dort.",
                options: ["et", "est"],
                correct: "et",
                explanation: "'et' relie deux actions (on ne peut pas dire 'était')."
            },
            {
                question: "Il ___ gentil.",
                options: ["et", "est"],
                correct: "est",
                explanation: "'est' vient du verbe être (on peut dire 'était')."
            },
            {
                question: "C'est ___ livre.",
                options: ["son", "sont"],
                correct: "son",
                explanation: "'son' indique la possession (son livre = le livre à lui)."
            },
            {
                question: "Ils ___ partis.",
                options: ["son", "sont"],
                correct: "sont",
                explanation: "'sont' vient du verbe être (ils étaient partis)."
            },
            {
                question: "Il ___ de la chance.",
                options: ["a", "à"],
                correct: "a",
                explanation: "Verbe avoir : il a (on peut dire 'il avait')."
            },
            {
                question: "Je pense ___ toi.",
                options: ["a", "à"],
                correct: "à",
                explanation: "'à' préposition : penser à quelqu'un."
            }
        ]
    },
    
    accords: {
        title: "Accords",
        icon: "✏️",
        description: "Accorde correctement les noms, adjectifs et participes passés",
        exercises: [
            {
                question: "Les filles sont ___",
                options: ["content", "contente", "contents", "contentes"],
                correct: "contentes",
                explanation: "Féminin pluriel : on ajoute 'e' puis 's'."
            },
            {
                question: "Le chat est ___",
                options: ["noir", "noire", "noirs", "noires"],
                correct: "noir",
                explanation: "Masculin singulier : pas d'accord."
            },
            {
                question: "Les pommes sont ___",
                options: ["rouge", "rouges"],
                correct: "rouges",
                explanation: "Pluriel : on ajoute 's'."
            },
            {
                question: "Elle a ___ un gâteau.",
                options: ["mangé", "mangée", "mangés", "mangées"],
                correct: "mangé",
                explanation: "Avec 'avoir', pas d'accord si COD après le verbe."
            },
            {
                question: "La lettre que j'ai ___",
                options: ["écrit", "écrite", "écrits", "écrites"],
                correct: "écrite",
                explanation: "COD 'que' (=la lettre) avant le verbe → accord féminin singulier."
            },
            {
                question: "Mes sœurs sont ___",
                options: ["parti", "partie", "partis", "parties"],
                correct: "parties",
                explanation: "Féminin pluriel avec 'être' : parties."
            },
            {
                question: "Les garçons ___ arrivés.",
                options: ["sont", "ont"],
                correct: "sont",
                explanation: "Arriver utilise l'auxiliaire ÊTRE."
            }
        ]
    },
    
    "cod-coi": {
        title: "COD / COI",
        icon: "🎯",
        description: "Identifie les compléments d'objet direct et indirect",
        exercises: [
            {
                question: "Dans 'Je mange une pomme', quel est le COD ?",
                options: ["Je", "mange", "une pomme"],
                correct: "une pomme",
                explanation: "COD répond à 'quoi ?' → Je mange QUOI ? Une pomme."
            },
            {
                question: "Dans 'Il parle à son ami', quel est le COI ?",
                options: ["Il", "parle", "à son ami"],
                correct: "à son ami",
                explanation: "COI répond à 'à qui ?' → Il parle À QUI ? À son ami."
            },
            {
                question: "Trouve le COD : 'Elle lit un livre'",
                options: ["Elle", "lit", "un livre"],
                correct: "un livre",
                explanation: "Elle lit QUOI ? → Un livre (COD)."
            },
            {
                question: "Trouve le COI : 'Nous téléphonons à Marie'",
                options: ["Nous", "téléphonons", "à Marie"],
                correct: "à Marie",
                explanation: "Nous téléphonons À QUI ? → À Marie (COI)."
            },
            {
                question: "Dans 'Tu donnes un cadeau à ta mère', le COD est :",
                options: ["un cadeau", "à ta mère"],
                correct: "un cadeau",
                explanation: "Tu donnes QUOI ? → Un cadeau (COD). À qui ? → À ta mère (COI)."
            },
            {
                question: "Dans 'Je pense à mes vacances', y a-t-il un COD ?",
                options: ["Oui", "Non"],
                correct: "Non",
                explanation: "Penser À = COI (pas de COD possible avec ce verbe)."
            }
        ]
    },
    
    present: {
        title: "Présent",
        icon: "⏰",
        description: "Conjugue les verbes au présent de l'indicatif",
        exercises: [
            {
                question: "Je ___ (manger)",
                options: ["mange", "manges", "mangent"],
                correct: "mange",
                explanation: "1ère personne du singulier → 'e' pour les verbes en -er."
            },
            {
                question: "Tu ___ (finir)",
                options: ["fini", "finis", "finit"],
                correct: "finis",
                explanation: "2ème personne du singulier → 'is' pour les verbes en -ir."
            },
            {
                question: "Il ___ (avoir)",
                options: ["a", "as", "ai"],
                correct: "a",
                explanation: "Verbe irrégulier : il a."
            },
            {
                question: "Nous ___ (être)",
                options: ["sommes", "êtes", "sont"],
                correct: "sommes",
                explanation: "Verbe irrégulier : nous sommes."
            },
            {
                question: "Vous ___ (aller)",
                options: ["allez", "allons", "vont"],
                correct: "allez",
                explanation: "Verbe irrégulier : vous allez."
            },
            {
                question: "Ils ___ (prendre)",
                options: ["prend", "prends", "prennent"],
                correct: "prennent",
                explanation: "3ème personne du pluriel : ils prennent (double 'n')."
            },
            {
                question: "Elle ___ (faire)",
                options: ["fait", "fais", "font"],
                correct: "fait",
                explanation: "Verbe irrégulier : elle fait."
            },
            {
                question: "Nous ___ (venir)",
                options: ["venons", "venez", "viennent"],
                correct: "venons",
                explanation: "Verbe irrégulier : nous venons."
            }
        ]
    },
    
    "passe-compose": {
        title: "Passé Composé",
        icon: "📅",
        description: "Conjugue avec être et avoir au passé composé",
        exercises: [
            {
                question: "J'___ mangé une pomme.",
                options: ["ai", "suis", "es"],
                correct: "ai",
                explanation: "Manger utilise l'auxiliaire AVOIR."
            },
            {
                question: "Elle ___ allée au parc.",
                options: ["a", "est", "ai"],
                correct: "est",
                explanation: "Aller utilise l'auxiliaire ÊTRE (+ accord : allée)."
            },
            {
                question: "Nous ___ partis tôt.",
                options: ["avons", "sommes", "êtes"],
                correct: "sommes",
                explanation: "Partir utilise ÊTRE (nous sommes partis)."
            },
            {
                question: "Tu ___ fini tes devoirs.",
                options: ["as", "es", "a"],
                correct: "as",
                explanation: "Finir utilise AVOIR (tu as fini)."
            },
            {
                question: "Ils ___ venus hier.",
                options: ["ont", "sont", "avons"],
                correct: "sont",
                explanation: "Venir utilise ÊTRE (ils sont venus)."
            },
            {
                question: "Vous ___ tombés.",
                options: ["avez", "êtes", "sont"],
                correct: "êtes",
                explanation: "Tomber utilise ÊTRE (vous êtes tombés)."
            },
            {
                question: "J'___ resté à la maison.",
                options: ["ai", "suis"],
                correct: "suis",
                explanation: "Rester utilise ÊTRE (je suis resté)."
            }
        ]
    },
    
    futur: {
        title: "Futur Simple",
        icon: "🔮",
        description: "Conjugue les verbes au futur simple",
        exercises: [
            {
                question: "Je ___ (manger) demain.",
                options: ["mangerai", "mangeras", "mangera"],
                correct: "mangerai",
                explanation: "Futur = infinitif + ai → mangerai."
            },
            {
                question: "Tu ___ (finir) ce soir.",
                options: ["finira", "finiras", "finirai"],
                correct: "finiras",
                explanation: "Futur = infinitif + as → finiras."
            },
            {
                question: "Il ___ (être) content.",
                options: ["sera", "seras", "serai"],
                correct: "sera",
                explanation: "Verbe irrégulier : il sera."
            },
            {
                question: "Nous ___ (avoir) du temps.",
                options: ["aurons", "aurez", "auront"],
                correct: "aurons",
                explanation: "Verbe irrégulier : nous aurons."
            },
            {
                question: "Vous ___ (aller) au cinéma.",
                options: ["irez", "irons", "iront"],
                correct: "irez",
                explanation: "Verbe irrégulier : vous irez."
            },
            {
                question: "Elles ___ (faire) leurs devoirs.",
                options: ["feront", "ferons", "ferez"],
                correct: "feront",
                explanation: "Verbe irrégulier : elles feront."
            }
        ]
    },
    
    orthographe: {
        title: "Orthographe",
        icon: "📝",
        description: "Écris correctement les mots difficiles",
        exercises: [
            {
                question: "Comment écrit-on : 'un ___ de fleurs' ?",
                options: ["bouquet", "bouqué", "bouquai"],
                correct: "bouquet",
                explanation: "Bouquet s'écrit avec -et à la fin."
            },
            {
                question: "L'orthographe correcte est :",
                options: ["apareil", "appareil", "apareil"],
                correct: "appareil",
                explanation: "Appareil prend 2 'p' et s'écrit -eil."
            },
            {
                question: "Comment écrit-on : 'Nous ___ à la plage' ?",
                options: ["allons", "alons"],
                correct: "allons",
                explanation: "Aller fait : nous allons (avec 2 'l')."
            },
            {
                question: "L'orthographe correcte est :",
                options: ["exercise", "exercice"],
                correct: "exercice",
                explanation: "Exercice s'écrit avec un 'c'."
            },
            {
                question: "Comment écrit-on : 'C'est ___ ' ?",
                options: ["nécéssaire", "nécessaire", "nessesaire"],
                correct: "nécessaire",
                explanation: "Nécessaire : 1 'n', 1 'c', 2 's'."
            },
            {
                question: "L'orthographe correcte est :",
                options: ["address", "adresse"],
                correct: "adresse",
                explanation: "Adresse prend 2 's' en français."
            },
            {
                question: "Comment écrit-on : 'Il est ___ ' ?",
                options: ["patient", "pacient"],
                correct: "patient",
                explanation: "Patient s'écrit avec 'ti' (comme patience)."
            },
            {
                question: "L'orthographe correcte est :",
                options: ["language", "langage"],
                correct: "langage",
                explanation: "Langage prend un seul 'g' en français."
            }
        ]
    },
    
    imparfait: {
        title: "Imparfait",
        icon: "📖",
        description: "Conjugue les verbes à l'imparfait",
        exercises: [
            {
                question: "Je ___ (jouer) au foot.",
                options: ["jouais", "jouait", "jouaient"],
                correct: "jouais",
                explanation: "Imparfait 1ère personne : radical + ais."
            },
            {
                question: "Tu ___ (finir) ton travail.",
                options: ["finissais", "finissait", "finissions"],
                correct: "finissais",
                explanation: "Imparfait 2ème personne : tu finissais."
            },
            {
                question: "Il ___ (être) content.",
                options: ["était", "étais", "étaient"],
                correct: "était",
                explanation: "Imparfait de être : il était."
            },
            {
                question: "Nous ___ (avoir) peur.",
                options: ["avons", "avions", "avaient"],
                correct: "avions",
                explanation: "Imparfait de avoir : nous avions."
            },
            {
                question: "Vous ___ (aller) à l'école.",
                options: ["alliez", "allions", "allaient"],
                correct: "alliez",
                explanation: "Imparfait de aller : vous alliez."
            },
            {
                question: "Elles ___ (faire) du sport.",
                options: ["faisais", "faisait", "faisaient"],
                correct: "faisaient",
                explanation: "Imparfait 3ème personne pluriel : elles faisaient."
            },
            {
                question: "Quand j'___ petit, je jouais dehors.",
                options: ["était", "étais"],
                correct: "étais",
                explanation: "1ère personne de l'imparfait : j'étais."
            }
        ]
    },
    
    pluriel: {
        title: "Pluriels",
        icon: "🔢",
        description: "Forme correctement le pluriel des noms",
        exercises: [
            {
                question: "Le pluriel de 'cheval' est :",
                options: ["chevals", "chevaux"],
                correct: "chevaux",
                explanation: "Les noms en -al font leur pluriel en -aux."
            },
            {
                question: "Le pluriel de 'œil' est :",
                options: ["œils", "yeux"],
                correct: "yeux",
                explanation: "Œil est irrégulier : le pluriel est yeux."
            },
            {
                question: "Le pluriel de 'chou' est :",
                options: ["chous", "choux"],
                correct: "choux",
                explanation: "Chou prend un 'x' au pluriel."
            },
            {
                question: "Le pluriel de 'bijou' est :",
                options: ["bijous", "bijoux"],
                correct: "bijoux",
                explanation: "Bijou prend un 'x' au pluriel."
            },
            {
                question: "Le pluriel de 'nez' est :",
                options: ["nez", "nezs"],
                correct: "nez",
                explanation: "Les mots en -z ne changent pas au pluriel."
            },
            {
                question: "Le pluriel de 'bateau' est :",
                options: ["bateaus", "bateaux"],
                correct: "bateaux",
                explanation: "Les noms en -eau prennent un 'x' au pluriel."
            },
            {
                question: "Le pluriel de 'festival' est :",
                options: ["festivals", "festivaux"],
                correct: "festivals",
                explanation: "Festival fait exception : festivals (avec 's')."
            }
        ]
    },
    
    vocabulaire: {
        title: "Vocabulaire",
        icon: "📚",
        description: "Enrichis ton vocabulaire avec les synonymes et contraires",
        exercises: [
            {
                question: "Un synonyme de 'content' est :",
                options: ["triste", "joyeux", "fatigué"],
                correct: "joyeux",
                explanation: "Joyeux est un synonyme de content (même sens)."
            },
            {
                question: "Le contraire de 'grand' est :",
                options: ["petit", "gros", "long"],
                correct: "petit",
                explanation: "Petit est l'antonyme (contraire) de grand."
            },
            {
                question: "Un synonyme de 'maison' est :",
                options: ["voiture", "habitation", "jardin"],
                correct: "habitation",
                explanation: "Habitation est un synonyme de maison."
            },
            {
                question: "Le contraire de 'chaud' est :",
                options: ["tiède", "froid", "brûlant"],
                correct: "froid",
                explanation: "Froid est l'antonyme de chaud."
            },
            {
                question: "Un synonyme de 'intelligent' est :",
                options: ["stupide", "malin", "lent"],
                correct: "malin",
                explanation: "Malin est un synonyme d'intelligent."
            },
            {
                question: "Le contraire de 'monter' est :",
                options: ["grimper", "descendre", "sauter"],
                correct: "descendre",
                explanation: "Descendre est l'antonyme de monter."
            },
            {
                question: "Un synonyme de 'rapide' est :",
                options: ["lent", "véloce", "fatigué"],
                correct: "véloce",
                explanation: "Véloce est un synonyme de rapide."
            },
            {
                question: "Le contraire de 'commencer' est :",
                options: ["débuter", "finir", "continuer"],
                correct: "finir",
                explanation: "Finir est l'antonyme de commencer."
            }
        ]
    },
    
    expressions: {
        title: "Expressions Françaises",
        icon: "🎭",
        description: "Comprends les expressions idiomatiques",
        exercises: [
            {
                question: "'Avoir un chat dans la gorge' signifie :",
                options: ["Avoir faim", "Avoir la voix enrouée", "Avoir peur"],
                correct: "Avoir la voix enrouée",
                explanation: "Cette expression signifie avoir du mal à parler clairement."
            },
            {
                question: "'Poser un lapin' signifie :",
                options: ["Adopter un animal", "Ne pas venir à un rendez-vous", "Faire une farce"],
                correct: "Ne pas venir à un rendez-vous",
                explanation: "Poser un lapin = faire attendre quelqu'un en ne venant pas."
            },
            {
                question: "'Tomber dans les pommes' signifie :",
                options: ["S'évanouir", "Tomber par terre", "Manger des fruits"],
                correct: "S'évanouir",
                explanation: "Cette expression signifie perdre connaissance."
            },
            {
                question: "'Casser les pieds' signifie :",
                options: ["Se blesser", "Ennuyer quelqu'un", "Marcher vite"],
                correct: "Ennuyer quelqu'un",
                explanation: "Casser les pieds = embêter, agacer quelqu'un."
            },
            {
                question: "'Avoir le cafard' signifie :",
                options: ["Avoir un insecte", "Être triste", "Boire du café"],
                correct: "Être triste",
                explanation: "Avoir le cafard = être déprimé, avoir du vague à l'âme."
            },
            {
                question: "'Mettre son grain de sel' signifie :",
                options: ["Cuisiner", "Donner son avis non sollicité", "Saler un plat"],
                correct: "Donner son avis non sollicité",
                explanation: "Mettre son grain de sel = s'immiscer dans une conversation."
            },
            {
                question: "'Raconter des salades' signifie :",
                options: ["Faire la cuisine", "Dire des mensonges", "Parler de légumes"],
                correct: "Dire des mensonges",
                explanation: "Raconter des salades = dire des histoires inventées."
            },
            {
                question: "'Avoir d'autres chats à fouetter' signifie :",
                options: ["Aimer les animaux", "Avoir des choses plus importantes à faire", "Être cruel"],
                correct: "Avoir des choses plus importantes à faire",
                explanation: "Cette expression signifie avoir des priorités plus importantes."
            }
        ]
    },
    
    "familles-mots": {
        title: "Familles de Mots",
        icon: "🔠",
        description: "Découvre les préfixes et suffixes",
        exercises: [
            {
                question: "Le préfixe 'dé-' dans 'défaire' signifie :",
                options: ["Faire encore", "Faire le contraire", "Faire avec"],
                correct: "Faire le contraire",
                explanation: "Le préfixe 'dé-' indique une action contraire."
            },
            {
                question: "Le suffixe '-able' dans 'mangeable' signifie :",
                options: ["Qui peut être mangé", "Qui aime manger", "Qui refuse de manger"],
                correct: "Qui peut être mangé",
                explanation: "Le suffixe '-able' signifie 'qui peut être'."
            },
            {
                question: "Le préfixe 're-' dans 'refaire' signifie :",
                options: ["Faire une fois", "Faire à nouveau", "Ne pas faire"],
                correct: "Faire à nouveau",
                explanation: "Le préfixe 're-' indique la répétition."
            },
            {
                question: "Le suffixe '-eur' dans 'chanteur' indique :",
                options: ["Une action", "Celui qui fait l'action", "Un lieu"],
                correct: "Celui qui fait l'action",
                explanation: "Le suffixe '-eur' désigne celui qui fait l'action."
            },
            {
                question: "Le préfixe 'in-' dans 'invisible' signifie :",
                options: ["Très visible", "Pas visible", "Un peu visible"],
                correct: "Pas visible",
                explanation: "Le préfixe 'in-' indique la négation."
            },
            {
                question: "Le suffixe '-ment' dans 'rapidement' forme :",
                options: ["Un nom", "Un adverbe", "Un adjectif"],
                correct: "Un adverbe",
                explanation: "Le suffixe '-ment' transforme un adjectif en adverbe."
            },
            {
                question: "Le préfixe 'pré-' dans 'prévoir' signifie :",
                options: ["Avant", "Après", "Pendant"],
                correct: "Avant",
                explanation: "Le préfixe 'pré-' signifie 'avant'."
            },
            {
                question: "Le suffixe '-tion' dans 'création' forme :",
                options: ["Un verbe", "Un nom", "Un adjectif"],
                correct: "Un nom",
                explanation: "Le suffixe '-tion' transforme un verbe en nom."
            }
        ]
    }
};

// ========================================
// XP SYSTEM
// ========================================
class XPSystem {
    constructor() {
        this.storageKey = 'lemondedescurieux_xp';
        this.data = this.load();
        console.log('📊 XP System initialisé:', this.data);
    }
    
    load() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {
            total: 0,
            bySection: {}
        };
    }
    
    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }
    
    addXP(section, amount) {
        if (!this.data.bySection[section]) {
            this.data.bySection[section] = 0;
        }
        
        this.data.bySection[section] += amount;
        this.data.total += amount;
        
        this.save();
        this.updateDisplay();
        
        console.log(`✅ +${amount} XP (${section}) | Total: ${this.data.total} XP`);
    }
    
    getBySection(section) {
        return this.data.bySection[section] || 0;
    }
    
    getTotal() {
        return this.data.total;
    }
    
    getLevel() {
        return Math.floor(this.data.total / 200) + 1;
    }
    
    updateDisplay() {
        const element = document.getElementById('xp-value');
        
        if (!element) {
            console.error('❌ Élément xp-value non trouvé !');
            return;
        }
        
        const level = this.getLevel();
        const xp = this.getBySection(SECTION_NAME);
        const text = `Niv.${level} • ${xp} XP`;
        
        element.textContent = text;
        console.log('🎨 Badge XP mis à jour:', text);
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
    welcome: "Bienvenue ! Je suis Curio, ton guide. Choisis une activité pour commencer !",
    startActivity: "Super choix ! Lis bien chaque question avant de répondre.",
    correct: "Bravo ! Tu as bien compris !",
    incorrect: "Ce n'est pas grave, on apprend de ses erreurs !",
    halfDone: "Tu es à mi-chemin ! Continue comme ça !",
    complete: "Félicitations ! Tu as terminé l'activité !",
    noHearts: "Attention, tu n'as plus de cœurs ! Repose-toi un peu.",
    streak: "Tu as maintenu ton streak ! Reviens demain !"
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

console.log('✅ Section Français initialisée avec succès !');
console.log('📚 12 leçons disponibles:', Object.keys(EDUCATIONAL_CONTENT));

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
        <div style="background: #f1faee; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
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
    
    // CRÉER LES BOUTONS AVEC DES EVENT LISTENERS (pas onclick inline)
    const optionsContainer = document.getElementById('options-container');
    
    exercise.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.style.cssText = 'padding: 1rem; background: white; border: 2px solid #2a9d8f; border-radius: 8px; cursor: pointer; font-size: 1rem; transition: all 0.3s ease;';
        
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
window.FrancaisDebug = {
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

console.log('💡 Debug disponible : FrancaisDebug.listActivities()');