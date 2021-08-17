import React, {useState} from 'react';
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

// estilos de la tabla
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

const res=[
    {producto: 'Morrillo de res en cocción lenta por 10 minutos terminado a la parrilla con chimichurri.'},
    {producto: 'Morrillo 250g', precio_por_unidad: '$25.900' , eliminar:'-' },
    {producto: 'Morrillo 250g. + Gaseosa', precio_por_unidad: '$26.900' , eliminar:'-' },
    {producto: 'CHURRASCO 230g.', precio_por_unidad: '$33.900' , eliminar:'-' },
    {producto: 'CHURRASCO 350g.', precio_por_unidad: '$37.900' , eliminar:'-' },
    {producto: 'BABY BEEF 230g.', precio_por_unidad: '$36.900' , eliminar:'-' },
    {producto: 'BABY BEEF 350g.', precio_por_unidad: '$39.900' , eliminar:'-' },
    {producto: 'PUNTA DE ANCA 230g.', precio_por_unidad: '$32.900' , eliminar:'-' },
    {producto: 'PUNTA DE ANCA 350g.', precio_por_unidad: '$37.900' , eliminar:'-' },
    {producto: 'SÚPER PUNTA DE ANCA 400g.', precio_por_unidad: '$43.900' , eliminar:'-' },
    {producto: 'BIFE CHORIZO 430g.', precio_por_unidad: '$43.900' , eliminar:'-' },
    {producto: 'LOMITO PARRILA 360g. Disfrútalo con chimichurri, salsa BBQ O salsa pimienta', precio_por_unidad: '$45.900' , eliminar:'-' },
    {producto: 'FILET MIGNON 360g.', precio_por_unidad: '$45.900' , eliminar:'-' },
];

function Res() {
     
      const classes = useStyle()
        return (
          <>
            <div className={classes.containerTable}>
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
                          {res.map(celda=>(
                            <TableRow>
                              <TableCell className={classes.celda}> {celda.producto} </TableCell>
                              <TableCell className={classes.celda}> {celda.precio_por_unidad} </TableCell>
                              <TableCell className={classes.celda}> {celda.eliminar} </TableCell>
                             </TableRow>
                          ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>   
          </>
        );
      }

export default Res;