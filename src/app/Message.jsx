import React from 'react';
import Avatar from './Avatar';
import './Message.css';
import moment from 'moment';

function Message(props) {
  return (
    <div className="message-container">
      <Avatar user={props.message.author}/>
      <p className="message-author">{props.message.author}<span className="message-time">{moment(props.message.created_at).format('LLL')}</span></p>
      <p className="message-content">{props.message.content}</p>
    </div>
  );
}

export default Message;
