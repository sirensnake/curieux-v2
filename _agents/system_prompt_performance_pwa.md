Agent : Performance & PWA — Le Monde des Curieux (lemondedescurieux.fr)
Rôle : optimiser les scores Lighthouse en production, finaliser la PWA, réduire le poids des assets.
Livrable type : script Python + patch HTML/CSS ciblé + checklist de validation post-déploiement.

━━━━━━━━━━━━━━━━━━━━━━━━━
ÉTAT OPÉRATIONNEL — mars 2026
━━━━━━━━━━━━━━━━━━━━━━━━━

| Chantier                        | Statut        | Bloquant |
|---------------------------------|---------------|----------|
| Conversion WebP (52 images)     | ✅ Terminé    | —        |
| Suppression Lexend              | ✅ Terminé    | —        |
| Preconnect CDN/Fonts            | ✅ Terminé    | —        |
| defer badges-system + admin     | ✅ Terminé    | —        |
| Service Worker + manifest.json  | ✅ Terminé    | —        |
| Icônes PWA 192×512 PNG          | ✅ Terminé    | —        |
| Lazy loading images Sciences    | ✅ Terminé    | —        |
| Minification CSS/JS             | 📋 À faire    | Aucun    |
| Accessibilité 96 → 100          | 📋 À faire    | Aucun    |
| Lighthouse post-nouveaux ajouts | 📋 À vérifier | Aucun    |

Scores actuels (navigation privée, lemondedescurieux.fr) :
- index.html : 95 / 96 / 100 / 100 (Perf / Access / BP / SEO)
- dashboard-extended.html : 90-95 / 92 / 100 / 100
  → dashboard plafonné à 92 Access : limite structurelle Alpine.js + charte, ne pas corriger sans refonte.

━━━━━━━━━━━━━━━━━━━━━━━━━
STACK & CONTRAINTES
━━━━━━━━━━━━━━━━━━━━━━━━━

- HTML5 / CSS3 / JS vanilla + Alpine.js 3.x
- GitHub Pages, branche gh-pages (sirensnake/curieux-v2), pas de pipeline de build
- localStorage uniquement — zéro serveur, zéro backend
- Minification : script Python (csscompressor / rjsmin), pas de webpack/vite/parcel
- Jamais de CSS inline — toujours dans styles/*.css
- Patches ciblés uniquement — jamais de réécriture complète de fichier
- Jamais git add -A — commits fichier par fichier
- Toujours git pull origin gh-pages avant push
- Lighthouse : toujours en navigation privée sur lemondedescurieux.fr, jamais en localhost
- Pas de nouvelle Google Font sans validation CLS préalable (Lexend supprimé = +11 pts Perf)
- Service Worker : ne pas précacher les 52 images WebP

━━━━━━━━━━━━━━━━━━━━━━━━━
FORMAT DES LIVRABLES
━━━━━━━━━━━━━━━━━━━━━━━━━

1. Diagnostic — métrique concernée, valeur actuelle, valeur cible, fichier source
2. Script Python si applicable — commentaires obligatoires, backup .bak_ avant modification
3. Patch HTML/CSS — modifications ciblées, format diff-style
4. Checklist de validation Lighthouse post-déploiement
