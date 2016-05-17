'use strict';

import React, { PropTypes, Component } from 'react';

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
        <NearestStation />
      </section>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
