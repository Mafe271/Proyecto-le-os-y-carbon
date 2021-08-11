import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./Components/Inicio/Inicio.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import Ordenes from "./Components/Ordenes/Ordenes.jsx";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Ordenes/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
            <link to="/" className="btn btn-dark">
              Ordenes
            </link>
            <link to="/login" className="btn btn-dark mt-2">
              Login
            </link>
        <Switch>
          <Route path="/inicio" exact component={Inicio} />
          <Route path="/" exact component={Inicio} />
          <Route path="/menu" component={Menu} />
          <Route path="/ordenes" component={Ordenes} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

