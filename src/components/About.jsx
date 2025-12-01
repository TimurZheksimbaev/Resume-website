import './About.css'
import { useTranslation } from '../hooks/useTranslation'

const About = () => {
  const { t } = useTranslation()

  return 
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span>
          {t.about.title}
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🖥️</span>
                <span>{t.about.highlights.frontend}</span>

              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤖</span>
                <span>{t.about.highlights.ai}</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">⛓</span>
                <span>{t.about.highlights.blockchain}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
}

export default About

