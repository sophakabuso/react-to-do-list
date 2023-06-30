
// src/components/Home.js
import React, { useState, useRef, useEffect } from 'react';
import TodoItem from './TodoItem';
import Search from './Search';
import Select from 'react-select';
import shortid from 'shortid';

function Home({ searchTerm, setSearchTerm }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const todoListRef = useRef(null);

  useEffect(() => {
    if (todoListRef.current) {
      todoListRef.current.scrollTo(0, todoListRef.current.scrollHeight);
    }
  }, [filteredTodos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: shortid.generate(),
        text: newTodo,
        priority: selectedPriority ? selectedPriority.value : 'low',
      };

      setTodos((prevTodos) => [newTodoItem, ...prevTodos]);
      setNewTodo('');
      setSelectedPriority(null);
      setFilteredTodos((prevFilteredTodos) => [newTodoItem, ...prevFilteredTodos]);
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setFilteredTodos(filteredTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdatePriority = (id, priority) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, priority };
        }
        return todo;
      })
    );
    setFilteredTodos((prevFilteredTodos) =>
      prevFilteredTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, priority };
        }
        return todo;
      })
    );
  };

  const handleUpdateTodo = (id, updatedText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: updatedText };
        }
        return todo;
      })
    );
    setFilteredTodos((prevFilteredTodos) =>
      prevFilteredTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: updatedText };
        }
        return todo;
      })
    );
  };

  const handleSearchPriority = () => {
    if (selectedPriority) {
      const filtered = todos.filter((todo) => todo.priority === selectedPriority.value);
      setFilteredTodos(filtered);
    } else {
      setFilteredTodos(todos);
    }
  };

  const handleResetSearch = () => {
    setSelectedPriority(null);
    setFilteredTodos(todos);
  };

  const handleTextChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handlePriorityChange = (selectedOption) => {
    setSelectedPriority(selectedOption);
  };

  return (
    <div className="home">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={handleTextChange}
          placeholder="Add Todo..."
        />
        <Select
          className="select-priority"
          options={[
            { value: 'low', label: 'Low' },
            { value: 'medium', label: 'Medium' },
            { value: 'high', label: 'High' },
          ]}
          value={selectedPriority}
          onChange={handlePriorityChange}
          placeholder="Priority"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="search-bar">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button onClick={handleSearchPriority}>Search</button>
        <button onClick={handleResetSearch}>Reset</button>
      </div>
      <div className="todo-list" ref={todoListRef}>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onUpdatePriority={handleUpdatePriority}
            onUpdateTodo={handleUpdateTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
