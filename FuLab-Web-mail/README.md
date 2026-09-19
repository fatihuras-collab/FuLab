# FuLab — İletişim ve talep asistanı sürümü

ZIP'i açın; dist/index.html ile siteyi önizleyin. 18 sayfa, özgün FuLab logosu ve koyu lacivert/turkuaz/mor tasarım korunmuştur. Ön yüz HTML/CSS/JavaScript'tir; yalnızca gerçek gönderim ve isteğe bağlı AI için PHP sunucu uç noktası eklenmiştir.

## Tamamlananlar
- E-posta: fatih@fulabtr.net.
- Telefon/WhatsApp: +90 555 104 80 80.
- Tüm sayfalarda sabit WhatsApp ikonu, asistan bağlantısı ve altbilgi iletişim bilgileri.
- asistan.html: 5 adımda ihtiyaç toplama, düzenlenebilir özet, müşteri onayı, WhatsApp paylaşımı, e-posta taslağı, TXT indirme.
- Sunucu kurulduğunda SMTP üzerinden doğrudan talep gönderimi.
- Sunucu kurulduğunda ve ziyaretçi seçtiğinde AI ile soruları ihtiyaca göre uyarlama; bağlantı hatasında yönlendirmeli moda geçiş.
- Gizlilik ve KVKK durum sayfaları yeni akışa göre güncellendi.

## Hangi bağlantılar henüz canlı değil?
Natro SMTP bilgileri/parolası ve AI API anahtarı/modeli sağlanmadı. Ticari unvan ve faaliyet bazlı aydınlatma bilgileri de eksik. Bu yüzden doğrudan sunucu gönderimi ile AI varsayılan olarak kapalıdır. Kurulum yapılmadan sitenin bunları çalışıyor gibi göstermesi engellenmiştir. WhatsApp'ta gönderimi ziyaretçi yapar; otomatik WhatsApp bildirimi veya kişisel WhatsApp'a bot kurulumu yoktur.

## Yayınlama
NATRO-KURULUM.md dosyasını izleyin. dist içeriği web köküne yüklenir; private-config.example.php özel klasöre config.php olarak taşınır ve doldurulur. Gizli dosyaları web köküne yüklemeyin. PHP 8.2+, cURL ve OpenSSL gerekir. Mevcut Natro paketinin türü henüz bilinmiyor.

## Dosyalar
- dist/config.js: görünür iletişim ayarları; gizli anahtar içermez.
- dist/assistant.js ve assistant.css: asistan ve sabit iletişim alanı.
- dist/api/assistant.php: oturum doğrulaması, hız sınırları, SMTP ve AI bağlantısı.
- dist/api/vendor: PHPMailer 7.0.0 sınıfları ve lisansı.
- private-config.example.php: sunucu ayar örneği.
- DOGRULAMA.md: yerel kontroller ve doğrulanmamış canlı bağlantılar.

18 HTML sayfasındaki statik iletişim metinleri JavaScript olmadan da okunur. Adres/numara değişikliği için config.js ile birlikte bu statik bağlantılar da güncellenmelidir.

## İletişim formu düzeltmesi
İletişim formuna doğrudan WhatsApp paylaşımı, paylaşım öncesi onay ve sunucu hazırsa SMTP gönderimi eklendi. Form bilgilerinin yeniden asistana girilmesi gerekmez. Railway’de güncellemek için dist/iletisim.html ve dist/app.js dosyalarını depoda değiştirip yeniden dağıtın. PHP/SMTP etkinleştirilmeden otomatik e-posta çalışmaz.

## Railway Hobby güncellemesi
Railway dağıtımı için RAILWAY-KURULUM.md geçerlidir. Resend HTTPS e-posta bağlantısı ve PHP/Apache Dockerfile eklendi. API anahtarı ve doğrulanmış gönderici gereklidir. Yerel ortamda Docker bulunmadığından container derlemesi ve canlı Resend teslimatı henüz test edilmedi.
