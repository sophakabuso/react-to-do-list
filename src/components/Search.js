import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [selectedPriority, setSelectedPriority] = useState('');

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const handleSearch = () => {
    onSearch(selectedPriority);
  };
  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };
  

  return (
    <div>
      <select value={selectedPriority} onChange={handlePriorityChange}>
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
