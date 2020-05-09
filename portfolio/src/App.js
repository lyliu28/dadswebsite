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
import Articles from "./Articles"
import Canyons from "./Gallery/Canyons"
import About from "./About"
import A from "./Gallery/A"
import B from "./Gallery/B"
import C from "./Gallery/C"



import ReactModal from 'react-modal';


import Photography from "./Photography"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import './App.css';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
            <Switch>
              <Route exact path="/" component={Photography} />
              <Route path="/articles" component={Articles} />
              <Route path="/about" component={About} />
              <Route path="/photography/canyons" component={Canyons} />
              <Route path="/photography/A" component={A} />
              <Route path="/photography/B" component={B} />
              <Route path="/photography/C" component={C} />


            </Switch>

      <Header/>
      <NavBar />

      </div>

      </BrowserRouter>

    )
  }
}


export default App
