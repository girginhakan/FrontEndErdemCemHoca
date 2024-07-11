import React, { useEffect, useState } from 'react'

const App = () => {
  const[sayac,setSayac]= useState(0);
  const[deger,setDeger]=useState(true);

  //1. Durum =Sayfa yüklendiğinde 1 defa çalışır. Sayfada gerrçekleşen her değişiklikte tekrar tekraar tetiklenir. (defautl durum yani effect kullanılmayan durumlarda da bu şekilde çalışır)
  // useEffect(()=>{
  //   console.log("1.Durum useEffect çalıştı");
  // });

  //2.Durum = Sayfa yüklendiğinde 1 defa çalışır. Ancak bağımlılık dizisine hiçbir eleman tanımlanmadığı için değişikliğe bağlı larak tetiklenmez. Yani sayfa yüklendiğinde sadece 1 defa çalışır bir daha çalışmaz.
  // useEffect(()=>{
  //   console.log("2.Durum useEffect çalıştı");
  // },[])

  //3. durum = Sayfa yüklendiğinde 1 defa çalışır. Ancak bağımlılık dizisine sayaç yazdığımız için sayaç değişkeninde herhangi bir değişiklik olduğu zaman tetiklenir. Yani sayfa yüklendiğinde bir kez çalışır ancak daha sonra Arttır ve Azalt butonuna tıklandığında tetiklenir.
  // useEffect(()=>{
  //   console.log("3.Durum useEffect çalıştı");
  // },[sayac])

  // useEffect(()=>{
  //   console.log("3.Durum useEffect çalıştı");
  // },[sayac,deger])

  //4.Durum Sayfa yüklendiğinde 1 defa çalışır. Cleanup metodu olarak ör: debouncing yapılarında kullanılır.
  useEffect(()=>{
    console.log("4.Durum useEffect çalıştı");
    return ()=>{
      console.log("Clean-up metodu çalıştırıldı!!!");
    }
  },[sayac])

  return (
    
    <>
      <button onClick={()=>setSayac(sayac+1)}>Arttır</button>
      <span>{sayac}</span>
      <button onClick={()=>setSayac(sayac-1)}>Azalt</button>
      <br />
      <br />
      <button onClick={()=>setDeger(!deger)}>{deger?"True":"False"}</button>
    </>
  )
}

export default App