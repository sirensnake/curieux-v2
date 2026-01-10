import os
import json
from datetime import datetime
from openai import OpenAI # Ou le client de l'API Gemini si vous l'utilisez

# --- Configuration ---
# Récupérez votre clé API OpenAI depuis les secrets GitHub
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    raise ValueError("La variable d'environnement OPENAI_API_KEY n'est pas définie.")

client = OpenAI(api_key=OPENAI_API_KEY)

NEWS_FILE_PATH = "data/news.json" # Chemin où le JSON sera sauvegardé
NUM_ARTICLES = 3 # Nombre d'articles à générer

# --- Prompt pour le LLM ---
SYSTEM_PROMPT = """Tu es un journaliste et un pédagogue spécialisé dans l'actualité pour enfants de 8 à 12 ans.
Ton rôle est de simplifier des faits d'actualité récents (moins de 2 jours) en les rendant accessibles, éducatifs et non anxiogènes.
Le ton doit être neutre, encourageant la curiosité et la compréhension du monde.
Chaque article doit être concis (150 mots maximum).
Tu ne dois pas mentionner que tu es une IA.
Tu dois toujours inclure un emoji pertinent dans le titre.
Fournis 3 articles dans un tableau JSON.
"""

USER_PROMPT = f"""Génère {NUM_ARTICLES} articles d'actualité pour enfants sur des sujets variés (sciences, animaux, découvertes, environnement, culture, sports, événements majeurs mondiaux non violents).
Format attendu (tableau JSON):
[
  {{
    "title": "Titre de l'article avec un emoji",
    "summary": "Résumé de l'actualité en 100-150 mots, adapté aux enfants, ton neutre et positif.",
    "date": "Date de publication de l'article (ex: 15/01/2026)",
    "link": "Lien optionnel vers une source pour adultes (URL vide si aucun)"
  }},
  // ... autres articles
]
"""

# --- Fonction de génération ---
def generate_news_with_llm():
    try:
        completion = client.chat.completions.create(
            model="gpt-4o", # Ou gpt-3.5-turbo si vous préférez
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": USER_PROMPT}
            ],
            response_format={"type": "json_object"}
        )
        # La réponse JSON est contenue dans le texte du message
        news_json_str = completion.choices[0].message.content
        news_data = json.loads(news_json_str)
        return news_data
    except Exception as e:
        print(f"Erreur lors de l'appel LLM ou du parsing JSON: {e}")
        return None

# --- Main ---
if __name__ == "__main__":
    print("Génération des actualités pour Le Monde des Curieux...")
    news_articles = generate_news_with_llm()

    if news_articles:
        # Assurez-vous que le dossier 'data' existe
        os.makedirs(os.path.dirname(NEWS_FILE_PATH), exist_ok=True)
        
        # Enregistre les actualités dans le fichier JSON
        with open(NEWS_FILE_PATH, "w", encoding="utf-8") as f:
            json.dump(news_articles, f, ensure_ascii=False, indent=2)
        print(f"Actualités générées et sauvegardées dans {NEWS_FILE_PATH}")
    else:
        print("Échec de la génération des actualités.")