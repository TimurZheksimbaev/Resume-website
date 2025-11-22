import { useState, useEffect } from 'react'
import './Header.css'
import { useTranslation } from '../hooks/useTranslation'
import { useLanguage } from '../contexts/LanguageContext'
import profilePhoto from '../assets/photo.jpg'

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { t } = useTranslation()
  const { language, toggleLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Показываем хэдер в самом верху страницы
      if (currentScrollY < 100) {
        setIsScrolledDown(false)
      } else {
        // Скрываем при скролле вниз, показываем при скролле вверх
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsScrolledDown(true)
        } else if (currentScrollY < lastScrollY) {
          setIsScrolledDown(false)
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'education', label: t.nav.education },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <header className={`header ${isScrolledDown ? 'hidden' : ''}`}>
      <nav className="nav">
        <div className="nav-brand">
          <div className="profile-photo">
            <img src={profilePhoto} alt="Profile" />
          </div>
          <span className="brand-text">Тимур Жексимбаев</span>
        </div>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="language-toggle">
            <button 
              onClick={toggleLanguage}
              className="lang-btn"
              aria-label="Toggle language"
            >
              {language === 'ru' ? 'EN' : 'RU'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

