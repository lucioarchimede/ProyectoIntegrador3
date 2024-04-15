import { Component } from "react";
import PelisPopular from "../components/PelisPopular/PelisPopular";
import EnCartelera from "../components/EnCartelera/enCartelera";
import { Link } from "react-router-dom";
import CardsContainer from "../components/CardContainer/CardsContainer";
import './Screens.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EnCartelera: [],
      popular: [],
    };
  }
  componentDidMount() {
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
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1" +
        (this.state.page + 1),
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

  render() {
    return (
      <>
        <main>
          <h2>Peliculas populares</h2>
          <div className="titulosHome">
          <CardsContainer infoMovies={this.state.popular} />
          <Link to={"/populares/"}>Ver TODAS</Link>
          </div>


          <h2>Peliculas en Cartelera </h2>
          <div className="titulosHome">
          <CardsContainer infoMovies={this.state.EnCartelera} />
          <Link to={"/cartelera/"}>Ver todas</Link>
          </div>

        </main>
      </>
    );
  }
}

export default Home;
