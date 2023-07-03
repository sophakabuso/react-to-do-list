import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onEdit }) {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');

  // Filter the todos based on the selected filter option
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'active') {
      return !todo.completed;
    }
    return true;
  });

  // Sort the todos based on the selected sort option
  const sortedTodos = [...filteredTodos];
  if (sort === 'priority') {
    sortedTodos.sort((a, b) => a.priority.localeCompare(b.priority));
  } else if (sort === 'dueDate') {
    sortedTodos.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  } else if (sort === 'title') {
    sortedTodos.sort((a, b) => a.title.localeCompare(b.title));
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Filter:</label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </div>
      <div>
        <label>Sort:</label>
        <select value={sort} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
          <option value="title">Title</option>
        </select>
      </div>
      <ul>
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
