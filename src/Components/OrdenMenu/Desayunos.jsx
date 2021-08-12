import React, {useState} from 'react';
import { db } from '../../firebase'
import { makeStyles } from '@material-ui/core/styles';
import  {Button, Table,
         TableBody,
         TableCell,            
         TableContainer,
         TableHead,
         TableRow,
      }
from '@material-ui/core';

const useStyle = makeStyles({
  containerTable: {
    minWidth: 700,
    color: 'white',  
    margin: '0px 50px',
  },
  celda:{
    fontSize: '20px',
    color: 'beige',
    paddingLeft: '50px',
    fontFamily: 'roboto slab',
},

});

const desayunos=[ 
  {producto: 'AREPA PAISA', precio_por_unidad: '$3.500' , eliminar:'-' },
  {producto: 'PANDEBONO', precio_por_unidad: '$4.900' , eliminar:'-' },
  {producto: 'ALMOJÁBANA', precio_por_unidad: '$4.900' , eliminar:'-' },
  {producto: 'PORCIÓN DE QUESO (Queso blanco) ', precio_por_unidad: '$4.900' , eliminar:'-' },
  {producto: 'HUEVOS AL GUSTO (2 unidades)', precio_por_unidad: '' , eliminar:'-' },
  {producto: '-Frito o revuelto', precio_por_unidad: '$5.900' , eliminar:'-' },
  {producto: '-Con cebolla y tomate', precio_por_unidad: '$6.900' , eliminar:'-' },
  {producto: 'COCTEL DE FRUTAS (kiwi, banano, fresa y melón)', precio_por_unidad: '$6.900' , eliminar:'-' },
  {producto: 'CALDO DE COSTILLA', precio_por_unidad: '$11.900' , eliminar:'-' },
  {producto: 'CANASTA DE ALMOJÁBANA Y PAN DE BONO', precio_por_unidad: '$13.900' , eliminar:'-' },
  {producto: 'CALENTAO CON CHORIZO, LENTEJAS Y AREPA', precio_por_unidad: '$17.900' , eliminar:'-' },
  {producto: 'CALENTAO CON CARNE DE RES O CARNE DE CERDO Y MADURO', precio_por_unidad: '$17.900' , eliminar:'-' },
  {producto: 'CALENTAO PAISA (Chicharrón, frijol, maduro y aguacate)', precio_por_unidad: '$21.900 ', eliminar:'-' },
  {producto: 'BISTEC A CABALLO', precio_por_unidad: '$22.900' , eliminar:'-' }, 

]; 
const OndenMenu = () => {

   const tablaProductos = {
        tabla:{
          producto: "",
          precio:"",
          
        }

        
   }
}
 

function Desayunos() {   
 
  const agregar = (productos) => {
    // setProductos
    // ([...desayunos])
}
  const classes = useStyle()
  return (
    <>
    {/* onSubmit={pedidos} */}
      <div className={classes.containerTable} >
          <TableContainer> 
              <Table> 
                  <TableHead> 
                    <TableRow > 
                      <TableCell>Producto</TableCell>
                      <TableCell>Precio</TableCell>
                      <TableCell>Eliminar</TableCell>
                      <TableCell>  </TableCell>  
                    </TableRow>
                  </TableHead>   
                  <TableBody>
                    {desayunos.map(productos=>(  
                      <TableRow>
                        <TableCell className={classes.celda}> {productos.producto} </TableCell>
                        <TableCell className={classes.celda}> {productos.precio_por_unidad} </TableCell>
                        <TableCell className={classes.celda}> {productos.eliminar} </TableCell>
                        <TableCell className={classes.celda}><button>Agregar</button> </TableCell>    
                       </TableRow>
                    ))}
                  </TableBody>
              </Table>
          </TableContainer>
      </div>  
    </>
  );
}

export default Desayunos; 