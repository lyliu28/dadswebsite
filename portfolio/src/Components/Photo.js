import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components'


const Column = styled.div`
  width: 90%;
  position: relative;
  display: inline-block;
  margin: 5px;
  line-height: 0px;

@media only screen and (max-width: 500px) {
    width: 400px;
    position: relative;
    display: inline-block;
    margin-left: 5px;
}`


const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Image = styled.img`
    width:100%
`

class Photo extends React.Component {

  render(){
    var category = this.props.cat;
    var divClassName = "column"


  return (
      <Column>
      <ImageContainer>
          <Image src={this.props.src}/>
      </ImageContainer>
      </Column>

    )
}
}

export default Photo
