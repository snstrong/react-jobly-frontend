import { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";

function Home() {
  const { currentUser } = useContext(UserContext);

  function showLoggedIn() {
    return (
      <h2>Welcome back, {currentUser.firstName || currentUser.username}!</h2>
    );
  }

  function showLoggedOut() {
    return (
      <div>
        <Link to="/signup" className="btn btn-primary">
          Sign Up
        </Link>
        <Link to="/login" className="btn btn-primary">
          Log In
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Jobly</h1>
      {currentUser ? showLoggedIn() : showLoggedOut()}
    </div>
  );
}

export default Home;
