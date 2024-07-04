// -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)

// let baslangicSayisi = Number(prompt("Başlangıç sayısı : "));
// let bitisSayisi =Number( prompt("Bitiş sayısı : "));
// let toplam=0;
// for (let i = baslangicSayisi; i <= bitisSayisi; i++) {
//     toplam=toplam+i;
// }
// console.log("Girilen sayılar arasındaki sayıların toplamı : " + toplam);


// -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.



// let ortalama=0;
// for (let i = 1; i <= 5; i++) {
//     let ogreciNotu = Number(prompt(`${i}. Öğrencinin notu : `))
//     ortalama=ortalama+ogreciNotu;
// }
// ortalama=ortalama/5;
// console.log("Sınıfın ortalaması : " + ortalama);



// -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesiniS isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

// let randomSayi = parseInt(Math.random()*10+1);
// console.log(randomSayi);
// let sayac =3;
// while (sayac>0) {
//     let tahmin= prompt(`3 tahmin hakkınız bulunmaktadır : ${sayac} hakkınızı kullan5ıyorsunuz.`);
    
//     if (randomSayi==tahmin) {
//         console.log("Tebrikler bildiniz");
//         break;
//     }else{
//         console.log("Yanlış tahminde bulundunuz tekrar deneyiniz:");
//     }
//     sayac=sayac-1;
    
// }
// console.log(randomSayi);

// -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.

// let toplam=0;
// let kullaniciVerisi="";
// while (kullaniciVerisi!="onayla") {
//     kullaniciVerisi= prompt("ürün ismi veya onayla yazınız : ").toLowerCase().trim();
//     let fiyat= Number(prompt(`${kullaniciVerisi} adlı ürünün fiyatını giriniz : `));
//     toplam=toplam+fiyat;
//     if (kullaniciVerisi==="onayla") {
//         console.log(`Toplam epet tutarınız ${toplam} TL dir`);
//         break;
//     }
// }


let toplam=0;
let kullaniciVerisi="";
while (kullaniciVerisi!="onayla") {
    kullaniciVerisi= prompt("ürün ismi veya onayla yazınız : ").toLowerCase().trim();
    if (kullaniciVerisi!="onayla") {
        let fiyat= Number(prompt(`${kullaniciVerisi} adlı ürünün fiyatını giriniz : `));
        toplam=toplam+fiyat;
    }
   
}
alert(`Toplam epet tutarınız ${toplam} TL dir`);
