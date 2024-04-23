import React, { Component } from "react";
import "./Screens.css";
import { options } from "../utils/constants";
import Loader from "../components/Loader/Loader";
import DetailCard from "../components/DetailCard/detailCard";
import Search from "../components/SearchResults/SearchResults";

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
      <Search/>
        {this.state.result.length > 0 ? 
          <ul className="buscador">
            {this.state.result.map(
              (resultado) =>
                  <section className="buscador" id="">
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
