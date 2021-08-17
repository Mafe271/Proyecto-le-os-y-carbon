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

const pescado=[
    {producto: 'TRUCHA A LA PLANCHA', precio_por_unidad: '$28.900' , eliminar:'-' },
    {producto: 'FILETE DE PESCADO BLANCO', precio_por_unidad: '$34.900' , eliminar:'-' },
    {producto: 'SALMÓN A LA PARILLA ', precio_por_unidad: '$38.900' , eliminar:'-' },

];




function Pescado() {
      
      const classes = useStyle()
        return (
          <>
            <div className={classes.celda}>
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
                          {pescado.map(celda=>(
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
export default Pescado;