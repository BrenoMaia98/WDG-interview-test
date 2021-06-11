import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';

const IndexRoutes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};
export default IndexRoutes;
