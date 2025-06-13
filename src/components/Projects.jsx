import React, { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('tous')

  const projects = [
    {
      id: 1,
      title: "Site E-commerce",
      description: "Développement d'un site e-commerce complet avec panier, paiement et gestion des commandes.",
      image: "🛒",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "web",
      github: "#",
      demo: "#",
      date: "Mars 2024"
    },
    {
      id: 2,
      title: "Application de Gestion",
      description: "Application Java pour la gestion des stocks d'une entreprise avec interface graphique.",
      image: "📊",
      technologies: ["Java", "JavaFX", "SQLite"],
      category: "desktop",
      github: "#",
      demo: "#",
      date: "Janvier 2024"
    },
    {
      id: 3,
      title: "API REST",
      description: "Création d'une API REST pour un système de réservation avec authentification JWT.",
      image: "🔌",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "api",
      github: "#",
      demo: "#",
      date: "Février 2024"
    },
    {
      id: 4,
      title: "Portfolio React",
      description: "Portfolio personnel développé avec React et Tailwind CSS, responsive et moderne.",
      image: "💼",
      technologies: ["React", "Tailwind CSS", "Vite"],
      category: "web",
      github: "#",
      demo: "#",
      date: "Avril 2024"
    },
    {
      id: 5,
      title: "Bot Discord",
      description: "Bot Discord multifonctionnel avec commandes personnalisées et modération automatique.",
      image: "🤖",
      technologies: ["Python", "Discord.py", "SQLite"],
      category: "bot",
      github: "#",
      demo: "#",
      date: "Décembre 2023"
    },
    {
      id: 6,
      title: "Site Vitrine",
      description: "Site vitrine responsive pour une entreprise locale avec formulaire de contact.",
      image: "🌐",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "web",
      github: "#",
      demo: "#",
      date: "Novembre 2023"
    }
  ]

  const filters = [
    { key: 'tous', label: 'Tous les projets' },
    { key: 'web', label: 'Sites Web' },
    { key: 'desktop', label: 'Applications' },
    { key: 'api', label: 'API' },
    { key: 'bot', label: 'Bots' }
  ]

  const filteredProjects = activeFilter === 'tous'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image/Icône du projet */}
      <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
        <span className="text-6xl">{project.image}</span>
      </div>

      {/* Contenu de la carte */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <span className="text-sm text-gray-500">{project.date}</span>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies utilisées */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex gap-3">
          <a
            href={project.github}
            className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <span className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              Code
            </span>
          </a>
          <a
            href={project.demo}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <span className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Démo
            </span>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes Projets
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les projets que j'ai réalisés durant ma formation et mes projets personnels.
              Chaque projet m'a permis d'apprendre de nouvelles technologies et d'améliorer mes compétences.
            </p>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${activeFilter === filter.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grille des projets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun projet trouvé pour cette catégorie.</p>
            </div>
          )}

          {/* Call to action */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Intéressé par mon travail ?
              </h3>
              <p className="text-gray-600 mb-6">
                N'hésitez pas à consulter mon GitHub pour voir plus de projets ou à me contacter
                pour discuter d'opportunités de collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  Voir GitHub
                </a>
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 