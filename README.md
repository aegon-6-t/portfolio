# Portfolio BTS SIO - React & Tailwind CSS

Un portfolio moderne et responsive développé avec React.js et Tailwind CSS, spécialement conçu pour les étudiants en BTS SIO (Services Informatiques aux Organisations).

## 🎯 Objectif

Ce portfolio a été créé pour présenter de manière professionnelle :
- Le parcours de formation en BTS SIO
- Les compétences techniques acquises
- Les projets réalisés
- La veille technologique
- Les informations de contact

## 🚀 Technologies utilisées

- **React.js** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build rapide et moderne
- **Tailwind CSS** - Framework CSS utilitaire
- **JavaScript ES6+** - Langage de programmation moderne

## 📋 Fonctionnalités

### ✨ Sections principales
- **Hero** - Présentation personnelle avec appel à l'action
- **À propos** - Biographie et explication du BTS SIO
- **Compétences** - Technologies maîtrisées avec barres de progression
- **Projets** - Portfolio de projets avec filtres par catégorie
- **Parcours** - Timeline du parcours scolaire et professionnel
- **Veille technologique** - Articles et sources de veille
- **Contact** - Formulaire de contact et informations

### 🎨 Caractéristiques techniques
- Design responsive (mobile, tablette, desktop)
- Navigation fluide avec ancres
- Animations et transitions CSS
- Formulaire de contact fonctionnel
- Filtrage dynamique des projets
- Interface moderne et accessible

## 🛠️ Installation et utilisation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd testPortfolia

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Header.jsx      # Navigation principale
│   ├── Hero.jsx        # Section d'accueil
│   ├── About.jsx       # Section à propos
│   ├── Skills.jsx      # Compétences techniques
│   ├── Projects.jsx    # Portfolio de projets
│   ├── Experience.jsx  # Parcours professionnel
│   ├── TechWatch.jsx   # Veille technologique
│   ├── Contact.jsx     # Formulaire de contact
│   └── Footer.jsx      # Pied de page
├── assets/             # Images et ressources
├── data/              # Données statiques
├── App.jsx            # Composant principal
├── main.jsx           # Point d'entrée
└── index.css          # Styles Tailwind CSS
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... autres nuances
    900: '#1e3a8a',
  }
}
```

### Contenu
Pour personnaliser le contenu :

1. **Informations personnelles** : Modifiez les composants `Hero.jsx` et `About.jsx`
2. **Compétences** : Éditez le tableau `skillCategories` dans `Skills.jsx`
3. **Projets** : Modifiez le tableau `projects` dans `Projects.jsx`
4. **Parcours** : Éditez le tableau `experiences` dans `Experience.jsx`
5. **Contact** : Mettez à jour les informations dans `Contact.jsx`

### Exemple de modification des projets
```javascript
const projects = [
  {
    id: 1,
    title: "Mon Projet",
    description: "Description de mon projet...",
    image: "🚀",
    technologies: ["React", "Node.js"],
    category: "web",
    github: "https://github.com/username/repo",
    demo: "https://mon-projet.com",
    date: "Mars 2024"
  }
]
```

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints Tailwind :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🔧 Configuration

### Tailwind CSS
La configuration Tailwind se trouve dans `tailwind.config.js` avec :
- Couleurs personnalisées
- Police Inter
- Classes utilitaires personnalisées

### Vite
Configuration dans `vite.config.js` pour :
- Optimisation des builds
- Support des modules ES6
- Hot Module Replacement (HMR)

## 📈 Optimisations

- **Performance** : Lazy loading des composants
- **SEO** : Structure HTML sémantique
- **Accessibilité** : Navigation au clavier, contrastes
- **Mobile-first** : Design responsive optimisé

## 🤝 Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créez une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou suggestion :
- Ouvrez une issue sur GitHub
- Contactez-moi via le formulaire du portfolio

## 🎓 Contexte BTS SIO

Ce portfolio est spécialement adapté aux étudiants en BTS SIO avec :
- Présentation des deux options (SLAM/SISR)
- Section dédiée à la veille technologique
- Mise en avant des compétences techniques
- Structure professionnelle pour les stages

---

**Fait avec ❤️ pour les étudiants en BTS SIO**
