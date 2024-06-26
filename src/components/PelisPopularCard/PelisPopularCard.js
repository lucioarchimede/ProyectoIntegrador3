import React, { Component } from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


class PelisPopularCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contenidoOculto: true,
      botonTexto: 'Ver descripcion'
      
    }
  }

  sacarDelCarrito(idPersonaje){
    let storage = localStorage.getItem('carrito')
    let storageParseado = JSON.parse(storage)
    let storageFiltrado = storageParseado.filter((elm)=> elm  !== idPersonaje)
    this.props.actualizarStateCarrito(storageFiltrado)
    let storageStringificado = JSON.stringify(storageFiltrado)
    localStorage.setItem('carrito', storageStringificado)
  }
  componentDidUpdate() {
    if (this.state.contenidoOculto === false) {

    }
  }
  componentWillUnmount() {
  }

  ocultarYMostrarContenido() {
    if (this.state.contenidoOculto === true) {
      this.setState({
        contenidoOculto: false,
        botonTexto: 'Ocultar descripcion'
      })
    } else {
      this.setState({
        contenidoOculto: true,
        botonTexto: 'Ver descripcion'
      })
    }
  }

  render() {
    return (
      <div className='card-pelis'>
        <img src={this.props.data.poster_path} alt="" />
        <img alt="" src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} />
        <h2>
          {this.props.data.original_title}
        </h2>
        {
          this.state.contenidoOculto ?
            ''
            :
            <p>{this.props.data.overview}</p>
        }
        <Link to={"/detail/id/" + this.props.data.id}>
          Ver detalle
        </Link>
        <Link to={"/favoritos/id/" + this.props.data.id}>
          Aregar Favoritos
        </Link>

        <button onClick={() => this.ocultarYMostrarContenido()}>{this.state.botonTexto}</button>
      </div>
    )
  }
}

export default PelisPopularCard
