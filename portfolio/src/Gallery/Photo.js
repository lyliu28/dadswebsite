import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Canyons from "./Canyons.js"


class Photo extends React.Component {

  render(){
    var category = this.props.cat;
    var url = "./photography/".concat(category);
    var divClassName = "column"
    var textClassName = "text-block"
    var overlayClassName = "overlay" 


  return (
      <div className={divClassName}>
      <Link to={url}>
          <img src={this.props.src}/>
          <div className ={overlayClassName}>
            <div className={textClassName}>
              <h2>Nature</h2>
            </div>
          </div>

      </Link>
        </div>

    )
}
}

export default Photo
