'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import HomePage from '../pages/HomePage';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-header-container">
        <div className="app-header-logo">
          <Link to="/"></Link>
        </div>
      </div>
    );
  }

}

export default Header;
