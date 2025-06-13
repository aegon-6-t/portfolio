import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, UserCircle, ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Photo de profil */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-muted flex items-center justify-center text-muted-foreground">
              <UserCircle className="w-20 h-20" />
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Bonjour, je suis{' '}
            <span className="text-primary">Maxence Bernard</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Étudiant en BTS SIO option SLAM
          </p>

          {/* Description */}
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionné par le développement web et les nouvelles technologies,
            je me spécialise dans la création d'applications modernes et performantes.
            Découvrez mon parcours, mes projets et mes compétences techniques.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="#projects">
                Voir mes projets
                <ChevronDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#contact">
                Me contacter
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Indicateur de scroll */}
          <div className="mt-16">
            <a href="#about" className="inline-block animate-bounce">
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 