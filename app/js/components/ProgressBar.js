'use strict';

import React, { PropTypes, Component } from 'react';

class ProgressBar extends Component {
  render() {
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
