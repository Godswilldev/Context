import React, { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { Global } from "./Global";
import { lightTheme, darkTheme } from "./Theme";
import Hero from "./Hero";
import Todoapp from "./Todoapp";
import { TodoProvider } from "./Context/TodoContext";
const App = () => {
  const { theme } = useContext(ThemeContext);
  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <div>
      <Global theme={mode} />
      <Hero />
      <TodoProvider>
        <Todoapp />
      </TodoProvider>
    </div>
  );
};

export default App;
