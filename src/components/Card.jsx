import React from "react";
import Logo from "./Logo";
import Button from "./Button";

function Card(props) {
  return (
    <div className="boxing">
      <div className="card">
        <Logo src={props.logo} className="card-logo" />
        <div className="card-content">
          <h3 className="card-title">{props.name}</h3>
          <p className="card-description">{props.description}</p>
        </div>
      </div>
      <div>
        <Button
          className="card-button"
          isActive={props.isActive}
          onToggle={props.onToggle}
        />
      </div>
    </div>
  );
}

export default Card;
