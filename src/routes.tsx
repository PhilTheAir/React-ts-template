import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import FormLayout from './layouts/FormLayout';
import LoginLayout from './layouts/LoginLayout';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/form" component={FormLayout} />
      <Route exact path="/login" component={LoginLayout} />
      <Route path="/" component={HomeLayout} />
    </Switch>
  </Router>
);

export default Routes;
