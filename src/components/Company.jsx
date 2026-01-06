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
    <section id="company" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50 skew-x-12 translate-x-32 z-0 opacity-50"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Mon Entreprise
            </h2>
            <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Colonne Image - Mise en valeur maximale */}
            <div className="w-full lg:w-5/12">
              <div className="relative group w-full flex">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 flex items-center justify-center border border-gray-100 min-h-[320px]">
                  <img
                    src="/images/constructel.png"
                    alt="Constructel Logo"
                    className="w-full h-auto object-contain max-h-[500px] hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Badge flottant */}
                <div className="absolute -bottom-6 -right-6 bg-white py-3 px-6 rounded-xl shadow-xl border border-gray-100 flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Localisation</p>
                    <p className="font-bold text-gray-900">Portes-lès-Valence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Contenu */}
            <div className="w-full lg:w-7/12">
              <div className="bg-gray-50/50 rounded-3xl p-8 md:p-10 border border-gray-100 hover:border-primary-100 transition-colors duration-300">
                <div className="mb-8">
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-2">Constructel</h3>
                  <p className="text-xl text-primary-600 font-medium mb-6">Expert Infrastructures Télécoms & Énergie</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Acteur majeur connectant les territoires, nous déployons des solutions innovantes
                    pour les transitions <strong>numérique</strong> et <strong>énergétique</strong> de demain.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Missions */}
                  <div>
                    <h4 className="flex items-center text-lg font-bold text-gray-900 mb-4 border-l-4 border-primary-500 pl-3">
                      <Wrench className="w-5 h-5 mr-3 text-primary-500" />
                      Missions Helpdesk
                    </h4>
                    <ul className="space-y-3">
                      {missions.slice(0, 4).map((mission, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span className="leading-snug">{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div>
                    <h4 className="flex items-center text-lg font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
                      <Terminal className="w-5 h-5 mr-3 text-blue-500" />
                      Stack Technique
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs font-semibold text-gray-600 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-gray-400 font-bold tracking-widest">Mon Rôle</span>
                    <span className="text-lg font-bold text-gray-900">Alternant Technicien Helpdesk</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs uppercase text-gray-400 font-bold tracking-widest">Depuis</span>
                    <span className="text-lg font-bold text-gray-900">2024</span>
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
