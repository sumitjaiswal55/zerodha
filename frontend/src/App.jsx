import React from 'react';
import About from './landingPage/about/About'
import PricingPage from './landingPage/pricing/PricingPage'
import ProductPage from './landingPage/product/ProductPage'
import Signup from './landingPage/signup/Signup'
import SupportPage from './landingPage/support/SupportPage'
import Navbar from './Navbar'
import Footer from './Footer';
import HomePage from './landingPage/home/HomePage';
import NotFound from './NotFound'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/product" element={<ProductPage />} ></Route>
          <Route path="/pricing" element={<PricingPage />} ></Route>
          <Route path="/support" element={<SupportPage />} ></Route>
          <Route path="*" element={<NotFound />} ></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
