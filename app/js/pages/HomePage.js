'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import NearestStation from '../components/NearestStation';

const propTypes = {
  currentUser: PropTypes.object
};

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="home-page">
        Welcome to RAIL FYI!
        <NearestStation {...this.props} onStationClick={'/station/stationCode'} />
      </section>
    );
  }

}

HomePage.propTypes = propTypes;

export default connect()(HomePage)
