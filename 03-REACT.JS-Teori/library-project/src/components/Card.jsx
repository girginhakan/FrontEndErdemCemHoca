import React, { useContext } from 'react'
import '../assets/style/card.scss'
import Book from '../assets/img/default-book.jpg'
import DataContext from '../context/DataContext'
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Card = ({kitap}) => {
  const {kitapSil,kartDuzenle,state}= useContext(DataContext);
  return (
    (kitap.kitapAdi.toLowerCase().startsWith(state.search.toLowerCase())||
    kitap.kitapYazari.toLowerCase().startsWith(state.search.toLowerCase())
  )&&
    <div className='card'>
      <img src={kitap.kitapResmi?kitap.kitapResmi:Book} alt={kitap.kitapAdi+"_kapak"} />

      <div className="card-body">
        <button onClick={()=>kitapSil(kitap.id)} className='delete'><FaRegTrashAlt size={50} /></button>
        <button onClick={()=>kartDuzenle(kitap.id)} className='edit'><MdEdit size={50} /></button>
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