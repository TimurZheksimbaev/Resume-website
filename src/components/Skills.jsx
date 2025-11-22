import './Skills.css'
import { useTranslation } from '../hooks/useTranslation'

const Skills = () => {
  const { t } = useTranslation()
  const skillCategories = [
    {
      category: t.skills.frontend,
      skills: [
        'React',
        'Vue',
        'JavaScript',
        'TypeScript',
        'HTML/CSS',
        'Next.js',
        'Nuxt.js',
        'Sass',
        'Tailwind',
        "Vite",
        "Webpack"
      ]
    },
    {
      category: t.skills.backend,
      skills: [
        'Node.js',
        'Python',
        'FastAPI',
        'Express',
        'REST API',
        'MongoDB',
      ]
    },
    {
      category: t.skills.tools,
      skills: [
        'Git',
        'Docker',
        'CI/CD',
        'Jest',
        'Unit Testing',
        'Webpack',
        'Vite'
      ]
    },
    {
      category: t.skills.softSkills,
      skills: [
        'Agile/Scrum',
        'Работа в команде',
        'Аналитическое мышление',
        'Коммуникация',
        'Решение проблем',
        'Менторинг'
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">04.</span>
          {t.skills.title}
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

