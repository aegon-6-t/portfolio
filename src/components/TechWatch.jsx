import React from 'react'

const TechWatch = () => {
  const watchTopics = [
    {
      id: 1,
      title: "Intelligence Artificielle",
      description: "Suivi des dernières avancées en IA et machine learning",
      icon: "🤖",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Développement Web",
      description: "Nouvelles technologies et frameworks web",
      icon: "🌐",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Cybersécurité",
      description: "Actualités sur la sécurité informatique",
      icon: "🔒",
      color: "bg-red-500"
    }
  ]

  const articles = [
    {
      id: 1,
      title: "L'avenir de React avec les Server Components",
      source: "Dev.to",
      date: "15 Mars 2024",
      category: "Développement Web",
      summary: "Exploration des nouvelles fonctionnalités de React et leur impact sur le développement web moderne.",
      link: "#"
    },
    {
      id: 2,
      title: "Les tendances cybersécurité en 2024",
      source: "TechCrunch",
      date: "10 Mars 2024",
      category: "Cybersécurité",
      summary: "Analyse des principales menaces et solutions de sécurité pour cette année.",
      link: "#"
    },
    {
      id: 3,
      title: "ChatGPT et l'impact sur le développement",
      source: "Medium",
      date: "5 Mars 2024",
      category: "Intelligence Artificielle",
      summary: "Comment l'IA transforme la façon dont nous développons des applications.",
      link: "#"
    }
  ]

  const sources = [
    { name: "Dev.to", url: "https://dev.to", description: "Communauté de développeurs" },
    { name: "TechCrunch", url: "https://techcrunch.com", description: "Actualités tech" },
    { name: "Medium", url: "https://medium.com", description: "Articles techniques" },
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
              Qu'est-ce que la veille technologique ? 🔍
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
                    <div className={`w-12 h-12 ${topic.color} rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
                      {topic.icon}
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
              Mes sources de veille 📚
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

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Je consulte également des newsletters spécialisées, des podcasts tech
                et je participe à des communautés de développeurs sur Discord et Reddit.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700">
                  📧 Newsletters tech
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700">
                  🎧 Podcasts
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700">
                  💬 Communautés
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700">
                  📱 Réseaux sociaux
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechWatch 