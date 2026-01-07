import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  return <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>;
}

export function ThemedText() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}
