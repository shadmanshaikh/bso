const CACHE_NAME = "astro-pwa-cache-v1";
const URLS_TO_CACHE = [
	"/",
	"/index.html",
	"../src/styles/global.css",
	"/scripts.js",
	"/manifest.json",
];

// Install the service worker and cache specified URLs
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(URLS_TO_CACHE);
		})
	);
});

// Activate the service worker and delete old caches
self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames
					.filter((cacheName) => cacheName !== CACHE_NAME)
					.map((cacheName) => caches.delete(cacheName))
			);
		})
	);
});

// Intercept fetch requests and implement caching strategy
self.addEventListener("fetch", (event) => {
	if (event.request.method === "GET") {
		event.respondWith(
			caches.match(event.request).then((cachedResponse) => {
				if (cachedResponse) {
					// Fetch the latest content from the network and update the cache
					return fetch(event.request)
						.then((networkResponse) => {
							return caches.open(CACHE_NAME).then((cache) => {
								cache.put(event.request, networkResponse.clone());
								return networkResponse;
							});
						})
						.catch(() => cachedResponse);
				} else {
					// If not cached, fetch from the network
					return fetch(event.request).then((networkResponse) => {
						return caches.open(CACHE_NAME).then((cache) => {
							cache.put(event.request, networkResponse.clone());
							return networkResponse;
						});
					});
				}
			})
		);
	}
});
