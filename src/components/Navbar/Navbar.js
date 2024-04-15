// import React from 'react';
// import "./style.css"

// function Navbar(props){

//     return (
//         <nav>
//             <ul className="main-nav">
//                 { 
//                     props.elementosMenu.map((unMenu, idx)=> <li key={idx} >{unMenu}</li>)
                    
//                 }
//             </ul>
//         </nav>
//     )
// }

// export default Navbar
 import React from 'react';
 import './style.css'
 import { Link } from "react-router-dom";

function Navbar(){

    return (
        <header className="containerHeader">
            <article >
                <nav >
                    <ul className="containerHeader">
                    <Link to={`/`}> HOME  </Link>
                    <p>
                    /   
                    </p>
                    <Link to={`/favoritos`}>  FAVORITOS  </Link>  
                    </ul>

                    <ul className="containerHeader">
                    <Link to={`/top_rated`}> TOP RATED </Link>
                    <p>
                        /
                    </p>
                    <Link to={`/cartelera`}> EN CARTELERA </Link>  
                    </ul>



                </nav>
            </article>
        </header>
    )
}

export default Navbar