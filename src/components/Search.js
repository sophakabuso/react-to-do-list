import React, { useState } from 'react';

const Search = ({ onSearch, selectedPriority }) => {
  const [priority, setPriority] = useState('');

  const handleSearch = () => {
    onSearch(priority);
  };

  const handlePriorityChange = (e) => {
    const selectedPriority = e.target.value;
    setPriority(selectedPriority);
    onSearch(selectedPriority);
  };

  return (
    <div>
      <select value={priority} onChange={handlePriorityChange}>
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleSearch}>Search</button>
      <span>Selected Priority: {selectedPriority}</span>
    </div>
  );
};

export default Search;
