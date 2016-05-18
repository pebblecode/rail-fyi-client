'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class SelectSubject extends Component {
  render() {
    return (
      <section className="select-category">
        <h1>Subject</h1>
        <p>Please select the relevant subject you would like to give feedback on</p>
        <button>Staff</button>
        <button>Crowd</button>
        <button>Temperature</button>
        <button>Cleanliness</button>
        <button>Customer Service</button>
        <button>Other</button>
      </section>
    );
  }
}

export default SelectSubject;
