/**
 * UI BADGES - Le Monde des Curieux
 * Interface utilisateur pour affichage badges
 * Modal badges, notifications popup, intégration dashboard
 */

class BadgeUI {
    constructor() {
        this.badgeSystem = window.badgeSystem;
        this.init();
    }

    /**
     * Initialiser UI
     */
    init() {
        this.injectCSS();
        this.createBadgeButton();
        this.createBadgeModal();
        this.checkForNotifications();
    }

    /**
     * Injecter CSS styles
     */
    injectCSS() {
        const style = document.createElement('style');
        style.textContent = `
            /* Bouton Badges */
            .badge-button {
                position: fixed;
                top: 80px;
                right: 20px;
                z-index: 999;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: 4px solid rgba(0, 0, 0, 0.3);
                border-radius: 50%;
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5em;
                cursor: pointer;
                box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
                transition: all 0.2s;
            }

            .badge-button:hover {
                transform: translateY(-2px);
                box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.4);
            }

            .badge-button:active {
                transform: translateY(0);
                box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
            }

            .badge-count {
                position: absolute;
                top: -5px;
                right: -5px;
                background: #ff4444;
                color: white;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.7em;
                font-weight: bold;
                border: 2px solid white;
            }

            /* Modal Badges */
            .badge-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                z-index: 9999;
                overflow-y: auto;
            }

            .badge-modal.active {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .badge-modal-content {
                background: white;
                border-radius: 16px;
                max-width: 800px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                padding: 30px;
                box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.3);
                border: 4px solid rgba(0, 0, 0, 0.2);
            }

            .badge-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 3px solid #e0e0e0;
            }

            .badge-modal-title {
                font-family: 'Press Start 2P', cursive;
                font-size: 1.5em;
                color: #667eea;
            }

            .badge-modal-close {
                background: #ff4444;
                color: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                font-size: 1.2em;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .badge-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 15px;
                margin-bottom: 30px;
            }

            .badge-stat {
                background: #f8f9fa;
                padding: 15px;
                border-radius: 8px;
                text-align: center;
                border: 3px solid #e0e0e0;
            }

            .badge-stat-value {
                font-size: 2em;
                font-weight: bold;
                color: #667eea;
            }

            .badge-stat-label {
                font-size: 0.9em;
                color: #666;
                margin-top: 5px;
            }

            .badges-section {
                margin-bottom: 30px;
            }

            .badges-section-title {
                font-size: 1.2em;
                font-weight: bold;
                color: #667eea;
                margin-bottom: 15px;
            }

            .badges-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 15px;
            }

            .badge-card {
                background: #f8f9fa;
                border: 3px solid #e0e0e0;
                border-radius: 12px;
                padding: 20px;
                text-align: center;
                transition: all 0.2s;
            }

            .badge-card.earned {
                background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
                border-color: #4caf50;
            }

            .badge-card.locked {
                opacity: 0.5;
                filter: grayscale(100%);
            }

            .badge-icon {
                font-size: 3em;
                margin-bottom: 10px;
            }

            .badge-name {
                font-weight: bold;
                margin-bottom: 5px;
                color: #333;
            }

            .badge-description {
                font-size: 0.9em;
                color: #666;
                margin-bottom: 10px;
            }

            .badge-xp {
                color: #667eea;
                font-weight: bold;
                font-size: 0.9em;
            }

            .badge-progress {
                margin-top: 10px;
                font-size: 0.85em;
                color: #666;
            }

            .badge-progress-bar {
                width: 100%;
                height: 8px;
                background: #e0e0e0;
                border-radius: 4px;
                overflow: hidden;
                margin-top: 5px;
            }

            .badge-progress-fill {
                height: 100%;
                background: #667eea;
                transition: width 0.3s;
            }

            /* Notification Badge */
            .badge-notification {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
                background: white;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                text-align: center;
                max-width: 400px;
                border: 4px solid #4caf50;
                animation: badgePopIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            }

            @keyframes badgePopIn {
                0% {
                    transform: translate(-50%, -50%) scale(0) rotate(-180deg);
                }
                100% {
                    transform: translate(-50%, -50%) scale(1) rotate(0deg);
                }
            }

            .badge-notification-icon {
                font-size: 5em;
                margin-bottom: 20px;
                animation: badgeBounce 1s infinite;
            }

            @keyframes badgeBounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }

            .badge-notification-title {
                font-family: 'Press Start 2P', cursive;
                font-size: 1.5em;
                color: #4caf50;
                margin-bottom: 10px;
            }

            .badge-notification-name {
                font-size: 1.2em;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .badge-notification-desc {
                color: #666;
                margin-bottom: 20px;
            }

            .badge-notification-xp {
                font-size: 1.1em;
                color: #667eea;
                font-weight: bold;
            }

            .badge-notification-close {
                margin-top: 20px;
                background: #667eea;
                color: white;
                border: none;
                padding: 10px 30px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1em;
                font-weight: bold;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .badge-button {
                    width: 50px;
                    height: 50px;
                    font-size: 1.2em;
                }

                .badge-modal-content {
                    padding: 20px;
                }

                .badges-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Créer bouton badges flottant
     */
    createBadgeButton() {
        const button = document.createElement('button');
        button.className = 'badge-button';
        button.innerHTML = '🏆';
        button.title = 'Mes badges';
        
        const stats = this.badgeSystem.getStats();
        if (stats.earned > 0) {
            const count = document.createElement('span');
            count.className = 'badge-count';
            count.textContent = stats.earned;
            button.appendChild(count);
        }

        button.onclick = () => this.openModal();
        document.body.appendChild(button);
    }

    /**
     * Créer modal badges
     */
    createBadgeModal() {
        const modal = document.createElement('div');
        modal.className = 'badge-modal';
        modal.id = 'badgeModal';
        modal.innerHTML = this.generateModalContent();
        
        modal.onclick = (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        };

        document.body.appendChild(modal);
    }

    /**
     * Générer contenu modal
     */
    generateModalContent() {
        const stats = this.badgeSystem.getStats();
        const earnedBadges = this.badgeSystem.getEarnedBadges();
        const lockedBadges = this.badgeSystem.getUnlockedBadges();

        return `
            <div class="badge-modal-content">
                <div class="badge-modal-header">
                    <h2 class="badge-modal-title">🏆 Mes Badges</h2>
                    <button class="badge-modal-close" onclick="badgeUI.closeModal()">✕</button>
                </div>

                <div class="badge-stats">
                    <div class="badge-stat">
                        <div class="badge-stat-value">${stats.earned}</div>
                        <div class="badge-stat-label">Gagnés</div>
                    </div>
                    <div class="badge-stat">
                        <div class="badge-stat-value">${stats.remaining}</div>
                        <div class="badge-stat-label">Restants</div>
                    </div>
                    <div class="badge-stat">
                        <div class="badge-stat-value">${stats.completionRate}%</div>
                        <div class="badge-stat-label">Progression</div>
                    </div>
                    <div class="badge-stat">
                        <div class="badge-stat-value">+${stats.totalXPBonus}</div>
                        <div class="badge-stat-label">XP Bonus</div>
                    </div>
                </div>

                ${earnedBadges.length > 0 ? `
                <div class="badges-section">
                    <h3 class="badges-section-title">✅ Badges Gagnés</h3>
                    <div class="badges-grid">
                        ${earnedBadges.map(badge => this.renderBadgeCard(badge, true)).join('')}
                    </div>
                </div>
                ` : ''}

                ${lockedBadges.length > 0 ? `
                <div class="badges-section">
                    <h3 class="badges-section-title">🔒 Badges à Débloquer</h3>
                    <div class="badges-grid">
                        ${lockedBadges.map(badge => this.renderBadgeCard(badge, false)).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    /**
     * Rendre une carte badge
     */
    renderBadgeCard(badge, earned) {
        const progress = badge.progress;
        const progressPercent = progress ? 
            Math.round((progress.current / progress.target) * 100) : 0;

        return `
            <div class="badge-card ${earned ? 'earned' : 'locked'}">
                <div class="badge-icon">${badge.name.substring(0, 2)}</div>
                <div class="badge-name">${badge.name}</div>
                <div class="badge-description">${badge.description}</div>
                <div class="badge-xp">+${badge.xpBonus} XP</div>
                ${!earned && progress ? `
                    <div class="badge-progress">
                        ${progress.current} / ${progress.target}
                        <div class="badge-progress-bar">
                            <div class="badge-progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                    </div>
                ` : ''}
                ${earned && badge.earnedDate ? `
                    <div class="badge-progress">
                        ${new Date(badge.earnedDate).toLocaleDateString('fr-FR')}
                    </div>
                ` : ''}
            </div>
        `;
    }

    /**
     * Ouvrir modal
     */
    openModal() {
        const modal = document.getElementById('badgeModal');
        if (modal) {
            modal.innerHTML = this.generateModalContent();
            modal.classList.add('active');
        }
    }

    /**
     * Fermer modal
     */
    closeModal() {
        const modal = document.getElementById('badgeModal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    /**
     * Vérifier notifications badges
     */
    checkForNotifications() {
        const pending = this.badgeSystem.getPendingNotifications();
        if (pending.length > 0) {
            // Afficher notifications une par une
            this.showNotifications(pending);
        }
    }

    /**
     * Afficher notifications
     */
    showNotifications(badges) {
        if (badges.length === 0) return;

        const badge = badges[0];
        this.showNotification(badge);

        // Notifications suivantes après 3 secondes
        setTimeout(() => {
            this.showNotifications(badges.slice(1));
        }, 3000);
    }

    /**
     * Afficher une notification badge
     */
    showNotification(badge) {
        const notification = document.createElement('div');
        notification.className = 'badge-notification';
        notification.innerHTML = `
            <div class="badge-notification-icon">${badge.name.substring(0, 2)}</div>
            <div class="badge-notification-title">Badge Débloqué !</div>
            <div class="badge-notification-name">${badge.name}</div>
            <div class="badge-notification-desc">${badge.description}</div>
            <div class="badge-notification-xp">+${badge.xpBonus} XP</div>
            <button class="badge-notification-close" onclick="this.parentElement.remove()">
                Super !
            </button>
        `;

        document.body.appendChild(notification);

        // Auto-fermer après 5 secondes
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);

        // Marquer comme vue
        this.badgeSystem.clearNotifications();
    }

    /**
     * Refresh affichage
     */
    refresh() {
        // Mettre à jour compteur bouton
        const button = document.querySelector('.badge-button .badge-count');
        const stats = this.badgeSystem.getStats();
        if (button) {
            button.textContent = stats.earned;
        }

        // Si modal ouverte, rafraîchir
        const modal = document.getElementById('badgeModal');
        if (modal && modal.classList.contains('active')) {
            modal.innerHTML = this.generateModalContent();
        }
    }
}

// Instance globale
window.badgeUI = null;

// Initialiser au chargement
window.addEventListener('DOMContentLoaded', () => {
    window.badgeUI = new BadgeUI();
    console.log('✅ Badge UI chargée');
});

// Vérifier badges après chaque quiz
window.addEventListener('quizCompleted', () => {
    const newBadges = window.badgeSystem.checkBadges();
    if (newBadges.length > 0 && window.badgeUI) {
        window.badgeUI.refresh();
        window.badgeUI.showNotifications(newBadges);
    }
});
