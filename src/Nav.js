import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <h1 id="site-logo">Jobly</h1>
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
          <NavLink to="/logout">Log Out</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
