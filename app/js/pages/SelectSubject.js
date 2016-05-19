'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

import config from '../config';
import ProgressBar from '../components/ProgressBar';
import InProgressMessage from '../components/InProgressMessage';
import SubjectForm from '../containers/SubjectForm';

class SelectSubject extends Component {
  render() {
    const options = config.subjects.map((subject) => {
      return {
        name: subject.name,
        icon: subject.icon
      }
    });

    return (
      <section className="select-category">
        <ProgressBar stage={2} />
        <InProgressMessage />
        <h1>Subject</h1>
        <p>Please select the relevant subject you would like to give feedback on</p>
        <SubjectForm {...this.props} options={options}/>
      </section>
    );
  }
}

export default SelectSubject;
