import React from "react";
import {Switch,Route} from 'react-router-dom'

import Home from "./screens/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer"
import Buscador from "./components/Buscador/buscador";
import Detail from "./screens/Detail";
import ListadoPeliculas from "./screens/ListadoPeliculas";


function App() {



  let menu = [
    "Nombre de la aplicacion",
    'Home',
    'Favoritos',
  ]


  return (
    <React.Fragment>
    <Navbar elementosMenu={menu}/>
    <Buscador />
    <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path='/detail/id/:id' component={Detail} />
    <Route path='/populares/' component={ListadoPeliculas} />
    <Route path='/cartelera/' component={ListadoPeliculas} />

    </Switch>
    
    <Footer /> 
  </React.Fragment>
);
}
export default App;
