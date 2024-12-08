// Genel değişkenler
let currentPage = "";

// Sayfa gösterim fonksiyonu
function showPage(page) {
    const contentDiv = document.getElementById("page-content");
    switch (page) {
        case "ekolojik-kredi":
            contentDiv.innerHTML = `
                <h2>Ekolojik Kredi Nedir?</h2>
                <p>Ekolojik kredi sistemi, bireylerin ve kurumların çevresel duyarlılıklarını teşvik etmek amacıyla geliştirilmiş bir puanlama sistemidir. Bu sistem, bireylerin ve kurumların doğaya olan katkılarını ölçmek ve ödüllendirmek üzerine kuruludur.</p>
                <p>Örneğin:</p>
                <ul>
                    <li>Plastik şişelerin geri dönüşüm kutularına atılması.</li>
                    <li>Kağıt, metal ve organik atıkların doğru bir şekilde ayrıştırılması.</li>
                    <li>Atık miktarına ve türüne bağlı olarak puan kazanılması.</li>
                </ul>
                <p>Toplanan puanlar, belirli seviyelere ulaştığında ödüller kazanılabilir ya da topluluk projelerine katkı sağlamak için kullanılabilir.</p>
                <p>Bu sistem, çevresel farkındalığı artırmayı, bireylerin geri dönüşüm alışkanlıkları kazanmasını ve doğaya olan zararı en aza indirgemeyi hedefler. Okullar arasında yarışmalar düzenlenebilir, bireysel ödüller verilebilir ve çevre bilinci yaygınlaştırılabilir.</p>
            `;
            break;
        case "geri-donusum":
            contentDiv.innerHTML = `
                <h2>Geri Dönüşüm Nedir?</h2>
                <p>Geri dönüşüm, atıkların yeniden işlenerek hammadde olarak kullanılmasını sağlayan bir süreçtir. Doğal kaynakların korunmasına, enerji tasarrufuna ve çevre kirliliğinin azaltılmasına büyük katkılar sağlar.</p>
                <p>Geri dönüşüm yapılabilecek malzemeler:</p>
                <ul>
                    <li><strong>Kağıt:</strong> Kullanılmış kağıtlar yeniden işlenerek yeni kağıt ürünleri elde edilebilir.</li>
                    <li><strong>Plastik:</strong> Plastik atıklar eritilerek yeni plastik ürünler üretilebilir.</li>
                    <li><strong>Metal:</strong> Alüminyum ve çelik gibi metaller sonsuz kere geri dönüştürülebilir.</li>
                    <li><strong>Cam:</strong> Cam atıklar tekrar eritilerek yeni cam ürünler üretilebilir.</li>
                </ul>
                <p>Geri dönüşümün faydaları:</p>
                <ul>
                    <li>Doğal kaynakların korunması.</li>
                    <li>Enerji tasarrufu sağlanması.</li>
                    <li>Çevre kirliliğinin azaltılması.</li>
                    <li>Ekonomiye katkı sağlanması.</li>
                </ul>
                <p>Geri dönüşüm, gelecek nesillere daha yaşanabilir bir dünya bırakmak için atılması gereken en önemli adımlardan biridir.</p>
            `;
            break;
        case "hazirlayanlar":
            contentDiv.innerHTML = `
                <h2>Hazırlayanlar</h2>
                <p><strong>Danışman Öğretmen:</strong> Osman Onuk</p>
                <p><strong>Öğrenciler:</strong> Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
            `;
            break;
        case "bize-ulasin":
            contentDiv.innerHTML = `
                <h2>Bize Ulaşın</h2>
                <p><strong>Email:</strong> <a href="mailto:ekolojikkreditubitak@gmail.com">ekolojikkreditubitak@gmail.com</a></p>
                <p><strong>Adres:</strong> İzmir, Torbalı Anadolu Lisesi</p>
                <p><strong>YouTube Kanalı:</strong> <a href="https://youtube.com/@ekolojikkredi?si=esEweBsfz6l6LGVU" target="_blank">Ekolojik Kredi YouTube Kanalı</a></p>
            `;
            break;
        case "kayit":
            contentDiv.innerHTML = `
                <h2>Kayıt Ol</h2>
                <p>Lütfen bir kayıt türü seçin:</p>
                <button onclick="showPage('ogrenci-kayit')">Öğrenci Kaydı</button>
                <button onclick="showPage('okul-kayit')">Okul Kaydı</button>
            `;
            break;
        case "ogrenci-kayit":
            contentDiv.innerHTML = `
                <h2>Öğrenci Kaydı</h2>
                <form onsubmit="kaydetOgrenci(event)">
                    <label>Adı:</label><input type="text" id="ogrenci-adi" required><br>
                    <label>Soyadı:</label><input type="text" id="ogrenci-soyadi" required><br>
                    <label>Okul Numarası:</label><input type="number" id="ogrenci-numara" required><br>
                    <label>Sınıfı:</label><input type="text" id="ogrenci-sinif" required><br>
                    <button type="submit">Kaydet</button>
                </form>
            `;
            break;
        case "okul-kayit":
            contentDiv.innerHTML = `
                <h2>Okul Kaydı</h2>
                <form onsubmit="kaydetOkul(event)">
                    <label>Okul Adı:</label><input type="text" id="okul-adi" required><br>
                    <label>İl:</label><input type="text" id="okul-il" required><br>
                    <label>İlçe:</label><input type="text" id="okul-ilce" required><br>
                    <label>Şifre:</label><input type="password" id="okul-sifre" required><br>
                    <button type="submit">Kaydet</button>
                </form>
            `;
            break;
        case "veri-giris":
            contentDiv.innerHTML = `
                <h2>Veri Giriş</h2>
                <form onsubmit="veriGir(event)">
                    <label>Okul Adı:</label><input type="text" id="giris-okul-adi" required><br>
                    <label>Okul Şifresi:</label><input type="password" id="giris-okul-sifre" required><br>
                    <button type="submit">Giriş Yap</button>
                </form>
            `;
            break;
        case "veri-giris-sayfasi":
            contentDiv.innerHTML = `
                <h2>Öğrenci Verisi Girişi</h2>
                <form onsubmit="kaydetVeri(event)">
                    <label>Öğrenci Adı:</label><input type="text" id="veri-ogrenci-adi" required><br>
                    <label>Öğrenci Soyadı:</label><input type="text" id="veri-ogrenci-soyadi" required><br>
                    <label>Okul Numarası:</label><input type="number" id="veri-ogrenci-numara" required><br>
                    <label>Sınıf:</label><input type="text" id="veri-ogrenci-sinif" required><br>
                    <label>Atık Türü:</label>
                    <select id="veri-atik-turu" required>
                        <option value="plastik">Plastik</option>
                        <option value="metal">Metal</option>
                        <option value="kağıt">Kağıt</option>
                        <option value="cam">Cam</option>
                    </select><br>
                    <label>Atık Kilogramı:</label><input type="number" id="veri-atik-kilo" required><br>
                    <button type="submit">Veri Kaydet</button>
                </form>
            `;
            break;
        case "veri-goruntuleme":
            contentDiv.innerHTML = `
                <h2>Veri Görüntüleme</h2>
                <form onsubmit="gosterVeri(event)">
                    <label>Email:</label><input type="email" id="goruntule-email" required><br>
                    <label>Okul Numarası:</label><input type="number" id="goruntule-numara" required><br>
                    <button type="submit">Görüntüle</button>
                </form>
            `;
            break;
        default:
            contentDiv.innerHTML = `<p>Geçersiz bir sayfa seçimi yapıldı.</p>`;
    }
}

// Kayıt ve veri işlemleri için dummy fonksiyonlar
function kaydetOgrenci(event) {
    event.preventDefault();
    alert("Öğrenci kaydı başarıyla tamamlandı!");
    showPage(""); // Ana sayfaya geri dön
}

function kaydetOkul(event) {
    event.preventDefault();
    alert("Okul kaydı başarıyla tamamlandı!");
    showPage(""); // Ana sayfaya geri dön
}

function veriGir(event) {
    event.preventDefault();
    const okulAdi = document.getElementById("giris-okul-adi").value;
    const okulSifre = document.getElementById("giris-okul-sifre").value;

    if (okulAdi && okulSifre) {
        alert("Okul bilgileri doğrulandı. Veri giriş sayfasına yönlendiriliyorsunuz.");
        showPage("veri-giris-sayfasi");
    } else {
        alert("Lütfen okul adı ve şifresini doğru bir şekilde girin.");
    }
}

function kaydetVeri(event) {
    event.preventDefault();
    const ogrenciAdi = document.getElementById("veri-ogrenci-adi").value;
    const ogrenciSoyadi = document.getElementById("veri-ogrenci-soyadi").value;
    const ogrenciNumara = document.getElementById("veri-ogrenci-numara").value;
    const ogrenciSinif = document.getElementById("veri-ogrenci-sinif").value;
    const atikTuru = document.getElementById("veri-atik-turu").value;
    const atikKilo = document.getElementById("veri-atik-kilo").value;

    if (ogrenciAdi && ogrenciSoyadi && ogrenciNumara && ogrenciSinif && atikTuru && atikKilo) {
        alert(
            `Veri başarıyla kaydedildi:\n
            Öğrenci Adı: ${ogrenciAdi}\n
            Öğrenci Soyadı: ${ogrenciSoyadi}\n
            Okul Numarası: ${ogrenciNumara}\n
            Sınıf: ${ogrenciSinif}\n
            Atık Türü: ${atikTuru}\n
            Atık Kilogramı: ${atikKilo}`
        );
        showPage(""); // Ana sayfaya geri dön
    } else {
        alert("Lütfen tüm alanları doldurun.");
    }
}

function gosterVeri(event) {
    event.preventDefault();
    const email = document.getElementById("goruntule-email").value;
    const numara = document.getElementById("goruntule-numara").value;

    if (email && numara) {
        alert(`Girdiğiniz bilgiler:\nEmail: ${email}\nOkul Numarası: ${numara}\nBu bilgilerle veriler görüntülenebilir.`);
        // Dinamik veri görüntüleme kodu buraya eklenebilir.
    } else {
        alert("Lütfen tüm bilgileri doldurun.");
    }
}
