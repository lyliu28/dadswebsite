import React from "react";
import ReactDOM from "react-dom"

import Articles from './Articles.js';
import About from './About.js';
import Photography from './Photography.js';
import Canyons from "./Gallery/Canyons.js";

import insta_logo from "./instagram_logo.png";
import tuchong_logo from "./tuchong_logo.png"


import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


function SocialMedia(){
  return (
    <div className="social">
    <a href="https://tuchong.com/16561503/">
   <img src={tuchong_logo} style ={{width:28, margin: 8}}/>
  </a>


  <a href="https://www.instagram.com/dawei_rgb/">
  <img src={insta_logo} style={{width:23, margin: 10}} />
  </a>

    </div>

)
}

export default SocialMedia
