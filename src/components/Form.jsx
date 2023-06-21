import React from "react";

// eslint-disable-next-line react/prop-types
function Form({ onSubmit }) {
  const [query, setQuery] = React.useState("");

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (query.trim() === "") {
      alert("Please enter more specific query");
      return;
    }

    onSubmit(query);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
