/** Form component for user login. 
 * 
 * Required form inputs:
 * {
	"username": "this_is_user",
	"password": "password"
 }
*/

import { useState } from "react";
import JoblyApi from "./api";

function LoginForm() {
  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  let [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // TODO: login method in App component to be passed down as prop
    let res = JoblyApi.login(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="LoginForm container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
