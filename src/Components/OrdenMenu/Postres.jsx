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

const postres=[
    {producto: 'VASO DE HELADO 60g.', precio_por_unidad: '$4.100' , eliminar:'-' },
    {producto: 'ADICIÓN DE 1 BOLA DE HELADO', precio_por_unidad: '$4.000' , eliminar:'-' },
    {producto: 'PORCIÓN DE ROLLO DE HELADO', precio_por_unidad: '$7.900' , eliminar:'-' },
    {producto: 'POSTRE DE LA CASA Torta de queso y caramelo ', precio_por_unidad: '$8.100' , eliminar:'-' },
    {producto: 'VOLCÁN DE CHOCOLATE', precio_por_unidad: '$11.900' , eliminar:'-' },
    {producto: 'TORTA DE ALMOJÁBANA ', precio_por_unidad: '$14.300' , eliminar:'-' },
    {producto: 'MAXI ROLLO DE HELADO VON GLACET 1900g.', precio_por_unidad: '$24.900' , eliminar:'-' },

];

function Postres() {
      
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
                          {postres.map(celda=>(
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

export default Postres;