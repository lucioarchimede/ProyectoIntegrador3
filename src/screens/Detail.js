import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Screens.css';


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
      <main className="detail-main">
        <div>
          <img className="detail-poster" src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt="Poster" />
        </div>

        <h3 className="detail-title">{this.state.pelicula.original_title}</h3>

        <div className="detail-rating">Calificacion: {this.state.pelicula.vote_average}</div>
        <div className="detail-release-date">Fecha de estreno: {this.state.pelicula.release_date}</div>
        <div className="detail-runtime">Duración: {this.state.pelicula.runtime}</div>
        <div className="detail-overview">Sinopsis: {this.state.pelicula.overview}</div>

        <Link className="detail-favorites-link" to={"/favoritos/id/" + this.props.match.params.id}>Agregar Favoritos</Link>
      
      </main>
    )
  }
}