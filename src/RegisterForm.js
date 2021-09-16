/** Form component for registering a user. 
 * 
 * Required form inputs:
 * {
	"username": "this_is_user",
	"password": "password",
	"firstName": "First",
	"lastName": "Last",
	"email": "emailme@gmail.com"
}
*/

import { useState } from "react";
import JoblyApi from "./api";

function RegisterForm({ register }) {
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
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
    // let res = JoblyApi.register(formData); // TODO: register method in App component, to be passed down as prop
    register(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="RegisterForm container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            className="form-control"
            id="username"
            name="username"
            onChange={handleChange}
            value={formData.username}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
