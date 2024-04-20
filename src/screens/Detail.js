import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {

      pelicula: {},
    }

  }

  componentDidMount() {

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
        this.setState({
          pelicula: json,
          page: this.state.page + 1
        })
      })
      .catch(err => console.error('error:' + err));
  }

  render() {
    return (
      <main>
         


        <div>
       
          <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} />
     
        </div>

        <h3>{this.state.pelicula.original_title}</h3>
     

        <div>Calificacion:{this.state.pelicula.vote_average}
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
        
        <Link to={"/favoritos/id/" + this.props.data}>
                Aregar Favoritos
            </Link>
            

      </main>

    )
  }
}




