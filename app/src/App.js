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
import Categories from './pages/categories'
import Category from './pages/category'

function App() {
  const {token, setToken}= useToken();
  if (!token){
    return <Login setToken={setToken}/>
  }
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} token={token} />
          <Route path='/' element={<Dashboard/>} token={token}/>
          <Route path="/edit/:productId" element={<ProductEdit />} /> 
          <Route path="/categories" element={<Categories />} /> 
          <Route path="/category/:id" element={<Category />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;
