
import React from 'react';

const Search = ({ todos, setFilteredTodos }) => {
  const handlePriorityChange = (e) => {
    const priority = e.target.value;

    if (priority === 'all') {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter((todo) => todo.priority === priority);
      setFilteredTodos(filtered);
    }
  };

  return (
    <div>
      <label htmlFor="priority">Filter by Priority:</label>
      <select id="priority" onChange={handlePriorityChange}>
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default Search;
