// Service worker del panel.
// Solo muestra una pantalla "sin conexión" cuando falla la red.
// No guarda el panel en caché: siempre carga la versión más reciente.

const VERSION = 'panel-v1';
const OFFLINE_URL = '/admin/offline.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(VERSION)
      .then((cache) => cache.add(OFFLINE_URL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((claves) =>
        Promise.all(claves.filter((c) => c !== VERSION).map((c) => caches.delete(c)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Solo intervenimos al abrir páginas; todo lo demás pasa directo a la red
  if (event.request.mode !== 'navigate') return;

  event.respondWith(fetch(event.request).catch(() => caches.match(OFFLINE_URL)));
});