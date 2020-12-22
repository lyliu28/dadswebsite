import React from "react"
import Photo from './Components/Photo'
import photoData from './photoData.js'
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_fC4g4zNnIbk9ikRi0o8M8IKQ00zOd1bulv');


//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/



class Desert extends React.Component {
    render(){

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

      const photoComponents = photoData.map(photo=>
          <Photo cat = {photo.category} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height} category={photo.category}/>)

      return (
        <div className="gallery-container">

      {photoComponents}

      <button role="link" onClick={handleClick}>
      Checkout
    </button>        


          </div>

      )
    }
}

export default Desert
