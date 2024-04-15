import React, { Component } from "react";
import CardsContainer from "../components/CardContainer/CardsContainer";
import PelisPopularCard from "../components/PelisPopularCard/PelisPopularCard";
import Loader from "../components/Loader/Loader";


class Favoritos extends Component {
  constructor() {
    super();
    this.state = {
      PelisFav: [],
    };
  }

  componentDidMount() {
    // MOVIES
    // Recupero el localStorage 
    let favoritosMovie = []
    let recuperoStorage = localStorage.getItem('favoritosMovie');

    if (recuperoStorage != null) {
      favoritosMovie = JSON.parse(recuperoStorage);
    }

    // MOVIES EN FAVORITOS
    fetch('https://api.themoviedb.org/3/movie/language=en-US')
      .then((response) => response.json())
      .then((data) => {
        let PelisFav = data.results.filter((contenido) => {
          return favoritosMovie.includes(contenido.id)
        })
        this.setState({
          PelisFav: PelisFav
        })
      })
      .catch((error) => console.log("El error es: " + error));
  }


  render() {
    console.log(this.state.PelisFav);
    return (
      <React.Fragment>
        <main className="">
          <h2>MOVIES</h2>
          {this.state.PelisFav.length > 0 ? (
            <div className="">
              {this.state.PelisFav.map((pelicula) => (<CardsContainer key={pelicula.id} pelicula={pelicula} />))}
            </div>
          ) : (
            <h3 className="">Agrega una película a tus favoritos</h3>
          )}

        </main>
      </React.Fragment>

    )
  }
}

export default Favoritos;