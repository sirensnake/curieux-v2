#!/usr/bin/env python3
"""
fix_wcag_96_to_100.py
Corrections ciblées pour passer Lighthouse Accessibility 96 → 100

Corrections appliquées :
1. english_duolingo_section.html : lang="fr" → lang="en"
2. Tous les fichiers quiz Alpine : :aria-label sur answer-btn (renforcement lecteurs d'écran)
3. dashboard-extended.html : vérification bouton × sans aria-label

Usage : python3 fix_wcag_96_to_100.py
Depuis : /media/siren_snake/T7/01_Projets_Dev/lemondedescurieux/_legacy_html/
"""

import os
import shutil
from datetime import datetime

BASE_DIR = "/media/siren_snake/T7/01_Projets_Dev/lemondedescurieux/_legacy_html"
BACKUP_SUFFIX = f"_bak_wcag100_{datetime.now().strftime('%Y%m%d_%H%M%S')}"

fixes_applied = []
errors = []

def backup(filepath):
    bak = filepath + BACKUP_SUFFIX
    shutil.copy2(filepath, bak)
    return bak

def fix_file(filename, replacements):
    filepath = os.path.join(BASE_DIR, filename)
    if not os.path.exists(filepath):
        errors.append(f"❌ Fichier introuvable : {filename}")
        return False

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    applied = []

    for old, new, label in replacements:
        if old in content:
            content = content.replace(old, new)
            applied.append(label)

    if content != original:
        backup(filepath)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        fixes_applied.append(f"✅ {filename} — {', '.join(applied)}")
        return True
    else:
        fixes_applied.append(f"⏭️  {filename} — déjà conforme (aucune modification)")
        return False


# ─────────────────────────────────────────────────────────────────────────────
# FIX 1 : english_duolingo_section.html — lang="fr" → lang="en"
# WCAG 3.1.1 — Language of Page
# ─────────────────────────────────────────────────────────────────────────────

fix_file(
    "english_duolingo_section.html",
    [
        (
            '<html lang="fr">',
            '<html lang="en">',
            'lang="fr" → lang="en" (WCAG 3.1.1)'
        )
    ]
)


# ─────────────────────────────────────────────────────────────────────────────
# FIX 2 : aria-label dynamique sur answer-btn dans les quiz Alpine
# Renforce l'accessibilité avant hydration Alpine (x-cloak)
# ─────────────────────────────────────────────────────────────────────────────

ANSWER_BTN_FILES = [
    "english_duolingo_section.html",
    "mathematiques_section.html",
    "sciences_duolingo_section.html",
    "francais_duolingo_section.html",
    "histoire_section_COMPLET.html",
    "geographie_section.html",
    "maths_fractions_comprendre.html",
]

OLD_ANSWER_BTN = '<button @click="checkAnswer(option)" class="answer-btn" :disabled="answered" x-text="option">'
NEW_ANSWER_BTN = '<button @click="checkAnswer(option)" class="answer-btn" :disabled="answered" x-text="option" :aria-label="option">'

for fname in ANSWER_BTN_FILES:
    fix_file(
        fname,
        [
            (
                OLD_ANSWER_BTN,
                NEW_ANSWER_BTN,
                ':aria-label="option" sur answer-btn'
            )
        ]
    )


# ─────────────────────────────────────────────────────────────────────────────
# FIX 3 : dashboard-extended.html — bouton × sans aria-label
# ─────────────────────────────────────────────────────────────────────────────

fix_file(
    "dashboard-extended.html",
    [
        (
            '<button class="close-btn">×</button>',
            '<button class="close-btn" aria-label="Fermer">×</button>',
            'aria-label="Fermer" sur bouton ×'
        )
    ]
)


# ─────────────────────────────────────────────────────────────────────────────
# RAPPORT
# ─────────────────────────────────────────────────────────────────────────────

modifies = [f for f in fixes_applied if f.startswith('✅')]
conformes = [f for f in fixes_applied if f.startswith('⏭️')]

print("\n" + "="*60)
print("FIX WCAG 96 → 100 — RAPPORT")
print("="*60)

print(f"\n📋 Fichiers modifiés ({len(modifies)}) :")
for fix in modifies:
    print(f"  {fix}")

if conformes:
    print(f"\n⏭️  Déjà conformes ({len(conformes)}) :")
    for fix in conformes:
        print(f"  {fix}")

if errors:
    print(f"\n⚠️  Erreurs ({len(errors)}) :")
    for e in errors:
        print(f"  {e}")

print("\n📌 Résumé des corrections :")
print("  1. english_duolingo_section.html : lang='fr' → lang='en' (WCAG 3.1.1)")
print("  2. answer-btn : :aria-label='option' ajouté sur 7 fichiers quiz")
print("  3. dashboard-extended.html : bouton × vérifié")
print()
print("🚀 Commandes git :")
print("  git add -A")
print("  git commit -m \"fix(wcag): lang=en english, aria-label answer-btn — cible Lighthouse 100\"")
print("  git push origin gh-pages")
