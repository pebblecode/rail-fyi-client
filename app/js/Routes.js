'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import StaffForm from './components/StaffForm';
import NearestStation from './components/NearestStation';
import SelectSubject from './pages/SelectSubject';
import SelectStation from './pages/SelectStation';

const Root = props => {
  return (
    <Provider store={props.store}>
      <Router history={props.history}>
        <Route path="/" component={App}>

          <IndexRoute component={HomePage} />

          <Route path="/" component={HomePage} />
          <Route path="/staff-form" component={StaffForm} />
          <Route path="/nearest-station" component={NearestStation} />
          <Route path="/select-subject" component={SelectSubject} />
          <Route path="/select-station" component={SelectStation} />

          <Route path="*" component={NotFoundPage} />

        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
