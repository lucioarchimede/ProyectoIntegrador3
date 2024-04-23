import React, { Component } from "react";
import { options } from "../utils/constants";
import SearchFiltro from "../components/SearchResults/SearchFilter";
import Loader from "../components/Loader/Loader";
import EnCarteleraCard from "../components/EnCarteleraCard/enCarteleraCard";



class ListadoEnCartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backup:[],
      EnCartelera: [],
      page: 1,
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
          EnCartelera: data.results,
        });
      })
      .catch((err) => console.log(err));
    console.log("fin populares");
    console.log("continuar");
  }
  traerMasPelis(){
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=7384aa0b23ce68ba408f9921ee711e62&page=${(this.state.page + 1)}`)
    .then(res => res.json())
        .then(data => this.setState({
            EnCartelera : this.state.EnCartelera.concat(data.results),
            page: this.state.page + 1,
            backup : this.state.backup.concat(data.results)
        }))
        .catch(err => console.log(err))
    }
    
  filtroPeliculas(busqueda){
    let peliculasFiltradas = this.state.EnCartelera.filter(
        (elm)=>elm.title.toLowerCase().includes(busqueda.toLowerCase()))
        this.setState({
            EnCartelera: peliculasFiltradas
        })
  } 

  render() {
    return (
      <>
      <SearchFiltro filtroPeliculas = {(busqueda) => this.filtroPeliculas(busqueda)}/>
      <section className="containerCards">
      {this.state.EnCartelera.length === 0 ? (
            <Loader />
          ) : (
            <>
              {this.state.EnCartelera
                ? this.state.EnCartelera.map((pelicula, idx) => {
                    return (
                      <section className="container--pelis">
                        {<EnCarteleraCard data={pelicula} />}
                      </section>
                    );
                  })
                : false}
                <button  className="Ver-mas" onClick={()=>this.traerMasPelis()}> Mas pelis En cartelera</button> 
            </>
          )}
        </section>
      </>
      
    );
  }
}

export default ListadoEnCartelera;
