import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

import { Download, Eye, X } from 'lucide-react'

const About = () => {
  const [isCvOpen, setIsCvOpen] = useState(false)

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Titre de section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Présentation personnelle */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Présentation
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Salut, moi c'est <strong>Maxence Bernard</strong> ! Je suis actuellement étudiant
                en deuxième année de <strong>BTS SIO</strong> option <strong>SLAM</strong>.
              </p>
              <p>
                Passionné par l'informatique depuis le collège, mon baccalauréat NSI me confirme cette voie.
                J'ai choisi cette formation pour approfondir mes connaissances en développement et me préparer
                aux métiers de programmations. A l'issue de cette formation, je souhaite continuer mon chemin
                dans l'informatique avec une licence puis un master.
              </p>
              <p>
                Sur ce portfolio, vous découvrirez mes différents projets, mes compétences techniques
                et mon parcours de formation. N'hésitez pas à me contacter si vous souhaitez en savoir plus !
              </p>
            </div>

            {/* Boutons Actions */}
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild>
                <a href="/cv.pdf" download="CV_Bernard_Maxence.pdf">
                  Télécharger le CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" onClick={() => setIsCvOpen(true)}>
                Visualiser
                <Eye className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal CV */}
      {isCvOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsCvOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] bg-background rounded-xl shadow-2xl flex flex-col border border-border"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Mon CV</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsCvOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Fermer</span>
              </Button>
            </div>
            <div className="flex-1 bg-muted/50 p-1 md:p-4 rounded-b-xl overflow-hidden">
              <iframe
                src="/cv.pdf"
                className="w-full h-full rounded-md border border-border"
                title="CV Preview"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default About 