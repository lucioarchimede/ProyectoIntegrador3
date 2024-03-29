import React, {Component} from 'react'
import "./style.css"


class PelisPopularCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      contenidoOculto: true,
      botonTexto: 'Mostrar contenido'
    }
    // console.log('Soy el constructor')
  }
  componentDidMount(){
    // console.log('Soy el componentDidMount')
  }
  componentDidUpdate(){
    if(this.state.contenidoOculto=== false){
      alert('Desde el componentDidUpdate hicimos algo')
    }
  }
  componentWillUnmount(){
    // console.log('Soy el willUnmount')
  }

  ocultarYMostrarContenido(){
    if(this.state.contenidoOculto === true){
      this.setState({
        contenidoOculto:false,
        botonTexto:'Ocultar contenido'
      })
    } else {
      this.setState({
        contenidoOculto:true,
        botonTexto:'Mostrar contenido'
      })
    }
  }

  render(){
    console.log('Soy el render')

    return (
      <div className='card-pelis'>
        <img src={`/img/peliculas/${this.props.data.imagen}`} alt={`${this.props.data.titulo}`} />

                <p>{this.props.data.descripcion}</p>
          {     
            this.state.contenidoOculto ?
            '' 
            :       
              <p>{this.props.data.extra}</p>
          }        
        <button onClick={()=> this.ocultarYMostrarContenido()}>{this.state.botonTexto}</button>
      </div>
    )
  }
}

export default PelisPopularCard
