import React, { Component } from 'react'
import DetailCard from '../components/DetailCard/detailCard'

export default class Detail extends Component {
    constructor(props){
        super(props)
    }
  render() {
    let id = this.props.match.params.id
    return (
      <main>

     
      <div>Detail of {}</div>
      <DetailCard />
      </main>

    )
  }
}
