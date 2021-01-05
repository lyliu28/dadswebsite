import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import ear_owl from "./photos/take_flight/ear_owl.jpg"


//https://blog.mailtrap.io/react-contact-form/



const ImageContainer = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    width:100%;
`

const Image = styled.img`
    width:80%;
    padding-left:15%;
    padding-right: 15%;
    padding-top: 2%;
    padding-bottom: 2%;
    margin:auto;
`

const Text = styled.p`
    color: grey;
    font-size: 20px;
    font-family: 'Varta', sans-serif;
    text-decoration: none;
    text-align: center;
    margin-bottom:5%;
    margin-right: 25%;
    margin-left: 25%;
`

class Purchase extends React.Component {

  render() {
    return(
        <ImageContainer>
            <Image src={ear_owl}/>
            <Text>
            All images on this website are available for sale in both print (with any size) and HD digital file forms. Please contact me with inquiries through the <a href="url">contact page</a>.
            </Text>
        </ImageContainer>
    );
  }

}

export default Purchase;
