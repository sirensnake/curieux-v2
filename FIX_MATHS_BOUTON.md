# 🔧 FIX MATHS - Suppression Bouton "Suivant"

## DIAGNOSTIC

Le bouton "Suivant →" avec classe `.btn-complete-activity` apparaît toujours dans le quiz maths malgré les modifications.

**Hypothèse** : Le bouton est créé par du CSS (via `::after` ou `content`) OU il existe dans un autre endroit du code.

## SOLUTION IMMÉDIATE

Chercher TOUS les endroits où ce bouton pourrait être créé :

1. **Dans le CSS** : `btn-complete-activity::after { content: "Suivant →"; }`
2. **Dans un autre JS** : Un script qui injecte le bouton
3. **Dans le HTML initial** : Le bouton existe déjà dans le template

## TEST RAPIDE

Ouvre la console et tape :
```javascript
// Supprimer tous les boutons "Suivant"
document.querySelectorAll('.btn-complete-activity').forEach(btn => btn.remove());
```

Si le bouton disparaît, c'est qu'il est créé en dur et non par CSS.

## FICHIER À VÉRIFIER

Cherche dans `/media/siren_snake/T7/01_Projets_Dev/lemondedescurieux/_legacy_html/styles/maths-section.css` :

```bash
grep -i "suivant\|btn-complete-activity" /chemin/vers/maths-section.css
```
