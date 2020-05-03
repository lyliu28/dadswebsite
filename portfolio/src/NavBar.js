import React from "react";
import ReactDOM from "react-dom"

import Articles from './Articles.js';
import About from './About.js';
import Photography from './Photography.js';

import { BrowserRouter, Route, Link } from 'react-router-dom';


function NavBar(){
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/photography" component={Photography} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

        <div className="navigation">
            <div className="navigation-sub">
                  <Link to="/photography" className="item">Photography</Link>
                  <Link to="/articles" className="item">Articles</Link>
                  <Link to="/about" className="item">About</Link>
             </div>
        </div>

      </div>
    </BrowserRouter>
)
}

export default NavBar
