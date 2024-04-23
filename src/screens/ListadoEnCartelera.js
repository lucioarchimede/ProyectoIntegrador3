import React, { Component } from "react";
import PelisPopularCard from "../components/PelisPopularCard/PelisPopularCard";
import { options } from "../utils/constants";



class ListadoEnCartelera extends Component {
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
    
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // this.state.lista=json
        this.setState({ EnCartelera: json.results });
        console.log("enCartelerea: ", json.results.length);
      })
      .catch((err) => console.error("error:" + err));



    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" ,
        
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
        
        {this.state.popular
          ? this.state.popular.map((pelicula) => {
              
                return (
                  <section className="container--pelis">
                    {<PelisPopularCard data={pelicula} />}
                  </section>
                );
              
            })
          : false}
           
      </section>
    );
  }
}

export default ListadoEnCartelera;
