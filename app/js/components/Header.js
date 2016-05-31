'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
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
