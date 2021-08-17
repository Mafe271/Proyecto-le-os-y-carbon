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

const sandwiches=[
    {producto: 'CHORIPAN Con chimichurri', precio_por_unidad: '$14.900' , eliminar:'-' },
    {producto: 'SÁNDWICH DE POLLO A LA PARRILA 160g. De pollo, Con verduras y salsa BBQ.', precio_por_unidad: '$21.900' , eliminar:'-' },
    {producto: 'SÁNWICH DE MORRILLO A LA PARRILLA CON PAPAS Y GASEOSA 160g. De Morillo en julianas', precio_por_unidad: '$23.900' , eliminar:'-' },
    {producto: 'SÁNDWICH DE COSTILLA ST. LOUIS A LA PARRILLA CON PAPAS Y GASEOSA 160g. de Costillas St. ', precio_por_unidad: '$26.900' , eliminar:'-' },
    {producto: 'SÁNDWICH DE CHURRASCO A LA. PARRILLA CON PAPAS Y GASEOSA 160 g. de Churrasco', precio_por_unidad: '$27.900' , eliminar:'-' },
    {producto: 'SÁNDWICH DE LOMO DE RES A LA PARRILLA 160 g. de lomo de res', precio_por_unidad: '$23.900' , eliminar:'-' },
    {producto: 'SÁNDWICH DE LOMO DE RES A LA PARRILLA CON PAPAS Y GASEOSA 160 g. de lomo de res.', precio_por_unidad: '$29.900' , eliminar:'-' },

];

function Sandwiches() {
      
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
                          {sandwiches.map(celda=>(
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

export default Sandwiches;