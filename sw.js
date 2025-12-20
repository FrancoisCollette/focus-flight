const CACHE_NAME = 'focus-flight-v1';

self.addEventListener('install', (event) => {
    // Force le nouveau Service Worker à s'activer immédiatement
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Stratégie : Réseau d'abord, sinon cache
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});