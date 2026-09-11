const CACHE='naengjanggo-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./parts/p0.txt','./parts/p1.txt','./parts/p2.txt','./parts/p3.txt','./parts/p4.txt','./parts/p5.txt','./parts/p6.txt','./parts/p7.txt','./parts/p8.txt'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));