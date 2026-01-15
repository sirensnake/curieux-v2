/**
 * 🔊 Audio Player - Web Speech API Wrapper
 * 
 * OBJECTIF: Prononciation native anglais (UK/US accents)
 * 
 * FEATURES:
 *   - Synthèse vocale navigateur (Web Speech API)
 *   - Support accents UK/US
 *   - Cache audio généré (performances)
 *   - Fallback fichiers MP3 si disponibles
 *   - Contrôle vitesse/pitch
 * 
 * USAGE:
 *   const player = new AudioPlayer();
 *   await player.speak('hello', { accent: 'uk' });
 *   player.playFromFile('hello.mp3');
 * 
 * COMPATIBILITÉ:
 *   - Chrome/Edge: Excellent support
 *   - Safari: Support partiel (voix limitées)
 *   - Firefox: Support basique
 */

class AudioPlayer {
  constructor(config = {}) {
    this.config = {
      accent: config.accent || 'uk',        // 'uk' ou 'us'
      rate: config.rate || 0.9,             // Vitesse (0.5-2.0)
      pitch: config.pitch || 1.0,           // Tonalité (0.0-2.0)
      volume: config.volume || 1.0,         // Volume (0.0-1.0)
      audioPath: config.audioPath || 'audio/english/', // Chemin fichiers MP3
      cacheEnabled: config.cacheEnabled !== false
    };
    
    // Vérification support Web Speech API
    this.speechSynthesis = window.speechSynthesis;
    this.SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;
    this.supported = !!(this.speechSynthesis && this.SpeechSynthesisUtterance);
    
    // Cache audio généré
    this.audioCache = new Map();
    
    // Voix disponibles
    this.voices = [];
    this.voicesLoaded = false;
    
    this.init();
  }

  /**
   * Initialisation
   */
  async init() {
    if (!this.supported) {
      console.warn('⚠️ Web Speech API not supported, using fallback');
      return;
    }

    // Chargement voix disponibles
    await this.loadVoices();
    
    console.log('✅ AudioPlayer initialized', {
      supported: this.supported,
      voices: this.voices.length,
      accent: this.config.accent
    });
  }

  /**
   * Chargement voix disponibles
   * @returns {Promise<void>}
   */
  loadVoices() {
    return new Promise((resolve) => {
      // Voix déjà chargées
      if (this.voicesLoaded) {
        resolve();
        return;
      }

      // Récupération voix
      const updateVoices = () => {
        this.voices = this.speechSynthesis.getVoices();
        
        if (this.voices.length > 0) {
          this.voicesLoaded = true;
          this.selectedVoice = this._selectBestVoice();
          
          console.log('🎙️ Voices loaded:', {
            total: this.voices.length,
            selected: this.selectedVoice?.name
          });
          
          resolve();
        }
      };

      // Chrome charge les voix de manière asynchrone
      if (this.speechSynthesis.onvoiceschanged !== undefined) {
        this.speechSynthesis.onvoiceschanged = updateVoices;
      }

      // Tentative immédiate (Firefox, Safari)
      updateVoices();
      
      // Timeout sécurité
      setTimeout(() => {
        if (!this.voicesLoaded) {
          console.warn('⚠️ Voice loading timeout, using default');
          this.voicesLoaded = true;
          resolve();
        }
      }, 1000);
    });
  }

  /**
   * Sélection meilleure voix selon accent
   * @private
   * @returns {SpeechSynthesisVoice}
   */
  _selectBestVoice() {
    const accent = this.config.accent.toLowerCase();
    
    // Préférences voix par accent
    const preferences = {
      uk: [
        'Google UK English Female',
        'Google UK English Male',
        'Microsoft Hazel - English (United Kingdom)',
        'Karen',
        'Daniel'
      ],
      us: [
        'Google US English',
        'Microsoft Zira - English (United States)',
        'Samantha',
        'Alex'
      ]
    };

    const preferred = preferences[accent] || preferences.us;

    // Recherche voix préférée
    for (const name of preferred) {
      const voice = this.voices.find(v => 
        v.name.includes(name) || v.name === name
      );
      if (voice) return voice;
    }

    // Fallback: première voix anglaise
    const englishVoice = this.voices.find(v => 
      v.lang.startsWith('en-') || v.lang === 'en'
    );
    
    return englishVoice || this.voices[0];
  }

  /**
   * Prononciation texte (Web Speech API)
   * @param {string} text - Texte à prononcer
   * @param {object} options - Options { accent, rate, pitch }
   * @returns {Promise<void>}
   */
  speak(text, options = {}) {
    return new Promise(async (resolve, reject) => {
      if (!this.supported) {
        // Fallback fichier audio
        await this.playFromFile(text);
        resolve();
        return;
      }

      // Attente chargement voix
      if (!this.voicesLoaded) {
        await this.loadVoices();
      }

      // Arrêt lecture en cours
      this.speechSynthesis.cancel();

      // Création utterance
      const utterance = new this.SpeechSynthesisUtterance(text);
      
      utterance.voice = this.selectedVoice;
      utterance.lang = options.accent === 'us' ? 'en-US' : 'en-GB';
      utterance.rate = options.rate || this.config.rate;
      utterance.pitch = options.pitch || this.config.pitch;
      utterance.volume = options.volume || this.config.volume;

      // Événements
      utterance.onend = () => resolve();
      utterance.onerror = (error) => {
        console.error('Speech synthesis error:', error);
        // Fallback fichier
        this.playFromFile(text).then(resolve).catch(reject);
      };

      // Lecture
      this.speechSynthesis.speak(utterance);
      
      // Log debug
      if (window.eventBus?.debugMode) {
        console.log('🔊 Speaking:', text, {
          voice: utterance.voice?.name,
          rate: utterance.rate
        });
      }
    });
  }

  /**
   * Lecture depuis fichier MP3 (fallback)
   * @param {string} filename - Nom fichier (sans extension)
   * @returns {Promise<void>}
   */
  playFromFile(filename) {
    return new Promise((resolve, reject) => {
      // Nettoyage nom fichier
      const cleanName = filename.toLowerCase().replace(/[^a-z0-9]/g, '_');
      const audioPath = `${this.config.audioPath}${cleanName}.mp3`;

      // Vérification cache
      if (this.config.cacheEnabled && this.audioCache.has(audioPath)) {
        const audio = this.audioCache.get(audioPath);
        audio.currentTime = 0;
        audio.play().then(resolve).catch(reject);
        return;
      }

      // Création élément audio
      const audio = new Audio(audioPath);
      
      audio.onended = () => resolve();
      audio.onerror = (error) => {
        console.warn(`⚠️ Audio file not found: ${audioPath}`);
        reject(error);
      };

      // Mise en cache
      if (this.config.cacheEnabled) {
        this.audioCache.set(audioPath, audio);
      }

      audio.play().catch(reject);
    });
  }

  /**
   * Arrêt lecture en cours
   */
  stop() {
    if (this.supported) {
      this.speechSynthesis.cancel();
    }
  }

  /**
   * Pause lecture
   */
  pause() {
    if (this.supported) {
      this.speechSynthesis.pause();
    }
  }

  /**
   * Reprise lecture
   */
  resume() {
    if (this.supported) {
      this.speechSynthesis.resume();
    }
  }

  /**
   * Modification accent
   * @param {string} accent - 'uk' ou 'us'
   */
  setAccent(accent) {
    this.config.accent = accent;
    this.selectedVoice = this._selectBestVoice();
  }

  /**
   * Modification vitesse
   * @param {number} rate - Vitesse 0.5-2.0
   */
  setRate(rate) {
    this.config.rate = Math.max(0.5, Math.min(2.0, rate));
  }

  /**
   * Test prononciation
   * @param {string} text - Texte de test
   */
  async test(text = 'Hello, this is a test') {
    console.log('🎙️ Testing audio player...');
    
    try {
      await this.speak(text);
      console.log('✅ Audio test successful');
    } catch (error) {
      console.error('❌ Audio test failed:', error);
    }
  }

  /**
   * Nettoyage cache
   */
  clearCache() {
    this.audioCache.clear();
    console.log('🗑️ Audio cache cleared');
  }

  /**
   * Récupération liste voix disponibles
   * @returns {Array} Liste voix
   */
  getAvailableVoices() {
    return this.voices.map(v => ({
      name: v.name,
      lang: v.lang,
      default: v.default,
      local: v.localService
    }));
  }

  /**
   * Statistiques cache
   * @returns {object} Stats cache
   */
  getCacheStats() {
    return {
      size: this.audioCache.size,
      enabled: this.config.cacheEnabled,
      items: Array.from(this.audioCache.keys())
    };
  }
}

/**
 * 🎯 Helper: Bouton Listen Standardisé
 * 
 * Création rapide bouton prononciation
 */
class ListenButton {
  constructor(word, audioPlayer, container) {
    this.word = word;
    this.player = audioPlayer;
    this.container = container;
    
    this.button = this.create();
  }

  /**
   * Création bouton
   * @returns {HTMLElement}
   */
  create() {
    const button = document.createElement('button');
    button.className = 'listen-btn';
    button.innerHTML = '🔊 Listen';
    button.setAttribute('aria-label', `Listen to pronunciation of ${this.word}`);
    
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      button.disabled = true;
      button.innerHTML = '🔊 Playing...';
      
      try {
        await this.player.speak(this.word);
      } catch (error) {
        console.error('Listen button error:', error);
      } finally {
        button.disabled = false;
        button.innerHTML = '🔊 Listen';
      }
    });

    if (this.container) {
      this.container.appendChild(button);
    }

    return button;
  }

  /**
   * Suppression bouton
   */
  remove() {
    if (this.button && this.button.parentNode) {
      this.button.parentNode.removeChild(this.button);
    }
  }
}

// Singleton global
// ============================================================================
// EXPORT GLOBAL (Compatibilité Script Classique)
// ============================================================================

window.AudioPlayer = AudioPlayer;
window.ListenButton = ListenButton;

window.audioPlayer = new AudioPlayer({
  accent: 'uk',
  rate: 0.9,
  audioPath: 'audio/english/'
});

console.log('✅ Audio Player loaded successfully!');
