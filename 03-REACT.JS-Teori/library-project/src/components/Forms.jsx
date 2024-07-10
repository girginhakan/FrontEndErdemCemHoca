import React, { useState } from 'react'
import '../assets/style/forms.scss'

const Forms = ({kitapEkle,kitaplar}) => {

  const [kitapAdi,setKitapAdi]= useState("");
  const [kitapYazari,setKitapYazari]= useState("");
  const [kitapKategorisi,setkitapKategorisi]= useState("Kategori Seçiniz");
  const [kitapSayfaSayisi,setkitapSayfaSayisi]= useState("");
  const [kitapResmi,setKitapResmi]= useState("");
  const [kitapAciklamasi,setkitapAciklamasi]= useState("");


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

  return (
  <form onSubmit={handleSubmit}>
      <h3>Kitap Ekle</h3>
      <input value={kitapAdi} onChange={e=>setKitapAdi(e.target.value)} type="text" placeholder='Kitap adı' />
      <input value={kitapYazari} onChange={e=>setKitapYazari(e.target.value)} type="text" placeholder='Kitap yazarı' />
      <select value={kitapKategorisi} onChange={e=>setkitapKategorisi(e.target.value)}>
        <option >Kategori Seçiniz</option>
        <option >Yazılım</option>
        <option >Tarih</option>
        <option >Roman</option>
        <option >Finans</option>
        <option >Diğer</option>
      </select>
      <input value={kitapSayfaSayisi} onChange={e=>setkitapSayfaSayisi(e.target.value)} type="number" placeholder='Sayfa sayısı' />
      <input value={kitapResmi} onChange={e=>setKitapResmi(e.target.value)} type="url" placeholder='Kitap resmi(url)' />
      <textarea value={kitapAciklamasi} onChange={e=>setkitapAciklamasi(e.target.value)} placeholder='Kitap açıklaması'></textarea>
      <input disabled={kitapAdi===""||kitapYazari===""||kitapKategorisi===""||kitapSayfaSayisi===""||kitapAciklamasi===""} type="submit" value='Ekle' />

  </form>
  )
}

export default Forms



