import React, { Component } from "react";
import PelisPopularCard from "../components/PelisPopularCard/PelisPopularCard";
import Loader from "../components/Loader/Loader";
import SearchFiltro from "../components/SearchResults/SearchFilter";
import { options } from "../utils/constants";

class ListadoTopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backup: [],
      popular: [],
      EnCartelera: [],
      page: 0,
      max: props.max,
    };
  }
  componentDidMount() {
    console.log("comienzo");
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ EnCartelera: json.results });
        console.log("enCartelerea: ", json.results.length);
      })
      .catch((err) => console.error("error:" + err));
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",

      options
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log("total populares: ", data.results);
        this.setState({
          popular: data.results,
        });
      })
      .catch((err) => console.log(err));
    console.log("fin populares");
    console.log("continuar");
  }
  filtrarPeliculas(busqueda){
    let peliculasFiltradas = this.state.popular.filter(
        (elm)=>elm.title.toLowerCase().includes(busqueda.toLowerCase()))
        this.setState({
            popular: peliculasFiltradas
        })
  } 

  render() {
    return (
      <>
        <SearchFiltro filtrarPeliculas = {(busqueda) => this.filtrarPeliculas(busqueda)}/>
        <section className="containerCards">
          {this.state.popular.length === 0 ? (
            <Loader />
          ) : (
            <>
              {this.state.popular
                ? this.state.popular.map((pelicula, idx) => {
                    return (
                      <section className="container--pelis">
                        {<PelisPopularCard data={pelicula} />}
                      </section>
                    );
                  })
                : false}
            </>
          )}
        </section>
      </>
    );
  }
}

export default ListadoTopRated;
