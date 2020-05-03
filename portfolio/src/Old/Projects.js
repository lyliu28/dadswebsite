import React from "react";
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import logo from './logo.svg';
import rain from "./DSC_1739.JPG";


function Projects(props) {
  return (
    // Render a Thumbnail component

  
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/twitter"
        image={rain}
        title="Twitter Newsfeed"
        category="Mobile App"
      />

      <Thumbnail
        link="/airbnb"
        image={logo}
        title="Airbnb Experiences"
        category="Website"
      />

      <Thumbnail
        link="/photoshop"
        image={logo}
        title="Photoshop Redesign"
        category="Desktop App"
      />
    </div>
  )
}

export default Projects;
