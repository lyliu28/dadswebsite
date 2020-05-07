import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Canyons from "./Canyons.js"


class Photo extends React.Component {

  render(){
    var category = this.props.cat;
    var url = "./photography/".concat(category);

  return (
      <div className="column">
      <Link to={url}>

          <img src={this.props.src}/>
          <div className ="overlay">
            <div className="text-block">
              <h2>Nature</h2>
            </div>
          </div>

      </Link>
        </div>

    )
}
}

export default Photo
