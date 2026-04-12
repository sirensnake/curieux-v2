# 📊 ETAT_SITE.md — Le Monde des Curieux

**Fichier de synchronisation inter-agents**
*Dernière mise à jour : 12 Avril 2026 — fix(seo): Sciences SEO/Schema.org 108→100 questions*

> Ce fichier est la source de vérité partagée entre tous les agents.
> Il doit être joint à chaque Projet Claude et mis à jour après chaque
> session de travail significative (ajout de contenu, commit majeur,
> changement de score Lighthouse).
> Temps de mise à jour estimé : 5 minutes par session.

---

## 1. Contenu du site — État actuel

| Matière | Fichier HTML | Leçons | Questions | Statut |
|---|---|---|---|---|
| Français | `francais_duolingo_section.html` | 9 | 120 | ✅ Enrichi 11/04/2026 |
| Mathématiques | `mathematiques_section.html` | 11 | 110 | ✅ Complet |
| Fractions | `maths_fractions_comprendre.html` | 6 | 20 | ✅ Complet |
| Anglais | `english_duolingo_section.html` | 10 | 100 | ✅ Complet |
| Sciences | `sciences_duolingo_section.html` | 7 | 100 | ✅ Complet |
| Histoire | `histoire_section_COMPLET.html` | 12 | 120 | ✅ Complet |
| Géographie | `geographie_section.html` | 10 | 100 | ✅ Complet |
| **TOTAL matières** | | **65** | **670** | **7 matières** |

### Journal de Curio — État

| Composant | Fichier(s) | Articles | Statut |
|---|---|---|---|
| Index des semaines | `news.json` | S16 : 5 articles | ✅ Livré 11/04/2026 |
| Page liste | `actualites.html` | — | ✅ Livré 11/04/2026 |
| Page article générique | `article.html?id=XXX` | — | ✅ Livré 11/04/2026 |
| Articles S16 | `articles/2026-S16-{0..4}.json` | 5 × 4 QCM | ✅ Livré 11/04/2026 |
| CSS liste | `styles/actualites.css` | — | ✅ Livré 11/04/2026 |
| CSS article | `styles/article.css` | — | ✅ Livré 11/04/2026 |

---

## 2. Scores Lighthouse — Production

> Mesurés en navigation privée sur lemondedescurieux.fr.
> Variance naturelle : ±2 points. Jamais tester en localhost.

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| `index.html` | **96** | **100** | 100 | 100 |
| `dashboard-extended.html` | 90-95 | 92 | 100 | 100 |
| `actualites.html` | non mesuré | — | — | — |
| `article.html` | non mesuré | — | — | — |

**Mise à jour 11/04/2026 :** index.html Performance 95 → **96**, Accessibility 96 → **100** après minification CSS/JS.

**Note Lighthouse :** Chrome DevTools uniquement (navigation privée, prod). Jamais Firefox, jamais localhost.

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
| Badges (8) | `badges-system.js` | ✅ Actif | Voir section 4 |
| Pont localStorage | `storage-bridge.js` | ✅ Actif | Inter-sections |
| Orchestrateur | `master-game-system.js` | ✅ Actif | |
| Panel admin | `admin-shortcut.js` | ✅ Actif | `Ctrl+Shift+X` |
| Streaks quotidiens | via section-xp-system.js | ✅ Actif | Détection journalière |
| Cœurs/vies | via section-xp-system.js | ✅ Actif | 5 par session, régén. 30 min |
| Cooldown 24h | dans chaque section HTML | ✅ Actif | Par domaine/thème |
| Export PDF | `dashboard-extended.html` | ✅ Actif | Toutes métriques incluses |
| Shuffle quiz | dans chaque section HTML | ✅ Actif | Questions mélangées à chaque session |
| Quiz Journal | `article.html` (JS inline) | ✅ Actif | 4 QCM par article, score affiché, pas de XP en v1 |

**Note 11/04/2026 :** Les 5 fichiers JS ci-dessus sont désormais minifiés en production (−43% poids moyen). Les sources lisibles sont dans les backups `.bak_20260411` locaux sur T7.

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
| `all_subjects` | 1 quiz dans les 7 matières (géographie incluse) | Exploration |
| `jeune_ingenieur` | Réussir Q13 + Q14 du quiz Technologie (Sciences) | Performance |

**localStorage badge Jeune ingénieur :**
- `curieux_badge_ingenieur_count` — compteur (0→2) écrit par `sciences_duolingo_section.html`
- `curieux_badge_ingenieur` — flag `'true'` quand count ≥ 2, lu par `badges-system.js`

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
| `curieux_badge_ingenieur_count` | Entier 0-2 | `sciences_duolingo_section.html` |
| `curieux_badge_ingenieur` | `'true'` quand débloqué | `sciences_duolingo_section.html` |

**Clé réservée Phase 4 (SM-2, H2 2026 — ne pas implémenter avant) :**
`curieux_sm2_queue` → `[{questionId, interval, easeFactor, nextReview}]`

**Note Journal de Curio :** le quiz article n'utilise pas localStorage en v1. Aucune clé réservée pour l'instant.

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
| `images/og-preview.webp` | `.webp` | 1 | Social card 1200×630 — Open Graph — commité 29/03/2026 |
| `images/favicon.svg` | `.svg` | 1 | Curio pixel-art 32×32 |
| `images/icons/icon-192.png` | `.png` | 1 | PWA — généré Pillow |
| `images/icons/icon-512.png` | `.png` | 1 | PWA — généré Pillow |

**Images manquantes :**
- `images/sciences/illustration_technologie.webp` — Prompt prêt, en attente crédits Ideogram.
- `images/sciences/illustration_environnement.webp` — À générer Ideogram, même format.

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
| Service Worker | `sw.js` | ✅ Actif — Cache-first assets, Network-first HTML, offline Curio |

**Note Journal de Curio :** `actualites.html`, `article.html` et `articles/*.json` doivent être ajoutés à la liste Network-first de `sw.js` pour garantir le rechargement des actus en ligne. À faire lors du premier commit du Journal.

---

## 8. SEO — État (mis à jour 29/03/2026)

| Élément SEO | Fichier | Statut | Notes |
|---|---|---|---|
| Schema.org `Course` + `Quiz` | 7 sections HTML | ✅ Commité 29/03/2026 | Script `seo_schema_patch.py` |
| Schema.org `EducationalOrganization` + `WebSite` | `index.html` | ✅ Commité 29/03/2026 | Script `seo_index_and_sitemap.py` |
| OpenGraph + Twitter Cards | Toutes les pages | ✅ Commité 29/03/2026 | Image `og-preview.webp` ✅ commitée 29/03/2026 |
| `sitemap.xml` statique | Racine du dépôt | ✅ 16 URLs — soumis 11/04/2026 | `actualites.html` + `article.html` ajoutés, Google Search Console OK |
| Google Search Console | `lemondedescurieux.fr` | ✅ Vérifié 29/03/2026 | Méthode DNS TXT via Hostinger |
| Scores Lighthouse SEO | `index.html` + dashboard | ✅ 100/100 | Stable |
| Rich Results Test | `francais_duolingo_section.html` | ✅ Validé 05/04/2026 | Course + Quiz détectés |

**Registrar du domaine :** Hostinger (`hpanel.hostinger.com`)
**DNS TXT Google :** `google-site-verification=AbBRfdwKcCOAXi254bQmqyJHzfbtIpZlKApiQI8xaHM`
**Ne jamais supprimer cet enregistrement DNS** — Search Console le recheck périodiquement.

**Scripts SEO disponibles dans `_agents/seo/` :**
- `seo_schema_patch.py` — insère Course + Quiz JSON-LD sur les 7 sections (idempotent)
- `seo_index_and_sitemap.py` — patch index.html + génère sitemap.xml

---

## 9. Historique des réalisations

### ✅ Terminé

**Navigation harmonisée** (mars 2026 — boutons retour unifiés, chemins JS corrigés),
**WebP** (52 images converties, 108 Mo → 13 Mo, −88%),
**Suppression Lexend** (CLS 0.175 → 0.006, Performance 84 → 95),
**Preconnect CDN/Fonts** (−80ms LCP),
**defer badges-system.js + admin-shortcut.js** (supprime render-blocking 1670ms),
**WCAG 2.1 AA** (Accessibility 88 → 96, script `fix_wcag_lighthouse.py`),
**PWA** (manifest.json + sw.js + icônes 192/512px, installable Chrome/Safari),
**Espace éducateurs enrichi** (protocole session, gamification parents, fiche HTML parents),
**Shuffle quiz** (Anglais + Maths + Histoire + Géographie ajoutés le 28/03/2026),
**Sciences — domaine Technologie & Objets techniques** (10 questions ajoutées le 28/03/2026 — 4F/4I/2A, tags `badge-ingenieur` sur Q13-Q14),
**Fiche parents HTML** (`documents/fiche_parents_lemondedescurieux.html` — ajoutée le 29/03/2026),
**SEO — Schema.org + OpenGraph** (ajouté le 29/03/2026),
**SEO — sitemap.xml** (14 URLs, soumis à Google Search Console le 29/03/2026),
**SEO — Google Search Console** (vérifié par DNS TXT Hostinger le 29/03/2026),
**Sciences — domaine Environnement & Énergie renouvelable** (05/04/2026 — 10 nouvelles questions),
**Communication — LinkedIn + Instagram** (05/04/2026),
**Correction compteurs educateurs.html** (09/04/2026 — 648 questions / 65 leçons),
**Communication — Canopé** (09/04/2026 — site soumis comme ressource pédagogique),
**Minification CSS/JS** (11/04/2026 — 13 fichiers, 87 Ko → 49.4 Ko, −43%, Lighthouse Performance 95→96, Accessibility 96→100),
**Nettoyage backups** (11/04/2026 — 21 fichiers `.bak_*` parasites supprimés du dépôt git),
**Français — Orthographe, Ponctuation, Types de phrases — Batch 2** (11/04/2026 — +30 questions, 3 thèmes enrichis 10→20 questions chacun, total Français 90→120, site 648→678),
**Journal de Curio — v1** (11/04/2026 — `actualites.html` + `article.html?id=` + `news.json` + 5 articles S16 avec 4 QCM chacun, CSS dédié, zéro backend),
**Journal de Curio — intégration index** (11/04/2026 — carte `.journal-card` bleu dans `subjects-grid`, lien nav header + footer, stats 678q/65 leçons, `minecraft-override.css` mis à jour),
**sw.js — cache Journal** (11/04/2026 — `actualites.html` + `article.html` précachés, `articles/*.json` + `news.json` en Network-first, CACHE_NAME bumped v2026-04),
**sitemap.xml — 16 URLs** (11/04/2026 — `actualites.html` + `article.html` ajoutés, soumis et validé Google Search Console),
**Nettoyage navigation** (12/04/2026 — liens `informations_section.html` supprimés de la nav principale et du footer de `index.html` — page remplacée par le Journal de Curio).

### 🔄 En cours / Pending

| Tâche | Agent concerné | Priorité | Notes |
|---|---|---|---|
| ~~`sitemap.xml` — ajout Journal~~ | ~~SEO Éducatif~~ | ✅ | 16 URLs soumises Google Search Console 11/04/2026 |
| ~~Lien vers Journal depuis `index.html`~~ | ~~Python Patch Scripter~~ | ✅ | Carte + nav + footer + stats 11/04/2026 |
| ~~`sw.js` — cache Journal~~ | ~~Performance & PWA~~ | ✅ | Network-first + cache v2026-04 11/04/2026 |
| Journal de Curio — S17 | Content Generator | 🟡 Moyenne | Créer 5 `articles/2026-S17-{0..4}.json` + bloc semaine dans `news.json` |
| Image `illustration_technologie.webp` | Content Generator | 🟡 Moyenne | Prompt prêt — en attente crédits Ideogram |
| Image `illustration_environnement.webp` | Content Generator | 🟡 Moyenne | À générer Ideogram — même format que technologie |
| Photo de profil LinkedIn | Guillaume | 🟡 Moyenne | Priorité — sans photo le profil est invisible |
| Lien bio Instagram | Guillaume | 🟡 Moyenne | Bug Instagram nouveaux comptes — réessayer |
| Accessibilité 96 → 100 sous-pages | Accessibility Auditor | 🟡 Moyenne | index.html à 100, sous-pages non vérifiées |
| Lighthouse `actualites.html` + `article.html` | Accessibility Auditor | 🟡 Moyenne | Mesurer après commit en prod |
| Répétition espacée SM-2 | Gamification Designer | 🔵 Basse | Phase 4 — H2 2026 |
| Interface parents | Gamification Designer | 🔵 Basse | Phase 4 — H2 2026 |
| YouTube Shorts — démo 60s | Community Manager | 🔵 Basse | Phase 2 comm — juin 2026 |
| Journal — XP intégration v2 | Gamification Designer | 🔵 Basse | Connecter quiz article à section-xp-system.js |

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

**Règle badges (ajoutée 05/04/2026) :**
Tout nouveau badge nécessite 3 fichiers : définition dans `badges-system.js`,
tag sur les questions concernées dans le fichier data, flag localStorage dans
la section HTML correspondante. Les scripts de patch vérifient d'abord si le
travail est déjà fait (`if "badge-id" in content`) avant de modifier.

**Règle minification (ajoutée 11/04/2026) :**
Les fichiers CSS/JS en production sont minifiés. Les backups `.bak_20260411` sont conservés localement sur T7 uniquement (jamais commités). Pour modifier un fichier JS/CSS minifié : modifier le backup lisible puis reminifier avec `minify_assets.py` (venv `~/.venv/minify`).

**Règle Journal de Curio (ajoutée 11/04/2026) :**
Contenu éditorial dans `news.json` (métadonnées semaine) + `articles/[id].json` (texte long + quiz).
Page générique `article.html?id=XXX` — jamais un fichier HTML par article.
`data-quiz-ready="true"` sur chaque article dans `news.json` dès qu'un fichier `articles/[id].json` existe.
Format id : `YYYY-SXX-N` (ex. `2026-S16-0`). Incrémentation N à partir de 0 dans l'ordre de publication.
Zéro CSS inline — `styles/actualites.css` et `styles/article.css` uniquement.
Les articles JSON ne contiennent pas de HTML — uniquement du texte brut et des blocs typés (`paragraph`, `encart`).

---

## 11. Dépendances entre agents — Ordre de sollicitation

| Objectif | Séquence recommandée |
|---|---|
| Ajouter du contenu (nouvelles questions) | Content Generator → Python Patch Scripter → Accessibility Auditor (validation) |
| Modifier des fichiers HTML/CSS | Python Patch Scripter → Accessibility Auditor → Performance & PWA (validation) |
| Publier une nouveauté | Dossier Éducateur (fiche) → Community Manager (posts) |
| Fin de phase (Phase 2, 3...) | Portfolio TAI (capitalisation compétences) |
| Améliorer la gamification | Gamification Designer → Python Patch Scripter (implémentation) |
| Optimiser les performances | Performance & PWA → Python Patch Scripter (si patches HTML) |
| Améliorer le SEO | SEO Éducatif → Python Patch Scripter (si patches HTML) → Search Console (validation) |
| Ajouter un badge | Gamification Designer → Python Patch Scripter (3 fichiers) → vérification production |
| Publier sur les réseaux sociaux | Community Manager (posts + visuels) |
| Publier une nouvelle semaine du Journal | Content Generator (5 articles JSON + quiz) → mise à jour `news.json` → commit |

---

## 12. Comment mettre ce fichier à jour

Après chaque session de travail, mettre à jour uniquement les sections
qui ont changé. Les sections les plus fréquemment modifiées sont :

La **section 1** (contenu) dès qu'une nouvelle leçon, question ou semaine du Journal est ajoutée.
La **section 2** (Lighthouse) après chaque série de commits significatifs.
La **section 6** (assets) dès qu'une nouvelle image est ajoutée ou manquante.
La **section 7** (PWA) — Service Worker désormais actif, section stable sauf ajout de nouvelles stratégies de cache.
La **section 8** (SEO) après chaque action SEO (nouveau Schema.org, soumission sitemap, vérification Search Console).
La **section 9** (pending) pour cocher les tâches terminées et ajouter les nouvelles.
La **section 13** (Communication) après chaque session Community Manager.

Les sections 3, 4, 5, 10 et 11 sont stables — elles ne changent qu'en cas
de modification architecturale majeure (nouveau système JS, nouveau schéma
localStorage, nouveau badge, nouvelle règle de développement).

---

## 13. Communication — État (mis à jour 11/04/2026)

### LinkedIn — Profil Guillaume Zaragosa

| Élément | Statut | Notes |
|---|---|---|
| Compte | ✅ Existant | linkedin.com/in/guillaume-zaragosa-916582321 |
| Titre | ✅ À mettre à jour | `Agent de production · La Poste \| Créateur de Le Monde des Curieux · lemondedescurieux.fr` |
| Section À propos | ✅ Rédigée et intégrée | Angle "père qui construit pour son fils" |
| Photo de profil | ❌ Manquante | Priorité — sans photo le profil est invisible |
| Post de présentation | ✅ Publié 05/04/2026 | "J'ai construit ce site pour mon fils. Puis je l'ai ouvert à tous." |
| Calendrier éditorial | ✅ Rédigé | 6 semaines · avr-mai 2026 · 2 posts/semaine · mardi + vendredi |

**Prochains posts LinkedIn :**
- Mardi 14 avril — à planifier selon calendrier éditorial
- Vendredi 17 avril — à planifier selon calendrier éditorial

### Instagram — Compte @lemondedescurieux

| Élément | Statut | Notes |
|---|---|---|
| Compte | ✅ Créé 05/04/2026 | instagram.com/lemondedescurieux |
| Bio | ✅ Remplie | 🦊 Révisions CM1-CM2 gratuites · 65 leçons · 670 questions |
| Lien bio | ❌ Bug Instagram | Réessayer dans 24h — bug nouveaux comptes |
| Photo de profil | ❌ Manquante | À ajouter |
| Premier carrousel | ✅ Publié 05/04/2026 | 3 slides · légende rédigée |

**Workflow visuel validé :**
ChatGPT (génération fond Minecraft) → GIMP (retouche 1080x1080, suppression texte) → Canva (ajout texte via "Texte" + fond défini comme arrière-plan) → Instagram (publication PC)

**Template slides Instagram :**
- Fond : image ChatGPT style Minecraft pixel art, définie comme arrière-plan dans Canva
- Texte : ajouté manuellement via "Texte" dans Canva — NE PAS utiliser "Demander à Canva" pour le texte
- Format : 1080x1080 px carré

### Réseaux en attente

| Réseau | Statut | Notes |
|---|---|---|
| Viaéduc | ❌ Fermé oct. 2025 | Remplacé par Réseau Canopé |
| Canopé | ✅ Soumis 09/04/2026 | Site soumis comme ressource pédagogique |
| YouTube Shorts | 📋 Phase 2 | Démo du site en 60 secondes — juin 2026 |
| Mastodon #EduMastodon | 📋 Phase 3 | Niche numérique éducatif — basse priorité |

---

## 14. Transmission à l'agent suivant

**Prochaines tâches prioritaires (ordre impératif) :**

1. **Content Generator** — créer les 5 articles S17 : `articles/2026-S17-{0..4}.json` + bloc semaine dans `news.json`
2. **Accessibility Auditor** — mesurer Lighthouse sur `actualites.html` + `article.html` en prod (navigation privée Chrome)
3. **Guillaume** — photo de profil LinkedIn (priorité visibilité) + lien bio Instagram (bug nouveaux comptes)

**Journal de Curio — Architecture de référence pour les agents :**

```
news.json                          ← index des semaines (métadonnées)
actualites.html                    ← page liste (fetch news.json)
article.html?id=YYYY-SXX-N        ← page générique (fetch articles/[id].json)
articles/
  2026-S16-0.json                 ← Artemis II (4 QCM)
  2026-S16-1.json                 ← Baleines à pattes (4 QCM)
  2026-S16-2.json                 ← Beauval Australie (4 QCM)
  2026-S16-3.json                 ← Cité des sciences (4 QCM)
  2026-S16-4.json                 ← Exoplanètes (4 QCM)
styles/
  actualites.css
  article.css
```

**Format article JSON :**
```json
{
  "id": "2026-S16-0",
  "semaine": "2026-S16",
  "titre": "...",
  "theme": "sciences|societe|culture|insolite|nature",
  "emoji": "🚀",
  "date_publication": "2026-04-14",
  "contenu": [
    { "type": "paragraph", "text": "..." },
    { "type": "encart", "text": "..." }
  ],
  "quiz": [
    { "question": "...", "options": ["A","B","C","D"], "correct": 0, "explication": "..." }
  ]
}
```

---

*Le Monde des Curieux · Guillaume · 12 Avril 2026 · lemondedescurieux.fr*
*Mettre à jour la date en en-tête à chaque modification.*
