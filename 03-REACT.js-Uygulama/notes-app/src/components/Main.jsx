import React, { useState } from "react";
import "../assets/style/main.css";

import NotesEdit from "./NotesEdit";
import NoteList from "./NoteList";

const Main = ({ addEditNote, notes,deleteNote,noteDuzenle }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEditNote({
      id: (Number(notes[notes.length - 1].id) + 1).toString(),
      description: description,
    });
    setDescription("");
  };

  return (
    <>
      <div className="container">
        <NoteList notes={notes} deleteNote={deleteNote} addEditNote={addEditNote}/>
        <div className="form-container">
          <h3>Yeni Not Ekle</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Notunuzu buraya giriniz"
              />
            </div>
            <input
              disabled={description === ""}
              type="submit"
              className="form-button"
              value="Ekle"
            />
          </form>
        </div>
      </div>
      <NotesEdit addEditNote={addEditNote} />
    </>
  );
};

export default Main;
