import React, { useState } from "react";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import { Route, Link, Router } from "react-router-dom";
import Home from "./components/home";

function App() {
  const TestUser = {
    email: "test@pim.com",
    password: "test123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };

  const Logout = () => {
    console.log("logout");
  };
  return (
    <div className="App">
      <NavBar />

      {user.email != "" ? (
        <div className="welcome">
          <h2>
            {" "}
            Welcome, <span>{user.name}</span>
          </h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
