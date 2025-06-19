import { useEffect, useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const Theme = localStorage.getItem("theme");
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  function handleThemeToggle() {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }
  return (
    <button
      className="cursor-pointer bg-primary/30 top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden"
      onClick={handleThemeToggle}
    >
      {isDarkMode ? (
        <FaRegSun className="h-6 w-6 text-foreground" />
      ) : (
        <FaRegMoon className="h-6 w-6 text-foreground" />
      )}
    </button>
  );
}

export default ThemeToggle;
