"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ContextApi({ children }) {
  const [isDark, setIsDark] = useState(true);
  const [aboutPageOpen, setAboutPageOpen] = useState(false);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    setIsDark(localStorage.getItem("isDark") === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme, aboutPageOpen, setAboutPageOpen }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ContextApi;

export const useTheme = () => useContext(ThemeContext);
export const useAboutButton = () => useContext(ThemeContext)