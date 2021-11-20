import React from 'react';
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
                <li> Recipe </li>
                <li> ? </li>
                <li> ? </li>
            </ul>
      </div>
    );
}

export default Nav;