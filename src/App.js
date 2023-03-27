import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import { Login } from './components/Pages/Login';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/login" element={<Login />} /> 
            </Routes>
        </Router >
    );
}

export default App;
