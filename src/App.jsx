import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Company from './components/Company'
import TechWatch from './components/TechWatch'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'
import BTS from './components/BTS'

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Company />
      <TechWatch />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/bts" element={<BTS />} />
    </Routes>
  )
}

export default App
