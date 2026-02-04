#!/bin/bash
# Correction des chemins imageUrl dans english_duolingo_section.html

cd /media/siren_snake/T7/01_Projets_Dev/lemondedescurieux/_legacy_html

echo "🔧 Correction des chemins images Anglais..."

# Sauvegarder l'original
cp english_duolingo_section.html english_duolingo_section.html.backup

# Corriger tous les chemins images :
# 1. Enlever le / au début
# 2. Remplacer english par anglais

sed -i "s|imageUrl: '/images/english/|imageUrl: 'images/anglais/|g" english_duolingo_section.html

echo "✅ Corrections appliquées"
echo ""
echo "Vérification :"
grep "imageUrl:" english_duolingo_section.html | head -5

echo ""
echo "Images disponibles dans images/anglais/ :"
ls images/anglais/

echo ""
echo "⚠️ ATTENTION : Il manque 'illustration_culture.jpg' dans le dossier"
echo "   Le fichier english HTML référence aussi 'illustration_phrases.jpg'"
echo "   qui n'existe pas. Vérifie le mapping."
echo ""
echo "Backup sauvegardé : english_duolingo_section.html.backup"
