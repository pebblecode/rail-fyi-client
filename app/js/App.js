'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import ProgressBar from './components/ProgressBar';

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
    console.log('On the app page: ', this.props.stage);
    return (
      <div className="app-container">
        <Header />
        <ProgressBar stage={this.props.page} />
        { this.renderChildren() }
      </div>
    );
  }

}

App.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    page: state.stage.page
  };
}

export default connect(mapStateToProps)(App)
