import { useState, useContext, useEffect } from "react";
import UserContext from "./UserContext";

function ProfileForm({ updateUser }) {
  const { currentUser } = useContext(UserContext);
  const [formData, setFormData] = useState(null);
  const [updated, setUpdated] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    let res = await updateUser(currentUser.username, formData);
    res.success ? setUpdated(true) : console.error(res.errors);
  }

  useEffect(() => {
    setFormData({
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      password: "",
    });
  }, [currentUser]);

  if (!formData) return <h3>Loading...</h3>;

  return (
    <div className="ProfileForm container pt-5">
      <h2 className="mx-auto text-center">Profile</h2>
      <div className="card mx-auto" style={{ width: "30rem" }}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 form-group">
              <label className="form-label">Username</label>
              <p className="form-control-plaintext">{currentUser.username}</p>
              {updated && (
                <div className="alert alert-success">
                  Profile successfully updated!
                </div>
              )}
            </div>

            <div className="mb-3 form-group">
              <label className="form-label" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                className="form-control"
              ></input>
            </div>

            <div className="mb-3 form-group">
              <label className="form-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                className="form-control"
              ></input>
            </div>

            <div className="mb-3 form-group">
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
              ></input>
            </div>

            <div className="mb-3 form-group">
              <label className="form-label" htmlFor="password">
                New Password
              </label>
              <input
                type="password"
                autoComplete="new-password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="form-control"
              ></input>
            </div>

            <button className="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
