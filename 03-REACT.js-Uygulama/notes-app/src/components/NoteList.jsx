import React from 'react'
import '../assets/style/main.css'

const NoteList = ({notes,deleteNote,addEditNote}) => {
  return (
    <>
        {notes.length > 0 && (
          <div className="notes-list">
            <h3>Notlarım</h3>
            {notes.map((note, index) => (
              <div key={index} className="note-item">
                <p>{note.description}</p>
                <div className="note-buttons">
                  <button onClick={()=>addEditNote(note.id)}>Düzenle</button>
                  <button onClick={()=>deleteNote(note.id)}>Sil</button>
                </div>
              </div>
            ))}
          </div>
        )}
    </>
  )
}

export default NoteList