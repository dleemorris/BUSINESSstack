import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/login/LoginPage';
import InvoicesPage from './components/invoice/InvoicesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    <Route path="/invoice" component={InvoicesPage} />
  </Route>
);
