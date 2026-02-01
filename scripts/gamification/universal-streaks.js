/**
 * 🔥 UNIVERSAL STREAK SYSTEM
 * Système de streaks GLOBAL pour tout le site
 * Compatible avec TOUTES les sections : français, anglais, maths, sciences, histoire, etc.
 * Version: 1.0
 * Date: 19/01/2026
 */

class UniversalStreakManager {
    constructor() {
        this.storageKey = 'lemondedescurieux_streaks_global';
        this.data = this.loadData();
        this.achievements = this.initAchievements();
        this.displayElement = null;
        
        console.log('🔥 UniversalStreakManager: Initialisé', this.data);
    }

    /**
     * 💾 Charge les données depuis localStorage
     */
    loadData() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                const parsed = JSON.parse(stored);
                console.log('🔥 Données streaks chargées:', parsed);
                return parsed;
            }
        } catch (e) {
            console.error('❌ Erreur chargement streaks:', e);
        }

        return this.getDefaultData();
    }

    /**
     * 🎯 Données par défaut
     */
    getDefaultData() {
        return {
            currentStreak: 0,
            longestStreak: 0,
            totalActiveDays: 0,
            lastActivityDate: null,
            lastActivityTimestamp: null,
            activeSections: [],
            streakHistory: [],
            achievements: []
        };
    }

    /**
     * 💾 Sauvegarde les données
     */
    saveData() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
            console.log('💾 Streaks sauvegardés:', this.data.currentStreak);
            return true;
        } catch (e) {
            console.error('❌ Erreur sauvegarde streaks:', e);
            return false;
        }
    }

    /**
     * 🏆 Définition des achievements
     */
    initAchievements() {
        return [
            { id: 'streak_3', name: 'Débutant Assidu', threshold: 3, emoji: '🔥', earned: false },
            { id: 'streak_7', name: 'Semaine Parfaite', threshold: 7, emoji: '⭐', earned: false },
            { id: 'streak_14', name: 'Quinzaine Champion', threshold: 14, emoji: '🏆', earned: false },
            { id: 'streak_30', name: 'Mois Magistral', threshold: 30, emoji: '👑', earned: false },
            { id: 'streak_60', name: 'Bimestre Brillant', threshold: 60, emoji: '💎', earned: false },
            { id: 'streak_100', name: 'Centenaire Curieux', threshold: 100, emoji: '🌟', earned: false }
        ];
    }

    /**
     * 📅 Obtenir la date du jour (format YYYY-MM-DD)
     */
    getTodayString() {
        const now = new Date();
        return now.toISOString().split('T')[0];
    }

    /**
     * ✅ Vérifier si c'est aujourd'hui
     */
    isToday(dateString) {
        return dateString === this.getTodayString();
    }

    /**
     * ✅ Vérifier si c'est hier
     */
    isYesterday(dateString) {
        if (!dateString) return false;
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayString = yesterday.toISOString().split('T')[0];
        
        return dateString === yesterdayString;
    }

    /**
     * 📝 Enregistrer une activité (depuis N'IMPORTE QUELLE section)
     */
    recordActivity(sectionName = 'unknown') {
        const today = this.getTodayString();
        const lastActivity = this.data.lastActivityDate;

        console.log('🔥 Enregistrement activité:', { section: sectionName, today, lastActivity });

        // Si déjà enregistré aujourd'hui
        if (this.isToday(lastActivity)) {
            // Ajouter la section si pas déjà dans la liste du jour
            if (!this.data.activeSections.includes(sectionName)) {
                this.data.activeSections.push(sectionName);
                this.saveData();
            }
            
            console.log('🔥 Activité déjà enregistrée aujourd\'hui');
            return {
                streakUpdated: false,
                currentStreak: this.data.currentStreak,
                message: 'Activité déjà enregistrée aujourd\'hui'
            };
        }

        // Mise à jour du streak
        if (this.isYesterday(lastActivity) || this.data.currentStreak === 0) {
            // Continuation ou démarrage
            this.data.currentStreak++;
            console.log('🔥 Streak augmenté:', this.data.currentStreak);
        } else {
            // Streak cassé, redémarrage
            console.log('💔 Streak cassé, redémarrage à 1');
            this.data.currentStreak = 1;
        }

        // Mise à jour statistiques
        this.data.lastActivityDate = today;
        this.data.lastActivityTimestamp = Date.now();
        this.data.totalActiveDays++;
        this.data.activeSections = [sectionName]; // Reset pour nouveau jour

        // Mise à jour record
        if (this.data.currentStreak > this.data.longestStreak) {
            this.data.longestStreak = this.data.currentStreak;
            console.log('🏆 Nouveau record !', this.data.longestStreak);
        }

        // Historique
        this.data.streakHistory.push({
            date: today,
            streak: this.data.currentStreak,
            section: sectionName,
            timestamp: Date.now()
        });

        // Limiter historique
        if (this.data.streakHistory.length > 100) {
            this.data.streakHistory = this.data.streakHistory.slice(-100);
        }

        // Vérifier achievements
        const newAchievements = this.checkAchievements();

        // Sauvegarder
        this.saveData();

        // Mettre à jour affichage
        this.updateDisplay();

        // Événement personnalisé
        this.dispatchEvent('streak:updated', {
            currentStreak: this.data.currentStreak,
            longestStreak: this.data.longestStreak,
            newAchievements: newAchievements
        });

        return {
            streakUpdated: true,
            currentStreak: this.data.currentStreak,
            longestStreak: this.data.longestStreak,
            newAchievements: newAchievements
        };
    }

    /**
     * 🏆 Vérifier et attribuer achievements
     */
    checkAchievements() {
        const newAchievements = [];
        const currentStreak = this.data.currentStreak;

        this.achievements.forEach(achievement => {
            if (currentStreak >= achievement.threshold && !achievement.earned) {
                achievement.earned = true;
                this.data.achievements.push({
                    id: achievement.id,
                    name: achievement.name,
                    earnedDate: this.getTodayString(),
                    earnedAt: Date.now()
                });
                newAchievements.push(achievement);
                console.log('🏆 Achievement débloqué !', achievement.name);
            }
        });

        if (newAchievements.length > 0) {
            this.saveData();
            this.showAchievementNotification(newAchievements);
        }

        return newAchievements;
    }

    /**
     * 🎉 Afficher notification achievement
     */
    showAchievementNotification(achievements) {
        achievements.forEach((achievement, index) => {
            setTimeout(() => {
                this.createNotificationElement(achievement);
            }, index * 500);
        });
    }

    /**
     * 📢 Créer élément de notification
     */
    createNotificationElement(achievement) {
        const notification = document.createElement('div');
        notification.className = 'streak-achievement-notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.5s ease;
            max-width: 300px;
            font-family: 'Press Start 2P', monospace;
            font-size: 10px;
            line-height: 1.6;
        `;
        
        notification.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 40px; margin-bottom: 10px;">${achievement.emoji}</div>
                <div style="font-weight: bold; margin-bottom: 5px;">ACHIEVEMENT !</div>
                <div>${achievement.name}</div>
            </div>
        `;

        document.body.appendChild(notification);

        // Animation d'entrée
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Retrait après 3 secondes
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    /**
     * 📊 Obtenir le streak actuel
     */
    getCurrentStreak() {
        return this.data.currentStreak;
    }

    /**
     * 🏆 Obtenir le record personnel
     */
    getLongestStreak() {
        return this.data.longestStreak;
    }

    /**
     * 📈 Obtenir toutes les statistiques
     */
    getStats() {
        return {
            currentStreak: this.data.currentStreak,
            longestStreak: this.data.longestStreak,
            totalActiveDays: this.data.totalActiveDays,
            lastActivity: this.data.lastActivityDate,
            activeSections: this.data.activeSections,
            achievements: this.data.achievements
        };
    }

    /**
     * 🎨 Créer et initialiser l'affichage du badge
     */
    initializeDisplay(containerId = 'gamification-bar') {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn('⚠️ Container', containerId, 'non trouvé');
            return;
        }

        // Créer le badge s'il n'existe pas
        let streakDisplay = document.getElementById('streak-display');
        if (!streakDisplay) {
            streakDisplay = document.createElement('div');
            streakDisplay.id = 'streak-display';
            streakDisplay.className = 'streak-badge';
            streakDisplay.style.cssText = `
                display: flex;
                align-items: center;
                gap: 5px;
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                padding: 8px 15px;
                border-radius: 20px;
                color: white;
                font-weight: bold;
                cursor: pointer;
                transition: transform 0.2s;
                font-family: 'Press Start 2P', monospace;
                font-size: 12px;
            `;
            
            streakDisplay.addEventListener('click', () => this.showStreakDetails());
            streakDisplay.addEventListener('mouseenter', () => {
                streakDisplay.style.transform = 'scale(1.05)';
            });
            streakDisplay.addEventListener('mouseleave', () => {
                streakDisplay.style.transform = 'scale(1)';
            });
            
            container.insertBefore(streakDisplay, container.firstChild);
        }

        this.displayElement = streakDisplay;
        this.updateDisplay();
        
        console.log('✅ Badge streak initialisé');
    }

    /**
     * 🔄 Mettre à jour l'affichage
     */
    updateDisplay() {
        if (!this.displayElement) return;

        const streak = this.data.currentStreak;
        const emoji = streak >= 7 ? '🔥' : (streak >= 3 ? '⭐' : '🔥');

        this.displayElement.innerHTML = `
            ${emoji} <span class="streak-count">${streak}</span> ${streak > 1 ? 'jours' : 'jour'}
        `;

        // Animation si nouveau record
        if (streak === this.data.longestStreak && streak > 1) {
            this.displayElement.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                this.displayElement.style.animation = '';
            }, 1000);
        }
    }

    /**
     * 📋 Afficher modal de détails
     */
    showStreakDetails() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            font-family: 'Press Start 2P', monospace;
        `;
        
        modal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 20px; max-width: 500px; width: 90%;">
                <h2 style="text-align: center; margin-bottom: 20px; font-size: 16px;">📊 Statistiques Streak</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 20px;">
                    <div style="text-align: center; padding: 15px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 10px; color: white;">
                        <div style="font-size: 24px; margin-bottom: 5px;">🔥</div>
                        <div style="font-size: 20px; font-weight: bold;">${this.data.currentStreak}</div>
                        <div style="font-size: 8px; margin-top: 5px;">Jours consécutifs</div>
                    </div>
                    
                    <div style="text-align: center; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; color: white;">
                        <div style="font-size: 24px; margin-bottom: 5px;">🏆</div>
                        <div style="font-size: 20px; font-weight: bold;">${this.data.longestStreak}</div>
                        <div style="font-size: 8px; margin-top: 5px;">Record personnel</div>
                    </div>
                    
                    <div style="text-align: center; padding: 15px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 10px; color: white;">
                        <div style="font-size: 24px; margin-bottom: 5px;">📅</div>
                        <div style="font-size: 20px; font-weight: bold;">${this.data.totalActiveDays}</div>
                        <div style="font-size: 8px; margin-top: 5px;">Total jours actifs</div>
                    </div>
                </div>

                ${this.data.achievements.length > 0 ? `
                    <div style="margin-bottom: 20px;">
                        <h3 style="font-size: 12px; margin-bottom: 10px;">🏅 Achievements Débloqués</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                            ${this.data.achievements.map(a => {
                                const achievement = this.achievements.find(ach => ach.id === a.id);
                                return `
                                    <div style="display: flex; align-items: center; gap: 5px; background: #f0f0f0; padding: 8px 12px; border-radius: 15px; font-size: 10px;">
                                        <span style="font-size: 16px;">${achievement.emoji}</span>
                                        <span>${achievement.name}</span>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}

                <button onclick="this.closest('div[style*=fixed]').remove()" style="width: 100%; padding: 15px; background: #667eea; color: white; border: none; border-radius: 10px; font-family: 'Press Start 2P', monospace; font-size: 10px; cursor: pointer;">
                    FERMER
                </button>
            </div>
        `;

        document.body.appendChild(modal);

        // Fermeture au clic sur le fond
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    /**
     * 📡 Dispatcher événement personnalisé
     */
    dispatchEvent(eventName, detail) {
        const event = new CustomEvent(eventName, {
            detail: detail,
            bubbles: true
        });
        document.dispatchEvent(event);
        console.log('📡 Événement dispatché:', eventName, detail);
    }

    /**
     * 🔄 Réinitialiser (pour tests)
     */
    reset() {
        console.warn('⚠️ RESET complet des streaks');
        this.data = this.getDefaultData();
        this.saveData();
        this.updateDisplay();
    }
}

// Export global
if (typeof window !== 'undefined') {
    window.UniversalStreakManager = UniversalStreakManager;
    console.log('✅ UniversalStreakManager disponible globalement');
}
