import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/dashboard';
import Login from './components/LoginForm/login';
import useToken from './useToken';
import './app.css'
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
        <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
