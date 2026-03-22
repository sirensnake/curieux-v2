# SESSION — Le Monde des Curieux

**22 Mars 2026 — Session 2**

lemondedescurieux.fr · github.com/sirensnake/curieux-v2 · branche gh-pages

---

## 📊 État global du site après session

| Section / Fichier | Leçons / Questions | Statut |
|---|---|---|
| 🇫🇷 Français — `francais_duolingo_section.html` | 9 leçons · 90 questions | ✅ Complet |
| 🔢 Maths — `mathematiques_section.html` | 11 domaines · 110 questions | ✅ Complet |
| 🍕 Fractions — `maths_fractions_comprendre.html` | 6 chapitres · 20 questions | ✅ Complet |
| 🇬🇧 Anglais — `english_duolingo_section.html` | 10 leçons · 100 questions | ✅ Complet |
| 🧪 Sciences — `sciences_duolingo_section.html` | 5 leçons · 88 questions | ✅ Complet |
| 🏛️ Histoire — `histoire_section_COMPLET.html` | 12 leçons · 120 questions | ✅ Complet |
| 🗺️ Géographie — `geographie_section.html` | 10 leçons · 100 questions | ✅ Complet |
| **TOTAL** | **63 leçons** | **628 questions** |

---

## ✅ Réalisations de cette session

### Phase 3 — Accessibilité WCAG (Lighthouse 88 → 96)

| Tâche | Détail | Statut |
|---|---|---|
| `aria-pressed` nav thèmes | 50 boutons sur 7 sections | ✅ Commité |
| `<main>` sémantique | 7 sections + index.html | ✅ Commité |
| `role="navigation"` + `aria-label` | francais, english, index | ✅ Commité |
| `aria-label` boutons résultats quiz | Recommencer / Retour — 6 corrections | ✅ Commité |
| `aria-valuenow` progressbar % | Géographie corrigé | ✅ Commité |
| `index.html` — skip link | Ajout `<a class="skip-link">` | ✅ Commité |
| `index.html` — lien Contact Cloudflare | Supprimé (cause principale du blocage à 88) | ✅ Commité |
| `index.html` — CSS inline | Remplacés par classes `.cta-center`, `.footer-note` | ✅ Commité |
| `index.html` — `aria-labelledby` sections | 3 sections annotées | ✅ Commité |
| `wcag-accessibility.css` | Ajouté sur index.html et educateurs.html | ✅ Commité |

**Scripts utilisés :**
- `fix_wcag_lighthouse.py` — 66 corrections sur 7 fichiers
- `fix_main_closing.py` — fermeture `</main>` sur sciences et fractions

### Phase 1 — Espace Éducateurs (enrichissement)

| Tâche | Détail | Statut |
|---|---|---|
| Protocole de session | 5 étapes détaillées, 2 progressions semaine (débutant/avancé) | ✅ Commité |
| Tableau gamification parents | 7 mécaniques expliquées avec bénéfices pédagogiques | ✅ Commité |
| Chiffres mis à jour | 628q / 63 leçons / 7 matières (ex : 468/43/5) | ✅ Commité |
| Géographie + Fractions ajoutées | Matières couvertes complètes | ✅ Commité |
| Section Contact supprimée | Pas de données perso publiques | ✅ Commité |
| WCAG educateurs.html | main, skip-link, nav aria-label, aria-labelledby, CSS inline | ✅ Commité |

### Phase 3 — PWA (Service Worker + Manifest)

| Tâche | Détail | Statut |
|---|---|---|
| `manifest.json` | Nom, icônes SVG, couleurs, 3 raccourcis, orientation | ✅ Commité |
| `sw.js` | Cache-first assets, Network-first HTML, Stale-while-revalidate CDN, page offline Curio | ✅ Commité |
| `patch_pwa.py` | Injection manifest + SW sur 15 pages HTML | ✅ Commité |
| Validation production | SW #86 activated and is running sur lemondedescurieux.fr | ✅ Vérifié |
| Bouton "Installer" Chrome | PWA installable sur écran d'accueil tablette/mobile | ✅ Vérifié |

---

## 🚀 Commits de cette session

| Commit | Fichiers | Message |
|---|---|---|
| `128aec5` | 7 sections HTML | `fix(wcag): aria-pressed, main, nav, alt — Lighthouse 88→95+` |
| — | `index.html` | `fix(wcag): index.html — main, skip-link, nav aria-label, contact link` |
| — | `educateurs.html` | `feat(educateurs): protocole session, gamification parents, 628q/63l/7m, WCAG` |
| — | `manifest.json` + `sw.js` + 15 HTML | `feat(pwa): manifest + service worker offline` |

---

## 📈 Performances finales

| Métrique | Avant session | Après session |
|---|---|---|
| Lighthouse Performance | 95 / 100 | **94 / 100** |
| Lighthouse Accessibilité | **88 / 100** | **96 / 100** |
| Lighthouse Best Practices | 100 / 100 | **100 / 100** |
| Lighthouse SEO | 100 / 100 | **100 / 100** |
| PWA installable | ❌ | **✅** |
| Mode offline | ❌ | **✅** |

---

## 📋 Pending — Prochaines priorités

| Tâche | Priorité | Notes |
|---|---|---|
| Icônes PWA PNG 192×512 | 🟡 Moyenne | `images/icons/icon-192.png` et `icon-512.png` — générer depuis favicon.svg |
| Illustration Fractions | 🟡 Moyenne | Ideogram quand crédits disponibles — prompt prêt |
| Accessibilité 96 → 100 | 🟡 Moyenne | Points résiduels sur sous-pages |
| Minification CSS/JS | 🟢 Basse | Phase 3 restante |
| Phase 4 — Répétition espacée SM-2 | 🟢 Basse | H2 2026 |
| Phase 4 — Interface parents | 🟢 Basse | Export PDF suivi — H2 2026 |

---

## 🛠️ Notes techniques

### Service Worker — stratégies de cache

| Type de ressource | Stratégie | Raison |
|---|---|---|
| Pages HTML | Network-first | Contenu toujours frais si réseau dispo |
| CSS / JS / images | Cache-first | Ultra-rapide, assets stables |
| CDN (Alpine.js, Google Fonts) | Stale-while-revalidate | Retour immédiat + màj silencieuse |
| Page offline | Fallback embarqué | Page Curio si tout échoue |

### Rappel règles du projet

- Jamais de CSS inline — toujours dans `styles/*.css`
- Déploiement sur `gh-pages` uniquement
- Navigation : `window.location.href='index.html'` (pas `history.back()`)
- `git pull origin gh-pages` avant tout push
- Scripts Python : backup `.bak_*` avant toute modification

### Scripts créés cette session

- **`fix_wcag_lighthouse.py`** — 6 points WCAG sur 7 fichiers (aria-pressed, aria-label, role=navigation, main, alt, progressbar)
- **`fix_main_closing.py`** — fermeture `</main>` ciblée sur sciences et fractions
- **`patch_pwa.py`** — injection manifest + SW sur 15 pages HTML avec backup

---

*Le Monde des Curieux · Guillaume · 22 Mars 2026 · lemondedescurieux.fr*
