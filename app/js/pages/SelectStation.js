'use strict';

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { setStage } from '../actions/stage';
import StationForm from '../containers/StationForm';

class SelectStation extends Component {
  constructor(props) {
    super(props);

    props.dispatch(setStage(1));
  }

  render() {
    return (
      <section className="select-station">
        <div className="bottom-container">
          <ReactCSSTransitionGroup transitionName="selectStationDescription" transitionAppear={true} transitionAppearTimeout={500}>
            <p>Which station would you like to give us feedback on?</p>
          </ReactCSSTransitionGroup>
          <StationForm {...this.props} />
        </div>
      </section>
    );
  }
}

export default connect()(SelectStation);
