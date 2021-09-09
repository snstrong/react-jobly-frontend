import React from "react";
import { Route, Switch, Redirect, useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobDetail from "./JobDetail";
import JobList from "./JobList";
import RegisterForm from "./RegisterForm";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
      <Route exact path="/jobs/:id">
        <JobDetail />
      </Route>
      <Route exact path="/login">
        <h1>Login</h1>
      </Route>
      <Route exact path="/signup">
        <RegisterForm />
      </Route>
      <Route exact path="/profile">
        <h1>Profile</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
