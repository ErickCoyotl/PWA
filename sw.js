self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('mi-cache').then(cache => {
        return cache.addAll([
          './',
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
          './img/splash.png',
          './img/Cliente/cliente1.png',
          './img/Cliente/cliente2.png',
          './img/Cliente/cliente3.png',
          './img/Cliente/cliente4.png',
          './img/Cliente/cliente5.png',
          './img/Servidor/servidor1.png',
          './img/Servidor/servidor2.png',
          './img/Servidor/servidor3.png',
          './img/Servidor/servidor4.png',
          './img/Servidor/servidor5.png',
          './img/Servidor/servidor6.png',
          './img/Servidor/servidor7.png',
          './img/getpost.png',
          './img/main.png',
          './img/manifest.png',
          './img/Mysql.png',
          './img/post.png',
          './img/sw.png'
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