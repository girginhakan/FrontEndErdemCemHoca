import React, { useContext } from "react";
import Card from "./Card";
import DataContext from "../context/DataContext";
import SearchBar from "./SearchBar";

const CardList = () => {
  const {kitaplar,secilenKategori}= useContext(DataContext);
  return (
    <>
    <SearchBar/>
    <div className="card-list">
    {
      kitaplar.map((kitap) => 
      (kitap.kitapKategorisi === secilenKategori||secilenKategori==="Tüm Kitaplar")&&
        (!kitap.isDeleted && 
        <Card kitap={kitap}  key={kitap.id}  />)
       // database deki silinen verileri öntüzde göstermemek için !kitap.isDeleted yazdık
      )
    }
    </div>
    </>
  );
};

export default CardList;
