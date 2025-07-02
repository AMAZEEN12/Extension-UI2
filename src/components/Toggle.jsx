import React from "react";

function ToggleSwitch({ isActive, onToggle }) {
  return (
    <div
      className={`toggle-container ${isActive ? "on" : "off"}`}
      onClick={onToggle}
    >
      <div className="toggle-circle" />
    </div>
  );
}

export default ToggleSwitch;
