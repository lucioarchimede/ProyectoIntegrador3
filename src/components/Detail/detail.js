import React, { Component } from 'react'
import DetailCard from "../DetailCard/detailCard"



class Detail extends Component {


  constructor(props) {
    super(props)
    this.state = {
      peliculas: [],
      page: 0
    }
  }
  
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({
          peliculas: data.results,
          page: this.state.page + 1
        })
      })
      .catch(err => console.log(err))
  }



  render() {
    return (
      <div>
        <div className=''>
          {
            this.state.peliculas.length > 0 ?
              this.state.peliculas.map((elm, idx) => <DetailCard
                key={idx + elm.original_title} data={elm}
              />)
              :
              <h1>Cargando</h1>
          }
        </div>

      </div>
    )
  }
}


export default Detail

