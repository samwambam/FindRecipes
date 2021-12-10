import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import start from '../img/R.jfif';

const Nav= () => {
    return (
        <div> 
            <header className="App-header">
                <img src={start} className="App-start" alt="logo" />
                <h1> Welcome </h1>
            </header>
      
            <ul className="bar"> 
                <Link to= "/"> <li> Home </li> </Link>
                <Link to= "/recipe"> <li> Recipe </li> </Link> 
                <button className="NavButton"> <li> Filter </li> </button>
            </ul>
      </div>
    );
}

export default Nav;