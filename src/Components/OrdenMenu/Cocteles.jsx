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
                          {cocteles.map(producto=>(
                            <TableRow>
                              <TableCell className={classes.celda}> {producto.producto} </TableCell>
                              <TableCell className={classes.celda}> {producto.precio_por_unidad} </TableCell>
                              <TableCell className={classes.celda}><Delete  className={classes.iconos} onClick={()=>seleccionarCelda(producto, 'Eliminar')}/> </TableCell>
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

export default Cocteles;