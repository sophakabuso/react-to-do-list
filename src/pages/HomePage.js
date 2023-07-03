import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import Search from '../components/Search';
import TodoForm from '../components/TodoForm';

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState('');


  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
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

  const searchTodos = (priority) => {
    if (priority === '') {
      setFilteredTodos(todos);
    } else {
      const filteredTodos = todos.filter((todo) => todo.priority === priority);
      setFilteredTodos(filteredTodos);
    
    }
  };
  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  
    // Filter todos based on selected priority if there is a search in progress
    if (selectedPriority !== '') {
      const filteredTodos = updatedTodos.filter((todo) => todo.priority === selectedPriority);
      setFilteredTodos(filteredTodos);
    } else {
      setFilteredTodos(updatedTodos);
    }
  };
  

  return (
    <div>
      <h1>Todo List</h1>
      <Search onSearch={searchTodos} selectedPriority={selectedPriority} />

      <TodoForm onAdd={addTodo} />
      <TodoList todos={filteredTodos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
};

export default HomePage;
