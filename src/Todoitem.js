import React, { useContext } from "react";
import { TodoContext } from "./Context/TodoContext";
const Todoitem = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div>
      {state.map((todo) => (
        <div key={todo.id}>
          <h1 style={{ textDecoration: todo.completed && "line-through" }}>
            {todo.task}
          </h1>
          <button
            onClick={() => dispatch({ type: "Delete_Todo", id: todo.id })}
          >
            Delete
          </button>
          <input
            onClick={() => dispatch({ type: "Toggle_Todo", id: todo.id })}
            type="checkbox"
            name="checkbox"
            id="checkbox"
            defaultChecked={todo.completed}
          />
        </div>
      ))}
    </div>
  );
};

export default Todoitem;
