import React from 'react';
import '../OrdenMenu/desayuno.css'
import { styled } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  {Button, Table,
         TableBody,
         TableCell,            
         TableContainer,
         TableHead,
         TableRow,
      }
from '@material-ui/core';

// const celda = TableCell({
//   color:'red',
//   display: 'table-cell',
//   padding: '16px',
//   fontSize: '0.875rem',
//   textAlign: 'left',
//   fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//   fontWeight: 400,
//   lineHeight: 1.43,
//   borderBottom: '1px solid rgba(224, 224, 224, 1)',
//   letterSpacing: '0.01071em',
//   verticalAlign: 'inherit',

// }) 
const desayunos=[
    {producto: 'AREPA_PAISA', precio_por_unidad: '$3.500' , eliminar:'-' },
    {producto: 'PANDEBONO', precio_por_unidad: '$4.900' , eliminar:'-' },
    {producto: 'ALMOJÁBANA', precio_por_unidad: '$4.900' , eliminar:'-' },
    {producto: 'PORCIÓN DE QUESO (Queso blanco) ', precio_por_unidad: '$4.900' , eliminar:'-' },
    {producto: 'HUEVOS AL GUSTO (2 unidades)', precio_por_unidad: '' , eliminar:'-' },
    {producto: '-Frito o revuelto', precio_por_unidad: '$5.900' , eliminar:'-' },
    {producto: '-Con cebolla y tomate', precio_por_unidad: '$6.900' , eliminar:'-' },
    {producto: 'COCTEL DE FRUTAS (kiwi, banano, fresa_y_melón)', precio_por_unidad: '$6.900' , eliminar:'-' },
    {producto: 'CALDO DE COSTILLA', precio_por_unidad: '$11.900' , eliminar:'-' },
    {producto: 'CANASTA DE ALMOJÁBANA Y PAN DE BONO', precio_por_unidad: '$13.900' , eliminar:'-' },
    {producto: 'CALENTAO CON CHORIZO, LENTEJAS Y AREPA', precio_por_unidad: '$17.900' , eliminar:'-' },
    {producto: 'CALENTAO CON CARNE DE RES O CARNE DE CERDO Y MADURO', precio_por_unidad: '$17.900' , eliminar:'-' },
    {producto: 'CALENTAO PAISA (Chicharrón, frijol, maduro y aguacate)', precio_por_unidad: '$21.900' , eliminar:'-' },
    {producto: 'BISTEC A CABALLO', precio_por_unidad: '$22.900' , eliminar:'-' }, 

];


function Desayunos() {     

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    color: 'white',
  },
 
});

  return (
    <>
      <div className="containerTable">
          <TableContainer> 
              <Table> 
                  <TableHead> 
                    <TableRow> 
                      <TableCell> </TableCell>
                      <TableCell> </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {desayunos.map(celda=>(
                      <TableRow>
                        <TableCell className='celda'> {celda.producto} </TableCell>
                        <TableCell className='celda'> {celda.precio_por_unidad} </TableCell>
                        <TableCell className='celda'> {celda.eliminar} </TableCell>
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