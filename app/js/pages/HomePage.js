'use strict';

import React         from 'react';
import {Link}        from 'react-router';

const propTypes = {
  currentUser: React.PropTypes.object
};

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="home-page">

        <div>
          Home
        </div>

        <div>
          <Link to="/search">Search</Link>
        </div>

      </section>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
