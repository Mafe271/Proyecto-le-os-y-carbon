import React, {useState} from 'react';
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

const entradas=[
    {producto: 'YUCA CON HOGAO', precio_por_unidad: '$4.900' , eliminar:'-' },
    {producto: 'PATACONES CON HOGAO 6 unidades', precio_por_unidad: '$6.900' , eliminar:'-' },
    {producto: 'MORCILLA LEÑOS', precio_por_unidad: '$ 10.900' , eliminar:'-' },
    {producto: '3 morcillas a la parrilla con 3 arepas  EMPANADAS', precio_por_unidad: '$13.900' , eliminar:'-' },
    {producto: '4 unidades acompañadas Con ají de la casa y limón CHORIZOS LEÑOS', precio_por_unidad: '16.900' , eliminar:'-' },
    {producto: '3 chorizos a la parrilla con 3 arepas PROVOLONE', precio_por_unidad: '$16.900' , eliminar:'-' },
    {producto: 'Disponible únicamente en restaurantes de Servicio a la mesa CHICHARRONES 100g Con arepa y guacamole.', precio_por_unidad: '$17.900' , eliminar:'-' },
   
];
 


function Entradas() {

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
                          {entradas.map(celda=>(
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

export default Entradas;