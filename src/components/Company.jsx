import React from 'react'
import { Building2, MapPin, Calendar, Wrench, Shield, Terminal, Server, Network } from 'lucide-react'

const Company = () => {
  const missions = [
    "Résolution d'incidents (Niveau 1 & 2) et support utilisateurs",
    "Maintenance préventive et curative du parc informatique",
    "Configuration et déploiement de postes de travail",
    "Scripting et automatisation de tâches administratives",
    "Mise en place et gestion d'un intranet",
    "Initiation à la cybersécurité et bonnes pratiques"
  ]

  const technologies = [
    "Windows 10/11", "Active Directory", "Office 365",
    "PowerShell", "GLPI", "Réseaux TCP/IP",
    "Hardware", "Windows Server"
  ]

  return (
    <section id="company" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mon Entreprise
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              {/* Colonne Image & Info */}
              <div className="bg-gray-900 p-8 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-900/20 z-0"></div>
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-white rounded-xl p-4 mb-8 flex items-center justify-center mx-auto md:mx-0 shadow-lg">
                    <img
                      src="/images/constructel.png"
                      alt="Constructel Logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <h3 className="text-3xl font-bold mb-2">Constructel</h3>
                  <div className="flex items-center text-gray-300 mb-6">
                    <MapPin className="w-5 h-5 mr-2 text-primary-400" />
                    <span>Portes-lès-Valence, France</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-8">
                    Depuis sa création, Constructel est spécialisée dans le monde des infrastructures et
                    des technologies de télécommunications. L’ensemble de nos métiers contribuent à connecter
                    les territoires entre eux. En devenant un acteur engagé, Constructel augmente ses impacts
                    positifs et devient un partenaire clé des transitions énergétique et numérique.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <Building2 className="w-6 h-6 text-primary-400 mb-2" />
                      <span className="block text-sm text-gray-400">Secteur</span>
                      <span className="font-semibold">Télécoms & Énergie</span>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <Calendar className="w-6 h-6 text-primary-400 mb-2" />
                      <span className="block text-sm text-gray-400">Depuis</span>
                      <span className="font-semibold">2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colonne Poste & Missions */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Technicien Helpdesk</h3>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Alternance
                  </span>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-primary-600" />
                    Mes Missions
                  </h4>
                  <ul className="space-y-3">
                    {missions.map((mission, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="mr-3 text-primary-500 mt-1.5">•</span>
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Terminal className="w-5 h-5 mr-2 text-primary-600" />
                    Environnement Technique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Company
