import React, { useState } from 'react';
import Update from './Update';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const { id, title, priority } = todo;
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedTodo) => {
    setIsEditing(false);
    onEdit(id, updatedTodo);
  };

  return (
    <li>
      {isEditing ? (
        <Update todo={todo} onUpdate={handleUpdate} />
      ) : (
        <div>
          <span>{title}</span>
          <span>{priority}</span>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
