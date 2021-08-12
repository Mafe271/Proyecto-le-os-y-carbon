import React from 'react';
import * as FaIcons from 'react-icons/fa'; /*Se importan los iconos de menu navbar*/
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
  	title: 'Inicio',
  	path: '/inicio',
  	icon: <AiIcons.AiFillHome />,
  	cName: 'nav-text'
  },
  {
  	title: 'Menu',
  	path: '/menu',
  	icon: <IoIcons.IoIosPaper />,
  	cName: 'nav-text'
  },
  {
  	title: 'Ordenes',
  	path: '/ordenes',
  	icon: <FaIcons.FaCartPlus />,
  	cName: 'nav-text'
  },

]