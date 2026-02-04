# 🚀 GUIDE DE RÉPLICATION AUTO-AVANCE + COOLDOWN
## English, Maths, Sciences - Modifications Manuelles

---

## 📋 MODIFICATIONS À APPLIQUER

Les fichiers sont trop volumineux pour modifications automatiques. Voici les **3 sections à modifier** et les **5 emplacements** dans chaque fichier :

### 📁 FICHIERS CONCERNÉS
1. `english_duolingo_section.html`
2. `maths_duolingo_section.html`
3. `sciences_duolingo_section.html`

---

## ✅ MODIFICATION 1/5 : SUPPRIMER BOUTON "SUIVANT"

### 📍 Où : Dans la zone feedback du quiz (HTML)

**CHERCHER :**
```html
<button @click="nextQuestion()" class="next-btn">Suivant →</button>
```

**REMPLACER PAR :**
```html
<!-- Bouton "Suivant" supprimé : auto-avance après 2s -->
```

---

## ✅ MODIFICATION 2/5 : AUTO-AVANCE DANS checkAnswer()

### 📍 Où : Dans la fonction `checkAnswer(selectedOption)`

**CHERCHER (fin de la fonction) :**
```javascript
checkAnswer(selectedOption) {
    if (this.answered) return;
    this.answered = true;
    this.isCorrect = (selectedOption === this.currentQuestion.correct);
    if (this.isCorrect) {
        this.score++;
        this.playCorrectSound();
        // ... XP code ...
    } else {
        this.playIncorrectSound();
    }
},
```

**AJOUTER JUSTE AVANT LA VIRGULE DE FERMETURE :**
```javascript
    // ✅ AUTO-AVANCE : Timer 2 secondes puis question suivante
    setTimeout(() => {
        this.nextQuestion();
    }, 2000);
```

**RÉSULTAT FINAL :**
```javascript
checkAnswer(selectedOption) {
    if (this.answered) return;
    this.answered = true;
    this.isCorrect = (selectedOption === this.currentQuestion.correct);
    if (this.isCorrect) {
        this.score++;
        this.playCorrectSound();
        if (window.SectionXP) {
            window.SectionXP.addXP('SECTION_NAME', window.SectionXP.rewards.QUESTION_CORRECT);
        }
    } else {
        this.playIncorrectSound();
    }

    // ✅ AUTO-AVANCE : Timer 2 secondes puis question suivante
    setTimeout(() => {
        this.nextQuestion();
    }, 2000);
},
```

**⚠️ NOTE :** Remplacer `SECTION_NAME` par :
- `'anglais'` pour English
- `'maths'` pour Maths
- `'sciences'` pour Sciences

---

## ✅ MODIFICATION 3/5 : AJOUTER FONCTIONS COOLDOWN

### 📍 Où : JUSTE AVANT la fonction `startQuiz()`

**AJOUTER CE BLOC DE CODE :**

### Pour **english_duolingo_section.html** :
```javascript
// ✅ COOLDOWN : Vérifier si quiz peut être démarré (24h)
canStartQuiz(theme) {
    const cooldownKey = `quiz_cooldown_anglais_${theme}`;
    const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{}');
    
    if (!cooldownData.lastCompleted) return true;
    
    const now = Date.now();
    const timeSinceCompletion = now - cooldownData.lastCompleted;
    const cooldownDuration = 24 * 60 * 60 * 1000; // 24 heures
    
    return timeSinceCompletion >= cooldownDuration;
},

// Obtenir temps restant avant déblocage
getCooldownTimeRemaining(theme) {
    const cooldownKey = `quiz_cooldown_anglais_${theme}`;
    const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{}');
    
    if (!cooldownData.lastCompleted) return null;
    
    const now = Date.now();
    const timeSinceCompletion = now - cooldownData.lastCompleted;
    const cooldownDuration = 24 * 60 * 60 * 1000;
    const remaining = cooldownDuration - timeSinceCompletion;
    
    if (remaining <= 0) return null;
    
    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
    
    return { hours, minutes };
},

// Enregistrer cooldown après complétion
recordQuizCompletion(theme) {
    const cooldownKey = `quiz_cooldown_anglais_${theme}`;
    const cooldownData = {
        lastCompleted: Date.now(),
        count: (JSON.parse(localStorage.getItem(cooldownKey) || '{}').count || 0) + 1
    };
    localStorage.setItem(cooldownKey, JSON.stringify(cooldownData));
    console.log(`🔒 Cooldown activé pour ${theme} jusqu'à`, new Date(cooldownData.lastCompleted + 24*60*60*1000).toLocaleString('fr-FR'));
},
```

### Pour **maths_duolingo_section.html** :
```javascript
// ✅ COOLDOWN : Vérifier si quiz peut être démarré (24h)
canStartQuiz(theme) {
    const cooldownKey = `quiz_cooldown_maths_${theme}`;
    const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{}');
    
    if (!cooldownData.lastCompleted) return true;
    
    const now = Date.now();
    const timeSinceCompletion = now - cooldownData.lastCompleted;
    const cooldownDuration = 24 * 60 * 60 * 1000; // 24 heures
    
    return timeSinceCompletion >= cooldownDuration;
},

// Obtenir temps restant avant déblocage
getCooldownTimeRemaining(theme) {
    const cooldownKey = `quiz_cooldown_maths_${theme}`;
    const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{}');
    
    if (!cooldownData.lastCompleted) return null;
    
    const now = Date.now();
    const timeSinceCompletion = now - cooldownData.lastCompleted;
    const cooldownDuration = 24 * 60 * 60 * 1000;
    const remaining = cooldownDuration - timeSinceCompletion;
    
    if (remaining <= 0) return null;
    
    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
    
    return { hours, minutes };
},

// Enregistrer cooldown après complétion
recordQuizCompletion(theme) {
    const cooldownKey = `quiz_cooldown_maths_${theme}`;
    const cooldownData = {
        lastCompleted: Date.now(),
        count: (JSON.parse(localStorage.getItem(cooldownKey) || '{}').count || 0) + 1
    };
    localStorage.setItem(cooldownKey, JSON.stringify(cooldownData));
    console.log(`🔒 Cooldown activé pour ${theme} jusqu'à`, new Date(cooldownData.lastCompleted + 24*60*60*1000).toLocaleString('fr-FR'));
},
```

### Pour **sciences_duolingo_section.html** :
```javascript
// ✅ COOLDOWN : Vérifier si quiz peut être démarré (24h)
canStartQuiz(theme) {
    const cooldownKey = `quiz_cooldown_sciences_${theme}`;
    const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{}');
    
    if (!cooldownData.lastCompleted) return true;
    
    const now = Date.now();
    const timeSinceCompletion = now - cooldownData.lastCompleted;
    const cooldownDuration = 24 * 60 * 60 * 1000; // 24 heures
    
    return timeSinceCompletion >= cooldownDuration;
},

// Obtenir temps restant avant déblocage
getCooldownTimeRemaining(theme) {
    const cooldownKey = `quiz_cooldown_sciences_${theme}`;
    const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{}');
    
    if (!cooldownData.lastCompleted) return null;
    
    const now = Date.now();
    const timeSinceCompletion = now - cooldownData.lastCompleted;
    const cooldownDuration = 24 * 60 * 60 * 1000;
    const remaining = cooldownDuration - timeSinceCompletion;
    
    if (remaining <= 0) return null;
    
    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
    
    return { hours, minutes };
},

// Enregistrer cooldown après complétion
recordQuizCompletion(theme) {
    const cooldownKey = `quiz_cooldown_sciences_${theme}`;
    const cooldownData = {
        lastCompleted: Date.now(),
        count: (JSON.parse(localStorage.getItem(cooldownKey) || '{}').count || 0) + 1
    };
    localStorage.setItem(cooldownKey, JSON.stringify(cooldownData));
    console.log(`🔒 Cooldown activé pour ${theme} jusqu'à`, new Date(cooldownData.lastCompleted + 24*60*60*1000).toLocaleString('fr-FR'));
},
```

---

## ✅ MODIFICATION 4/5 : MODIFIER startQuiz()

### 📍 Où : Au DÉBUT de la fonction `startQuiz()`

**CHERCHER :**
```javascript
startQuiz() {
    this.showQuiz = true;
    this.showResults = false;
    // ...
}
```

**AJOUTER JUSTE APRÈS L'ACCOLADE OUVRANTE :**
```javascript
// ✅ VÉRIFIER COOLDOWN
if (!this.canStartQuiz(this.currentTheme)) {
    const remaining = this.getCooldownTimeRemaining(this.currentTheme);
    const message = `⏰ Quiz déjà complété aujourd'hui !\n\nReviens dans ${remaining.hours}h ${remaining.minutes}min pour le refaire.`;
    
    if (window.curioBubbleInstance) {
        window.curioBubbleInstance.show(message, 'info');
    } else {
        alert(message);
    }
    return; // BLOQUER le démarrage
}
```

**RÉSULTAT FINAL :**
```javascript
startQuiz() {
    // ✅ VÉRIFIER COOLDOWN
    if (!this.canStartQuiz(this.currentTheme)) {
        const remaining = this.getCooldownTimeRemaining(this.currentTheme);
        const message = `⏰ Quiz déjà complété aujourd'hui !\n\nReviens dans ${remaining.hours}h ${remaining.minutes}min pour le refaire.`;
        
        if (window.curioBubbleInstance) {
            window.curioBubbleInstance.show(message, 'info');
        } else {
            alert(message);
        }
        return; // BLOQUER le démarrage
    }

    this.showQuiz = true;
    this.showResults = false;
    this.currentQuestionIndex = this.score = 0;
    this.selectedAnswer = null;
    this.answered = false;
    this.quizFinished = false;
    this.loadQuestion();
},
```

---

## ✅ MODIFICATION 5/5a : MODIFIER finishQuiz()

### 📍 Où : À LA FIN de la fonction `finishQuiz()`, APRÈS le bloc des badges

**CHERCHER (approximatif, varie selon section) :**
```javascript
finishQuiz() {
    // ... code XP ...
    // ... code stats ...
    // ... code badges ...
}
```

**AJOUTER JUSTE AVANT L'ACCOLADE FERMANTE :**
```javascript
// ✅ ENREGISTRER COOLDOWN (24h)
this.recordQuizCompletion(this.currentTheme);
```

---

## ✅ MODIFICATION 5/5b : MODIFIER retryQuiz()

### 📍 Où : Au DÉBUT de la fonction `retryQuiz()`

**CHERCHER :**
```javascript
retryQuiz() {
    this.quizFinished = false;
    this.currentQuestionIndex = this.score = 0;
    this.loadQuestion();
},
```

**REMPLACER PAR :**
```javascript
retryQuiz() {
    // ✅ VÉRIFIER COOLDOWN même pour retry
    if (!this.canStartQuiz(this.currentTheme)) {
        const remaining = this.getCooldownTimeRemaining(this.currentTheme);
        const message = `⏰ Quiz déjà complété aujourd'hui !\n\nReviens dans ${remaining.hours}h ${remaining.minutes}min pour le refaire.`;
        
        if (window.curioBubbleInstance) {
            window.curioBubbleInstance.show(message, 'info');
        } else {
            alert(message);
        }
        // Fermer le quiz au lieu de retry
        this.backToTheme();
        return;
    }

    this.quizFinished = false;
    this.currentQuestionIndex = this.score = 0;
    this.loadQuestion();
},
```

---

## 🧪 TESTS APRÈS MODIFICATIONS

Pour chaque section (English, Maths, Sciences) :

1. **Test auto-avance :**
   - Lancer un quiz
   - Répondre à une question
   - ✅ Vérifier : passage auto après 2s (pas de bouton)

2. **Test cooldown :**
   - Compléter un quiz entièrement
   - Essayer de recommencer
   - ✅ Vérifier : Message "Reviens dans 23h 59min"

3. **Test retry :**
   - Après quiz terminé, cliquer "🔄 Recommencer"
   - ✅ Vérifier : Également bloqué par cooldown

4. **Test console :**
   - Ouvrir console (F12)
   - Compléter quiz
   - ✅ Vérifier : Log "🔒 Cooldown activé pour..."

---

## 📊 RÉCAPITULATIF

| Fichier | Modif 1 | Modif 2 | Modif 3 | Modif 4 | Modif 5 |
|---------|---------|---------|---------|---------|---------|
| `english_duolingo_section.html` | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |
| `maths_duolingo_section.html` | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |
| `sciences_duolingo_section.html` | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |

**Légende :**
- ⏳ À faire
- ✅ Terminé
- ❌ Erreur

---

## 🚨 POINTS D'ATTENTION

1. **Noms de sections** : Bien utiliser `anglais`, `maths`, `sciences` (pas `english` ou `mathematics`)
2. **Virgules** : Ne pas oublier les virgules entre fonctions
3. **Accolades** : Vérifier que toutes sont bien fermées
4. **Console** : Tester avec console ouverte (F12) pour voir erreurs JS

---

## ✅ VALIDATION FINALE

Une fois les 3 sections modifiées :

1. Ouvrir `admin-panel.html`
2. Compléter 1 quiz dans chaque section
3. Cliquer "📋 Voir Cooldowns Actifs"
4. ✅ Vérifier : 3 cooldowns listés (anglais, maths, sciences)

---

**🎯 Bonne chance pour les modifications !**

Si tu rencontres des erreurs JavaScript, vérifie :
- Les virgules entre fonctions
- Les accolades fermantes
- Les noms de sections (anglais/maths/sciences)
