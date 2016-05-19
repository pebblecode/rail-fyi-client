'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import StaffForm from './components/StaffForm';
import SelectSubject from './pages/SelectSubject';
import SelectStation from './pages/SelectStation';
import SelectDescription from './pages/SelectDescription';
import SendComplaint from './pages/SendComplaint';

const Root = props => {
  return (
    <Provider store={props.store}>
      <Router history={props.history}>
        <Route path="/" component={App}>

          <IndexRoute component={HomePage} />

          <Route path="/" component={HomePage} />
          <Route path="/select-station" component={SelectStation} />
          <Route path="/select-subject" component={SelectSubject} />
          <Route path="/select-description" component={SelectDescription} />
          <Route path="/send-complaint" component={SendComplaint} />

          <Route path="*" component={NotFoundPage} />

        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
