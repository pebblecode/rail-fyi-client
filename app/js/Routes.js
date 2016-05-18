'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import ConfigureStore from './store';
import CreateBrowserHistory from 'history/lib/createBrowserHistory';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import StaffForm from './components/StaffForm';
import NearestStation from './components/NearestStation';
import SelectSubject from './pages/SelectSubject';

export default (
  <Provider store={ConfigureStore()}>
    <Router history={CreateBrowserHistory()}>
      <Route path="/" component={App}>

        <IndexRoute component={HomePage} />

        <Route path="/" component={HomePage} />
        <Route path="/staff-form" component={StaffForm} />
        <Route path="/nearest-station" component={NearestStation} />
        <Route path="/select-subject" component={SelectSubject} />

        <Route path="*" component={NotFoundPage} />

      </Route>
    </Router>
  </Provider>
);
