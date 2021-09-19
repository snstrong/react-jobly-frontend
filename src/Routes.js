import React from "react";
import { Route, Switch, Redirect, useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobDetail from "./JobDetail";
import JobList from "./JobList";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Home from "./Home";

const Routes = ({ login, register }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
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
        <LoginForm login={login} />
      </Route>
      <Route exact path="/signup">
        <RegisterForm register={register} />
      </Route>
      <Route exact path="/profile">
        <h1>Profile</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
