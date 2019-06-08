import React, { Component } from "react";
import axios from 'axios';
import "./Contact.css";

class Contact extends Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
}

formSubmit = (e) => {
  e.preventDefault()

  this.setState({
      buttonText: '...sending'
  })

  let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
  }

  axios('https://hodermail.herokuapp.com/api/v1', {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Access-Control-Allow-Origin': '*',
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		data: data,
		crossdomain: true})
  .then( res => {
      this.setState({ sent: true }, this.resetForm())
  })
  .catch( () => {
    console.log('Message not sent')
  })
}

resetForm = () => {
  this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
  })
}
  render() {
    return (
      <div class="container">
      <div class="col-md mx-auto content">
        <div class="row">
          <div class="display-4">Contact us</div>
        </div>
        <div class="row row-height">
        
<form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
  <label class="message" htmlFor="message-input">Your Message</label>
  <br/>
  <textarea rows="4" cols="50" onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>
  <br/>   
  <label class="message-name" htmlFor="message-name">Your Name</label>
  <br/>
  <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>
  <br/>
  <label class="message-email" htmlFor="message-email">Your Email</label>
  <br/>
  <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />
  <br/>
  <div className="button--container">
  <br/>
      <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
  </div>
</form>
</div>
        </div>
      </div>
    );
  }
}

export default Contact;
