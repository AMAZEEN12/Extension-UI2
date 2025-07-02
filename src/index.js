import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import from "react-dom/client"
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
