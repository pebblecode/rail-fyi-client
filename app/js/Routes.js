'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SelectSubject from './pages/SelectSubject';
import SelectStation from './pages/SelectStation';
import SelectDescription from './pages/SelectDescription';
import SendComplaint from './pages/SendComplaint';

const Root = props => {

  const redirectToHomeIfNoStation = (nextState, replace) => {
    // console.log(this);
    //
    // replace(null, '/');
  }

  return (
    <Provider store={props.store}>
      <Router history={props.history}>
        <Route path="/" component={App}>

          <IndexRoute component={HomePage} />

          <Route path="/" component={HomePage} />
          <Route path="/select-station" onEnter={redirectToHomeIfNoStation.bind(this)} component={SelectStation} />
          <Route path="/select-subject" component={SelectSubject} />
          <Route path="/select-description" component={SelectDescription} />
          <Route path="/send-complaint" component={SendComplaint} />

          <Route path="*" component={NotFoundPage} />

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
