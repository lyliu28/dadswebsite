import React from 'react';
import styled from 'styled-components'
import 'react-slideshow-image/dist/styles.css'

import { Slide } from 'react-slideshow-image';
import fly from "./photos/take_flight/fly.jpg"
import swans from "./photos/take_flight/swans.jpg"
import owl from "./photos/take_flight/owl.jpg"
/**https://react-slideshow.herokuapp.com/api **/

const Main = () => {
    return (
      <div className="gallery-container">
        <Slide easing="ease" duration="3000">
            <div className="each-slide">
              <div style={{backgroundImage: `url(${fly})`}}>
              </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${owl})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${swans})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};


export default Main
