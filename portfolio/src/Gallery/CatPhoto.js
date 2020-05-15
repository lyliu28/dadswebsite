import React from 'react'
import Canyons from "./Canyons.js"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class CatPhoto extends React.Component {

  render(){
    var category = this.props.cat;
    var id = this.props.id;

    return (

        <div className="column-cat">
          <Link activeClass="active" to={String(id)} spy={true} smooth={true} duration={50} >
                <img src={this.props.src}/>
          </Link>
        </div>

    )
}
}

export default CatPhoto
