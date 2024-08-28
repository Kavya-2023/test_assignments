
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  const handleRemoveTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', index });
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleRemoveTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
