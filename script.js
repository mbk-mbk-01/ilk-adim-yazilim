// 1. Ekranı kontrol etmek için bir değişkene atayalım
const ekran = document.getElementById('ekran');
let mevcutGirdi = ''; // Kullanıcının o an yazdığı her şey burada tutulacak

// 2. Sayı veya işlem tuşuna basıldığında çalışan fonksiyon
function sayiEkle(deger) {
    // Eğer ekran başında 0 varsa ve biz yeni bir sayı yazıyorsak o 0'ı silelim
    if (mevcutGirdi === '0') {
        mevcutGirdi = deger;
    } else {
        mevcutGirdi += deger; // Mevcut sayının yanına yenisini ekle (Örn: 5 yanına 2 gelince 52 olur)
    }
    ekranıGuncelle();
}

// 3. Ekranı temizleme (C butonu)
function temizle() {
    mevcutGirdi = '0';
    ekranıGuncelle();
}

// 4. Son karakteri silme (Del butonu)
function sil() {
    if (mevcutGirdi.length > 1) {
        mevcutGirdi = mevcutGirdi.slice(0, -1);
    } else {
        mevcutGirdi = '0';
    }
    ekranıGuncelle();
}

// 5. Hesaplama yapma (= butonu)
function hesapla() {
    try {
        // eval() fonksiyonu, bir metin halindeki matematik işlemini çözer.
        // Örn: "5+5*2" metnini 15 sayısına dönüştürür.
        mevcutGirdi = eval(mevcutGirdi).toString();
        ekranıGuncelle();
    } catch (hata) {
        // Eğer yanlış bir işlem yapılırsa (Örn: 5++5) hata verelim
        mevcutGirdi = "Hata!";
        ekranıGuncelle();
    }
}

// 6. Ekrandaki yazıyı güncelleme
function ekranıGuncelle() {
    ekran.innerText = mevcutGirdi;
}