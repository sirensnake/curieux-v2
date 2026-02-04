#!/bin/bash
# Script pour ajouter le raccourci admin à toutes les sections

echo "🔧 Ajout du raccourci admin (Ctrl+Shift+A) aux sections..."

# Liste des fichiers HTML de sections à modifier
sections=(
    "english_duolingo_section.html"
    "maths_duolingo_section.html"
    "sciences_duolingo_section.html"
    "histoire_duolingo_section.html"
    "mathematiques_section.html"
    "dashboard-extended.html"
)

# Ligne à ajouter avant </body>
admin_script='    <!-- Admin Shortcut (Ctrl+Shift+A) -->\n    <script src="scripts/admin-shortcut.js"></script>'

for file in "${sections[@]}"; do
    if [ -f "$file" ]; then
        # Vérifier si le script n'est pas déjà présent
        if ! grep -q "admin-shortcut.js" "$file"; then
            echo "  ✅ Ajout dans $file"
            # Ajouter avant </body>
            sed -i 's|</body>|'"$admin_script"'\n</body>|' "$file"
        else
            echo "  ⏭️  Déjà présent dans $file"
        fi
    else
        echo "  ⚠️  Fichier non trouvé: $file"
    fi
done

echo "✅ Terminé !"
