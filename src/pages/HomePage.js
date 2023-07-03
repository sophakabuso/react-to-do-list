import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import Search from '../components/Search';
import TodoForm from '../components/TodoForm';

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setFilteredTodos([...todos, newTodo]); // Update filteredTodos when adding a new todo
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updatedTodo };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const searchTodos = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredTodos(todos);
    } else {
      const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTodos(filteredTodos);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Search onSearch={searchTodos} />
      <TodoForm onAdd={addTodo} />
      <TodoList todos={filteredTodos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
};

export default HomePage;
