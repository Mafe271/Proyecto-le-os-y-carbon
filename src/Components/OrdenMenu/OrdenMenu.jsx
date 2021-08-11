import React from "react";
import '../OrdenMenu/ordenMenu.css'
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import Desayunos from "../../Components/OrdenMenu/Desayunos";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,   
  TableHead,
  TableRow,
}                   

from "@material-ui/core";

const data = [
  // {cantidad_por_mesa: "2", producto: "Almojabana", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  // {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  // {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  // {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  // {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  // {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  // {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  // {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
];

function OrdenMenu() {
  
const useStyle = makeStyles({
  containerTable: {
    minWidth: 700,                
    margin: '50px 50px 100px',    
  },
  cellTitle:{
    fontSize: '23px',
    color: 'bisque',
    fontFamily: 'roboto slab',
  },
  celda:{
    fontSize: '20px',
    color: 'beige',
    paddingLeft: '50px',
    fontFamily: 'roboto slab',
},
});

  const classes = useStyle()

  return (
    <div className="tabla">
      <h1> Pepito Perez </h1>
      <div className={classes.containerTable}>   
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.cellTitle}> Cantidad por mesa </TableCell>
                <TableCell className={classes.cellTitle}> Producto </TableCell>
                <TableCell className={classes.cellTitle}> Precio por unidad</TableCell>
                <TableCell className={classes.cellTitle}> Subtotal </TableCell>
              </TableRow>
            </TableHead>

            <TableBody cla>
              {data.map((celda) => (
                <TableRow>
                  <TableCell className={classes.celda}> {celda.cantidad_por_mesa}</TableCell>
                  <TableCell className={classes.celda}> {celda.producto} </TableCell>
                  <TableCell className={classes.celda}> {celda.precio_por_unidad} </TableCell>
                  <TableCell className={classes.celda}> {celda.subtotal} </TableCell>
                  <TableCell className={classes.celda}> {celda.total} </TableCell>
                </TableRow>
              ))}
            </TableBody>  
          </Table>
        </TableContainer>
      </div>

      <button className='menus' onClick="menus">
        Menú
      </button>
    
      <Link className="volver" to="/Ordenes"> 
        <button>
           Volver 
        </button>      
      </Link>
      <div className="bttn">
        <button className="finalizar " onClick="menus">
          Finalizar
        </button>
      </div>

      <div className="btnFirst">
        <button className="desayunos" onClick='desayunos'>
          Desayunos
        </button>
        <button className="entradas" onClick="Entradas">
          Entradas
        </button>
        <button className="res" onClick="Res">
          Res
        </button>
        <button className="pescado" onClick="Pescado">
          Pescado
        </button>
      </div>
      <div className="btnSecond">
        <button className="pollo" onClick="Pollo">
          Pollo
        </button>
        <button className="sopas" onClick="Sopas">
          Sopas
        </button>
        <button className="sandwiches" onClick="Sandwiches">
          Sandwiches
        </button>
      </div>
      <div className="btnThird">
        <button className="coctel" onClick="Cócteles">
          Cócteles
        </button>
        <button className="postres" onClick="Postres">
          Postres
        </button>
      </div>
      <div className="btnLast">
        <button className="bebidas" onClick="Bebidas">
          Bebidas
        </button>
      </div>
      <Desayunos />
    </div>
  );
}


export default OrdenMenu;
