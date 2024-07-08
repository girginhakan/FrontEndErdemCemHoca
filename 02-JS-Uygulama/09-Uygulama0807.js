const jsonURL = "https://jsonplaceholder.typicode.com/posts";
// const getReq = (url) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("GET", url)
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//               const response = JSON.parse(xhr.responseText);
//               console.log(response);
//             } else {
//               console.log(`${xhr.status} - Couldn't fetch the data`);
//             }
//           }
//     }
//     xhr.send()
// }

// getReq(jsonURL);
//---------------------------------------
// const jsonURL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
const data = {
    userId: 999,
    title: "ANK-16",
    completed: true
}
// console.log(data);
// const newPost = JSON.stringify(data);
// console.log(newPost);

// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState === 4 && xhr.status === 201){
//         console.log("4-DONE");
//         console.log(xhr.response);
//     }
// }
// xhr.open("POST",jsonURL);
// xhr.setRequestHeader("Content-type","application/json; chartset=utf-8");
// xhr.responseType="json";
// xhr.send(newPost);
//-----------------------------------------------------

console.log(data);
const xhr=new XMLHttpRequest();
data.userId=1000;
data.title="asd";
const newPost = JSON.stringify(data);
console.log(newPost);

xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 ){
        console.log("4-DONE");
        console.log(xhr.response);
    }
}
xhr.open("PUT",jsonURL);
xhr.setRequestHeader("Content-type","application/json; chartset=utf-8");
xhr.responseType="json";
xhr.send(newPost);
//-----------------------------------------------------

// console.log(data);
// const xhr=new XMLHttpRequest();
// data.userId=1000;
// data.title="aNKARA123";
// const newPost = JSON.stringify(data);
// console.log(newPost);

// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState === 4){
//         console.log("4-DONE");
//         console.log(xhr.response);
//     }
// }
// xhr.open("PATCH",jsonURL);
// xhr.setRequestHeader("Content-type","application/json; chartset=utf-8");
// xhr.responseType="json";
// xhr.send(newPost);

//-----------------------------------------------------
// const jsonURLDelete = "https://jsonplaceholder.typicode.com/posts/999";

// const xhr=new XMLHttpRequest();

// console.log(data);
// const newPost = JSON.stringify(data);
// console.log(newPost);

// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState === 4 ){
//         console.log("4-DONE");
//         console.log(xhr.response);
//     }
// }
// xhr.open("DELETE",jsonURLDelete);
// xhr.setRequestHeader("Content-type","application/json; chartset=utf-8");
// xhr.responseType="json";
// xhr.send(newPost);
