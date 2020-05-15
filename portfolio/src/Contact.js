import React from "react"
import ReactDOM from "react-dom"


class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      email: '',
      message: ''

    }

  }
{/*}
  handleFormSubmit( event ) {
  event.preventDefault();
  console.log(this.state);
}
{*/}

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
      <form action="/action_page.php">
        <label>Name</label>
          <input type="text" id="fname" name="name" placeholder="Your name"
          value={this.state.fname}
          onChange={n => this.setState({dname: n.target.value})}
          />

        <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})}

          />

        <label>Subject</label>
        <textarea id="message" name="message"
         onChange={e=>this.setState({message: e.target.value})}
         value={this.state.message}
        ></textarea>

        <input type="submit" onClick={e=> this.handleFormSubmit(e)} value="Submit" />


      </form>
    );
  }
}


export default Contact;
