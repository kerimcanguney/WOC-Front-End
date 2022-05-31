import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/dashboard';
import ProductEdit from './pages/productEdit.js';
import Login from './components/LoginForm/login';
import useToken from './useToken';
import './app.css'
import Home from './pages/home' 
function App() {
  const {token, setToken}= useToken();
  if (!token){
    return <Login setToken={setToken}/>
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/' element={<Home/>} />
          <Route path="/edit/:productId" element={<ProductEdit />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
