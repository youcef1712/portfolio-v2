export type Locale = "fr" | "en";

export const translations = {
  fr: {
    // Navbar
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    // Hero
  hero: {
  available: "Disponible ",
  title: "Youcef Bendra",
  subtitle1: "Développeur Full Stack",
  sep: "×",
  subtitle2: "Étudiant",
  description:
    "Passionné par le développement web et les nouvelles technologies, je conçois des applications modernes, performantes et intuitives. Actuellement à la recherche d’une oportunite afin de développer mes compétences sur des projets concrets.",
  cta_projects: "Voir mes projets",
  cta_contact: "Me contacter",
  scroll: "Découvrir",
},
    // About
    about: {
      tag: "À propos",
      heading1: "Polyvalent & passionné par les",
      heading2: "défis techniques",
      p1: "Étudiant en informatique spécialisé en développement web et logiciel, avec une expérience sur des projets Full Stack utilisant Angular, Spring Boot, JavaScript et les APIs REST. Passionné par la création d’applications modernes, l’automatisation des processus et l’amélioration continue des solutions techniques. Curieux, polyvalent et motivé par les défis techniques ainsi que l’apprentissage constant.",  
      p2: "Basé à Lyon · +33 6 52 23 52 00 · Disponible.",
      cta: "Travaillons ensemble →",
      stats: [
        { value: "10+", label: "Technologies maîtrisées" },
        { value: "3", label: "Langues parlées" },
      ],
    },
    // Experience
   
    // Skills
    skills: {
      tag: "Compétences",
      heading: "Stack technique",
      categories: [
        {
          category: "Développement",
          icon: "⬡",
          skills: [
          { name: 'Angular',  level: 90 },
          { name: 'Spring Boot',  level: 70 },
          { name: 'Java',  level: 85 },
          { name: 'JavaScript',  level: 85 },
          { name: 'C# / .NET / MonoGame',  level: 70 },
          { name: 'Python', level: 70 },
          { name: 'PHP / MySQL',  level: 70 },
          { name: 'HTML / CSS / Bootstrap', level: 85 },
          { name: 'XML, XSD, XSLT',  level: 70 },
          ],
        },
        {
          category: "Système & Réseau",
          icon: "⬢",
          skills: [
            { name: "Linux / Bash", level: 88 },
            { name: "Docker / Swarm", level: 85 },

          ],
        },
        {
          category: "Outils & Méthodes",
          icon: "◈",
          skills: [
            { name: "GitLab CI/CD", level: 93 },
            { name: "Validation Système", level: 95 },
            { name: "Tests automatisés", level: 92 },
            { name: 'Slack, Jira',  level: 70 },
            { name: 'Méthodologie Agile',  level: 75 }
          ],
        },
      ],
    },
    // Projects
    projects: {
      tag: "Réalisations",
      heading: "Mes projets",
      items: [
         {
      title: 'Application de planification de tournées',
      description: 'Application web pour visualiser sur carte et planifier automatiquement des tournées optimisées (distance, durée, coût), avec sélection des commandes, camions et équipes. Projet réalisé avec méthode agile (sprints, retours client).',
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Agile'],
      link: 'https://github.com/youcef1712/Projet-Integrateur',
      accent: "var(--accent)",

    },
    {
      title: 'Développement d’un jeu vidéo',
      description: 'Développement d’un jeu avec C# et le framework MonoGame. Intégration d’une gestion de données avec XML, XSD, XSLT, et collaboration avec Slack, Jira et Git.',
      tags: ['C#', '.NET', 'MonoGame', 'XML', 'Git', 'Jira'],
      link: 'https://github.com/youcef1712/pacman', 
      accent: "#8b5cf6",

    },
    {
      title: 'Robot en C – Détection d’obstacles',
      description: 'Création d’un robot se déplaçant sur une carte et détectant les obstacles. Réalisation de tests fonctionnels et de robustesse.',
      tags: ['C', 'Algorithmique', 'Tests'],
      link: 'https://github.com/youcef1712/Projet_robot_curiosity',
      accent: "#0ea5e9",

    },
    {
      title: 'Site Web Burger Code',
      description: 'Site web réalisé en auto-formation avec PHP, MySQL, CSS, Bootstrap et jQuery. Intégration complète côté front-end et gestion de base de données.',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      link: 'https://github.com/youcef1712/Site_burger',
      accent: "#10b981",

    },

    {
      title: 'dame_chinoise',
      description: 'Programme OCaml simule un jeu de stratégie avec un plateau hexagonal..',
      tags: ['Ocaml'],
      link: 'https://github.com/youcef1712/dame_chinoise',
      accent: "#f59e0b",
    },
    {
      title: 'Portfolio Angular',
      description: 'Ce portfolio personnel développé avec Angular met en avant mon parcours, mes projets et mes compétences.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      link: 'https://github.com/youcefbendra/portfolio-angular',
       accent: "#ec4899"
    },
    {
      title: 'Formulaire-php',
      description: 'Un formulaire de contact moderne permettant aux utilisateurs d envoyer un message avec validation dynamique.',
      tags: ['php', 'javascript', 'css'],
      link: 'https://github.com/youcef1712/Formulaire-php',
       accent: "#fd6c9e"
    },
      ],
    },
    // Contact
    contact: {
      tag: "Contact",
      heading: "Travaillons ensemble",
      subheading: "Un projet en tête ? Je suis disponible pour des missions freelance et des opportunités de collaboration.",
      email_label: "Email",
      location_label: "Localisation",
      location_value: "45 Av. Georges Pompidou, 69003 Lyon",
      github: "GitHub",
      linkedin: "LinkedIn",
      form: {
        name: "Nom",
        name_placeholder: "Votre nom",
        email: "Email",
        email_placeholder: "votre@email.com",
        message: "Message",
        message_placeholder: "Décrivez votre projet...",
        submit: "Envoyer le message",
        sending: "Envoi en cours...",
        success_title: "Message envoyé !",
        success_msg: "Je vous répondrai dans les plus brefs délais.",
      },
    },
    // Footer
    footer: {
      copy: "Conçu et développé avec passion.",
      back_top: "↑ Retour en haut",
    },
  },

  en: {
  // Navbar
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },

  // Hero
  hero: {
    available: "Available",
    title: "Youcef Bendra",
    subtitle1: "Full Stack Developer",
    sep: "×",
    subtitle2: "Student",
    description:
      "Passionate about web development and new technologies, I design modern, performant and intuitive applications. Currently looking for an oppotunity to develop my skills on real projects.",
    cta_projects: "View my projects",
    cta_contact: "Contact me",
    scroll: "Discover",
  },

  // About
  about: {
    tag: "About",
    heading1: "Versatile & passionate about",
    heading2: "technical challenges",
    p1:
      "Computer science student specializing in web and software development, with experience on Full Stack projects using Angular, Spring Boot, JavaScript and REST APIs. Passionate about building modern applications, automating processes and continuously improving technical solutions. Curious, versatile and motivated by technical challenges and continuous learning.",
    p2: "Based in Lyon · +33 6 52 23 52 00 · Available.",
    cta: "Let's work together →",
    stats: [
      { value: "10+", label: "Technologies mastered" },
      { value: "3", label: "Languages spoken" },
    ],
  },

  // Skills
  skills: {
    tag: "Skills",
    heading: "Tech stack",
    categories: [
      {
        category: "Development",
        icon: "⬡",
        skills: [
          { name: "Angular", level: 90 },
          { name: "Spring Boot", level: 70 },
          { name: "Java", level: 85 },
          { name: "JavaScript", level: 85 },
          { name: "C# / .NET / MonoGame", level: 70 },
          { name: "Python", level: 70 },
          { name: "PHP / MySQL", level: 70 },
          { name: "HTML / CSS / Bootstrap", level: 85 },
          { name: "XML, XSD, XSLT", level: 70 },
        ],
      },
      {
        category: "System & Network",
        icon: "⬢",
        skills: [
          { name: "Linux / Bash", level: 88 },
          { name: "Docker / Swarm", level: 85 },
 
        ],
      },
      {
        category: "Tools & Methods",
        icon: "◈",
        skills: [
          { name: "GitLab CI/CD", level: 93 },
          { name: "System Validation", level: 95 },
          { name: "Automated Testing", level: 92 },
          { name: "Slack, Jira", level: 70 },
          { name: "Agile methodology", level: 75 },
        ],
      },
    ],
  },

  // Projects
  projects: {
    tag: "Work",
    heading: "My projects",
    items: [
      {
        title: "Tour planning application",
        description:
          "Web application for map visualization and automatic route planning optimization (distance, duration, cost), with selection of orders, trucks and teams. Project built using agile methodology (sprints, client feedback).",
        tags: ["Angular", "Spring Boot", "PostgreSQL", "Agile"],
        link: "https://github.com/youcef1712/Projet-Integrateur",
        accent: "var(--accent)",
      },
      {
        title: "Video game development",
        description:
          "Development of a game using C# and MonoGame framework. Data management using XML, XSD, XSLT, and collaboration with Slack, Jira and Git.",
        tags: ["C#", ".NET", "MonoGame", "XML", "Git", "Jira"],
        link: "https://github.com/youcef1712/pacman",
        accent: "#8b5cf6",
      },
      {
        title: "C Robot – Obstacle detection",
        description:
          "Creation of a robot moving on a map and detecting obstacles. Functional and robustness testing.",
        tags: ["C", "Algorithms", "Testing"],
        link: "https://github.com/youcef1712/Projet_robot_curiosity",
        accent: "#0ea5e9",
      },
      {
        title: "Burger Code Website",
        description:
          "Self-learning website built using PHP, MySQL, CSS, Bootstrap and jQuery. Full front-end integration and database management.",
        tags: ["PHP", "MySQL", "Bootstrap", "jQuery"],
        link: "https://github.com/youcef1712/Site_burger",
        accent: "#10b981",
      },
      {
        title: "Chinese checkers",
        description:
          "OCaml program simulating a strategy game on a hexagonal board.",
        tags: ["OCaml"],
        link: "https://github.com/youcef1712/dame_chinoise",
        accent: "#f59e0b",
      },
      {
        title: "Angular Portfolio",
        description:
          "This personal portfolio developed with Angular showcases my background, projects and skills.",
        tags: ["Angular", "TypeScript", "SCSS"],
        link: "https://github.com/youcefbendra/portfolio-angular",
        accent: "#ec4899",
      },
      {
        title: "PHP Form",
        description:
          "Modern contact form allowing users to send a message with validation.",
        tags: ["PHP", "JavaScript", "CSS"],
        link: "https://github.com/youcef1712/Formulaire-php",
        accent: "#fd6c9e",
      },
    ],
  },

  // Contact
  contact: {
    tag: "Contact",
    heading: "Let's work together",
    subheading:
      "A project in mind? I am available for collaboration opportunities.",
    email_label: "Email",
    location_label: "Location",
    location_value: "45 Av. Georges Pompidou, 69003 Lyon",
    github: "GitHub",
    linkedin: "LinkedIn",
    form: {
      name: "Name",
      name_placeholder: "Your name",
      email: "Email",
      email_placeholder: "your@email.com",
      message: "Message",
      message_placeholder: "Describe your project...",
      submit: "Send message",
      sending: "Sending...",
      success_title: "Message sent!",
      success_msg: "I will reply as soon as possible.",
    },
  },

  // Footer
  footer: {
    copy: "Designed and developed with passion.",
    back_top: "↑ Back to top",
  },
},
} as const;

export type Translations = typeof translations.fr;
