/*
 * Service Worker — Le Monde des Curieux
 * Stratégie : Cache-first pour assets statiques, Network-first pour HTML
 * Compatible GitHub Pages / lemondedescurieux.fr
 */

const CACHE_NAME = 'curieux-v2-2026-03';
const CACHE_STATIC = 'curieux-static-v2';

// ─── Assets à précacher au premier chargement ──────────────────
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/francais_duolingo_section.html',
  '/mathematiques_section.html',
  '/english_duolingo_section.html',
  '/sciences_duolingo_section.html',
  '/histoire_section_COMPLET.html',
  '/geographie_section.html',
  '/maths_fractions_comprendre.html',
  '/dashboard-extended.html',
  '/mindmap.html',
  '/manifest.json',
  '/images/favicon.svg',

  // CSS principaux
  '/styles/wcag-accessibility.css',
  '/styles/minecraft-override.css',
  '/styles/francais_BON_CSS.css',
  '/styles/mathematiques_alpine_COMPLETE.css',
  '/styles/english_BON_CSS.css',
  '/styles/sciences_alpine.css',
  '/styles/histoire_BON_CSS.css',
  '/styles/geographie_CSS.css',
  '/styles/fractions_standalone.css',

  // Scripts
  '/scripts/section-xp-system.js',
  '/scripts/badges-system.js',
  '/scripts/storage-bridge.js',
  '/scripts/master-game-system.js',
  '/scripts/admin-shortcut.js',
  '/scripts/data/maths-quiz.js',
  '/scripts/data/sciences-lessons.js',
  '/scripts/data/histoire-lessons.js',
  '/scripts/data/geographie-lessons.js',

  // Alpine.js depuis CDN — on le met dans le cache statique séparément
];

// ─── Assets CDN à mettre en cache dynamiquement ────────────────
const CDN_HOSTS = [
  'cdn.jsdelivr.net',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

// ─── INSTALL — Précache des assets statiques ───────────────────
self.addEventListener('install', event => {
  console.log('[SW] Install — cache:', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // On cache un par un pour que les erreurs individuelles ne bloquent pas tout
        return Promise.allSettled(
          PRECACHE_ASSETS.map(url =>
            cache.add(url).catch(err =>
              console.warn('[SW] Précache ignoré :', url, err.message)
            )
          )
        );
      })
      .then(() => {
        console.log('[SW] Précache terminé');
        return self.skipWaiting();
      })
  );
});

// ─── ACTIVATE — Nettoyage des anciens caches ───────────────────
self.addEventListener('activate', event => {
  console.log('[SW] Activate');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== CACHE_STATIC)
          .map(key => {
            console.log('[SW] Suppression ancien cache :', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ─── FETCH — Stratégie hybride ─────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorer les requêtes non-GET et les outils de dev
  if (request.method !== 'GET') return;
  if (url.pathname.startsWith('/cdn-cgi/')) return;

  // CDN (Alpine.js, Google Fonts) — Stale-while-revalidate
  if (CDN_HOSTS.some(host => url.hostname.includes(host))) {
    event.respondWith(staleWhileRevalidate(request, CACHE_STATIC));
    return;
  }

  // Pages HTML — Network-first (contenu toujours frais si réseau dispo)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Assets statiques (CSS, JS, images, fonts) — Cache-first
  event.respondWith(cacheFirst(request));
});

// ─── Stratégies de cache ───────────────────────────────────────

/** Cache-first : retourne le cache, sinon réseau puis met en cache */
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Ressource non disponible hors ligne', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  }
}

/** Network-first : réseau en priorité, fallback cache */
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;

    // Page offline de fallback
    const offlineFallback = await caches.match('/index.html');
    return offlineFallback || new Response(
      offlinePage(),
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }
}

/** Stale-while-revalidate : retourne le cache immédiatement + màj en arrière-plan */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const networkFetch = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);

  return cached || networkFetch;
}

// ─── Page offline de secours ───────────────────────────────────
function offlinePage() {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Le Monde des Curieux — Hors ligne</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      color: white;
      text-align: center;
    }
    .card {
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 40px;
      max-width: 400px;
    }
    .emoji { font-size: 4em; margin-bottom: 20px; display: block; }
    h1 { font-size: 1.4em; margin-bottom: 16px; }
    p { opacity: 0.9; line-height: 1.6; margin-bottom: 20px; }
    a {
      display: inline-block;
      background: white;
      color: #667eea;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="card">
    <span class="emoji">🦊</span>
    <h1>Tu es hors ligne !</h1>
    <p>Curio est prêt, mais il faut une connexion pour charger cette page. Les pages que tu as déjà visitées sont disponibles.</p>
    <a href="/">← Retour à l'accueil</a>
  </div>
</body>
</html>`;
}
