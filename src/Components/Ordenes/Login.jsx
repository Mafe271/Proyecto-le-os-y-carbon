import React, { useState } from "react";
import { auth } from "../../firebase";

const Login = () => {
  
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const registrarUsuario = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((res) => alert("usuario registrado"));
  };
  return (
 
    <div className="mt-4">
      <h2>Login</h2>
      <form onSubmit={registrarUsuario} className="form-group mt-3">
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
          className="btn btn-block btn-info"
          value="Registrar"
        />
      </form>
    </div>
  );
};



export default Login;
