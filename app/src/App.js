import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/LoginForm/login';
import Preferences from './components/Prefrences';
import useToken from './useToken';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }


function App() {
  const {token, setToken}= useToken();
  if (!token){
    return <Login setToken={setToken}/>
  }
  return (
    <>
    <h1>Applicatie</h1>
      <BrowserRouter>
        <Routes>
        <Route path='/preferences' element={<Preferences/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
