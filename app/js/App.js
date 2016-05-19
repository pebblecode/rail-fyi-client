'use strict';

import React, { PropTypes, Component } from 'react';

import Header from './components/Header';

const propTypes = {
  params: PropTypes.object,
  query: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
};

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('About to mount App');
  }

  renderChildren() {
    return React.cloneElement(this.props.children, ...this.props);
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        { this.renderChildren() }
      </div>
    );
  }

}

App.propTypes = propTypes;

export default App;
