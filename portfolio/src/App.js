/*
//src: https://www.framer.com/blog/posts/react-portfolio/

import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {Navigation} from 'react-mdl';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

function App() {
  return (


    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

        <div className="navigation">
            <div className="navigation-sub">
                  <Link to="/" className="item">Projects</Link>
                  <Link to="/articles" className="item">Articles</Link>
                  <Link to="/about" className="item">About</Link>
             </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
*/
import React from "react"
import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Photography from "./Photography"


import './App.css';


function App() {
  return (
    <div>
    <Header />
    <NavBar />
    <Footer />
    </div>
  )
}


export default App
