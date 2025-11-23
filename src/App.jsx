import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'certificates', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Scroll reveal animation
      const elements = document.querySelectorAll('.fade-in')
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      </div>
  )
}

export default App
