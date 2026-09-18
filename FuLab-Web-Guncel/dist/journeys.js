// Illustrative workflows only. No external requests or business transactions.
const journeyExamples = {
  kitchen: {
    title: 'Mutfaktaki hareket, stoklara yansısın.',
    description: 'Günlük kullanılan malzemeleri girin. Kalan stok ve alışveriş ihtiyacı aynı akışta ortaya çıksın.',
    steps: [
      ['SİZ', 'Tüketimi girin', 'Bugün kullanılan malzemeleri kaydedin.', 'Örnek: 5 kg pirinç kullanıldı', 'Mutfak sorumlusu kullanılan malzemeyi ve miktarını girer. Süreç bu kayıtla başlar.', 'human'],
      ['SİSTEM', 'Stok güncellensin', 'Kullanılan miktar mevcut stoktan düşülsün.', '20 kg − 5 kg = 15 kg', 'Sistem, kayıtlı 20 kg pirinçten kullanılan 5 kg miktarını düşer. Stokta 15 kg kalır.', 'auto'],
      ['KONTROL', 'İhtiyaç belirlensin', 'Kalan miktar, belirlediğiniz alt sınırla karşılaştırılsın.', '15 kg < 18 kg alt sınır', 'Bu örnekte alt sınır 18 kg. Kalan 15 kg bu sınırın altında olduğu için ihtiyaç işaretlenir; yeterli stokta uyarı oluşmaz.', 'auto'],
      ['SONUÇ', 'Alışveriş listesi hazır', 'Eksik malzeme listeye eklensin, sorumluya bildirilsin.', 'Pirinç: satın alma ihtiyacı', 'Güncel stok listesi ve ihtiyaç bildirimi hazırdır. Satın alma kararını sorumlu kişi verir; sistem kendiliğinden sipariş oluşturmaz.', 'result']
    ],
    resultTitle: 'Günün sonunda net bir mutfak tablosu.',
    results: ['Güncel stok listesi', 'Eksik malzeme bildirimi', 'Alışveriş ihtiyaç listesi']
  },
  sales: {
    title: 'Bir mesaj, takip edilebilir bir işe dönüşsün.',
    description: 'Müşteriniz mesajını göndersin. Talep kayda alınsın ve doğru ekip arkadaşınıza ulaşsın.',
    steps: [
      ['MÜŞTERİ', 'Talep gelir', 'Müşteriniz WhatsApp veya web üzerinden yazar.', '“20 kişilik yemek teklifi alabilir miyim?”', 'Müşteri her zamanki kanalından talebini iletir. Entegrasyon kurulduğunda bu mesaj akışı başlatır.', 'human'],
      ['SİSTEM', 'İhtiyaç anlaşılsın', 'Mesajdan konu ve istenen hizmet çıkarılsın.', 'Konu: toplu yemek teklifi', 'Yapay zeka mesajı sınıflandırır. Anlaşılamayan veya eksik bilgiler, kontrol edilmesi için ekibe yönlendirilir.', 'auto'],
      ['SİSTEM', 'Müşteri kaydı açılsın', 'Talep, müşteri takip listenize eklensin.', 'Takip durumu: teklif bekliyor', 'Mesaj ve talep, müşteri kaydıyla ilişkilendirilir. Böylece farklı kanallardan gelen işler tek listeden izlenebilir.', 'auto'],
      ['SONUÇ', 'Ekibiniz harekete geçsin', 'İlgili kişiye görev ve hatırlatma iletilsin.', 'Satış ekibine yeni teklif görevi', 'Talep ve takip görevi hazırdır. Ekibiniz fiyatı belirler, teklifi kontrol eder ve müşteriye dönüş yapar.', 'result']
    ],
    resultTitle: 'Her talebin bir kaydı, her işin bir sorumlusu.',
    results: ['Düzenli müşteri listesi', 'Teklif takip görevi', 'Ekibe talep bildirimi']
  },
  invoice: {
    title: 'Faturadaki bilgi, yeniden yazılmasın.',
    description: 'Faturayı yükleyin. Bilgiler ayrılsın, kontrolünüze sunulsun ve onayladığınız kayıt hazır olsun.',
    steps: [
      ['SİZ', 'Faturayı yükleyin', 'Fatura fotoğrafını veya PDF dosyasını ekleyin.', 'Örnek: malzeme alış faturası', 'Yetkili kişi belgeyi yükler. Bu görselde gerçek belge işlenmez; yükleme sonrasında tasarlanabilecek süreç gösterilir.', 'human'],
      ['SİSTEM', 'Bilgiler okunsun', 'Tedarikçi, tarih ve tutar belgeden çıkarılsın.', 'Tedarikçi · tarih · toplam tutar', 'Sistem belgeyi okuyarak kayıt taslağı oluşturur. Okunamayan alanlar veya olası tekrarlar kontrol için işaretlenir.', 'auto'],
      ['SİZİN ONAYINIZ', 'Kontrol edip onaylayın', 'Çıkarılan bilgileri belgeyle karşılaştırın.', 'Eksik veya hatalı alanı düzeltin', 'Yetkili kişi belgeyi ve çıkarılan bilgileri birlikte görür. Düzeltme veya onay olmadan sonraki kayıt adımına geçilmez.', 'human'],
      ['SONUÇ', 'Gider kaydı hazır', 'Onaylanan bilgiler gider listenize aktarılsın.', 'Onaylı kayıt + belge bağlantısı', 'Onaylanan tutar, tarih ve tedarikçi bilgisi gider listesinde saklanır. Muhasebe yazılımına aktarım, kurulacak bağlantıya göre ayrıca planlanır.', 'result']
    ],
    resultTitle: 'Kontrol edilmiş bilgi, düzenli belge arşivi.',
    results: ['Onaylı gider kaydı', 'Aranabilir belge arşivi', 'Gider raporuna hazır veri']
  },
  ops: {
    title: 'Sevkiyat ilerlesin, herkes haberdar olsun.',
    description: 'Operasyonunuzdaki durum değişikliği, müşteriye ve ilgili ekibe tek akışla ulaşsın.',
    steps: [
      ['EKİBİNİZ', 'Durumu güncelleyin', 'Sevkiyatı mevcut sisteminizde güncelleyin.', 'Örnek: sipariş yola çıktı', 'Operasyon görevlisi sevkiyatın yeni durumunu kaydeder. Bu kayıt, bağlı iş akışını başlatır.', 'human'],
      ['SİSTEM', 'Sipariş eşleşsin', 'Sevkiyatın hangi müşteriye ait olduğu bulunsun.', 'Sevkiyat → sipariş → müşteri', 'Sistem sipariş numarasıyla müşteri ve sevkiyat kaydını eşleştirir. Eşleşmeyen kayıtlar ekibin kontrolüne ayrılır.', 'auto'],
      ['SİSTEM', 'Bildirim hazırlansın', 'Güncel durum, seçilen iletişim kanalına uyarlansın.', '“Siparişiniz yola çıktı.”', 'Bilgilendirme mesajı onaylanmış şablonla hazırlanır. Alıcı ve iletişim tercihleri kontrol edilerek uygun kanala yönlendirilir.', 'auto'],
      ['SONUÇ', 'Takip görünür olsun', 'Müşteri bilgilensin, ekip son durumu görsün.', 'Durum kaydı + gönderim sonucu', 'Sevkiyat durumu ve bildirim sonucu takip listesinde görünür. Başarısız bildirimler veya gecikmeler sorumluya işaretlenebilir.', 'result']
    ],
    resultTitle: 'Tek yerde güncel durum, zamanında bilgi.',
    results: ['Sevkiyat takip listesi', 'Müşteriye durum bildirimi', 'Ekibe istisna uyarısı']
  },
  data: {
    title: 'Güne veri toplayarak değil, tabloyu görerek başlayın.',
    description: 'Belirlediğiniz saatte bilgiler toplansın. Günlük özet, karar verecek kişinin önüne gelsin.',
    steps: [
      ['ZAMANLAMA', 'Rapor saati gelsin', 'Raporun hangi gün ve saatte hazırlanacağını seçin.', 'Örnek: her iş günü 09.00', 'Başlangıçta rapor saatini ve alıcıları belirlersiniz. Akış, sonraki günlerde bu plana göre otomatik başlar.', 'auto'],
      ['SİSTEM', 'Veriler toplansın', 'Satış ve operasyon kayıtları bir araya getirilsin.', 'Satış listesi + operasyon kayıtları', 'Yalnızca bağlantısı kurulan ve erişim yetkisi verilen kaynaklardan veriler alınır.', 'auto'],
      ['KONTROL', 'Özet hazırlansın', 'Göstergeler hesaplansın, eksikler işaretlensin.', 'Günlük toplamlar + bekleyen işler', 'Belirlenen göstergeler hesaplanır. Eksik veriler gizlenmeden raporda belirtilir; böylece özetin sınırları görülebilir.', 'auto'],
      ['SONUÇ', 'Rapor size ulaşsın', 'Günlük özet yetkili kişilere iletilsin.', 'Gelen kutunuzda yönetim özeti', 'Günlük rapor hazırdır. Ekibiniz verileri tekrar toplamak yerine sonuçları inceleyip sonraki adımı belirleyebilir.', 'result']
    ],
    resultTitle: 'Günün resmi, tek bir özette.',
    results: ['Günlük yönetim raporu', 'Eksik veri uyarıları', 'Bekleyen işler özeti']
  }
};
const journeyTabs = [...document.querySelectorAll('[data-scenario]')];
const journeyNodes = document.querySelector('#journey-nodes');
const journeyNext = document.querySelector('#journey-next');
let journeyKey = 'kitchen';
let journeyStep = 0;
function selectJourneyStep(index) {
  journeyStep = index;
  journeyNodes.querySelectorAll('button').forEach((button, i) => {
    button.setAttribute('aria-pressed', String(i === index));
    button.parentElement.classList.toggle('step-passed', i < index);
  });
  document.querySelector('#journey-progress').textContent = `ADIM ${index + 1} / 4`;
  document.querySelector('#journey-detail').textContent = journeyExamples[journeyKey].steps[index][4];
  journeyNext.textContent = index === 3 ? 'Baştan incele ↻' : 'Sonraki adımı gör →';
  document.querySelector('.journey-output').classList.toggle('output-ready', index === 3);
}
function selectJourney(tab) {
  journeyKey = tab.dataset.scenario;
  const example = journeyExamples[journeyKey];
  journeyTabs.forEach(button => {
    button.setAttribute('aria-selected', String(button === tab));
    button.tabIndex = button === tab ? 0 : -1;
  });
  document.querySelector('#scenario-panel').setAttribute('aria-labelledby', tab.id);
  document.querySelector('#journey-title').textContent = example.title;
  document.querySelector('#journey-description').textContent = example.description;
  journeyNodes.replaceChildren();
  example.steps.forEach((step, index) => {
    const li = document.createElement('li'); li.className = step[5] + '-node';
    const button = document.createElement('button'); button.className = 'journey-node'; button.type = 'button';
    button.dataset.step = index;
    const top = document.createElement('span'); top.className = 'node-top';
    const number = document.createElement('b'); number.textContent = String(index + 1).padStart(2, '0');
    const actor = document.createElement('span'); actor.textContent = step[0]; top.append(number, actor);
    const title = document.createElement('strong'); title.textContent = step[1];
    const description = document.createElement('span'); description.textContent = step[2];
    const sample = document.createElement('span'); sample.className = 'node-example'; sample.textContent = step[3];
    button.append(top, title, description, sample); li.append(button); journeyNodes.append(li);
  });
  document.querySelector('#journey-output-title').textContent = example.resultTitle;
  const results = document.querySelector('#journey-results'); results.replaceChildren();
  example.results.forEach(text => { const li = document.createElement('li'); li.textContent = text; results.append(li); });
  selectJourneyStep(0);
}
journeyTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectJourney(tab));
  tab.addEventListener('keydown', event => {
    const destinations = { ArrowRight: (index + 1) % journeyTabs.length, ArrowLeft: (index + journeyTabs.length - 1) % journeyTabs.length, Home: 0, End: journeyTabs.length - 1 };
    if (Object.hasOwn(destinations, event.key)) { event.preventDefault(); const target = journeyTabs[destinations[event.key]]; selectJourney(target); target.focus(); }
  });
});
journeyNodes.addEventListener('click', event => { const button = event.target.closest('button[data-step]'); if (button) selectJourneyStep(Number(button.dataset.step)); });
journeyNext.addEventListener('click', () => selectJourneyStep((journeyStep + 1) % 4));

const requestedJourney = new URLSearchParams(location.search).get('senaryo');
const requestedTab = journeyTabs.find(tab => tab.dataset.scenario === requestedJourney);
if (requestedTab) selectJourney(requestedTab);
