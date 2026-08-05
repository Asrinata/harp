/* HARP servis çalışanı — sürüm her güncellemede artmalı */
const VER='harp-v45';
const FILES=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];

self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(VER).then(c=>c.addAll(FILES)).catch(()=>{}));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(k=>Promise.all(k.filter(x=>x!==VER).map(x=>caches.delete(x))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const isDoc = req.mode==='navigate' || (req.destination==='document');
  if(isDoc){
    // ÖNCE AĞ: yeni sürüm varsa hemen gelir, internet yoksa önbellekten açılır
    e.respondWith(
      fetch(req).then(res=>{
        const cp=res.clone();
        caches.open(VER).then(c=>c.put('./index.html',cp)).catch(()=>{});
        return res;
      }).catch(()=>caches.match('./index.html').then(r=>r||caches.match('./')))
    );
    return;
  }
  // diğer dosyalar: önbellekten ver, arka planda tazele
  e.respondWith(
    caches.match(req).then(hit=>{
      const net=fetch(req).then(res=>{
        const cp=res.clone();
        caches.open(VER).then(c=>c.put(req,cp)).catch(()=>{});
        return res;
      }).catch(()=>hit);
      return hit||net;
    })
  );
});
