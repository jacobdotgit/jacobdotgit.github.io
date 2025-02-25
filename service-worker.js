self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("weather-app-cache").then((cache) => {
        return cache.addAll([
          "/jscott/",
          "/jscott/index.html",
          "/jscott/styles.css",
          "/jscott/script.js",
          "/jscott/manifest.json",
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  