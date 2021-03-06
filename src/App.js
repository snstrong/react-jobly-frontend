import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";

import UserContext from "./UserContext";
import useLocalStorage from "./useLocalStorage";
import Routes from "./Routes";
import "./App.css";
import JoblyApi from "./api";
import Nav from "./Nav";

function App() {
  const TOKEN_STORAGE_ID = "jobly-token";

  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  // console.debug(
  //   "App",
  //   "infoLoaded=",
  //   infoLoaded,
  //   "currentUser=",
  //   currentUser,
  //   "token=",
  //   token
  // );

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(
    function loadUserInfo() {
      // console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            // put the token on the Api class so it can use it to call the API.
            JoblyApi.token = token;
            let currentUser = await JoblyApi.getCurrentUser(username);
            setCurrentUser(currentUser);
            setApplicationIds(new Set(currentUser.applications));
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setCurrentUser(null);
          }
        }
        setInfoLoaded(true);
      }

      // set infoLoaded to false while async getCurrentUser runs; once the
      // data is fetched (or even if an error happens!), this will be set back
      // to false to control the spinner.
      setInfoLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  /** Handles site-wide logout. */
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  /** Site-wide login
   */
  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  async function register(signupData) {
    try {
      let token = await JoblyApi.register(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("registration failed", errors);
      return { success: false, errors };
    }
  }

  async function updateUser(username, userData) {
    try {
      let user = await JoblyApi.updateCurrentUser(username, userData);
      setCurrentUser(user);
      return { success: true };
    } catch (errors) {
      console.error("User update failed", errors);
      return { success: false, errors };
    }
  }

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /** Apply to job. */
  async function apply(jobId) {
    if (hasAppliedToJob(jobId)) return;
    try {
      await JoblyApi.applyToJob(currentUser.username, jobId);
      setApplicationIds(new Set([...applicationIds, jobId]));
      return { success: true };
    } catch (errors) {
      console.error("Job application failed", errors);
      return { success: false, errors };
    }
  }

  if (!infoLoaded) return <div>Loading...</div>;

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, apply, hasAppliedToJob }}
        >
          <Nav logout={logout} />
          <Routes login={login} register={register} updateUser={updateUser} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
