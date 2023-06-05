const CACHE_NAME = `sultan-kautsar-v1`;

// Use the install event to pre-cache all initial resources.
self.addEventListener("install", (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            cache.addAll([
                "/",
                "/achievement/",
                "/contact/",
                "/link/",
                "/project/",
                "/resume/",
                "/asset/css/icon.css",
                "/asset/css/main.css",
                "/asset/css/root.css",
                "/asset/font/icon.woff",
                "/asset/font/icon.woff2",
                "/asset/font/work-sans.ttf",
                "/asset/image/sultankautsar-og.png",
                "/asset/image/sultankautsar.png",
                "/asset/js/main.js",
                "/asset/js/masonry.js",
                "/asset/js/root.js",
                "/asset/js/template.js",
                "/asset/pdf/achievement-bangkit-academy-2022.pdf",
                "/asset/pdf/achievement-lac-eprt.pdf",
                "/asset/pdf/sultankautsar-resume.pdf",
            ]);
        })()
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        (async () => {
            const cache = await caches.open(CACHE_NAME);

            // Get the resource from the cache.
            const cachedResponse = await cache.match(event.request);
            if (cachedResponse) {
                return cachedResponse;
            } else {
                try {
                    // If the resource was not in the cache, try the network.
                    const fetchResponse = await fetch(event.request);

                    // Save the resource in the cache and return it.
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                } catch (e) {
                    // The network failed.
                }
            }
        })()
    );
});
