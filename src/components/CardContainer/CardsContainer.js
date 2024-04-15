import React, { Component } from "react";
import PelisPopularCard from "../PelisPopularCard/PelisPopularCard";
import './CardsContainer.css'

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoMovies: this.props.infoMovies,
    };
  }

  render() {
    return (
      <section className="containerCards">
        {this.props.infoMovies
          ? this.props.infoMovies.map((pelicula, idx) => {
              if (idx < 5) {
                return (
                  <section className="container--pelis">
                    {<PelisPopularCard data={pelicula} />}
                  </section>
                );
              }
            })
          : false}
      </section>
    );
  }
}

export default CardsContainer;
