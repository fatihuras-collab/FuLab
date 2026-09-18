# FuLab — Natro kurulum ve etkinleştirme

## Pakette bugün çalışanlar
- 18 sayfalık site, fatih@fulabtr.net e-posta bağlantısı ve +90 555 104 80 80 WhatsApp ikonu.
- Asistan 5 soruyla sektör, ihtiyaç, mevcut araçlar, hedef ve zamanlamayı toplar.
- Özet ziyaretçi tarafından düzenlenip onaylanır. WhatsApp paylaşımı sohbet açar; mesajı ziyaretçi gönderir. E-posta taslağını da ziyaretçi kendi uygulamasında gönderir.
- API anahtarı olmadan yönlendirmeli mod çalışır. Bu mod kendisini yapay zeka olarak tanıtmaz.
- E-posta ve yapay zeka sunucu bağlantıları pakete dahil; gerçek hesap bilgileri girilene kadar kapalıdır.

## 1. Statik siteyi açın
ZIP'i açıp dist/index.html dosyasını tarayıcıda açabilirsiniz. Doğrudan dosya açılışında sunucu özellikleri çalışmaz; sorular, özet ve WhatsApp paylaşımı çalışır.

## 2. Natro paketini kontrol edin
Alan adı tek başına yeterli değildir. PHP 8.2 veya üstünü çalıştırabilen web hosting gerekir. PHP cURL, OpenSSL, session ve dışarıya HTTPS/SMTP bağlantısı desteklenmelidir. Bu hesap/paket henüz görülmediğinden uyumluluk doğrulanmış değildir.

## 3. Dosyaları yerleştirin
Natro dosya yöneticisinde alan adının web kökünü bulun (ör. public_html veya httpdocs; panelinizden doğrulayın). dist klasörünün İÇERİĞİNİ buraya yükleyin. api ve api/vendor klasörlerini de yükleyin. Bunların dışında kalan yönergeleri ve özel ayar dosyalarını web köküne yüklemeyin.

Web kökünün bir üstünde, web'den erişilemeyen `fulab-private` klasörü oluşturun. Örnek yapı:

```
hesap-klasoru/
  fulab-private/
    config.php
  public_html/
    index.html
    asistan.html
    api/
      assistant.php
      vendor/
```

Paket kökündeki private-config.example.php dosyasını fulab-private/config.php olarak kopyalayın. PHP'nin bu klasörü okuyup sayaç dosyalarını yazabildiğinden emin olun; klasörü herkese açık veya 777 yapmayın. Web kökü dışında klasöre izin verilmiyorsa Natro desteğinden yardım alın. Sırları config.js içine yazmayın.

## 4. E-posta gönderimini bağlayın
Natro panelinde e-posta hesabının gerçek SMTP sunucusu, portu ve TLS türünü bulun. Varsayılan bir sunucu adı tahmin edilmemiştir. config.php içinde smtp_host, smtp_port, smtp_encryption, smtp_user, smtp_password, smtp_from alanlarını doldurun. SMTP gönderici hesabı ile smtp_from uyumlu olmalıdır. Parolayı sohbetlere göndermeyin; yalnızca sunucudaki özel dosyaya girin. Alıcı PHP dosyasında fatih@fulabtr.net olarak sabittir.

`origin` tam yayın adresi olmalıdır (ör. https://fulabtr.net veya https://www.fulabtr.net). Diğer alan adı varyantını buna yönlendirin. HTTPS sertifikasını etkinleştirin.

Kurumsal KVKK aydınlatmasını ve gizlilik bilgilerini (ticari unvan/adres, hukuki sebep, saklama, sağlayıcılar, başvuru usulü) tamamlayın, ardından privacy_ready=true yapın. Bu bir yayın kontrolüdür; tek başına hukuki uygunluk sağlamaz. Eksik bilgiler uydurulmamıştır.

Gönderim düğmesi yalnızca yapılandırma hazır olduğunda görünür. SMTP sunucusu talebi kabul ederse kabul edildiği bildirilir; bu, gelen kutusuna teslim veya okuma garantisi değildir. Hata halinde başarı mesajı verilmez, metin silinmez ve WhatsApp alternatifi korunur.

## 5. İsteğe bağlı gerçek yapay zeka
OpenAI API hesabınızda erişimi olan Responses API model kimliğini openai_model alanına, API anahtarını openai_key alanına yazın. ai_enabled=true yapın. Hesap harcama sınırlarını ayrıca belirleyin. Paket site genelinde günde 100 AI çağrısı ve IP özeti başına saatte 20 çağrı sınırı uygular; bunlar kapsamlı bot koruması yerine geçmez. Canlı trafik için hosting/WAF üzerinden ek hız sınırı uygulanabilir.

OpenAI'a veri aktarımı ve ilgili aydınlatma/yasal koşullar değerlendirilmeden bu modu açmayın. Ziyaretçi ayrıca isteğe bağlı AI kutusunu seçer. AI, verilen süreç bilgisine göre sonraki soruyu uyarlar; özeti ise ziyaretçinin kendi cevaplarından üretiriz. Son aşamada girilen ad ve iletişim bilgileri AI isteğine eklenmez. Yapay zeka fiyat veya teslim sözü vermez, gönderim yapamaz. Bağlantı hatasında yanıtları koruyarak yönlendirmeli moda döner.

## 6. Yayın kabul kontrolü
1. Asistanın beş sorusunu yanıtlayın; özeti düzeltin. Onay olmadan paylaşım başlatılmamalı.
2. WhatsApp paylaşımını telefonda açın; doğru numara ve Türkçe özet göründüğünü kontrol edin. Gönderim kullanıcıya aittir.
3. Gerçek e-posta gönderimini kendi test talebinizle deneyin. fatih@fulabtr.net gelen kutusu ve spam klasörünü kontrol edin. DNS SPF/DKIM/DMARC ayarlarını Natro panelindeki yönergelerle doğrulayın.
4. AI açılmışsa bir test görüşmesiyle model erişimini ve yanıtlarını kontrol edin.
5. Mobil menü, bağlantılar, HTTPS ve 404 sayfasını kontrol edin.

Bu testler gerçek hesap erişimi olmadan tamamlanamaz. Paket içindeki yerel doğrulama raporu canlı teslimat testi değildir.

## Numara değişikliği
Görünür iletişim ayarları dist/config.js içindedir. Sabit HTML iletişim ve altbilgi bağlantılarında da eski numarayı yenisiyle değiştirin. Asistanın WhatsApp paylaşım hedefi config.js üzerinden okunur. Otomatik WhatsApp bildirimi ve WhatsApp içi bot bu sürüme dahil değildir; normal WhatsApp hesabınıza bot erişimi kurulmaz.

## Kaynaklar ve bağımlılıklar
- PHPMailer 7.0.0 (LGPL-2.1), kaynak ve lisans: https://github.com/PHPMailer/PHPMailer/tree/v7.0.0 — gerekli üç sınıf ve LICENSE dosyası api/vendor içinde.
- Natro SMTP: https://www.natro.com/hemendestek/bilgibankasi/php-ile-smtp-kimlik-dogrulamasi-kullanarak-mail-gonderimini-nasil-saglayabilirim
- OpenAI metin API: https://developers.openai.com/api/docs/guides/text
- KVKK: https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-
