import './Experience.css'
import { useTranslation } from '../hooks/useTranslation'

const Experience = () => {
  const { t } = useTranslation()
  const experiences = [
    {
      company: 'CryptoStoryBank',
      position: 'Frontend Developer',
      period: t.experience.cryptostorybank.period,
      description: t.experience.cryptostorybank.description,
      link: 'https://cryptostorybank.com',
      technologies: ['React', 'TypeScript', 'Redux', 'Admin Dashboard', "Web3", "Crypto", 'Microfrontends']
    },
    {
      company: 'Fora Soft',
      position: 'Fullstack Developer',
      period: t.experience.forasoft.period,
      description: t.experience.forasoft.description,
      link: 'https://forasoft.com',
      technologies: ['React', 'Node.js', 'REST API', 'Stripe', 'Webhooks', 'MongoDB', 'TypeScript']
    },
    {
      company: 'Pavepo',
      position: 'Frontend Developer',
      period: t.experience.pavepo.period,
      description: t.experience.pavepo.description,
      link: 'https://spb.hh.ru/employer/10180008?hhtmFrom=vacancy',
      technologies: ['React', 'Redux', 'Typescript', 'Vite', 'Sass', 'Telegram Mini Apps']
    },
    {
      company: 'Picturino AI',
      position: 'Fullstack Developer',
      period: t.experience.picturino.period,
      description: t.experience.picturino.description,
      link: 'https://www.linkedin.com/company/picturino-ai',
      technologies: ['React', 'Typescript', 'Python', 'AWS S3', 'OpenAI', 'Google AI']
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span>
          {t.experience.title}
        </h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-position">{exp.position}</h3>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-company"
                  >
                    @ {exp.company}
                  </a>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

