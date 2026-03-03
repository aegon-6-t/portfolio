import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

const MentionsLegales = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container-custom py-24 md:py-32">
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Mentions Légales
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">1</span>
                Éditeur du site
              </h2>
              <p>
                Le présent site internet "Portfolio BTS SIO SLAM" est édité par :<br />
                <strong>Maxence Bernard</strong><br />
                Contact : Via le formulaire de contact du site ou par email à bernardmaxence09@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">2</span>
                Hébergement
              </h2>
              <p>
                Ce site est hébergé par <strong>Vercel Inc.</strong><br />
                Siège social : 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis.<br />
                Contact Hébergeur : <a href="https://vercel.com/contact" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com/contact</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">3</span>
                Cookies et Traceurs
              </h2>
              <p>
                Afin de respecter la vie privée de ses visiteurs, ce site <strong>n'utilise aucun cookie de traçage publicitaire ou analytique</strong> nécessitant un consentement explicite (zéro traceur). Le portfolio est un outil de présentation vitrine fonctionnant de manière autonome et respectueuse des normes du RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">4</span>
                Propriété Intellectuelle
              </h2>
              <p>
                L'ensemble du contenu (textes, images, codes, architectures) présent sur ce site est la propriété exclusive de Maxence Bernard, à l'exception des marques, logos ou contenus appartenant à d'autres partenaires ou entreprises mentionnés (comme Constructel, Orange, SFR, Bouygues, etc.). Toute reproduction, même partielle, est strictement interdite sans accord préalable.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MentionsLegales
