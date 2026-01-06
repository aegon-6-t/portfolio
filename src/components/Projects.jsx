import React, { useState } from 'react'
import { Briefcase, Globe, Car, User, Terminal } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('tous')

  const projects = [
    {
      id: 1,
      title: "Application Desktop GSB",
      description: "Application de bureau pour la gestion des frais et visites médicales. Interface intuitive pour les comptables et visiteurs.",
      image: "/images/projects/applicationdesktopGSB.png",
      icon: "Briefcase",
      technologies: ["C#", "Winform", ".NET", "SQL Server"],
      category: "scolaire",
      github: "https://github.com/aegon-6-t/GSB2.git",
      demo: null,
      date: "2024"
    },
    {
      id: 2,
      title: "Application Web GSB",
      description: "Portail web pour la saisie et validation des fiches de frais. Déploiement cloud et haute disponibilité.",
      image: "/images/projects/applicationwebGSB.png",
      icon: "Globe",
      technologies: ["PHP", "Symfony", "AWS", "MySQL"],
      category: "scolaire",
      github: "https://github.com/aegon-6-t/GSB.git",
      demo: "https://gsb-galaxyswissbourdin.onrender.com/login",
      date: "2024"
    },
    {
      id: 3,
      title: "Intranet d'Entreprise",
      description: "Plateforme interne pour la centralisation des ressources, gestion des congés et communication inter-services.",
      image: null,
      icon: "Briefcase",
      technologies: ["PHP", "Symfony", "MariaDB", "Docker"],
      category: "professionnel",
      github: null,
      demo: null,
      date: "2024"
    },
    {
      id: 4,
      title: "Automatisation de Sauvegardes",
      description: "Script d'automatisation pour la sauvegarde des serveurs et le déploiement de configurations.",
      image: null,
      icon: "Terminal",
      technologies: ["PowerShell", "Bash", "Python"],
      category: "professionnel",
      github: null,
      demo: null,
      date: "2024"
    },
    {
      id: 5,
      title: "Plateforme Racemotion",
      description: "Solution complète pour un centre de simulation automobile : réservation, gestion de compte, newsletter et actualités.",
      image: "/images/projects/plateformeracemotion.png",
      icon: "Car",
      technologies: ["React", "Express", "PostgreSQL", "Node.js"],
      category: "personnel", // Déplacé en personnel
      github: null,
      demo: "https://racemotioncenters.com",
      date: "2024"
    },
    {
      id: 6,
      title: "MemoryBnB",
      description: "Clone d'Airbnb transformé en carnet de voyage interactif. Exploration de mes destinations souvenirs.",
      image: "/images/projects/memorybnb.png",
      icon: "Globe",
      technologies: ["React", "Tailwind CSS", "Render"],
      category: "personnel",
      github: "https://github.com/aegon-6-t/memorybnb.git",
      demo: "https://memorybnb.onrender.com",
      date: "2024"
    },
    {
      id: 7,
      title: "Portfolio Personnel",
      description: "Mon site personnel pour présenter mon parcours et mes projets. Design moderne et responsive.",
      image: "/images/projects/portfolio.png",
      icon: "User",
      technologies: ["React", "Tailwind CSS", "Vite"],
      category: "personnel",
      github: "#",
      demo: null,
      date: "2024"
    }
  ]

  const filters = [
    { key: 'tous', label: 'Tous' },
    { key: 'scolaire', label: 'Projets Scolaires' },
    { key: 'professionnel', label: 'Projets Pros' },
    { key: 'personnel', label: 'Projets Persos' }
  ]

  const filteredProjects = activeFilter === 'tous'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  const ProjectCard = ({ project }) => {
    const [imgError, setImgError] = useState(false)

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image du projet */}
        <div className="h-48 group relative overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
          {project.image && !imgError ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-6xl text-primary-600">
              {project.icon === 'Briefcase' && <Briefcase size={64} />}
              {project.icon === 'Globe' && <Globe size={64} />}
              {project.icon === 'Car' && <Car size={64} />}
              {project.icon === 'User' && <User size={64} />}
              {project.icon === 'Terminal' && <Terminal size={64} />}
            </span>
          )}
          {!imgError && <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />}
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
          {/* Boutons d'action */}
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  Code
                </span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                <span className="flex items-center justify-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Visualiser
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

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