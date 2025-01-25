self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
    event.waitUntil(
      caches.open('static-cache').then((cache) => {
        cache.addAll([
          './',
          './index.html',
          './style.css',
          './app.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  