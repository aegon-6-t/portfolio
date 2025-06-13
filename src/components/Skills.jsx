import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Langages de programmation",
      icon: "💻",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "PHP", level: 75 },
        { name: "Java", level: 70 },
        { name: "Python", level: 65 }
      ]
    },
    {
      title: "Frameworks & Bibliothèques",
      icon: "⚛️",
      skills: [
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 90 },
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 }
      ]
    },
    {
      title: "Bases de données",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 60 },
        { name: "SQLite", level: 75 }
      ]
    },
    {
      title: "Outils & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 60 },
        { name: "Linux", level: 70 },
        { name: "Figma", level: 75 }
      ]
    }
  ]

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes Compétences
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Voici les technologies et outils que j'ai appris et maîtrisés
              durant ma formation en BTS SIO et mes projets personnels.
            </p>
          </div>

          {/* Grille des compétences */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Section certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Certifications & Formations 📜
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-600 text-2xl mb-3">🎓</div>
                <h4 className="font-semibold text-gray-900 mb-2">BTS SIO SLAM</h4>
                <p className="text-gray-600 text-sm">En cours - 2024/2026</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-600 text-2xl mb-3">💻</div>
                <h4 className="font-semibold text-gray-900 mb-2">Développement Web</h4>
                <p className="text-gray-600 text-sm">Formation autodidacte</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-600 text-2xl mb-3">🔧</div>
                <h4 className="font-semibold text-gray-900 mb-2">Outils de développement</h4>
                <p className="text-gray-600 text-sm">Git, Docker, Linux</p>
              </div>
            </div>
          </div>

          {/* Objectifs futurs */}
          <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Objectifs d'apprentissage 🎯
            </h3>
            <p className="text-gray-700 mb-6">
              Technologies que je souhaite apprendre prochainement :
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['TypeScript', 'Vue.js', 'Laravel', 'AWS', 'Kubernetes', 'GraphQL'].map((tech) => (
                <span key={tech} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 