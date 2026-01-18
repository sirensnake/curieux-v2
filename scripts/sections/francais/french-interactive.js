class FrenchInteractive {
  constructor() {
    this.state = {
      hearts: 5,
      maxHearts: 5,
      streak: this.loadStreak(),
      xp: 0,
      level: 1,
      currentLesson: null,
      currentExerciseIndex: 0,
      exercises: [],
      curioHelpCount: 0
    };
    this.app = document.getElementById('app');
    this.sounds = this.initSounds();
    this.init();
  }

  initSounds() {
    return {
      correct: this.createSound('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3'),
      wrong: this.createSound('https://www.soundjay.com/button/sounds/button-09.mp3'),
      click: this.createSound('https://www.soundjay.com/button/sounds/button-16.mp3'),
      confetti: this.createSound('https://www.soundjay.com/misc/sounds/magic-chime-01.mp3')
    };
  }

  createSound(src) {
    const audio = new Audio(src);
    audio.volume = 0.3;
    return audio;
  }

  playSound(soundName) {
    try {
      this.sounds[soundName].currentTime = 0;
      this.sounds[soundName].play().catch(() => {});
    } catch(e) {}
  }

  async init() {
    try {
      const response = await fetch('scripts/sections/francais/data/lessons.json');
      this.lessonsData = await response.json();
      this.renderSelector();
    } catch (error) {
      console.error('❌ Erreur:', error);
    }
  }

  loadStreak() {
    const saved = localStorage.getItem('french_streak');
    if (!saved) return { current: 0, longest: 0, lastDate: null };
    const data = JSON.parse(saved);
    const today = new Date().toDateString();
    if (data.lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return data.lastDate === yesterday.toDateString() ? data : { current: 0, longest: data.longest, lastDate: null };
    }
    return data;
  }

  updateStreak() {
    const today = new Date().toDateString();
    if (this.state.streak.lastDate === today) return;
    this.state.streak.current++;
    this.state.streak.lastDate = today;
    if (this.state.streak.current > this.state.streak.longest) {
      this.state.streak.longest = this.state.streak.current;
    }
    localStorage.setItem('french_streak', JSON.stringify(this.state.streak));
  }

  renderSelector() {
    const themes = this.groupLessonsByTheme();
    this.app.innerHTML = `
      <div class="selector-container">
        <header class="stats-header">
          <div class="stat-item streak">
            <span class="icon">🔥</span>
            <span class="value">${this.state.streak.current}</span>
            <span class="label">jours</span>
          </div>
          <div class="stat-item hearts">
            <span class="hearts-display">${'❤️'.repeat(this.state.hearts)}</span>
          </div>
          <div class="stat-item xp">
            <span class="icon">⭐</span>
            <span class="value">Niveau ${this.state.level}</span>
          </div>
        </header>
        
        <div class="curio-welcome">
          <img src="images/curio-happy.png" alt="Curio" class="curio-avatar" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><text x=%2250%%22 y=%2250%%22 font-size=%2250%22 text-anchor=%22middle%22 dy=%22.3em%22>🦊</text></svg>'">
          <div class="curio-bubble">
            <p>Salut ! Je suis Curio 🦊<br>Choisis une leçon pour commencer !</p>
          </div>
        </div>
        
        <div class="selector-title">
          <h1>🇫🇷 Français Interactif</h1>
        </div>
        <div class="themes-grid">
          ${Object.entries(themes).map(([theme, lessons]) => this.renderThemeCard(theme, lessons)).join('')}
        </div>
      </div>
    `;
  }

  groupLessonsByTheme() {
    const themes = {};
    this.lessonsData.lessons.forEach(lesson => {
      if (!lesson.modes.interactive?.available) return;
      const theme = lesson.theme || 'autre';
      if (!themes[theme]) themes[theme] = [];
      themes[theme].push(lesson);
    });
    return themes;
  }

  renderThemeCard(theme, lessons) {
    const themeInfo = {
      grammaire: { icon: '📝', title: 'Grammaire', color: '#58cc02' },
      conjugaison: { icon: '🔄', title: 'Conjugaison', color: '#1cb0f6' },
      orthographe: { icon: '✏️', title: 'Orthographe', color: '#ce82ff' },
      vocabulaire: { icon: '📚', title: 'Vocabulaire', color: '#ff9600' }
    };
    const info = themeInfo[theme] || { icon: '📖', title: theme, color: '#999' };
    return `
      <div class="theme-card" style="--theme-color: ${info.color}">
        <div class="theme-icon">${info.icon}</div>
        <h3 class="theme-title">${info.title}</h3>
        <div class="theme-lessons">
          ${lessons.map(lesson => `
            <button class="lesson-btn" onclick="window.frenchApp.playSound('click'); window.frenchApp.startLesson('${lesson.id}')">
              <span class="lesson-title">${lesson.titleShort || lesson.title}</span>
              <span class="lesson-meta">
                <span class="xp-badge">+${lesson.xpReward} XP</span>
                <span class="duration">${lesson.duration} min</span>
              </span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  startLesson(lessonId) {
    if (this.state.hearts <= 0) {
      alert('Plus de cœurs ! Attends 30 minutes.');
      return;
    }
    const lesson = this.lessonsData.lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    this.state.currentLesson = lesson;
    this.state.exercises = lesson.modes.interactive.exercises;
    this.state.currentExerciseIndex = 0;
    this.state.curioHelpCount = 0;
    this.renderLesson();
  }

  renderLesson() {
    const lesson = this.state.currentLesson;
    const progress = ((this.state.currentExerciseIndex / this.state.exercises.length) * 100).toFixed(0);
    this.app.innerHTML = `
      <div class="lesson-container">
        <header class="lesson-header">
          <button class="back-btn" onclick="window.frenchApp.renderSelector()">← Retour</button>
          <div class="lesson-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <span class="progress-text">${this.state.currentExerciseIndex}/${this.state.exercises.length}</span>
          </div>
          <div class="lesson-stats">
            <span class="hearts-display">${'❤️'.repeat(this.state.hearts)}</span>
          </div>
        </header>
        
        <div class="curio-helper" id="curio-helper">
          <img src="images/curio-thinking.png" alt="Curio" class="curio-avatar-small" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><text x=%2250%%22 y=%2250%%22 font-size=%2240%22 text-anchor=%22middle%22 dy=%22.3em%22>🦊</text></svg>'">
          <button class="curio-help-btn" onclick="window.frenchApp.showCurioHelp()">
            💡 Aide de Curio
          </button>
        </div>
        
        <div class="exercise-area" id="exercise-zone"></div>
        
        <div id="confetti-container"></div>
      </div>
    `;
    this.renderExercise();
  }

  showCurioHelp() {
    const ex = this.state.exercises[this.state.currentExerciseIndex];
    if (!ex) return;
    
    this.state.curioHelpCount++;
    
    const hints = {
      qcm: "Lis bien chaque choix avant de répondre ! 🦊",
      fill: "Réfléchis au type de mot demandé. N'hésite pas à essayer ! 🦊",
      drag: "Commence par le début de la phrase, puis mets les mots dans l'ordre logique ! 🦊"
    };
    
    const hint = hints[ex.type] || "Tu peux le faire ! Prends ton temps 🦊";
    
    const curioHelper = document.getElementById('curio-helper');
    if (curioHelper) {
      const bubble = document.createElement('div');
      bubble.className = 'curio-hint-bubble';
      bubble.innerHTML = `<p>${hint}</p>`;
      curioHelper.appendChild(bubble);
      
      setTimeout(() => bubble.remove(), 5000);
    }
  }

  renderExercise() {
    if (this.state.currentExerciseIndex >= this.state.exercises.length) {
      this.endLesson();
      return;
    }
    const ex = this.state.exercises[this.state.currentExerciseIndex];
    const zone = document.getElementById('exercise-zone');
    zone.innerHTML = `
      <div class="exercise-content">
        <p class="instruction">${ex.instruction}</p>
        ${ex.sentence ? `<p class="sentence">${ex.sentence}</p>` : ''}
        <div id="exercise-input"></div>
        <div id="feedback"></div>
        <button class="skip-btn" onclick="window.frenchApp.skipExercise()">PASSER →</button>
      </div>
    `;
    const inputZone = document.getElementById('exercise-input');
    const feedback = document.getElementById('feedback');

    switch(ex.type) {
      case 'qcm': this.renderQCM(ex, inputZone, feedback); break;
      case 'fill': this.renderFill(ex, inputZone, feedback); break;
      case 'drag': this.renderDrag(ex, inputZone, feedback); break;
      default: this.skipExercise();
    }
  }

  renderQCM(ex, zone, feedback) {
    zone.innerHTML = `
      <div class="qcm-grid">
        ${ex.choices.map((choice, i) => `
          <button class="qcm-btn" data-answer="${choice}">${choice}</button>
        `).join('')}
      </div>
    `;
    zone.querySelectorAll('.qcm-btn').forEach(btn => {
      btn.onclick = () => {
        this.playSound('click');
        if (btn.dataset.answer === ex.answer) {
          btn.classList.add('correct');
          this.correctAnswer(feedback);
        } else {
          btn.classList.add('wrong');
          this.wrongAnswer(feedback);
        }
      };
    });
  }

  renderFill(ex, zone, feedback) {
    zone.innerHTML = `
      <input type="text" class="fill-input" placeholder="Ta réponse..." autofocus>
      <button class="check-btn">VÉRIFIER</button>
    `;
    const input = zone.querySelector('.fill-input');
    const btn = zone.querySelector('.check-btn');
    
    const acceptedAnswers = ex.acceptedAnswers || [ex.answer];
    
    const check = () => {
      this.playSound('click');
      const userAnswer = input.value.trim().toLowerCase();
      const isCorrect = acceptedAnswers.some(ans => ans.toLowerCase() === userAnswer);
      
      if (isCorrect) {
        input.classList.add('correct');
        this.correctAnswer(feedback);
      } else {
        input.classList.add('wrong');
        this.wrongAnswer(feedback);
      }
    };
    btn.onclick = check;
    input.onkeypress = (e) => { if (e.key === 'Enter') check(); };
  }

  renderDrag(ex, zone, feedback) {
    const shuffled = [...ex.words].sort(() => Math.random() - 0.5);
    const userOrder = [];
    
    const render = () => {
      zone.innerHTML = `
        <div class="drag-container">
          <div class="drag-pool">
            ${shuffled.filter(w => !userOrder.includes(w)).map(word => `
              <button class="drag-word" data-word="${word}">${word}</button>
            `).join('')}
          </div>
          <div class="drag-answer">
            ${userOrder.map((word, i) => `
              <button class="drag-placed" data-index="${i}">${word}</button>
            `).join('')}
          </div>
          <button class="check-btn" ${userOrder.length === ex.words.length ? '' : 'disabled'}>VÉRIFIER</button>
        </div>
      `;

      zone.querySelectorAll('.drag-word').forEach(btn => {
        btn.onclick = () => {
          this.playSound('click');
          userOrder.push(btn.dataset.word);
          render();
        };
      });

      zone.querySelectorAll('.drag-placed').forEach(btn => {
        btn.onclick = () => {
          this.playSound('click');
          userOrder.splice(parseInt(btn.dataset.index), 1);
          render();
        };
      });

      const checkBtn = zone.querySelector('.check-btn');
      if (checkBtn && !checkBtn.disabled) {
        checkBtn.onclick = () => {
          this.playSound('click');
          if (userOrder.join(' ') === ex.answer) {
            this.correctAnswer(feedback);
          } else {
            this.wrongAnswer(feedback);
            userOrder.length = 0;
            setTimeout(() => render(), 1500);
          }
        };
      }
    };

    render();
  }

  createConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffa07a', '#98d8c8'][Math.floor(Math.random() * 5)];
      container.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 3000);
    }
  }

  correctAnswer(feedbackEl) {
    this.playSound('correct');
    this.createConfetti();
    
    feedbackEl.innerHTML = `
      <div class="feedback correct">
        <img src="images/curio-happy.png" alt="Curio" class="curio-feedback" onerror="this.style.display='none'">
        <span>✅ Bravo ! Excellente réponse !</span>
      </div>
    `;
    
    this.state.xp += 10;
    this.updateStreak();
    
    setTimeout(() => {
      this.state.currentExerciseIndex++;
      this.renderExercise();
    }, 2000);
  }

  wrongAnswer(feedbackEl) {
    this.playSound('wrong');
    this.state.hearts--;
    
    if (this.state.hearts <= 0) {
      this.gameOver();
      return;
    }
    
    feedbackEl.innerHTML = `
      <div class="feedback wrong">
        <img src="images/curio-sad.png" alt="Curio" class="curio-feedback" onerror="this.style.display='none'">
        <span>❌ Pas tout à fait... Essaie encore !</span>
      </div>
    `;
    
    const heartsDisplay = document.querySelector('.lesson-stats .hearts-display');
    if (heartsDisplay) {
      heartsDisplay.textContent = '❤️'.repeat(this.state.hearts);
      heartsDisplay.classList.add('shake');
      setTimeout(() => heartsDisplay.classList.remove('shake'), 500);
    }
  }

  skipExercise() {
    this.playSound('click');
    if (this.state.hearts > 0) {
      this.state.hearts--;
      const heartsDisplay = document.querySelector('.lesson-stats .hearts-display');
      if (heartsDisplay) {
        heartsDisplay.textContent = '❤️'.repeat(this.state.hearts);
      }
    }
    this.state.currentExerciseIndex++;
    this.renderExercise();
  }

  endLesson() {
    this.playSound('confetti');
    this.createConfetti();
    
    const lesson = this.state.currentLesson;
    this.app.innerHTML = `
      <div class="completion-screen">
        <div class="completion-content">
          <img src="images/curio-celebrate.png" alt="Curio" class="curio-celebrate" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22150%22 height=%22150%22><text x=%2250%%22 y=%2250%%22 font-size=%22100%22 text-anchor=%22middle%22 dy=%22.3em%22>🦊🎉</text></svg>'">
          <div class="completion-icon">🎉</div>
          <h2>Leçon Terminée !</h2>
          <div class="curio-congratulations">
            <p>"Tu as été incroyable ! Continue comme ça !" - Curio 🦊</p>
          </div>
          <div class="completion-stats">
            <div class="stat">
              <span class="stat-value">+${lesson.xpReward}</span>
              <span class="stat-label">XP</span>
            </div>
            <div class="stat">
              <span class="stat-value">${this.state.hearts}</span>
              <span class="stat-label">❤️ restants</span>
            </div>
            <div class="stat">
              <span class="stat-value">${this.state.streak.current}</span>
              <span class="stat-label">🔥 jours</span>
            </div>
          </div>
          <button class="continue-btn" onclick="window.frenchApp.renderSelector()">Continuer</button>
        </div>
        <div id="confetti-container"></div>
      </div>
    `;
    
    this.createConfetti();
  }

  gameOver() {
    this.playSound('wrong');
    this.app.innerHTML = `
      <div class="gameover-screen">
        <div class="gameover-content">
          <img src="images/curio-sad.png" alt="Curio" class="curio-sad" onerror="this.style.display='none'">
          <div class="gameover-icon">💀</div>
          <h2>Plus de cœurs !</h2>
          <div class="curio-message">
            <p>"Ne t'inquiète pas ! Tes cœurs reviennent vite !" - Curio 🦊</p>
          </div>
          <p>Tu as gagné ${this.state.xp} XP</p>
          <p>Tes cœurs reviennent dans 30 minutes</p>
          <button class="retry-btn" onclick="location.reload()">Recommencer</button>
        </div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.frenchApp = new FrenchInteractive();
});