
// Home.js
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import Search from './Search';
import TodoList from './TodoList';

function Home() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

    const todo = {
      id: new Date().getTime().toString(),
      text: newTodo,
      priority: selectedPriority,
    };

    setTodos((prevTodos) => [...prevTodos, todo]);
    setNewTodo('');
    setSelectedPriority('');
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdatePriority = (id, priority) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, priority: priority } : todo
      )
    );
  };

  const handleUpdateTodo = (id, text) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: text } : todo
      )
    );
  };

  const handleSearch = (searchTerm) => {
    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodos(filteredTodos);
  };

  const handleSearchPriority = (priority) => {
    const filteredTodos = todos.filter((todo) => todo.priority === priority);
    setFilteredTodos(filteredTodos);
  };

  const handleResetSearch = () => {
    setFilteredTodos(todos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo"
        />
        <select
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value)}
        >
          <option value="">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <h2>Todos</h2>
        <TodoList todos={filteredTodos} />
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onUpdatePriority={handleUpdatePriority}
            onUpdateTodo={handleUpdateTodo}
          />
        ))}
      </div>
      <div>
        <Search
          onSearch={handleSearch}
          onSearchPriority={handleSearchPriority}
          onResetSearch={handleResetSearch}
        />
      </div>
    </div>
  );
}

export default Home;
