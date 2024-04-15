import React, { Component } from "react";
import CardsContainer from "../components/CardContainer/CardsContainer";
import PelisPopularCard from "../components/PelisPopularCard/PelisPopularCard";
import EnCartelera from "../components/EnCartelera/enCartelera";
import { Link } from "react-router-dom";

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
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzk3MTBiYjhkMjU2ZmEyYTI0ZDI0ZGRlODlkYWUzMyIsInN1YiI6IjY2MDZkMzQwNTkwMDg2MDE3Y2I3NjgwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oK44zq8dZ4DI3itac_GAI9Bqfcjn_fexUV70dtCVwjY",
      },
    };
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
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" ,
        
      options
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log("total populares: ", data.results);
        this.setState({
          popular: data.results,
        });
        // console.log('popular: ', data.results.length)
      })
      .catch((err) => console.log(err));
    console.log("fin populares");
    console.log("continuar");
  }

  // traerMasPeliculas() {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" +
  //       (this.state.page + 1)
  //   )
  //     .then((resp) => resp.json())
  //     .then((data) =>
  //       this.setState({
  //         page: this.state.page + 1,
  //         peliculas: this.state.peliculas.concat(data.results),
  //       })
  //     )
  //     .catch((err) => console.log(err));
  // }

  render() {
    return (
      <section className="containerCards">
        {this.state.popular
          ? this.state.popular.map((pelicula, idx) => {
              
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

// import React, { Component } from 'react'
// import "./style.css"
// import { Link } from 'react-router-dom'

// class PelisPopularCard extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       contenidoOculto: true,
//       botonTexto: 'Ver descripcion'
//     }
//     // console.log('Soy el constructor')
//   }
//   componentDidMount() {
//     console.log('Soy el componentDidMount')

//   }
//   componentDidUpdate() {
//     if (this.state.contenidoOculto === false) {

//     }
//   }
//   componentWillUnmount() {
//     // console.log('Soy el willUnmount')
//   }

//   ocultarYMostrarContenido() {
//     if (this.state.contenidoOculto === true) {
//       this.setState({
//         contenidoOculto: false,
//         botonTexto: 'Ocultar descripcion'
//       })
//     } else {
//       this.setState({
//         contenidoOculto: true,
//         botonTexto: 'Ver descripcion'
//       })
//     }
//   }

//   render() {
//     console.log('Soy el render')

//     return (
//       <div className='card-pelis'>
//          <img src={this.props.data.poster_path} alt="" />
//         <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`}/>
//         <h2>
//         {this.props.data.original_title}
//         </h2>

//         {
//           this.state.contenidoOculto ?
//             ''
//             :
//             <p>{this.props.data.overview}</p>
//         }
//          <Link to={"/detail/id/" + this.props.data.id}>
//                 Ver detalle
//             </Link>
//             <Link to={"/favoritos/id/" + this.props.data.id}>
//                 Aregar Favoritos
//             </Link>

//         <button onClick={() => this.ocultarYMostrarContenido()}>{this.state.botonTexto}</button>
//       </div>
//     )
//   }
// }

// export default PelisPopularCard
