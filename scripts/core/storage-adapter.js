/**
 * 🔧 Storage Adapter - Interface Abstraction
 * 
 * Pattern: Adapter Pattern pour découplage storage
 * 
 * OBJECTIF: Permettre migration transparente:
 *   Vanilla JS (localStorage) → React (Redux/Context)
 * 
 * USAGE:
 *   const storage = new StorageAdapter('localStorage');
 *   storage.set('english_progress', data);
 * 
 * MIGRATION FUTURE:
 *   const storage = new StorageAdapter('redux');
 *   // Même interface, backend différent
 */

class StorageAdapter {
  constructor(type = 'localStorage') {
    this.type = type;
    this.cache = new Map(); // Cache en mémoire pour performances
    
    // Factory pattern - sélection backend
    this.backend = this._createBackend(type);
  }

  /**
   * Factory: Création backend selon type
   * @private
   */
  _createBackend(type) {
    switch(type) {
      case 'localStorage':
        return new LocalStorageBackend();
      case 'redux':
        // Placeholder pour migration future
        return new ReduxBackend();
      case 'memory':
        // Utile pour tests unitaires
        return new MemoryBackend();
      default:
        throw new Error(`Storage type ${type} not supported`);
    }
  }

  /**
   * Récupération données avec cache
   * @param {string} key - Clé de stockage
   * @param {any} defaultValue - Valeur par défaut si inexistant
   * @returns {any} Données parsées
   */
  get(key, defaultValue = null) {
    // Check cache d'abord (performance)
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const value = this.backend.get(key, defaultValue);
    this.cache.set(key, value);
    return value;
  }

  /**
   * Sauvegarde données avec invalidation cache
   * @param {string} key - Clé de stockage
   * @param {any} value - Données à sauvegarder
   */
  set(key, value) {
    this.backend.set(key, value);
    this.cache.set(key, value); // Mise à jour cache
    
    // Event bus pour notifications cross-composants (pattern Observer)
    this._notifyChange(key, value);
  }

  /**
   * Mise à jour partielle (merge)
   * @param {string} key - Clé de stockage
   * @param {object} updates - Propriétés à mettre à jour
   */
  update(key, updates) {
    const current = this.get(key, {});
    const merged = { ...current, ...updates };
    this.set(key, merged);
  }

  /**
   * Suppression avec invalidation cache
   * @param {string} key - Clé à supprimer
   */
  delete(key) {
    this.backend.delete(key);
    this.cache.delete(key);
    this._notifyChange(key, null);
  }

  /**
   * Vérification existence
   * @param {string} key - Clé à vérifier
   * @returns {boolean}
   */
  has(key) {
    return this.backend.has(key);
  }

  /**
   * Listage clés avec pattern
   * @param {string} pattern - Regex ou string à matcher
   * @returns {string[]} Liste des clés
   */
  keys(pattern = null) {
    return this.backend.keys(pattern);
  }

  /**
   * Nettoyage cache (appel manuel si besoin)
   */
  clearCache() {
    this.cache.clear();
  }

  /**
   * Export complet données (backup/migration)
   * @returns {object} Toutes les données
   */
  export() {
    return this.backend.export();
  }

  /**
   * Import données (restauration/migration)
   * @param {object} data - Données à importer
   */
  import(data) {
    this.backend.import(data);
    this.clearCache(); // Invalidation complète
  }

  /**
   * Notification changements (Observer pattern)
   * @private
   */
  _notifyChange(key, value) {
    if (window.eventBus) {
      window.eventBus.emit('storage:change', { key, value });
    }
  }
}

/**
 * 🔹 Backend LocalStorage (Vanilla JS actuel)
 */
class LocalStorageBackend {
  constructor() {
    this.prefix = 'lemondedescurieux_';
  }

  _getKey(key) {
    return this.prefix + key;
  }

  get(key, defaultValue = null) {
    try {
      const stored = localStorage.getItem(this._getKey(key));
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (error) {
      console.error(`Storage get error for ${key}:`, error);
      return defaultValue;
    }
  }

  set(key, value) {
    try {
      localStorage.setItem(this._getKey(key), JSON.stringify(value));
    } catch (error) {
      console.error(`Storage set error for ${key}:`, error);
      // Gestion quota exceeded
      if (error.name === 'QuotaExceededError') {
        this._handleQuotaExceeded();
      }
    }
  }

  delete(key) {
    localStorage.removeItem(this._getKey(key));
  }

  has(key) {
    return localStorage.getItem(this._getKey(key)) !== null;
  }

  keys(pattern = null) {
    const allKeys = Object.keys(localStorage)
      .filter(k => k.startsWith(this.prefix))
      .map(k => k.replace(this.prefix, ''));
    
    if (!pattern) return allKeys;
    
    const regex = new RegExp(pattern);
    return allKeys.filter(k => regex.test(k));
  }

  export() {
    const data = {};
    this.keys().forEach(key => {
      data[key] = this.get(key);
    });
    return data;
  }

  import(data) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  /**
   * Gestion dépassement quota localStorage
   * @private
   */
  _handleQuotaExceeded() {
    console.warn('LocalStorage quota exceeded, cleaning old data...');
    
    // Stratégie: Supprimer données les plus anciennes
    const keys = this.keys();
    const withTimestamps = keys.map(key => ({
      key,
      data: this.get(key),
      timestamp: this.get(key)?.timestamp || 0
    }));
    
    // Tri par ancienneté
    withTimestamps.sort((a, b) => a.timestamp - b.timestamp);
    
    // Suppression 20% plus anciennes
    const toDelete = Math.ceil(keys.length * 0.2);
    withTimestamps.slice(0, toDelete).forEach(item => {
      this.delete(item.key);
    });
  }
}

/**
 * 🔹 Backend Redux (Placeholder migration future)
 */
class ReduxBackend {
  constructor() {
    // Placeholder - sera implémenté Phase 3
    console.warn('ReduxBackend not implemented yet');
  }

  get(key, defaultValue) {
    // Future: store.getState()[key]
    return defaultValue;
  }

  set(key, value) {
    // Future: store.dispatch({ type: 'SET', key, value })
  }

  // ... autres méthodes
}

/**
 * 🔹 Backend Memory (Tests unitaires)
 */
class MemoryBackend {
  constructor() {
    this.data = new Map();
  }

  get(key, defaultValue = null) {
    return this.data.has(key) ? this.data.get(key) : defaultValue;
  }

  set(key, value) {
    this.data.set(key, value);
  }

  delete(key) {
    this.data.delete(key);
  }

  has(key) {
    return this.data.has(key);
  }

  keys(pattern = null) {
    const allKeys = Array.from(this.data.keys());
    if (!pattern) return allKeys;
    
    const regex = new RegExp(pattern);
    return allKeys.filter(k => regex.test(k));
  }

  export() {
    return Object.fromEntries(this.data);
  }

  import(data) {
    Object.entries(data).forEach(([key, value]) => {
      this.data.set(key, value);
    });
  }
}

// ============================================================================
// EXPORT GLOBAL (Compatibilité Script Classique)
// ============================================================================

window.StorageAdapter = StorageAdapter;
window.storageAdapter = new StorageAdapter('localStorage');

console.log('✅ Storage Adapter loaded successfully!');
