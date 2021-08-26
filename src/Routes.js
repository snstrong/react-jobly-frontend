import React from "react";
import { Route, Switch, Redirect, useParams } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/companies">
        <h1>Companies</h1>
      </Route>
      <Route exact path="/companies/:handle">
        <h1>Company Detail</h1>
      </Route>
      <Route exact path="/jobs">
        <h1>Jobs</h1>
      </Route>
      <Route exact path="/jobs/:id">
        <h1>Job Detail</h1>
      </Route>
      <Route exact path="/login">
        <h1>Login</h1>
      </Route>
      <Route exact path="/signup">
        <h1>Sign Up</h1>
      </Route>
      <Route exact path="/profile">
        <h1>Profile</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
