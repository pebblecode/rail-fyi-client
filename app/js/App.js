'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './components/Header';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header path={this.props.location.pathname} />
        <ProgressBar stage={this.props.page} />
        <ReactCSSTransitionGroup component='div' transitionName="pageTransition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {
            React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })
          }
        </ReactCSSTransitionGroup>
        <Footer />
      </div>
    );
  }
}

App.propTypes =  {
  params: PropTypes.object,
  query: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  location: PropTypes.shape({
    pathname:  React.PropTypes.string
  }),
  page: PropTypes.string
};

function mapStateToProps(state) {
  return {
    page: state.stage.page
  };
}

export default connect(mapStateToProps)(App);
