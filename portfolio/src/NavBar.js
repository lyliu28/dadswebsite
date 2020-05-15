import React from "react";
import ReactDOM from "react-dom"

import Articles from './Articles.js';
import About from './About.js';
import Photography from './Photography.js';
import Canyons from "./Gallery/Canyons.js"


import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


function NavBar(){
  return (

      <nav>
            <ul className="nav-links">
            <Link to="/" className="item">Photography</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/contact" className="item">Contact Me</Link>
            </ul>
      </nav>

)
}

export default NavBar
