
import React from "react"
import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Articles from "./Articles"
import Canyons from "./Gallery/Canyons"
import About from "./About"
import Contact from"./Contact"
import SocialMedia from "./SocialMedia"
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
              <Route path="/contact" component={Contact} />
              <Route path="/photography/canyons" component={Canyons} />
              <Route path="/photography/A" component={A} />
              <Route path="/photography/B" component={B} />
              <Route path="/photography/C" component={C} />
            </Switch>

      <Header/>
      <SocialMedia/>
      <NavBar />

      </div>

      </BrowserRouter>

    )
  }
}


export default App
