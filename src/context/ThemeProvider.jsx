import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";


export function ThemeProvider({ children }) {
  
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true"; 
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

