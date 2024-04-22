import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './detail.css'

class DetailCard extends Component {
  constructor(props){
    super(props)
  }
  
    render() {
        return (
        <article className='contenedor-Padre'>
            <Link to={"/detail/id/" + this.props.id}>
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.imagen}`} />
            </Link>
            <h2>{this.props.nombre}</h2> 
            <p>{this.props.fechaEstreno}</p> 
            <p>{this.props.resumen}</p> 
            <p className='more'><Link to={"/detail/id/" + this.props.id}>
            Ver mas
            </Link></p> 
            <section className='extra'>
            </section>
        </article>

    )
  }
}

export default DetailCard
