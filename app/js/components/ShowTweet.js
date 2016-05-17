'use strict';

import React, { Component } from 'react';

class ShowTweet extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, {tweet: null}, this.props);
  }

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

export default ShowTweet;
