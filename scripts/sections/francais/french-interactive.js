/**
 * 🇫🇷 French Interactive - Architecture Complète Duolingo-style
 * Compatible avec lessons.json existant
 */

class FrenchInteractive {
  constructor() {
    // État application
    this.state = {
      view: 'selector', // 'selector' ou 'lesson'
      hearts: 5,
      maxHearts: 5,
      streak: this.loadStreak(),
      xp: 0,
      level: 1,
      currentLesson: null,
      currentExerciseIndex: 0,
      exercises: []
    };

    // Éléments DOM
    this.app = document.getElementById('app');
    
    // Chargement initial
    this.init();
  }

  async init() {
    try {
      // Charger les leçons
      const response = await fetch('scripts/sections/francais/data/lessons.json');
      this.lessonsData = await response.json();
      
      // Afficher sélecteur
      this.renderSelector();
      
      console.log('✅ French Interactive initialisé');
    } catch (error) {
      console.error('❌ Erreur chargement:', error);
      this.showError('Erreur de chargement des leçons');
    }
  }

  // ==================== GESTION STREAKS ====================
  loadStreak() {
    const saved = localStorage.getItem('french_streak');
    if (!saved) return { current: 0, longest: 0, lastDate: null };
    
    const data = JSON.parse(saved);
    const today = new Date().toDateString();
    
    if (data.lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (data.lastDate === yesterday.toDateString()) {
        // Continue le streak
        return data;
      } else {
        // Streak cassé
        return { current: 0, longest: data.longest, lastDate: null };
      }
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

  // ==================== RENDU SÉLECTEUR ====================
  renderSelector() {
    this.state.view = 'selector';
    
    const themes = this.groupLessonsByTheme();
    
    this.app.innerHTML = `
      <div class="selector-container">
        <!-- Header avec stats -->
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

        <!-- Titre -->
        <div class="selector-title">
          <h1>🇫🇷 Français Interactif</h1>
          <p>Choisis un thème pour commencer</p>
        </div>

        <!-- Grille de thèmes -->
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
            <button class="lesson-btn" onclick="window.frenchApp.startLesson('${lesson.id}')">
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

  // ==================== GESTION LEÇONS ====================
  startLesson(lessonId) {
    if (this.state.hearts <= 0) {
      this.showNoHeartsModal();
      return;
    }

    const lesson = this.lessonsData.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    this.state.currentLesson = lesson;
    this.state.exercises = lesson.modes.interactive.exercises;
    this.state.currentExerciseIndex = 0;
    this.state.view = 'lesson';

    this.renderLesson();
  }

  renderLesson() {
    const lesson = this.state.currentLesson;
    const progress = ((this.state.currentExerciseIndex / this.state.exercises.length) * 100).toFixed(0);

    this.app.innerHTML = `
      <div class="lesson-container">
        <!-- Header leçon -->
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

        <!-- Zone exercice -->
        <div class="exercise-area" id="exercise-zone"></div>
      </div>
    `;

    this.renderExercise();
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
      </div>
    `;

    const inputZone = document.getElementById('exercise-input');
    const feedback = document.getElementById('feedback');

    switch(ex.type) {
      case 'identify':
        this.renderIdentify(ex, inputZone, feedback);
        break;
      case 'fill':
        this.renderFill(ex, inputZone, feedback);
        break;
      case 'match':
        this.renderMatch(ex, inputZone, feedback);
        break;
      default:
        this.skipExercise();
    }
  }

  renderIdentify(ex, zone, feedback) {
    zone.innerHTML = `
      <div class="tokens-grid">
        ${ex.words.map(word => `
          <button class="token-btn" data-word="${word}">${word}</button>
        `).join('')}
      </div>
    `;

    zone.querySelectorAll('.token-btn').forEach(btn => {
      btn.onclick = () => {
        const word = btn.dataset.word;
        if (word === ex.answer) {
          this.correctAnswer(feedback);
        } else {
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

    const check = () => {
      if (input.value.trim().toLowerCase() === ex.answer.toLowerCase()) {
        this.correctAnswer(feedback);
      } else {
        this.wrongAnswer(feedback);
      }
    };

    btn.onclick = check;
    input.onkeypress = (e) => { if (e.key === 'Enter') check(); };
  }

  renderMatch(ex, zone, feedback) {
    let selectedLeft = null;
    let matched = new Set();

    const render = () => {
      zone.innerHTML = `
        <div class="match-grid">
          <div class="match-column left">
            ${ex.pairs.map((pair, i) => `
              <button class="match-btn ${matched.has(i) ? 'matched' : ''} ${selectedLeft === i ? 'selected' : ''}" 
                      data-index="${i}" 
                      ${matched.has(i) ? 'disabled' : ''}>
                ${pair.left}
              </button>
            `).join('')}
          </div>
          <div class="match-column right">
            ${ex.pairs.map((pair, i) => `
              <button class="match-btn ${matched.has(i) ? 'matched' : ''}" 
                      data-index="${i}"
                      ${matched.has(i) ? 'disabled' : ''}>
                ${pair.right}
              </button>
            `).join('')}
          </div>
        </div>
      `;

      // Events gauche
      zone.querySelectorAll('.left .match-btn').forEach(btn => {
        btn.onclick = () => {
          selectedLeft = parseInt(btn.dataset.index);
          render();
        };
      });

      // Events droite
      zone.querySelectorAll('.right .match-btn').forEach(btn => {
        btn.onclick = () => {
          if (selectedLeft === null) return;
          
          const rightIndex = parseInt(btn.dataset.index);
          if (selectedLeft === rightIndex) {
            matched.add(selectedLeft);
            selectedLeft = null;
            
            if (matched.size === ex.pairs.length) {
              this.correctAnswer(feedback);
            } else {
              render();
            }
          } else {
            this.wrongAnswer(feedback);
            selectedLeft = null;
            setTimeout(() => render(), 1500);
          }
        };
      });
    };

    render();
  }

  // ==================== FEEDBACK ====================
  correctAnswer(feedbackEl) {
    feedbackEl.innerHTML = '<div class="feedback correct">✅ Bravo !</div>';
    this.state.xp += 10;
    this.updateStreak();
    
    setTimeout(() => {
      this.state.currentExerciseIndex++;
      this.renderExercise();
    }, 1500);
  }

  wrongAnswer(feedbackEl) {
    this.state.hearts--;
    
    if (this.state.hearts <= 0) {
      this.gameOver();
      return;
    }

    feedbackEl.innerHTML = '<div class="feedback wrong">❌ Essaie encore</div>';
    
    // Mettre à jour hearts dans header
    const heartsDisplay = document.querySelector('.lesson-stats .hearts-display');
    if (heartsDisplay) {
      heartsDisplay.textContent = '❤️'.repeat(this.state.hearts);
    }
  }

  skipExercise() {
    this.state.currentExerciseIndex++;
    this.renderExercise();
  }

  // ==================== FIN ====================
  endLesson() {
    const lesson = this.state.currentLesson;
    
    this.app.innerHTML = `
      <div class="completion-screen">
        <div class="completion-content">
          <div class="completion-icon">🎉</div>
          <h2>Leçon Terminée !</h2>
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
          <button class="continue-btn" onclick="window.frenchApp.renderSelector()">
            Continuer
          </button>
        </div>
      </div>
    `;
  }

  gameOver() {
    this.app.innerHTML = `
      <div class="gameover-screen">
        <div class="gameover-content">
          <div class="gameover-icon">💀</div>
          <h2>Plus de cœurs !</h2>
          <p>Tu as gagné ${this.state.xp} XP</p>
          <p class="hearts-regen">Tes cœurs reviennent dans 30 minutes</p>
          <button class="retry-btn" onclick="location.reload()">
            Recommencer
          </button>
        </div>
      </div>
    `;
  }

  showNoHeartsModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Plus de cœurs</h3>
        <p>Attends 30 minutes pour continuer</p>
        <button onclick="this.closest('.modal').remove()">OK</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  showError(message) {
    this.app.innerHTML = `
      <div class="error-screen">
        <p>❌ ${message}</p>
        <button onclick="location.reload()">Réessayer</button>
      </div>
    `;
  }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  window.frenchApp = new FrenchInteractive();
  console.log('✅ French Interactive chargé !');
});