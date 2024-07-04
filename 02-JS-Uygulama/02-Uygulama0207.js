
// 1- Bir sayı oluşturun ve bu sayının pozitif, negatif veya sıfır olduğunu kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.
// let sayi1= prompt("Bir sayı giriniz : ");

// if (sayi1<0) {
//    alert("Girilen sayi negatif bir sayıdır. Girilen sayı : " + sayi1);//1.
// }else{
//     alert("Girilen sayi pozitif bir sayıdır. Girilen sayı : " + sayi1);
// }

// 2- İki farklı sayı oluşturun ve bu sayıların büyüklük ilişkisini kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.
// let sayi2= prompt("Birinci sayı giriniz : ");
// let sayi3= prompt("İkinci sayıyı giriniz : ");

// if (sayi2>sayi3) {
//     alert("1. girdiğiniz sayı 2. girdiğiniz sayıdan büyüktür. Büyük olan sayi : "+ sayi2);//2.
// }else{
//     alert("2. girdiğiniz sayı 1. girdiğiniz sayıdan büyüktür. Büyük olan sayi : "+ sayi3);
// }
// 3- Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.
// let kelime ="Hakan";

// let kelimeninTersi =kelime.split("").reverse().join("");//3.

// console.log(kelimeninTersi);


// 4- VKI Hesabı
// Kullanıcıdan boy,kilo,yaş,cinsiyet
// VKI = kilo/(boy/100)**2
// 18,5 düşükse zayıf
// 18,5 ile 24,9 arası normal
// 25 ile 29,9 arası kilolu
// 30 ile 34,9 arası obez
// 35 üstü ise aşırı obez
// Konsol Çıktısı = VKI değeriniz = ??? ve bu değerlere göre kilolusunuz/zayıfsınız.

// 50yaşın üstü ve erkekse bolbol yürüyüs yapmalısınız!
// 60yaş üstü ve kadınsa sebze tüketimini arttırmalısınız!

let boy= prompt("Lütfen boyunuzu giriniz : ");
let kilo= prompt("Lütfen kilonuzu giriniz : ");
let yas= prompt("Lütfen yaşınızı giriniz : ");
let cinsiyet= prompt("Lütfen cinsiyetinizi yazınız (E veya K) : ").toUpperCase().trim();

let vki = kilo/(boy/100)**2;
console.log("VKI değeriniz : " + vki);

if (vki<18.5) {
    console.log(`VKI değeriniz : ${vki} Sonuc : zayıftır.`)
}else if(vki>18.5 && vki<24.9){
    console.log(`VKI değeriniz : ${vki} Sonuc : normaldir.`)
}else if(vki>30 && vki<34.9){
    console.log(`VKI değeriniz : ${vki} Sonuc : obezdir.`)
}else if(vki>35){
    console.log(`VKI değeriniz : ${vki} Sonuc : aşırı obezdir.`)
}

if (yas>50&&cinsiyet==="E") {
    console.log("Bol bol yürüyüş yapmalısınız");
}else if(yas>60 && cinsiyet==="K"){
    console.log("Sebze tüketimini arttırmalısınız!");
}


// 5- Hesap Makinesi
// Kullanıcıdan iki sayı ve bir işlem türü (+, -, *, /) girmesini isteyin. Girilen işlem türüne göre iki sayı üzerinde matematiksel işlem gerçekleştirin ve sonucu gösterin. Eğer kullanıcı geçersiz bir işlem türü girerse, hata mesajı verin.

let sayi4= Number(prompt("İşlem yapmak istediğiniz ilk sayıyı giriniz : "));//5.
let sayi5= Number(prompt("İşlem yapmak istediğiniz ikinci sayıyı giriniz : "));
let islem= prompt("Hangi işlemi yapmak istiyorsunuz : (+,-,*,/) ");


    if(islem === "+"){
        console.log("İki sayının toplamı : Sonuc :" + (sayi4+sayi5));
    }
    else if(islem === "-"){
        console.log("İki sayının çıkarması : Sonuc :" + (sayi4-sayi5));

    }
    else if(islem === "*"){
        console.log("İki sayının çarpımı : Sonuc :" + (sayi4*sayi5));
    }
    else if(islem === "/"){
        console.log("İki sayının bölümü : Sonuc :" + (sayi4/sayi5));5

    }
    else{
        console.log("Hatalı işlem");
    }