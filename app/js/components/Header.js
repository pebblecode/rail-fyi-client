'use strict';

import React, { Component } from 'react';
import Faq from '../pages/Faq';
import { Link } from 'react-router';

class Header extends Component {

  _determineLink() {
    if (this.props.path === '/faq') {
      return '/';
    } else {
      return '/faq';
    }
  }

  render() {
    return (
      <div className="app-header-container">
        <h1 className="app-header-logo">
          <Link to={this._determineLink()}>Rail fyi</Link>
        </h1>
      </div>
    );
  }

}

export default Header;
