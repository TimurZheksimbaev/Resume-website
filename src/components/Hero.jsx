import './Hero.css'
import { useTranslation } from '../hooks/useTranslation'
import githubIcon from '../assets/github.svg'
import emailIcon from '../assets/mail.svg'
import phoneIcon from '../assets/phone.svg'
import telegramIcon from '../assets/telegram.svg'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">{t.hero.greeting}</span>
            <span className="name">{t.hero.name}</span>
            <span className="role">{t.hero.role}</span>
          </h1>
          <p className="hero-description">
            {t.hero.description}
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              {t.hero.contactButton}
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/TimurZheksimbaev" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
            <a href="mailto:tmrzheksimbaev.work@yahoo.com" className="social-link">
              <img src={emailIcon} alt="Email" className="social-icon" />
            </a>
            <a href="tel:89242824975" className="social-link">
              <img src={phoneIcon} alt="Phone" className="social-icon" />
            </a>
            <a href="https://t.me/masterhorny1" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={telegramIcon} alt="Telegram" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>{t.hero.scrollText}</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero

