// console.log("Deneme-1");

// setTimeout(() => {
//    console.log("Deneme-2"); 
// }, 2000);
// setTimeout(() => {
//     console.log("Deneme-3"); 
//  }, 1000);


// console.log("Deneme-4");
// console.log("Deneme-5");
//------------------------------------------------------------------
// console.log("Deneme-1");

// setTimeout(() => {
//    console.log("Deneme-2"); 
// }, 0);


// console.log("Deneme-3");
// console.log("Deneme-4");
// console.log("Deneme-5");
// settime ın timeoutu 0 saniye bile olsa Javascript onu bekleteceğini bildiği için her zaman en sona yazar.
//------------------------------------------------------------------

// let timer = 5;
// const chronometer = setInterval(() => {
//     console.log(timer);
//     if (timer==0) {
//         clearInterval(chronometer);
//         console.log("Süre bitti");
//     }

//     timer--;
// }, 1000);
//------------------------------------------------------------------

//ReadyState Codes
//0 - Unset
//1 - Opened
//2 - Headers_Recevied
//3 - Loading
//4 - Done


//HttpStatus Codes
//200 OK: Başarılı
//201 Oluşturuldu
//301 : Kalıcı yönlendirme
//302 : Geçici yönlendirme
//400 lü hatalar frontend ile ilgili hatalardır
//400 Bad Request: Invalid argument (invalid request payload).
//403 Forbidden: Permission denied (e.g. invalid API key). Erişim izni sorunu
//404 : Bulunamadı hatası
//410 :  Kalıcı olarak bulunamadı hatası
//500 lü hatalar backend den gelen hatalardır
//500 Internal Server Error: Internal server error (retry your request).
//503 Service Unavailable: Unavailable. Sunucu kullanılamıyor hatası

// const JSON_url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr.readyState,"Unset");
// console.log(xhr);


// xhr.onreadystatechange =()=>{
//     if (xhr.readyState===4&& xhr.status===200) {
//         console.log("4-Done");
//         // console.log(xhr);
//         // console.log(xhr.response);
//         console.log(xhr.response[50]);
//         console.log(xhr.response[50].title);
//         console.log(xhr.response[50].title.substring(0,20) + "...");

//     }else if(xhr.readyState===3){
//         console.log("3-Loading");
//     }else if(xhr.readyState===2){
//         console.log("2-Headers_receiving");
//     }else if(xhr.readyState===1){
//         console.log("1-Opened");
//     }
// }

// xhr.open("GET",JSON_url);
// xhr.setRequestHeader("Content-type","application/json;charset=utf-8");
// xhr.responseType="json";
// xhr.send();

const url_todo = "https://jsonplaceholder.typicode.com/todos";
const xhr= new XMLHttpRequest();
const data ={
    userId:999,
    id:999,
    title:"ANK-16",
    completed:true
}
console.log(data);

const newPost= JSON.stringify(data);
console.log(newPost);

xhr.onreadystatechange= ()=>{
    if (xhr.readyState===4 && xhr.status===201) {
        console.log("4-DONE");
        console.log(xhr.response);
        console.log(xhr.status);
    }
}
xhr.open("POST",url_todo);
xhr.setRequestHeader("Content-type","application/json;charset=utf-8");
xhr.responseType="json";
xhr.send(newPost);
