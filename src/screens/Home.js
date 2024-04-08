import { Component } from "react";
import PelisPopular from "../components/PelisPopular/PelisPopular"
import EnCartelera from "../components/EnCartelera/enCartelera";
import { Link } from "react-router-dom";


class Home extends Component {

  render() {
    return (
      <>
        <main>

          <h2>Peliculas populares</h2>
          <PelisPopular />
          <Link to={"/populares/"}>
                Ver TODAS
            </Link>
            

          <h2>Peliculas en Cartelera </h2>
          <EnCartelera />
          <Link to={"/favoritos/"}>
                Aregar Favoritos
            </Link>



        </main>
      </>
    )
  }
}

export default Home