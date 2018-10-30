import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import FormLayout from './layouts/FormLayout';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/form" component={FormLayout} />
      <Route path="/" component={HomeLayout} />
    </Switch>
  </Router>
);

export default Routes;
