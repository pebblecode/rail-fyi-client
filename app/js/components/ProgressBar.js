'use strict';

import React, { PropTypes, Component } from 'react';

class ProgressBar extends Component {
  render() {
    const dots =
      [1,2,3,4].map(i => {
        return (
          <div
            key={i}
            style={{
              "width": "10px",
              "height": "10px",
              "border": "1px solid blue",
              "backgroundColor": i === this.props.stage ? "blue" : "transparent",
              "margin": "20px",
              "display": "inline-block"
            }}>
          </div>
        );
      });
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
