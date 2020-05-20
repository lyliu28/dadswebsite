import React from "react"
import ReactDOM from "react-dom"
import axios from 'axios';

const API_PATH = './contact.php';

//https://blog.bitsrc.io/how-to-build-a-contact-form-with-react-js-and-php-d5977c17fec0


class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

  }


handleFormSubmit = e => {
  e.preventDefault();
  axios({
    method: 'post',
    url: `${API_PATH}`,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
};


  render() {
    return (
      <form action="./contact.php" method="post">
      <div className= "box">
        <label>Name</label>
          <input type="text" id="fname" name="name" placeholder="Your name"
          value={this.state.fname}
          onChange={n => this.setState({fname: n.target.value})}
          />
          </div>

        <div className="box">

        <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})}

          />
          </div>

          <div className ="box">
        <label>Message</label>
        <textarea id="message" name="message"
         value={this.state.message}
         onChange={e=>this.setState({message: e.target.value})}

        ></textarea>
        </div>

        <input type="submit" name="send" onClick={e=> this.handleFormSubmit(e)} value="Submit" />

        <div>
  {this.state.mailSent &&
    <div> Thank you for contcting us.</div>
  }
</div>


      </form>
    );
  }
}


export default Contact;
