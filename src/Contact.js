import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import circus from "./photos/take_flight/circus.jpg"


//https://blog.mailtrap.io/react-contact-form/

const Form = styled.div`
  width: 80%;
  display: flex;
  @media only screen and (max-width: 500px) {
      flex-direction:column;
  }
  flex-direction: row;
  margin:auto;
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width:50%;
    @media only screen and (max-width: 500px) {
        width:100%;
    }
`

const Image = styled.img`
    width:100%;
    padding-left:20%;
    padding-right:20%;
    padding-top: 10%;
`

const Text = styled.p`
    color: grey;
    font-weight: 30px;
    font-family: 'Varta', sans-serif;
    text-decoration: none;
    margin:10%;
    width:80%;
`


class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3000/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return(
      <Form>

        <ImageContainer>
            <Image src={circus}/>
            <Text>
            All images on this website are available for sale in both print (with any size) and HD digital file forms. Please contact me with inquires.
            </Text>
        </ImageContainer>

        <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>


      </Form>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Contact;
