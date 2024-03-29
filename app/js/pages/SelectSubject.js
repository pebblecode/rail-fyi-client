'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import config from '../config';
import { setStage } from '../actions/stage';
import InProgressMessage from '../components/InProgressMessage';
import SubjectForm from '../containers/SubjectForm';
import StationOperator from '../components/StationOperator';

class SelectSubject extends Component {
  componentWillMount() {
    this.props.dispatch(setStage(2));
  }

  render() {
    const options = config.subjects.map((subject) => {
      return {
        name: subject.name,
        icon: subject.icon
      };
    });

    return (
      <section className="select-category">
        <div className="content-container">
          <StationOperator />
          <InProgressMessage />
        </div>
        <div className="bottom-container">
          <p>Please select the relevant subject you would like to give feedback on</p>
          <SubjectForm {...this.props} options={options}/>
        </div>
      </section>
    );
  }
}

SelectSubject.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SelectSubject);
