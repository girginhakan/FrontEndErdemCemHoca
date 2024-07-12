import React from 'react'
import '../assets/style/card.scss'
import Book from '../assets/img/default-book.jpg'

const Card = ({kitap,kitapSil,kartDuzenle}) => {

  return (
    <div className='card'>
      <img src={kitap.kitapResmi?kitap.kitapResmi:Book} alt={kitap.kitapAdi+"_kapak"} />

      <div className="card-body">
        <button onClick={()=>kitapSil(kitap.id)} className='delete'>Sil</button>
        <button onClick={()=>kartDuzenle(kitap.id)} className='edit'>Düzenle</button>
        <h4>{kitap.kitapAdi}</h4>
        <p>{kitap.kitapYazari}</p>
        <p>{kitap.kitapKategorisi}</p>
        <p>{kitap.kitapSayfaSayisi}</p>
        <p>{kitap.kitapAciklamasi.substring((0,kitap.kitapAciklamasi).substring(0,100).lastIndexOf(" "))+"..."}</p>
      </div>
    </div>
  )
}

export default Card