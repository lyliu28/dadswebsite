import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components'


const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Image = styled.img`
  width: 100%
`

class Photo extends React.Component {

  render(){
    var category = this.props.cat;
    var url = "./photography/".concat(category);
    var divClassName = "column"


  return (
      <div className={divClassName}>
      <Link to={url}>
      <ImageContainer>
          <Image src={this.props.src}/>
          </ImageContainer>
      </Link>
        </div>

    )
}
}

export default Photo
