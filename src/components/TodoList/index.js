
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Todo from './todo';

function TodoList() {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
  );
}

export default TodoList;
