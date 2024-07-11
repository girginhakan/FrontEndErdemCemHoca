import React, { useEffect, useState } from "react";
import Navi from "./components/Navi";
import Forms from "./components/Forms";
import CardList from "./components/CardList";

const App = () => {
  const companyName = "ANK-16";

  const kitapEkle = (yeni) => {
    setKitaplar((prev) => [...prev, yeni]);
  };
  const kitapSil = (id) => {
    // setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id!==id));
    setKitaplar((prev) =>
      prev.filter((statedenGelen) => statedenGelen.id !== id)
    );
  };
  const [secilenKategori, setSecilenKategori] = useState("Tüm kitaplar");

  const [kitaplar, setKitaplar] = useState([]);
  const [kategoriler, setKategoriler] = useState([]);

  const kateorileriGetir = async () => {
    const url = "http://localhost:3000/kategoriler";
    const response = await fetch(url);
    const kategoriler = await response.json();
    setKategoriler(kategoriler);
  };

  useEffect(()=>{
    kateorileriGetir();
  },[])
  // kateorileriGetir();Bu şekilde metodu çalıştırırsak sürekli bir get isteği atar. ancak useeffect ile çalıştırılırsa sayfa yüklendiğinde 1 kez çalışır.

  const kitaplariGetir = async () => {
    const url = "http://localhost:3000/kitaplar";
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplar(kitaplar);
  };

  useEffect(()=>{
    kitaplariGetir()
  },[])

  //  kitaplariGetir();Bu şekilde metodu çalıştırırsak sürekli bir get isteği atar. ancak useeffect ile çalıştırılırsa sayfa yüklendiğinde 1 kez çalışır.
  return (
    <>
      <Navi
        navHead={companyName}
        kategoriler={kategoriler}
        setSecilenKategori={setSecilenKategori}
      />
      <Forms kitapEkle={kitapEkle} kitaplar={kitaplar} />
      <CardList
        kitaplar={kitaplar}
        kitapSil={kitapSil}
        secilenKategori={secilenKategori}
      />
      {companyName}
    </>
  );
};

export default App;
