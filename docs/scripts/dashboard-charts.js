/**
 * DASHBOARD CHARTS - Le Monde des Curieux
 * Gère l'affichage des graphiques pédagogiques
 */

const sections = ['maths', 'english', 'francais', 'histoire', 'sciences'];

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des composants
    createRadarChart();
    createBarChart();
    // Les autres fonctions de ton fichier original ici...
});

function getSectionXP(section) {
    // On s'assure de retourner 0 si la donnée n'existe pas pour éviter le blanc
    const data = JSON.parse(localStorage.getItem(`${section}_xp`)) || { total: 0 };
    return data.total || 0;
}

function createRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;

    const dataValues = sections.map(s => getSectionXP(s));

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Maths', 'English', 'Français', 'Histoire', 'Sciences'],
            datasets: [{
                label: 'Progression',
                data: dataValues,
                backgroundColor: 'rgba(33, 150, 243, 0.2)',
                borderColor: '#2196f3',
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    suggestedMax: 100, // Force l'affichage de la grille même à 0
                    ticks: { display: false }
                }
            }
        }
    });
}

function createBarChart() {
    const ctx = document.getElementById('barChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Maths', 'English', 'Français', 'Histoire', 'Sciences'],
            datasets: [{
                label: 'XP Gagnés',
                data: sections.map(s => getSectionXP(s)),
                backgroundColor: ['#9c27b0', '#2196f3', '#10b981', '#d97706', '#06b6d4'],
                borderWidth: 2,
                borderColor: '#000'
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, suggestedMax: 50 } }
        }
    });
}