import React, { Component } from 'react';

class SideNavigation extends Component {
  render() {
    return (
      <aside id="side-container">
        <div id="team-list">
          <h3 id="team-name">Team name</h3>
          <h3 id="user-name">User name</h3>
        </div>
        <h4 className="side-title">CHANNELS</h4>
        <div id="channel-list">
          <div className="channel-name-container-group">
            <p className="channel-name">
              <a href="#" className="channel-title">#general</a>
            </p>
          </div>
          <div className="channel-name-container-group">
            <p className="channel-name">
              <a href="#" className="channel-title">#random</a>
            </p>
          </div>
        </div>
        <h4 className="side-title">DIRECT MESSAGES</h4>
        <div id="direct-channels-list">

        </div>
        <a href="#" className="invite-people-link">+ Invite people</a>
      </aside>
    );
  }
}

export default SideNavigation;
