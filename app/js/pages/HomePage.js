'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
        <Link to="/select-station">Start</Link>
      </section>
    );
  }

}

HomePage.propTypes = propTypes;

export default connect()(HomePage)
