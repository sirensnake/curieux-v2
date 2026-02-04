# 🔧 CORRECTIONS QUIZ - Auto-avance + Cooldown anti-triche

## 📋 PROBLÈMES IDENTIFIÉS

1. **Pas d'auto-avance** : L'utilisateur doit cliquer "Suivant" après chaque réponse
2. **Pas de cooldown** : Les quiz peuvent être refaits infiniment pour farmer des XP

---

## ✅ SOLUTIONS IMPLÉMENTÉES

### 1. AUTO-AVANCE AUTOMATIQUE (2 secondes)

**Comportement attendu :**
- Après avoir cliqué sur une réponse
- Afficher feedback correct/incorrect + explication
- **Attendre 2 secondes**
- Passer automatiquement à la question suivante
- **Supprimer le bouton "Suivant"**

**Code à modifier dans `checkAnswer()` :**

```javascript
checkAnswer(selectedOption) {
    if (this.answered) return;
    this.answered = true;
    this.isCorrect = (selectedOption === this.currentQuestion.correct);
    
    if (this.isCorrect) {
        this.score++;
        this.playCorrectSound();
        if (window.SectionXP) {
            window.SectionXP.addXP('francais', window.SectionXP.rewards.QUESTION_CORRECT);
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

**Modifications HTML :**
- **SUPPRIMER** le bouton "Suivant →" dans la zone feedback
- Le feedback reste visible 2 secondes avant transition auto

---

### 2. COOLDOWN QUIZ (24h anti-triche)

**Comportement attendu :**
- Stocker dans `localStorage` : `quiz_cooldowns_<section>_<theme>`
- Format : `{ lastCompleted: timestamp, count: number }`
- **Bloquer** si moins de 24h depuis dernière complétion
- **Message** : "Quiz déjà complété aujourd'hui. Reviens demain ! ⏰"
- **Afficher** temps restant avant déblocage

**Code à ajouter AVANT `startQuiz()` :**

```javascript
// Vérifier cooldown (24h)
canStartQuiz(theme) {
    const cooldownKey = `quiz_cooldown_francais_${theme}`;
    const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{}');
    
    if (!cooldownData.lastCompleted) return true;
    
    const now = Date.now();
    const timeSinceCompletion = now - cooldownData.lastCompleted;
    const cooldownDuration = 24 * 60 * 60 * 1000; // 24 heures
    
    return timeSinceCompletion >= cooldownDuration;
},

// Obtenir temps restant
getCooldownTimeRemaining(theme) {
    const cooldownKey = `quiz_cooldown_francais_${theme}`;
    const cooldownData = JSON.parse(localStorage.getItem(cooldownKey) || '{}');
    
    if (!cooldownData.lastCompleted) return 0;
    
    const now = Date.now();
    const timeSinceCompletion = now - cooldownData.lastCompleted;
    const cooldownDuration = 24 * 60 * 60 * 1000;
    const remaining = cooldownDuration - timeSinceCompletion;
    
    if (remaining <= 0) return 0;
    
    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
    
    return { hours, minutes };
},

// Enregistrer cooldown après complétion
recordQuizCompletion(theme) {
    const cooldownKey = `quiz_cooldown_francais_${theme}`;
    const cooldownData = {
        lastCompleted: Date.now(),
        count: (JSON.parse(localStorage.getItem(cooldownKey) || '{}').count || 0) + 1
    };
    localStorage.setItem(cooldownKey, JSON.stringify(cooldownData));
    console.log(`🔒 Cooldown activé pour ${theme}`);
},

// Modifier startQuiz() pour vérifier le cooldown
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

    // Continuer normalement si cooldown OK
    this.showQuiz = true;
    this.showResults = false;
    this.currentQuestionIndex = this.score = 0;
    this.selectedAnswer = null;
    this.answered = false;
    this.quizFinished = false;
    this.loadQuestion();
},
```

**Code à ajouter dans `finishQuiz()` :**

```javascript
finishQuiz() {
    this.quizFinished = true;
    const quizLength = this.getCurrentQuiz().length;
    const isPerfect = (this.score === quizLength);

    // XP rewards (existant)
    if (window.SectionXP) {
        window.SectionXP.addXP('francais', window.SectionXP.rewards.QUIZ_COMPLETED);
        if (isPerfect) {
            window.SectionXP.addXP('francais', window.SectionXP.rewards.PERFECT_QUIZ);
        }
    }

    // Stats quiz (existant)
    try {
        const raw = localStorage.getItem('lemondedescurieux_quiz_stats');
        const stats = raw ? JSON.parse(raw) : {
            totalCompleted: 0,
            perfectCount: 0,
            bySubject: { francais: 0, anglais: 0, maths: 0, sciences: 0, histoire: 0 }
        };
        stats.totalCompleted = (stats.totalCompleted || 0) + 1;
        if (isPerfect) stats.perfectCount = (stats.perfectCount || 0) + 1;
        if (!stats.bySubject) stats.bySubject = {};
        stats.bySubject.francais = (stats.bySubject.francais || 0) + 1;
        localStorage.setItem('lemondedescurieux_quiz_stats', JSON.stringify(stats));
    } catch(e) {
        console.warn('[francais] Erreur stats quiz:', e);
    }

    // ✅ ENREGISTRER COOLDOWN
    this.recordQuizCompletion(this.currentTheme);

    // Badges (existant)
    if (window.badgeSystem) {
        const newBadges = window.badgeSystem.checkBadges();
        if (newBadges.length > 0 && window.curioBubbleInstance && newBadges[0]) {
            window.curioBubbleInstance.show('🏆 Badge débloqué : ' + newBadges[0].name + ' !', 'success');
        }
        if (window.BRIDGE) window.BRIDGE.syncBadges();
    }
},
```

---

## 📂 FICHIERS À MODIFIER

1. ✅ `francais_duolingo_section.html`
2. ✅ `english_duolingo_section.html`
3. ✅ `maths_duolingo_section.html`
4. ✅ `sciences_duolingo_section.html`

**Histoire n'a pas de quiz intégré → pas de modification nécessaire**

---

## 🎨 MODIFICATIONS HTML

### Supprimer le bouton "Suivant"

**AVANT :**
```html
<div class="feedback-explanation" x-show="currentQuestion.explanation">
    💡 <span x-text="currentQuestion.explanation"></span>
</div>
<button @click="nextQuestion()" class="next-btn">Suivant →</button>
```

**APRÈS :**
```html
<div class="feedback-explanation" x-show="currentQuestion.explanation">
    💡 <span x-text="currentQuestion.explanation"></span>
</div>
<!-- Bouton supprimé : auto-avance après 2s -->
```

---

## 🧪 TESTS À EFFECTUER

### Test Auto-avance
1. Démarrer un quiz
2. Répondre à une question
3. ✅ Vérifier : feedback affiché 2 secondes
4. ✅ Vérifier : passage automatique à la question suivante
5. ✅ Vérifier : pas de bouton "Suivant" visible

### Test Cooldown
1. Compléter un quiz (tous thèmes confondus)
2. Essayer de recommencer immédiatement
3. ✅ Vérifier : message "Quiz déjà complété"
4. ✅ Vérifier : temps restant affiché (Xh Ymin)
5. ✅ Vérifier : localStorage contient `quiz_cooldown_francais_<theme>`
6. Modifier manuellement timestamp localStorage (ajouter 25h)
7. ✅ Vérifier : quiz redémarrable après cooldown expiré

### Test Stats intégrité
1. Compléter quiz 3 fois sur 24h
2. ✅ Vérifier : seul le 1er compte dans stats (pas de triche XP)
3. ✅ Vérifier : dashboard affiche bon nombre de quiz complétés

---

## ⚠️ NOTES IMPORTANTES

### Cooldown par thème
- Chaque **thème** a son propre cooldown (grammaire ≠ conjugaison)
- Un élève peut faire **3 quiz par jour** (1 par thème)
- Empêche le farming mais permet la progression variée

### Réinitialisation cooldown
- Le bouton "Réinitialiser" du dashboard doit aussi clear les cooldowns
- Ajouter dans `resetAllData()` :

```javascript
// Supprimer tous les cooldowns
Object.keys(localStorage).forEach(key => {
    if (key.startsWith('quiz_cooldown_')) {
        localStorage.removeItem(key);
    }
});
```

### Alternative : Cooldown par section (plus strict)
Si tu préfères **1 seul quiz par section par jour** (tous thèmes confondus) :
- Stocker : `quiz_cooldown_francais` (sans `_<theme>`)
- Bloquer tous les thèmes si 1 quiz complété dans la section

---

## 🚀 ORDRE D'IMPLÉMENTATION

1. ✅ Implémenter **auto-avance** d'abord (facile, rapide)
2. ✅ Tester sur Français uniquement
3. ✅ Si validé, répliquer sur 3 autres sections
4. ✅ Implémenter **cooldown** ensuite
5. ✅ Tester scénarios triche (localStorage manipulation)
6. ✅ Valider avec enfant testeur

---

**Prêt pour implémentation ! 🎯**
