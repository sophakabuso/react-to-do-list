

import React, { useState } from 'react';

function Update({ todo, onUpdate, onCancel }) {
  const [updatedText, setUpdatedText] = useState(todo ? todo.text : '');
  const [updatedPriority, setUpdatedPriority] = useState(todo ? todo.priority : 'low');

  const handleTextChange = (e) => {
    setUpdatedText(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setUpdatedPriority(e.target.value);
  };

  const handleUpdate = () => {
    onUpdate(todo.id, updatedText, updatedPriority);
  };

  const handleCancel = () => {
    onCancel();
  };

  if (!todo) {
    return null;
  }

  return (
    <div className="update">
      <input type="text" value={updatedText} onChange={handleTextChange} />
      <select value={updatedPriority} onChange={handlePriorityChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className="update-button" onClick={handleUpdate}>Update</button>
      <button className="cancel-button" onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default Update;
