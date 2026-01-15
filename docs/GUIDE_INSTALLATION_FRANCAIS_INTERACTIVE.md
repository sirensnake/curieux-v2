# 🇫🇷 Guide Installation - Section Français Interactive

## 📋 Vue d'Ensemble

**Architecture réutilisée** : 100% basée sur English Interactive  
**Fichiers créés** : 3 (JSON, JS, HTML)  
**Temps installation** : 5 minutes  
**Dépendances** : Utilise l'infrastructure existante

---

## 📁 Fichiers à Installer

### **1. Base de Données Leçons**
**Fichier** : `lessons-francais.json`  
**Destination** : `scripts/sections/francais/data/lessons.json`  
**Contenu** : 15 leçons CM1 (grammaire, conjugaison, orthographe, vocabulaire)

### **2. Script Application**
**Fichier** : `french-interactive.js`  
**Destination** : `scripts/sections/francais/french-interactive.js`  
**Fonctionnalités** :
- Gestion 5 types d'exercices (identify, fill, match, transform, sort)
- Intégration Hearts/Streaks/XP
- Progression sauvegardée localStorage

### **3. Page HTML**
**Fichier** : `francais_interactive.html`  
**Destination** : `./francais_interactive.html` (racine)  
**Design** : Header rouge/orange, réutilise CSS anglais

---

## 🚀 Installation Rapide

### **Étape 1 : Créer Dossiers**

```bash
# Depuis la racine lemondedescurieux/_legacy_html/
mkdir -p scripts/sections/francais/data
```

### **Étape 2 : Copier Fichiers**

```bash
# JSON leçons
cp ~/Downloads/lessons-francais.json scripts/sections/francais/data/lessons.json

# Script JavaScript
cp ~/Downloads/french-interactive.js scripts/sections/francais/

# Page HTML
cp ~/Downloads/francais_interactive.html ./
```

### **Étape 3 : Vérifier Installation**

```bash
# Vérifier présence fichiers
ls -la scripts/sections/francais/data/lessons.json
ls -la scripts/sections/francais/french-interactive.js
ls -la francais_interactive.html
```

**Attendu** :
```
-rw-r--r-- 1 user user 45000 date lessons.json
-rw-r--r-- 1 user user 22000 date french-interactive.js
-rw-r--r-- 1 user user  4500 date francais_interactive.html
```

---

## ✅ Test Fonctionnel

### **1. Ouvrir dans Navigateur**

```bash
# Lancer serveur Python
python3 -m http.server 8080

# Ou avec serveur existant
# Ouvrir : http://localhost:8080/francais_interactive.html
```

### **2. Console Attendue (Sans Erreurs)**

```
✅ Event Bus loaded successfully!
✅ Storage Adapter loaded successfully!
✅ Audio Player loaded successfully!
✅ Duolingo Mechanics loaded successfully!
💖 Heart System initialized: {currentHearts: 5, ...}
🔥 Streak System initialized: {currentStreak: X, ...}
✅ XP System Unified loaded successfully!
🔵 Initializing French Interactive...
✅ JSON OK: {lessons: Array(15)}
✅ 15 lessons loaded successfully!
✅ French Interactive App initialized!
✅ French Interactive Page Loading...
🎨 Rendered lesson grid
✅ French Interactive App Ready!
```

### **3. Tests Interface**

#### **Test 1 : Affichage Leçons**
- [ ] Grille 15 leçons visible
- [ ] Icônes thématiques (📝, ⏰, 🔤, etc.)
- [ ] Titres courts lisibles
- [ ] XP et durée affichés

#### **Test 2 : Systèmes Duolingo**
- [ ] Streaks : 🔥 X jour(s)
- [ ] Hearts : ❤️❤️❤️❤️❤️ (5 cœurs)
- [ ] XP : ⭐ Niveau X • Y XP

#### **Test 3 : Navigation**
- [ ] Clic leçon → Sélecteur mode
- [ ] Mode Classique → Contenu texte
- [ ] Mode Interactif → Exercices

#### **Test 4 : Exercice Complet**
- [ ] Leçon 1 "Le Verbe" → Mode Interactif
- [ ] Exercice "Identifier" fonctionne
- [ ] Bonne réponse → ✅ + XP
- [ ] Mauvaise réponse → ❌ + perte cœur
- [ ] Fin leçon → Résumé + retour grille

---

## 📊 Structure Leçons (15 Leçons CM1)

### **Grammaire (5 leçons)**
1. Le Verbe (Niveau 1)
2. Le Nom (Niveau 1)
3. L'Adjectif (Niveau 1)
4. Le Pluriel des Noms (Niveau 2)
5. Le Féminin des Noms (Niveau 2)

### **Conjugaison (4 leçons)**
6. Présent de l'Indicatif (Niveau 1)
7. Imparfait (Niveau 2)
8. Passé Composé (Niveau 2)
9. Futur Simple (Niveau 3)

### **Orthographe (3 leçons)**
10. Homophones a/à (Niveau 2)
11. Homophones et/est (Niveau 2)
12. Les Accents (Niveau 1)

### **Vocabulaire (2 leçons)**
13. Les Synonymes (Niveau 2)
14. Les Antonymes (Niveau 2)

### **Révision (1 leçon)**
15. Révision Générale (Niveau 3)

---

## 🎮 Types d'Exercices Implémentés

| Type | Description | Exemple |
|------|-------------|---------|
| **identify** | Trouver mot dans phrase | "Trouve le verbe" |
| **fill** | Compléter avec options | "Je ___ (chanter)" |
| **match** | Associer paires | Synonymes/Antonymes |
| **transform** | Transformer mot | "chat" → "chats" |
| **sort** | Classer en catégories | Noms communs/propres |

---

## 🔧 Personnalisation

### **Modifier Couleurs Thème**

Dans `francais_interactive.html` (section `<style>`) :

```css
.header-duolingo.french {
    background: linear-gradient(135deg, #e63946 0%, #f77f00 100%);
    /* Rouge → Orange pour Français */
}
```

**Autres thèmes suggérés** :
- Bleu/Violet : `#457b9d → #a8dadc`
- Vert/Jaune : `#52b788 → #eae151`

### **Ajouter Nouvelles Leçons**

Dans `lessons.json`, copier structure :

```json
{
  "id": "lesson_016",
  "theme": "grammaire",
  "themeIcon": "📖",
  "title": "Les Pronoms",
  "titleShort": "Je, Tu, Il...",
  "level": 2,
  "xpReward": 25,
  "duration": 12,
  "modes": {
    "classic": {
      "available": true,
      "content": "Les pronoms remplacent les noms...",
      "quiz": []
    },
    "interactive": {
      "available": true,
      "exercises": [ /* ... */ ]
    }
  }
}
```

---

## 🐛 Dépannage

### **Erreur : "Failed to load lessons"**

**Cause** : Fichier JSON mal placé ou nommé  
**Solution** :
```bash
# Vérifier chemin exact
ls -la scripts/sections/francais/data/lessons.json

# Si absent, copier depuis downloads
cp ~/Downloads/lessons-francais.json scripts/sections/francais/data/lessons.json
```

### **Erreur : "Event Bus not loaded"**

**Cause** : Dépendances core manquantes  
**Solution** : Vérifier que l'anglais fonctionne (partage infra)

### **Leçons Ne S'Affichent Pas**

**Diagnostic Console** :
```javascript
// Dans Console navigateur
window.frenchApp.state.lessons.length
// Doit retourner : 15

window.frenchApp.state.lessons[0]
// Doit retourner : Object {id, title, ...}
```

---

## 🎯 Prochaines Étapes

### **Court Terme**
1. ✅ Tester 2-3 leçons complètes
2. ✅ Valider tous types d'exercices
3. ✅ Vérifier sauvegarde progression

### **Moyen Terme**
1. Ajouter audio prononciation (TTS français)
2. Créer 5 leçons supplémentaires
3. Mini-jeux conjugaison

### **Long Terme**
1. Dashboard comparatif Anglais/Français
2. Défis inter-sections
3. Certificats de compétence

---

## 📞 Support

**Fichiers disponibles** :
- `/mnt/user-data/outputs/lessons-francais.json`
- `/mnt/user-data/outputs/french-interactive.js`
- `/mnt/user-data/outputs/francais_interactive.html`

**Besoin d'aide ?** Vérifie que :
- ✅ Section Anglais fonctionne (infrastructure partagée)
- ✅ Serveur Python lancé (port 8080)
- ✅ Console sans erreurs rouges critiques
