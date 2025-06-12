// action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// action creators
const addTodo = (text) => ({ type: ADD_TODO, text });
const toggleTodo = (index) => ({ type: TOGGLE_TODO, index });

// initial state
const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
};

// reducer
function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        // Redux relies on shallow comparison to detect state changes. By returning new objects for updated 
        // parts of the state, you allow Redux to efficiently determine if a state update has occurred.

        ...state, // Create a **new** object with all properties from the current state eg: todos & visibilityFilter: 'SHOW_ALL'
        todos: [  // Override the `todos` property with a new array
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

// store
const redux = require('redux');
const store = redux.createStore(todoApp);
// or
// import { createStore } from 'redux';
// const store = createStore(todoApp);

// dispatch actions
store.dispatch(addTodo('Learn Redux'));
store.dispatch(addTodo('Build an app'));
store.dispatch(toggleTodo(0));

// get the current state
console.log(store.getState());




// const state = {
//   todos: [{ text: 'Learn Redux', completed: false }],
//   visibilityFilter: 'SHOW_ALL',
// };


// function addTodoMutating(state, action) {
//   state.todos.push({ text: action.text, completed: false });
//   return state;
// }

// const newState = addTodoMutating(state, { type: ADD_TODO, text: 'Build an app' });
// console.log(state === newState); // true, state was mutated


// function addTodoImmutable(state, action) {
//   return {
//     ...state,
//     todos: [
//       ...state.todos,
//       { text: action.text, completed: false },
//     ],
//   };
// }

// const newState = addTodoImmutable(state, { type: ADD_TODO, text: 'Build an app' });
// console.log(state === newState); // false, state was not mutated
