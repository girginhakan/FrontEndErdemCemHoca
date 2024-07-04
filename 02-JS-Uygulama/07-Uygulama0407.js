// Kullanılacak diziler
const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.

dizi.forEach(eleman =>console.log("Dizi : " + eleman));
// dizi1.forEach(eleman =>console.log("Dizi1 : " + eleman));
// dizi2.forEach(eleman =>console.log("Dizi2 : " + eleman));
// dizi3.forEach(eleman =>console.log("Dizi3 : " + eleman));

// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.

dizi.forEach(ciftSayilar=>{
    if (ciftSayilar%2===0) {
        console.log(ciftSayilar);
    }
});

// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
let elemaninIkiKati = [];
dizi.forEach(eleman => {
    elemaninIkiKati.push(eleman * 2);
});
console.log(`Dizinin elemanlarının iki katı : ${elemaninIkiKati}`);

// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
let toplam =0;
dizi.forEach(eleman=>{
    toplam += eleman;
})
console.log("Dizinin elemanları toplamı : " + toplam);

// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.

dizi1.forEach((eleman,index)=>{
    
    if (index===dizi1.length-1) {
        console.log("En sevdiğim meyve : " + eleman);
    }else{
        console.log(eleman);
    }
})


//Javascriptte Foreach ile map arasındaki tek fark foreach array dönmez ama map array döner.
// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.

const buyukHarfliDizi = dizi1.map(eleman=>eleman.toUpperCase());
console.log(buyukHarfliDizi);

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
let karisikDizi=[];
let rastgeleSayi=parseInt(Math.random()*10+1);
console.log(rastgeleSayi);
karisikDizi = dizi.map(eleman=>eleman+rastgeleSayi);
console.log(karisikDizi);

// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.

const tersKelimeliDizi = dizi1.map(kelime=>kelime.split("").reverse().join(""));
console.log(tersKelimeliDizi);

// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.

const stringeDonmusDizi = dizi.map(eleman=>eleman.toString());
console.log(stringeDonmusDizi);

// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.

const tersCevirme = kelime =>{
    let sondakiHarf="";
    for (let i = kelime.length-1; i >= 0; i--) {
        sondakiHarf+= kelime[i];
    }
    return sondakiHarf;
};

const tersCevrilmisDizi = dizi1.map(eleman=>tersCevirme(eleman));
console.log(tersCevrilmisDizi);
// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.

const ciftSayiliDizi = dizi.filter(cift=>cift%2===0);
console.log(ciftSayiliDizi);

// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.

const filtreliDizi = dizi1.filter(karakter=>karakter.length>4)
console.log(filtreliDizi);

// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.


const atrmisDizi = dizi.reduce((toplam, sayi) => toplam + (sayi + 2),0)

console.log(atrmisDizi);


// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek

console.log(dizi.find(sayi=>sayi%2===0));


// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek

function sonCiftSayi(dizi) {
    let ciftSayilar = dizi.filter(num => num % 2 === 0);
    return ciftSayilar.pop();
}

let sonCift = sonCiftSayi(dizi);
console.log("Son çift sayı:", sonCift);




// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek

console.log(dizi2.some(eleman=>eleman<0));


// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek

console.log(dizi.every(eleman=>eleman<0));

// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek

console.log(dizi2.sort((a, b) => a - b));