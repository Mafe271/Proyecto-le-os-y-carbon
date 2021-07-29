import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './Components/Inicio/Inicio.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Ordenes from './Components/Ordenes/Ordenes.jsx';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
       <Route path="/inicio" exact component={Inicio} />
       <Route path="/menu" component={Menu} />
       <Route path="/ordenes" component={Ordenes} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
