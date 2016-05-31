'use strict';

import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class ProgressBar extends Component {
  _shouldBeClickable(nextStage) {
    if (this.props.stage > nextStage) {
      return 'progress-bar-link';
    }
  }

  render() {
    if (!this.props.stage) {
      return (
        <div>
        </div>
      );
    }
    return (
      <div className='progress-bar-container'>
        <ul className={'progress-bar-list progress-' + this.props.stage}>
          <li className='progress-bar-dot'><Link className={this._shouldBeClickable(1)} to='/select-station'></Link></li>
          <li className='progress-bar-dot'><Link className={this._shouldBeClickable(2)} to='/select-subject'></Link></li>
          <li className='progress-bar-dot'><Link className={this._shouldBeClickable(3)} to='/select-description'></Link></li>
          <li className='progress-bar-dot'><Link className={this._shouldBeClickable(4)} to='/send-complaint'></Link></li>
        </ul>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  stage: PropTypes.number
};

export default ProgressBar;
