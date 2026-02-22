self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('torque-app').then(function(cache) {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'icon.png'
      ]);
    })
  );
});