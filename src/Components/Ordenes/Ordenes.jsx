import React from "react";
import "../../Components/Ordenes/ordenes.css";
import mesa1 from "../../utils/images/mesaOrdenes.png";
import mesa from "../../utils/images/mesaOrdenes.png";
import Mesas from "./Mesas";
import Login from "./../Ordenes/Login";

function Ordenes() {
  return (
    <div>
      <div className="ordenes">
        <p>HAZ TU PEDIDO</p>
      </div>
    
      <div className="mesas">
        <img src={mesa} alt="mesa" />
        <img className="muestra" src={mesa1} alt="mesa" />
      </div>

       <Login />
       <Mesas />
    </div>
  );
}



export default Ordenes;
