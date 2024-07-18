import { useState } from 'react'

import './App.scss'
import Card from './components/Card'
import axios from 'axios';

function App() {
  const [user,setUser]= useState("");
  const [loading,setLoading] =useState(false);
  const[error,setError]=useState("");

  const getRandomUser= async()=>{
    try {
      setUser("");
      setLoading(true);
      setError("");

      const url="https://randomuser.me/api/";
      const response =await axios.get(url);
      const data = await response.data.results[0];
      console.log(data);
      setUser(data);
      setLoading(data);
      setError("");
    } catch {
      setUser("");
      setLoading("");
      setError("Uuups bir hata oldu!!!1")
    }
  }

  return (
   <Card user={user} loading={loading} error={error} getRandomUser={getRandomUser}/>
  )
}

export default App
