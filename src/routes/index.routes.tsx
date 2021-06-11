import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Users from '../pages/Users';

const IndexRoutes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/users"
          component={(props: { page?: number }) => <Users {...props} />}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};
export default IndexRoutes;
