import React from "react";

function Nav({ onFilterChange, activeFilter }) {
  return (
    <nav>
      <div>
        <p className="list">Extensions List</p>
      </div>

      <div className="mobile">
        <button
          className={`button1 ${activeFilter === "all" ? "active-btn" : ""}`}
          onClick={() => onFilterChange("all")}
          id="btn2"
        >
          All
        </button>
        <button
          className={`button1 ${activeFilter === "active" ? "active-btn" : ""}`}
          id="btn3"
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
        <button
          className={`button1 ${
            activeFilter === "inactive" ? "active-btn" : ""
          }`}
          id="btn4"
          onClick={() => onFilterChange("inactive")}
        >
          Inactive
        </button>
      </div>
    </nav>
  );
}

export default Nav;
