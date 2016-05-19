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
  const redirectToHomeIfNoWizardItem = (wizardItem, replace) => {
    const reduxState = props.store.getState();

    if (!reduxState.form || !reduxState.form.wizard || !reduxState.form.wizard[wizardItem]) {
      replace(null, '/');
    }
  };

  const redirectToHomeIfNoStation = (nextState, replace) => {
    redirectToHomeIfNoWizardItem('station', replace);
  };

  const redirectToHomeIfNoSubject = (nextState, replace) => {
    redirectToHomeIfNoWizardItem('subject', replace);
  };

  const redirectToHomeIfNoDescription = (nextState, replace) => {
    redirectToHomeIfNoWizardItem('description', replace);
  };

  return (
    <Provider store={props.store}>
      <Router history={props.history}>
        <Route path="/" component={App}>

          <IndexRoute component={HomePage} />

          <Route path="/" component={HomePage} />
          <Route path="/select-station" component={SelectStation} />
          <Route path="/select-subject" onEnter={redirectToHomeIfNoStation} component={SelectSubject} />
          <Route path="/select-description" onEnter={redirectToHomeIfNoSubject} component={SelectDescription} />
          <Route path="/send-complaint" onEnter={redirectToHomeIfNoDescription} component={SendComplaint} />

          <Route path="*" component={NotFoundPage} />

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
