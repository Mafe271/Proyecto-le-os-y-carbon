import React, {fragment, useState} from 'react';
import {firebaseConfig} from "../../firebase"
import { db } from '../../firebase'
import { useParams } from 'react-router-dom'
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

 

function Desayunos() {   

  const classes = useStyle()

  const [productos, setProductos] = useState({
    producto: "",
    precio:""
  })
   const handlesubmit = (event) =>{
     console.log(event.target.value)
   }
  const tablaProductos = {
    contenido: {
      producto: "",
      precio:"",
      certify: false
    },
    checked:{
      yes: false,
      no: false
    }   
  }
  const { id }=useParams()
  const [data, setData] = useState([])
  const [contenido, setContenido] = useState(tablaProductos.contenido)
  const [checked, setChecked] = useState(tablaProductos.checked)
  
  // console.log(/*objetoData*/)
//   await db.collection('data').productos().setToggle(contenido)
//  .then(_res=>{
//    alert("gregado con exito")
//    setContenido(tablaProductos.contenido)
//    setChecked(tablaProductos.checked)
//  })
//  .catch(_err=> alert("Algo salio mal"))
  
  const handleChecked = (e) => {
    const{ name } = e.target
    if(name="yes"){
      setChecked({
        checked,
        yes: true,
        no: false
      })
      setContenido({
        ...contenido,
        certify: true
      })
    }
    if(name = "no"){
      setChecked({
        ...checked,
        yes: false,
        no: true
    })
    setContenido({
      ...contenido,
      certify: true
    })
  }
 }
  const agregar = (_desayunos) => {
    // setProductos([...productos, Desayunos])

  }
  return (
    <>
      <div className={classes.containerTable} >  
          <TableContainer> 
              <Table> 
                  <TableHead> 
                    <TableRow > 
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>  </TableCell>  
                    </TableRow>
                  </TableHead>   
                  <TableBody>
                    {desayunos.map((producto, index) => (  
                      <TableRow key={index}>
                        <TableCell onChange={handlesubmit} name='producto' className={classes.celda}> {producto.producto} </TableCell>
                        <TableCell onChange={handlesubmit} name='precio' className={classes.celda}> {producto.precio_por_unidad} </TableCell>
                        <TableCell onChange={handlesubmit} className={classes.celda}> {producto.eliminar} </TableCell>
                        <TableCell onChange={handlesubmit} name='producto' className={classes.celda}><button type='submit' onClick={()=>agregar(productos)}>Agregar</button> </TableCell>    
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
