'use strict';

import React, { Component, PropTypes } from 'react';

class ShowTweet extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <textarea name="tweet" id="tweet" cols="30" rows="10" className="u-full-width" value={this.props.tweet}></textarea>
        </div>
      </div>
    );
  }
}

ShowTweet.propTypes = {
  tweet: PropTypes.string.isRequired
};

export default ShowTweet;
