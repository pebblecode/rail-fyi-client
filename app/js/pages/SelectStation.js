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
        <h1>Station</h1>
        <p>Which station would you like to give us feedback on?</p>
        <StationForm />
      </section>
    );
  }
}

export default SelectStation;
