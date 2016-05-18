'use strict';

import React, { PropTypes, Component } from 'react';

class ProgressBar extends Component {
  render() {
    return (
      <div className="progress-bar">
        { this.props.stage }
      </div>
    );
  }
}

ProgressBar.propTypes = {
  stage: PropTypes.number
};

export default ProgressBar;
