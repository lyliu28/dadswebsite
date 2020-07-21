import React from 'react';
import Header from './header'
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Photography from './Photography';
import About from './About';
import Contact from './Contact';
import Flight from './Flight';
import Mountains from './Mountains';
import Ocean from'./Ocean';
import Desert from './Desert';


function App() {
  return (
    <BrowserRouter>  
    <Header/>


<Switch>
<Route exact path="/" component={Photography} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/photography/Flight" component={Flight} />
<Route path="/photography/Ocean" component={Ocean} />
<Route path="/photography/Mountains" component={Mountains} />
<Route path="/photography/Desert" component={Desert} />



</Switch>

</BrowserRouter>

  )
}

export default App;
