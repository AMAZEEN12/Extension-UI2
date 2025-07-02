import React, { useState, useEffect } from "react";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? "dark-mode" : "light-mode";
  }, [isDark]);

  return (
    <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
      <img
        src={isDark ? iconSun : iconMoon}
        alt="Theme Icon"
        className="theme-icon"
      />
    </button>
  );
}

export default ThemeToggle;
