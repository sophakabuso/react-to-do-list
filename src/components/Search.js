
import React, { useState } from 'react';

function Search({ onSearch, todos }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handlePriorityChange = (e) => {
    // Look here: Check if the `todos` variable is defined and accessible
    console.log(todos);

    // Perform priority change logic
    // ...
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search todos"
      />
      <button type="submit">Search</button>

      <select onChange={handlePriorityChange}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </form>
  );
}

export default Search;
