import React, { Component } from 'react'
import EnCarteleraCard from '../EnCarteleraCard/enCarteleraCard';


class EnCartelera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            enCartel: []
        }
    }

    componentDidMount() {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
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
                this.setState({ enCartel: json.results })
            })
            .catch(err => console.error('error:' + err));
    }


    render() {
        return (
            <>


                <section className='container--pelis'>
                    {
                        this.state.enCartel.map((elm, idx) =>
                            idx < 5 ?
                                <div key={idx}>

                                    < EnCarteleraCard data={elm} />
                                    
                                </div> : " ")
                    }
                </section>

            </>
        )
    }
}


export default EnCartelera