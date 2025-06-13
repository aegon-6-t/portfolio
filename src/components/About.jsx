import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche - Présentation personnelle */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Présentation 👋
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Salut, moi c'est <strong>Maxence Bernard</strong> ! Je suis actuellement étudiant
                  en première année de <strong>BTS SIO</strong> (Services Informatiques aux Organisations)
                  dans l'option <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers).
                </p>
                <p>
                  Passionné par l'informatique depuis mon plus jeune âge, j'ai choisi cette formation
                  pour approfondir mes connaissances en développement et me préparer aux métiers du numérique.
                </p>
                <p>
                  Sur ce portfolio, vous découvrirez mes différents projets, mes compétences techniques
                  et mon parcours de formation. N'hésitez pas à me contacter si vous souhaitez en savoir plus !
                </p>
              </div>

              {/* Bouton CV */}
              <div className="mt-8">
                <Button asChild>
                  <a href="#">
                    Télécharger mon CV
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground mb-0">
                  Qu'est-ce que le BTS SIO ? 🎓
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Le <strong>BTS Services Informatiques aux Organisations</strong> est une formation
                    de 2 ans qui prépare aux métiers de l'informatique. Il propose deux spécialisations :
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary">Option SLAM</h4>
                      <p className="text-sm">
                        <strong>Solutions Logicielles et Applications Métiers</strong> -
                        Spécialisée dans le développement d'applications et de logiciels.
                      </p>
                    </div>

                    <div className="border-l-4 border-muted-foreground pl-4">
                      <h4 className="font-semibold text-foreground">Option SISR</h4>
                      <p className="text-sm">
                        <strong>Solutions d'Infrastructure, Systèmes et Réseaux</strong> -
                        Orientée vers l'administration des réseaux et systèmes.
                      </p>
                    </div>
                  </div>

                  <p className="text-sm italic">
                    J'ai choisi l'option SLAM car je suis passionné par la création d'applications
                    et le développement web moderne.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistiques */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-muted-foreground">Années d'études</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground">Technologies apprises</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-muted-foreground">Stages effectués</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 