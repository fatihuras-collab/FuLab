# FuLab AI Rehber içerik akışı

Canlı bölüm: https://fulabtr.net/ai-rehber/

İçerik kaynağı `dist/ai-rehber/content.json` dosyasıdır. PHP sayfası bu dosyayı okur; Railway ana dalın dağıtımıyla yeni içerik görünür.

## Yeni yazı ve revizyon

1. main dalındaki içerik ve açık içerik PR'larını oku. Aynı konu için ikinci taslak açma.
2. Resmi kaynaklarla bilgileri doğrula. Fiyat ve ürün bilgilerini tarihli doğrula; ölçüm yapılmadıysa varsayım veya hesaplama örneği olarak belirt.
3. articles listesine slug, title, description, category, author, updatedAt (YYYY-MM-DD), summary, sections (heading/text), sources (label/url), changeNote alanlarıyla yazı ekle veya var olanı güncelle. topics listesindeki planları koru.
4. `dist/sitemap.xml` içine yayımlanacak yazının URL'sini ekle. Yazı URL biçimi `/ai-rehber/?yazi=SLUG`.
5. Ayrı dal ve inceleme için pull request oluştur. PR'da kaynaklar, değişiklik özeti ve doğrulama sonucu olsun. Sonraki içerikler insan incelemesi ve birleştirmesiyle yayımlanır.
6. JSON biçimini, benzersiz slug'ları, gerekli alanları, kaynakları ve PHP sözdizimini kontrol et. Birleştirme sonrası canlı sayfayı doğrula.

Mevcut tasarım, HTML sayfaları, formlar, DNS, scraper ve n8n günlük veri akışları bu içerik görevlerinin kapsamı dışındadır. Bu bölüm günlük veri toplama işlemi başlatmaz veya durdurmaz. Günlük araştırma/ölçüm kayıtlarını yayımlanmış sonuç gibi sunma; özel veya kişisel kayıtları repoya ekleme.

GitHub yazma erişimi yoksa PR oluşturulmuş gibi raporlama. İncelenebilir yazı taslağını kullanıcıya sun ve erişim engelini açıkça belirt.
