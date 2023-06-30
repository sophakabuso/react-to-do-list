

import React from 'react';

const TodoItem = ({ todo, handlePriorityChange }) => {
  const { id, title, completed, priority } = todo;

  const setHighPriority = () => {
    handlePriorityChange(id, 'High');
  };

  const setLowPriority = () => {
    handlePriorityChange(id, 'Low');
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>Completed: {completed ? 'Yes' : 'No'}</p>
      <p>Priority: {priority}</p>
      <button onClick={setHighPriority}>Set High Priority</button>
      <button onClick={setLowPriority}>Set Low Priority</button>
    </div>
  );
};

export default TodoItem;
