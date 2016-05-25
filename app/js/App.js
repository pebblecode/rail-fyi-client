'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

  render() {
    return (
      <div className="app-container">
        <Header path={this.props.location.pathname} />
        <ProgressBar stage={this.props.page} />
        <ReactCSSTransitionGroup component='span' transitionName="pageTransition"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}>
          {
            React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })
          }
        </ReactCSSTransitionGroup>
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
