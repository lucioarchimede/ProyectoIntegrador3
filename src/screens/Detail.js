import React, { Component } from 'react'
import DetailCard from '../components/DetailCard/detailCard'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //   contenidoOculto: true,
      //   botonTexto: 'Mostrar contenido',
      pelicula: {},
    }
    // console.log('Soy el constructor')
  }

  componentDidMount() {
    const fetch = require('node-fetch');

    const url = 'https://api.themoviedb.org/3/movie/' + this.props.match.params.id + 'language=en-US'
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzk3MTBiYjhkMjU2ZmEyYTI0ZDI0ZGRlODlkYWUzMyIsInN1YiI6IjY2MDZkMzQwNTkwMDg2MDE3Y2I3NjgwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oK44zq8dZ4DI3itac_GAI9Bqfcjn_fexUV70dtCVwjY'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        // this.state.lista=json
        this.setState({
          pelicula: json,
          page: this.state.page + 1
        })
      })
      .catch(err => console.error('error:' + err));
  }







  // componentDidMount() {
  //   console.log("props" + JSON.stringify(this.props));
  //   fetch('https://api.themoviedb.org/3/movie/popular/' + this.props.match.params.id)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data)
  //       this.setState({
  //         peliculas: data.results,
  //         page: this.state.page + 1
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }


  render() {
    // let id = this.props.match.params.id
    return (
      <main>


        <div>
          {this.state.pelicula.poster_path}
        </div>

        <h3>{this.state.pelicula.original_title}</h3>
     

        <div>Calificacion:{this.state.pelicula.rating}
        </div>

        <div>
           Fecha de estreno: {this.state.pelicula.release_date}
        </div>
        <div>
          Duración: {this.state.pelicula.runtime}
        </div>

        <div>
          Sinopsis: {this.state.pelicula.overview}
        </div>

        <div>
          Genero: {this.state.pelicula.genre}
        </div>

      </main>

    )
  }
}
