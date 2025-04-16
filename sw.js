const CACHE_NAME = 'group6-v1';
const urlsToCache = [
  '/Group6/',          // Main page
  '/Group6/index.html',
  '/Group6/styles.css', // If any
  '/Group6/script.js'   // If any
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});