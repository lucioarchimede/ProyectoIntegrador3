import React, {Component} from "react"
import {Link} from 'react-router-dom'
import './style.css'

class SearchFiltro extends Component {
    constructor(props) {
        super(props);
        this.state = {
          busqueda: "",
          result: [],
          backup : []
        };
      }

detenerDefault(evento) {
    evento.preventDefault();
  }

  guardarInput(evento) {
    this.setState(
      {
        busqueda: evento.target.value,
      },
      () => this.props.filtrarPeliculas(this.state.busqueda)
    );
  }

  filtrarPeliculas(busqueda){
    let peliculasFiltradas = this.state.result.filter(
        (elm)=>elm.name.toLowerCase().includes(busqueda.toLowerCase()))
        this.setState({
            result: peliculasFiltradas
        })
        this.setState({
            backup: peliculasFiltradas
        })
  } 

render() {
    return (
      <div className="search-container">
      <form onSubmit={(evento) => this.detenerDefault(evento)}>
        <input
        className="search-input"
          type="text"
          onChange={(evento) => this.guardarInput(evento)}
          value={this.state.busqueda}
          placeholder="Busque su pelicula aqui..."
        />
        
        {console.log(this.state.busqueda)}
      </form>
      </div>
    );
  }


}


export default SearchFiltro