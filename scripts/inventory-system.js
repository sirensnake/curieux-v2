/**
 * SYSTEME D'INVENTAIRE - LE MONDE DES CURIEUX
 */

const ITEMS_DATABASE = {
    maths_master: { id: 'maths_master', name: 'Compas d\'Argent', emoji: '📐', requirement: 5, category: 'maths' },
    english_master: { id: 'english_master', name: 'Dico Magique', emoji: '📖', requirement: 5, category: 'english' },
    level_2: { id: 'level_2', name: 'Badge Apprenti', emoji: '🏅', requirement: 400, category: 'xp' }
};

function checkUnlocks() {
    const inventory = JSON.parse(localStorage.getItem('curio_inventory')) || [];
    
    // Vérification par matière
    ['maths', 'english', 'francais', 'histoire', 'sciences'].forEach(matiere => {
        // Simulation de lecture depuis ton UnifiedStorage
        const completed = JSON.parse(localStorage.getItem(`${matiere}_completed`)) || [];
        
        if (completed.length >= 5 && !inventory.includes(`${matiere}_master`)) {
            inventory.push(`${matiere}_master`);
        }
    });

    localStorage.setItem('curio_inventory', JSON.stringify(inventory));
    return inventory;
}

function renderInventory() {
    const grid = document.getElementById('lessons-grid'); // Utilise ta grille existante
    if (!grid) return;

    const unlocked = checkUnlocks();
    grid.innerHTML = ''; // On vide les cadenas

    // Affichage des objets possédés
    unlocked.forEach(itemId => {
        const item = ITEMS_DATABASE[itemId] || { name: 'Objet Inconnu', emoji: '🎁' };
        grid.innerHTML += `
            <div class="lesson-card completed">
                <span class="emoji">${item.emoji}</span>
                <p class="title">${item.name}</p>
                <div class="xp">DÉBLOQUÉ</div>
            </div>
        `;
    });

    // Remplissage avec des emplacements vides (cadenas) pour le look
    for (let i = unlocked.length; i < 9; i++) {
        grid.innerHTML += `
            <div class="lesson-card locked">
                <span class="emoji">🔒</span>
                <p class="title">???</p>
                <div class="xp">VERROUILLÉ</div>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', renderInventory);