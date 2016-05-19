'use strict';

import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-header-container">
        <h1 className="app-header-logo">Rail fyi</h1>
      </div>
    );
  }

}

export default Header;
