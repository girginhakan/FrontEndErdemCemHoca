import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import "../assets/style/search.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const { secilenKategori, setSearch } = useContext(DataContext);
  return (
    <div className="search">
      <h3 style={{ marginLeft: "25px" }}>{secilenKategori} </h3>
     
        <input className="input-field"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Ara..."
        />
        <FaSearch className="icon" size={20} />
    </div>
  );
};

export default SearchBar;
