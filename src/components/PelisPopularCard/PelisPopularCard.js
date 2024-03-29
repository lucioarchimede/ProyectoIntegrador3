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
    // console.log('Soy el constructor')
  }
  componentDidMount() {
    console.log('Soy el componentDidMount')
    
    // const fetch = require('node-fetch');

    // const url = 'https://api.themoviedb.org/3/authentication';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzk3MTBiYjhkMjU2ZmEyYTI0ZDI0ZGRlODlkYWUzMyIsInN1YiI6IjY2MDZkMzQwNTkwMDg2MDE3Y2I3NjgwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oK44zq8dZ4DI3itac_GAI9Bqfcjn_fexUV70dtCVwjY'
    //   }
    // };
    
    // fetch(url, options)
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.error('error:' + err));

   


  }
  componentDidUpdate() {
    if (this.state.contenidoOculto === false) {
      
    }
  }
  componentWillUnmount() {
    // console.log('Soy el willUnmount')
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
    console.log('Soy el render')

    return (
      <div className='card-pelis'>
         <img src={this.props.data.poster_path} alt="" />
        <img src={`https://api.themoviedb.org/3/movie/popular${this.props.data.poster_path}`} alt={`${this.props.data.original_title}`} />

        
        {
          this.state.contenidoOculto ?
            ''
            :
            <p>{this.props.data.overview}</p>
        }
         <Link to={"/detail/id/" + this.props.data.id}>
                Ver detalle
            </Link>
            
            <Link to={"/detail/id/" + this.props.data.id}>
                Agregar Favoritos
            </Link>

        <button onClick={() => this.ocultarYMostrarContenido()}>{this.state.botonTexto}</button>
      </div>
    )
  }
}

export default PelisPopularCard
