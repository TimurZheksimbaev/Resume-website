import './Contact.css'
import { useTranslation } from '../hooks/useTranslation'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">06.</span>
          {t.contact.title}
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              {t.contact.intro}
            </p>
            <div className="contact-methods">
              <a href="mailto:tmrzheksimbaev.work@yahoo.com" className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">{t.contact.email}</span>
                  <span className="contact-value">tmrzheksimbaev.work@yahoo.com</span>
                </div>
              </a>
              <a href="tel:89242824975" className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">{t.contact.phone}</span>
                  <span className="contact-value">+7 (924) 282-49-75</span>
                </div>
              </a>
              <a 
                href="https://github.com/TimurZheksimbaev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">{t.contact.github}</span>
                  <span className="contact-value">github.com/TimurZheksimbaev</span>
                </div>
              </a>
              <a 
                href="https://t.me/masterhorny1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.559z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">{t.contact.telegram}</span>
                  <span className="contact-value">@masterhorny1</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <p>{t.contact.footer}</p>
        </div>
      </div>
    </section>
  )
}

export default Contact

