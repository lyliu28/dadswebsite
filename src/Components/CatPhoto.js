import React from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from 'styled-components'

const Column = styled.div`
  width: 33%;
  position: relative;
  display: inline-block;
  margin: 1px;
  line-height: 0px;

@media only screen and (max-width: 500px) {
    width: 400px;
    position: relative;
    display: inline-block;
    margin-left: 5px;
}`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: .5s ease;
    ${Column}:hover & {
      opacity: 0.2;
    }
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Image = styled.img`
    width:inherit;
    height:36vh;
    object-fit: cover;
`

class Photo extends React.Component {

  render(){
    var category = this.props.cat;
    var textClassName = "text-block"
    var id = this.props.id;


  return (
      <Column>
      <Link activeClass="active" to={String(id)} spy={true} smooth={true} duration={500} >
          <ImageContainer>
          <Image src={this.props.src}/>
          </ImageContainer>

          <Overlay>
            <div className={textClassName}>
              <h2>{this.props.category}</h2>
            </div>
          </Overlay>

      </Link>
        </Column>

    )
}
}

export default Photo
