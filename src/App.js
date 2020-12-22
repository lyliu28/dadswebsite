import React from 'react';
import Header from './header'
import './App.css';
import { BrowserRouter, HashRouter, Route, Switch, Link } from 'react-router-dom';
import Photography from './Photography';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import Flight from './Flight';
import Mountains from './Mountains';
import Ocean from'./Ocean';
import Desert from './Desert';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_fC4g4zNnIbk9ikRi0o8M8IKQ00zOd1bulv');



function App() {
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('/create-checkout-session', { method: 'POST' });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <HashRouter>
    <Header/>

      <Switch>
      //<Route exact path="/" component={Photography} />
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/photography/Flight" component={Flight} />
      <Route path="/photography/Ocean" component={Ocean} />
      <Route path="/photography/Mountains" component={Mountains} />
      <Route path="/photography/Desert" component={Desert} />

      </Switch>

</HashRouter>

  )
}

export default App;
