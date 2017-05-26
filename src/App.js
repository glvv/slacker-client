import React, { Component } from 'react';
import MessageList from './app/MessageList';
import SideNavigation from './app/SideNavigation';
import MessageField from './app/MessageField';
import axios from 'axios';
import './App.css';

//var socket = require('socket.io-client')('http://localhost:3001');

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      messages: []
    }
    axios.get('http://localhost:3001/channels')
      .then(function (response) {
        console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('http://localhost:3001/channels/59274f6ab0210e1f2b6fb00f')
      .then((response) => {
        console.log(response);
        this.setState({
          messages: response.data.messages
        });
      })
      .catch(function (error) {
        console.log(error);
    })
  }

  handleMessage = (message) => {
    //send to backend
    //receive
    //setState
    axios.post('http://localhost:3001/messages', {
      author: 'Avalon Sloane',
      content: message,
      channel_id: '59274f6ab0210e1f2b6fb00f'
    })
    .then((response) => {
      const newMessages = [ ...this.state.messages.slice(), response.data];
      console.log(response);
      this.setState({
        messages: newMessages
      })
    })
  }

  render() {
    return (
      <div id="client-container">
        <SideNavigation />
        <div id="message-ui">
          <MessageList messages={this.state.messages}/>
          <MessageField handleMessage={this.handleMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
