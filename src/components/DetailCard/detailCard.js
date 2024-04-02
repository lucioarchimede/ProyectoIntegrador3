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
                <img src={this.props.data.poster_path} alt="" />
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
