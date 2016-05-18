'use strict';

import React, { Component } from 'react';
import Progress from '../components/Progress';

class Option extends Component {
  render() {
    return (
      <div className="option" onClick={this.props.onClick}>
        {this.props.optionText}
      </div>
    );
  }
}

export default Option;
