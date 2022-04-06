import React from "react";
import NavBar from "./components/navbar";
import Login from "./components/login";
import { Route, Link, Router } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
