import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Extension from "./Extension";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="main">
      <Header />
      <Nav onFilterChange={setFilter} activeFilter={filter} />
      <Extension filter={filter} />
    </div>
  );
}

export default App;
