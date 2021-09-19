import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import UserContext from "./UserContext";

function Nav({ logout }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);
  function loggedInNav() {
    return (
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/companies">Companies</NavLink>
        </li>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={logout}>
            Log Out
          </NavLink>
        </li>
      </ul>
    );
  }

  function loggedOutNav() {
    return (
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="Nav">
      <h1 id="site-logo">Jobly</h1>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default Nav;
