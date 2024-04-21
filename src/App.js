import React from "react";
import {Switch,Route} from 'react-router-dom'

import Home from "./screens/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer"
import SearchResults from "./components/SearchResults/SearchResults";
import Detail from "./screens/Detail";
import ListadoEnCartelera from "./screens/ListadoEnCartelera";
import ListadoTopRated from "./screens/ListadoTopRated";



function App() {



  let menu = [
    "Nombre de la aplicacion",
    'Home',
    'Favoritos',
  ]


  return (
    <React.Fragment>
    <Navbar elementosMenu={menu}/>
    <SearchResults />
    <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path='/detail/id/:id' component={Detail} />
    <Route path='/top_rated/' component={ListadoTopRated} />
    <Route path='/cartelera/' component={ListadoEnCartelera} />

    </Switch>
    
    <Footer /> 
  </React.Fragment>
);
}
export default App;
