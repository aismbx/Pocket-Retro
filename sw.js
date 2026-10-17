/* Pocket Retro offline cache. Change VERSION when you upload new files so phones pick them up. */
const VERSION="pocket-retro-1.4.1";
const FILES=["./", "index.html", "vt323-latin-400-normal.woff2", "barlow-condensed-latin-500-normal.woff2", "barlow-condensed-latin-600-normal.woff2", "barlow-condensed-latin-700-normal.woff2", "barlow-latin-400-normal.woff2", "barlow-latin-500-normal.woff2", "barlow-latin-600-normal.woff2", "mp4-muxer.js", "vcr-osd-mono.ttf", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "manifest.webmanifest"];
self.addEventListener("install",e=>{ e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  const url=new URL(e.request.url); if(url.origin!==location.origin) return;
  // network first for the page itself (so updates show up), cache first for everything else
  if(e.request.mode==="navigate"){ e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{ const c=r.clone(); caches.open(VERSION).then(x=>x.put("index.html",c)); return r; }).catch(()=>caches.match("index.html"))); return; }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));
});
