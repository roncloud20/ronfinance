import './App.css';
import React from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from './Pages/RegistrationForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<RegistrationForm/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;