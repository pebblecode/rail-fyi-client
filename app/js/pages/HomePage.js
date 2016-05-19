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
        <span className="icon-large icon-train"></span>
        <p>Hello and Welcome</p>
        <p>To Rail FYI. Your one stop shop for Train based whinging. Slick, easy, to use and oh so fast Rail FYI will let you vent right from your mobile device!</p>
        <Link className="btn" to="/select-station">Start</Link>
      </section>
    );
  }

}

HomePage.propTypes = propTypes;

export default connect()(HomePage)
