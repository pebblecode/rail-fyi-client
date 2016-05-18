'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import Progress from '../components/Progress';
import NearestStation from '../components/NearestStation';

class SelectStation extends Component {
  render() {
    return (
      <section className="select-station">
        <Progress stage={1} />
        <h1>Station</h1>
        <p>Which station would you like to give us feedback on?</p>
        <NearestStation onStationClick='/select-subject' />
        <p>Not the right station? Select below:</p>
        <textbox />
      </section>
    );
  }
}

export default SelectStation;
