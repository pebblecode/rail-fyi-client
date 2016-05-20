'use strict';

import React, { PropTypes, Component } from 'react';

class SendButtons extends Component {
  render() {
    const { emailEndpoint, tweetEndpoint } = this.props;
    return (
      <div className="send-buttons-container">
        <a className="btn send-btn" href={emailEndpoint}>Send email</a>
        <a className="btn send-btn" href={tweetEndpoint}>Tweet</a>
      </div>
    );
  }
}

SendButtons.propTypes = {
  emailEndpoint: PropTypes.string,
  tweetEndpoint: PropTypes.string
};

export default SendButtons;
