import './Education.css'
import { useTranslation } from '../hooks/useTranslation'

const Education = () => {
  const { t } = useTranslation()
  const education = [
    {
      institution: t.education.yandex.institution,  
      degree: t.education.yandex.degree,
      field: t.education.yandex.field,
      period: t.education.yandex.period,
      description: t.education.yandex.description,
    },
      {
      institution: t.education.inno.institution,
      degree: t.education.inno.degree,
      field: t.education.inno.field,
      period: t.education.inno.period,
      description: t.education.inno.description,
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span>
          {t.education.title}
        </h2>
        <div className="education-content">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <div className="education-details">
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-degree">{edu.degree}</p>
                <p className="education-field">{edu.field}</p>
                <span className="education-period">{edu.period}</span>
                <ul className="education-description">
                  {edu.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

