import React from 'react';
import '../../Components/Ordenes/ordenes.css'
import mesa1 from '../../utils/images/mesaOrdenes.png'
import mesa from '../../utils/images/mesaOrdenes.png'
// import comedor from '../../utils/images/restaurante.jpg'


function Ordenes() {
  return (
    <div>
      <div className='ordenes'>
      {/* <img src={comedor} alt="comedor"/> */}
      </div>
    <div className='mesas'>
       <img  src={mesa} alt="mesa"/>
       <img  src={mesa1} alt="mesa"/>
    </div>
    </div>

  );
}

export default Ordenes;