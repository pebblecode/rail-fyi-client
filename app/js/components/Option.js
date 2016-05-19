'use strict';

import React, { Component } from 'react';
import classnames from 'classnames';

import Progress from '../components/ProgressBar';

class Option extends Component {
  render() {
    const { option } = this.props;
    const iconClasses = classnames('icon-small', option.icon);

    return (
      <li className="btn-group-item" onClick={this.props.onClick}>
        <span className={iconClasses}></span>
        <button className="btn">{option.name}</button>
        <span className="icon-small icon-chevron"></span>
      </li>
    );
  }
}

export default Option;
