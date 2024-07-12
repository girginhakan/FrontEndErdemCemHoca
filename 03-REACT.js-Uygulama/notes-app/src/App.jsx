import { useEffect, useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);
  const[secilenNote,setSecilenNote]=useState("");


  const addEditNote = async (newNote)=>{
    if (!secilenNote) {
      const url ="http://localhost:3000/notes";
    setNotes((prev)=>[...prev,newNote]);
    const response = await axios.post(url,newNote);
    }
    else{
      url+=`/${secilenNote.id}`;
      const response2= await axios.put(url,newNote);
      setKitaplar(prev=>
        prev.map(note=>{ 
          if (note.id===secilenNote.id) {
            return {...response2.data}
          }
          else{
            return {...note}
          }
        })
      )
      secilenNote("");
    }
    
  };

  const noteDuzenle=(id)=>{
    setSecilenNote(notes.find(item=>item.id===id));
    console.log(notes.find(item=>item.id===id));
  }



  const deleteNote =async(id)=>{
    setNotes((prev) =>prev.filter((statedenGelen) => statedenGelen.id !== id));
    const url =`http://localhost:3000/notes/${id}`;
    const response= await axios.delete(url,id);
  };

  const getAllNotes= async ()=>{
    const url ="http://localhost:3000/notes";
    const response= await axios.get(url);
    const allNotes =await response.data;
    setNotes(allNotes);
  };

  useEffect(()=>{
    getAllNotes();
  },[])

  return (
    <>
      <Header/>
      <Main notes={notes} addEditNote={addEditNote} deleteNote={deleteNote} noteDuzenle={noteDuzenle}  />
    </>
  )
}

export default App
