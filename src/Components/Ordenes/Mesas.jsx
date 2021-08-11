import React, { useState } from 'react';
import { Modal, Button, colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import '../../Components/Ordenes/ordenes.css'
import { auth } from "../../firebase";
import mesa from "../../utils/images/mesaOrdenes.png";


const useStyles=makeStyles((theme)=>({
  modal:{
      backgroundColor: '#F5BB59',
      position: 'absolute',
      width: 400,
      border: '2px solid black',
      boxShadow: '55px 40px 23px -11px rgba(17, 10, 17, 0.65)',
      padding: '16px 32px 24px',
      top: '50%',
      left: '50%',  
      transform: 'translate(-50%, -50%)'
  },
  entrar:{
    color:'white',
    marginTop:'100px'
  }
}))    
function Mesas() {
    const styles = useStyles(); 

    const [modal, setModal]=useState(false);

    const abrirCerrarModal =()=> (
        setModal(!modal)
    )
    
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
   
  const usuarioRegistrado = (e) =>{ 
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((res) => 
     { alert("usuario registrado")
      window.location.replace("/ordenMenu")}
      );    
  }
  const body=(
    <div className={styles.modal}>
    <h2>Login</h2>
    <form onSubmit={usuarioRegistrado} className="form-group mt-3">
      <input
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className="form-control mt-3"
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => {
          setPass(e.target.value)
        }}
        type="password"
        className="form-control mt-3"
        placeholder="contraseña" 
      />
      <input
        type="submit"
        className="btn btn-block enter"
        value="Sing in"                        
      /> 
      <input
        type="submit"
        className="btn btn-block cancel"
        value="Cancelar"
        onClick={()=>abrirCerrarModal()} 
      /> 
    </form> 
    </div> 
)                      

  return (
     
     <div className='Zona'>
        <div className="zona">
           <button className="link" onClick={()=>abrirCerrarModal()}>
                <img className="mesa1" src={mesa} alt="mesa" />
           </button>,
           <button className="link" onClick={()=>abrirCerrarModal()}>
                <img className="mesa2" src={mesa} alt="mesa" />
           </button>
        </div>

        <div className="zona">
           <button className="link" onClick={()=>abrirCerrarModal()}>
               <img className="mesa1" src={mesa} alt="mesa" />
           </button>
           <button className="link" onClick={()=>abrirCerrarModal()}>
               <img className="mesa2" src={mesa} alt="mesa" />
           </button> 
        </div> 

        <div className="zona">
           <button className="link" onClick={()=>abrirCerrarModal()}>
               <img className="mesa1" src={mesa} alt="mesa" />
           </button>
           <button className="link" onClick={()=>abrirCerrarModal()}>
               <img className="mesa2" src={mesa} alt="mesa" />
           </button>
       </div>
       <Modal
           open={modal}
           onClose={abrirCerrarModal}>
               {body}
       </Modal>
     </div> 
     
    );
};

export default Mesas;