import axios from "axios";
import { createContext, useEffect, useState } from "react";

//context oluşturulması
const DataContext = createContext();

//oluşturulan context için bir sağlayıcı oluşturulur.

export const DataProvider = ({children}) => {
  // yapıdaki tüm state, metod ....etc. buraya taşınacak



  const companyName = "ANK-16";

  const [secilenKategori, setSecilenKategori] = useState("Tüm Kitaplar");
  const [kitaplar, setKitaplar] = useState([]);
  const [kategoriler, setKategoriler] = useState([]);
  const [secilenKitap, setSecilenKitap] = useState("");

  const kitapEkle = async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {
      //kitap ekleme bölümü
      setKitaplar((prev) => [...prev, yeni]);

      const response = await axios.post(url, yeni);
    } else {
      //kitap düzenleme metodu
      url += `/${secilenKitap.id}`;
      //backende ekler sadece
      const response2 = await axios.put(url, yeni);
      //front end de gösterme ve bulunduğu yerde değişiklik yapma
      setKitaplar((prev) =>
        prev.map((kitap) => {
          if (kitap.id === secilenKitap.id) {
            return { ...response2.data };
          } else {
            return { ...kitap };
          }
        })
      );
      setSecilenKitap("");
    }
  };
  const kitapSil = async (id) => {
    // setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id!==id));
    setKitaplar((prev) =>
      prev.filter((statedenGelen) => statedenGelen.id !== id)
    );
    const url = `http://localhost:3005/kitaplar/${id}`;
    // const response = await axios.delete(url); //Veriyi database den sildiği için veri güvenliği açısından sıkıntılı bir durum o yüzden patch kullanarak kişi kitabı sildiğini düşünürken database den silinmeyecek
    const response = await axios.patch(url, { isDeleted: true });
  };

  const kartDuzenle = (id) => {
    setSecilenKitap(kitaplar.find((item) => item.id === id));
    console.log(kitaplar.find((item) => item.id === id));
  };

  const kateorileriGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    // const response = await fetch(url);
    // const kategoriler = await response.json();
    // setKategoriler(kategoriler);
    const response = await axios.get(url);
    const kategoriler = await response.data;
    setKategoriler(kategoriler);
  };

  // //filtreleme için 1. yol
  // const kitaplariGetir = async () => {
  //   let url = "http://localhost:3005/kitaplar";
  //   if (secilenKategori && secilenKategori !== "Tüm Kitaplar") {
  //     url += `?kitapKategorisi=${secilenKategori}`;
  //   }
  //   const response = await fetch(url);
  //   const kitaplar = await response.json();
  //   setKitaplar(kitaplar);
  // };


  
  const kitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplar(kitaplar);
  };



  useEffect(() => {
    kateorileriGetir();
    kitaplariGetir();

  }, []);
  useEffect(() => {
    // kitaplariGetir();//ayrı ayrıda yazılabilir bu şekilde birlikte de yapılabilir.
    //kitaplariFiltrele();
  }, [secilenKategori]);

  //  kitaplariGetir();Bu şekilde metodu çalıştırırsak sürekli bir get isteği atar. ancak useeffect ile çalıştırılırsa sayfa yüklendiğinde 1 kez çalışır.


//-----------------------------------------------------------------

const [kitapAdi,setKitapAdi]= useState("");
const [kitapYazari,setKitapYazari]= useState("");
const [kitapKategorisi,setKitapKategorisi]= useState("Kategori Seçiniz");
const [kitapSayfaSayisi,setKitapSayfaSayisi]= useState("");
const [kitapResmi,setKitapResmi]= useState("");
const [kitapAciklamasi,setKitapAciklamasi]= useState("");


const handleSubmit =(e)=>{
  e.preventDefault();//butona tıklandığında sayfanın yenilenmemesi için yazılan kod
  // console.log("BilgeAdam Akademi adsadasdasdassdassdasdasdasdasdad");
  kitapEkle({
      id:(Number(kitaplar[kitaplar.length-1].id)+1).toString(),
      kitapAdi:kitapAdi,
      kitapYazari:kitapYazari,
      kitapKategorisi:kitapKategorisi,
      kitapSayfaSayisi:kitapSayfaSayisi,
      kitapResmi:kitapResmi,
      kitapAciklamasi:kitapAciklamasi

  });
  setKitapAdi("");
  setKitapYazari("");
  setkitapKategorisi("Kategori seçiniz");
  setKitapResmi("");
  setkitapSayfaSayisi("");
  setkitapAciklamasi("");
}
useEffect(()=>{
 if (secilenKitap) {
  setKitapAdi(secilenKitap.kitapAdi);
  setKitapYazari(secilenKitap.kitapYazari);
  setKitapKategorisi(secilenKitap.kitapKategorisi);
  setKitapResmi(secilenKitap.kitapResmi);
  setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
  setKitapAciklamasi(secilenKitap.kitapAciklamasi);
 }
},[secilenKitap])

//----------------------------------------
const [search,setSearch]=useState("");




  return <DataContext.Provider value={{
    companyName, kategoriler,setSecilenKategori,// Navi componentinden gelenler,
        secilenKitap,
        kitapAdi,
        kitapYazari,
        kitapKategorisi,
        kitapResmi,
        kitapSayfaSayisi,
        kitapAciklamasi,
        setKitapAdi,
        setKitapYazari,
        setKitapKategorisi,
        setKitapResmi,
        setKitapSayfaSayisi,
        setKitapAciklamasi,
        handleSubmit,//Form Componentinden gelenler
        kitaplar,secilenKategori,// CardListten gelenler
        kitapSil,kartDuzenle,//Card componentten gelenler
        search,setSearch //searchdab gelenler


  }}>
        {children}
    </DataContext.Provider>;
};

export default DataContext;
