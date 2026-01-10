#!/bin/bash

echo "⛏️  Étape 1 : Génération des nouvelles quêtes..."
# On lance le script Python situé dans le dossier data
python3 data/generate_news.py

echo "💾 Étape 2 : Synchronisation forcée du disque T7..."
sync

echo "✨ Étape 3 : Nettoyage du cache serveur..."
# On signale au système que les fichiers ont changé
touch data/news.json

echo "✅ TERMINÉ ! Tu peux cliquer sur ACTUALISER dans ton navigateur."
