# 🎵 Guide d'Amélioration Audio - Firefox

## 🎯 Problème Identifié

**Firefox** utilise les voix système (eSpeak) qui sont robotiques  
**Chrome** utilise les voix Google Cloud de haute qualité

---

## ✅ Solution Recommandée : Fichiers MP3 Natifs

### **Option A : Utiliser API Text-to-Speech Externe (Gratuit)**

#### **1. Google Cloud Text-to-Speech (Quota Gratuit)**

**Quota gratuit** : 1 million caractères/mois (largement suffisant)

**Script Python pour générer les MP3** :

```python
# generate_audio.py
from google.cloud import texttospeech
import os

# Liste des mots à générer
words = [
    "father", "mother", "sister", "brother",
    "red", "blue", "green", "yellow",
    "one", "two", "three", "four", "five",
    # ... tous les mots des 20 leçons
]

# Configuration client
client = texttospeech.TextToSpeechClient()

# Configuration voix
voice = texttospeech.VoiceSelectionParams(
    language_code="en-GB",  # ou "en-US"
    name="en-GB-Wavenet-A",  # Voix haute qualité
    ssml_gender=texttospeech.SsmlVoiceGender.FEMALE
)

# Configuration audio
audio_config = texttospeech.AudioConfig(
    audio_encoding=texttospeech.AudioEncoding.MP3,
    speaking_rate=0.9,  # Vitesse légèrement ralentie pour enfants
    pitch=0.0
)

# Créer dossier
os.makedirs('audio/english', exist_ok=True)

# Générer MP3 pour chaque mot
for word in words:
    synthesis_input = texttospeech.SynthesisInput(text=word)
    
    response = client.synthesize_speech(
        input=synthesis_input,
        voice=voice,
        audio_config=audio_config
    )
    
    # Sauvegarder
    filename = f"audio/english/{word.lower()}.mp3"
    with open(filename, 'wb') as out:
        out.write(response.audio_content)
    
    print(f"✅ Généré : {filename}")

print(f"🎉 {len(words)} fichiers MP3 générés !")
```

#### **2. Amazon Polly (Alternative)**

```bash
# Installation AWS CLI
pip install awscli boto3

# Génération MP3
aws polly synthesize-speech \
    --output-format mp3 \
    --voice-id Amy \
    --text "father" \
    audio/english/father.mp3
```

---

### **Option B : API Web Gratuites (Sans Serveur)**

#### **1. ResponsiveVoice (Gratuit jusqu'à 5000 requêtes/jour)**

```javascript
// Dans audio-player.js

async playFromResponsiveVoice(text) {
  return new Promise((resolve, reject) => {
    if (typeof responsiveVoice === 'undefined') {
      reject(new Error('ResponsiveVoice not loaded'));
      return;
    }
    
    responsiveVoice.speak(text, "UK English Female", {
      rate: 0.9,
      pitch: 1,
      volume: 1,
      onend: resolve,
      onerror: reject
    });
  });
}
```

**Ajout dans HTML** :
```html
<!-- Dans english_interactive.html -->
<script src="https://code.responsivevoice.org/responsivevoice.js?key=VOTRE_CLE_GRATUITE"></script>
```

---

### **Option C : Solution Hybride (Recommandé)**

Modifier `audio-player.js` pour :
1. **Firefox** → Fichiers MP3 pré-enregistrés
2. **Chrome** → Web Speech API Google
3. **Fallback** → ResponsiveVoice

```javascript
async speak(text, options = {}) {
  const isFirefox = /firefox/i.test(navigator.userAgent);
  
  // Firefox : préférer MP3
  if (isFirefox) {
    try {
      await this.playFromFile(text);
      return;
    } catch (e) {
      console.warn('MP3 not found, using TTS');
    }
  }
  
  // Chrome ou fallback : Web Speech API
  // ... code existant
}
```

---

## 📁 Structure Fichiers Audio

```
lemondedescurieux/
└── audio/
    └── english/
        ├── father.mp3
        ├── mother.mp3
        ├── sister.mp3
        ├── brother.mp3
        ├── red.mp3
        ├── blue.mp3
        └── ... (~200 fichiers pour 20 leçons)
```

---

## 🎯 Liste Mots à Générer (20 Leçons)

### **Leçon 1 - Family (8 mots)**
```
father, mother, sister, brother, grandfather, grandmother, uncle, aunt
```

### **Leçon 2 - Colors (8 mots)**
```
red, blue, green, yellow, orange, purple, pink, brown
```

### **Leçon 3 - Numbers 1-20 (20 mots)**
```
one, two, three, four, five, six, seven, eight, nine, ten,
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty
```

### **Leçon 4-20 : Total ~200 mots uniques**

---

## 🚀 Implémentation Rapide (Sans Fichiers MP3)

### **Amélioration Web Speech API Firefox**

Modifier paramètres pour voix moins robotique :

```javascript
// Dans audio-player.js - Config Firefox optimisée
const config = {
  accent: 'uk',
  rate: 0.85,      // Plus lent = plus naturel
  pitch: 1.1,      // Légèrement plus aigu
  volume: 1.0
};

// Sélection voix Firefox
const firefoxVoices = [
  'Microsoft Hazel Desktop - English (United Kingdom)',
  'eSpeak RP', // Meilleure voix eSpeak
  'English (United Kingdom)'
];
```

---

## ⚡ Solution Immédiate (0€)

### **Activer ResponsiveVoice**

**Étape 1** : Inscription gratuite sur https://responsivevoice.org/

**Étape 2** : Ajouter dans `english_interactive.html` :

```html
<head>
  <!-- ... autres scripts ... -->
  <script src="https://code.responsivevoice.org/responsivevoice.js?key=VOTRE_CLE"></script>
</head>
```

**Étape 3** : Modifier `audio-player.js` :

```javascript
speak(text, options = {}) {
  // Priorité 1 : ResponsiveVoice (haute qualité)
  if (typeof responsiveVoice !== 'undefined') {
    return new Promise((resolve) => {
      responsiveVoice.speak(text, "UK English Female", {
        rate: 0.9,
        onend: resolve
      });
    });
  }
  
  // Priorité 2 : Web Speech API
  // ... code existant
}
```

---

## 📊 Comparaison Solutions

| Solution | Qualité | Coût | Setup | Offline |
|----------|---------|------|-------|---------|
| **ResponsiveVoice** | ⭐⭐⭐⭐⭐ | 0€ (5k/jour) | 5 min | ❌ |
| **MP3 Google Cloud** | ⭐⭐⭐⭐⭐ | 0€ (1M/mois) | 30 min | ✅ |
| **Web Speech API** | ⭐⭐⭐ (Chrome) / ⭐ (Firefox) | 0€ | 0 min | ✅ |
| **Amazon Polly** | ⭐⭐⭐⭐⭐ | 4$/1M chars | 20 min | ✅ |

---

## 🎯 Recommandation Finale

### **Court Terme (Aujourd'hui)** :
Ajouter **ResponsiveVoice** (5 minutes, 0€, excellente qualité)

### **Moyen Terme (Cette Semaine)** :
Générer **200 fichiers MP3** avec Google Cloud TTS (gratuit, offline)

### **Long Terme (Phase 3)** :
Intégrer **API vocale IA** pour prononciation contextuelle

---

## 🛠️ Besoin d'Aide ?

Choisis ton option préférée et je te fournis :
- ✅ Code modifié complet
- ✅ Script génération MP3
- ✅ Liste mots à générer
- ✅ Guide installation

**Quelle solution préfères-tu implémenter ?**
