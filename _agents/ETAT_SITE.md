# 📊 ETAT_SITE.md — Le Monde des Curieux

**Fichier de synchronisation inter-agents**
*Dernière mise à jour : 28 Mars 2026*

> Ce fichier est la source de vérité partagée entre tous les agents.
> Il doit être joint à chaque Projet Claude et mis à jour après chaque
> session de travail significative (ajout de contenu, commit majeur,
> changement de score Lighthouse).
> Temps de mise à jour estimé : 5 minutes par session.

---

## 1. Contenu du site — État actuel

| Matière | Fichier HTML | Leçons | Questions | Statut |
|---|---|---|---|---|
| Français | `francais_duolingo_section.html` | 9 | 90 | ✅ Complet |
| Mathématiques | `mathematiques_section.html` | 11 | 110 | ✅ Complet |
| Fractions | `maths_fractions_comprendre.html` | 6 | 20 | ✅ Complet |
| Anglais | `english_duolingo_section.html` | 10 | 100 | ✅ Complet |
| Sciences | `sciences_duolingo_section.html` | 5 | 88 | ✅ Complet |
| Histoire | `histoire_section_COMPLET.html` | 12 | 120 | ✅ Complet |
| Géographie | `geographie_section.html` | 10 | 100 | ✅ Complet |
| **TOTAL** | | **63** | **628** | **7 matières** |

---

## 2. Scores Lighthouse — Production

> Mesurés en navigation privée sur lemondedescurieux.fr.
> Variance naturelle : ±2 points. Jamais tester en localhost.

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| `index.html` | 95 | 96 | 100 | 100 |
| `dashboard-extended.html` | 90-95 | 92 | 100 | 100 |

**Limite structurelle connue — ne pas chercher à corriger :**
Le score Accessibility de `dashboard-extended.html` plafonne à 92.
Cause : caractères Unicode générés par Alpine.js (Arabic, Hebrew, Polish,
Bulgarian) et couleurs d'accent de la charte graphique (#e67e22, #3498db).
Corriger ces 8 points impliquerait une refonte complète de la charte.

---

## 3. Gamification — État des systèmes

| Système | Fichier JS | Statut | Notes |
|---|---|---|---|
| XP + niveaux | `section-xp-system.js` | ✅ Actif | Algo : `200 × 1.5^level` |
| Badges (7) | `badges-system.js` | ✅ Actif | Voir section 4 |
| Pont localStorage | `storage-bridge.js` | ✅ Actif | Inter-sections |
| Orchestrateur | `master-game-system.js` | ✅ Actif | |
| Panel admin | `admin-shortcut.js` | ✅ Actif | `Ctrl+Shift+X` |
| Streaks quotidiens | via section-xp-system.js | ✅ Actif | Détection journalière |
| Cœurs/vies | via section-xp-system.js | ✅ Actif | 5 par session, régén. 30 min |
| Cooldown 24h | dans chaque section HTML | ✅ Actif | Par domaine/thème |
| Export PDF | `dashboard-extended.html` | ✅ Actif | Toutes métriques incluses |

---

## 4. Badges existants — Référence

| ID | Condition | Catégorie |
|---|---|---|
| `streak_7` | 7 jours consécutifs | Assiduité |
| `streak_30` | 30 jours consécutifs | Assiduité |
| `xp_1000` | 1 000 XP cumulés | Progression |
| `xp_5000` | 5 000 XP cumulés | Progression |
| `perfect_10` | 10 quiz parfaits | Performance |
| `quiz_100` | 100 quiz complétés | Volume |
| `all_subjects` | 1 quiz dans les 7 matières | Exploration |

---

## 5. Structure localStorage — Schéma actuel

| Clé | Contenu | Fichier propriétaire |
|---|---|---|
| `curieux_streak` | `{count, lastDate}` | `section-xp-system.js` |
| `curieux_xp_total` | Entier — XP cumulé | `section-xp-system.js` |
| `curieux_badges` | Tableau IDs badges | `badges-system.js` |
| `curieux_{section}_cooldown` | Timestamp dernier quiz | Chaque section HTML |
| `curieux_hearts` | Entier 0-5 + timestamp régén. | `section-xp-system.js` |
| `curieux_active_days` | Tableau de dates (calendrier 7j) | `dashboard-extended.html` |

**Clé réservée Phase 4 (SM-2, H2 2026 — ne pas implémenter avant) :**
`curieux_sm2_queue` → `[{questionId, interval, easeFactor, nextReview}]`

---

## 6. Assets — État des images

| Dossier | Format | Nb fichiers | Notes |
|---|---|---|---|
| `images/francais/` | `.webp` | 10 | Converti Phase 3 |
| `images/maths/` | `.webp` | 11 | Converti Phase 3 |
| `images/sciences/` | `.webp` | 16 | Converti Phase 3 |
| `images/geographie/` | `.webp` + `.svg` | 5 + 2 cartes SVG | Cartes CC BY-SA 4.0 |
| `images/english/` | `.webp` | 5 | Converti Phase 3 |
| `images/histoire/` | `.webp` | 6 | Converti Phase 3 |
| `images/favicon.svg` | `.svg` | 1 | Curio pixel-art 32×32 |
| `images/icons/icon-192.png` | `.png` | 1 | PWA — généré Pillow |
| `images/icons/icon-512.png` | `.png` | 1 | PWA — généré Pillow |

**Règle absolue :** tout nouveau fichier image doit être en `.webp`.
Toute image via `<img>` ne peut pas être stylisée depuis CSS externe.

---

## 7. PWA — État

| Élément | Fichier | Statut |
|---|---|---|
| Manifest | `manifest.json` | ✅ Présent |
| Icône 192px | `images/icons/icon-192.png` | ✅ Commité |
| Icône 512px | `images/icons/icon-512.png` | ✅ Commité |
| Favicon | `images/favicon.svg` | ✅ Commité |
| Service Worker | `sw.js` | ❌ Non implémenté — Phase 3 |

---

## 8. Tâches en cours et pending

### ✅ Terminé (Phase 1 + Phase 2 + Phase 3 partielle)
Toute la navigation harmonisée, conversion WebP (-88%), scores Lighthouse
atteints, corrections WCAG dashboard, icônes PWA, favicon Curio, classe
`.retenir` 6 variantes, géographie intégrée, fractions intégrées, 4 leçons
Histoire CM2 (Napoléon, 1GM, 2GM, Ve République).

### 🔄 En cours / Pending

| Tâche | Agent concerné | Priorité | Notes |
|---|---|---|---|
| Illustration Fractions | Content Generator | 🟡 Moyenne | Ideogram, crédits à venir — prompt prêt |
| Minification CSS/JS | Performance & PWA | 🟡 Moyenne | Phase 3 restante |
| Service Worker | Performance & PWA | 🟡 Moyenne | Dernière tâche PWA |
| Accessibilité 92→93+ | Accessibility Auditor | 🟡 Moyenne | Sans refonte charte |
| Espace éducateurs | Dossier Éducateur | 🟡 Moyenne | Page présente, contenu à enrichir |
| Répétition espacée SM-2 | Gamification Designer | 🟢 Basse | Phase 4 — H2 2026 |
| Interface parents | Gamification Designer | 🟢 Basse | Phase 4 — H2 2026 |

---

## 9. Règles de développement — Rappel

Ces règles s'appliquent à TOUS les agents sans exception.

**Jamais de CSS inline** — toujours dans `styles/*.css` dédié.
**Jamais de réécriture complète** de fichiers HTML contenant des quiz — patches `str.replace()` uniquement.
**Jamais de backend** — localStorage uniquement (RGPD enfants).
**Jamais `git add -A`** — commits fichier par fichier.
**Toujours `git pull origin gh-pages` avant `git push`** — la branche reçoit des mises à jour automatiques GitHub Pages.
**Navigation** : `window.location.href='index.html'` — jamais `history.back()`.
**Backups** : `.bak_[suffixe]` avant modification de fichier critique — seulement si `.bak` inexistant.
**Google Fonts** : chaque famille supplémentaire est un risque de CLS. Lexend supprimé. Press Start 2P conservé uniquement sur titres/boutons.

---

## 10. Dépendances entre agents — Ordre de sollicitation

Ce tableau indique dans quel ordre solliciter les agents selon l'objectif.

| Objectif | Séquence recommandée |
|---|---|
| Ajouter du contenu (nouvelles questions) | Content Generator → Python Patch Scripter → Accessibility Auditor (validation) |
| Modifier des fichiers HTML/CSS | Python Patch Scripter → Accessibility Auditor → Performance & PWA (validation) |
| Publier une nouveauté | Dossier Éducateur (fiche) → Community Manager (posts) |
| Fin de phase (Phase 2, 3...) | Portfolio TAI (capitalisation compétences) |
| Améliorer la gamification | Gamification Designer → Python Patch Scripter (implémentation) |
| Optimiser les performances | Performance & PWA → Python Patch Scripter (si patches HTML) |

---

## 11. Comment mettre ce fichier à jour

Après chaque session de travail, mettre à jour uniquement les sections
qui ont changé. Les sections les plus fréquemment modifiées sont :

La **section 1** (contenu) dès qu'une nouvelle leçon ou question est ajoutée.
La **section 2** (Lighthouse) après chaque série de commits significatifs.
La **section 7** (PWA) quand le Service Worker sera implémenté.
La **section 8** (pending) pour cocher les tâches terminées et ajouter les nouvelles.

Les sections 3, 4, 5, 6, 9 et 10 sont stables — elles ne changent qu'en cas
de modification architecturale majeure (nouveau système JS, nouveau schéma
localStorage, nouveau badge, etc.).

---

*Le Monde des Curieux · Guillaume · Mars 2026 · lemondedescurieux.fr*
*Mettre à jour la date en en-tête à chaque modification.*
