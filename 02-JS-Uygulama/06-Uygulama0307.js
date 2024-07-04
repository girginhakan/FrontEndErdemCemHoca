// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak. Çıktıyı görmek için değişkenleri kullanabilir veya fonksiyonları console.log içerisinde çağırabilirsiniz.
// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)

let ikiSayininCarpimi = (sayi1, sayi2) => sayi1 * sayi2;

console.log(ikiSayininCarpimi(2, 3));
// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
let cumle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque praesentium deleniti autem quaerat beatae qui, labore, esse commodi nemo perferendis nulla inventore, impedit a. Officia eum enim blanditiis ex.";
let cumleninKelimeSayisi = cumle => cumle.split(' ').length;
console.log(cumleninKelimeSayisi(cumle));
// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)

function faktoriyelHesaplama(sayi3) {
  let faktoriyel = 1;
  for (let i = 1; i <= sayi3; i++) {
    faktoriyel = faktoriyel * i;
  }
  return faktoriyel;
}

console.log(FaktoriyelHesaplama(4));

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)

// const AsalMi = function (sayi) {
//     if (sayi <= 1) return false;
//     if (sayi <= 3) return true;
//     if (sayi % 2 === 0 || sayi % 3 === 0) return false;

//     for (let i = 5; i * i <= sayi; i += 6) {
//         if (sayi % i === 0 || sayi % (i + 2) === 0) return false;
//     }

//     return true;
// };

// const sayi4 = 30;
// let AsalMi = function (sayi) {

//     for (let i = 2; i < sayi; i++) {
//         if (sayi % i == 0) {
//             return false;
//         } else {
//             return true;
//         }

//     }
// }
// console.log(AsalMi(sayi4));


// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.

let dizi = [1, 12, 67, 29, 35];

// const enBuyukSayi = function(dizi) {
//     return Math.max(...dizi);
//   };

//   console.log(enBuyukSayi(dizi)); 


// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.

let dizi2 = [1, 12, 67, 29, 35];

// const diziToplami = function(dizi) {
//     return dizi.reduce((toplam, sayi) => toplam + sayi);
//   };


//   console.log(diziToplami(dizi2));

// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.
// Buradan itibaren yalnızca arrow function kullanıyoruz.

const enBuyukSayi = dizi => Math.max(...dizi);//5. sorunun arrow functionu
console.log(enBuyukSayi(dizi));

const diziToplami = dizi => dizi.reduce((toplam, sayi) => toplam + sayi);//6. sorunun arrow functionu
console.log(diziToplami(dizi2));

// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.

const kelimenintersi = kelime => kelime.split('').reverse().join('');

let kelime = "Hakan";
console.log(kelimenintersi(kelime));


// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın.

const rastgeleKaristir = dizi => {
  for (let i = dizi.length - 1; i > 0; i--) {
    const j = parseInt(Math.random() * (i + 1));
    [dizi[i], dizi[j]] = [dizi[j], dizi[i]];
  }
  return dizi;
};
const sayilar = [1, 2, 3, 4, 5];
console.log(rastgeleKaristir(sayilar));

// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)
let sayi = 30;
const pozitifBolenler = [];
const pozitifTamBolenler = sayi => {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      pozitifBolenler.push(i);
    }
  }
  return pozitifBolenler;
}
console.log(pozitifTamBolenler(sayi));
// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.

let kelime1 = "Hakan";
let harf="a"

const tekrarEdenKarakterSayisi = (kelime,harf) =>{
  let count =0;
  for (let i = 0; i <= kelime.length; i++) {
    if (kelime[i]===harf) {
      count++;
    }
  }
  return count;
}
console.log(tekrarEdenKarakterSayisi(kelime1,harf));

// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.

const sayilarinToplami = (...sayilar)=>{
  return sayilar.reduce((toplam, sayi) => toplam + sayi);
}
console.log(sayilarinToplami(1,2,3,4,5));