import './Projects.css'
import { useTranslation } from '../hooks/useTranslation'
import ProjectImageSlider from './ProjectImageSlider'

import brainwavePhoto1 from '../assets/projects/brainwave/brainwave1.png'
import brainwavePhoto2 from '../assets/projects/brainwave/brainwave2.png'
import brainwavePhoto3 from '../assets/projects/brainwave/brainwave3.png'
import brainwavePhoto4 from '../assets/projects/brainwave/brainwave4.png'

import docsnowPhoto1 from '../assets/projects/docsnow/docsnow1.png'
import docsnowPhoto2 from '../assets/projects/docsnow/docsnow2.png'
import docsnowPhoto3 from '../assets/projects/docsnow/docsnow3.png'

import bearscribesPhoto1 from '../assets/projects/bearscribes/bearscribes1.png'
import bearscribesPhoto2 from '../assets/projects/bearscribes/bearscribes2.png'
import bearscribesPhoto3 from '../assets/projects/bearscribes/bearscribes3.png'

import careerprepPhoto1 from '../assets/projects/careerprep/careerprep1.png'
import careerprepPhoto2 from '../assets/projects/careerprep/careerprep2.png'
import careerprepPhoto3 from '../assets/projects/careerprep/careerprep3.png'

import yandexPhoto1 from '../assets/projects/yandex/yandex1.png'
import yandexPhoto2 from '../assets/projects/yandex/yandex2.png'
import yandexPhoto3 from '../assets/projects/yandex/yandex3.png'

import resumePhoto from '../assets/projects/resume.png'

const Projects = () => {
  const { t } = useTranslation()
  const projects = [
    {
      title: 'Brainwave',
      photos: [brainwavePhoto1, brainwavePhoto2, brainwavePhoto3, brainwavePhoto4],
      description: 'Лэндинг для ИИ чата с возможностью генерации фото и видео',
      technologies: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      link: 'https://brainwave-azure.vercel.app/',
      github: "https://github.com/TimurZheksimbaev/AI-App-Landing-Page",
      featured: true
    },
    {
      title: "Проект от Яндекс Маркета (Школа разработки интерфейсов Яндекса)",
      photos: [yandexPhoto1, yandexPhoto2, yandexPhoto3],
      description: 'Проект от Яндекс Маркета во время Школы разработки интерфейсов Яндекса. Сервис модерации черновиков тарифов (Тарифница)',
      technologies: ['React', 'Typescript', 'Redux', 'Sass', 'GravityUI'],
      link: null,
      github: null,
      featured: true
    },
    {
      title: 'DocsNow',
      photos: [docsnowPhoto1, docsnowPhoto2, docsnowPhoto3],
      description: 'Онлайн редактор текста с возможностью работы в реальном времени с другими людьми',
      technologies: ['React', 'Next.js', 'Typescript','Sentry', 'Clerk', 'Liveblocks', 'Tailwind'],
      link: 'https://real-time-online-docs-app.vercel.app/',
      github: 'https://github.com/TimurZheksimbaev/Real-Time-Online-Docs-App',
      featured: true
    },
    {
      title: 'BearScribes',
      photos: [bearscribesPhoto1, bearscribesPhoto2, bearscribesPhoto3],
      description: 'Веб приложение-библиотека, вы можете искать книги и добавлять в "Избранное" и многое другое',
      technologies: ['React', 'Next.js', 'Typescript', 'Tailwind'],
      link: 'https://bear-scribes-vercel.vercel.app/',
      github: 'https://github.com/IU-Team-Projects/BearScribes',
      featured: true
    },
    {
      title: 'CareerPrep AI',
      photos: [careerprepPhoto1, careerprepPhoto2, careerprepPhoto3],
      description: 'Платформа для подготовки к собеседованию в формате аудиозвонка с ИИ',
      technologies: ['React', 'Next.js', 'Typescript', 'Firebase', 'Vapi', 'Tailwind'],
      link: 'https://ai-interview-platform-navy.vercel.app',
      github: 'https://github.com/TimurZheksimbaev/AI-Interview-Platform',
      featured: true
    },
    {
      title: "Resume website",
      photos: [resumePhoto],
      description: 'Персональный сайт-портфолио с современным дизайном и анимациями. Адаптивная верстка.',
      technologies: ['React', 'Vite', 'TypeScript'],
      link: '',
      github: 'https://github.com/TimurZheksimbaev/Resume-website',
      featured: true
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">05.</span>
          {t.projects.title}
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <ProjectImageSlider photos={project.photos} title={project.title} />
              <div className="project-header">
                <div className="project-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="External link"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

