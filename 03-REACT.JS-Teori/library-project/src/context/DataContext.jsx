import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { Flip, toast } from "react-toastify";

//context oluşturulması
const DataContext = createContext();

//oluşturulan context için bir sağlayıcı oluşturulur.

export const DataProvider = ({children}) => {
  // yapıdaki tüm state, metod ....etc. buraya taşınacak
  const [state,dispatch]= useReducer(reducer,initialState);


  const companyName = "ANK-16";

  const {secilenKitap,kitaplar,kitapAdi,kitapYazari,kitapKategorisi,kitapSayfaSayisi,kitapResmi,kitapAciklamasi}= state;
  
  const kitapEkle = async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {
      //kitap ekleme bölümü
      //case_12
      // setKitaplar((prev) => [...prev, yeni]);
      dispatch({type:"kitapEkle",yeni});
      toast.success('Yeni kitap Eklendi', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });

      const response = await axios.post(url, yeni);
    } else {
      //kitap düzenleme metodu
      url += `/${secilenKitap.id}`;
      //backende ekler sadece
      const response2 = await axios.put(url, yeni);
      //front end de gösterme ve bulunduğu yerde değişiklik yapma
      // setKitaplar((prev) =>
      //   prev.map((kitap) => {
      //     if (kitap.id === secilenKitap.id) {
      //       return { ...response2.data };
      //     } else {
      //       return { ...kitap };
      //     }
      //   })
      // );
      // setSecilenKitap("");
      dispatch({type:"kitapDuzenle",yeni});
      toast.warn('Kitap Düzenlendi', {
        position:"bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });
    }
  };
  const kitapSil = async (id) => {
    // setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id!==id));
    // setKitaplar((prev) =>
    //   prev.filter((statedenGelen) => statedenGelen.id !== id)
    // );
    //case_13
    dispatch({type:"kitapSil",id});
    toast.error('Kitap Silindi', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
      });
    const url = `http://localhost:3005/kitaplar/${id}`;
    // const response = await axios.delete(url); //Veriyi database den sildiği için veri güvenliği açısından sıkıntılı bir durum o yüzden patch kullanarak kişi kitabı sildiğini düşünürken database den silinmeyecek
    const response = await axios.patch(url, { isDeleted: true });
  };

  const kartDuzenle = (id) => {
    // setSecilenKitap(kitaplar.find((item) => item.id === id));
    //case_14
    dispatch({type:"kartDuzenle",id});
  };

  const kateorileriGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    // const response = await fetch(url);
    // const kategoriler = await response.json();
    // setKategoriler(kategoriler);
    const response = await axios.get(url);
    const kategoriler = await response.data;
    // setKategoriler(kategoriler);
    //case_2
    dispatch({type:"kateorileriGetir",payload:kategoriler});
  };



  
  const kitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    const response = await fetch(url);
    const kitaplar = await response.json();
    // setKitaplar(kitaplar);
    //case_1
    dispatch({type:"kitaplariGetir",payload:kitaplar})
  };



  useEffect(() => {
    kateorileriGetir();
    kitaplariGetir();

  }, []);
  // useEffect(() => {
  //   // kitaplariGetir();//ayrı ayrıda yazılabilir bu şekilde birlikte de yapılabilir.
  //   //kitaplariFiltrele();
  // }, [secilenKategori]);

  //  kitaplariGetir();Bu şekilde metodu çalıştırırsak sürekli bir get isteği atar. ancak useeffect ile çalıştırılırsa sayfa yüklendiğinde 1 kez çalışır.


//-----------------------------------------------------------------




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
  // setKitapAdi("");
  // setKitapYazari("");
  // setkitapKategorisi("Kategori seçiniz");
  // setKitapResmi("");
  // setkitapSayfaSayisi("");
  // setkitapAciklamasi("");
  //case_3
  dispatch({type:"resetForm"});
}
// useEffect(()=>{
//  if (secilenKitap) {
//   setKitapAdi(secilenKitap.kitapAdi);
//   setKitapYazari(secilenKitap.kitapYazari);
//   setKitapKategorisi(secilenKitap.kitapKategorisi);
//   setKitapResmi(secilenKitap.kitapResmi);
//   setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
//   setKitapAciklamasi(secilenKitap.kitapAciklamasi);
//  }
// },[secilenKitap])

//----------------------------------------





  return <DataContext.Provider value={{
        companyName, 
        handleSubmit,//Form Componentinden gelenler
        kitapSil,kartDuzenle,//Card componentten gelenler
        state,dispatch
  }}>
        {children}
    </DataContext.Provider>;
};

export default DataContext;
