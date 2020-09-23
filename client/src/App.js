import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Todos from "./Todos.js";

const initialState = {
  user: {
    firstName: "John"
  },
  todos: [
    {
      text: "do the laundry",
      done: false,
    },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            return { ...todo, done: !todo.done };
          } else {
            return todo;
          }
        }),
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: action.text, done: false }]
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log("new state", store.getState());
});

function App() {
  return (<Provider store={store}>
    <div className="App">
      <Todos/>
    </div>
  </Provider>);
}

export default App;
