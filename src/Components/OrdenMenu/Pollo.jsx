import React, {useState} from 'react';
import axios from 'axios';
import { db } from '../../firebase'
import {Delete} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import  {Button, Table,
         TableBody,
         TableCell,            
         TableContainer,
         TableHead,
         TableRow,
         Modal
      }
from '@material-ui/core';

const baseUrl='http://localhost:3000//consolas/'

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
  modal: {
    fontFamily: 'roboto',
    position: 'absolute',
    width: 400,
    backgroundColor: '#976546',
    border: '2px solid #000',
    padding: '16px 32px 24px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
 
});


const pollo=[
    {producto: 'FILETA DE POLLO A LA PARRILA 330g.', precio_por_unidad: '$26.900' , eliminar:'-' },
    {producto: 'CHULETA VALLUNA DE POLLO', precio_por_unidad: '$26.900' , eliminar:'-' },
    {producto: 'POLLO FLORENTINA 320g.', precio_por_unidad: '$31.900' , eliminar:'-' },

];

function Pollo() {

      const classes = useStyle()

      const [productos, setProductos] = useState({
        producto: "",
        precio:"",
        eliminar:"",
        agregar:""
      })
      
      const [modalEliminar, setModalEliminar]=useState(false);
      const [data, setData] = useState([])

      const peticionDelete=async()=>{
        await axios.delete(baseUrl+productos.id)
         .then(response=>{
        setData(data.filter(celda=>celda.id!==productos.id));
        abrirCerrarModalEliminar();
         })
      }
    
      const abrirCerrarModalEliminar=()=>{
        setModalEliminar(!modalEliminar);
      }
    
      const seleccionarCelda=(consola, caso)=>{
        setProductos(consola);
        abrirCerrarModalEliminar()
      }

      const bodyEliminar=(
        <div className={classes.modal}>
          <p>Esta seguro que desea eliminar este producto<b>{seleccionarCelda && seleccionarCelda.nombre}</b> ? </p>
          <div align="right">
            <Button color="bg-dark" onClick={()=>peticionDelete()} > <h2>Sí</h2> </Button>
            <Button onClick={()=>abrirCerrarModalEliminar()}> <h2>No</h2> </Button>
          </div>
        </div>
      )
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
                          {pollo.map(producto=>(
                            <TableRow>
                              <TableCell className={classes.celda}> {producto.producto} </TableCell>
                              <TableCell className={classes.celda}> {producto.precio_por_unidad} </TableCell>
                              <TableCell className={classes.celda}> <Delete  className={classes.iconos} onClick={()=>seleccionarCelda(producto, 'Eliminar')}/> </TableCell>
                             </TableRow>
                          ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Modal
                  open={modalEliminar}
                  onClose={abrirCerrarModalEliminar}>
                  {bodyEliminar}
                </Modal>
            </div>   
          </>
        );
      }
export default Pollo;