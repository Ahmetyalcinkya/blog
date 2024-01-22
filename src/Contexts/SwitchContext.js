import { createContext, useEffect, useState } from "react";

export const SwitchContext = createContext();

const SwitchContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("darkMode", theme);
  };

  return (
    <SwitchContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </SwitchContext.Provider>
  );
};

export default SwitchContextProvider;
