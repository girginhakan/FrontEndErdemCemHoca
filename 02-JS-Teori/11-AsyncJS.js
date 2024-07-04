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

// const url_todo = "https://jsonplaceholder.typicode.com/todos";
// const xhr= new XMLHttpRequest();
// const data ={
//     userId:999,
//     id:999,
//     title:"ANK-16",
//     completed:true
// }
// console.log(data);

// const newPost= JSON.stringify(data);
// console.log(newPost);

// xhr.onreadystatechange= ()=>{
//     if (xhr.readyState===4 && xhr.status===201) {
//         console.log("4-DONE");
//         console.log(xhr.response);
//         console.log(xhr.status);
//     }
// }
// xhr.open("POST",url_todo);
// xhr.setRequestHeader("Content-type","application/json;charset=utf-8");
// xhr.responseType="json";
// xhr.send(newPost);
//------------------------------------------------------------------
//ES-6 Promise ve Fetch

// const promiseObject = new Promise((resolve,reject)=>{
//     // resolve("Olumlu Sonuç");
//     reject("Oooops Hata!!!!");
// })
// .then(sonuc=>console.log(sonuc))// olumlu sonucu yakalıyoruz
// .catch(err=>console.log(err));//olumsuz sonucu yakalıyoruz

// console.log(promiseObject);
//------------------------------------------------------------------
//Fetch API
//fetch api bir promise objesi döndürür.

// const url_user = "https://jsonplaceholder.typicode.com/users";
// const fetchApi = fetch(url_user)//Get istediğini fetch ile tek satırda atmış olduk.
// .then(response=>response.json())//buradan gelen json objesi ile ilgili işlemleri ikinci then fonksiyonuyla manipule edebiliyoruz. Then fonksiyonundan dönen değer bir Promise objesidir.1. Then metodundan dönen sonuc 2. then fonksiyonunun parametresi olmuş olur.
// .then(data=>console.log(data))
// .catch(err=>console.log(err));
// console.log(fetchApi);

//------------------------------------------------------------------

// const url_post = "https://jsonplaceholder.typicode.com/posts";
// const data = {
//     userId:"333",
//     title:"ANK-16",
//     body:"Boost Yıldız Yazılımcılar"
// }
// const newPost = JSON.stringify(data);
// const fetchPost = fetch(url_post,{
//     method:"POST",
//     body:newPost,
//     headers:{"Content-type" : "application/json; charset=UTF-8"}
// })
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err));
// console.log(fetchPost);

//------------------------------------------------------------------
const url_post = "https://jsonplaceholder.typicode.com/posts";
// const data = {
//     userId:"333",
//     title:"ANK-16",
//     body:"Boost Yıldız Yazılımcılar"
// }
// const newPost = JSON.stringify(data);
// const fetchPost = fetch(url_post,{
//     method:"POST",
//     body:newPost,
//     headers:{"Content-type" : "application/json; charset=UTF-8"}
// })
// .then(res=>res.json())
// .then(data=>{
//     console.log(data);
//     return data.userId;
// })
// .then(data2=>Number(data2)/111)
// .then(result=>console.log(result**2))
// .catch(err=>console.log(err));
// console.log(fetchPost);

//------------------------------------------------------------------

// const pokeUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302";

// const getPoke = fetch(pokeUrl)
// .then(res=>res.json())
// .then(data=>{
//     console.log(data.results[1260].name)
//     console.log(data.results[1260].url)
//     let url_2= data.results[1260].url
//     fetch(url_2)
//     .then(res2=>res2.json())
//     .then(data2=>{
//         console.log(data2);
//         console.log(data2.sprites)
//         console.log(data2.sprites.other);
//         console.log(data2.sprites.other["official-artwork"].front_default);


//     })
// })
//------------------------------------------------------------------

const pokeUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302";

// const getPoke = fetch(pokeUrl)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.results[1260].name)
//         console.log(data.results[1260].url)
//         let url_2 = data.results[0].url
//         return fetch(url_2)
//     })
//     .then(res2 => res2.json())
//     .then(data2 => {
//         console.log(data2);
//         console.log(data2.sprites)
//         console.log(data2.sprites.other);
//         console.log(data2.sprites.other["official-artwork"].front_default);
//     })

//------------------------------------------------------------------
//async - await
// async bir fonksiyon olduğunu belirtmediğimiz için veri değişkeni onu beklemediği için TypeError: response.json is not a function hatası alırız. response değişkeni çalışmadan veri değişkeninin olduğu yer çalışmaması gerekmektedir. Bu yüzden  fonksiyonun adına async yazıp bekletmek istediğimiz satırlara await yazmamız gerekiyor.
// const asyncGet = async () => {
//     const response = await fetch(url_post)
//     const veri = await response.json();
//     console.log(veri);
// }
// asyncGet();

//------------------------------------------------------------------
const asyncGetPoke = async () =>{
    const response = await fetch(pokeUrl)
    const data = await response.json();
    console.log(data.results[7].name);
    const url2= data.results[7].url;
    const response2= await fetch(url2);
    const data2 = await response2.json();
    console.log(data2.sprites.other["official-artwork"].front_default);
}
asyncGetPoke();

//------------------------------------------------------------------
