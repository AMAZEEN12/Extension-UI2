import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="head">
      <img src={logo} alt="logo" className="logo1" />

      <ThemeToggle />
    </header>
  );
}

export default Header;
