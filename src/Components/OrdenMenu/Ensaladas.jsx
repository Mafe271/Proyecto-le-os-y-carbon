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

const ensaladas=[
    {producto: 'CONSOMÉ Con trocitos de papa y carne, Picadillo de cebolla, cilantro y dos arepas.', precio_por_unidad: '$8.900' , eliminar:'-' },
    {producto: 'ENSALADA ESPECIAL Garbanzos fritos, aguacate tomate Cherry, Cebollas crujientes, queso mozarela.', precio_por_unidad: '$14.900' , eliminar:'-' },
    {producto: 'ENSALADA PARRILA Lechuga (cogollo europeo) aguacate, Tomate Cherry y queso provole parrillas Con croutones de pan y vinagreta.', precio_por_unidad: '$15.900' , eliminar:'-' },
   
];

function Ensaladas() {
      
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
                          {ensaladas.map(celda=>(
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
export default Ensaladas;