import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './Components/Inicio.jsx';
import Menu from './Components/Menu.jsx';
import Ordenes from './Components/Ordenes.jsx';




function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
       <Route path="/menu" component={Menu} />
       <Route path="/inicio" exact component={Inicio} />
       <Route path="/ordenes" component={Ordenes} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
