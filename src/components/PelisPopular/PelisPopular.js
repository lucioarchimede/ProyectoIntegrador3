import React from 'react'
import PelisPopularCard from "../PelisPopularCard/PelisPopularCard"
import './style.css'

function PelisPopular(props){
    return(
        <section className='container--pelis'>
            {
                props.info.map((elm) =>
                <PelisPopularCard data={elm} />
                )
            }
        </section>
    )
}

export default PelisPopular