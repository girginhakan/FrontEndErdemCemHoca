//1. Yöntem
// document.querySelector("button").onclick= function () {
//     console.log("Clicked!!!")
// }

// let button= document.querySelector("button");
// button.onclick=()=>{
//     console.log("Tıklandı");
// }
// bu yöntem çok sağlıklı değil


//2. Yöntem 
// button.addEventListener("click",run);
// function run(){
//     console.log("Butona tıklandı");
// }

//Mouse Eventleria

const nav= document.querySelector("nav");
// nav.addEventListener("click",run);
// nav.addEventListener("dblclick",run);
// nav.addEventListener("mousedown",run);
// nav.addEventListener("mouseup",run);
// nav.addEventListener("mouseover",run);
// nav.addEventListener("mouseout",run);
// nav.addEventListener("mouseenter",run);
// nav.addEventListener("mouseleave",run);

//Klavye Eventleri 
// document.addEventListener("keypress",run);
// document.addEventListener("keyup",run);
// document.addEventListener("keydown",run);



function run(e) {
    console.log(e.type);//eventleri görüntülemek için fake bir e parametresi aldık  PointerEvent döndürür.
    console.log(e.key);
}

const input = document.querySelector("input");
const body = document.querySelector("body");
input.addEventListener("keyup",change);// keyup anında tetiklenir tuşa basmadan önce tetiklenir. Ancak keydown eventi red kelimesinden sonra bir tuşa daha basınca tetiklenir.
function change() {
    let color = input.value;
    // console.log(color);
    body.style.backgroundColor=color
    
}


//input eventleri

input.addEventListener("focus",run);
input.addEventListener("blur",run);
input.addEventListener("change",run);
input.addEventListener("copy",run);
input.addEventListener("cut",run);
input.addEventListener("paste",run);


//diğer eventler

window.addEventListener("load",run);
window.addEventListener("resize",run);
window.addEventListener("scroll",scrollWindow);


function scrollWindow() {
    let position = window.scrollY;
    console.log("Scrool Position : " ,position);
}

function run(e) {
    console.log(e.type);
}