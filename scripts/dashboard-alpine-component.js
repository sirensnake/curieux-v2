// ========================================
// COMPOSANT ALPINE.JS : Dashboard Progression
// Le Monde des Curieux
// Mis à jour : badges unifiés (7), niveau
// avec table XP cohérente, hearts global
// ========================================

// Table XP par niveau — identique à demo-gamification.html
const LEVEL_XP = [0,100,250,450,700,1000,1400,1900,2500,3200,4000,5000,6200,7600,9200,11000,13000,15300,18000,21000];

function getLevel(totalXP) {
    for (let i = LEVEL_XP.length - 1; i >= 0; i--) {
        if (totalXP >= LEVEL_XP[i]) return i + 1;
    }
    return 1;
}

function getLevelProgress(totalXP) {
    const lvl = getLevel(totalXP);
    if (lvl >= LEVEL_XP.length) return 100;
    const base = LEVEL_XP[lvl - 1];
    const next = LEVEL_XP[lvl];
    return Math.round(((totalXP - base) / (next - base)) * 100);
}

function getXPToNext(totalXP) {
    const lvl = getLevel(totalXP);
    if (lvl >= LEVEL_XP.length) return 0;
    return LEVEL_XP[lvl] - totalXP;
}

function progressDashboard() {
    return {
        // ========================================
        // ÉTAT RÉACTIF
        // ========================================
        stats: {
            totalXP: 0,
            level: 1,
            levelProgress: 0,   // 0-100 pour la barre
            xpToNext: 100,      // XP restants vers niveau suivant
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

        // 7 badges unifiés — mêmes IDs que badges-system.js et demo-gamification.html
        badges: [
            { id: 'streak_7',      name: 'Semaine',   icon: '🔥', unlocked: false, desc: '7 jours consécutifs' },
            { id: 'streak_30',     name: 'Champion',  icon: '🏆', unlocked: false, desc: '30 jours consécutifs' },
            { id: 'xp_1000',       name: 'Érudit',    icon: '📚', unlocked: false, desc: '1000 XP atteints' },
            { id: 'xp_5000',       name: 'Savant',    icon: '🎓', unlocked: false, desc: '5000 XP atteints' },
            { id: 'perfect_10',    name: 'Sans faute',icon: '⭐', unlocked: false, desc: '10 quiz parfaits' },
            { id: 'quiz_100',      name: 'Centurion', icon: '💯', unlocked: false, desc: '100 quiz réussis' },
            { id: 'all_subjects',  name: 'Polyvalent',icon: '🌟', unlocked: false, desc: '1 quiz par matière' }
        ],

        chart: null,

        // ========================================
        // COMPUTED : Affichage cœurs (❤️🖤)
        // ========================================
        get heartsDisplay() {
            const filled = '❤️'.repeat(this.stats.hearts);
            const empty  = '🖤'.repeat(5 - this.stats.hearts);
            return filled + empty;
        },

        // ========================================
        // INITIALISATION
        // ========================================
        init() {
            console.log('🚀 Dashboard Alpine.js initialisé');

            // Déclenche le bridge AVANT de lire (fusionne les anciennes clés)
            if (typeof BRIDGE !== 'undefined') {
                BRIDGE.syncAll();
            } else {
                console.warn('[Dashboard] storage-bridge.js non chargé');
            }

            this.loadData();
            this.checkBadges();

            // Petit délai pour que le canvas soit rendu dans le DOM
            setTimeout(() => { this.initChart(); }, 150);

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
            // --- XP + Niveau ---
            const xpData = JSON.parse(localStorage.getItem('lemondedescurieux_xp') || '{}');
            this.stats.totalXP        = xpData.total || 0;
            this.stats.level          = getLevel(this.stats.totalXP);
            this.stats.levelProgress  = getLevelProgress(this.stats.totalXP);
            this.stats.xpToNext       = getXPToNext(this.stats.totalXP);

            if (xpData.bySection) {
                this.sectionXP = {
                    francais: xpData.bySection.francais || 0,
                    anglais:  xpData.bySection.anglais  || 0,
                    maths:    xpData.bySection.maths    || 0,
                    sciences: xpData.bySection.sciences || 0,
                    histoire: xpData.bySection.histoire || 0
                };
            }

            // --- Streak ---
            const streakData = JSON.parse(localStorage.getItem('lemondedescurieux_streaks') || '{}');
            this.stats.streak = streakData.currentStreak || 0;

            // --- Hearts : lit "global" d'abord, puis "francais" comme fallback ---
            const heartsData = JSON.parse(localStorage.getItem('lemondedescurieux_hearts') || '{}');
            if (heartsData.bySection) {
                if (heartsData.bySection.global) {
                    this.stats.hearts = heartsData.bySection.global.current || 5;
                } else if (heartsData.bySection.francais) {
                    this.stats.hearts = heartsData.bySection.francais.current || 5;
                }
            }

            // --- Activités ---
            this.stats.activitiesCompleted = Math.floor(this.stats.totalXP / 20);

            console.log('📊 Données chargées:', this.stats);
        },

        // ========================================
        // INITIALISATION GRAPHIQUE Chart.js (radar)
        // ========================================
        initChart() {
            const canvas = document.getElementById('progressChart');
            if (!canvas) return; // canvas pas encore dans le DOM

            // Détruit l'instance précédente si elle existe
            if (this.chart) {
                this.chart.destroy();
                this.chart = null;
            }

            const ctx = canvas.getContext('2d');
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
                            ticks: { stepSize: 50 }
                        }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        },

        // ========================================
        // MISE À JOUR GRAPHIQUE
        // ========================================
        updateChart() {
            if (!this.chart) return;
            try {
                this.chart.data.datasets[0].data = [
                    this.sectionXP.francais,
                    this.sectionXP.anglais,
                    this.sectionXP.maths,
                    this.sectionXP.sciences,
                    this.sectionXP.histoire
                ];
                this.chart.update();
            } catch(e) {
                // Canvas perdu, re-init
                console.warn('[Chart] Re-init nécessaire');
                this.chart = null;
                this.initChart();
            }
        },

        // ========================================
        // VÉRIFICATION DÉBLOCAGE BADGES
        // Lit aussi lemondedescurieux_badges (bridge)
        // ========================================
        checkBadges() {
            // Source 1 : badges déjà débloqués via le bridge
            const storedBadges = JSON.parse(localStorage.getItem('lemondedescurieux_badges') || '[]');
            for (const stored of storedBadges) {
                if (stored.unlocked) {
                    this.unlockBadge(stored.id);
                }
            }

            // Source 2 : vérification en temps réel selon les stats actuelles
            if (this.stats.streak >= 7)  this.unlockBadge('streak_7');
            if (this.stats.streak >= 30) this.unlockBadge('streak_30');
            if (this.stats.totalXP >= 1000) this.unlockBadge('xp_1000');
            if (this.stats.totalXP >= 5000) this.unlockBadge('xp_5000');

            // Polyvalent : 1 quiz par matière (5 sections > 0 XP)
            const sectionsActives = Object.values(this.sectionXP).filter(xp => xp > 0).length;
            if (sectionsActives >= 5) this.unlockBadge('all_subjects');

            // perfect_10 et quiz_100 : données depuis demo ou badges stockés
            // (déjà couvert par storedBadges au-dessus)
        },

        // ========================================
        // DÉBLOQUER UN BADGE (réactif Alpine)
        // ========================================
        unlockBadge(badgeId) {
            const badge = this.badges.find(b => b.id === badgeId);
            if (badge && !badge.unlocked) {
                badge.unlocked = true;
                console.log('🏆 Badge débloqué:', badge.name);
            }
        },

        // ========================================
        // AFFICHER DÉTAILS BADGE (click)
        // ========================================
        showBadgeDetail(badge) {
            if (badge.unlocked) {
                alert(`🏆 ${badge.name}\n\n${badge.desc}\n\n✅ Vous avez débloqué ce badge !`);
            } else {
                alert(`🔒 ${badge.name}\n\n${badge.desc}\n\nContinue à apprendre pour le débloquer !`);
            }
        },

        // ========================================
        // EXPORT PDF (TODO)
        // ========================================
        exportPDF() {
            alert('🚧 Fonctionnalité Export PDF en cours de développement...');
        },

        // ========================================
        // RÉINITIALISER LA PROGRESSION
        // ========================================
        resetProgress() {
            const confirmed = confirm(
                '⚠️ Réinitialiser TOUTE la progression ?\n\n' +
                'Supprimera : XP, streak, badges, cœurs.\n\n' +
                'Continuer ?'
            );

            if (confirmed) {
                // Supprime les clés officielles
                localStorage.removeItem('lemondedescurieux_xp');
                localStorage.removeItem('lemondedescurieux_streaks');
                localStorage.removeItem('lemondedescurieux_hearts');
                localStorage.removeItem('lemondedescurieux_badges');
                // Supprime aussi les anciennes clés pour éviter re-sync
                localStorage.removeItem('demo_userData_v2');
                localStorage.removeItem('curio_xp');
                localStorage.removeItem('section-xp-data');
                localStorage.removeItem('userBadges');

                // Reset état réactif
                this.stats = { totalXP:0, level:1, levelProgress:0, xpToNext:100, streak:0, hearts:5, activitiesCompleted:0 };
                this.sectionXP = { francais:0, anglais:0, maths:0, sciences:0, histoire:0 };
                this.badges.forEach(b => b.unlocked = false);

                this.updateChart();
                alert('✅ Progression réinitialisée !');
                console.log('🔄 Progression réinitialisée');
            }
        }
    };
}
