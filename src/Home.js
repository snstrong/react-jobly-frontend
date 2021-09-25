import { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const { currentUser } = useContext(UserContext);

  function showLoggedIn() {
    return (
      <div className="mx-auto">
        <h2 id="landing-page-welcome">
          Welcome back, {currentUser.firstName || currentUser.username}!
        </h2>
      </div>
    );
  }

  function showLoggedOut() {
    return (
      <div className="mx-auto">
        <Link to="/signup" className="btn btn-primary mx-3">
          Sign Up
        </Link>
        <Link to="/login" className="btn btn-primary">
          Log In
        </Link>
      </div>
    );
  }

  return (
    <div className="Home container">
      <div className="card mx-auto mt-5 p-5" style={{ border: "none" }}>
        <h1
          className="mx-3 card-title mx-auto text-center"
          id="landing-page-title"
        >
          Jobly
        </h1>
        <p
          className="mx-3 mx-auto text-muted text-center"
          id="landing-page-subtitle"
        >
          All the jobs in one convenient place.
        </p>
        <div className="card-body mx-auto">
          {currentUser ? showLoggedIn() : showLoggedOut()}
        </div>
      </div>
    </div>
  );
}

export default Home;
