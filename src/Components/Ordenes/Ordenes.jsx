import React from "react";
import "../../Components/Ordenes/ordenes.css";
import mesa1 from "../../utils/images/mesaOrdenes.png";
import mesa from "../../utils/images/mesaOrdenes.png";

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

      <div className="zona">
        <img className="mesa1" src={mesa} alt="mesa" />
        <img className="mesa2" src={mesa} alt="mesa" />
      </div>

      <div className="zona">
        <img className="mesa1" src={mesa} alt="mesa" />
        <img className="mesa2" src={mesa} alt="mesa" />
      </div>

      <div className="zona">
        <img className="mesa1" src={mesa} alt="mesa" />
        <img className="mesa2" src={mesa} alt="mesa" />
      </div>
    </div>
  );
}

export default Ordenes;
