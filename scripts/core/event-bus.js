/**
 * 🔧 Event Bus - Pattern Observer/PubSub
 * 
 * OBJECTIF: Communication découplée entre composants
 * 
 * AVANTAGES:
 *   - Pas de couplage fort entre modules
 *   - Compatible architecture React (Redux actions)
 *   - Debugging facilité (logs centralisés)
 * 
 * USAGE:
 *   eventBus.on('hearts:lost', (data) => updateUI(data));
 *   eventBus.emit('hearts:lost', { remaining: 4 });
 * 
 * MIGRATION REACT:
 *   Devient middleware Redux ou Context listeners
 */

class EventBus {
  constructor() {
    this.listeners = new Map();
    this.debugMode = false; // Activer pour logs détaillés
  }

  /**
   * Inscription à un événement
   * @param {string} event - Nom de l'événement
   * @param {function} callback - Fonction à appeler
   * @param {object} options - Options (once, priority)
   * @returns {function} Fonction de désinscription
   */
  on(event, callback, options = {}) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    const listener = {
      callback,
      once: options.once || false,
      priority: options.priority || 0,
      id: this._generateId()
    };

    this.listeners.get(event).push(listener);
    
    // Tri par priorité (haute priorité = exécution d'abord)
    this.listeners.get(event).sort((a, b) => b.priority - a.priority);

    if (this.debugMode) {
      console.log(`📡 EventBus: Registered '${event}' (${listener.id})`);
    }

    // Retourne fonction de désinscription
    return () => this.off(event, listener.id);
  }

  /**
   * Inscription unique (auto-désabonnement après 1er déclenchement)
   * @param {string} event - Nom de l'événement
   * @param {function} callback - Fonction à appeler
   */
  once(event, callback) {
    return this.on(event, callback, { once: true });
  }

  /**
   * Désinscription d'un événement
   * @param {string} event - Nom de l'événement
   * @param {string} listenerId - ID du listener (optionnel)
   */
  off(event, listenerId = null) {
    if (!this.listeners.has(event)) return;

    if (listenerId) {
      // Suppression listener spécifique
      const listeners = this.listeners.get(event);
      const filtered = listeners.filter(l => l.id !== listenerId);
      this.listeners.set(event, filtered);
    } else {
      // Suppression tous listeners de cet événement
      this.listeners.delete(event);
    }

    if (this.debugMode) {
      console.log(`📡 EventBus: Unregistered '${event}'`);
    }
  }

  /**
   * Émission d'un événement
   * @param {string} event - Nom de l'événement
   * @param {any} data - Données à transmettre
   */
  emit(event, data = null) {
    if (!this.listeners.has(event)) {
      if (this.debugMode) {
        console.warn(`📡 EventBus: No listeners for '${event}'`);
      }
      return;
    }

    const listeners = this.listeners.get(event);
    const toRemove = [];

    listeners.forEach(listener => {
      try {
        // Exécution callback
        listener.callback(data, event);

        // Marquage pour suppression si 'once'
        if (listener.once) {
          toRemove.push(listener.id);
        }
      } catch (error) {
        console.error(`❌ EventBus error in '${event}':`, error);
      }
    });

    // Suppression listeners 'once'
    if (toRemove.length > 0) {
      const filtered = listeners.filter(l => !toRemove.includes(l.id));
      this.listeners.set(event, filtered);
    }

    if (this.debugMode) {
      console.log(`📡 EventBus: Emitted '${event}'`, data);
    }
  }

  /**
   * Attente d'un événement (Promise-based)
   * @param {string} event - Nom de l'événement
   * @param {number} timeout - Timeout en ms (0 = infini)
   * @returns {Promise} Résout avec les données de l'événement
   */
  async wait(event, timeout = 0) {
    return new Promise((resolve, reject) => {
      let timeoutId;

      const unsubscribe = this.once(event, (data) => {
        if (timeoutId) clearTimeout(timeoutId);
        resolve(data);
      });

      if (timeout > 0) {
        timeoutId = setTimeout(() => {
          unsubscribe();
          reject(new Error(`EventBus: Timeout waiting for '${event}'`));
        }, timeout);
      }
    });
  }

  /**
   * Listage de tous les événements actifs
   * @returns {string[]} Liste des événements
   */
  events() {
    return Array.from(this.listeners.keys());
  }

  /**
   * Nombre de listeners pour un événement
   * @param {string} event - Nom de l'événement
   * @returns {number} Nombre de listeners
   */
  listenerCount(event) {
    return this.listeners.has(event) 
      ? this.listeners.get(event).length 
      : 0;
  }

  /**
   * Suppression complète de tous les listeners
   */
  clear() {
    this.listeners.clear();
    if (this.debugMode) {
      console.log('📡 EventBus: All listeners cleared');
    }
  }

  /**
   * Activation/désactivation mode debug
   * @param {boolean} enabled - Activer debug
   */
  setDebug(enabled) {
    this.debugMode = enabled;
    console.log(`📡 EventBus: Debug mode ${enabled ? 'enabled' : 'disabled'}`);
  }

  /**
   * Génération ID unique listener
   * @private
   */
  _generateId() {
    return `listener_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Statistiques pour debugging
   * @returns {object} Statistiques complètes
   */
  stats() {
    const stats = {
      totalEvents: this.listeners.size,
      totalListeners: 0,
      events: {}
    };

    this.listeners.forEach((listeners, event) => {
      stats.totalListeners += listeners.length;
      stats.events[event] = listeners.length;
    });

    return stats;
  }
}

/**
 * 🎯 Événements Standards Prédéfinis
 * 
 * Convention nommage: [module]:[action]
 */
const EVENTS = {
  // Système Duolingo
  STREAK_UPDATED: 'streak:updated',
  STREAK_BROKEN: 'streak:broken',
  STREAK_MILESTONE: 'streak:milestone',
  
  HEARTS_LOST: 'hearts:lost',
  HEARTS_GAINED: 'hearts:gained',
  HEARTS_DEPLETED: 'hearts:depleted',
  
  XP_GAINED: 'xp:gained',
  LEVEL_UP: 'xp:levelup',
  
  // Leçons
  LESSON_STARTED: 'lesson:started',
  LESSON_COMPLETED: 'lesson:completed',
  LESSON_FAILED: 'lesson:failed',
  
  QUESTION_ANSWERED: 'question:answered',
  QUESTION_CORRECT: 'question:correct',
  QUESTION_WRONG: 'question:wrong',
  
  // Badges
  BADGE_EARNED: 'badge:earned',
  ACHIEVEMENT_UNLOCKED: 'achievement:unlocked',
  
  // Navigation
  SECTION_CHANGED: 'nav:section-changed',
  
  // Storage
  STORAGE_CHANGED: 'storage:change',
  STORAGE_CLEARED: 'storage:cleared',
  
  // UI
  UI_MODAL_OPEN: 'ui:modal-open',
  UI_MODAL_CLOSE: 'ui:modal-close',
  UI_NOTIFICATION: 'ui:notification'
};

/**
 * 🔌 Helper: Création listeners typés
 */
class TypedEventBus extends EventBus {
  /**
   * Inscription avec validation type événement
   */
  onTyped(event, callback, options = {}) {
    if (!Object.values(EVENTS).includes(event)) {
      console.warn(`⚠️ EventBus: Unknown event type '${event}'`);
    }
    return this.on(event, callback, options);
  }

  /**
   * Émission avec validation type événement
   */
  emitTyped(event, data = null) {
    if (!Object.values(EVENTS).includes(event)) {
      console.warn(`⚠️ EventBus: Unknown event type '${event}'`);
    }
    return this.emit(event, data);
  }
}

// ============================================================================
// EXPORT GLOBAL (Compatibilité Script Classique)
// ============================================================================

window.EventBus = EventBus;
window.TypedEventBus = TypedEventBus;
window.EVENTS = EVENTS;
window.eventBus = new TypedEventBus();

console.log('✅ Event Bus loaded successfully!');
