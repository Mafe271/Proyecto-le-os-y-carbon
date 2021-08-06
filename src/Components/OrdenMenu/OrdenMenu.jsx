import React from "react";
import '../OrdenMenu/ordenMenu.css'
import { styled } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Desayunos from "../../Components/OrdenMenu/Desayunos";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,   
  TableHead,
  TableRow,
} 

from "@material-ui/core";

const data = [
  {cantidad_por_mesa: "2", producto: "Almojabana", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
  {cantidad_por_mesa: "2", producto: "Caldo", precio_por_unidad: "4.000$", subtotal: "8.000$", },
];

function ordenMenu() {
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


  return (
    <div className="tabla">
      <h1> Pepito Perez </h1>
      <div className="containerTable">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className='celda'> Cantidad por mesa </TableCell>
                <TableCell className='celda'> Producto </TableCell>
                <TableCell className='celda'> Precio por unidad</TableCell>
                <TableCell className='celda'> Subtotal </TableCell>
              </TableRow>
            </TableHead>

            <TableBody cla>
              {data.map((celda) => (
                <TableRow>
                  <TableCell> {celda.cantidad_por_mesa} </TableCell>
                  <TableCell> {celda.producto} </TableCell>
                  <TableCell> {celda.precio_por_unidad} </TableCell>
                  <TableCell> {celda.subtotal} </TableCell>
                  <TableCell> {celda.total} </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <button className='menus' onClick="menus">
        Menú
      </button>
      <button className="volver" onClick='menus'>
        Volver    
      </button>
      <div className="btn">
        <button className="finalizar" onClick="menus">
          Finalizar
        </button>
      </div>

      <div className="btnFirst">
        <button className="desayunos" onClick="Desayunos">
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

export default ordenMenu;
