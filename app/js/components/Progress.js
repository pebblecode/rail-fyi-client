'use strict';

import React from 'react';

class Progress extends React.Component {
  render() {
    return (
      <div className="progress-bar">
        {this.props.state}
      </div>
    );
  }
}

Progress.propTypes = {
  stage: React.PropTypes.int
};

export default Progress;
