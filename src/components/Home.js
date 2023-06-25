
import React, { useState } from 'react';

function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        priority: 'low' // Default priority is set to 'low'
      };

      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handlePriorityChange = (id, priority) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, priority } : todo)));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          placeholder="Add Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onPriorityChange={handlePriorityChange}
          />
        ))}
      </ul>
    </div>
  );
}

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

export default Home;
