

import React from 'react';

function TodoItem({ todo, onDelete, onUpdatePriority, onUpdateTodo }) {
  const handlePriorityChange = (e) => {
    const priority = e.target.value;
    onUpdatePriority(todo.id, priority);
  };

  const handleTextChange = (e) => {
    const updatedText = e.target.value;
    onUpdateTodo(todo.id, updatedText);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className="todo-item">
      <input type="text" value={todo.text} onChange={handleTextChange} />
      <select value={todo.priority} onChange={handlePriorityChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
