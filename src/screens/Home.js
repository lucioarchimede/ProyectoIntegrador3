import { Component } from "react";
import { Link } from "react-router-dom";
import CardContainer from "../components/CardContainer/CardsContainer";
import './Screens.css'
import Loader from "../components/Loader/Loader";
import Search from "../components/SearchResults/SearchResults";
import { options } from "../utils/constants";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EnCartelera: [],
      popular: [],
    };
  }
  componentDidMount() {
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
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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
      <>
        <main>
          <Search/>
          
          <h2>Peliculas populares</h2>
          <div className="titulosHome">
            {this.state.popular.length === 0 ?
              < Loader /> :
              <>
                <CardContainer infoMovies={this.state.popular} />
                <Link to={"/populares/"}>Ver TODAS</Link>
              </>}


          </div>



          <h2>Peliculas en Cartelera </h2>
          <div className="titulosHome">
          {this.state.popular.length === 0 ?
              < Loader /> :
              <>
            <CardContainer infoMovies={this.state.EnCartelera} />
            <Link to={"/cartelera/"}>Ver todas</Link>
            </>}
          </div>

        </main>
      </>
    );
  }
}

export default Home;
