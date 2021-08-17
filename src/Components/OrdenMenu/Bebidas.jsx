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

const bebidas=[
    {producto: 'JUGOS NATURALES EN AGUA', precio_por_unidad: '' },
    {producto: 'Fresa, guanábana, piña, mango, maracuyá,mora, lulo o uva.', precio_por_unidad: '$6.600' , eliminar:'-' },
    {producto: 'JUGOS NATURALES EN LECHE', precio_por_unidad: ''},
    {producto: 'Fresa, guanábana, mango, maracuyá, mora, lulo o uva.', precio_por_unidad: '$7.500' , eliminar:'-' },
    {producto: 'MEZCLAS CON NUESTRAS FRUTAS LOCALES', precio_por_unidad: '' },
    {producto: 'Mandarina - Fresa', precio_por_unidad: '$7.100' , eliminar:'-' },
    {producto: 'Mora - Fresa - Albahaca', precio_por_unidad: '$7.100' , eliminar:'-' },
    {producto: 'Piña - Hierbabuena', precio_por_unidad: '$7.100' , eliminar:'-' },
    {producto: 'Lulo – Hierbabuena', precio_por_unidad: '$7.100' , eliminar:'-' },
    {producto: 'LIMONADA NATURAL ', precio_por_unidad: '$5.200' , eliminar:'-' },
    {producto: 'LIMONADA DE PANELA', precio_por_unidad: '$5.500' , eliminar:'-' },
    {producto: 'LIMONADA DE HIERBABUENA', precio_por_unidad: '$6.500' , eliminar:'-' },
    {producto: 'LIMONADA DE MANGO BICHE', precio_por_unidad: '$8.900' , eliminar:'-' },
    {producto: 'LIMONADA DE COCO', precio_por_unidad: '$8.900' , eliminar:'-' }, 
    {producto: 'JUGO DE MANDARINA', precio_por_unidad: '$8.100' , eliminar:'-' },

];

function Bebidas() {
   
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
                          {bebidas.map(celda=>(
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

export default Bebidas;