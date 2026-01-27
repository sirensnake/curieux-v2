// ========================================
// SECTION ANGLAIS - SYSTÈME COMPLET
// Le Monde des Curieux
// 96 questions (SANS Web Speech API)
// ========================================

console.log('🇬🇧 Initialisation Section Anglais...');

const SECTION_NAME = 'anglais';

// ========================================
// BASE DE DONNÉES - 96 QUESTIONS
// ========================================
const EDUCATIONAL_CONTENT = {
    family: {
        title: "Family & People", icon: "👨‍👩‍👧‍👦",
        exercises: [
            {q: "Comment dit-on 'mère' ?", o: ["Mother", "Father", "Sister", "Brother"], c: "Mother"},
            {q: "Comment dit-on 'père' ?", o: ["Father", "Mother", "Uncle", "Aunt"], c: "Father"},
            {q: "Comment dit-on 'frère' ?", o: ["Brother", "Sister", "Cousin", "Friend"], c: "Brother"},
            {q: "Comment dit-on 'sœur' ?", o: ["Sister", "Brother", "Mother", "Daughter"], c: "Sister"},
            {q: "Comment dit-on 'grand-mère' ?", o: ["Grandmother", "Grandfather", "Mother", "Aunt"], c: "Grandmother"},
            {q: "Comment dit-on 'fils' ?", o: ["Son", "Daughter", "Boy", "Child"], c: "Son"},
            {q: "Comment dit-on 'fille' ?", o: ["Daughter", "Son", "Girl", "Child"], c: "Daughter"},
            {q: "Comment dit-on 'bébé' ?", o: ["Baby", "Child", "Boy", "Girl"], c: "Baby"}
        ]
    },
    colors_numbers: {
        title: "Colors & Numbers", icon: "🎨",
        exercises: [
            {q: "Quelle couleur est 'red' ?", o: ["Rouge", "Bleu", "Vert", "Jaune"], c: "Rouge"},
            {q: "Quelle couleur est 'blue' ?", o: ["Bleu", "Rouge", "Vert", "Noir"], c: "Bleu"},
            {q: "Quelle couleur est 'green' ?", o: ["Vert", "Rouge", "Jaune", "Orange"], c: "Vert"},
            {q: "Quelle couleur est 'yellow' ?", o: ["Jaune", "Bleu", "Rouge", "Blanc"], c: "Jaune"},
            {q: "Comment dit-on 'un' ?", o: ["One", "Two", "Three", "Four"], c: "One"},
            {q: "Comment dit-on 'cinq' ?", o: ["Five", "Four", "Six", "Seven"], c: "Five"},
            {q: "Comment dit-on 'dix' ?", o: ["Ten", "Nine", "Eleven", "Twelve"], c: "Ten"},
            {q: "Quelle couleur est 'black' ?", o: ["Noir", "Blanc", "Gris", "Marron"], c: "Noir"}
        ]
    },
    animals: {
        title: "Animals", icon: "🐶",
        exercises: [
            {q: "Comment dit-on 'chien' ?", o: ["Dog", "Cat", "Bird", "Fish"], c: "Dog"},
            {q: "Comment dit-on 'chat' ?", o: ["Cat", "Dog", "Mouse", "Rat"], c: "Cat"},
            {q: "Comment dit-on 'oiseau' ?", o: ["Bird", "Fish", "Dog", "Cat"], c: "Bird"},
            {q: "Comment dit-on 'poisson' ?", o: ["Fish", "Bird", "Snake", "Frog"], c: "Fish"},
            {q: "Comment dit-on 'cheval' ?", o: ["Horse", "Cow", "Pig", "Sheep"], c: "Horse"},
            {q: "Comment dit-on 'éléphant' ?", o: ["Elephant", "Lion", "Tiger", "Bear"], c: "Elephant"},
            {q: "Comment dit-on 'souris' ?", o: ["Mouse", "Rat", "Cat", "Dog"], c: "Mouse"},
            {q: "Comment dit-on 'lion' ?", o: ["Lion", "Tiger", "Bear", "Wolf"], c: "Lion"}
        ]
    },
    food: {
        title: "Food & Drinks", icon: "🍎",
        exercises: [
            {q: "Comment dit-on 'pomme' ?", o: ["Apple", "Orange", "Banana", "Pear"], c: "Apple"},
            {q: "Comment dit-on 'pain' ?", o: ["Bread", "Cake", "Cookie", "Cheese"], c: "Bread"},
            {q: "Comment dit-on 'eau' ?", o: ["Water", "Milk", "Juice", "Tea"], c: "Water"},
            {q: "Comment dit-on 'lait' ?", o: ["Milk", "Water", "Coffee", "Tea"], c: "Milk"},
            {q: "Comment dit-on 'fromage' ?", o: ["Cheese", "Bread", "Butter", "Egg"], c: "Cheese"},
            {q: "Comment dit-on 'œuf' ?", o: ["Egg", "Chicken", "Fish", "Meat"], c: "Egg"},
            {q: "Comment dit-on 'banane' ?", o: ["Banana", "Apple", "Orange", "Grape"], c: "Banana"},
            {q: "Comment dit-on 'gâteau' ?", o: ["Cake", "Bread", "Cookie", "Pie"], c: "Cake"}
        ]
    },
    greetings: {
        title: "Greetings", icon: "👋",
        exercises: [
            {q: "Comment dit-on 'bonjour' ?", o: ["Hello", "Goodbye", "Thanks", "Please"], c: "Hello"},
            {q: "Comment dit-on 'au revoir' ?", o: ["Goodbye", "Hello", "See you", "Bye"], c: "Goodbye"},
            {q: "Comment dit-on 'merci' ?", o: ["Thank you", "Please", "Sorry", "Excuse me"], c: "Thank you"},
            {q: "Comment dit-on 's'il te plaît' ?", o: ["Please", "Thanks", "Sorry", "Hello"], c: "Please"},
            {q: "Comment dit-on 'oui' ?", o: ["Yes", "No", "Maybe", "Sure"], c: "Yes"},
            {q: "Comment dit-on 'non' ?", o: ["No", "Yes", "Maybe", "Never"], c: "No"},
            {q: "Comment dit-on 'désolé' ?", o: ["Sorry", "Thanks", "Please", "Excuse me"], c: "Sorry"},
            {q: "Comment dit-on 'bonne nuit' ?", o: ["Good night", "Good morning", "Good evening", "Goodbye"], c: "Good night"}
        ]
    },
    questions: {
        title: "Questions", icon: "❓",
        exercises: [
            {q: "Comment dit-on 'comment' ?", o: ["How", "What", "Where", "When"], c: "How"},
            {q: "Comment dit-on 'quoi' ?", o: ["What", "Who", "Where", "Why"], c: "What"},
            {q: "Comment dit-on 'où' ?", o: ["Where", "When", "Who", "Why"], c: "Where"},
            {q: "Comment dit-on 'qui' ?", o: ["Who", "What", "Where", "When"], c: "Who"},
            {q: "Comment dit-on 'pourquoi' ?", o: ["Why", "How", "What", "When"], c: "Why"},
            {q: "Comment dit-on 'quand' ?", o: ["When", "Where", "Why", "How"], c: "When"},
            {q: "Que signifie 'How are you?' ?", o: ["Comment vas-tu ?", "Où es-tu ?", "Qui es-tu ?", "Pourquoi ?"], c: "Comment vas-tu ?"},
            {q: "Que signifie 'What is your name?' ?", o: ["Quel est ton nom ?", "Où habites-tu ?", "Quel âge as-tu ?", "Comment vas-tu ?"], c: "Quel est ton nom ?"}
        ]
    },
    school: {
        title: "At School", icon: "🏫",
        exercises: [
            {q: "Comment dit-on 'école' ?", o: ["School", "Class", "Teacher", "Student"], c: "School"},
            {q: "Comment dit-on 'professeur' ?", o: ["Teacher", "Student", "Class", "School"], c: "Teacher"},
            {q: "Comment dit-on 'livre' ?", o: ["Book", "Pen", "Pencil", "Paper"], c: "Book"},
            {q: "Comment dit-on 'stylo' ?", o: ["Pen", "Pencil", "Book", "Eraser"], c: "Pen"},
            {q: "Comment dit-on 'crayon' ?", o: ["Pencil", "Pen", "Marker", "Crayon"], c: "Pencil"},
            {q: "Comment dit-on 'table' ?", o: ["Table", "Chair", "Desk", "Board"], c: "Table"},
            {q: "Comment dit-on 'chaise' ?", o: ["Chair", "Table", "Desk", "Bench"], c: "Chair"},
            {q: "Comment dit-on 'tableau' ?", o: ["Board", "Table", "Chair", "Desk"], c: "Board"}
        ]
    },
    time: {
        title: "Time & Days", icon: "🕐",
        exercises: [
            {q: "Comment dit-on 'lundi' ?", o: ["Monday", "Tuesday", "Sunday", "Friday"], c: "Monday"},
            {q: "Comment dit-on 'mardi' ?", o: ["Tuesday", "Monday", "Wednesday", "Thursday"], c: "Tuesday"},
            {q: "Comment dit-on 'mercredi' ?", o: ["Wednesday", "Tuesday", "Thursday", "Friday"], c: "Wednesday"},
            {q: "Comment dit-on 'jeudi' ?", o: ["Thursday", "Wednesday", "Friday", "Saturday"], c: "Thursday"},
            {q: "Comment dit-on 'vendredi' ?", o: ["Friday", "Thursday", "Saturday", "Sunday"], c: "Friday"},
            {q: "Comment dit-on 'samedi' ?", o: ["Saturday", "Friday", "Sunday", "Monday"], c: "Saturday"},
            {q: "Comment dit-on 'dimanche' ?", o: ["Sunday", "Saturday", "Monday", "Friday"], c: "Sunday"},
            {q: "Comment dit-on 'aujourd'hui' ?", o: ["Today", "Yesterday", "Tomorrow", "Now"], c: "Today"}
        ]
    },
    verbs: {
        title: "Action Verbs", icon: "🏃",
        exercises: [
            {q: "Comment dit-on 'manger' ?", o: ["Eat", "Drink", "Sleep", "Run"], c: "Eat"},
            {q: "Comment dit-on 'boire' ?", o: ["Drink", "Eat", "Sleep", "Walk"], c: "Drink"},
            {q: "Comment dit-on 'dormir' ?", o: ["Sleep", "Eat", "Wake", "Dream"], c: "Sleep"},
            {q: "Comment dit-on 'courir' ?", o: ["Run", "Walk", "Jump", "Fly"], c: "Run"},
            {q: "Comment dit-on 'marcher' ?", o: ["Walk", "Run", "Jump", "Sit"], c: "Walk"},
            {q: "Comment dit-on 'jouer' ?", o: ["Play", "Work", "Study", "Sleep"], c: "Play"},
            {q: "Comment dit-on 'lire' ?", o: ["Read", "Write", "Speak", "Listen"], c: "Read"},
            {q: "Comment dit-on 'écrire' ?", o: ["Write", "Read", "Draw", "Paint"], c: "Write"}
        ]
    },
    present: {
        title: "Present Simple", icon: "📝",
        exercises: [
            {q: "Complète: I ___ English", o: ["speak", "speaks", "speaking", "spoke"], c: "speak"},
            {q: "Complète: He ___ football", o: ["plays", "play", "playing", "played"], c: "plays"},
            {q: "Complète: She ___ to school", o: ["goes", "go", "going", "went"], c: "goes"},
            {q: "Complète: We ___ pizza", o: ["like", "likes", "liking", "liked"], c: "like"},
            {q: "Complète: They ___ happy", o: ["are", "is", "am", "be"], c: "are"},
            {q: "Complète: It ___ cold", o: ["is", "are", "am", "be"], c: "is"},
            {q: "Complète: You ___ my friend", o: ["are", "is", "am", "be"], c: "are"},
            {q: "Complète: I ___ a student", o: ["am", "is", "are", "be"], c: "am"}
        ]
    },
    pronouns: {
        title: "Pronouns", icon: "🔤",
        exercises: [
            {q: "Comment dit-on 'je' ?", o: ["I", "You", "He", "She"], c: "I"},
            {q: "Comment dit-on 'tu/vous' ?", o: ["You", "I", "We", "They"], c: "You"},
            {q: "Comment dit-on 'il' ?", o: ["He", "She", "It", "They"], c: "He"},
            {q: "Comment dit-on 'elle' ?", o: ["She", "He", "It", "We"], c: "She"},
            {q: "Comment dit-on 'nous' ?", o: ["We", "You", "They", "I"], c: "We"},
            {q: "Comment dit-on 'ils/elles' ?", o: ["They", "We", "You", "It"], c: "They"},
            {q: "Comment dit-on 'il/elle' (chose) ?", o: ["It", "He", "She", "They"], c: "It"},
            {q: "Quel pronom pour 'a cat' ?", o: ["It", "He", "She", "They"], c: "It"}
        ]
    },
    adjectives: {
        title: "Adjectives", icon: "🎯",
        exercises: [
            {q: "Comment dit-on 'grand' ?", o: ["Big", "Small", "Tall", "Short"], c: "Big"},
            {q: "Comment dit-on 'petit' ?", o: ["Small", "Big", "Little", "Tiny"], c: "Small"},
            {q: "Comment dit-on 'beau' ?", o: ["Beautiful", "Ugly", "Pretty", "Nice"], c: "Beautiful"},
            {q: "Comment dit-on 'heureux' ?", o: ["Happy", "Sad", "Angry", "Tired"], c: "Happy"},
            {q: "Comment dit-on 'triste' ?", o: ["Sad", "Happy", "Angry", "Tired"], c: "Sad"},
            {q: "Comment dit-on 'chaud' ?", o: ["Hot", "Cold", "Warm", "Cool"], c: "Hot"},
            {q: "Comment dit-on 'froid' ?", o: ["Cold", "Hot", "Warm", "Cool"], c: "Cold"},
            {q: "Comment dit-on 'rapide' ?", o: ["Fast", "Slow", "Quick", "Speed"], c: "Fast"}
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
            showCurioMessage('Level ' + this.data.level + '!');
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
// SONS (IDENTIQUES SECTIONS PRÉCÉDENTES)
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
    welcome: "Welcome! Let's learn English together!",
    startActivity: "Ready to learn English?",
    correct: "Great job!",
    incorrect: "Try again!",
    halfDone: "Keep going!",
    complete: "Well done!",
    noHearts: "No hearts left!",
    streak: "Keep your streak!"
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

console.log('✅ Anglais initialisé');
setTimeout(function() { showCurioMessage('welcome'); }, 2000);

// ========================================
// GESTION ACTIVITÉS
// ========================================
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
        '<div style="background: #f0f4ff; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">' +
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
            feedbackZone.innerHTML += '<button onclick="nextExercise()" class="btn-complete-activity" style="margin-top: 1rem;">➡️ Next</button>';
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
    if (percentage === 100) { message = 'Perfect!'; emoji = '🎉'; }
    else if (percentage >= 80) { message = 'Excellent!'; emoji = '🌟'; }
    else if (percentage >= 60) { message = 'Good job!'; emoji = '👏'; }
    else { message = 'Keep going!'; emoji = '💪'; }
    
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
window.AnglaisDebug = {
    addXP: function(amount) { window.xpSystem.addXP(SECTION_NAME, amount); },
    loseHeart: function() { window.heartsSystem.loseHeart(SECTION_NAME); },
    getInfo: function() {
        return {
            section: SECTION_NAME,
            xp: window.xpSystem.data.bySection[SECTION_NAME] || 0,
            level: window.xpSystem.data.level,
            hearts: window.heartsSystem.getHearts(SECTION_NAME),
            streak: window.streaksSystem.data.currentStreak
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

console.log('💡 Debug: AnglaisDebug.getInfo()');
