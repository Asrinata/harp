# HARP — Dünya Savaş Simülatörü

Tarayıcıda çalışan, tek dosyalık dünya haritası savaş simülatörü.
Kurulum yok: `index.html` yeterli.

## Özellikler
- 177 ülkelik gerçek dünya haritası (Robinson projeksiyonu), bayraktan türetilen ülke renkleri
- Füze, savaş uçağı, savaş gemisi, çıkarma gemisi, nakliye uçağı ve asker
- Kara sınırı yoksa deniz/hava yoluyla çıkarma; gemiler gerçek deniz rotasında ilerler
- İşgal: düşen şehirler ve toprak, işgalcinin rengine geçer
- Koalisyonlar: bir tarafta birden çok ülke
- Dünya fethi modu: tek devlet kalana kadar otomatik savaşlar
- Ekonomi: bütçe, vergi, halk memnuniyeti ve isyan
- Zombi salgını: dalga dalga gelen salgına karşı savunma
- Çok oyunculu: oda kodu ile 5 kişiye kadar (PeerJS / WebRTC)
- 6 kademeli yapay zekâ zorluğu

## Çalıştırma
Tek oyunculu: `index.html` dosyasını tarayıcıda aç.
Çok oyunculu: dosyaları bir `https://` adresinde yayınla (GitHub Pages, Cloudflare Pages).

## Lisans
MIT License · Copyright (c) 2026 Asrın

Üçüncü taraf bileşenler: PeerJS (MIT), world-atlas / Natural Earth (ISC + public domain), Barlow Condensed & IBM Plex Sans (OFL 1.1).
