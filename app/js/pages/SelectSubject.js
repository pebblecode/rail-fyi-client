'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

import ProgressBar from '../components/ProgressBar';
import SubjectForm from '../containers/SubjectForm';

class SelectSubject extends Component {
  render() {
    return (
      <section className="select-category">
        <ProgressBar stage={2} />
        <h1>Subject</h1>
        <p>Please select the relevant subject you would like to give feedback on</p>
        <SubjectForm />
      </section>
    );
  }
}

export default SelectSubject;
