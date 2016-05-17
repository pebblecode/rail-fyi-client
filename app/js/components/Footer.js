'use strict';

import React, { Component } from 'react';

class Footer extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <button type="submit" className="button-secondary one-third column">Previous</button>
        <button type="submit" className="button-primary one-third column">Next</button>
      </footer>
    );
  }

}

export default Footer;
