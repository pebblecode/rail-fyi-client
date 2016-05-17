'use strict';

import React         from 'react';

const propTypes = {
  currentUser: React.PropTypes.object
};

class NotFoundPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="not-found-page">

        Page Not Found

      </section>
    );
  }

}

NotFoundPage.propTypes = propTypes;

export default NotFoundPage;
