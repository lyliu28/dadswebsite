import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Element } from 'react-scroll'
import styled from 'styled-components'


const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 8%;
    margin-left: 3%;
    margin-right: 3%;
`

const Image = styled.img`
    width:inherit;
    object-fit: cover;
`

class CatPhotoLarge extends React.Component {

  render(){
    var category = this.props.cat;

    return (
      <Element name= {String(this.props.id)} className="element">

      <div className="column-cat-large">

          <ImageContainer>
          <Image src={this.props.src}/>
          </ImageContainer>
            <div className={"textClassName"}>
              <h2>Nature</h2>
            </div>

      </div>
      </Element>

    )
  }
}

export default CatPhotoLarge
