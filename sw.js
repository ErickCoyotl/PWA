self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('mi-cache').then(cache => {
        return cache.addAll([
          '/',
          './index.html',
          './style.css',
          './datos.html',
          './pantallas.html',
          './plataformas.html',
          './reporte.html',
          './vistas.html',
          './script.js',
          './img/estilos1.png',
          './img/estilos2.png',
          './img/Home.png',
          './img/html.png',
          './img/script.png',
          './img/splash.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });