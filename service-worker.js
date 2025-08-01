self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('wuswfa-calculator-v2').then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon512.png'
      ]);
    })
  );
});
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});