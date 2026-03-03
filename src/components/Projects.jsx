import React, { useState, useEffect } from 'react'
import { Briefcase, Globe, Car, User, Terminal, ChevronLeft, ChevronRight, X, ShieldAlert, Cpu, AlertTriangle } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('tous')
  const [selectedProject, setSelectedProject] = useState(null)

  // Gestion du blocage du scroll quand le modal est ouvert
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const projects = [
    {
      id: 1,
      title: "Application Web GSB",
      description: "Portail web pour la saisie et validation des fiches de frais. Déploiement cloud et haute disponibilité.",
      images: [
        "/images/projects/applicationwebGSB.png",
        // Ajoute tes autres images ici plus tard:
        // "/images/projects/gsb-screen2.png",
      ],
      icon: "Globe",
      technologies: ["React", "Node.js", "Express", "AWS S3", "JWT"],
      category: "scolaire",
      github: "https://github.com/aegon-6-t/GSB.git",
      demo: "https://gsb-galaxyswissbourdin.onrender.com/login",
      date: "2024",
      details: {
        contexte: "GSB est un laboratoire pharmaceutique imaginaire issu du contexte BTS SIO. Le projet consiste à développer un portail web permettant aux visiteurs médicaux de saisir leurs fiches de frais et aux comptables de les valider.",
        architecture: "React (Frontend) et Node.js/Express (Backend) remplaçant l'architecture PHP classique. Stockage via un Bucket AWS S3 pour externaliser les justificatifs (images/PDF) et garantir la scalabilité.",
        difficultes: "Gestion des uploads de fichiers volumineux vers AWS S3 via des streams Multer sans surcharger la mémoire du serveur Node.js.",
        cyber: "Authentification via JWT (Stateless). Stockage actuel des mots de passe en SHA-256 avec 'Salt' dynamique, avec une migration prévue vers Argon2 (standard OWASP) pour contrer les attaques par force brute matérielle."
      }
    },
    {
      id: 2,
      title: "Automatisation de Sauvegardes",
      description: "Script d'automatisation pour la sauvegarde des serveurs et le déploiement de configurations.",
      images: [
        // Mets une image ici quand tu en auras une
      ],
      icon: "Terminal",
      technologies: ["PowerShell", "Bash", "Python"],
      category: "professionnel",
      github: null,
      demo: null,
      date: "2024",
      details: {
        contexte: "L'infrastructure de Constructel reposant lourdement sur ses outils de gestion de parc (serveurs WAPT, WADS), il est critique de s'assurer de leur restauration en cas de sinistre physique, ransomware ou erreur humaine.",
        architecture: "Scripts automatisés développés en PowerShell pour Windows et Bash/Python pour Linux. Ordonnancement via Planificateur de tâches et Cron.",
        difficultes: "Extraction à chaud des bases de données sans interrompre le service WAPT/WADS et transfert sécurisé vers d'autres datacenters.",
        cyber: "Implémentation stricte de la Règle du 3-2-1 (3 copies, 2 supports, 1 hors-site) contre les ransomwares. Vérification de l'intégrité des archives par empreinte cryptographique (hash)."
      }
    },
    {
      id: 3,
      title: "Plateforme Racemotion",
      description: "Solution complète pour un centre de simulation automobile : réservation, gestion de compte, newsletter et actualités.",
      images: [
        "/images/projects/plateformeracemotion.png",
      ],
      icon: "Car",
      technologies: ["React", "Express", "PostgreSQL", "Node.js"],
      category: "personnel",
      github: null,
      demo: "https://racemotioncenters.com",
      date: "2024",
      details: {
        contexte: "Création d'une plateforme complète pour un centre de simulation automobile, permettant de gérer l'activité commerciale physique et en ligne des passionnés de simracing.",
        architecture: "Stack PERN (PostgreSQL, Express, Node.js, React). Modélisation BDD relationnelle. Hébergement cloud avec gestion SSL.",
        difficultes: "Gestion de la concurrence et des conflits de réservation en temps réel avec vérification stricte en BDD avant validation définitive.",
        cyber: "RGPD : Procédure claire d'Opt-in pour les newsletters et clause de suppression de données (droit à l'oubli). Sécurité : Assainissement (sanitization) systématique des données entrantes via Express Validator pour prévenir XSS et injections SQL."
      }
    },
    {
      id: 4,
      title: "Constructel Helpdesk & Intranet",
      description: "Plateforme interne pour la centralisation des ressources, support technique, gestion des congés et communication.",
      images: [],
      icon: "Briefcase",
      technologies: ["WADS", "WAPT", "Active Directory", "Ticketing"],
      category: "professionnel",
      github: null,
      demo: null,
      date: "2024",
      details: {
        contexte: "Gestion d'un parc de plus de 800 postes chez Constructel (sous-traitant majeur). Le rôle consistait à maintenir en condition opérationnelle l'ensemble du matériel via du déploiement massif et à centraliser les ressources.",
        architecture: "Déploiement OS via WADS, gestion des progiciels via WAPT. Outil de ticketing Amiga interconnecté en LDAP avec l'Active Directory.",
        difficultes: "Hétérogénéité très forte du parc matériel nécessitant des dizaines de profils de déploiements WADS spécifiques.",
        cyber: "Application du principe de moindre privilège dans les GPOs de l'Active Directory. Sécurisation des accès aux consoles WAPT via certificats PKI."
      }
    },
    {
      id: 5,
      title: "Portail SSPR (Self-Service Reset) - Projet Phare Cyber",
      description: "Portail mobile permettant aux techniciens terrain de réinitialiser eux-mêmes leur mot de passe Active Directory.",
      images: [],
      icon: "ShieldAlert", // Changé pour montrer le côté cyber
      technologies: ["Node.js", "React", "Debian", "LDAPS", "UFW"],
      category: "professionnel",
      github: null,
      demo: null,
      date: "2024",
      details: {
        contexte: "Les techniciens terrain étaient bloqués par l'expiration ou l'oubli de leurs mots de passe AD, surchargeant le support. L'idée est de leur fournir un accès mobile sécurisé de 'Self-Service Password Reset'.",
        architecture: "API backend Node.js sur Debian Linux. Frontend React en 'Mobile-First'. Maintien de l'API assuré par process manager systemd.",
        difficultes: "Mise en place de la communication chiffrée SSL/TLS vers les Contrôleurs de Domaine (traduction des codes d'erreur LDAP MS).",
        cyber: "Chiffrement des flux (LDAPS, port 636) évitant l'attaque MitM. Filtrage réseau extrêmement strict par UFW avec n'autorisant que le port 443 HTTPS. Dispositif anti-bruteforce (Rate Limiting) implémenté sur l'API."
      }
    },
    {
      id: 6,
      title: "Application Desktop GSB",
      description: "Application de bureau en C# pour la gestion des frais des visiteurs médicaux, destinée aux comptables.",
      images: [
        "/images/projects/applicationdesktopGSB.png",
      ],
      icon: "Briefcase",
      technologies: ["C#", "Winform", ".NET", "SQL Server"],
      category: "scolaire",
      github: "https://github.com/aegon-6-t/GSB2.git",
      demo: null,
      date: "2024",
      details: {
        contexte: "Partie logicielle interne de GSB destinée à la gestion des frais (validation de remboursement par le service comptabilité).",
        architecture: "Application Desktop lourde (Client Lourd) développée en C# via Windows Form (.NET), interrogeant une base de données distante SQL Server.",
        difficultes: "Gestion du requêtage ADO.NET et maintient d'une UI fluide lors du rechargement de lourdes tables de données.",
        cyber: "Connexion sécurisée via chaîne de connexion chiffrée. Validation rigoureuse des types (.NET Type Safety) évitant implicitement certaines injections."
      }
    },
    {
      id: 7,
      title: "MemoryBnB",
      description: "Clone d'Airbnb transformé en carnet de voyage interactif. Exploration de mes destinations souvenirs.",
      images: [
        "/images/projects/memorybnb.png",
      ],
      icon: "Globe",
      technologies: ["React", "Tailwind CSS", "Render"],
      category: "personnel",
      github: "https://github.com/aegon-6-t/memorybnb.git",
      demo: "https://memorybnb.onrender.com",
      date: "2024",
      details: {
        contexte: "Projet personnel permettant de compiler des souvenirs de voyage dans une interface élégante reprenant les codes d'Airbnb.",
        architecture: "Frontend statique React utilisant Vite et Tailwind pour de hautes performances de rendu. Déploiement automatisé sur Render.",
        difficultes: "Configuration stricte de la responsivité via Tailwind pour simuler la fluidité d'une application mobile moderne.",
        cyber: "Projet frontend majoritairement statique, ne collectant aucune donnée utilisateur externe, le risque cyber est très limité par design."
      }
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

  // -- COMPOSANT MODAL CAROUSSEL & DETAILS --
  const ProjectModal = ({ project, onClose }) => {
    const [currentImageIdx, setCurrentImageIdx] = useState(0)

    if (!project) return null

    const hasImages = project.images && project.images.length > 0

    const nextImage = (e) => {
      e.stopPropagation()
      setCurrentImageIdx((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
    }

    const prevImage = (e) => {
      e.stopPropagation()
      setCurrentImageIdx((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
    }

    return (
      <div
        className="fixed inset-0 z-50 flex justify-center items-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col"
          onClick={(e) => e.stopPropagation()} // Evite la fermeture au clic intérieur
        >
          {/* Bouton fermeture overlay */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Carrousel d'images */}
          {hasImages ? (
            <div className="relative h-64 sm:h-80 md:h-96 w-full bg-slate-100 flex-shrink-0">
              <img
                src={project.images[currentImageIdx]}
                alt={`${project.title} - screen ${currentImageIdx + 1}`}
                className="w-full h-full object-cover"
              />

              {project.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 text-xl rounded-full hover:bg-black/80 transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 text-xl rounded-full hover:bg-black/80 transition-all">
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, idx) => (
                      <span key={idx} className={`w-2 h-2 rounded-full ${idx === currentImageIdx ? 'bg-white' : 'bg-white/50'}`}></span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="h-48 sm:h-64 bg-slate-700 flex items-center justify-center flex-shrink-0">
              <span className="text-slate-400 opacity-50 flex flex-col items-center">
                <Globe size={48} className="mb-2" />
                <span>Aucune capture d'écran disponible</span>
              </span>
            </div>
          )}

          {/* Contenu textuel Modal */}
          <div className="p-6 md:p-8 flex-grow">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {/* Colonne Gauche (2/3) : Contexte, Archi, Difficultés */}
              <div className="md:col-span-2 space-y-6 text-gray-700 dark:text-gray-300">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center mb-2">
                    <Briefcase className="w-5 h-5 mr-2 text-primary-500" />
                    Contexte & Besoins
                  </h4>
                  <p className="leading-relaxed">
                    {project.details?.contexte || project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center mb-2">
                    <Cpu className="w-5 h-5 mr-2 text-primary-500" />
                    Architecture Technique
                  </h4>
                  <p className="leading-relaxed">
                    {project.details?.architecture || "Détails techniques non spécifiés."}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center mb-2">
                    <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                    Difficultés & Solutions Envisagées
                  </h4>
                  <p className="leading-relaxed">
                    {project.details?.difficultes || "L'implémentation de ce système complexe n'a pas documenté de difficultés majeures."}
                  </p>
                </div>
              </div>

              {/* Colonne Droite (1/3) : Cyber et Liens */}
              <div className="space-y-6">

                {/* BLOC CYBERSECURITE (ALERTE ROUGE/ORANGE) */}
                <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="text-md font-bold text-red-700 dark:text-red-400 flex items-center mb-2">
                    <ShieldAlert className="w-5 h-5 mr-2" />
                    Sécurité & Cybersécurité
                  </h4>
                  <p className="text-sm text-red-900 dark:text-red-200/80 leading-relaxed">
                    {project.details?.cyber || "Aucun détail de cybersécurité spécifique."}
                  </p>
                </div>

                {/* Boutons Actions Modal */}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-slate-800 hover:bg-slate-900 text-white text-center py-3 px-4 rounded-lg transition-colors duration-200 text-sm font-medium flex items-center justify-center"
                    >
                      Code Source (GitHub)
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-3 px-4 rounded-lg transition-colors duration-200 text-sm font-medium flex items-center justify-center"
                    >
                      Visualiser le projet (Demo)
                    </a>
                  )}
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

  // --- COMPOSANT CARTE DE PROJET ---
  const ProjectCard = ({ project }) => {
    const [imgError, setImgError] = useState(false)
    const primaryImage = project.images && project.images.length > 0 ? project.images[0] : null

    // Composant icone Helper
    const IconHelper = () => {
      if (project.icon === 'Briefcase') return <Briefcase size={64} />
      if (project.icon === 'Globe') return <Globe size={64} />
      if (project.icon === 'Car') return <Car size={64} />
      if (project.icon === 'User') return <User size={64} />
      if (project.icon === 'Terminal') return <Terminal size={64} />
      if (project.icon === 'ShieldAlert') return <ShieldAlert size={64} />
      return <Briefcase size={64} />
    }

    return (
      <div
        onClick={() => setSelectedProject(project)}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
      >
        {/* Image du projet */}
        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          {primaryImage && !imgError ? (
            <img
              src={primaryImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-6xl text-slate-400/50 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary-500/50">
              <IconHelper />
            </span>
          )}
          {/* Overlay avec icone "Agrandir" ou effet */}
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-slate-800 text-sm font-bold py-2 px-4 rounded-full shadow-lg">
              Voir les détails
            </span>
          </div>
        </div>

        {/* Contenu de la carte */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-slate-800 line-clamp-1">{project.title}</h3>
          </div>

          <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-md uppercase"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-400 text-[10px] font-bold rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Mes Projets & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sélection de projets développés lors de mon cursus et de parcours parallèles, avec un accent particulier porté sur la sécurité des données et les architectures robustes.
            </p>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-200 ${activeFilter === filter.key
                    ? 'bg-slate-800 text-white shadow-md scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-transparent shadow-sm hover:shadow'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grille des projets */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-100 border-dashed border-2">
              <p className="text-slate-400 font-medium">Aucun projet trouvé pour ce filtre.</p>
            </div>
          )}

        </div>
      </div>

      {/* Rendu du Modal (S'affiche par-dessus le reste) */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

    </section>
  )
}

export default Projects