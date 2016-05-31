'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { setStage } from '../actions/stage';

class HomePage extends Component {
  componentWillMount() {
    this.props.dispatch(setStage(0));
  }

  render() {
    return (
      <section className="home">
        <span className="icon-large icon-train"></span>
        <h1>YOUR ONE-STOP SHOP FOR TBW*</h1>
        <p>*Train-Based Whinging</p>
        <Link className="btn btn-block" to="/select-station">Start</Link>
      </section>
    );
  }

}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(HomePage);
