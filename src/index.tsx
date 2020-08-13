import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './app/store';
import { App } from './app/App';

import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
