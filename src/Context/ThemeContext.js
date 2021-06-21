import React, { createContext } from "react";
import useDarkMode from "../hooks/useDarkMode";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode("dark");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
