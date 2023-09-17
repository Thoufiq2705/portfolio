import React from 'react'
import Navbar from './components/Navbarr/Navbar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume.jsx'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
    </div>
  )
}

export default App