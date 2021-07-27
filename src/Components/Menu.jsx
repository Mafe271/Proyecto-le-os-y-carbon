import React from 'react';
import '../../src/utils/css/menu.css';
import calentao from '../utils/images/calentao.PNG'
import carnes from '../utils/images/carnes.PNG'
import carnes2 from '../utils/images/Carnes2.PNG'
import entradas from '../utils/images/Entradas.PNG'
import postres from '../utils/images/Postres.PNG'
import sandwiches from '../utils/images/sandwiches.PNG'
import coctel from '../utils/images/coctel.jpg'

function Menu() {
  return (
    <div className='menu'>

      <div className='menu2'>
        <img className='img1' src={calentao} width='200px' height='100px'/>
        <img className='img2' src={carnes}/>
      </div>
      <div className='menu3'>
        <img className='img3' src={carnes2}/>
      </div>
      <div id='title'>
      <a className='titleOrang' href="https://lenosycarbon.com.co/">MENÚ</a>  
      </div>
      <div className='menu4'>
        <img className='img4' src={entradas}/>
        <img className='img5' src={postres}/>
      </div>
      <div className='menu5'>
        <img className='img6' src={sandwiches}/>
        <img className='img7' src={coctel}/>
      </div>

    </div>
  );
}

export default Menu;