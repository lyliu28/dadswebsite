import React from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class CatPhotoOld extends React.Component {

  render(){
    var category = this.props.cat;
    var id = this.props.id;

    return (

        <div className="column-cat">

          <Link activeClass="active" to={String(id)} spy={true} smooth={true} duration={500} >
                <img src={this.props.src}/>
          </Link>
        </div>

    )
}
}

export default CatPhotoOld
