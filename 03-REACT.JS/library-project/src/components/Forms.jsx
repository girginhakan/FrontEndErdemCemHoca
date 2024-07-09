import React from 'react'
import '../assets/style/forms.scss'

const Forms = () => {
  return (
  <form action="">
      <h3>Kitap Ekle</h3>
      <input type="text" placeholder='Kitap adı' />
      <input type="text" placeholder='Kitap yazarı' />
      <select>
        <option >Kategori Seçiniz</option>
        <option >Yazılım</option>
        <option >Tarih</option>
        <option >Roman</option>
        <option >Finans</option>
        <option >Diğer</option>
      </select>
      <input type="number" placeholder='Sayfa sayısı' />
      <input type="url" placeholder='Kitap resmi(url)' />
      <textarea placeholder='Kitap açıklaması'></textarea>
      <input type="submit" value='Ekle' />

  </form>
  )
}

export default Forms