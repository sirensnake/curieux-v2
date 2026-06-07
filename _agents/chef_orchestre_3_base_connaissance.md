# Chef d'Orchestre — Base de connaissance

## Fichiers permanents (toujours présents dans le projet)

| Fichier | Chemin T7 | Pourquoi |
|---|---|---|
| `ETAT_SITE.md` | `_legacy_html/ETAT_SITE.md` | Source de vérité — toujours la version la plus récente |
| `agent_chef_orchestre.md` | `_legacy_html/_agents/agent_chef_orchestre.md` | Séquences validées, frictions, règles globales |

---

## Fichiers contextuels (à joindre manuellement selon l'intention)

Ces fichiers ne sont PAS dans la base de connaissance par défaut.
Guillaume les joint au moment de la conversation quand l'intention le nécessite.

| Intention | Fichiers à joindre |
|---|---|
| Ajouter du contenu à une matière | `[matière]-lessons.js` |
| Nouveau badge | `badges-system.js` + `section-xp-system.js` |
| Correction WCAG | Aucun fichier supplémentaire |
| Performance / Lighthouse | Aucun fichier supplémentaire |
| SEO | `index.html` si modification de l'index |
| Publication / Communication | Aucun — description en prose suffit |

---

## Fichiers à NE PAS joindre

- Fichiers HTML des sections (trop volumineux, inutiles pour la planification)
- Fichiers CSS
- Scripts Python de patch
- Fichiers d'agents spécialisés (chaque agent a son propre projet)

---

## Quand utiliser quel projet — Règle simple

| Situation | Projet à ouvrir |
|---|---|
| "Qu'est-ce que je fais ensuite ?" | 🎼 Chef d'Orchestre |
| "Mets à jour ETAT_SITE.md" | 🎼 Chef d'Orchestre |
| "Je veux X, par où je commence ?" | 🎼 Chef d'Orchestre |
| "Je dois patcher ce fichier" | 🛠️ Curio Expert |
| "J'ai un bug dans ce script" | 🛠️ Curio Expert |
| "Génère les questions sur ce thème" | 📚 Content Generator |
| "Rédige un post pour les enseignants" | 📣 Community Manager |
| "Audite l'accessibilité de cette page" | ♿ Accessibility Auditor |
| "Nouveau badge à créer" | 🎮 Gamification Designer |
| "Performance a baissé" | ⚡ Performance & PWA |
