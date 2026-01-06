import React from 'react'
import Header from './Header'
import Footer from './Footer'

const BTS = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container-custom mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tableau de Synthèse E4
            </h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Retrouvez ci-dessous mon tableau de synthèse des situations professionnelles (E4)
              pour le BTS SIO option SLAM.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[80vh] border border-gray-200">
            <iframe
              src="/E4TableauSynthese.pdf"
              className="w-full h-full"
              title="Tableau de Synthèse E4"
            >
              <p className="text-center p-8">
                Votre navigateur ne peut pas afficher ce PDF.
                <a href="/E4TableauSynthese.pdf" className="text-primary hover:underline font-bold ml-1">
                  Cliquez ici pour le télécharger.
                </a>
              </p>
            </iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default BTS
