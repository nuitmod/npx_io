// ServiceWorker Registration
// if('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('sw.js').then(function(registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//
//         }, function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }
//
// var CACHE_NAME = 'version-2'; // bump this version when you make changes.
// // Put all your urls that you want to cache in this array
// var urlsToCache = [
//     'index.html',
//     'assets/logo-192.png'
// ];
//
// // Install the service worker and open the cache and add files mentioned in array to cache
// self.addEventListener('install', function(event) {
//     event.waitUntil(
//     caches.open(CACHE_NAME)
//         .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//         })
//     );
// });
//
//
// // keep fetching the requests from the user
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request)
//         .then(function(response) {
//             // Cache hit - return response
//             if (response) return response;
//             return fetch(event.request);
//         })
//     );
// });
//
// self.addEventListener('activate', function(event) {
//     var cacheWhitelist = []; // add cache names which you do not want to delete
//     cacheWhitelist.push(CACHE_NAME);
//     event.waitUntil(
//         caches.keys().then(function(cacheNames) {
//         return Promise.all(
//             cacheNames.map(function(cacheName) {
//                 if (!cacheWhitelist.includes(cacheName)) {
//                     return caches.delete(cacheName);
//                 }
//             })
//         );
//         })
//     );
// });
importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
//AMP_SW.init();
AMP_SW.init({
  assetCachingOptions: [{
  regexp: /\.(png|jpg)/,
  cachingStrategy: 'CACHE_FIRST'
}],
  offlinePageOptions: {
    url: 'npx_io/offline.html',
    assets: []
  }
});
