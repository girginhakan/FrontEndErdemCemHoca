console.log(document);
//-------------------------------------------------------------------

//Selectors

let element;
//id'ye göre seçim - tek öge seçer
element = document.getElementById("first");
console.log(element);
//-------------------------------------------------------------------

//class a göre seçim

// element= document.getElementsByClassName("info-2");//html collection döndürür.
element= document.getElementsByClassName("info-2")[0];//p tagini döndürür.

element= document.getElementsByClassName("info");//HTMLCOLLECTİON döndürür.
element= document.getElementsByClassName("info")[0];
//-------------------------------------------------------------------

//etikete göre seçim
element = document.getElementsByTagName("li");//HTMLCOLLECTİON döndürür.
element = document.getElementsByTagName("a");
element = document.getElementsByTagName("p");

// let convertArray = Array.from(element);


// console.log(convertArray);
// console.log(element);
//-------------------------------------------------------------------

//ES6 Query Seçicileri
//QuerySelector Herzaman tek ög getirir ve ilk bulduğu elementi getirir. Css seçicilerde bu metodla kullanılabilir.
element = document.querySelector("#first");
element = document.querySelector(".info-2");
element = document.querySelector(".info");
element = document.querySelector("li");
element = document.querySelector(".liste li");

// console.log(element);
//-------------------------------------------------------------------

//QuerySelectorAll //NodeList Döndürür. Çoklu dönüş sağlar. Foreach kullanılabildiği için kullanışlı bir metoddur. Id ile seçim yapılabilir ancak mantıken All metoduna unique bir id kullanmak mantıklı olmayabilir. 
element = document.querySelectorAll("#second");
element = document.querySelectorAll("#second")[0];
element = document.querySelectorAll(".info");
element = document.querySelectorAll("li");
element = document.querySelectorAll(".liste li");
element = document.querySelectorAll(".liste li:first-child");
element = document.querySelectorAll(".liste li:first-child")[0];
element = document.querySelectorAll(".liste li:nth-child(2)")[0];
element = document.querySelectorAll(".liste li:nth-child(odd)");
element = document.querySelectorAll(".liste li:nth-child(even)");

// console.log(element);
//-------------------------------------------------------------------

//Css özelliği verme
const header = document.querySelector("#first");
header.style.color="red";
header.style.backgroundColor="Black";
header.style.padding ="20px";
header.style.fontSize ="25px";

const listItem =document.querySelectorAll(".liste li:nth-child(odd)");
console.log(listItem);
listItem.forEach(item => {
    item.style.color="orangered";
})
//-------------------------------------------------------------------
const  target = document.querySelector("nav ul");
const newListItem = document.createElement("li");
const newAnchorTag = document.createElement("a");
newAnchorTag.href="https://www.google.com";//direk isim olarak attribute eklenebilir.
newAnchorTag.setAttribute("target","_ blank")// metot olarak attribute eklenebilir.
newAnchorTag.innerText="İletişim";
newListItem.appendChild(newAnchorTag);
target.appendChild(newListItem);

console.log(newListItem);


// const about = document.querySelectorAll("nav ul li")[1];
// about.after(newListItem);//İstediğimiz bir yere eklemek istersek kullanacağımız yöntem
// console.log(about);

const liste = document.querySelector(".liste");
liste.innerHTML+="<li>Test</li>";
// liste.innerText+="<li>Test</li>";

// liste.textContent += "<li>Test</li>";
target.innerHTML +="<li><a href='#'>Deneme</a></li>";

let button =document.querySelector("button");
button.className="hg";//className metodu ile bir adet class verebiliyoruz. Ikıncı class ı verince üstündeki class ı eziyor. O yüzden dinamik olmadığı için çok kullanışlı değil.
button.className="hg bilgeadam";
button.classList.add("hg");//classList metodu daha dinamik olduğu için daha kullanışlıdır.
button.classList.add("hg","grgn");
button.classList.remove("grgn");
button.classList.replace("hg","asdd");

console.log(button);

let toggle = document.querySelector("body");
toggle.classList.toggle("dark");//toggle da dark bodydeki class ları kontrol ediyor yok ise ekliiyor. Ancak alt satırdadki gibi vaar ise o class siliyor classı.
toggle.classList.toggle("dark")

// setInterval(() => {
// toggle.classList.toggle("dark")
    
// }, 2000);

console.log(toggle);

console.clear();
//-------------------------------------------------------------------

// const mainLink=document.querySelector("a");
// console.log(mainLink);
// console.log(mainLink.parentElement);
// console.log(mainLink.parentElement.parentElement);
// console.log(mainLink.parentElement.parentElement.parentElement);
// console.log(mainLink.parentElement.parentElement.parentElement.parentElement);
// console.log(mainLink.parentElement.parentElement.parentElement.parentElement.parentElement);
// console.log(mainLink.parentElement.parentElement.parentElement.parentElement.parentElement.children[0]);
// console.log(mainLink.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[2]);
// target.textContent="JS manipule edildi";

//Burası eksik nextElementSibling ve previviousElementSibling i tamamla.


