// ========================================
// SECTION SCIENCES - SYSTÈME COMPLET
// Le Monde des Curieux
// 96 questions CM1/CM2
// ========================================

console.log('🧪 Initialisation Section Sciences...');

const SECTION_NAME = 'sciences';

// ========================================
// BASE DE DONNÉES - 96 QUESTIONS
// ========================================
const EDUCATIONAL_CONTENT = {
    systeme_solaire: {
        title: "Système Solaire", icon: "🪐",
        exercises: [
            {q: "Quelle est l'étoile au centre du système solaire ?", o: ["Le Soleil", "La Lune", "Mars", "Jupiter"], c: "Le Soleil"},
            {q: "Combien de planètes compte le système solaire ?", o: ["8", "7", "9", "10"], c: "8"},
            {q: "Quelle est la planète la plus proche du Soleil ?", o: ["Mercure", "Vénus", "Terre", "Mars"], c: "Mercure"},
            {q: "Sur quelle planète vivons-nous ?", o: ["La Terre", "Mars", "Jupiter", "Vénus"], c: "La Terre"},
            {q: "Quelle planète est appelée la 'planète rouge' ?", o: ["Mars", "Vénus", "Jupiter", "Saturne"], c: "Mars"},
            {q: "Quelle planète possède des anneaux visibles ?", o: ["Saturne", "Jupiter", "Mars", "Terre"], c: "Saturne"},
            {q: "La Lune est le satellite naturel de quelle planète ?", o: ["La Terre", "Mars", "Jupiter", "Vénus"], c: "La Terre"},
            {q: "Quelle est la plus grosse planète du système solaire ?", o: ["Jupiter", "Saturne", "Terre", "Neptune"], c: "Jupiter"}
        ]
    },
    cycle_eau: {
        title: "Cycle de l'Eau", icon: "🌊",
        exercises: [
            {q: "Que se passe-t-il quand l'eau des océans chauffe ?", o: ["Elle s'évapore", "Elle gèle", "Elle coule", "Elle disparaît"], c: "Elle s'évapore"},
            {q: "Comment appelle-t-on la transformation de l'eau en vapeur ?", o: ["Évaporation", "Condensation", "Précipitation", "Infiltration"], c: "Évaporation"},
            {q: "Où va la vapeur d'eau qui monte dans le ciel ?", o: ["Elle forme des nuages", "Elle disparaît", "Elle retombe immédiatement", "Elle va dans l'espace"], c: "Elle forme des nuages"},
            {q: "Que se passe-t-il quand la vapeur d'eau refroidit ?", o: ["Elle se condense", "Elle s'évapore", "Elle brûle", "Elle gèle"], c: "Elle se condense"},
            {q: "Qu'est-ce que les précipitations ?", o: ["Pluie, neige, grêle", "Nuages", "Vapeur d'eau", "Arc-en-ciel"], c: "Pluie, neige, grêle"},
            {q: "Où retourne l'eau de pluie ?", o: ["Dans les rivières et océans", "Dans le ciel", "Elle disparaît", "Dans les arbres"], c: "Dans les rivières et océans"},
            {q: "Combien y a-t-il d'états de l'eau dans le cycle ?", o: ["3 états", "2 états", "4 états", "1 état"], c: "3 états"},
            {q: "Le cycle de l'eau se répète-t-il ?", o: ["Oui, constamment", "Non, jamais", "Parfois", "Une fois par an"], c: "Oui, constamment"}
        ]
    },
    volcans: {
        title: "Volcans & Séismes", icon: "🌋",
        exercises: [
            {q: "Qu'est-ce qu'un volcan ?", o: ["Une montagne qui crache du magma", "Une simple montagne", "Un trou dans le sol", "Une rivière de feu"], c: "Une montagne qui crache du magma"},
            {q: "Comment appelle-t-on la roche en fusion sous terre ?", o: ["Magma", "Lave", "Roche", "Vapeur"], c: "Magma"},
            {q: "Comment appelle-t-on le magma qui sort du volcan ?", o: ["Lave", "Magma", "Feu", "Fumée"], c: "Lave"},
            {q: "Qu'est-ce qu'un séisme ?", o: ["Un tremblement de terre", "Une éruption volcanique", "Un ouragan", "Une inondation"], c: "Un tremblement de terre"},
            {q: "Où se produisent la plupart des séismes ?", o: ["Aux frontières des plaques", "N'importe où", "Dans les océans", "Dans les villes"], c: "Aux frontières des plaques"},
            {q: "Avec quel instrument mesure-t-on les séismes ?", o: ["Sismographe", "Thermomètre", "Baromètre", "Boussole"], c: "Sismographe"},
            {q: "Tous les volcans sont-ils actifs ?", o: ["Non, certains sont éteints", "Oui, tous", "Aucun n'est actif", "Seulement en hiver"], c: "Non, certains sont éteints"},
            {q: "Quelle échelle mesure la puissance des séismes ?", o: ["Échelle de Richter", "Échelle de température", "Échelle de Beaufort", "Échelle métrique"], c: "Échelle de Richter"}
        ]
    },
    meteo: {
        title: "Météo & Climat", icon: "🌤️",
        exercises: [
            {q: "Qu'est-ce que la météo ?", o: ["Le temps qu'il fait", "La température seulement", "Les saisons", "Le climat"], c: "Le temps qu'il fait"},
            {q: "Avec quoi mesure-t-on la température ?", o: ["Thermomètre", "Baromètre", "Pluviomètre", "Hygromètre"], c: "Thermomètre"},
            {q: "Qu'est-ce qu'un nuage ?", o: ["Des gouttelettes d'eau en suspension", "De la fumée", "De la vapeur pure", "Du coton"], c: "Des gouttelettes d'eau en suspension"},
            {q: "Quel instrument mesure la pluie ?", o: ["Pluviomètre", "Thermomètre", "Baromètre", "Anémomètre"], c: "Pluviomètre"},
            {q: "Comment appelle-t-on le vent très fort et tournant ?", o: ["Tornade ou cyclone", "Brise", "Ouragan seulement", "Tempête"], c: "Tornade ou cyclone"},
            {q: "Quelle est la différence entre météo et climat ?", o: ["Météo = court terme, climat = long terme", "C'est pareil", "Météo = pluie, climat = soleil", "Aucune différence"], c: "Météo = court terme, climat = long terme"},
            {q: "Qu'est-ce que la rosée du matin ?", o: ["Condensation de l'humidité", "Petite pluie", "Brouillard", "Neige fondue"], c: "Condensation de l'humidité"},
            {q: "Quel instrument indique la direction du vent ?", o: ["Girouette", "Thermomètre", "Baromètre", "Pluviomètre"], c: "Girouette"}
        ]
    },
    plantes: {
        title: "Les Plantes", icon: "🌳",
        exercises: [
            {q: "Comment les plantes fabriquent-elles leur nourriture ?", o: ["Par photosynthèse", "En mangeant", "En buvant", "Par la terre"], c: "Par photosynthèse"},
            {q: "De quoi les plantes ont-elles besoin pour la photosynthèse ?", o: ["Lumière, eau, CO2", "Seulement de l'eau", "Seulement du soleil", "De la nourriture"], c: "Lumière, eau, CO2"},
            {q: "Quel gaz les plantes absorbent-elles ?", o: ["CO2 (dioxyde de carbone)", "O2 (oxygène)", "N2 (azote)", "H2 (hydrogène)"], c: "CO2 (dioxyde de carbone)"},
            {q: "Quel gaz les plantes rejettent-elles ?", o: ["O2 (oxygène)", "CO2 (dioxyde de carbone)", "N2 (azote)", "H2 (hydrogène)"], c: "O2 (oxygène)"},
            {q: "Quelle partie de la plante absorbe l'eau ?", o: ["Les racines", "Les feuilles", "Les fleurs", "La tige"], c: "Les racines"},
            {q: "Où se passe la photosynthèse ?", o: ["Dans les feuilles", "Dans les racines", "Dans les fleurs", "Dans la tige"], c: "Dans les feuilles"},
            {q: "À quoi servent les fleurs ?", o: ["À la reproduction", "À manger", "À boire", "À respirer"], c: "À la reproduction"},
            {q: "Comment les plantes transportent-elles l'eau ?", o: ["Par la tige", "Par les feuilles", "Par les racines", "Par l'air"], c: "Par la tige"}
        ]
    },
    chaines_alimentaires: {
        title: "Chaînes Alimentaires", icon: "🦋",
        exercises: [
            {q: "Qu'est-ce qu'une chaîne alimentaire ?", o: ["Qui mange qui", "Des animaux ensemble", "Des plantes", "Un repas"], c: "Qui mange qui"},
            {q: "Comment appelle-t-on les êtres vivants qui produisent leur nourriture ?", o: ["Producteurs", "Consommateurs", "Décomposeurs", "Prédateurs"], c: "Producteurs"},
            {q: "Que sont les plantes dans la chaîne alimentaire ?", o: ["Producteurs", "Consommateurs", "Décomposeurs", "Prédateurs"], c: "Producteurs"},
            {q: "Comment appelle-t-on les animaux qui mangent des plantes ?", o: ["Herbivores", "Carnivores", "Omnivores", "Décomposeurs"], c: "Herbivores"},
            {q: "Comment appelle-t-on les animaux qui mangent de la viande ?", o: ["Carnivores", "Herbivores", "Omnivores", "Producteurs"], c: "Carnivores"},
            {q: "Comment appelle-t-on les animaux qui mangent de tout ?", o: ["Omnivores", "Herbivores", "Carnivores", "Décomposeurs"], c: "Omnivores"},
            {q: "Quel est le rôle des décomposeurs ?", o: ["Recycler la matière morte", "Manger les plantes", "Chasser", "Produire"], c: "Recycler la matière morte"},
            {q: "Que se passe-t-il si un maillon disparaît ?", o: ["La chaîne est déséquilibrée", "Rien ne change", "Tout s'arrête", "D'autres apparaissent"], c: "La chaîne est déséquilibrée"}
        ]
    },
    corps_humain: {
        title: "Corps Humain", icon: "🫀",
        exercises: [
            {q: "Quel organe pompe le sang ?", o: ["Le cœur", "Les poumons", "Le cerveau", "L'estomac"], c: "Le cœur"},
            {q: "Quel organe nous permet de respirer ?", o: ["Les poumons", "Le cœur", "L'estomac", "Le foie"], c: "Les poumons"},
            {q: "Quel organe contrôle tout le corps ?", o: ["Le cerveau", "Le cœur", "Les poumons", "L'estomac"], c: "Le cerveau"},
            {q: "Où se passe la digestion ?", o: ["Dans l'estomac et intestins", "Dans le cœur", "Dans les poumons", "Dans le cerveau"], c: "Dans l'estomac et intestins"},
            {q: "Combien avons-nous de sens ?", o: ["5 sens", "3 sens", "7 sens", "4 sens"], c: "5 sens"},
            {q: "Quels sont les 5 sens ?", o: ["Vue, ouïe, odorat, goût, toucher", "Vue, ouïe, parole, marche, course", "Manger, boire, dormir, jouer, courir", "Penser, parler, écouter, voir, toucher"], c: "Vue, ouïe, odorat, goût, toucher"},
            {q: "Quel organe filtre le sang ?", o: ["Les reins", "Le cœur", "Les poumons", "Le foie"], c: "Les reins"},
            {q: "Quelle est la plus grande enveloppe du corps ?", o: ["La peau", "Les muscles", "Les os", "Le sang"], c: "La peau"}
        ]
    },
    squelette: {
        title: "Squelette & Muscles", icon: "🦴",
        exercises: [
            {q: "À quoi sert le squelette ?", o: ["Soutenir et protéger", "Faire bouger", "Respirer", "Digérer"], c: "Soutenir et protéger"},
            {q: "Combien d'os environ dans le corps adulte ?", o: ["206 os", "150 os", "300 os", "100 os"], c: "206 os"},
            {q: "Comment s'appelle l'os de la tête ?", o: ["Le crâne", "Le fémur", "La colonne", "Les côtes"], c: "Le crâne"},
            {q: "Que protège le crâne ?", o: ["Le cerveau", "Le cœur", "Les poumons", "L'estomac"], c: "Le cerveau"},
            {q: "Comment s'appelle l'os de la cuisse ?", o: ["Le fémur", "Le tibia", "L'humérus", "Le radius"], c: "Le fémur"},
            {q: "À quoi servent les muscles ?", o: ["À faire bouger le corps", "À protéger les os", "À respirer", "À digérer"], c: "À faire bouger le corps"},
            {q: "Que se passe-t-il quand un muscle se contracte ?", o: ["Il se raccourcit", "Il s'allonge", "Il se casse", "Il disparaît"], c: "Il se raccourcit"},
            {q: "Comment les muscles sont-ils reliés aux os ?", o: ["Par des tendons", "Par des os", "Par du sang", "Par de la peau"], c: "Par des tendons"}
        ]
    },
    etats_matiere: {
        title: "États de la Matière", icon: "💧",
        exercises: [
            {q: "Quels sont les 3 états de la matière ?", o: ["Solide, liquide, gaz", "Dur, mou, moyen", "Chaud, tiède, froid", "Petit, moyen, grand"], c: "Solide, liquide, gaz"},
            {q: "L'eau à l'état solide s'appelle :", o: ["Glace", "Vapeur", "Liquide", "Eau"], c: "Glace"},
            {q: "L'eau à l'état gazeux s'appelle :", o: ["Vapeur", "Glace", "Liquide", "Nuage"], c: "Vapeur"},
            {q: "Que se passe-t-il quand on chauffe de la glace ?", o: ["Elle fond (devient liquide)", "Elle gèle", "Elle disparaît", "Elle brûle"], c: "Elle fond (devient liquide)"},
            {q: "Que se passe-t-il quand on chauffe de l'eau ?", o: ["Elle s'évapore (devient gaz)", "Elle gèle", "Elle fond", "Elle se solidifie"], c: "Elle s'évapore (devient gaz)"},
            {q: "Que se passe-t-il quand on refroidit de l'eau ?", o: ["Elle gèle (devient solide)", "Elle bout", "Elle s'évapore", "Elle disparaît"], c: "Elle gèle (devient solide)"},
            {q: "À quelle température l'eau gèle-t-elle ?", o: ["0°C", "100°C", "50°C", "25°C"], c: "0°C"},
            {q: "À quelle température l'eau bout-elle ?", o: ["100°C", "0°C", "50°C", "200°C"], c: "100°C"}
        ]
    },
    electricite: {
        title: "Électricité", icon: "🔋",
        exercises: [
            {q: "Qu'est-ce qu'un circuit électrique ?", o: ["Un chemin pour le courant", "Une pile", "Une ampoule", "Un fil"], c: "Un chemin pour le courant"},
            {q: "Que faut-il pour qu'une ampoule brille ?", o: ["Un circuit fermé", "Un circuit ouvert", "Juste une pile", "Juste des fils"], c: "Un circuit fermé"},
            {q: "Qu'est-ce qu'un interrupteur ?", o: ["Il ouvre ou ferme le circuit", "Une pile", "Une ampoule", "Un fil"], c: "Il ouvre ou ferme le circuit"},
            {q: "Les matériaux qui laissent passer le courant sont :", o: ["Conducteurs", "Isolants", "Résistants", "Transparents"], c: "Conducteurs"},
            {q: "Les matériaux qui ne laissent pas passer le courant sont :", o: ["Isolants", "Conducteurs", "Transparents", "Métalliques"], c: "Isolants"},
            {q: "Le métal est-il conducteur ou isolant ?", o: ["Conducteur", "Isolant", "Les deux", "Ni l'un ni l'autre"], c: "Conducteur"},
            {q: "Le plastique est-il conducteur ou isolant ?", o: ["Isolant", "Conducteur", "Les deux", "Ni l'un ni l'autre"], c: "Isolant"},
            {q: "Dans quel sens circule le courant ?", o: ["De + vers -", "De - vers +", "Dans les deux sens", "Il ne circule pas"], c: "De + vers -"}
        ]
    },
    magnetisme: {
        title: "Magnétisme", icon: "🧲",
        exercises: [
            {q: "Qu'est-ce qu'un aimant ?", o: ["Un objet qui attire le fer", "Un métal", "Une pile", "Un plastique"], c: "Un objet qui attire le fer"},
            {q: "Combien de pôles possède un aimant ?", o: ["2 pôles", "1 pôle", "3 pôles", "4 pôles"], c: "2 pôles"},
            {q: "Comment s'appellent les pôles d'un aimant ?", o: ["Nord et Sud", "Haut et Bas", "Gauche et Droite", "Plus et Moins"], c: "Nord et Sud"},
            {q: "Que se passe-t-il entre deux pôles identiques ?", o: ["Ils se repoussent", "Ils s'attirent", "Rien", "Ils collent"], c: "Ils se repoussent"},
            {q: "Que se passe-t-il entre deux pôles différents ?", o: ["Ils s'attirent", "Ils se repoussent", "Rien", "Ils cassent"], c: "Ils s'attirent"},
            {q: "L'aimant attire-t-il le plastique ?", o: ["Non", "Oui", "Parfois", "Toujours"], c: "Non"},
            {q: "L'aimant attire-t-il le fer ?", o: ["Oui", "Non", "Parfois", "Jamais"], c: "Oui"},
            {q: "Comment s'appelle la force invisible de l'aimant ?", o: ["Force magnétique", "Force électrique", "Force de gravité", "Force du vent"], c: "Force magnétique"}
        ]
    },
    lumiere: {
        title: "Lumière & Ombres", icon: "💡",
        exercises: [
            {q: "Comment se propage la lumière ?", o: ["En ligne droite", "En zigzag", "En cercle", "Lentement"], c: "En ligne droite"},
            {q: "Qu'est-ce qu'une source de lumière ?", o: ["Un objet qui produit de la lumière", "Un miroir", "Une ombre", "Un objet noir"], c: "Un objet qui produit de la lumière"},
            {q: "Le Soleil est-il une source de lumière ?", o: ["Oui", "Non", "Parfois", "La nuit seulement"], c: "Oui"},
            {q: "La Lune produit-elle sa propre lumière ?", o: ["Non, elle reflète celle du Soleil", "Oui", "Parfois", "Seulement la nuit"], c: "Non, elle reflète celle du Soleil"},
            {q: "Qu'est-ce qu'une ombre ?", o: ["Zone sans lumière", "Zone avec lumière", "Un reflet", "Une couleur"], c: "Zone sans lumière"},
            {q: "Quand se forme une ombre ?", o: ["Quand un objet bloque la lumière", "Quand il fait noir", "Quand il pleut", "Quand il fait jour"], c: "Quand un objet bloque la lumière"},
            {q: "Qu'est-ce qu'un objet transparent ?", o: ["Il laisse passer la lumière", "Il bloque la lumière", "Il absorbe la lumière", "Il produit de la lumière"], c: "Il laisse passer la lumière"},
            {q: "Qu'est-ce qu'un objet opaque ?", o: ["Il bloque la lumière", "Il laisse passer la lumière", "Il produit de la lumière", "Il reflète tout"], c: "Il bloque la lumière"}
        ]
    }
};

// ========================================
// SYSTÈMES GAMIFIÉS
// ========================================
class XPSystem {
    constructor() {
        this.storageKey = 'lemondedescurieux_xp';
        this.data = this.load();
    }
    load() {
        const stored = localStorage.getItem(this.storageKey);
        if (!stored) {
            return {total: 0, bySection: {francais: 0, maths: 0, anglais: 0, sciences: 0, histoire: 0}, level: 1, xpToNextLevel: 200, history: [], lastActivity: null};
        }
        return JSON.parse(stored);
    }
    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        window.dispatchEvent(new CustomEvent('xp:updated', {detail: {section: SECTION_NAME, total: this.data.total, level: this.data.level}}));
    }
    addXP(section, amount) {
        const xpToAdd = Math.max(0, parseInt(amount) || 0);
        if (xpToAdd === 0) return;
        const previousLevel = this.data.level;
        if (!this.data.bySection[section]) this.data.bySection[section] = 0;
        this.data.bySection[section] += xpToAdd;
        this.data.total += xpToAdd;
        this.data.lastActivity = new Date().toISOString();
        this.recalculateLevel();
        this.save();
        this.updateDisplay();
        if (this.data.level > previousLevel) {
            showCurioMessage('Niveau ' + this.data.level + ' !');
        }
    }
    recalculateLevel() {
        let level = 1, totalNeeded = 0;
        const baseXP = 200, multiplier = 1.5;
        while (totalNeeded <= this.data.total) {
            const xpForLevel = Math.floor(baseXP * Math.pow(multiplier, level - 1));
            totalNeeded += xpForLevel;
            if (totalNeeded <= this.data.total) level++;
        }
        this.data.level = level;
        this.data.xpToNextLevel = Math.floor(baseXP * Math.pow(multiplier, level - 1));
    }
    updateDisplay() {
        const element = document.getElementById('xp-value');
        if (element) {
            element.textContent = 'Niv.' + this.data.level + ' • ' + (this.data.bySection[SECTION_NAME] || 0) + ' XP';
        }
    }
}

class StreaksSystem {
    constructor() {
        this.storageKey = 'lemondedescurieux_streaks';
        this.data = this.load();
    }
    load() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {currentStreak: 0, lastActivityDate: null};
    }
    save() { localStorage.setItem(this.storageKey, JSON.stringify(this.data)); }
    recordActivity() {
        const today = new Date().toDateString();
        if (this.data.lastActivityDate !== today) {
            this.data.currentStreak++;
            this.data.lastActivityDate = today;
            this.save();
            this.updateDisplay();
        }
    }
    updateDisplay() {
        const element = document.getElementById('streak-value');
        if (element) element.textContent = this.data.currentStreak;
    }
}

class HeartsSystem {
    constructor() {
        this.storageKey = 'lemondedescurieux_hearts';
        this.data = this.load();
    }
    load() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {bySection: {}};
    }
    save() { localStorage.setItem(this.storageKey, JSON.stringify(this.data)); }
    getHearts(section) {
        if (!this.data.bySection[section]) {
            this.data.bySection[section] = {current: 5, max: 5};
        }
        return this.data.bySection[section];
    }
    loseHeart(section) {
        const hearts = this.getHearts(section);
        if (hearts.current > 0) {
            hearts.current--;
            this.save();
            this.updateDisplay(section);
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
// SONS
// ========================================
function playSound(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const audioContext = new AudioContext();
        const sounds = {
            correct: function() {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain); gain.connect(audioContext.destination);
                osc.frequency.value = 800; osc.type = 'sine';
                gain.gain.setValueAtTime(0.3, audioContext.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                osc.start(audioContext.currentTime);
                osc.stop(audioContext.currentTime + 0.3);
            },
            incorrect: function() {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain); gain.connect(audioContext.destination);
                osc.frequency.value = 200; osc.type = 'sawtooth';
                gain.gain.setValueAtTime(0.3, audioContext.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                osc.start(audioContext.currentTime);
                osc.stop(audioContext.currentTime + 0.5);
            },
            complete: function() {
                [523, 659, 784].forEach(function(freq, i) {
                    const osc = audioContext.createOscillator();
                    const gain = audioContext.createGain();
                    osc.connect(gain); gain.connect(audioContext.destination);
                    osc.frequency.value = freq; osc.type = 'sine';
                    gain.gain.setValueAtTime(0.2, audioContext.currentTime + i * 0.15);
                    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.15 + 0.3);
                    osc.start(audioContext.currentTime + i * 0.15);
                    osc.stop(audioContext.currentTime + i * 0.15 + 0.3);
                });
            }
        };
        if (sounds[type]) sounds[type]();
    } catch (e) { console.error('Erreur son:', e); }
}

// ========================================
// BULLE CURIO
// ========================================
const CURIO_MESSAGES = {
    welcome: "Prêt à explorer les sciences ?",
    startActivity: "Commençons l'expérience !",
    correct: "Excellent !",
    incorrect: "Réessaie !",
    halfDone: "Continue comme ça !",
    complete: "Bravo scientifique !",
    noHearts: "Plus de cœurs !",
    streak: "Série maintenue !"
};

function showCurioMessage(messageKey, autoHide) {
    if (autoHide === undefined) autoHide = true;
    const bubble = document.getElementById('curio-help');
    const messageElement = document.getElementById('curio-message');
    if (!bubble || !messageElement) return;
    messageElement.textContent = CURIO_MESSAGES[messageKey] || messageKey;
    bubble.classList.add('visible');
    if (autoHide) {
        setTimeout(function() { bubble.classList.remove('visible'); }, 5000);
    }
}

function closeCurioHelp() {
    const bubble = document.getElementById('curio-help');
    if (bubble) bubble.classList.remove('visible');
}

// ========================================
// INITIALISATION
// ========================================
window.xpSystem = new XPSystem();
window.streaksSystem = new StreaksSystem();
window.heartsSystem = new HeartsSystem();

window.xpSystem.updateDisplay();
window.streaksSystem.updateDisplay();
window.heartsSystem.updateDisplay(SECTION_NAME);

console.log('✅ Sciences initialisé - 96 questions prêtes');
setTimeout(function() { showCurioMessage('welcome'); }, 2000);

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
    const content = EDUCATIONAL_CONTENT[activityId];
    if (!content) return;
    currentActivity = activityId;
    currentExerciseIndex = 0;
    currentScore = 0;
    showCurioMessage('startActivity');
    displayExercise();
}

function displayExercise() {
    const content = EDUCATIONAL_CONTENT[currentActivity];
    const ex = content.exercises[currentExerciseIndex];
    
    const modalContainer = document.getElementById('activity-modal');
    const modal = document.createElement('div');
    modal.className = 'activity-modal-overlay';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'activity-modal-content';
    
    contentDiv.innerHTML = '<h2 class="activity-modal-title">' + content.icon + ' ' + content.title + '</h2>' +
        '<p style="margin-bottom: 1rem; color: #666;">Question ' + (currentExerciseIndex + 1) + '/' + content.exercises.length + ' • Score : ' + currentScore + '/' + currentExerciseIndex + '</p>' +
        '<div style="background: #f0fff4; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">' +
        '<p style="font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">' + ex.q + '</p>' +
        '<div id="options-container" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>' +
        '</div>' +
        '<div id="feedback-zone" style="min-height: 60px;"></div>' +
        '<button onclick="closeActivity()" class="btn-close-activity">❌ Quitter</button>';
    
    modal.appendChild(contentDiv);
    modalContainer.innerHTML = '';
    modalContainer.appendChild(modal);
    
    const optionsContainer = document.getElementById('options-container');
    const shuffledOptions = shuffleArray(ex.o);
    shuffledOptions.forEach(function(option) {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', function() { checkAnswer(option); });
        optionsContainer.appendChild(btn);
    });
    
    if (currentExerciseIndex === Math.floor(content.exercises.length / 2)) {
        setTimeout(function() { showCurioMessage('halfDone'); }, 1000);
    }
}

function checkAnswer(selectedAnswer) {
    const content = EDUCATIONAL_CONTENT[currentActivity];
    const ex = content.exercises[currentExerciseIndex];
    const isCorrect = selectedAnswer === ex.c;
    
    const feedbackZone = document.getElementById('feedback-zone');
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.querySelectorAll('button').forEach(function(btn) { btn.disabled = true; });
    
    if (isCorrect) {
        currentScore++;
        playSound('correct');
        showCurioMessage('correct');
        feedbackZone.innerHTML = '<div style="background: #d4edda; padding: 1rem; border-radius: 8px; border: 2px solid #28a745;"><p style="color: #155724; font-weight: bold;">✅ Correct !</p></div>';
    } else {
        window.heartsSystem.loseHeart(SECTION_NAME);
        playSound('incorrect');
        showCurioMessage('incorrect');
        feedbackZone.innerHTML = '<div style="background: #f8d7da; padding: 1rem; border-radius: 8px; border: 2px solid #dc3545;"><p style="color: #721c24; font-weight: bold;">❌ Incorrect !</p><p style="color: #721c24;">La bonne réponse : <strong>' + ex.c + '</strong></p></div>';
        const hearts = window.heartsSystem.getHearts(SECTION_NAME);
        if (hearts.current === 0) setTimeout(function() { showCurioMessage('noHearts'); }, 1000);
    }
    
    setTimeout(function() {
        if (currentExerciseIndex < content.exercises.length - 1) {
            feedbackZone.innerHTML += '<button onclick="nextExercise()" class="btn-complete-activity" style="margin-top: 1rem;">➡️ Suivant</button>';
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
    
    let xpGained = currentScore * 10;
    if (percentage === 100) xpGained += 50;
    
    playSound('complete');
    window.xpSystem.addXP(SECTION_NAME, xpGained);
    window.streaksSystem.recordActivity();
    showCurioMessage('complete');
    showCompletionFeedback(currentScore, totalQuestions, xpGained);
}

function closeActivity() {
    document.getElementById('activity-modal').innerHTML = '';
    currentActivity = null;
    currentExerciseIndex = 0;
    currentScore = 0;
}

function showCompletionFeedback(score, total, xp) {
    const percentage = Math.round((score / total) * 100);
    let message = '', emoji = '';
    if (percentage === 100) { message = 'Parfait !'; emoji = '🎉'; }
    else if (percentage >= 80) { message = 'Excellent !'; emoji = '🌟'; }
    else if (percentage >= 60) { message = 'Bien joué !'; emoji = '👏'; }
    else { message = 'Continue !'; emoji = '💪'; }
    
    const feedbackContainer = document.getElementById('completion-feedback');
    const feedback = document.createElement('div');
    feedback.className = 'completion-feedback-overlay';
    feedback.innerHTML = '<div class="feedback-icon">' + emoji + '</div>' +
        '<div class="feedback-text">' + message + '</div>' +
        '<div style="font-size: 1.2rem; color: #666; margin: 1rem 0;">Score : ' + score + '/' + total + ' (' + percentage + '%)</div>' +
        '<div class="feedback-xp">+' + xp + ' XP</div>';
    feedbackContainer.appendChild(feedback);
    setTimeout(function() {
        feedbackContainer.innerHTML = '';
        closeActivity();
    }, 3000);
}

// ========================================
// DEBUG
// ========================================
window.SciencesDebug = {
    addXP: function(amount) { window.xpSystem.addXP(SECTION_NAME, amount); },
    loseHeart: function() { window.heartsSystem.loseHeart(SECTION_NAME); },
    getInfo: function() {
        return {
            section: SECTION_NAME,
            xp: window.xpSystem.data.bySection[SECTION_NAME] || 0,
            level: window.xpSystem.data.level,
            hearts: window.heartsSystem.getHearts(SECTION_NAME),
            streak: window.streaksSystem.data.currentStreak,
            totalQuestions: Object.values(EDUCATIONAL_CONTENT).reduce(function(sum, content) {
                return sum + content.exercises.length;
            }, 0)
        };
    },
    reset: function() {
        localStorage.removeItem('lemondedescurieux_xp');
        localStorage.removeItem('lemondedescurieux_streaks');
        localStorage.removeItem('lemondedescurieux_hearts');
        location.reload();
    },
    listActivities: function() { return Object.keys(EDUCATIONAL_CONTENT); },
    showCurio: function(msg) { showCurioMessage(msg); }
};

console.log('💡 Debug: SciencesDebug.getInfo()');
