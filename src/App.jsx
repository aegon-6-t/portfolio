import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import TechWatch from './components/TechWatch'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* En-tête avec navigation */}
      <Header />

      {/* Section héro - Présentation principale */}
      <Hero />

      {/* Section à propos */}
      <About />

      {/* Section compétences */}
      <Skills />

      {/* Section projets */}
      <Projects />

      {/* Section expérience/parcours */}
      <Experience />

      {/* Section veille technologique */}
      <TechWatch />

      {/* Section contact */}
      <Contact />

      {/* Pied de page */}
      <Footer />
    </div>
  )
}

export default App
