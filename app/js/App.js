'use strict';

import React              from 'react';

import Header             from './components/Header';
import Footer             from './components/Footer';

const propTypes = {
  params: React.PropTypes.object,
  query: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
};

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('About to mount App');
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  renderChildren() {
    return React.cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query
    });
  }

  render() {
    return (
      <div>

        <Header />

        {this.renderChildren()}

        <Footer />

      </div>
    );
  }

}

App.propTypes = propTypes;

export default App;
