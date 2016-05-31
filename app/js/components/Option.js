'use strict';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

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

Option.propTypes = {
  option: PropTypes.shape({
    icon: PropTypes.string,
    name: PropTypes.string
  }),
  onClick: PropTypes.func
};

export default Option;
