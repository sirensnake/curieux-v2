/**
 * LE MONDE DES CURIEUX - Système de Journal Gamifié
 * Version 4.0 : Correction définitive du saut de page et affichage summary
 */

const NEWS_FILE = 'data/news.json';
const STORAGE_KEY = 'curio_quetes_validees';

// 1. Fonction pour valider une quête
window.validerQuete = function(id) {
    let succes = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (!succes.includes(id)) {
        succes.push(id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(succes));
        chargerJournal(); 
    }
};

// 2. Fonction principale d'affichage
async function chargerJournal() {
    const container = document.getElementById('news-container');
    if (!container) return;

    try {
        // Le paramètre v force le rafraîchissement réel du fichier sur ton disque T7
        const response = await fetch(`${NEWS_FILE}?v=${Date.now()}`);
        if (!response.ok) throw new Error("Fichier news.json introuvable");
        
        const data = await response.json();
        // On cible spécifiquement la clé "articles" de ton JSON
        const articles = data.articles || [];
        const faites = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

        if (articles.length === 0) {
            container.innerHTML = "<p>Aucun parchemin trouvé...</p>";
            return;
        }

        container.innerHTML = articles.map((a, index) => {
            // Adaptation stricte à ton JSON (title et summary)
            const titre = a.title || "Quête mystère";
            const texte = a.summary || "Le contenu est illisible...";
            const date = a.date || "Inconnue";
            
            const id = `quest-${index}`;
            const estFaite = faites.includes(id);

            return `
                <div class="minecraft-card ${estFaite ? 'quete-terminee' : ''}">
                    <div class="card-header">
                        <span class="news-tag">${estFaite ? '✅ ACCOMPLIE' : `📜 DU ${date}`}</span>
                    </div>
                    <h3>${titre}</h3>
                    <div class="card-body"><p>${texte}</p></div>
                    <div class="card-footer">
                        ${!estFaite 
                            ? `<button type="button" class="btn-curio btn-reward" onclick="validerQuete('${id}')">RÉCLAMER RÉCOMPENSE</button>`
                            : `<span class="exp-gain">⭐ EXP +10</span>`
                        }
                    </div>
                </div>
            `;
        }).join('');
    } catch (e) {
        console.error("Erreur :", e);
        container.innerHTML = `<div class="minecraft-card"><p>Erreur de lecture : ${e.message}</p></div>`;
    }
}

// 3. Branchement du bouton sans saut de page
document.addEventListener('DOMContentLoaded', () => {
    // Premier chargement
    chargerJournal();

    const btn = document.getElementById('btn-refresh-news');
    if (btn) {
        // On s'assure que le bouton ne se comporte pas comme un lien
        btn.onclick = function(event) {
            // BLOQUE LE SAUT DE PAGE
            event.preventDefault();
            event.stopPropagation();
            
            console.log("🔄 Actualisation manuelle demandée...");
            
            this.innerText = "CHARGEMENT...";
            this.disabled = true;

            // On vide le container pour prouver que ça recharge
            document.getElementById('news-container').innerHTML = "<p>Mise à jour...</p>";

            chargerJournal().then(() => {
                setTimeout(() => {
                    this.innerText = "ACTUALISER LES NOUVELLES";
                    this.disabled = false;
                }, 400);
            });

            return false; // Sécurité supplémentaire contre le saut de page
        };
    }
});