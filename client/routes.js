import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import * as containers from './containers';

export default (history) =>
  <Router history={history}>
    <Route path="/" component={containers.RequireAuthentication(containers.App)}>
      <IndexRedirect to="/orders" />
      <Route path="logs" component={containers.Logs} />
      <Route path="configuration" component={containers.Configuration} />
      <Route path="orders" component={containers.Orders} />
      <Route path="orders/:id" component={containers.Order} />
      <Route path="users" component={containers.Users} />
      <Route path="users/:id" component={containers.User} />
    </Route>
    <Route path="/login" component={containers.Login} />
  </Router>;
