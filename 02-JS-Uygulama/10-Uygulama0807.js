//Custom async function

function myAsyncFunction(time) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("İşlem tamamlandı");
            reject("Bir hata oluştu!!!");
        },time)
    })
}
myAsyncFunction(2000)
.then(response=>console.log(response))
.catch(err=>console.log(err));