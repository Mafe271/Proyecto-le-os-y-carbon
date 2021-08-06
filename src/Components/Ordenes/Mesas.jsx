import React from 'react';
import '../../Components/Ordenes/ordenes.css'
import mesa from "../../utils/images/mesaOrdenes.png";
import { Link } from 'react-router-dom'

function Mesas() {
    return (
     <div className='Zona'>
        <div className="zona">
           <Link to="/OrdenMenu" className="link">
                <img className="mesa1" src={mesa} alt="mesa" />
           </Link>,
           <Link to="/OrdenMenu" className="link">
                <img className="mesa2" src={mesa} alt="mesa" />
           </Link>
        </div>

        <div className="zona">
           <Link to="/OrdenMenu" className="link">
               <img className="mesa1" src={mesa} alt="mesa" />
           </Link>
           <Link to="/OrdenMenu" className="link">
               <img className="mesa2" src={mesa} alt="mesa" />
           </Link>
        </div>

        <div className="zona">
           <Link to="/OrdenMenu" className="link">
               <img className="mesa1" src={mesa} alt="mesa" />
           </Link>
           <Link to="/OrdenMenu" className="link" >
               <img className="mesa2" src={mesa} alt="mesa" />
           </Link>
       </div>
     </div>  
    );
}

export default Mesas;
