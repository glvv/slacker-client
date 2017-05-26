import React from 'react';
import './Avatar.css';
import AvalonSloane from "../../images/AvalonSloane1.jpg";

function Avatar(props) {
    return (
      <img src={AvalonSloane} className="avatar" alt={props.user}/>
    );
}

export default Avatar;
