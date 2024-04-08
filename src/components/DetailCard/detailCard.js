import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DetailCard extends Component {
  constructor(props){
    super(props)
  }
  
    render() {
        return (
        <article className=''>
            <Link to={"/detail/id/" + this.props.data.id}>
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} />
            </Link>
            <h2>{this.props.data.original_title}</h2> 
            <p>{this.props.data.release_date}</p> 
            <p>{this.props.data.overview}</p> 
            <p className='more'>Ver más</p> 
            <section className='extra'>
            </section>
        </article>

    )
  }
}

export default DetailCard
