

// TodoItem.js
import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onUpdatePriority, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo.text);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleUpdatePriority = (e) => {
    const newPriority = e.target.value;
    onUpdatePriority(todo.id, newPriority);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdateTodo = () => {
    onUpdateTodo(todo.id, updatedTodo);
    setIsEditing(false);
  };

  return (
    <div>
      <span>{todo.text}</span>
      <span>Priority:</span>
      <select
        value={todo.priority}
        onChange={handleUpdatePriority}
        disabled={isEditing}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
          <button onClick={handleUpdateTodo}>Update</button>
        </div>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
