import React, { Component } from 'react';
import Message from "./Message";
import "./MessageList.css";

class MessageList extends Component {
  render() {
    const messageList = this.props.messages.map((message) =>
      <Message key={message._id} message={message}/>
    );

    return (
      <div id="message-list-container">
        <div id="message-list">
          {messageList}
        </div>
      </div>
    );
  }
}

export default MessageList;
