'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { setStage } from '../actions/stage';

const propTypes = {
  currentUser: PropTypes.object
};

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(setStage(0));
  }

  render() {
    return (
      <section className="home">
        <span className="icon-large icon-train"></span>
        <h1>Hello and Welcome</h1>
        <p>To Rail FYI. Your one stop shop for Train based whinging. Slick, easy to use and oh so fast Rail FYI will let you vent right from your mobile device!</p>
        <Link className="btn btn-block" to="/select-station">Start</Link>
      </section>
    );
  }

}

HomePage.propTypes = propTypes;

export default connect()(HomePage)
