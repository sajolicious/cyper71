import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/HomeScreen'

import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import ContackUs from './components/ContackUs'
import Footer from './components/Footer'
import ProjectShowcase from './components/OurProjects'
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContackUs />} />
        <Route path="/products" element={<ProjectShowcase />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
