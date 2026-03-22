// 1. Butonu HTML içinden bulup bir değişkene atayalım
const buton = document.getElementById('renkButonu');

// 2. Butona tıklandığında ne olacağını söyleyelim
buton.addEventListener('click', function() {
    // Rastgele bir renk üretelim
    const rastgeleRenk = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Sayfanın arka plan rengini bu renk yapalım
    document.body.style.backgroundColor = rastgeleRenk;
    
    // Konsola (gizli ekran) bir mesaj yazalım
    console.log("Renk değişti: " + rastgeleRenk);
});
