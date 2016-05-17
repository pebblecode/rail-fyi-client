'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class SelectCategory extends Component {
  render() {
    return (
      <section className="select-category">
        <Link>Toilet</Link>
        <Link>Staff</Link>
      </section>
    );
  }
}

export default SelectCategory;
