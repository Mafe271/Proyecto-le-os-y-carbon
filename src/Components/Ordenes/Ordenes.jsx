import React from "react";
import "../../Components/Ordenes/ordenes.css";
import mesa1 from "../../utils/images/mesaOrdenes.png"; /*Se importan las imagenes de las mesas*/
import mesa from "../../utils/images/mesaOrdenes.png";
import Mesas from "./Mesas";


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


       <Mesas />
    </div>
  );
}



export default Ordenes;
