import { useState, useEffect } from "react";

import "./Darkswichmode.css";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
  }, [darkMode]);

  return (
<label className="switchmode">  
  
<label className="switch">
      <input type="checkbox" onClick={() => setDarkMode(!darkMode)}/>
      <span className="slider"></span>
    </label>
</label>
  );
}
