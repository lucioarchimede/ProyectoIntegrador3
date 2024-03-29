import { Component } from "react";
import PelisPopular from "../components/PelisPopular/PelisPopular"
import PelisPopularCard from "../components/PelisPopularCard/PelisPopularCard";




const info = [
  {
    titulo: "Inception",
    año: 2010,
    descripcion: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
    imagen: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    extra:"genero",
  },
  {
    titulo: "The Dark Knight",
    año: 2008,
    descripcion: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
    imagen: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    extra:"genero",
  },
  {
    titulo: "Interstellar",
    año: 2014,
    descripcion: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
    imagen: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    extra:"genero",
  },
  {
    titulo: "The Shawshank Redemption",
    año: 1994,
    descripcion: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
    imagen: "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
    extra:"genero",
  },
  {
    titulo: "Fight Club",
    año: 1999,
    descripcion: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
    imagen: "https://image.tmdb.org/t/p/w500/4yJxFkRr04csZlxhkwIv0KhT5CJ.jpg",
    extra:"genero",
  }
];


class Home extends Component {

  render() {
    return (
      <>
        <main>

          <h2>Peliculas populares</h2>
          <PelisPopular info={info} />
          <PelisPopularCard />

        </main>
      </>
    )
  }
}

export default Home