import json
import os
from openai import OpenAI
from dotenv import load_dotenv

# Charger les variables du fichier .env
load_dotenv()

# Récupérer la clé de manière sécurisée
api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)
FILENAME = "news.json"

def generer_quetes_ia():
    if not api_key:
        print("❌ Erreur : Clé API introuvable dans le fichier .env")
        return

    print("🪄 Consultation de l'Oracle IA (Mode Sécurisé)...")
    
    # ... (le reste du prompt reste identique)
    
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": "Tu es un narrateur Minecraft... "}],
            response_format={ "type": "json_object" }
        )
        
        data = json.loads(response.choices[0].message.content)
        
        with open(FILENAME, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        os.system('sync')
        print("✅ Le Grimoire est à jour et ta clé est restée secrète !")

    except Exception as e:
        print(f"❌ Erreur : {e}")

if __name__ == "__main__":
    generer_quetes_ia()