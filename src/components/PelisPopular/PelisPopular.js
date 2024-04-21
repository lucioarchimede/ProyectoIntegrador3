import React, { Component } from 'react'
import PelisPopularCard from "../PelisPopularCard/PelisPopularCard"
import './style.css'


class PelisPopular extends Component {
    constructor(props) {
        super(props)
        this.state = {
      
            lista: [],
        }
    }

    componentDidMount() {
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzk3MTBiYjhkMjU2ZmEyYTI0ZDI0ZGRlODlkYWUzMyIsInN1YiI6IjY2MDZkMzQwNTkwMDg2MDE3Y2I3NjgwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oK44zq8dZ4DI3itac_GAI9Bqfcjn_fexUV70dtCVwjY'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                // this.state.lista=json
                this.setState({ lista: json.results })
            })
            .catch(err => console.error('error:' + err));
    }

    render() {
        return (
            <>


                <section className='container--pelis'>
                    {
                    
                        this.state.lista.map((elm, idx) =>
                            idx < 5 ?
                                <div key={idx}>
                                    <PelisPopularCard data={elm} />
                                </div> : " ")
                    }
                </section>

                
            </>
        )
    }
}

export default PelisPopular