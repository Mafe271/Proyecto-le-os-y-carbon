import React, {useState} from "react"
import '../OrdenMenu/ordenMenu.css'
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import Desayunos from "../../Components/OrdenMenu/Desayunos";
import Entradas from '../../Components/OrdenMenu/Entradas' 
// import Res from "../../Components/OrdenMenu/Res";
// import Pescado from "../../Components/OrdenMenu/Pescado";
// import Pollo from "../../Components/OrdenMenu/Pollo";
// import Ensaladas from "../OrdenMenu/Ensaladas"
// import Sandwiches from "../../Components/OrdenMenu/Sandwiches";
// import Cocteles from "../../Components/OrdenMenu/Cocteles";
// import Postres from "../../Components/OrdenMenu/Postres";
// import Bebidas from '../OrdenMenu/Bebidas'


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
  const [toggle, setToggle] = useState(true);
 
  function Desayuno() {
    setToggle(!toggle);
       console.log(toggle);
  }
  // function Entradas() {
  //   setToggle(!toggle);
  //   console.log(toggle);
  // }
  // function Res() {
  //  setToggle(!toggle);
  // console.log(toggle);
  // }
  // function Pescado() {
  //  var containerPescado = reactDom.findDOMNode(document.getElementById('fish'));
  //  containerPescado.classList.add('hidden');
  // }
  // function Pollo() {
  //  var containerPollo = reactDom.findDOMNode(document.getElementById('chicken'));
  //  containerPollo.classList.add('hidden');
  // }
  // function Ensaladas() {
  //  var containerEnsaladas = reactDom.findDOMNode(document.getElementById('salad'));
  //  containerEnsaladas.classList.add('hidden');
  // }
  // function Sandwiches() {
  //  var containerSandwiches = reactDom.findDOMNode(document.getElementById('sandwich'));
  //  containerSandwiches.classList.add('hidden');
  // }
  // function Cocteles() {
  //  var containerCocteles = reactDom.findDOMNode(document.getElementById('cocktails'));
  //  containerCocteles.classList.add('hidden');
  // }
  // function Postres() {
  //  var containerPostres = reactDom.findDOMNode(document.getElementById('desserts'));
  //  containerPostres.classList.add('hidden');
  // }
  // function Bebidas() {
  //  var containerBebidas = reactDom.findDOMNode(document.getElementById('drinks'));
  //  containerBebidas.classList.add('hidden');
  // }
  

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

  // const objetoPedido = {}
  //       pedido.forEach(elemento => {
  //           Object.assign(
  //               objetoPedido, 
  //               {[elemento.nombre]:{apellido: elemento.apellido, edad: elemento.edad}}
  //               )
  //       })

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

            <TableBody>
              {data.map((celda, index) => (
                <TableRow key={index}>
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
        <button className="desayunos" onClick={Desayuno}>  
          Desayunos
        </button>
         <div className={ toggle ? 'active': 'disable'}>
           {<Desayunos/>}
         </div>
        <button className="entradas" onClick={Entradas}>  
          Entradas
        </button> 
        {/* <div className={ toggle ? 'active': 'disable'}>
           {<Entradas/>}
         </div>   */}
        <button className="res" onClick="{Res}">
          Res
        </button>
        {/* <div className="ContainerRes" id='meat' >
           {<Res/>}
         </div> */}
        <button className="pescado" onClick="{Pescado}"> 
          Pescado
        </button>
        {/* <div className="ContainerPescado" id='fish' >
           {<Pescado/>}
         </div> */}
      </div>
      <div className="btnSecond">
        <button className="pollo" onClick="{Pollo}"> 
          Pollo
        </button>
        {/* <div className="ContainerPollo" id='chicken' >
           {<Pollo/>}
         </div> */}
        <button className="ensaladas" onClick="{Ensaladas}">
          Ensaladas
        </button>
        {/* <div className="ContainerEnsaladas" id='salad' >
           {<Ensaladas/>}
         </div> */}
        <button className="sandwiches" onClick="{Sandwiches}">
          Sandwiches
        </button>
        {/* <div className="ContainerSandwiches" id='Sandwich'>
           {<Sandwiches/>}
         </div> */}
      </div>
      <div className="btnThird">
        <button className="coctel" onClick="{Cocteles}">
          Cócteles
        </button>
        {/* <div className="ContainerCocteles" id='cocktails'>
           {<Cocteles/>}
         </div> */}
        <button className="postres" onClick="{Postres}">
          Postres
        </button>
        {/* <div className="ContainerPostres" id='desserts'>
           {<Postres/>}
         </div> */}
      </div>
      <div className="btnLast">
        <button className="bebidas" onClick="{Bebidas}">
          Bebidas
        </button>
        {/* <div className="ContainerBebidas" id='drinks' >
           {<Bebidas/>}
         </div> */}
      </div>
    </div>
  );
}

export default OrdenMenu;
