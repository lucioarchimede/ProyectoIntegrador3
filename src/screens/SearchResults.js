import React, { Component } from "react";
import CardsContainer from "../components/CardContainer/CardsContainer";
import "./Screens.css"

class ScreenSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        result:[]
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}`)
            .then(response => response.json())
            .then(data => this.setState(
                { result: data.results }
            ))
            .catch(error => console.log(error))
  }
  

  render() {
    return(
        <main className="searchContainer">
          <h2 className="tituloResult">Resultado para: '{this.props.match.params.query}' </h2>
              {this.state.result.length > 0 ? 
              <div className="categoria"> 
              <CardsContainer verMasMovies={this.state.result}/> 
              </div>
              : 
              <h3 className="errorSearch">
                Disculpe, no pudimos encontrar nincuna pelicula llamada:  "{this.props.match.params.query}"
              </h3> }
        </main>

    ) 
  }
}

export default ScreenSearch;