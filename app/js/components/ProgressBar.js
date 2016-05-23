'use strict';

import React, { PropTypes, Component } from 'react';

class ProgressBar extends Component {
  render() {
    if (!this.props.stage) {
      return (
        <div>
        </div>
      );
    }
    return (
      <div className="progress-bar-container">
        <ul className={"progress-bar-list progress-" + this.props.stage}>
          <li className="progress-bar-dot"></li>
          <li className="progress-bar-dot"></li>
          <li className="progress-bar-dot"></li>
          <li className="progress-bar-dot"></li>
        </ul>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  stage: PropTypes.number
};

export default ProgressBar;
