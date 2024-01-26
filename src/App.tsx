import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/HomeScreen'
import AboutUs from './components/AboutUsScreen'
import OurServices from './components/OurServices'
import ContackUs from './components/ContackUs'
import ProjectPortfolio from './components/ProjectPortfolio'
import Footer from './components/Footer'
import TeamCarousel from './components/OurTeam'
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
        <Route path="/project-portfolio" element={<ProjectPortfolio />} />
        <Route path="/products" element={<ProjectShowcase />} />
        <Route path="/team" element={<TeamCarousel />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
