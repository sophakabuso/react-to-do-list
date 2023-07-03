import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const { id, title, priority } = todo;

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id);
  };

  return (
    <li>
      <div>
        <span>{title}</span>
        <span>{priority}</span>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </li>
  );
};

export default TodoItem;
