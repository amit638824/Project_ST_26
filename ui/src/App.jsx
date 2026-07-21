import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* common url */}
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact-us' element={<Contactus />} />
          <Route path='/about-us' element={<Aboutus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
