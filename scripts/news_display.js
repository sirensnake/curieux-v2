document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    const refreshNewsBtn = document.getElementById('refresh-news-btn');

    async function fetchNews() {
        newsContainer.innerHTML = '<p class="loading-text">Chargement des nouvelles du jour...</p>';
        try {
            // Le chemin vers le fichier JSON généré par GitHub Action
            const response = await fetch('data/news.json?' + new Date().getTime()); // Ajout d'un timestamp pour éviter le cache
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            const newsData = await response.json();
            displayNews(newsData);
        } catch (error) {
            console.error('Erreur lors du chargement des actualités:', error);
            newsContainer.innerHTML = '<p class="loading-text">Désolé, impossible de charger les actualités pour le moment. Réessayez plus tard !</p>';
        }
    }

    function displayNews(newsData) {
        if (!newsData || newsData.length === 0) {
            newsContainer.innerHTML = '<p class="loading-text">Aucune nouvelle disponible pour le moment. Revenez demain !</p>';
            return;
        }

        newsContainer.innerHTML = ''; // Vide le message de chargement

        newsData.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.className = 'news-article';
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                ${article.link ? `<a href="${article.link}" target="_blank" rel="noopener noreferrer" style="font-family: 'Lexend', sans-serif; font-size: 0.8rem; color: #3b82f6; text-decoration: none; display: block; margin-top: 10px;">Lire la suite →</a>` : ''}
                <p style="font-size: 0.7rem; color: #999; margin-top: 10px;">Publié le: ${article.date}</p>
            `;
            newsContainer.appendChild(articleElement);
        });
    }

    // Charge les nouvelles au chargement de la page
    fetchNews();

    // Bouton de rafraîchissement manuel
    refreshNewsBtn.addEventListener('click', fetchNews);
});