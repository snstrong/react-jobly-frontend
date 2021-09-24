import { useState } from "react";

function SearchForm({ search }) {
  const INITIAL_STATE = { searchTerm: "" };
  let [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    search(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form className="SearchForm form-inline" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          id="searchTerm"
          name="searchTerm"
          onChange={handleChange}
          style={{ width: "18rem" }}
          placeholder="Search"
        />
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Go
      </button>
    </form>
  );
}

export default SearchForm;
