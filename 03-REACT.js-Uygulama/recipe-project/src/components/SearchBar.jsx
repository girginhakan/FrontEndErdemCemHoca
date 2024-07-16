import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../assets/style/search.scss'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const{setSearch}=useContext(DataContext);
  return (
    <div className='search'>
        <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Ara...'/><FaSearch size={50} />
    </div>
  )
}

export default SearchBar