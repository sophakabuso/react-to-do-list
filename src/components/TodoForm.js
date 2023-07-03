import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };
    onAdd(newTodo);
    setTitle('');
    setPriority('');
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Priority</label>
      <select value={priority} onChange={handlePriorityChange}>
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
