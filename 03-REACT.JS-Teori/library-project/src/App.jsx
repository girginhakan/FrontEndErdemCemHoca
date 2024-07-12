import React, { useEffect, useState } from "react";
import Navi from "./components/Navi";
import Forms from "./components/Forms";
import CardList from "./components/CardList";
import axios from 'axios'

const App = () => {
  const companyName = "ANK-16";

  const [secilenKategori, setSecilenKategori] = useState("Tüm Kitaplar");
  const [kitaplar, setKitaplar] = useState([]);
  const [kategoriler, setKategoriler] = useState([]);
  const[secilenKitap,setSecilenKitap]=useState("");

  const kitapEkle = async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {
      //kitap ekleme bölümü
      setKitaplar((prev) => [...prev, yeni]);

      const response =await axios.post(url,yeni);
    }
    else{
      //kitap düzenleme metodu
      url+=`/${secilenKitap.id}`;
      //backende ekler sadece
      const response2= await axios.put(url,yeni);
      //front end de gösterme ve bulunduğu yerde değişiklik yapma
      setKitaplar(prev=>
        prev.map(kitap=>{
          if (kitap.id===secilenKitap.id) {
            return {...response2.data}
          }
          else{
            return {...kitap}
          }
        })
      )
      setSecilenKitap("");
    }
   
  };
  const kitapSil = async (id) => {
    // setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id!==id));
    setKitaplar((prev) =>prev.filter((statedenGelen) => statedenGelen.id !== id));
    const url =`http://localhost:3005/kitaplar/${id}`;
    // const response = await axios.delete(url); //Veriyi database den sildiği için veri güvenliği açısından sıkıntılı bir durum o yüzden patch kullanarak kişi kitabı sildiğini düşünürken database den silinmeyecek
    const response = await axios.patch(url,{isDeleted:true})

  };
  

  const kartDuzenle=(id)=>{
    setSecilenKitap(kitaplar.find(item=>item.id===id));
    console.log(kitaplar.find(item=>item.id===id));
  }

  const kateorileriGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    // const response = await fetch(url);
    // const kategoriler = await response.json();
    // setKategoriler(kategoriler);
    const response= await axios.get(url)
    const kategoriler = await response.data;
    setKategoriler(kategoriler)
  };

  // kateorileriGetir();Bu şekilde metodu çalıştırırsak sürekli bir get isteği atar. ancak useeffect ile çalıştırılırsa sayfa yüklendiğinde 1 kez çalışır.

  const kitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    if (secilenKategori && secilenKategori!=="Tüm Kitaplar") {
      url+=`?kitapKategorisi=${secilenKategori}`;
    }
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplar(kitaplar);
  };

  useEffect(()=>{
    kateorileriGetir()
  },[])
  useEffect(()=>{
    kitaplariGetir()//ayrı ayrıda yazılabilir bu şekilde birlikte de yapılabilir.
  },[secilenKategori])
  
  

  //  kitaplariGetir();Bu şekilde metodu çalıştırırsak sürekli bir get isteği atar. ancak useeffect ile çalıştırılırsa sayfa yüklendiğinde 1 kez çalışır.
  return (
    <>
      <Navi
        navHead={companyName}
        kategoriler={kategoriler}
        setSecilenKategori={setSecilenKategori}
      />
      <Forms 
        kitapEkle={kitapEkle} 
        kitaplar={kitaplar}
        secilenKitap={secilenKitap} />
      <CardList
        kitaplar={kitaplar}
        kitapSil={kitapSil}
        secilenKategori={secilenKategori}
        kartDuzenle={kartDuzenle}
      />
      {companyName}
    </>
  );
};

export default App;
