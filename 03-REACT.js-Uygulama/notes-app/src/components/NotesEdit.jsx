import React from 'react'
import '../assets/style/main.css'

const NotesEdit = ({addEditNote}) => {
  return (
    <>
    <div className="container">
      <div className="form-container">
        <h3>Notu Düzenle</h3>
        <form >
          <div className="form-group">
            <input
              value={addEditNote.description}
              type="text"
              placeholder="Notunuzu buraya giriniz"
            />
          </div>
          <input
           
            type="submit"
            className="form-button iptal"
            value="İptal"
          />
           <input
           
            type="submit"
            className="form-button kaydet"
            value="Kaydet"
          />
        </form>
      </div>
    </div>
   
  </>
  )
}

export default NotesEdit