'use strict';

import React, { Component } from 'react';
import Faq from '../pages/Faq';
import { Link } from 'react-router';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-header-container">
        <h1 className="app-header-logo">
          <Link to="/faq">Rail fyi</Link>
        </h1>
      </div>
    );
  }

}

export default Header;
