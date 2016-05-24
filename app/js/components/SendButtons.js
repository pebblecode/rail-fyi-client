'use strict';

import React, { PropTypes, Component } from 'react';

class SendButtons extends Component {
  render() {
    const { emailEndpoint, tweetEndpoint } = this.props;
    const sendEmail =
      emailEndpoint
      ? <a className="btn btn-large btn-block" target="_blank" href={emailEndpoint}>Send email</a>
      : null;
    const sendTweet =
      tweetEndpoint
      ? <a className="btn btn-large btn-block" target="_blank" href={tweetEndpoint}>Tweet</a>
      : null;
    return (
      <div className="btn-group-item">
        {sendEmail}
        {sendTweet}
      </div>
    );
  }
}

SendButtons.propTypes = {
  emailEndpoint: PropTypes.string,
  tweetEndpoint: PropTypes.string
};

export default SendButtons;
