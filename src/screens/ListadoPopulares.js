import React, { Component } from "react";
import PelisPopularCard from "../components/PelisPopularCard/PelisPopularCard";
import Loader from "../components/Loader/Loader";

class ListadoTopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: [],
      EnCartelera: [],
      page: 0,
      max: props.max,
    };
  }
  componentDidMount() {
    console.log('comienzo')
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
        console.log(json);
        this.setState({ EnCartelera: json.results });
        console.log("enCartelerea: ", json.results.length);
      })
      .catch((err) => console.error("error:" + err));
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" ,
        
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


  render() {
    return (
      <section className="containerCards">
          {this.state.popular.length === 0 ?
              < Loader /> :
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
          </>}
      </section>
    );
  }
}

export default ListadoTopRated;