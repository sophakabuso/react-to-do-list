import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === '') {
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      title: title.trim(),
      priority,
    };

    onAdd(newTodo);

    setTitle('');
    setPriority('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter Todo"
      />
      <select value={priority} onChange={handlePriorityChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
