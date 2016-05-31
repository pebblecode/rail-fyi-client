'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className="app-footer-container">
          <Link to="/faq">FAQ</Link>
      </div>
    );
  }
}

export default Footer;
