import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import UserEdit from '../pages/UserEdit';
import UsersList from '../pages/UsersList';

const IndexRoutes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/users"
          component={(props: { page?: number }) => <UsersList {...props} />}
        />
        <Route exact path="/users/:id">
          <UserEdit />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};
export default IndexRoutes;
