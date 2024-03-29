import React from 'react';
import "./style.css"

function Navbar(props){

    return (
        <nav>
            <ul className="main-nav">
                { 
                    props.elementosMenu.map((unMenu, idx)=> <li key={idx} >{unMenu}</li>)
                    
                }
            </ul>
        </nav>
    )
}

export default Navbar