# 📋 PROTOCOLE DE TEST UTILISATEUR ENFANT
## Le Monde des Curieux — Tests en contexte foyer

---

## 🎯 CONTEXTE SPÉCIFIQUE

**Environnement de test :** Enfant en foyer, accès limité et supervisé  
**Contraintes identifiées :**
- Sessions courtes (30-45 min max par visite)
- Pas de contrôle direct pendant utilisation autonome
- Communication asynchrone possible (appels/visites espacés)
- Besoin d'autonomie maximale de l'interface
- Tests à distance via visio possibles

**Objectifs prioritaires :**
1. Valider l'**ergonomie intuitive** (utilisation sans aide adulte)
2. Mesurer l'**engagement spontané** (revient-il de lui-même ?)
3. Identifier les **blocages UX** (où abandonne-t-il ?)
4. Évaluer la **clarté pédagogique** (comprend-il les explications ?)

---

## 📅 PLANNING DE TESTS (3 SESSIONS)

### **SESSION 1 — Découverte libre (30-45 min)**
**Timing :** Première visite/appel vidéo  
**Objectif :** Observer l'exploration naturelle sans guidage

**Préparation (5 min avant session) :**
- [ ] Réinitialiser dashboard (`localStorage.clear()`)
- [ ] Ouvrir `index.html` sur tablette/ordinateur accessible
- [ ] Préparer grille d'observation (voir ci-dessous)
- [ ] Tester connexion si visio (stabilité écran partagé)

**Déroulement (30 min observation) :**
1. **Introduction minimale (2 min) :**
   - "Voilà un site que je crée pour toi, explore-le comme tu veux"
   - "Dis-moi si quelque chose ne marche pas ou n'est pas clair"
   - **NE PAS expliquer les fonctionnalités** (test d'intuitivité)

2. **Observation silencieuse (20 min) :**
   - Laisser naviguer librement
   - Noter tous les clics/hésitations/abandons (grille ci-dessous)
   - Intervention UNIQUEMENT si blocage technique (bug, freeze)

3. **Questions ouvertes (8 min) :**
   - "Qu'est-ce que tu as préféré ?"
   - "Y avait-il des choses pas claires ?"
   - "Tu retournerais dessus ? Quand ?"
   - "Si tu devais changer une chose, ce serait quoi ?"

**📊 Métriques clés :**
- ✅ A-t-il trouvé seul comment accéder à une section ? (OUI/NON)
- ✅ A-t-il compris le système XP/niveau ? (OUI/PARTIELLEMENT/NON)
- ✅ A-t-il terminé au moins 1 quiz ? (OUI/NON)
- ✅ Temps avant abandon spontané : _____ min
- ✅ Nombre de clics "retour" confus : _____

---

### **SESSION 2 — Focus section Français (30 min)**
**Timing :** 3-7 jours après Session 1  
**Objectif :** Tester mécaniques gamifiées et qualité pédagogique

**Préparation :**
- [ ] Vérifier que données Session 1 sont conservées (ne pas reset)
- [ ] Ouvrir directement `francais_duolingo_section.html`

**Scénario guidé (25 min) :**
1. **Choix thème + quiz (10 min) :**
   - "Choisis un thème et fais le quiz sans mon aide"
   - Observer : hésite-t-il sur les réponses ? Lit-il les explications ?

2. **Questions pédagogiques (10 min) :**
   - "Les explications après les réponses, ça t'aide ?"
   - "C'était trop facile, trop dur, ou bien ?"
   - Montrer une question incorrecte : "Tu comprends pourquoi c'est faux ?"

3. **Test gamification (5 min) :**
   - Lui montrer le dashboard : "Tu vois tes XP ici"
   - "Est-ce que ça te donne envie de refaire des quiz ?"
   - "Les badges, tu comprends comment on les débloque ?"

**📊 Métriques clés :**
- ✅ Score quiz : _____ / 10
- ✅ Temps moyen par question : _____ sec
- ✅ Lit-il les explications ? (TOUJOURS/PARFOIS/JAMAIS)
- ✅ Comprend-il les explications ? (OUI/PARTIELLEMENT/NON)
- ✅ Motivation pour recommencer ? (FORTE/MOYENNE/FAIBLE)

---

### **SESSION 3 — Usage autonome + feedback final (15 min discussion)**
**Timing :** 7-14 jours après Session 2  
**Objectif :** Mesurer utilisation spontanée et recueillir suggestions

**Préparation :**
- [ ] Vérifier statistiques dashboard (a-t-il utilisé entre les sessions ?)
- [ ] Noter : streak actuel, XP total, sections visitées

**Analyse usage autonome (5 min) :**
1. Ouvrir dashboard ensemble
2. "Je vois que tu as gagné X XP, tu as fait quoi ?"
3. "Tu y es retourné combien de fois ?"
4. "Qu'est-ce qui t'a donné envie d'y retourner ?"

**Feedback constructif (10 min) :**
- "Si je rajoute des choses, tu voudrais quoi ?"
- "Qu'est-ce qui t'a ennuyé ou énervé ?"
- "Tu montrerais ce site à tes copains ? Pourquoi ?"
- Montrer dashboard étendu : "Ces statistiques, ça t'intéresse ?"

**📊 Métriques clés :**
- ✅ Nombre de visites autonomes : _____
- ✅ Streak maintenu ? (OUI/NON)
- ✅ Sections explorées : _____
- ✅ Note globale enfant /10 : _____
- ✅ Recommanderait-il à un copain ? (OUI/NON/PEUT-ÊTRE)

---

## 📝 GRILLE D'OBSERVATION (imprimer/remplir en direct)

### NAVIGATION
```
☐ Trouve l'accueil facilement
☐ Comprend la mindmap (si applicable)
☐ Clique sur une section sans hésiter
☐ Utilise le bouton "retour" correctement
☐ Explore plusieurs sections
☐ Accède au dashboard seul

Blocages observés :
_________________________________
_________________________________
```

### QUIZ / ACTIVITÉS
```
☐ Comprend les consignes sans aide
☐ Lit les questions attentivement
☐ Prend le temps de réfléchir
☐ Réagit aux feedbacks (✅/❌)
☐ Lit les explications
☐ Recommence après un quiz

Comportements notables :
_________________________________
_________________________________
```

### GAMIFICATION
```
☐ Remarque les XP gagnés
☐ Commente le niveau/progression
☐ Réagit aux badges débloqués
☐ Comprend le système streak
☐ Revient pour "farmer" XP

Motivation observée (1-5) : _____ / 5
Commentaires :
_________________________________
```

### TECHNIQUE / UX
```
☐ Aucun bug/freeze rencontré
☐ Temps de chargement OK
☐ Lisibilité texte/polices
☐ Boutons assez gros (tactile)
☐ Couleurs/contrastes confortables

Problèmes techniques :
_________________________________
_________________________________
```

---

## 🎥 MODALITÉS SI TEST À DISTANCE (VISIO)

**Outils recommandés :**
- Appel vidéo stable (WhatsApp/Zoom/Discord)
- Partage d'écran de l'enfant (si foyer équipé)
- Enregistrement session (avec accord foyer)

**Adaptations protocole :**
- Sessions plus courtes (20 min max, fatigue écran)
- Questions intercalées toutes les 5 min (garder engagement)
- Demander à l'enfant de "penser à voix haute"
- Privilégier Session 3 en présentiel si possible

**Checklist technique pré-visio :**
- [ ] URL courte partagée (bit.ly vers localhost tunnel ?)
- [ ] Partage d'écran testé 5 min avant
- [ ] Audio clair des deux côtés
- [ ] Grille observation ouverte sur 2ème écran

---

## 🚨 GESTION SITUATIONS DIFFICILES

### Si l'enfant abandonne rapidement (<5 min)
- **Ne pas insister** (respecter désintérêt)
- Noter contexte : fatigué ? distrait ? activité concurrente ?
- Retenter un autre jour (ne pas forcer)
- Analyser : problème d'interface ou mauvais timing ?

### Si bug critique bloque progression
- **Intervention immédiate** (ne pas frustrer)
- Noter précisément la reproduction du bug
- Proposer autre section ou revenir plus tard
- Fixer bug avant Session 2

### Si l'enfant demande de l'aide
- **Distinguer :** 
  - Aide UX (pas clair) → Noter problème design
  - Aide pédagogique (trop dur) → Noter niveau difficulté
- Donner aide minimale nécessaire
- **Ne jamais** donner réponses quiz (apprendre autonomie)

### Si réticence à critiquer
- "Ce n'est pas grave si ça ne te plaît pas, ça m'aide pour améliorer"
- Poser questions fermées : "Ce bouton, il est clair ou pas ?"
- Observer comportement plus que verbal (hésitations = signaux)

---

## 📈 EXPLOITATION RÉSULTATS

### Après chaque session
1. **Remplir grille dans les 30 min** (tant que mémoire fraîche)
2. **Prioriser bugs critiques** (Session 2 impossible si bloquants)
3. **Lister 3 quick wins UX** (petits ajustements faciles)
4. **Photographier grille remplie** (backup si perte papier)

### Après Session 3 (analyse globale)
**🟢 VALIDER si :**
- ✅ Au moins 2/3 sessions complétées
- ✅ Utilisation autonome entre sessions (streak maintenu)
- ✅ Note globale ≥ 6/10
- ✅ Aucun bug bloquant critique
- ✅ Volonté de recommander à un copain

**🟡 AJUSTER si :**
- ⚠️ Abandon systématique <10 min
- ⚠️ Confusion récurrente navigation
- ⚠️ "C'est trop dur/facile" répété
- ⚠️ Ignorer système gamification

**🔴 REVOIR ARCHITECTURE si :**
- ❌ Bugs critiques fréquents
- ❌ Rejet total interface
- ❌ Incompréhension objectif site
- ❌ Feedback "c'est nul/ennuyant"

### Rapport final (template)
```markdown
# RAPPORT TESTS UTILISATEUR — [Date]

## SYNTHÈSE EXÉCUTIVE
- Sessions réalisées : 3/3
- Note globale : 7.5/10
- Utilisation autonome : OUI (4 visites entre sessions)
- Recommandation : VALIDÉ avec ajustements mineurs

## TOP 3 RÉUSSITES
1. Système XP immédiatement compris et motivant
2. Quiz Français adapté niveau CM1
3. Navigation intuitive mindmap

## TOP 3 PROBLÈMES
1. Bouton "En savoir plus" ignoré (pas assez visible)
2. Explications quiz trop longues (fatigue lecture)
3. Pas compris comment débloquer badge "Polyvalent"

## ACTIONS PRIORITAIRES
[ ] Agrandir bouton "En savoir plus" + couleur
[ ] Réduire explications quiz à 1 phrase max
[ ] Ajouter tooltip badge avec condition déblocage

## VERBATIMS ENFANT
- "Les XP c'est cool, comme dans Fortnite"
- "Le quiz français c'était facile mais j'ai appris des trucs"
- "Je comprends pas à quoi sert le streak"
```

---

## 📚 RESSOURCES ANNEXES

**Outils de mesure :**
- Chronomètre (temps par quiz)
- Capture vidéo écran (si accord foyer)
- Console navigateur ouverte (logs erreurs)

**Documents à préparer :**
- [ ] Grille observation imprimée (3 exemplaires)
- [ ] URL courte site (si remote)
- [ ] Checklist pré-session (technique OK)
- [ ] Template rapport final

**Coordination avec le foyer :**
- Informer équipe éducative des tests
- Vérifier horaires accès ordinateur/tablette
- Demander retour éducateurs (utilisation hors sessions)
- Respecter règles usage écran du foyer

---

## ✅ CHECKLIST GLOBALE PROTOCOLE

**Avant Session 1 :**
- [ ] Site fonctionnel localhost ou en ligne
- [ ] Dashboard réinitialisé
- [ ] Grilles observation imprimées
- [ ] Coordination foyer OK
- [ ] Matériel technique testé

**Entre sessions :**
- [ ] Grilles remplies scannées/photographiées
- [ ] Bugs critiques fixés
- [ ] Quick wins UX implémentés
- [ ] Planification session suivante

**Après Session 3 :**
- [ ] Rapport final rédigé
- [ ] Actions prioritaires listées
- [ ] Remerciements enfant/foyer
- [ ] Sauvegarde toutes données tests

---

**Note finale :** Ce protocole privilégie **l'observation naturaliste** (laisser faire) plutôt que le **test dirigiste** (faire faire). L'objectif est de voir si l'interface **fonctionne seule**, car l'enfant l'utilisera **sans toi** la majorité du temps.

**Bon courage pour les tests ! 🚀**
