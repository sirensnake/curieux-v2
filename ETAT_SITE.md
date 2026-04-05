# 📊 ETAT_SITE.md — Le Monde des Curieux

**Fichier de synchronisation inter-agents**
*Dernière mise à jour : 29 Mars 2026 (session après-midi SEO)*

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
| Sciences | `sciences_duolingo_section.html` | 6 | 98 | ✅ Complet |
| Histoire | `histoire_section_COMPLET.html` | 12 | 120 | ✅ Complet |
| Géographie | `geographie_section.html` | 10 | 100 | ✅ Complet |
| **TOTAL** | | **64** | **638** | **7 matières** |

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
| Shuffle quiz | dans chaque section HTML | ✅ Actif | Questions mélangées à chaque session |

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

**Image manquante :**
`images/og-preview.webp` — 1200×630px — Open Graph card pour partages réseaux sociaux.
Prompt Ideogram fourni par agent SEO le 29/03/2026. En attente crédits Ideogram.

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
| Service Worker | `sw.js` | ✅ Actif | Cache-first assets, Network-first HTML, offline Curio |

---

## 8. SEO — État (mis à jour 29/03/2026)

| Élément SEO | Fichier | Statut | Notes |
|---|---|---|---|
| Schema.org `Course` + `Quiz` | 7 sections HTML | ✅ Commité 29/03/2026 | Script `seo_schema_patch.py` |
| Schema.org `EducationalOrganization` + `WebSite` | `index.html` | ✅ Commité 29/03/2026 | Script `seo_index_and_sitemap.py` |
| OpenGraph + Twitter Cards | Toutes les pages | ✅ Commité 29/03/2026 | Image `og-preview.webp` manquante |
| `sitemap.xml` statique | Racine du dépôt | ✅ Commité + soumis 29/03/2026 | 14 URLs |
| Google Search Console | `lemondedescurieux.fr` | ✅ Vérifié 29/03/2026 | Méthode DNS TXT via Hostinger |
| Scores Lighthouse SEO | `index.html` + dashboard | ✅ 100/100 | Stable |
| Rich Results Test | À relancer | ⏳ Dans 24-48h | Attendre crawl Google |

**Registrar du domaine :** Hostinger (`hpanel.hostinger.com`)
**DNS TXT Google :** `google-site-verification=AbBRfdwKcCOAXi254bQmqyJHzfbtIpZlKApiQI8xaHM`
**Ne jamais supprimer cet enregistrement DNS** — Search Console le recheck périodiquement.

**Scripts SEO disponibles dans `_agents/seo/` :**
- `seo_schema_patch.py` — insère Course + Quiz JSON-LD sur les 7 sections (idempotent)
- `seo_index_and_sitemap.py` — patch index.html + génère sitemap.xml

---

## 9. Tâches en cours et pending

### ✅ Terminé (Phase 1 + Phase 2 + Phase 3 partielle + SEO)

Toute la navigation harmonisée, conversion WebP (-88%), scores Lighthouse
atteints, corrections WCAG dashboard, icônes PWA, favicon Curio, classe
`.retenir` 6 variantes, géographie intégrée, fractions intégrées, 4 leçons
Histoire CM2 (Napoléon, 1GM, 2GM, Ve République), corrections WCAG massives
88→96 (aria-pressed, main, nav, skip-link, progressbar — 66 corrections sur
7 fichiers), Service Worker PWA complet (`sw.js` — offline Curio, 3 stratégies
de cache), espace éducateurs enrichi (protocole session, gamification parents),
**shuffle quiz aléatoire sur les 6 sections** (Sciences déjà fait, Français +
Anglais + Maths + Histoire + Géographie ajoutés le 28/03/2026 — pattern
`shuffledQuiz` avec mélange questions + options pour Famille A / questions seules
pour Famille B à index numérique),
**Sciences — domaine Technologie & Objets techniques** (10 questions ajoutées
le 28/03/2026 — 4F/4I/2A, tag `badge-ingénieur` posé sur Q9-Q10),
**Fiche parents HTML** (`documents/fiche_parents_lemondedescurieux.html` —
ajoutée le 29/03/2026, accessible depuis la section Ressources de l'espace
éducateurs, explique streaks/cœurs/badges en langage non-technique),
**Espace éducateurs mis à jour** (`educateurs.html` — section Ressources
ajoutée avec lien fiche parents, compteurs mis à jour 638 questions / 64 leçons),
**SEO — Schema.org + OpenGraph** (ajouté le 29/03/2026 — Course + Quiz JSON-LD
sur 7 sections, EducationalOrganization + WebSite sur index.html, OpenGraph +
Twitter Cards sur toutes les pages — scripts `seo_schema_patch.py` +
`seo_index_and_sitemap.py`),
**SEO — sitemap.xml** (14 URLs, généré et soumis à Google Search Console
le 29/03/2026),
**SEO — Google Search Console** (propriété `lemondedescurieux.fr` vérifiée
par DNS TXT Hostinger le 29/03/2026, sitemap soumis et accepté).

### 🔄 En cours / Pending

| Tâche | Agent concerné | Priorité | Notes |
|---|---|---|---|
| Image `og-preview.webp` (Open Graph) | SEO Éducatif | 🔴 Haute | Prompt Ideogram/ChatGPT/Copilot fourni le 29/03/2026 — en attente crédits |
| Rich Results Test — validation Schema.org | SEO Éducatif | 🟡 Moyenne | Relancer dans 24-48h sur search.google.com/test/rich-results |
| Pearltrees — collection CM2 | SEO Éducatif | ✅ Terminé 05/04/2026 | 12 perles, 3 abonnements (Ateliers CM2, Enseignants, Cycle 3), lien dans educateurs.html |
| Viaéduc — FERMÉ depuis 01/10/2025 | SEO Éducatif | ❌ Abandonné | Remplacé par Réseau Canopé — à évaluer |
| Soumission Éduscol | SEO Éducatif | 🔵 Basse | Fiche description prête |
| Illustration `illustration_technologie.webp` | Content Generator | 🟡 Moyenne | Ideogram, crédits à venir — prompt prêt |
| Minification CSS/JS | Performance & PWA | 🟡 Moyenne | Phase 3 restante |
| Accessibilité 96→100 | Accessibility Auditor | 🟡 Moyenne | Points résiduels sur sous-pages |
| Sciences : Environnement & Énergie renouvelable | Content Generator | 🟡 Moyenne | Joindre sciences-lessons.js au projet pour éviter doublons |
| Badge "Jeune ingénieur" dans `badges-system.js` | Gamification Designer | 🟡 Moyenne | Tag `badge-ingénieur` déjà posé sur Q9-Q10 Sciences Technologie |
| Répétition espacée SM-2 | Gamification Designer | 🔵 Basse | Phase 4 — H2 2026 |
| Interface parents | Gamification Designer | 🔵 Basse | Phase 4 — H2 2026 |

---

## 10. Règles de développement — Rappel

Ces règles s'appliquent à TOUS les agents sans exception.

**Jamais de CSS inline** — toujours dans `styles/*.css` dédié.
**Jamais de réécriture complète** de fichiers HTML contenant des quiz — patches `str.replace()` uniquement.
**Jamais de backend** — localStorage uniquement (RGPD enfants).
**Jamais `git add -A`** — commits fichier par fichier.
**Toujours `git pull origin gh-pages` avant `git push`** — la branche reçoit des mises à jour automatiques GitHub Pages.
**Navigation** : `window.location.href='index.html'` — jamais `history.back()`.
**Backups** : `.bak_[suffixe]` avant modification de fichier critique — seulement si `.bak` inexistant.
**Google Fonts** : chaque famille supplémentaire est un risque de CLS. Lexend supprimé. Press Start 2P conservé uniquement sur titres/boutons.

**Règle shuffle quiz (ajoutée 28/03/2026) :**
Famille A (correct par texte — Français, Anglais, Maths, Sciences) : mélanger questions ET options.
Famille B (correct par index numérique — Histoire, Géographie) : mélanger questions uniquement, ne pas toucher aux options.
Ne jamais appliquer le shuffle sur `maths_fractions_comprendre.html` sans vérifier d'abord la structure `correct` de ses données.

**Règle SEO (ajoutée 29/03/2026) :**
Les blocs Schema.org JSON-LD sont insérés après `</title>` dans le `<head>`.
Les scripts `seo_schema_patch.py` et `seo_index_and_sitemap.py` sont idempotents — ils skippent les fichiers déjà patchés.
Ne jamais supprimer l'enregistrement DNS TXT Google de Hostinger.
Mettre à jour `sitemap.xml` après chaque ajout de page significative.

---

## 11. Dépendances entre agents — Ordre de sollicitation

Ce tableau indique dans quel ordre solliciter les agents selon l'objectif.

| Objectif | Séquence recommandée |
|---|---|
| Ajouter du contenu (nouvelles questions) | Content Generator → Python Patch Scripter → Accessibility Auditor (validation) |
| Modifier des fichiers HTML/CSS | Python Patch Scripter → Accessibility Auditor → Performance & PWA (validation) |
| Publier une nouveauté | Dossier Éducateur (fiche) → Community Manager (posts) |
| Fin de phase (Phase 2, 3...) | Portfolio TAI (capitalisation compétences) |
| Améliorer la gamification | Gamification Designer → Python Patch Scripter (implémentation) |
| Optimiser les performances | Performance & PWA → Python Patch Scripter (si patches HTML) |
| Améliorer le SEO | SEO Éducatif → Python Patch Scripter (si patches HTML) → Search Console (validation) |

---

## 12. Comment mettre ce fichier à jour

Après chaque session de travail, mettre à jour uniquement les sections
qui ont changé. Les sections les plus fréquemment modifiées sont :

La **section 1** (contenu) dès qu'une nouvelle leçon ou question est ajoutée.
La **section 2** (Lighthouse) après chaque série de commits significatifs.
La **section 6** (assets) dès qu'une nouvelle image est ajoutée ou manquante.
La **section 7** (PWA) — Service Worker désormais actif, section stable sauf ajout de nouvelles stratégies de cache.
La **section 8** (SEO) après chaque action SEO (nouveau Schema.org, soumission sitemap, vérification Search Console).
La **section 9** (pending) pour cocher les tâches terminées et ajouter les nouvelles.

Les sections 3, 4, 5, 10 et 11 sont stables — elles ne changent qu'en cas
de modification architecturale majeure (nouveau système JS, nouveau schéma
localStorage, nouveau badge, nouvelle règle de développement).

---

*Le Monde des Curieux · Guillaume · 29 Mars 2026 · lemondedescurieux.fr*
*Mettre à jour la date en en-tête à chaque modification.*
