import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Canyons from "./Canyons.js"


class CatPhoto extends React.Component {

  render(){
    var category = this.props.cat;

    return (

        <div className="column-cat">
            <img src={this.props.src}/>
              <div className={"textClassName"}>
                <h2>Nature</h2>
              </div>

        </div>

    )
}
}

export default CatPhoto