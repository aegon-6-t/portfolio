import React from 'react'
import { GraduationCap, Briefcase, Rocket, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'BTS SIO Option SLAM',
      organization: 'Nexa Digital School',
      location: 'Lyon, France',
      period: '2024 - 2026',
      description: 'Formation en Services Informatiques aux Organisations, spécialisation Solutions Logicielles et Applications Métiers.',
      skills: ['Développement logiciel', 'Développement web', 'Bases de données', 'Programmation orientée objet', 'Histoire de l\'informatique', 'Cybersécurité', 'Gestion de projet'],
      current: true
    },
    {
      id: 2,
      type: 'education',
      title: 'BAC Option NSI',
      organization: 'Lycée Institut Notre Dame',
      location: 'Valence, France',
      period: '2020 - 2023',
      description: 'Baccalauréat général avec spécialité Numérique et Sciences Informatiques.',
      skills: ['Programmation', 'Histoire de l\'informatique', 'Architecture réseaux', 'Matériel informatique', 'Systèmes embarqués'],
      current: false
    }
  ]

  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return 'GraduationCap'
      case 'internship':
        return 'Briefcase'
      case 'project':
        return 'Rocket'
      default:
        return 'MapPin'
    }
  }

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mon Parcours
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez mon parcours de formation et mes expériences professionnelles.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-primary-600 mr-3">
                      {experience.type === 'education' && <GraduationCap size={24} />}
                      {experience.type === 'internship' && <Briefcase size={24} />}
                      {experience.type === 'project' && <Rocket size={24} />}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                      <p className="text-primary-600 font-medium">{experience.organization}</p>
                      <p className="text-gray-500 text-sm">{experience.location}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">{experience.period}</span>
                </div>
                <p className="text-gray-700 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 