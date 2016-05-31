'use strict';

import React, { Component } from 'react';
import Faq from '../pages/Faq';
import { Link } from 'react-router';

class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-footer-container">
          <Link to="/faq">FAQ</Link>
      </div>
    );
  }

}

export default Footer;
