import React from "react";
import Card from "./Card";

const CardList = ({kitaplar,kitapSil,secilenKategori,kartDuzenle}) => {

  return (
    <>
    <h3 style={{marginLeft:"25px"}}>{secilenKategori} </h3>
    <div className="card-list">
    {
      kitaplar.map((kitap) => 
        !kitap.isDeleted && 
        <Card kitap={kitap} kitapSil={kitapSil} key={kitap.id} kartDuzenle={kartDuzenle} />
       // database deki silinen verileri öntüzde göstermemek için !kitap.isDeleted yazdık
      )
    }
    </div>
    </>
  );
};

export default CardList;
