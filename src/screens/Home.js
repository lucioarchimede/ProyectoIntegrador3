import { Component } from "react";
import PelisPopular from "../components/PelisPopular/PelisPopular"
import EnCartelera from "../components/EnCartelera/enCartelera";


class Home extends Component {

  render() {
    return (
      <>
        <main>

          <h2>Peliculas populares</h2>
          <PelisPopular />
          

          <h2>Peliculas en Cartelera </h2>
          <EnCartelera />
          

        </main>
      </>
    )
  }
}

export default Home