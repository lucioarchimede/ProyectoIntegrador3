import React, { Component } from "react";
import CardsContainer from "../components/CardContainer/CardsContainer";
import "./Screens.css";
import { options } from "../utils/constants";
import Loader from "../components/Loader/Loader";
import DetailCard from "../components/DetailCard/detailCard";

class ScreenSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: this.props.match.params.busqueda,
      result: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}`,
      options
    )
      .then((response) => response.json())
      .then((resultadosDBusqueda) =>{
        console.log('resultado ', resultadosDBusqueda)
        this.setState({ result: resultadosDBusqueda.results })
      }
        
      )
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        {this.state.result.length > 0 ? 
          <ul className="containerCards">
            {this.state.result.map(
              (resultado) =>
                  <section className="" id="">
                    <DetailCard
                      id={resultado.id}
                      imagen={resultado.poster_path}
                      nombre={resultado.original_title}
                      fechaEstreno={resultado.release_date}
                      resumen={resultado.overview}
                    />
                  </section>
                
            )}
          </ul>
        : 
          <Loader />
        }
      </>
    );
  }
}

export default ScreenSearch;

{
  /* <main className="searchContainer">
          <h2 className="tituloResult">Resultado para: '{this.props.match.params.busqueda}' </h2>
              {this.state.result.length > 0 ? 
              <div className="categoria"> 
              <CardsContainer verMasMovies={this.state.result}/> 
              </div>
              : 
              <h3 className="errorSearch">
                Disculpe, no pudimos encontrar nincuna pelicula llamada:  "{this.props.match.params.busqueda}"
              </h3> }
        </main> */
}
