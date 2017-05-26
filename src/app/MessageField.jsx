import React, { Component } from 'react';
import './MessageField.css';

class MessageField extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleMessage(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea id="message-field" placeholder="Type a message" value={this.state.value} onChange={this.handleChange}></textarea>
        <input id="submit-button" type="submit" value="Submit"/>
      </form>
    );
  }
}

export default MessageField;
