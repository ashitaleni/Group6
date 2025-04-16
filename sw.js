const CACHE_NAME = 'group6-v1';
const urlsToCache = [
  '/Group6/',
  '/Group6/index.html',
  '/Group6/style.css',  // Only include if this file exists
  '/Group6/script.js'   // Only include if this file exists
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'same-origin'})));
      })
      .catch(err => {
        console.log('Cache addAll failed:', err);
      })
  );
});
