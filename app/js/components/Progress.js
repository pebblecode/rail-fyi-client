'use strict';

import React, { PropTypes, Component } from 'react';

class Progress extends Component {
  render() {
    return (
      <div className="progress-bar">
        { this.props.stage }
      </div>
    );
  }
}

Progress.propTypes = {
  stage: PropTypes.number
};

export default Progress;
