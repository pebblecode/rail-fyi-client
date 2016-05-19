'use strict';

import React, { PropTypes, Component } from 'react';

class SendButtons extends Component {
  render() {
    return (
      <div className="send-buttons-container">
        <button className="btn send-btn" onClick={this.props.onEmailClick}>Send email</button>
        <button className="btn send-btn" onClick={this.props.onTweetClick}>Tweet</button>
      </div>
    );
  }
}

export default SendButtons;
