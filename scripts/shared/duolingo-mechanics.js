/**
 * 🎮 Duolingo Mechanics - Hearts & Streaks System
 * 
 * Système de gamification réutilisable inspiré de Duolingo:
 *   - HeartSystem: Gestion des cœurs/vies avec régénération temporelle
 *   - StreakSystem: Gestion des séries quotidiennes avec notifications
 * 
 * Utilisé par: Français, Anglais, Maths, etc.
 * 
 * @version 2.0.0
 * @author Le Monde des Curieux
 */

// ============================================================================
// HEART SYSTEM - Système de Cœurs/Vies
// ============================================================================

class HeartSystem {
  constructor(storageKey = 'hearts_data') {
    this.storageKey = storageKey;
    this.maxHearts = 5;
    this.regenTimeMinutes = 30; // Régénération: 1 cœur / 30 minutes
    
    // Charger ou initialiser données
    this.data = this.loadData();
    
    // Lancer la régénération automatique
    this.startRegeneration();
    
    console.log('💖 Heart System initialized:', this.data);
  }

  /**
   * Charger données depuis localStorage
   */
  loadData() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const data = JSON.parse(stored);
        
        // Traiter la régénération pendant que l'utilisateur était absent
        this.processOfflineRegeneration(data);
        
        return data;
      }
    } catch (error) {
      console.error('Error loading hearts data:', error);
    }
    
    // Données par défaut
    return {
      currentHearts: this.maxHearts,
      lastHeartLoss: null,
      regenStartTime: null,
      totalHeartsLost: 0,
      totalHeartsRegained: 0
    };
  }

  /**
   * Sauvegarder données
   */
  saveData() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
      
      // Émettre événement pour notifier changement
      if (window.eventBus) {
        window.eventBus.emit('hearts:updated', {
          current: this.data.currentHearts,
          max: this.maxHearts
        });
      }
    } catch (error) {
      console.error('Error saving hearts data:', error);
    }
  }

  /**
   * Traiter régénération pendant absence utilisateur
   */
  processOfflineRegeneration(data) {
    if (!data.regenStartTime || data.currentHearts >= this.maxHearts) {
      return;
    }
    
    const now = Date.now();
    const regenStart = new Date(data.regenStartTime).getTime();
    const minutesPassed = Math.floor((now - regenStart) / (1000 * 60));
    
    // Calculer combien de cœurs ont régénéré
    const heartsRegained = Math.floor(minutesPassed / this.regenTimeMinutes);
    
    if (heartsRegained > 0) {
      const newHearts = Math.min(
        data.currentHearts + heartsRegained,
        this.maxHearts
      );
      
      data.currentHearts = newHearts;
      data.totalHeartsRegained += heartsRegained;
      
      console.log(`💖 Offline regen: +${heartsRegained} hearts`);
      
      // Si tous cœurs régénérés, arrêter timer
      if (newHearts >= this.maxHearts) {
        data.regenStartTime = null;
      } else {
        // Ajuster temps début régénération
        data.regenStartTime = new Date(
          regenStart + (heartsRegained * this.regenTimeMinutes * 60 * 1000)
        ).toISOString();
      }
    }
  }

  /**
   * Obtenir nombre actuel de cœurs
   */
  getCurrentHearts() {
    return this.data.currentHearts;
  }

  /**
   * Obtenir nombre maximum de cœurs
   */
  getMaxHearts() {
    return this.maxHearts;
  }

  /**
   * Vérifier si utilisateur a des cœurs disponibles
   */
  hasHearts() {
    return this.data.currentHearts > 0;
  }

  /**
   * Perdre un cœur (réponse incorrecte)
   * @returns {boolean} True si cœur perdu, False si plus de cœurs
   */
  loseHeart() {
    if (this.data.currentHearts > 0) {
      this.data.currentHearts--;
      this.data.lastHeartLoss = new Date().toISOString();
      this.data.totalHeartsLost++;
      
      // Démarrer timer régénération si premier cœur perdu
      if (this.data.currentHearts === this.maxHearts - 1) {
        this.data.regenStartTime = new Date().toISOString();
      }
      
      this.saveData();
      
      // Émettre événement
      if (window.eventBus) {
        window.eventBus.emit('hearts:lost', {
          remaining: this.data.currentHearts,
          total: this.maxHearts
        });
      }
      
      console.log(`💔 Heart lost! Remaining: ${this.data.currentHearts}`);
      
      return true;
    }
    
    return false;
  }

  /**
   * Gagner un cœur (régénération ou bonus)
   */
  gainHeart() {
    if (this.data.currentHearts < this.maxHearts) {
      this.data.currentHearts++;
      this.data.totalHeartsRegained++;
      
      // Arrêter timer si tous cœurs récupérés
      if (this.data.currentHearts >= this.maxHearts) {
        this.data.regenStartTime = null;
      }
      
      this.saveData();
      
      // Émettre événement
      if (window.eventBus) {
        window.eventBus.emit('hearts:gained', {
          current: this.data.currentHearts,
          max: this.maxHearts
        });
      }
      
      console.log(`💚 Heart gained! Current: ${this.data.currentHearts}`);
      
      return true;
    }
    
    return false;
  }

  /**
   * Restaurer tous les cœurs (bonus streak, achat, etc.)
   */
  restoreAllHearts() {
    const heartsRestored = this.maxHearts - this.data.currentHearts;
    
    if (heartsRestored > 0) {
      this.data.currentHearts = this.maxHearts;
      this.data.regenStartTime = null;
      this.data.totalHeartsRegained += heartsRestored;
      
      this.saveData();
      
      // Émettre événement
      if (window.eventBus) {
        window.eventBus.emit('hearts:restored', {
          heartsRestored
        });
      }
      
      console.log(`💖 All hearts restored! (+${heartsRestored})`);
    }
  }

  /**
   * Obtenir temps restant avant prochaine régénération (en minutes)
   */
  getTimeUntilNextRegen() {
    if (!this.data.regenStartTime || this.data.currentHearts >= this.maxHearts) {
      return 0;
    }
    
    const now = Date.now();
    const regenStart = new Date(this.data.regenStartTime).getTime();
    const minutesPassed = Math.floor((now - regenStart) / (1000 * 60));
    const minutesUntilNext = this.regenTimeMinutes - (minutesPassed % this.regenTimeMinutes);
    
    return minutesUntilNext;
  }

  /**
   * Démarrer régénération automatique (tick chaque minute)
   */
  startRegeneration() {
    // Vérifier régénération toutes les minutes
    this.regenInterval = setInterval(() => {
      if (this.data.currentHearts < this.maxHearts && this.data.regenStartTime) {
        const now = Date.now();
        const regenStart = new Date(this.data.regenStartTime).getTime();
        const minutesPassed = Math.floor((now - regenStart) / (1000 * 60));
        
        // Régénérer si 30 minutes écoulées
        if (minutesPassed >= this.regenTimeMinutes) {
          this.gainHeart();
        }
      }
    }, 60000); // Check toutes les 60 secondes
  }

  /**
   * Arrêter régénération automatique
   */
  stopRegeneration() {
    if (this.regenInterval) {
      clearInterval(this.regenInterval);
    }
  }

  /**
   * Obtenir statistiques complètes
   */
  getStats() {
    return {
      current: this.data.currentHearts,
      max: this.maxHearts,
      totalLost: this.data.totalHeartsLost,
      totalRegained: this.data.totalHeartsRegained,
      timeUntilNext: this.getTimeUntilNextRegen(),
      isRegenerating: this.data.currentHearts < this.maxHearts
    };
  }

  /**
   * Réinitialiser système (debug)
   */
  reset() {
    this.data = {
      currentHearts: this.maxHearts,
      lastHeartLoss: null,
      regenStartTime: null,
      totalHeartsLost: 0,
      totalHeartsRegained: 0
    };
    this.saveData();
    console.log('💖 Heart System reset!');
  }
}

// ============================================================================
// STREAK SYSTEM - Système de Séries Quotidiennes
// ============================================================================

class StreakSystem {
  constructor(storageKey = 'streak_data') {
    this.storageKey = storageKey;
    
    // Charger ou initialiser données
    this.data = this.loadData();
    
    // Vérifier streak au chargement
    this.checkStreakStatus();
    
    console.log('🔥 Streak System initialized:', this.data);
  }

  /**
   * Charger données depuis localStorage
   */
  loadData() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading streak data:', error);
    }
    
    // Données par défaut
    return {
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: null,
      streakFreezeUsed: false,
      totalActiveDays: 0,
      streakHistory: []
    };
  }

  /**
   * Sauvegarder données
   */
  saveData() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
      
      // Émettre événement
      if (window.eventBus) {
        window.eventBus.emit('streak:updated', {
          current: this.data.currentStreak,
          longest: this.data.longestStreak
        });
      }
    } catch (error) {
      console.error('Error saving streak data:', error);
    }
  }

  /**
   * Vérifier statut du streak (cassé ou maintenu)
   */
  checkStreakStatus() {
    const today = this.getTodayDateString();
    const lastActivity = this.data.lastActivityDate;
    
    if (!lastActivity) {
      return; // Pas encore d'activité
    }
    
    const daysSinceLastActivity = this.getDaysDifference(lastActivity, today);
    
    if (daysSinceLastActivity === 0) {
      // Activité déjà enregistrée aujourd'hui
      return;
    }
    
    if (daysSinceLastActivity === 1) {
      // Hier : streak maintenu
      return;
    }
    
    if (daysSinceLastActivity > 1) {
      // Streak cassé
      console.log(`💔 Streak broken! Days missed: ${daysSinceLastActivity - 1}`);
      
      // Sauvegarder dans historique si streak > 0
      if (this.data.currentStreak > 0) {
        this.data.streakHistory.push({
          streak: this.data.currentStreak,
          endDate: lastActivity,
          daysMissed: daysSinceLastActivity - 1
        });
        
        // Limiter historique à 10 derniers streaks
        if (this.data.streakHistory.length > 10) {
          this.data.streakHistory.shift();
        }
      }
      
      // Réinitialiser streak
      this.data.currentStreak = 0;
      this.data.streakFreezeUsed = false;
      
      this.saveData();
      
      // Émettre événement
      if (window.eventBus) {
        window.eventBus.emit('streak:broken', {
          daysMissed: daysSinceLastActivity - 1
        });
      }
    }
  }

  /**
   * Enregistrer une activité (complétée une leçon)
   */
  recordActivity() {
    const today = this.getTodayDateString();
    const lastActivity = this.data.lastActivityDate;
    
    // Si déjà enregistré aujourd'hui, ne rien faire
    if (lastActivity === today) {
      console.log('🔥 Activity already recorded today');
      return false;
    }
    
    // Calculer jours depuis dernière activité
    const daysSinceLastActivity = lastActivity 
      ? this.getDaysDifference(lastActivity, today)
      : 0;
    
    if (!lastActivity || daysSinceLastActivity === 1) {
      // Continuation du streak (hier ou première fois)
      this.data.currentStreak++;
      this.data.totalActiveDays++;
      
      // Mettre à jour plus long streak
      if (this.data.currentStreak > this.data.longestStreak) {
        this.data.longestStreak = this.data.currentStreak;
      }
      
    } else if (daysSinceLastActivity > 1) {
      // Streak cassé, recommencer
      this.data.currentStreak = 1;
      this.data.totalActiveDays++;
      this.data.streakFreezeUsed = false;
    }
    
    this.data.lastActivityDate = today;
    this.saveData();
    
    console.log(`🔥 Streak updated: ${this.data.currentStreak} days`);
    
    // Émettre événement
    if (window.eventBus) {
      window.eventBus.emit('streak:continued', {
        streak: this.data.currentStreak,
        isNew: daysSinceLastActivity > 1
      });
    }
    
    // Notification milestones
    this.checkMilestones();
    
    return true;
  }

  /**
   * Vérifier et notifier milestones (3, 7, 14, 30, 100 jours)
   */
  checkMilestones() {
    const milestones = [3, 7, 14, 30, 50, 100, 365];
    const current = this.data.currentStreak;
    
    if (milestones.includes(current)) {
      console.log(`🎉 Milestone reached: ${current} days!`);
      
      if (window.eventBus) {
        window.eventBus.emit('streak:milestone', {
          days: current,
          message: this.getMilestoneMessage(current)
        });
      }
    }
  }

  /**
   * Messages de célébration selon milestone
   */
  getMilestoneMessage(days) {
    const messages = {
      3: "3 jours d'affilée ! Tu prends de bonnes habitudes ! 🌱",
      7: "Une semaine complète ! Bravo pour ta régularité ! 🎯",
      14: "2 semaines ! Tu es sur une excellente lancée ! 🚀",
      30: "Un mois complet ! Tu es un champion ! 🏆",
      50: "50 jours ! Ta persévérance est incroyable ! 💎",
      100: "100 jours de suite ! Tu es une légende ! 👑",
      365: "UN AN COMPLET ! Tu es exceptionnel ! 🌟"
    };
    
    return messages[days] || `${days} jours ! Continue comme ça ! 🔥`;
  }

  /**
   * Obtenir streak actuel
   */
  getCurrentStreak() {
    return this.data.currentStreak;
  }

  /**
   * Obtenir plus long streak
   */
  getLongestStreak() {
    return this.data.longestStreak;
  }

  /**
   * Vérifier si activité enregistrée aujourd'hui
   */
  hasActivityToday() {
    return this.data.lastActivityDate === this.getTodayDateString();
  }

  /**
   * Utiliser "Streak Freeze" (protection 1 jour manqué)
   * Feature future: nécessite gems/monnaie virtuelle
   */
  useStreakFreeze() {
    if (!this.data.streakFreezeUsed) {
      this.data.streakFreezeUsed = true;
      this.saveData();
      
      console.log('🛡️ Streak Freeze activated!');
      
      if (window.eventBus) {
        window.eventBus.emit('streak:freeze_used');
      }
      
      return true;
    }
    
    return false;
  }

  /**
   * Obtenir date du jour (format YYYY-MM-DD)
   */
  getTodayDateString() {
    const now = new Date();
    return now.toISOString().split('T')[0];
  }

  /**
   * Calculer différence en jours entre deux dates
   */
  getDaysDifference(date1String, date2String) {
    const d1 = new Date(date1String);
    const d2 = new Date(date2String);
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  /**
   * Obtenir statistiques complètes
   */
  getStats() {
    return {
      current: this.data.currentStreak,
      longest: this.data.longestStreak,
      totalActiveDays: this.data.totalActiveDays,
      lastActivity: this.data.lastActivityDate,
      hasToday: this.hasActivityToday(),
      freezeAvailable: !this.data.streakFreezeUsed,
      history: this.data.streakHistory
    };
  }

  /**
   * Réinitialiser système (debug)
   */
  reset() {
    this.data = {
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: null,
      streakFreezeUsed: false,
      totalActiveDays: 0,
      streakHistory: []
    };
    this.saveData();
    console.log('🔥 Streak System reset!');
  }
}

// ============================================================================
// EXPORT GLOBAL
// ============================================================================

// Rendre disponible globalement
window.HeartSystem = HeartSystem;
window.StreakSystem = StreakSystem;

console.log('✅ Duolingo Mechanics loaded successfully!');
