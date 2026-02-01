// ========================================
// COMPOSANT ALPINE.JS : Dashboard Progression
// Le Monde des Curieux
// ========================================

function progressDashboard() {
    return {
        // ========================================
        // ÉTAT RÉACTIF
        // ========================================
        stats: {
            totalXP: 0,
            level: 1,
            streak: 0,
            hearts: 5,
            activitiesCompleted: 0
        },
        
        sectionXP: {
            francais: 0,
            anglais: 0,
            maths: 0,
            sciences: 0,
            histoire: 0
        },
        
        badges: [
            { id: 'first-steps', name: 'Premiers Pas', icon: '👶', unlocked: false },
            { id: 'streak-3', name: 'Série 3j', icon: '🔥', unlocked: false },
            { id: 'streak-7', name: 'Série 7j', icon: '🚀', unlocked: false },
            { id: 'xp-100', name: '100 XP', icon: '⭐', unlocked: false },
            { id: 'xp-500', name: '500 XP', icon: '💎', unlocked: false },
            { id: 'polyglot', name: 'Polyglotte', icon: '🌍', unlocked: false }
        ],
        
        chart: null,
        
        // ========================================
        // COMPUTED : Affichage cœurs
        // ========================================
        get heartsDisplay() {
            const filled = '❤️'.repeat(this.stats.hearts);
            const empty = '🖤'.repeat(5 - this.stats.hearts);
            return filled + empty;
        },
        
        // ========================================
        // INITIALISATION
        // ========================================
        init() {
            console.log('🚀 Dashboard Alpine.js initialisé');
            this.loadData();
            this.initChart();
            this.checkBadges();
            
            // Rafraîchissement automatique toutes les 5 secondes
            setInterval(() => {
                this.loadData();
                this.updateChart();
                this.checkBadges();
            }, 5000);
        },
        
        // ========================================
        // CHARGEMENT DONNÉES localStorage
        // ========================================
        loadData() {
            // XP
            const xpData = JSON.parse(localStorage.getItem('lemondedescurieux_xp') || '{}');
            this.stats.totalXP = xpData.total || 0;
            this.stats.level = Math.floor(this.stats.totalXP / 200) + 1;
            
            if (xpData.bySection) {
                this.sectionXP = {
                    francais: xpData.bySection.francais || 0,
                    anglais: xpData.bySection.anglais || 0,
                    maths: xpData.bySection.maths || 0,
                    sciences: xpData.bySection.sciences || 0,
                    histoire: xpData.bySection.histoire || 0
                };
            }
            
            // Streaks
            const streakData = JSON.parse(localStorage.getItem('lemondedescurieux_streaks') || '{}');
            this.stats.streak = streakData.currentStreak || 0;
            
            // Hearts (exemple : prendre français)
            const heartsData = JSON.parse(localStorage.getItem('lemondedescurieux_hearts') || '{}');
            if (heartsData.bySection && heartsData.bySection.francais) {
                this.stats.hearts = heartsData.bySection.francais.current || 5;
            }
            
            // Activités (exemple : compter total XP / 20)
            this.stats.activitiesCompleted = Math.floor(this.stats.totalXP / 20);
            
            console.log('📊 Données chargées:', this.stats);
        },
        
        // ========================================
        // INITIALISATION GRAPHIQUE Chart.js
        // ========================================
        initChart() {
            const ctx = document.getElementById('progressChart').getContext('2d');
            
            this.chart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Français', 'Anglais', 'Maths', 'Sciences', 'Histoire'],
                    datasets: [{
                        label: 'Progression par Matière',
                        data: [
                            this.sectionXP.francais,
                            this.sectionXP.anglais,
                            this.sectionXP.maths,
                            this.sectionXP.sciences,
                            this.sectionXP.histoire
                        ],
                        backgroundColor: 'rgba(102, 126, 234, 0.2)',
                        borderColor: 'rgba(102, 126, 234, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(102, 126, 234, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(102, 126, 234, 1)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 50
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        },
        
        // ========================================
        // MISE À JOUR GRAPHIQUE
        // ========================================
        updateChart() {
            if (!this.chart) return;
            
            this.chart.data.datasets[0].data = [
                this.sectionXP.francais,
                this.sectionXP.anglais,
                this.sectionXP.maths,
                this.sectionXP.sciences,
                this.sectionXP.histoire
            ];
            
            this.chart.update();
        },
        
        // ========================================
        // VÉRIFICATION DÉBLOCAGE BADGES
        // ========================================
        checkBadges() {
            // First Steps
            if (this.stats.activitiesCompleted > 0) {
                this.unlockBadge('first-steps');
            }
            
            // Streaks
            if (this.stats.streak >= 3) this.unlockBadge('streak-3');
            if (this.stats.streak >= 7) this.unlockBadge('streak-7');
            
            // XP
            if (this.stats.totalXP >= 100) this.unlockBadge('xp-100');
            if (this.stats.totalXP >= 500) this.unlockBadge('xp-500');
            
            // Polyglotte (2 sections > 50 XP)
            const sectionsAbove50 = Object.values(this.sectionXP).filter(xp => xp > 50).length;
            if (sectionsAbove50 >= 2) this.unlockBadge('polyglot');
        },
        
        // ========================================
        // DÉBLOQUER UN BADGE
        // ========================================
        unlockBadge(badgeId) {
            const badge = this.badges.find(b => b.id === badgeId);
            if (badge && !badge.unlocked) {
                badge.unlocked = true;
                console.log('🏆 Badge débloqué:', badge.name);
            }
        },
        
        // ========================================
        // AFFICHER DÉTAILS BADGE
        // ========================================
        showBadgeDetail(badge) {
            if (badge.unlocked) {
                alert(`🏆 ${badge.name}\n\nVous avez débloqué ce badge !`);
            } else {
                alert(`🔒 ${badge.name}\n\nCe badge est encore verrouillé.\nContinue à apprendre pour le débloquer !`);
            }
        },
        
        // ========================================
        // EXPORT PDF (TODO)
        // ========================================
        exportPDF() {
            alert('🚧 Fonctionnalité Export PDF en cours de développement...');
            // TODO: Intégrer jsPDF
        },

        // ========================================
        // RÉINITIALISER LA PROGRESSION
        // ========================================
        resetProgress() {
            const confirmed = confirm('⚠️ Êtes-vous sûr de vouloir réinitialiser TOUTE votre progression ?\n\nCette action est irréversible et supprimera :\n- Tous vos XP\n- Votre streak\n- Vos badges\n- Vos cœurs\n\nVoulez-vous continuer ?');

            if (confirmed) {
                // Supprimer toutes les données
                localStorage.removeItem('lemondedescurieux_xp');
                localStorage.removeItem('lemondedescurieux_streaks');
                localStorage.removeItem('lemondedescurieux_hearts');

                // Recharger les données
                this.loadData();
                this.updateChart();
                this.checkBadges();

                alert('✅ Progression réinitialisée avec succès !');
                console.log('🔄 Progression réinitialisée');
            }
        }
    };
}