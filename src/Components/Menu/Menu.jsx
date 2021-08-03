import React from 'react';
import '../Menu/menu.css';
import calentao from '../../utils/images/calentao.PNG'
import carnes from '../../utils/images/carnes.PNG'
import carnes2 from '../../utils/images/Carnes2.PNG'
import entradas from '../../utils/images/Entradas.PNG'
import postres from '../../utils/images/Postres.PNG'
import sandwiches from '../../utils/images/sandwiches.PNG'
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
        <a href="https://www.google.com/maps/place/Cra.+58d+%23%23146-51,+Bogot%C3%A1/@4.7328722,-74.0683596,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f851a6dca927f:0x6a39c225f434646b!8m2!3d4.7328669!4d-74.0661709?hl=es">
        <img src={mall} alt="mall" />
        </a>
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
        <a href="https://www.google.com/maps/search/El+Dorado+Calle+26+No.+103-09/@4.6948835,-74.143074,16z/data=!3m1!4b1?hl=es">
        <img src={airport} alt="airport" />
        </a>
      </div>
        
    </div>
  );
}

export default Menu;
