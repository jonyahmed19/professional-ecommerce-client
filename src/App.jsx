import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import './App.css'
import Menu from "./components/nav/Menu.jsx";
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";

function App() {


  return (
    <BrowserRouter>
      <Menu />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
