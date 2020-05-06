import React from "react";
import ReactDOM from "react-dom"

import Articles from './Articles.js';
import About from './About.js';
import Photography from './Photography.js';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


function NavBar(){
  return (

    <BrowserRouter>

      <Switch>
        <Route exact path="/photography" component={Photography} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
      </Switch>


      <nav>
            <ul className="nav-links">
            <Link to="/photography" className="item">Photography</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
            </ul>
      </nav>
    </BrowserRouter>

)
}

export default NavBar
