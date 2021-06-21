import React, { useContext } from "react";
import useInputState from "./hooks/useFormState";
import { TodoContext } from "./Context/TodoContext";

const TodoInput = () => {
  const { dispatch } = useContext(TodoContext);
  const [task, setTask, reset] = useInputState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        else {
          dispatch({ type: "Add_Todo", task: task });
          reset();
        }
      }}
    >
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter Todo here..."
        value={task}
        onChange={setTask}
      />
    </form>
  );
};

export default TodoInput;
