import  React, { Component } from "react";
import PelisPopular from "../components/PelisPopular/PelisPopular"
import EnCartelera from "../components/EnCartelera/enCartelera";
import { Link } from "react-router-dom";


class ListadoPeliculas extends Component {

  constructor(props){
    super(props)
    this.state = {
        peliculas:{},
        page:0
    }
}
  

  traerMasPeliculas() {
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" + (this.state.page + 1))
      .then(resp => resp.json())
      .then(data => this.setState({
        page: this.state.page + 1,
        peliculas: this.state.peliculas.concat(data.results)
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <main>
          <h2>Listado peliculas</h2>
          <PelisPopular />
          <div>
                <button onClick={()=> this.traerMasPeliculas()}>
                    Mas Peliculas
                </button>
            </div>

        </main>
      </>
    )
  }
}

export default ListadoPeliculas




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