import React, { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

const Contact = () => {


  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'bernardmaxence09@gmail.com',
      link: 'mailto:bernardmaxence09@gmail.com'
    },
    {
      icon: 'Phone',
      title: 'Téléphone',
      value: '+33 7 67 02 88 70',
      link: 'tel:+33767028870'
    },
    {
      icon: 'MapPin',
      title: 'Localisation',
      value: 'Lyon, France',
      link: '#'
    },
    {
      icon: 'Linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/maxence-bernard-alternance',
      link: 'https://www.linkedin.com/in/maxence-bernard-alternance/'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: 'https://github.com/aegon-6-t'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: 'https://linkedin.com/in/maxence-bernard-alternance'
    },

  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Me Contacter
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour discuter d'opportunités de stage,
              de projets collaboratifs ou simplement pour échanger sur les technologies.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Informations de contact */}
            <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Informations de contact
              </h3>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                      {info.icon === 'Mail' && <Mail size={24} />}
                      {info.icon === 'Phone' && <Phone size={24} />}
                      {info.icon === 'MapPin' && <MapPin size={24} />}
                      {info.icon === 'Linkedin' && <Linkedin size={24} />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm break-all"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">
                  Suivez-moi sur les réseaux
                </h4>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gray-50 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 