'use strict';

import React { PropTypes, Component } from 'react';

class Progress extends Component {
  render() {
    return (
      <div className="progress-bar">
        { this.props.state }
      </div>
    );
  }
}

Progress.propTypes = {
  stage: PropTypes.int
};

export default Progress;
