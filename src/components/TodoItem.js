import React from 'react';

function TodoItem({ todo, onDelete, onPriorityChange }) {
  const { id, text, priority } = todo;

  const handleDelete = () => {
    onDelete(id);
  };

  const handlePriorityChange = (e) => {
    const newPriority = e.target.value;
    onPriorityChange(id, newPriority);
  };

  return (
    <li>
      <span>{text}</span>
      <select value={priority} onChange={handlePriorityChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
