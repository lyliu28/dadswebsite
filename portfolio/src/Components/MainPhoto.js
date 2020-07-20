import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components'


const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Image = styled.img`
    width:inherit;
    height:600px;
    object-fit: cover;

  ${ImageContainer}:hover & {
    transform: scale(1.5); 
  }

`


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
          <ImageContainer>
          <Image src={this.props.src}/>
          </ImageContainer>

          <div className ={overlayClassName}>
            <div className={textClassName}>
              <h2>{this.props.category}</h2>
            </div>
          </div>

      </Link>
        </div>

    )
}
}

export default Photo
