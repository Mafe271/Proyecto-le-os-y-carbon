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

const cocteles=[
    {producto: 'BRISA FRESCA Ginebra, azúcar, zumo y rodaja de limón, manzana verde y albahaca.', precio_por_unidad: '$13.900' , eliminar:'-' },
    {producto: 'PIÑA TROPICAL Whisky, zumo de limón, azúcar, hierbabuena, pulpa de piña y canela en polvo.', precio_por_unidad: '$15.800' , eliminar:'-' },
    {producto: 'PADRINO Whisky y Amaretto.', precio_por_unidad: '$18.000' , eliminar:'-' },
    {producto: 'LUPE Tequila, zumo de limón y azúcar.', precio_por_unidad: '$19.500' , eliminar:'-' },
    {producto: 'VINO CALIENTE Vino tinto, Brandy, Triple Sec, jugo de mandarina, clavos y canela.', precio_por_unidad: '$19.900' , eliminar:'-' },
    {producto: 'DRY MARTINI Aceituna, Ginebra y vermut.', precio_por_unidad: '$20.900' , eliminar:'-' },
    {producto: 'PIÑA COLADA Ron blanco, jugo de piña y licor de coco.', precio_por_unidad: '$21.900' , eliminar:'-' },
    {producto: 'MARGARITA Tequila Blanco, Triple Sec y limón.', precio_por_unidad: '$22.000' , eliminar:'-' },
    {producto: 'LEÑOS MARGARITA Tequila blanco, pulpa de maracuyá, hierbabuena, azúcar, zumo de limón y syrup.', precio_por_unidad: '$22.000' , eliminar:'-' },
    {producto: 'PALOMA Tequila, azúcar, zumo y rodaja de limón, naranja y gaseosa.', precio_por_unidad: '$22.000' , eliminar:'-' },

];

function Cocteles(props) {
       
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
                          {cocteles.map(celda=>(
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

export default Cocteles;