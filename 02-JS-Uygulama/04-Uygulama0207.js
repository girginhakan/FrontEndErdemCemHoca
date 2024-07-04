// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
let myArray=["Hakan","Girgin",32,true,"Elma","Armut","Muz","Kivi","Futbol","Basketbol"];
console.log(myArray);

// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
myArray[0]="Cem";
console.log(myArray);

// 3- dizinin uzunluğunu konsola yazdırın.

console.log(myArray.length);

// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.

let eklenenVeri= "Kaplan";
myArray.push(eklenenVeri);
console.log(myArray);

// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.

let silinenVeri= "Aslan";
myArray.unshift(silinenVeri);
console.log(myArray);

// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.

let dizininSilinenSonElemani=myArray.pop();
console.log("Dizinin sondaki silinen elemanı :"+dizininSilinenSonElemani);
console.log(myArray);

// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.

let dizininSilinenIlkElemani =myArray.shift();
console.log("Dizinin baştaki silinen elemanı :"+dizininSilinenIlkElemani);
console.log(myArray);

// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)

let newArray =[dizininSilinenSonElemani,dizininSilinenIlkElemani];
console.log("Yeni array : " + newArray);

// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.

let birlesmisArray= myArray.concat(newArray);
console.log("Birleştirilmiş array : ");
console.log( birlesmisArray);


let birlesmisArray2=[...myArray,...newArray];
console.log("Birleştirilmiş array2 : ");
console.log( birlesmisArray2);

// 10- myArray içerisinde eleman olarak "Veli" var mı ?

let veliVarmi = myArray.includes("Veli");
if (veliVarmi===true) {
    console.log("Aranılan dizide Veli ismi vardır");
}else{
    console.log("Aranılan dizide Veli ismi yoktur");
}

// 11- myArray içersinide 4.elemandan itibaren patates var mı?

let patatesVarmi = myArray.indexOf("Patates",3);
if (patatesVarmi===true) {
    console.log("Aranılan dizide Patates kelimesi vardır");
}else{
    console.log("Aranılan dizide Patates kelimesi yoktur");
}

// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?

let sevdigimMeyve = myArray.indexOf("Elma");
console.log(sevdigimMeyve);

// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.

let ilkUcElemaniAlma = myArray.splice(0,3);
console.log(ilkUcElemaniAlma);

// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.

ilkUcElemaniAlma.splice(1,1,"Furkan","Kerem");

console.log(ilkUcElemaniAlma);

// 15- son diziniz 4 elemanlı olmuş olmalı. Bu dizi üzerinde 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin ÖRN: [1, 2, 3, 4] => [1, 'x', 4, 'y']
ilkUcElemaniAlma.splice(0,1);
ilkUcElemaniAlma[2]="Burak";
ilkUcElemaniAlma.push="Ahmet";
console.log(ilkUcElemaniAlma);
// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.
let artiIsaretliDizi = ilkUcElemaniAlma.join("+");
console.log(artiIsaretliDizi);