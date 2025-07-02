import React from "react";
import ToggleSwitch from "./Toggle";

function Button(props) {
  const handleClick = (e) => {
    e.target.classList.add("clicked");
  };

  return (
    <div className="button2">
      <button className="remove button1" onClick={handleClick}>
        Remove
      </button>
      <ToggleSwitch isActive={props.isActive} onToggle={props.onToggle} />
    </div>
  );
}

export default Button;
