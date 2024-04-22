import React, {Component} from "react"
import './style.css'
import { Link } from "react-router-dom";

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            busqueda: '',
            result: []
        }
    }
    detenerDefault(evento) {
        evento.preventDefault();
      }
    
    
    saveInput(event){
        this.setState({busqueda: event.target.busqueda})
    }
    render(){
        return(
            <div class="wrap" onSubmit={(evento) => this.detenerDefault(evento)}>
              <div class="search">
                  <input type="text" class="searchTerm" placeholder="Ingresa el titulo de la peli..." onChange={(evento) => this.saveInput(evento)}
          busqueda={this.state.busqueda}/>
                  <Link to={`/busqueda/${this.state.busqueda}`}><button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
                </Link>
              </div>
            </div>
        )
    }
}
export default Search;