import { useState } from "react";

function SearchForm() {
  let [formData, setFormData] = useState(null);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
