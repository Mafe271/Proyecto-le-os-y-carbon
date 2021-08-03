import React from 'react';
import './../Footer/Footer.css'
import facebook from '../../utils/images/icons8-facebook-48.png'
import instagram from '../../utils/images/icons8-instagram-128.png'

const Footer = () => {
    return (

            <div className='Footer'>
                <div className='iconos'>
                <a href="https://www.facebook.com/LenosyCarbon/">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/lenos_carbon/">
                    <img src={instagram} alt="instagram" />
                </a>
                </div>
            </div>

            );
        }

export default Footer;

