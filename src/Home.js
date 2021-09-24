import { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";

function Home() {
  const { currentUser } = useContext(UserContext);

  function showLoggedIn() {
    return (
      <div className="mx-auto">
        <h2>Welcome back, {currentUser.firstName || currentUser.username}!</h2>
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
      <div
        className="card mx-auto mt-5 p-5"
        style={{ width: "30rem", border: "none" }}
      >
        <h1 className="mx-3 card-title mx-auto display-1">Jobly</h1>
        <div className="card-body mx-auto">
          {currentUser ? showLoggedIn() : showLoggedOut()}
        </div>
      </div>
    </div>
  );
}

export default Home;
