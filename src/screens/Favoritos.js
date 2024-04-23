import React, { Component } from "react";
import CardsContainer from "../components/CardContainer/CardsContainer";

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PelisFav: [],
      id: this.props.match.params.id,
      pelicula: {}
    };
  }


  componentDidMount() {
    let listaFavoritos = [];
    let recuperoStorage = localStorage.getItem('favoritosMovie');
    console.log("Recupero storage ", recuperoStorage);
    if (recuperoStorage != null) {
      listaFavoritos = JSON.parse(recuperoStorage);
    }
    listaFavoritos.push(this.state.id);
    localStorage.setItem("favoritosMovie", JSON.stringify(listaFavoritos));
    console.log("Pelis Fav" + listaFavoritos);
  
    this.fetchPopularMovies(listaFavoritos);
    this.fetchTopRatedMovies(listaFavoritos);
  }
  
  fetchPopularMovies(listaFavoritos) {
    const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer your_api_token",
      },
    };
  
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results);
        let filtro = json.results.filter(element => listaFavoritos.includes("" + element.id));
        this.setState({ PelisFav: filtro });
      })
      .catch((err) => console.error("Error: " + err));
  }
  
  fetchTopRatedMovies(listaFavoritos) {
    const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer your_api_token",
      },
    };
  
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results);
        let filtro = json.results.filter(element => listaFavoritos.includes("" + element.id));
        this.setState({ PelisFav: this.state.PelisFav.concat(filtro) });
      })
      .catch((err) => console.error("Error: " + err));
  }
  


  render() {
    return (
      
      <React.Fragment>
         
        <main className="">
      
          <h2>MOVIES</h2>
          <h3 className="container">Agrega una película a tus favoritos</h3>
          <CardsContainer infoMovies={this.state.PelisFav} />
      



        </main>
      </React.Fragment>
       

    )
  }
}

export default Favoritos;