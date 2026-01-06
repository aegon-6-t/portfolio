import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Détection du scroll pour changer l'apparence de l'en-tête
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Parcours', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Entreprise', href: '#company' },
    { name: 'BTS', href: '/bts' },
    { name: 'Veille', href: '#techwatch' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavigation = (e, href) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (href.startsWith('#')) {
      // Navigation par ancre
      if (location.pathname !== '/') {
        // Si on n'est pas sur la page d'accueil, on y va d'abord
        navigate('/')
        // On attend que la navigation se fasse avant de scroller
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        // Si on est déjà sur l'accueil, on scroll juste
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      // Navigation vers une autre page (ex: /bts)
      navigate(href)
      window.scrollTo(0, 0)
    }
  }

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-full border ${isScrolled
        ? 'bg-background/80 backdrop-blur-md shadow-md border-border/50'
        : 'bg-transparent border-transparent'
        }`}
    >
      <nav className="px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo/Nom */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-xl font-bold text-primary cursor-pointer"
              onClick={(e) => handleNavigation(e, '#hero')}
            >
              Portfolio Maxence Bernard
            </a>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-baseline space-x-1 lg:space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${location.pathname === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background rounded-lg shadow-lg mt-2 border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer ${location.pathname === item.href
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground hover:text-primary'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 