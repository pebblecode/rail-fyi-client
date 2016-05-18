'use strict';

import React from 'react';
import { render } from 'react-dom';
import CreateBrowserHistory from 'history/lib/createBrowserHistory';

import ConfigureStore from './store';
import Routes from './Routes';

if ( process.env.NODE_ENV !== 'production' ) {
  // Enable React devtools
  window.React = React;
}

const store = ConfigureStore({});
const history = CreateBrowserHistory();

render(<Routes store={store} history={history} />, document.getElementById('app'));
