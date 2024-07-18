import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import "../assets/style/search.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const { state,dispatch } = useContext(DataContext);
  return (
    //case_5
    <div className="search">
      <h3 style={{ marginLeft: "25px" }}>{state.secilenKategori} </h3>
     
        <input className="input-field"
          onChange={(e) => dispatch({type:"search",payload:e.target.value})}
          type="text"
          placeholder="Ara..."
        />
        <FaSearch className="icon" size={20} />
    </div>
  );
};

export default SearchBar;
