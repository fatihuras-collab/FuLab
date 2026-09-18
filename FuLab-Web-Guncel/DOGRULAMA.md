# İletişim ve talep asistanı doğrulaması

## Tarayıcı kontrolleri
- 18 HTML sayfası açıldı, her sayfada tek ana başlık doğrulandı.
- 631 yerel bağlantı/kaynak kaydı ve çapalar kontrol edildi.
- Her sayfada 1440, 768, 390 ve 320 piksel genişliklerde yatay taşma kontrolü geçti.
- Tüm sayfalarda e-posta bağlantısı ve doğru WhatsApp hedefi doğrulandı.
- Beş sorudan özet oluşturma, özeti düzenleme ve onay engeli geçti.
- Türkçe, boşluk, & ve + içeren metinlerle WhatsApp paylaşım URL'si doğrulandı. WhatsApp üzerinden gerçek mesaj gönderilmedi.
- TXT indirme içeriği doğrulandı.
- Yapay zeka izni yokken AI isteği yapılmadı. Taklit API hatasında yönlendirmeli moda dönüldü ve cevaplar korundu.
- E-posta taklit başarı/hata yanıtları kontrol edildi; hata halinde özet korundu.
- Tarayıcı JavaScript hatası: 0.

## Sunucu kontrolleri
- Resmî SHA-256 değeriyle doğrulanmış PHP 8.5.10 test ortamında sözdizimi ve yerel çalışma kontrol edildi.
- Yapılandırma yokken AI/e-posta devre dışı; yabancı origin reddedildi.
- CSRF, müşteri onayı, bot alanı, başlık enjeksiyonu, uzun veri ve istek sınırı kontrolleri uygulandı.
- Gerçek PHPMailer ile başarısız yerel SMTP bağlantısı ve ayrı test kopyasında taklit taşıyıcıyla başarı/tekrar gönderim engeli kontrol edildi.

## Canlı doğrulanmamış noktalar
Natro hosting, gerçek SMTP hesabı, gelen kutusuna teslimat, SPF/DKIM/DMARC, gerçek OpenAI model yanıtı ve ücretli API erişimi test edilmedi. Bunlar hesap ayarları tamamlandıktan sonra NATRO-KURULUM.md kabul listesine göre denenmelidir. Testler canlı gönderim yapılmış anlamına gelmez.
