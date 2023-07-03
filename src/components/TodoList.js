// TodoList.js
import React from 'react';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} - Priority: {todo.priority}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
