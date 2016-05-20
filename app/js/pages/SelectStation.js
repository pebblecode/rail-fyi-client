'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import ProgressBar from '../components/ProgressBar';
import InProgressMessage from '../components/InProgressMessage';
import StationForm from '../containers/StationForm';

class SelectStation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="select-station">
        <ProgressBar stage={1} />
        <InProgressMessage />
        <div className="center-dis">
          <span className="icon-large icon-location"></span>
        </div>
        <div className="bottom-container">
          <p>Which station would you like to give us feedback on?</p>
          <StationForm {...this.props} />
        </div>
      </section>
    );
  }
}

export default SelectStation;
