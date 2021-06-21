import React, { createContext, useReducer, useEffect } from "react";
import TodoReducer, { initialState } from "../Reducer/TodoReducer";
export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    TodoReducer,
    JSON.parse(
      window.localStorage.getItem("todos") || JSON.stringify(initialState)
    )
  );

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, initialState, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
