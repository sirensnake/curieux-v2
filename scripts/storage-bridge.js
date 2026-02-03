// ========================================
// STORAGE BRIDGE - Le Monde des Curieux
// Unifie toutes les clés localStorage vers
// une seule source de vérité
// ========================================
// Clés source (anciennes, éparpillées)  → Clé cible (dashboard Alpine)
//   curio_xp                            → lemondedescurieux_xp.total
//   section-xp-data                     → lemondedescurieux_xp.bySection
//   demo_userData_v2                    → lemondedescurieux_xp + _streaks + _hearts + _badges
//   userBadges                          → lemondedescurieux_badges
// ========================================

const BRIDGE = {
    // Clés cibles officielles (ce que le dashboard lit)
    KEYS: {
        XP:      'lemondedescurieux_xp',       // { total, bySection }
        STREAKS: 'lemondedescurieux_streaks',  // { currentStreak, lastDate }
        HEARTS:  'lemondedescurieux_hearts',   // { bySection: { francais: { current, max } } }
        BADGES:  'lemondedescurieux_badges'    // [ { id, unlocked, unlockedAt } ]
    },

    // ========================================
    // LECTURE SAFE (ne crash jamais)
    // ========================================
    _read(key) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : null;
        } catch(e) {
            console.warn('[BRIDGE] Erreur lecture clé:', key, e);
            return null;
        }
    },

    _write(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch(e) {
            console.warn('[BRIDGE] Erreur écriture clé:', key, e);
        }
    },

    // ========================================
    // SYNC XP : fusionne anciennes clés → lemondedescurieux_xp
    // ========================================
    syncXP() {
        // Charge l'état cible actuel
        let xp = this._read(this.KEYS.XP) || { total: 0, bySection: {} };

        // Source 1 : curio_xp (ancien global, nombre brut)
        const curioXP = this._read('curio_xp');
        if (typeof curioXP === 'number' && curioXP > xp.total) {
            xp.total = curioXP;
            console.log('[BRIDGE] curio_xp fusionné:', curioXP);
        }

        // Source 2 : section-xp-data (anciens badges/powerups)
        const sectionData = this._read('section-xp-data');
        if (sectionData && typeof sectionData === 'object') {
            for (const [section, val] of Object.entries(sectionData)) {
                const current = xp.bySection[section] || 0;
                if (typeof val === 'number' && val > current) {
                    xp.bySection[section] = val;
                }
            }
            // Recalcule le total à partir des sections si plus grand
            const sumSections = Object.values(xp.bySection).reduce((a, b) => a + b, 0);
            if (sumSections > xp.total) {
                xp.total = sumSections;
            }
            console.log('[BRIDGE] section-xp-data fusionné');
        }

        // Source 3 : demo_userData_v2 (démo gamification)
        const demo = this._read('demo_userData_v2');
        if (demo) {
            if (demo.xp > xp.total) {
                xp.total = demo.xp;
            }
            console.log('[BRIDGE] demo_userData_v2 XP fusionné:', demo.xp);
        }

        // Écrit le résultat unifié
        this._write(this.KEYS.XP, xp);
        return xp;
    },

    // ========================================
    // SYNC STREAKS : fusionne → lemondedescurieux_streaks
    // ========================================
    syncStreaks() {
        let streaks = this._read(this.KEYS.STREAKS) || { currentStreak: 0, lastDate: null };

        // Source : demo_userData_v2
        const demo = this._read('demo_userData_v2');
        if (demo && demo.streak > streaks.currentStreak) {
            streaks.currentStreak = demo.streak;
            console.log('[BRIDGE] Streak fusionné depuis démo:', demo.streak);
        }

        this._write(this.KEYS.STREAKS, streaks);
        return streaks;
    },

    // ========================================
    // SYNC HEARTS : fusionne → lemondedescurieux_hearts
    // ========================================
    syncHearts() {
        let hearts = this._read(this.KEYS.HEARTS) || { bySection: {} };

        // Source : demo_userData_v2
        const demo = this._read('demo_userData_v2');
        if (demo && typeof demo.hearts === 'number') {
            // Écrit dans une section "global" pour le dashboard
            hearts.bySection.global = { current: demo.hearts, max: demo.maxHearts || 5 };
            console.log('[BRIDGE] Hearts fusionné depuis démo:', demo.hearts);
        }

        // Source : ancienne clé 'hearts'
        const oldHearts = this._read('hearts');
        if (oldHearts && typeof oldHearts === 'object') {
            for (const [section, val] of Object.entries(oldHearts)) {
                if (!hearts.bySection[section] && val) {
                    hearts.bySection[section] = val;
                }
            }
        }

        this._write(this.KEYS.HEARTS, hearts);
        return hearts;
    },

    // ========================================
    // SYNC BADGES : fusionne userBadges + demo → lemondedescurieux_badges
    // ========================================
    syncBadges() {
        let badges = this._read(this.KEYS.BADGES) || [];

        // Source 1 : userBadges (badges-system.js)
        const userBadges = this._read('userBadges');
        if (Array.isArray(userBadges)) {
            for (const badge of userBadges) {
                if (badge.unlocked && !badges.find(b => b.id === badge.id)) {
                    badges.push({ id: badge.id, unlocked: true, unlockedAt: badge.unlockedAt || Date.now() });
                }
            }
        } else if (userBadges && typeof userBadges === 'object') {
            // Format objet { id: { unlocked: true } }
            for (const [id, data] of Object.entries(userBadges)) {
                if (data && data.unlocked && !badges.find(b => b.id === id)) {
                    badges.push({ id, unlocked: true, unlockedAt: data.unlockedAt || Date.now() });
                }
            }
        }

        // Source 2 : demo_userData_v2 badges
        const demo = this._read('demo_userData_v2');
        if (demo && Array.isArray(demo.badges)) {
            for (const badgeId of demo.badges) {
                if (!badges.find(b => b.id === badgeId)) {
                    badges.push({ id: badgeId, unlocked: true, unlockedAt: Date.now() });
                }
            }
        }

        this._write(this.KEYS.BADGES, badges);
        return badges;
    },

    // ========================================
    // SYNC TOUT (appel principal)
    // ========================================
    syncAll() {
        console.log('[BRIDGE] Synchronisation démarrage...');
        const xp      = this.syncXP();
        const streaks = this.syncStreaks();
        const hearts  = this.syncHearts();
        const badges  = this.syncBadges();
        console.log('[BRIDGE] ✅ Sync complet →', { xp, streaks, hearts, badges });
        return { xp, streaks, hearts, badges };
    }
};

// Auto-sync au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    BRIDGE.syncAll();
});
