

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Class from './components/Pages/Class';
import Products from './components/Pages/Products';
import ContactUs from './components/Pages/ContactUs';
import Marketing from './components/Pages/Marketing';
import Consulting from './components/Pages/Consulting';
import  {Login}  from './components/Pages/Login'



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/class' element={<Class />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/consulting' celement={<Consulting />} />
      </Routes>
    </Router>
  );
}

export default App;