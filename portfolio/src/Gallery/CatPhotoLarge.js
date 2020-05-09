import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Canyons from "./Canyons.js"
import { Element } from 'react-scroll'



class CatPhotoLarge extends React.Component {

  render(){
    var category = this.props.cat;

    return (
      <Element name= {String(this.props.id)} className="element">

      <div className="column-cat-large">

          <img src={this.props.src}/>
            <div className={"textClassName"}>
              <h2>Nature</h2>
            </div>

      </div>
      </Element>

    )
  }
}

export default CatPhotoLarge
