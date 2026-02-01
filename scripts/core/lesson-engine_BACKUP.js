/**
 * 🎮 LESSON ENGINE - Moteur de leçons Duolingo-style
 * Compatible avec toutes les sections : français, anglais, maths, sciences, histoire
 * Version : 2.0 - Système XP intégré
 */

class LessonEngine {
    constructor(lessons) {
        
        this.lessons = lessons;
        this.lesson = null;
        this.currentIndex = 0;
        this.audioEnabled = false;
        this.hintUsed = false;
        
        // Éléments DOM
        this.elements = {
            lessonsGrid: document.getElementById('lessons-grid'),
            lessonsList: document.getElementById('lessons-list'),
            lessonScreen: document.getElementById('lesson-screen'),
            progressFill: document.getElementById('progress-fill'),
            questionText: document.getElementById('question-text'),
            userInput: document.getElementById('user-input'),
            curioMsg: document.getElementById('curio-msg'),
            curioSprite: document.getElementById('curio-sprite-img'),
            soundToggle: document.getElementById('sound-toggle'),
            victoryModal: document.getElementById('victory-modal'),
            modalMsg: document.getElementById('modal-msg')
        };
        
        // Initialiser l'affichage
        this.renderLessons();
        this.setupEventListeners();
    }
    
    /**
     * 🎨 Affiche la grille de leçons
     */
    renderLessons() {
        if (!this.elements.lessonsGrid) return;
        
        this.elements.lessonsGrid.innerHTML = this.lessons.map((lesson, index) => `
            <div class="lesson-card" onclick="engine.startLesson(${index})" role="button" tabindex="0">
                <div class="card-icon">${lesson.emoji || lesson.icon || '📚'}</div>
                <div class="card-title">${lesson.title}</div>
            </div>
        `).join('');
        
    }
    
    /**
     * 🚀 Démarre une leçon
     */
    startLesson(index) {
        this.lesson = this.lessons[index];
        this.currentIndex = 0;
        this.hintUsed = false;
        
        
        // Masquer liste, afficher écran leçon
        this.elements.lessonsList.classList.add('hidden');
        this.elements.lessonScreen.classList.remove('hidden');
        
        // Charger premier exercice
        this.loadExercise(0);
    }
    
    /**
     * 📝 Charge un exercice
     */
    loadExercise(index) {
        if (!this.lesson || !this.lesson.exercises[index]) {
            console.error('❌ Exercice invalide:', index);
            return;
        }
        
        this.currentIndex = index;
        const exercise = this.lesson.exercises[index];
        
        // Mise à jour progression
        const progress = ((index) / this.lesson.exercises.length) * 100;
        this.elements.progressFill.style.width = progress + '%';
        
        // Affichage question
        this.elements.questionText.textContent = exercise.question;
        this.elements.userInput.value = '';
        this.elements.userInput.focus();
        
        // Reset Curio
        this.resetCurio();
        
    }
    
    /**
     * ✅ Valide la réponse
     */
    validate() {
        const userAnswer = this.elements.userInput.value.trim().toLowerCase();
        const exercise = this.lesson.exercises[this.currentIndex];
        
        if (!userAnswer) {
            this.playSoundEffect('error');
            return;
        }
        
        // Vérifier réponse
        const isCorrect = this.checkAnswer(userAnswer, exercise);
        
        if (isCorrect) {
            this.handleCorrectAnswer();
        } else {
            this.handleWrongAnswer();
        }
    }
    
    /**
     * 🔍 Vérifie la réponse
     */
    checkAnswer(userAnswer, exercise) {
        const correctAnswers = Array.isArray(exercise.answer) 
            ? exercise.answer 
            : [exercise.answer];
        
        return correctAnswers.some(answer => 
            userAnswer === answer.toString().toLowerCase()
        );
    }
    
    /**
     * ✅ Gère réponse correcte
     */
    handleCorrectAnswer() {
        
        // Feedback visuel
        this.flashScreen('#2ecc71');
        this.playSoundEffect('correct');
        this.showCurioReaction('happy');
        
        // Passage à l'exercice suivant
        setTimeout(() => {
            if (this.currentIndex < this.lesson.exercises.length - 1) {
                this.loadExercise(this.currentIndex + 1);
            } else {
                this.finish();
            }
        }, 800);
    }
    
    /**
     * ❌ Gère réponse incorrecte
     */
    handleWrongAnswer() {
        
        // Feedback visuel
        this.flashScreen('#e74c3c');
        this.playSoundEffect('error');
        this.showCurioReaction('sad');
        
        // Effacer champ
        this.elements.userInput.value = '';
        this.elements.userInput.focus();
    }
    
    /**
     * 💡 Affiche un indice
     */
    showHint() {
        const exercise = this.lesson.exercises[this.currentIndex];
        
        if (!exercise.hint) {
            this.elements.curioMsg.textContent = "Désolé, pas d'indice pour cet exercice !";
            this.playSoundEffect('hint');
            return;
        }
        
        if (!this.hintUsed) {
            this.elements.curioMsg.textContent = exercise.hint;
            this.hintUsed = true;
            this.playSoundEffect('hint');
            this.showCurioReaction('thinking');
            
        } else {
            this.elements.curioMsg.textContent = "Je t'ai déjà aidé ! À toi de jouer maintenant 😊";
            this.playSoundEffect('hint');
        }
    }
    
    /**
     * 🔊 Active/désactive l'audio
     */
    enableAudio() {
        this.audioEnabled = !this.audioEnabled;
        
        if (this.elements.soundToggle) {
            this.elements.soundToggle.textContent = this.audioEnabled ? '🔊' : '🔇';
            this.elements.soundToggle.classList.toggle('off', !this.audioEnabled);
        }
        
    }
    
    /**
     * 🎵 Joue un effet sonore
     */
    playSoundEffect(type) {
        if (!this.audioEnabled) return;
        
        const frequencies = {
            correct: [523, 659, 784],
            error: [200, 150],
            hint: [440, 554],
            victory: [523, 659, 784, 1046]
        };
        
        const freq = frequencies[type] || [440];
        
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            freq.forEach((f, i) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = f;
                oscillator.type = 'square';
                
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                
                oscillator.start(audioContext.currentTime + i * 0.1);
                oscillator.stop(audioContext.currentTime + i * 0.1 + 0.1);
            });
        } catch (e) {
            console.warn('⚠️ Audio non supporté:', e);
        }
    }
    
    /**
     * 🎨 Flash d'écran coloré
     */
    flashScreen(color) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: ${color}; opacity: 0.3; z-index: 9999;
            pointer-events: none; transition: opacity 0.3s;
        `;
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 300);
        }, 100);
    }
    
    /**
     * 🦊 Affiche réaction de Curio
     */
    showCurioReaction(mood) {
        const sprites = {
            normal: 'assets/img/avatars/curio-normal.png',
            happy: 'assets/img/avatars/curio-happy.png',
            sad: 'assets/img/avatars/curio-sad.png',
            thinking: 'assets/img/avatars/curio-thinking.png'
        };
        
        if (this.elements.curioSprite && sprites[mood]) {
            this.elements.curioSprite.src = sprites[mood];
            
            // Retour à normal après 2 secondes
            setTimeout(() => {
                this.elements.curioSprite.src = sprites.normal;
            }, 2000);
        }
    }
    
    /**
     * 🔄 Reset Curio
     */
    resetCurio() {
        this.elements.curioMsg.textContent = "Clique sur Curio pour un indice !";
        this.showCurioReaction('normal');
        this.hintUsed = false;
    }
    
    /**
     * 🏆 Termine la leçon
     */
    finish() {
        
        // Confetti animation
        this.playConfetti();
        
        // Afficher modal
        this.playSoundEffect('victory');
        
        setTimeout(() => {
            this.elements.victoryModal.classList.remove('hidden');
        }, 500);
    }
    
    /**
     * 🎉 Animation confetti - PLUIE DE CONFETTIS COLORÉS
     */
    playConfetti() {
        // Couleurs vives
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8', '#00b894', '#fdcb6e'];
        
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed; 
            top: 0; 
            left: 0; 
            right: 0; 
            bottom: 0;
            pointer-events: none; 
            z-index: 9998; 
            overflow: hidden;
        `;
        document.body.appendChild(container);
        
        // 🎊 150 confettis qui tombent du haut !
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                
                // Dimensions du confetti
                const width = 8 + Math.random() * 8; // 8-16px
                const height = 15 + Math.random() * 15; // 15-30px
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                // Position de départ (haut de l'écran, répartis sur toute la largeur)
                const startX = Math.random() * 100;
                
                confetti.style.cssText = `
                    position: absolute;
                    left: ${startX}%;
                    top: -20px;
                    width: ${width}px;
                    height: ${height}px;
                    background: ${color};
                    opacity: 0.9;
                    border-radius: 2px;
                    transform: rotate(${Math.random() * 360}deg);
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                `;
                
                container.appendChild(confetti);
                
                // Animation de chute avec dérive gauche/droite
                const duration = 2500 + Math.random() * 2000; // 2.5-4.5 secondes
                const drift = (Math.random() - 0.5) * 50; // Dérive -25 à +25
                const rotations = 3 + Math.random() * 5; // 3-8 tours
                
                confetti.animate([
                    { 
                        transform: `translateY(0) translateX(0) rotate(0deg)`,
                        opacity: 0.9
                    },
                    { 
                        transform: `translateY(50vh) translateX(${drift * 0.5}px) rotate(${rotations * 180}deg)`,
                        opacity: 0.8
                    },
                    { 
                        transform: `translateY(110vh) translateX(${drift}px) rotate(${rotations * 360}deg)`,
                        opacity: 0
                    }
                ], {
                    duration: duration,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    fill: 'forwards'
                });
                
            }, i * 10); // Étalement sur 1.5 secondes
        }
        
        // Nettoyage après 5 secondes
        setTimeout(() => container.remove(), 5000);
    }
    
    /**
     * ⌨️ Configuration événements clavier
     */
    setupEventListeners() {
        if (this.elements.userInput) {
            this.elements.userInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.validate();
                }
            });
        }
    }
}

