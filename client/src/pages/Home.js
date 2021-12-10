import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/pageStyle.css'

const Home= () => {
    return (
        <div>
            <Link to ="/"> 
                <h1> Recipe of the month </h1>
            </Link> 
        </div>
    );
    
}

export default Home;