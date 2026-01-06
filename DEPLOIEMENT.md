# Guide Déploiement - Le Monde des Curieux

## GitHub Pages - Branch gh-pages

**URL** : https://sirensnake.github.io/curieux-v2/

### Processus de Déploiement

1. Développement sur branche `production`
2. Test local
3. Mise à jour branche `gh-pages` :
```bash
   git checkout production
   git subtree split --prefix docs -b gh-pages
   git push origin gh-pages --force
```
4. Attendre 2-3 min rebuild automatique
5. Vérifier : `curl -I https://sirensnake.github.io/curieux-v2/`

### Points d'Attention

- ⚠️ Pas de liens symboliques dans gh-pages
- ⚠️ Fichiers < 100 Mo (GitHub limit)
- ⚠️ .nojekyll présent pour éviter Jekyll
- ✅ _config.yml absent (conflit détecté)

## Leçons Apprises

- **Lien symbolique** : Fatal pour GitHub Pages archiving
- **Cache CDN** : TTL 10-60 min (patient!)
- **Structure propre** : docs/ unique à la racine gh-pages
