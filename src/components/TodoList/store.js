
import { createStore } from 'redux';

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.index),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
