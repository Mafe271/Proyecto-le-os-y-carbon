import React from 'react';
import '../Menu/menu.css';
import calentao from '../../utils/images/calentao.png'
import carnes from '../../utils/images/carnes.png'
import carnes2 from '../../utils/images/Carnes2.png'
import entradas from '../../utils/images/Entradas.png'
import postres from '../../utils/images/Postres.png'
import sandwiches from '../../utils/images/sandwiches.png'
import coctel from '../../utils/images/coctel.jpg'
import mall from '../../utils/images/mallmap.PNG'
import airport from '../../utils/images/airportmap.PNG'



function Menu() {
  return (
    <div className='menu'>

      <div className='menu2'>
        <img className='img1' src={calentao} alt="calentao" />
        <img className='img2' src={carnes} alt="carnes" />
      </div>
      <div className='menu3'>
        <img className='img3' src={carnes2} alt="carnes2" />
      </div>
      <div id='title'>
        <a className='titleOrang' href="https://lenos.imaginem.us/wp-content/uploads/menu-domicilios.pdf">MENÚ</a>
      </div>
      <div className='menu4'>
        <img className='img4' src={entradas} alt="entradas" />
        <img className='img5' src={postres} alt="postres" />
      </div>
      <div className='menu5'>
        <img className='img6' src={sandwiches} alt="sandwich" />
        <img className='img7' src={coctel} alt="coctel" />
      </div>

      <div className='location'>
        <p>Leños & Carbon <br />
          Centro Comercial Parque La Colina <br />
          Carrera 58D No. 146-51 <br />
          Local FC-7 <br />
          Tel: 6684545 Ext. 14769 <br />
          Cel: 3214895267 <br />
          Horarios de atención <br />
          L – D: 10:30 am – 8:30 pm <br />
        </p>
        <img src={mall} alt="mall" />
      </div>
      <div className='locat'>
        <p>Leños & Carbon <br />
          Aeropuerto Internacional <br />
          El Dorado Calle 26 No. 103-09 <br />
          Local 105 <br />
          Cel: 316-834-0315 <br />
          Horarios de atención <br />
          L – D: 6:00 am – 9:00 pm <br />
        </p>
        <img src={airport} alt="airport" />
      </div>

    </div>
  );
}

export default Menu;
