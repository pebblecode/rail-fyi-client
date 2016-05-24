'use strict';

import React, { Component } from 'react';
import classnames from 'classnames';

import Progress from '../components/ProgressBar';

class Option extends Component {
  render() {
    const { option } = this.props;
    const icon =
      option.icon
      ? <span className={classnames('icon-small', option.icon)}></span>
      : null;

    return (
      <li className="btn-group-item" onClick={this.props.onClick}>
        {icon}
        <button className="btn btn-line">{option.name}</button>
        <span className="icon-small icon-chevron"></span>
      </li>
    );
  }
}

export default Option;
