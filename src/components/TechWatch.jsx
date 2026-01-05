import React from 'react'
import { Bot, Globe, Shield, Cpu, Gamepad, Zap, Youtube, MessageSquare } from 'lucide-react'

const TechWatch = () => {
  const watchTopics = [
    {
      id: 1,
      title: "Intelligence Artificielle",
      description: "Suivi des dernières avancées en IA et machine learning",
      color: "bg-blue-500",
      Icon: "Bot"
    },
    {
      id: 2,
      title: "Développement Web",
      description: "Nouvelles technologies et frameworks web",
      color: "bg-green-500",
      Icon: "Globe"
    },
    {
      id: 3,
      title: "Cybersécurité",
      description: "Actualités sur la sécurité informatique",
      color: "bg-red-500",
      Icon: "Shield"
    },
    {
      id: 4,
      title: "Nouvelles technologies",
      description: "Suivi des innovations et ruptures technologiques",
      color: "bg-purple-500",
      Icon: "Zap"
    },
    {
      id: 5,
      title: "Hardware PC",
      description: "Actualités sur les composants et l'architecture ordinateur",
      color: "bg-indigo-500",
      Icon: "Cpu"
    },
    {
      id: 6,
      title: "Gaming",
      description: "Tendances de l'industrie du jeu vidéo et e-sport",
      color: "bg-orange-500",
      Icon: "Gamepad"
    }
  ]

  const articles = [
    {
      id: 1,
      title: "GitHub Copilot Workspace: Welcome to the agentic future",
      source: "GitHub Blog",
      date: "29 Avril 2024",
      category: "Développement Web",
      summary: "Découverte de l'environnement de développement natif IA de GitHub, où les spécifications deviennent du code.",
      link: "https://github.blog/2024-04-29-github-copilot-workspace/"
    },
    {
      id: 2,
      title: "OpenAI Sora : Une révolution pour la vidéo",
      source: "YouTube",
      date: "15 Février 2024",
      category: "Intelligence Artificielle",
      summary: "Présentation détaillée du nouveau modèle de génération de vidéos d'OpenAI et ses implications.",
      link: "https://www.youtube.com/watch?v=HK6y8DAPN_0"
    },
    {
      id: 3,
      title: "Les tendances cybersécurité en 2024",
      source: "TechCrunch",
      date: "10 Mars 2024",
      category: "Cybersécurité",
      summary: "Analyse des principales menaces et solutions de sécurité pour cette année.",
      link: "https://techcrunch.com/category/security/"
    }
  ]

  const sources = [
    { name: "YouTube", url: "https://youtube.com", description: "Chaînes tech et hardware" },
    { name: "Discord", url: "https://discord.com", description: "Bot articles et communautés" },
    { name: "TechCrunch", url: "https://techcrunch.com", description: "Actualités tech" },
    { name: "GitHub Blog", url: "https://github.blog", description: "Actualités développement" },
    { name: "Stack Overflow", url: "https://stackoverflow.com", description: "Q&A développeurs" }
  ]

  return (
    <section id="techwatch" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veille Technologique
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Je reste constamment informé des dernières innovations et tendances
              dans le domaine de l'informatique et du développement.
            </p>
          </div>

          {/* Qu'est-ce que la veille technologique */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Qu'est-ce que la veille technologique ?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              La veille technologique consiste à surveiller les évolutions techniques,
              les innovations dans un secteur d'activité donné. Elle comprend notamment
              la surveillance, la collecte, le partage et la diffusion d'informations
              permettant d'anticiper ou de s'informer sur des changements en matière de
              recherche, développement, lancement de nouveaux produits, processus, etc.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour un étudiant en BTS SIO, cette veille est essentielle pour rester
              à jour avec les technologies émergentes et les meilleures pratiques du secteur.
            </p>
          </div>

          {/* Domaines de veille */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Mes domaines de veille
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {watchTopics.map((topic) => (
                <div key={topic.id} className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-primary-200 transition-colors duration-200">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${topic.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                      {topic.Icon === 'Bot' && <Bot size={24} />}
                      {topic.Icon === 'Globe' && <Globe size={24} />}
                      {topic.Icon === 'Shield' && <Shield size={24} />}
                      {topic.Icon === 'Zap' && <Zap size={24} />}
                      {topic.Icon === 'Cpu' && <Cpu size={24} />}
                      {topic.Icon === 'Gamepad' && <Gamepad size={24} />}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{topic.title}</h4>
                  </div>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Articles récents */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Articles récents
            </h3>
            <div className="space-y-6">
              {articles.map((article) => (
                <div key={article.id} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center mb-2 md:mb-0">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mr-3">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.source}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h4>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <a
                    href={article.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Lire l'article
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Sources de veille */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Mes sources de veille
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sources.map((source, index) => (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow duration-200 block"
                >
                  <h4 className="font-semibold text-gray-900 mb-1">{source.name}</h4>
                  <p className="text-gray-600 text-sm">{source.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechWatch 