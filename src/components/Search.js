
import React, { useState, useEffect } from 'react';

function Search({ todos = [], onDelete, onEdit }) {
  const [selectedPriority, setSelectedPriority] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handlePriorityChange = (e) => {
    const priority = e.target.value;
    setSelectedPriority(priority);

    if (priority) {
      const filtered = todos.filter((todo) => todo.priority === priority);
      setFilteredTodos(filtered);
    } else {
      setFilteredTodos(todos);
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setFilteredTodos(updatedTodos);
    onDelete && onDelete(id);
  };

  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setFilteredTodos(updatedTodos);
    onEdit && onEdit(id, newText);
  };

  return (
    <div>
      <select value={selectedPriority} onChange={handlePriorityChange}>
        <option value="">Filter by Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text} (Priority: {todo.priority})
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleEdit(todo.id, 'Updated Text')}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
