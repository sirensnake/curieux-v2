/**
 * 🎯 XP System Unifié - Multi-Sections
 * 
 * OBJECTIF: Gestion centralisée XP/Niveaux pour toutes sections
 *   - Français, Anglais, Maths, Sciences, etc.
 * 
 * FEATURES:
 *   - XP par section + XP global
 *   - Système de niveaux adaptatif
 *   - Bonus streaks/performance
 *   - Reporting Dashboard automatique
 * 
 * ARCHITECTURE:
 *   - Compatible migration React (State management)
 *   - Event-driven (Event Bus integration)
 *   - Storage abstrait (Storage Adapter)
 */

class XPSystemUnified {
  constructor(storageAdapter, eventBus) {
    this.storage = storageAdapter || window.storageAdapter;
    this.events = eventBus || window.eventBus;
    
    // Configuration sections supportées
    this.sections = {
      francais: { name: 'Français', color: '#e76f51', icon: '📚' },
      anglais: { name: 'Anglais', color: '#2a9d8f', icon: '🇬🇧' },
      maths: { name: 'Mathématiques', color: '#e9c46a', icon: '🔢' },
      sciences: { name: 'Sciences', color: '#264653', icon: '🔬' },
      histoire: { name: 'Histoire', color: '#f4a261', icon: '🏛️' },
      programmation: { name: 'Programmation', color: '#06d6a0', icon: '💻' }
    };
    
    // Configuration paliers XP
    this.levelThresholds = [
      0,      // Niveau 1
      200,    // Niveau 2
      400,    // Niveau 3
      600,    // Niveau 4
      800,    // Niveau 5
      1200,   // Niveau 6
      1600,   // Niveau 7
      2000,   // Niveau 8
      2500,   // Niveau 9
      3000    // Niveau 10
    ];
    
    // Bonus multiplicateurs
    this.bonusMultipliers = {
      perfectScore: 2.0,      // Score 100%
      firstTry: 1.5,          // Réussi du premier coup
      streak: 1.5,            // Streak actif
      speedBonus: 1.25,       // Répondu rapidement
      combo: 1.2              // Plusieurs bonnes réponses de suite
    };
    
    this.init();
  }

  /**
   * Initialisation système
   */
  init() {
    // Chargement données existantes
    this.data = this.storage.get('xp_unified', this._getDefaultData());
    
    // Migration ancien système si nécessaire
    this._migrateFromLegacy();
    
    // Enregistrement listeners événements
    this._registerEventListeners();
    
    console.log('✅ XP System Unified initialized');
  }

  /**
   * Structure données par défaut
   * @private
   */
  _getDefaultData() {
    return {
      global: {
        totalXP: 0,
        level: 1,
        lastUpdate: new Date().toISOString()
      },
      sections: Object.keys(this.sections).reduce((acc, key) => {
        acc[key] = {
          xp: 0,
          level: 1,
          lessonsCompleted: 0,
          perfectScores: 0,
          averageScore: 0,
          totalTime: 0,
          lastActivity: null
        };
        return acc;
      }, {}),
      history: []
    };
  }

  /**
   * Migration ancien système (curio_xp, etc.)
   * @private
   */
  _migrateFromLegacy() {
    const legacyXP = this.storage.get('curio_xp', null);
    
    if (legacyXP && !this.data.migrated) {
      console.log('🔄 Migrating legacy XP data...');
      
      // Récupération XP total ancien système
      const totalXP = parseInt(legacyXP) || 0;
      
      // Répartition équitable sur sections actives
      const activeSections = ['francais', 'anglais', 'maths'];
      const xpPerSection = Math.floor(totalXP / activeSections.length);
      
      activeSections.forEach(section => {
        this.data.sections[section].xp = xpPerSection;
        this.data.sections[section].level = this._calculateLevel(xpPerSection);
      });
      
      this.data.global.totalXP = totalXP;
      this.data.global.level = this._calculateLevel(totalXP);
      this.data.migrated = true;
      
      this._save();
      console.log(`✅ Migration complete: ${totalXP} XP imported`);
    }
  }

  /**
   * Enregistrement listeners Event Bus
   * @private
   */
  _registerEventListeners() {
    if (!this.events) return;
    
    // Écoute événements leçons
    this.events.on('lesson:completed', (data) => {
      this.awardXP(data.section, data.baseXP, data.bonuses);
    });
    
    // Écoute événements questions
    this.events.on('question:correct', (data) => {
      // Micro-récompense pour bonne réponse
      this.awardXP(data.section, 2, {});
    });
  }

  /**
   * Attribution XP avec bonus
   * @param {string} section - Section concernée (francais, anglais, etc.)
   * @param {number} baseXP - XP de base
   * @param {object} bonuses - Bonus actifs { perfectScore: true, streak: true, etc. }
   * @returns {object} Résultat attribution { xpGained, levelUp, newLevel }
   */
  awardXP(section, baseXP, bonuses = {}) {
    if (!this.sections[section]) {
      console.error(`❌ Unknown section: ${section}`);
      return null;
    }

    // Calcul XP avec bonus
    let totalXP = baseXP;
    const appliedBonuses = [];

    Object.keys(bonuses).forEach(bonusType => {
      if (bonuses[bonusType] && this.bonusMultipliers[bonusType]) {
        totalXP *= this.bonusMultipliers[bonusType];
        appliedBonuses.push(bonusType);
      }
    });

    totalXP = Math.round(totalXP);

    // Mise à jour section
    const sectionData = this.data.sections[section];
    const oldLevel = sectionData.level;
    
    sectionData.xp += totalXP;
    sectionData.level = this._calculateLevel(sectionData.xp);
    sectionData.lastActivity = new Date().toISOString();

    // Mise à jour global
    this.data.global.totalXP += totalXP;
    this.data.global.level = this._calculateLevel(this.data.global.totalXP);
    this.data.global.lastUpdate = new Date().toISOString();

    // Historique
    this.data.history.push({
      timestamp: new Date().toISOString(),
      section,
      baseXP,
      bonuses: appliedBonuses,
      totalXP,
      levelBefore: oldLevel,
      levelAfter: sectionData.level
    });

    // Limitation historique (100 dernières entrées)
    if (this.data.history.length > 100) {
      this.data.history = this.data.history.slice(-100);
    }

    this._save();

    // Événements
    const levelUp = sectionData.level > oldLevel;
    
    if (this.events) {
      this.events.emit('xp:gained', {
        section,
        amount: totalXP,
        bonuses: appliedBonuses
      });

      if (levelUp) {
        this.events.emit('xp:levelup', {
          section,
          newLevel: sectionData.level,
          oldLevel
        });
      }
    }

    return {
      xpGained: totalXP,
      levelUp,
      newLevel: sectionData.level,
      oldLevel,
      appliedBonuses
    };
  }

  /**
   * Calcul niveau depuis XP
   * @param {number} xp - XP total
   * @returns {number} Niveau correspondant
   */
  _calculateLevel(xp) {
    for (let i = this.levelThresholds.length - 1; i >= 0; i--) {
      if (xp >= this.levelThresholds[i]) {
        return i + 1;
      }
    }
    return 1;
  }

  /**
   * XP nécessaire pour prochain niveau
   * @param {string} section - Section ou 'global'
   * @returns {object} { current, needed, percentage }
   */
  getNextLevelProgress(section = 'global') {
    const xp = section === 'global' 
      ? this.data.global.totalXP 
      : this.data.sections[section].xp;
    
    const currentLevel = this._calculateLevel(xp);
    const currentThreshold = this.levelThresholds[currentLevel - 1];
    const nextThreshold = this.levelThresholds[currentLevel] || currentThreshold + 500;
    
    const needed = nextThreshold - xp;
    const progressInLevel = xp - currentThreshold;
    const totalForLevel = nextThreshold - currentThreshold;
    const percentage = Math.round((progressInLevel / totalForLevel) * 100);

    return {
      current: xp,
      needed,
      percentage: Math.max(0, Math.min(100, percentage)),
      currentLevel,
      nextLevel: currentLevel + 1,
      progressInLevel,
      totalForLevel
    };
  }

  /**
   * Récupération stats section
   * @param {string} section - Section concernée
   * @returns {object} Statistiques complètes
   */
  getSectionStats(section) {
    if (!this.sections[section]) return null;

    const data = this.data.sections[section];
    const progress = this.getNextLevelProgress(section);

    return {
      ...data,
      ...progress,
      sectionName: this.sections[section].name,
      sectionColor: this.sections[section].color,
      sectionIcon: this.sections[section].icon
    };
  }

  /**
   * Récupération progression globale (alias pour compatibilité)
   * @returns {object} Progression globale
   */
  getProgress() {
    const progress = this.getNextLevelProgress('global');
    return {
      level: progress.currentLevel,
      currentXP: progress.progressInLevel,
      xpForNextLevel: progress.totalForLevel,
      totalXP: this.data.global.totalXP,
      percentage: progress.percentage
    };
  }

  /**
   * Récupération stats globales
   * @returns {object} Vue d'ensemble
   */
  getGlobalStats() {
    const progress = this.getNextLevelProgress('global');
    
    const sectionStats = Object.keys(this.sections).map(key => ({
      key,
      ...this.getSectionStats(key)
    }));

    return {
      global: {
        ...this.data.global,
        ...progress
      },
      sections: sectionStats,
      recentActivity: this.data.history.slice(-10).reverse()
    };
  }

  /**
   * Mise à jour stats leçon (complétion, score, temps)
   * @param {string} section - Section concernée
   * @param {object} lessonData - Données leçon
   */
  updateLessonStats(section, lessonData) {
    if (!this.sections[section]) return;

    const sectionData = this.data.sections[section];
    
    sectionData.lessonsCompleted++;
    
    if (lessonData.score === 100) {
      sectionData.perfectScores++;
    }
    
    // Calcul moyenne glissante
    const totalLessons = sectionData.lessonsCompleted;
    sectionData.averageScore = 
      ((sectionData.averageScore * (totalLessons - 1)) + lessonData.score) / totalLessons;
    
    if (lessonData.timeSpent) {
      sectionData.totalTime += lessonData.timeSpent;
    }

    this._save();
  }

  /**
   * Export données pour Dashboard
   * @returns {object} Données formatées Dashboard
   */
  exportForDashboard() {
    return {
      timestamp: new Date().toISOString(),
      global: this.getGlobalStats().global,
      sections: Object.keys(this.sections).map(key => {
        const stats = this.getSectionStats(key);
        return {
          id: key,
          name: stats.sectionName,
          icon: stats.sectionIcon,
          color: stats.sectionColor,
          level: stats.level,
          xp: stats.xp,
          progress: stats.percentage,
          lessonsCompleted: stats.lessonsCompleted,
          perfectScores: stats.perfectScores,
          averageScore: Math.round(stats.averageScore)
        };
      }),
      recentActivity: this.data.history.slice(-5).reverse()
    };
  }

  /**
   * Sauvegarde données
   * @private
   */
  _save() {
    this.storage.set('xp_unified', this.data);
  }

  /**
   * Reset section (debug/tests)
   * @param {string} section - Section à reset
   */
  resetSection(section) {
    if (!this.sections[section]) return;
    
    this.data.sections[section] = {
      xp: 0,
      level: 1,
      lessonsCompleted: 0,
      perfectScores: 0,
      averageScore: 0,
      totalTime: 0,
      lastActivity: null
    };
    
    this._save();
    console.log(`🔄 Section ${section} reset`);
  }

  /**
   * Reset complet (debug/tests)
   */
  resetAll() {
    this.data = this._getDefaultData();
    this._save();
    console.log('🔄 XP System completely reset');
  }
}

// ============================================================================
// EXPORT GLOBAL (Compatibilité Script Classique)
// ============================================================================

window.XPSystemUnified = XPSystemUnified;

// Initialisation après chargement StorageAdapter et EventBus
if (window.storageAdapter && window.eventBus) {
  window.xpSystemUnified = new XPSystemUnified(
    window.storageAdapter,
    window.eventBus
  );
  console.log('✅ XP System Unified loaded successfully!');
} else {
  console.warn('⚠️ XP System: Waiting for dependencies (Storage, EventBus)');
  
  // Retry après délai
  setTimeout(() => {
    if (window.storageAdapter && window.eventBus) {
      window.xpSystemUnified = new XPSystemUnified(
        window.storageAdapter,
        window.eventBus
      );
      console.log('✅ XP System Unified loaded (delayed)');
    }
  }, 500);
}
