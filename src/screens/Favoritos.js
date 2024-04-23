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

    let listaFavoritos = []
    let recuperoStorage = localStorage.getItem('favoritosMovie');
    console.log("REcupero storage ", recuperoStorage);
    if (recuperoStorage != null) {
      listaFavoritos = JSON.parse(recuperoStorage);

    }
    listaFavoritos.push(this.state.id)
    localStorage.setItem("favoritosMovie", JSON.stringify(listaFavoritos))
    console.log("pelis Fav" + listaFavoritos);

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzk3MTBiYjhkMjU2ZmEyYTI0ZDI0ZGRlODlkYWUzMyIsInN1YiI6IjY2MDZkMzQwNTkwMDg2MDE3Y2I3NjgwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oK44zq8dZ4DI3itac_GAI9Bqfcjn_fexUV70dtCVwjY",
      },
    };
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

      fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results);
        let filtro = []
    
        json.results.forEach(element => {
          if (listaFavoritos.includes(""+element.id)) {
            filtro.push(element)
          }
        })
    
        this.setState({ PelisFav: filtro });
    
      })
      .catch((err) => console.error("error:" + err));  
      
  }


  render() {
    return (
      
      <React.Fragment>
         
        <main className="">
      
          <h2>MOVIES</h2>
          <h3 className="container">Agrega una película a tus favoritos</h3>
          <CardsContainer infoMovies={this.state.PelisFav}
           />
      

      

        </main>
      </React.Fragment>
       

    )
  }
}

export default Favoritos;