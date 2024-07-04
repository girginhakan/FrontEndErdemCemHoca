let myStory =  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, aspernatur a. Molestiae, fuga excepturi. Aperiam, minus reprehenderit praesentium repudiandae, ratione voluptatum quibusdam laboriosam soluta ex eum eos, Lorem molestias voluptas necessitatibus!";
console.log(myStory.length); //1.
console.log(myStory.length);

console.log(myStory.includes("Lorem"));
console.log(myStory.indexOf("Lorem"));//3.

console.log(myStory.lastIndexOf("Lorem"));//3.

console.log(myStory.slice(0,16));//4.
console.log(myStory.substring(0,16));//4.

console.log(myStory.slice(15));//5.
console.log(myStory.substring(15));//5.

console.log(myStory.slice(-5));//6
console.log(myStory.substring(myStory.length-5));//6

console.log(myStory.slice(11,21));//7.

console.log(myStory.slice(0,-5));//8.

console.log(myStory.includes("Lorem"));//9.

console.log(myStory.replaceAll("i","ı"));//10.
console.log(myStory.replace("a","e"));//11.

console.log(myStory.toUpperCase());//12.
console.log(myStory.toLowerCase());//13.

let isim= prompt("Adınız : ");
console.log("Hoşgeldin " + isim);//14.a.

let message=`Benim adım ${isim}`;
console.log(message);//14.b

console.log(isim.trimStart());//15.a.
console.log(isim.trimEnd());//15.b
console.log(isim.trim());

function AdGetir(){
    console.log("Benim adım : " + isim);//16.
}
AdGetir();

alert(isim);
