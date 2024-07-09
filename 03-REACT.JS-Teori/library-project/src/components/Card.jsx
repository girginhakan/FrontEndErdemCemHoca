import React from 'react'
import '../assets/style/card.scss'

const Card = (props) => {

  return (
    <div className='card'>
      <img src={props.kitap.kitapResmi} alt="" />

      <div className="card-body">
        <button className='delete'>Sil</button>
        <button className='edit'>Düzenle</button>
        <h4>{props.kitap.kitapAdi}</h4>
        <p>{props.kitap.kitapYazari}</p>
        <p>{props.kitap.kitapKategorisi}</p>
        <p>{props.kitap.kitapSayfaSayisi}</p>
        <p>{props.kitap.kitapAciklamasi.substring(0,100)}</p>
      </div>
    </div>
  )
}

export default Card