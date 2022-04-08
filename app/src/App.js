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

    //controleren of de api een account teruggeeft
    // gegevens opsturen en dan : if account then logged in, no account is niet logged in.
    //if (details.email == apidingetje && details.password == apidingetje ) {
    //  console.log("logged in")
    //  setUser ({ 
    //    name: details.name,
    //    email: details.ema
    //  })
    
  } else { 
      console.log("inloggegevens onjuist")
    }
  };

  const Logout = () => {
    console.log("logout");
    setUser({name: "", email: "" }) 
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
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
