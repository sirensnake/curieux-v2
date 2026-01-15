/**
 * 🇬🇧 English Interactive - Controller Principal
 * 
 * OBJECTIF: Gestion complète section Anglais mode interactif
 * 
 * ARCHITECTURE:
 *   - Intégration Duolingo mechanics (Streaks/Cœurs)
 *   - Sélecteur de mode (Classic ←→ Interactive)
 *   - Chargement leçons JSON
 *   - Rendu exercices dynamiques
 *   - Reporting XP Dashboard
 * 
 * DÉPENDANCES:
 *   - core/storage-adapter.js
 *   - core/event-bus.js
 *   - core/audio-player.js
 *   - shared/duolingo-mechanics.js
 *   - shared/xp-system-unified.js
 */

class EnglishInteractive {
  constructor() {
    // Dépendances externes
    this.storage = window.storageAdapter;
    this.events = window.eventBus;
    this.audio = window.audioPlayer;
    this.xp = window.xpSystemUnified;
    
    // Système Duolingo (réutilisé depuis Français)
    this.hearts = null;  // Chargé depuis duolingo-mechanics.js
    this.streaks = null; // Chargé depuis duolingo-mechanics.js
    
    // Données
    this.lessons = [];
    this.currentLesson = null;
    this.currentExerciseIndex = 0;
    this.currentMode = 'interactive'; // 'classic' ou 'interactive'
    
    // État session
    this.sessionData = {
      startTime: null,
      exercisesCompleted: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      score: 0
    };
    
    // Éléments DOM
    this.elements = {};
    
    this.init();
  }

  /**
   * Initialisation
   */
  async init() {
    console.log('🇬🇧 Initializing English Interactive...');
    
    try {
      // Chargement leçons
      await this.loadLessons();
      
      // Initialisation Duolingo mechanics
      await this.initDuolingoMechanics();
      
      // Initialisation DOM
      this.initDOM();
      
      // Chargement progression sauvegardée
      this.loadProgress();
      
      // Enregistrement listeners événements
      this.registerEventListeners();
      
      // Affichage initial
      this.renderLessonSelector();
      
      console.log('✅ English Interactive initialized');
    } catch (error) {
      console.error('❌ English Interactive initialization failed:', error);
      this.showError('Erreur de chargement. Veuillez rafraîchir la page.');
    }
  }

  /**
   * Chargement leçons depuis JSON
   */
  async loadLessons() {
    try {
      const response = await fetch('scripts/sections/english/data/lessons.json');
      const data = await response.json();
      
      this.lessons = data.lessons;
      
      console.log(`📚 Loaded ${this.lessons.length} lessons`);
    } catch (error) {
      console.error('Failed to load lessons:', error);
      throw new Error('Impossible de charger les leçons');
    }
  }

  /**
   * Initialisation Duolingo Mechanics
   */
  async initDuolingoMechanics() {
    // Vérification disponibilité système Duolingo
    if (window.HeartSystem && window.StreakSystem) {
      this.hearts = new window.HeartSystem(this.storage, this.events);
      this.streaks = new window.StreakSystem(this.storage, this.events);
      
      console.log('✅ Duolingo mechanics loaded');
    } else {
      console.warn('⚠️ Duolingo mechanics not found, loading...');
      
      // Chargement dynamique si non disponible
      await this.loadScript('scripts/shared/duolingo-mechanics.js');
      
      // Retry initialisation
      if (window.HeartSystem && window.StreakSystem) {
        this.hearts = new window.HeartSystem(this.storage, this.events);
        this.streaks = new window.StreakSystem(this.storage, this.events);
      } else {
        throw new Error('Duolingo mechanics unavailable');
      }
    }
  }

  /**
   * Chargement script dynamique
   * @param {string} src - Chemin script
   */
  loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  /**
   * Initialisation éléments DOM
   */
  initDOM() {
    this.elements = {
      // Header Duolingo
      streakDisplay: document.getElementById('streak-display'),
      heartsDisplay: document.getElementById('hearts-display'),
      xpDisplay: document.getElementById('xp-display'),
      
      // Sélecteur mode
      modeSwitcher: document.getElementById('mode-switcher'),
      
      // Conteneurs principaux
      lessonSelector: document.getElementById('lesson-selector'),
      lessonContainer: document.getElementById('lesson-container'),
      
      // Zone feedback
      feedbackArea: document.getElementById('feedback-area'),
      
      // Boutons navigation
      nextBtn: document.getElementById('next-btn'),
      backBtn: document.getElementById('back-btn')
    };
    
    // Vérification éléments critiques
    const missing = Object.entries(this.elements)
      .filter(([key, el]) => !el)
      .map(([key]) => key);
    
    if (missing.length > 0) {
      console.warn('⚠️ Missing DOM elements:', missing);
    }
  }

  /**
   * Enregistrement listeners événements
   */
  registerEventListeners() {
    // Événements Duolingo
    this.events.on('hearts:lost', (data) => {
      this.onHeartLost(data);
    });
    
    this.events.on('hearts:depleted', () => {
      this.onHeartsOut();
    });
    
    this.events.on('streak:updated', (data) => {
      this.updateStreakDisplay();
    });
    
    // Événements exercices
    this.events.on('exercise:completed', (data) => {
      this.onExerciseCompleted(data);
    });
    
    // Événements navigation
    if (this.elements.nextBtn) {
      this.elements.nextBtn.addEventListener('click', () => {
        this.nextExercise();
      });
    }
    
    if (this.elements.backBtn) {
      this.elements.backBtn.addEventListener('click', () => {
        this.backToLessonSelector();
      });
    }
  }

  /**
   * Chargement progression sauvegardée
   */
  loadProgress() {
    const progress = this.storage.get('english_progress', {
      lessonsCompleted: [],
      currentLesson: null,
      bestScores: {}
    });
    
    this.progress = progress;
    
    // Mise à jour affichage
    this.updateDuolingoDisplays();
  }

  /**
   * Sauvegarde progression
   */
  saveProgress() {
    this.storage.set('english_progress', this.progress);
  }

  /**
   * Mise à jour affichages Duolingo
   */
  updateDuolingoDisplays() {
    // Streak
    if (this.elements.streakDisplay && this.streaks) {
      const streak = this.streaks.getCurrentStreak();
      this.elements.streakDisplay.innerHTML = `🔥 ${streak} ${streak > 1 ? 'days' : 'day'}`;
    }
    
    // Hearts
    if (this.elements.heartsDisplay && this.hearts) {
      const current = this.hearts.getCurrentHearts();
      const max = this.hearts.getMaxHearts();
      
      let heartsHTML = '';
      for (let i = 0; i < max; i++) {
        heartsHTML += i < current ? '❤️' : '🤍';
      }
      this.elements.heartsDisplay.innerHTML = heartsHTML;
    }
    
    // XP
    if (this.elements.xpDisplay && this.xp) {
      const stats = this.xp.getSectionStats('anglais');
      const progress = this.xp.getNextLevelProgress('anglais');
      
      this.elements.xpDisplay.innerHTML = `
        Level ${stats.level} • ${stats.xp} XP
        <div class="xp-bar">
          <div class="xp-progress" style="width: ${progress.percentage}%"></div>
        </div>
      `;
    }
  }

  /**
   * Mise à jour affichage streak uniquement
   */
  updateStreakDisplay() {
    if (this.elements.streakDisplay && this.streaks) {
      const streak = this.streaks.getCurrentStreak();
      this.elements.streakDisplay.innerHTML = `🔥 ${streak} ${streak > 1 ? 'days' : 'day'}`;
    }
  }

  /**
   * Rendu sélecteur de leçons
   */
  renderLessonSelector() {
    if (!this.elements.lessonSelector) return;
    
    // Groupement par thème
    const themes = {};
    this.lessons.forEach(lesson => {
      if (!themes[lesson.theme]) {
        themes[lesson.theme] = [];
      }
      themes[lesson.theme].push(lesson);
    });
    
    // HTML
    let html = '<div class="lesson-grid">';
    
    Object.entries(themes).forEach(([theme, lessons]) => {
      html += `<div class="theme-section">`;
      html += `<h3 class="theme-title">${this.getThemeIcon(theme)} ${this.getThemeTitle(theme)}</h3>`;
      html += '<div class="lesson-cards">';
      
      lessons.forEach(lesson => {
        const completed = this.progress.lessonsCompleted.includes(lesson.id);
        const locked = this.isLessonLocked(lesson);
        
        html += `
          <div class="lesson-card ${completed ? 'completed' : ''} ${locked ? 'locked' : ''}"
               onclick="window.englishApp.startLesson('${lesson.id}')">
            <div class="lesson-level">Level ${lesson.level}</div>
            <div class="lesson-title">${lesson.titleFr}</div>
            <div class="lesson-subtitle">${lesson.title}</div>
            <div class="lesson-meta">
              ${lesson.xpReward} XP • ${lesson.duration} min
            </div>
            ${completed ? '<div class="lesson-badge">✓</div>' : ''}
            ${locked ? '<div class="lesson-lock">🔒</div>' : ''}
          </div>
        `;
      });
      
      html += '</div></div>';
    });
    
    html += '</div>';
    
    this.elements.lessonSelector.innerHTML = html;
  }

  /**
   * Vérification si leçon verrouillée
   * @param {object} lesson - Leçon à vérifier
   * @returns {boolean}
   */
  isLessonLocked(lesson) {
    // Niveau 1 toujours déverrouillé
    if (lesson.level === 1) return false;
    
    // Vérifier qu'au moins une leçon du niveau précédent est complétée
    const previousLevel = lesson.level - 1;
    const previousLessons = this.lessons.filter(l => l.level === previousLevel);
    
    return !previousLessons.some(l => 
      this.progress.lessonsCompleted.includes(l.id)
    );
  }

  /**
   * Démarrage leçon
   * @param {string} lessonId - ID de la leçon
   */
  startLesson(lessonId) {
    const lesson = this.lessons.find(l => l.id === lessonId);
    
    if (!lesson) {
      console.error('Lesson not found:', lessonId);
      return;
    }
    
    if (this.isLessonLocked(lesson)) {
      this.showNotification('Cette leçon est verrouillée. Complète les leçons précédentes d\'abord !', 'warning');
      return;
    }
    
    // Vérification cœurs disponibles
    if (this.hearts && this.hearts.getCurrentHearts() === 0) {
      this.showHeartsOutModal();
      return;
    }
    
    // Initialisation session
    this.currentLesson = lesson;
    this.currentExerciseIndex = 0;
    this.currentMode = 'interactive'; // Par défaut mode interactif
    
    this.sessionData = {
      startTime: Date.now(),
      exercisesCompleted: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      score: 0
    };
    
    // Enregistrement activité streak
    if (this.streaks) {
      this.streaks.recordActivity();
      this.updateStreakDisplay();
    }
    
    // Affichage sélecteur de mode
    this.showModeSelector(lesson);
  }

  /**
   * Affichage sélecteur de mode (Classic vs Interactive)
   * @param {object} lesson - Leçon concernée
   */
  showModeSelector(lesson) {
    if (!this.elements.lessonContainer) return;
    
    const modes = lesson.modes;
    
    let html = `
      <div class="mode-selector-screen">
        <h2>${lesson.titleFr}</h2>
        <p class="lesson-description">${lesson.description}</p>
        
        <div class="mode-options">
    `;
    
    // Mode Classic
    if (modes.classic && modes.classic.available) {
      html += `
        <div class="mode-card" onclick="window.englishApp.selectMode('classic')">
          <div class="mode-icon">📖</div>
          <h3>Mode Classique</h3>
          <p>Lecture et quiz traditionnels</p>
          <button class="mode-btn">Choisir</button>
        </div>
      `;
    }
    
    // Mode Interactive
    if (modes.interactive && modes.interactive.available) {
      html += `
        <div class="mode-card featured" onclick="window.englishApp.selectMode('interactive')">
          <div class="mode-icon">🎮</div>
          <h3>Mode Interactif</h3>
          <p>Exercices variés avec prononciation</p>
          <div class="mode-features">
            <span>🔊 Audio</span>
            <span>❤️ Cœurs</span>
            <span>⭐ XP</span>
          </div>
          <button class="mode-btn primary">Choisir (Recommandé)</button>
        </div>
      `;
    }
    
    html += `
        </div>
        
        <button class="back-link" onclick="window.englishApp.backToLessonSelector()">
          ← Retour aux leçons
        </button>
      </div>
    `;
    
    this.elements.lessonContainer.innerHTML = html;
    this.elements.lessonSelector.style.display = 'none';
  }

  /**
   * Sélection mode
   * @param {string} mode - 'classic' ou 'interactive'
   */
  selectMode(mode) {
    this.currentMode = mode;
    
    if (mode === 'classic') {
      this.renderClassicMode();
    } else {
      this.renderInteractiveMode();
    }
  }

  /**
   * Rendu mode classique
   */
  renderClassicMode() {
    const lesson = this.currentLesson;
    const classicData = lesson.modes.classic;
    
    let html = `
      <div class="classic-mode-container">
        <h2>${lesson.titleFr}</h2>
        <div class="lesson-content">
          ${classicData.content || 'Contenu à venir...'}
        </div>
    `;
    
    // Quiz si disponibles
    if (classicData.quiz && classicData.quiz.length > 0) {
      html += '<div class="classic-quiz">';
      html += '<h3>Quiz</h3>';
      
      classicData.quiz.forEach((q, index) => {
        html += `
          <div class="quiz-question">
            <p><strong>${index + 1}. ${q.question}</strong></p>
            <div class="quiz-options">
        `;
        
        q.options.forEach((option, optIndex) => {
          html += `
            <label class="quiz-option">
              <input type="radio" name="q${index}" value="${optIndex}">
              ${option}
            </label>
          `;
        });
        
        html += `
            </div>
          </div>
        `;
      });
      
      html += '<button class="submit-quiz-btn" onclick="window.englishApp.submitClassicQuiz()">Valider</button>';
      html += '</div>';
    }
    
    html += '</div>';
    
    this.elements.lessonContainer.innerHTML = html;
  }

  /**
   * Rendu mode interactif
   */
  renderInteractiveMode() {
    this.renderCurrentExercise();
  }

  /**
   * Rendu exercice actuel
   */
  renderCurrentExercise() {
    const lesson = this.currentLesson;
    const exercises = lesson.modes.interactive.exercises;
    const exercise = exercises[this.currentExerciseIndex];
    
    if (!exercise) {
      this.completeLesson();
      return;
    }
    
    let html = `
      <div class="exercise-container">
        <div class="exercise-header">
          <div class="exercise-progress">
            ${this.currentExerciseIndex + 1} / ${exercises.length}
          </div>
          <div class="exercise-progress-bar">
            <div class="progress-fill" style="width: ${((this.currentExerciseIndex + 1) / exercises.length) * 100}%"></div>
          </div>
        </div>
        
        <div class="exercise-instruction">
          ${exercise.instruction}
        </div>
        
        <div class="exercise-content" id="exercise-content">
    `;
    
    // Rendu selon type d'exercice
    switch (exercise.type) {
      case 'translate':
        html += this.renderTranslateExercise(exercise);
        break;
      case 'listen':
        html += this.renderListenExercise(exercise);
        break;
      case 'match':
        html += this.renderMatchExercise(exercise);
        break;
      case 'fill':
        html += this.renderFillExercise(exercise);
        break;
      default:
        html += '<p>Type d\'exercice non supporté</p>';
    }
    
    html += `
        </div>
        
        <div class="exercise-actions">
          <button class="check-btn" id="check-answer-btn">Vérifier</button>
        </div>
        
        <div class="exercise-feedback" id="exercise-feedback"></div>
      </div>
    `;
    
    this.elements.lessonContainer.innerHTML = html;
    
    // Ajout listeners
    this.attachExerciseListeners(exercise);
  }

  /**
   * Rendu exercice traduction
   */
  renderTranslateExercise(exercise) {
    let html = `
      <div class="translate-exercise">
        <div class="word-to-translate">
          ${exercise.word}
        </div>
    `;
    
    // Bouton audio si disponible
    if (exercise.audio) {
      html += `
        <button class="listen-btn" onclick="window.audioPlayer.speak('${exercise.word}')">
          🔊 Listen
        </button>
      `;
    }
    
    html += `
        <input type="text" 
               class="answer-input" 
               id="answer-input"
               placeholder="Ta réponse en français..."
               autocomplete="off">
    `;
    
    // Hints
    if (exercise.hints && exercise.hints.length > 0) {
      html += `
        <button class="hint-btn" onclick="window.englishApp.showHint()">
          💡 Indice
        </button>
        <div class="hints-container" id="hints-container" style="display: none;">
          ${exercise.hints.map(h => `<p class="hint">💡 ${h}</p>`).join('')}
        </div>
      `;
    }
    
    html += '</div>';
    
    return html;
  }

  /**
   * Rendu exercice écoute
   */
  renderListenExercise(exercise) {
    return `
      <div class="listen-exercise">
        <button class="listen-btn large" onclick="window.audioPlayer.speak('${exercise.answer}')">
          🔊 Écoute et écris ce que tu entends
        </button>
        
        <input type="text" 
               class="answer-input" 
               id="answer-input"
               placeholder="Écris le mot en anglais..."
               autocomplete="off">
      </div>
    `;
  }

  /**
   * Rendu exercice associations
   */
  renderMatchExercise(exercise) {
    // Mélange des paires
    const shuffled = [...exercise.pairs].sort(() => Math.random() - 0.5);
    
    let html = `
      <div class="match-exercise">
        <div class="match-columns">
          <div class="match-column english">
    `;
    
    shuffled.forEach((pair, index) => {
      html += `
        <div class="match-item" data-en="${pair.en}" draggable="true">
          ${pair.en}
        </div>
      `;
    });
    
    html += '</div><div class="match-column french">';
    
    // Mélange différent pour le français
    const frenchShuffled = [...exercise.pairs].sort(() => Math.random() - 0.5);
    
    frenchShuffled.forEach((pair, index) => {
      html += `
        <div class="match-item drop-zone" data-fr="${pair.fr}">
          ${pair.fr}
        </div>
      `;
    });
    
    html += `
          </div>
        </div>
        <p class="match-instruction">Glisse les mots anglais vers leur traduction</p>
      </div>
    `;
    
    return html;
  }

  /**
   * Rendu exercice à trous
   */
  renderFillExercise(exercise) {
    return `
      <div class="fill-exercise">
        <div class="sentence-to-fill">
          ${exercise.sentence.replace('___', '<input type="text" class="fill-input" id="answer-input" autocomplete="off">')}
        </div>
        
        <div class="fill-options">
          ${exercise.options.map(opt => `
            <button class="option-btn" onclick="window.englishApp.selectFillOption('${opt}')">
              ${opt}
            </button>
          `).join('')}
        </div>
        
        <div class="translation-hint">
          💬 ${exercise.translation}
        </div>
      </div>
    `;
  }

  /**
   * Attachement listeners exercice
   */
  attachExerciseListeners(exercise) {
    const checkBtn = document.getElementById('check-answer-btn');
    const answerInput = document.getElementById('answer-input');
    
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        this.checkAnswer(exercise);
      });
    }
    
    if (answerInput) {
      answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.checkAnswer(exercise);
        }
      });
      answerInput.focus();
    }
    
    // Drag & drop pour match exercise
    if (exercise.type === 'match') {
      this.initMatchDragDrop();
    }
  }

  /**
   * Initialisation drag & drop
   */
  initMatchDragDrop() {
    const draggables = document.querySelectorAll('.match-item[draggable="true"]');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    draggables.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.dataset.en);
        item.classList.add('dragging');
      });
      
      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
      });
    });
    
    dropZones.forEach(zone => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('drag-over');
      });
      
      zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
      });
      
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        
        const enWord = e.dataTransfer.getData('text/plain');
        zone.dataset.matched = enWord;
        zone.classList.add('matched');
      });
    });
  }

  /**
   * Sélection option fill-in
   */
  selectFillOption(option) {
    const input = document.getElementById('answer-input');
    if (input) {
      input.value = option;
      input.focus();
    }
  }

  /**
   * Affichage indice
   */
  showHint() {
    const hintsContainer = document.getElementById('hints-container');
    if (hintsContainer) {
      hintsContainer.style.display = 'block';
    }
  }

  /**
   * Vérification réponse
   */
  checkAnswer(exercise) {
    let userAnswer;
    let isCorrect = false;
    
    switch (exercise.type) {
      case 'translate':
      case 'listen':
      case 'fill':
        const input = document.getElementById('answer-input');
        if (!input || !input.value.trim()) {
          this.showNotification('Entre une réponse d\'abord !', 'warning');
          return;
        }
        userAnswer = input.value.trim().toLowerCase();
        isCorrect = userAnswer === exercise.answer.toLowerCase();
        break;
        
      case 'match':
        const dropZones = document.querySelectorAll('.drop-zone[data-matched]');
        if (dropZones.length < exercise.pairs.length) {
          this.showNotification('Associe tous les mots d\'abord !', 'warning');
          return;
        }
        
        isCorrect = true;
        dropZones.forEach(zone => {
          const enWord = zone.dataset.matched;
          const frWord = zone.dataset.fr;
          const pair = exercise.pairs.find(p => p.en === enWord);
          
          if (!pair || pair.fr !== frWord) {
            isCorrect = false;
          }
        });
        break;
    }
    
    // Traitement résultat
    if (isCorrect) {
      this.handleCorrectAnswer(exercise);
    } else {
      this.handleWrongAnswer(exercise);
    }
  }

  /**
   * Gestion réponse correcte
   */
  handleCorrectAnswer(exercise) {
    this.sessionData.correctAnswers++;
    this.sessionData.exercisesCompleted++;
    
    // Feedback visuel
    this.showFeedback('correct', exercise);
    
    // Événement
    this.events.emit('question:correct', {
      section: 'anglais',
      exercise: exercise.id
    });
    
    // Bouton suivant après 1.5s
    setTimeout(() => {
      this.nextExercise();
    }, 1500);
  }

  /**
   * Gestion réponse incorrecte
   */
  handleWrongAnswer(exercise) {
    this.sessionData.wrongAnswers++;
    
    // Perte cœur
    if (this.hearts) {
      const hasHearts = this.hearts.loseHeart();
      
      if (!hasHearts) {
        // Plus de cœurs
        this.events.emit('hearts:depleted');
        return;
      }
    }
    
    // Feedback visuel
    this.showFeedback('wrong', exercise);
    
    // Événement
    this.events.emit('question:wrong', {
      section: 'anglais',
      exercise: exercise.id
    });
    
    // Mise à jour affichage hearts
    this.updateDuolingoDisplays();
  }

  /**
   * Affichage feedback
   */
  showFeedback(type, exercise) {
    const feedbackArea = document.getElementById('exercise-feedback');
    if (!feedbackArea) return;
    
    if (type === 'correct') {
      feedbackArea.className = 'exercise-feedback correct';
      feedbackArea.innerHTML = `
        <div class="feedback-icon">✓</div>
        <div class="feedback-text">
          <strong>Bravo !</strong>
          <p>C'est la bonne réponse : <em>${exercise.answer}</em></p>
        </div>
      `;
    } else {
      feedbackArea.className = 'exercise-feedback wrong';
      feedbackArea.innerHTML = `
        <div class="feedback-icon">✗</div>
        <div class="feedback-text">
          <strong>Pas tout à fait...</strong>
          <p>La bonne réponse est : <em>${exercise.answer}</em></p>
        </div>
      `;
    }
    
    feedbackArea.style.display = 'block';
  }

  /**
   * Exercice suivant
   */
  nextExercise() {
    this.currentExerciseIndex++;
    this.renderCurrentExercise();
  }

  /**
   * Complétion leçon
   */
  completeLesson() {
    const lesson = this.currentLesson;
    const timeSpent = Date.now() - this.sessionData.startTime;
    const totalExercises = lesson.modes.interactive.exercises.length;
    const score = Math.round((this.sessionData.correctAnswers / totalExercises) * 100);
    
    this.sessionData.score = score;
    
    // Attribution XP avec bonus
    const bonuses = {
      perfectScore: score === 100,
      streak: this.streaks && this.streaks.getCurrentStreak() > 0
    };
    
    const xpResult = this.xp.awardXP('anglais', lesson.xpReward, bonuses);
    
    // Mise à jour stats leçon
    this.xp.updateLessonStats('anglais', {
      score,
      timeSpent: Math.round(timeSpent / 1000) // secondes
    });
    
    // Sauvegarde progression
    if (!this.progress.lessonsCompleted.includes(lesson.id)) {
      this.progress.lessonsCompleted.push(lesson.id);
    }
    
    this.progress.bestScores[lesson.id] = Math.max(
      this.progress.bestScores[lesson.id] || 0,
      score
    );
    
    this.saveProgress();
    
    // Affichage écran de fin
    this.showCompletionScreen(xpResult, score);
  }

  /**
   * Affichage écran complétion
   */
  showCompletionScreen(xpResult, score) {
    const lesson = this.currentLesson;
    
    let html = `
      <div class="completion-screen">
        <div class="completion-icon ${score === 100 ? 'perfect' : 'good'}">
          ${score === 100 ? '🌟' : '✓'}
        </div>
        
        <h2>${score === 100 ? 'Parfait !' : 'Bravo !'}</h2>
        
        <div class="completion-stats">
          <div class="stat">
            <div class="stat-value">${score}%</div>
            <div class="stat-label">Score</div>
          </div>
          
          <div class="stat">
            <div class="stat-value">+${xpResult.xpGained}</div>
            <div class="stat-label">XP</div>
          </div>
          
          <div class="stat">
            <div class="stat-value">${this.sessionData.correctAnswers}/${lesson.modes.interactive.exercises.length}</div>
            <div class="stat-label">Correct</div>
          </div>
        </div>
        
        ${xpResult.levelUp ? `
          <div class="level-up-banner">
            🎉 Niveau ${xpResult.newLevel} atteint !
          </div>
        ` : ''}
        
        ${xpResult.appliedBonuses.length > 0 ? `
          <div class="bonuses-applied">
            ${xpResult.appliedBonuses.map(b => `
              <div class="bonus-badge">${this.getBonusIcon(b)} ${this.getBonusLabel(b)}</div>
            `).join('')}
          </div>
        ` : ''}
        
        <div class="completion-actions">
          <button class="btn-primary" onclick="window.englishApp.backToLessonSelector()">
            Continuer
          </button>
          <button class="btn-secondary" onclick="window.englishApp.retryLesson()">
            Recommencer
          </button>
        </div>
      </div>
    `;
    
    this.elements.lessonContainer.innerHTML = html;
  }

  /**
   * Retry leçon
   */
  retryLesson() {
    this.startLesson(this.currentLesson.id);
  }

  /**
   * Retour sélecteur leçons
   */
  backToLessonSelector() {
    this.currentLesson = null;
    this.currentExerciseIndex = 0;
    
    this.elements.lessonContainer.innerHTML = '';
    this.elements.lessonSelector.style.display = 'block';
    
    this.renderLessonSelector();
    this.updateDuolingoDisplays();
  }

  /**
   * Gestion perte cœur
   */
  onHeartLost(data) {
    // Animation perte cœur déjà gérée par updateDuolingoDisplays
    this.showNotification(`❤️ ${data.remaining} cœur${data.remaining > 1 ? 's' : ''} restant${data.remaining > 1 ? 's' : ''}`, 'info');
  }

  /**
   * Gestion épuisement cœurs
   */
  onHeartsOut() {
    this.showHeartsOutModal();
  }

  /**
   * Modal plus de cœurs
   */
  showHeartsOutModal() {
    const modal = `
      <div class="modal-overlay" onclick="this.remove()">
        <div class="modal-content" onclick="event.stopPropagation()">
          <h2>💔 Plus de cœurs !</h2>
          <p>Tes cœurs se régénèrent dans ${this.hearts ? this.hearts.getTimeUntilNextHeart() : '30 minutes'}.</p>
          <p>Tu peux continuer en mode entraînement (sans XP) ou attendre.</p>
          
          <div class="modal-actions">
            <button class="btn-primary" onclick="this.closest('.modal-overlay').remove(); window.englishApp.backToLessonSelector();">
              Retour aux leçons
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modal);
  }

  /**
   * Affichage notification
   */
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  /**
   * Affichage erreur
   */
  showError(message) {
    if (this.elements.lessonContainer) {
      this.elements.lessonContainer.innerHTML = `
        <div class="error-screen">
          <div class="error-icon">⚠️</div>
          <h2>Oups !</h2>
          <p>${message}</p>
          <button class="btn-primary" onclick="location.reload()">
            Rafraîchir
          </button>
        </div>
      `;
    }
  }

  /**
   * Soumission quiz classique
   */
  submitClassicQuiz() {
    // TODO: Implémentation quiz classique
    console.log('Classic quiz submission not implemented yet');
  }

  /**
   * Helpers icônes/labels
   */
  getThemeIcon(theme) {
    const icons = {
      family: '👨‍👩‍👧‍👦',
      colors: '🎨',
      numbers: '🔢',
      animals: '🐾',
      food: '🍎',
      clothes: '👕',
      school: '🏫',
      time: '⏰',
      greetings: '👋',
      house: '🏠',
      body: '👤',
      weather: '☀️',
      actions: '🏃',
      adjectives: '📏',
      emotions: '😊',
      questions: '❓',
      mixed: '🌟'
    };
    
    return icons[theme] || '📚';
  }

  getThemeTitle(theme) {
    const titles = {
      family: 'Famille',
      colors: 'Couleurs',
      numbers: 'Nombres',
      animals: 'Animaux',
      food: 'Nourriture',
      clothes: 'Vêtements',
      school: 'École',
      time: 'Temps',
      greetings: 'Salutations',
      house: 'Maison',
      body: 'Corps',
      weather: 'Météo',
      actions: 'Actions',
      adjectives: 'Adjectifs',
      emotions: 'Émotions',
      questions: 'Questions',
      mixed: 'Révision'
    };
    
    return titles[theme] || theme;
  }

  getBonusIcon(bonus) {
    const icons = {
      perfectScore: '🌟',
      streak: '🔥',
      firstTry: '⚡',
      speedBonus: '⏱️',
      combo: '🎯'
    };
    
    return icons[bonus] || '⭐';
  }

  getBonusLabel(bonus) {
    const labels = {
      perfectScore: 'Score Parfait',
      streak: 'Série Active',
      firstTry: 'Premier Coup',
      speedBonus: 'Rapidité',
      combo: 'Combo'
    };
    
    return labels[bonus] || bonus;
  }

  /**
   * Complétion exercice (événement externe)
   */
  onExerciseCompleted(data) {
    // Hook pour extensions futures
    console.log('Exercise completed:', data);
  }
}

// ============================================================================
// INITIALISATION & EXPORT GLOBAL
// ============================================================================

// Rendre classe disponible globalement
window.EnglishInteractive = EnglishInteractive;

// Initialisation au chargement DOM
document.addEventListener('DOMContentLoaded', () => {
  // Vérifier dépendances critiques
  if (!window.eventBus) {
    console.error('❌ EnglishInteractive: EventBus not loaded!');
    return;
  }
  
  if (!window.storageAdapter) {
    console.error('❌ EnglishInteractive: StorageAdapter not loaded!');
    return;
  }
  
  if (!window.xpSystemUnified) {
    console.error('❌ EnglishInteractive: XP System not loaded!');
    return;
  }
  
  if (!window.HeartSystem || !window.StreakSystem) {
    console.error('❌ EnglishInteractive: Duolingo Mechanics not loaded!');
    return;
  }
  
  // Tout OK, initialiser
  window.englishApp = new EnglishInteractive();
  console.log('✅ English Interactive App initialized!');
});
