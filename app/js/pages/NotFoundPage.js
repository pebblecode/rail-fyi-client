'use strict';

import React, { PropTypes, Component } from 'react';

const propTypes = {
  currentUser: PropTypes.object
};

class NotFoundPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="not-found">
        Page Not Found
      </section>
    );
  }

}

NotFoundPage.propTypes = propTypes;

export default NotFoundPage;
