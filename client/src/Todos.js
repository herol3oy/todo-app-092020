import React from "react";

import {useDispatch, useSelector} from "react-redux";

export default function() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const userFirstName = useSelector((state) => state.user.firstName);
  const [text, setText] = React.useState("");

  const addTodo = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TODO",
      text
    });

    setText("");
  };

  return <div>
    <h1>hello {userFirstName}</h1>
    <form action="" onSubmit={addTodo}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button>Add todo</button>
    </form>
    <ul>
      {todos.map(todo => (<li>{todo.text}</li>))}
    </ul>
  </div>;
}
