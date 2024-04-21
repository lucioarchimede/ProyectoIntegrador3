import React from 'react';
import Loader from '../components/Loader/Loader';


const Notfound = () => {
    return(
        <React.Fragment>
             
            <h1 className="">
            {this.state.popular.length === 0 ?
              < Loader /> :
              <>
                Error 404 not found
                </>}
            </h1>
            
        </React.Fragment>
    
    )
}

export default Notfound;