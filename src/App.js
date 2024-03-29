import React from "react";
import {Switch,Route} from 'react-router-dom'

import Home from "./screens/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer"


function App() {



  let menu = [
    "Nombre de la aplicacion",
    'Home',
    'Favoritos',
  ]


  return (
    <React.Fragment>
    <Navbar elementosMenu={menu}/>
    <Switch>
    <Route path="/" exact={true} component={Home} />

    </Switch>

    <Footer /> 
  </React.Fragment>
);
}
export default App;
