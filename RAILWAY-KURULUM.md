# Railway Hobby — E-posta gönderimi

Bu sürüm PHP/Apache sunucusu ve HTTPS üzerinden Resend bağlantısı içerir. SMTP gerektirmez. Mevcut Google Workspace gelen kutusu ve Google MX kayıtları korunur. Canlı hesap oluşturulmadı, API anahtarı eklenmedi ve e-posta gönderilmedi.

1. Resend hesabı oluşturun: https://resend.com . Güncel kota/fiyatı hesabınızda inceleyin; ücretli plan satın almanız bu paketle otomatik yapılmaz.
2. Domains altında bir gönderici alt alan adı doğrulayın (ör. bildirim.fulabtr.net). Resend'in gösterdiği DNS kayıtlarını tam isimleriyle ekleyin. Google'ın @ MX/SPF/DKIM kayıtlarını ve Railway yönlendirmesini değiştirmeyin. Gelen posta/Receiving özelliği gerekmiyor. DNS değerlerini tahmin etmeyin.
3. Doğrulanmış alt alan adında bir gönderici belirleyin; ör. talepler@bildirim.fulabtr.net. Bu adres yeni bir gelen kutusu değildir. Alıcı kodda fatih@fulabtr.net olarak sabittir; müşteri adresi Reply-To olur.
4. Yalnızca gönderim yetkili Resend API anahtarı oluşturun. Anahtarı sohbete veya GitHub'a koymayın.
5. Railway Variables bölümüne ekleyin:

| Değişken | Değer |
|---|---|
| PORT | 8080 |
| FULAB_ORIGIN | https://fulabtr.net |
| RESEND_API_KEY | Kendi gizli anahtarınız |
| FULAB_MAIL_FROM | Doğruladığınız gönderici adresi |
| FULAB_PRIVACY_READY | Aydınlatma metinleri tamamlanınca true |

6. Paket içeriğini GitHub deposunun köküne yükleyin: Dockerfile, railway-start.sh ve dist aynı seviyede olmalı. Eski yalnızca-statik sunucu ayarının yerine Railway'in Dockerfile ile derleme yaptığını doğrulayın. Önceki özel Start Command/Build Command varsa kaldırın; Dockerfile kullanılsın. İç içe klasör kullanıyorsanız Root Directory bu klasör olmalı. Kamu alan adının hedef portu 8080 olsun. Yeniden dağıtın.
7. Sitedeki gizlilik/KVKK metinlerini gerçek veri sorumlusu bilgileri, Google/Railway/Resend sağlayıcıları, saklama ve aktarım koşullarıyla tamamlayın. Sonra FULAB_PRIVACY_READY=true yapın. Bu anahtar hukuki uygunluk garantisi değildir.
8. Gerçek formdan test talebi gönderin. Gmail gelen kutusunu ve spam klasörünü, ayrıca Resend gönderim kaydını kontrol edin. API'nin kabul etmesi, gelen kutusuna teslim garantisi değildir. API hata verirse form verileri korunur.

Yalnızca FULAB_ORIGIN değerindeki tam adresten gönderim kabul edilir. www veya Railway test adresinden gönderim için uygun yönlendirme/ayar gereklidir.

Tek replika kullanın. Hız sınırı sayaçları yeniden dağıtımlarda sıfırlanabilir; yoğun trafik için kalıcı sayaç deposu ve ek bot koruması gerekir. PHP sunucusu olmadan yalnızca statik dağıtım, e-posta uç noktasını çalıştırmaz.

Bu Railway yönergesi, bu dağıtım için eski NATRO-KURULUM.md'nin yerine geçer. Yapay zeka bağlantısı ayrıca yapılandırılmadıkça yönlendirmeli modda kalır.

Kaynaklar: https://docs.railway.com/networking/outbound-networking ve https://resend.com/docs/api-reference/emails/send-email
