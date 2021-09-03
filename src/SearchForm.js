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
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm">Search</label>
      <input id="searchTerm" name="searchTerm" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;
