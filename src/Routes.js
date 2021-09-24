import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobDetail from "./JobDetail";
import JobList from "./JobList";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";
import Home from "./Home";

const Routes = ({ login, register, updateUser }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <ProtectedRoute exact path="/companies">
        <CompanyList />
      </ProtectedRoute>
      <ProtectedRoute exact path="/companies/:handle">
        <CompanyDetail />
      </ProtectedRoute>
      <ProtectedRoute exact path="/jobs">
        <JobList />
      </ProtectedRoute>
      <ProtectedRoute exact path="/jobs/:id">
        <JobDetail />
      </ProtectedRoute>
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>
      <Route exact path="/signup">
        <RegisterForm register={register} />
      </Route>
      <ProtectedRoute exact path="/profile">
        <ProfileForm updateUser={updateUser} />
      </ProtectedRoute>
      <Route exact path="/logout">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
