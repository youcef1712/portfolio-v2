export type Locale = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      about: "À propos",
      experience: "Parcours",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      available: "Disponible",
      title: "Youcef Bendra",
      roles: [
        "Développeur Full Stack",
        "Créateur d'applications",
        "Passionné de code",
        "Architecte web",
      ],
      description:
        "Passionné par le développement web et les nouvelles technologies, je conçois des applications modernes, performantes et intuitives. Curieux, autonome et motivé, je souhaite rejoindre une équipe dynamique afin de développer mes compétences sur des projets innovants et variés.",
      cta_projects: "Voir mes projets",
      cta_contact: "Me contacter",
      cta_cv: "Télécharger CV",
      scroll: "Découvrir",
    },
    about: {
      tag: "À propos",
      heading1: "Polyvalent & passionné par les",
      heading2: "défis techniques",
      p1: "Développeur Full Stack spécialisé en développement web et logiciel, avec une expérience concrète sur des projets utilisant Angular, Spring Boot, JavaScript et les APIs REST. Passionné par la création d'applications modernes, l'automatisation des processus et l'amélioration continue des solutions techniques. Curieux, polyvalent et motivé par les défis techniques ainsi que l'apprentissage constant.",
      p2: "Basé à Lyon · Disponible pour opportunités professionnelles.",
      cta: "Travaillons ensemble →",
      stats: [
        { value: "10+", label: "Technologies maîtrisées" },
        { value: "7", label: "Projets réalisés" },
        { value: "3", label: "Langues parlées" },
        { value: "2", label: "Certifications" },
      ],
    },
    experience: {
      tag: "Parcours",
      heading: "Formation & Expérience",
      items: [
        {
          period: "2022 — 2025",
          title: "Licence Informatique (MIAGE)",
          company: "Université Grenoble Alpes",
          description:
            "Méthodes Informatiques Appliquées à la Gestion des Entreprises. Développement Full Stack, gestion de projets agile et systèmes d'information.",
          tags: ["Angular", "Spring Boot", "Agile", "SI"],
          type: "education" as const,
        },
        {
          period: "2019 — 2022",
          title: "Licence Informatique",
          company: "Université UAT, Algérie",
          description:
            "Formation complète en informatique : algorithmique, programmation orientée objet, bases de données, réseaux et architecture système.",
          tags: ["Java", "Python", "C", "SQL", "Linux"],
          type: "education" as const,
        },
        {
          period: "2024",
          title: "Développement d'un site vitrine",
          company: "Projet freelance",
          description:
            "Conception et développement d'un site web responsive pour un service local. Interface utilisateur moderne, formulaire de contact et déploiement sur GitHub Pages / Netlify.",
          tags: ["HTML", "CSS", "JavaScript", "Responsive"],
          type: "work" as const,
        },
      ],
    },
    certifications: {
      tag: "Certifications",
      items: [
        { title: "Développement Web", provider: "Udemy" },
        { title: "Certification AWS", provider: "En cours" },
      ],
    },
    skills: {
      tag: "Compétences",
      heading: "Stack technique",
      categories: [
        {
          category: "Développement",
          icon: "⬡",
          skills: [
            { name: "Angular", level:70 },
            { name: "Spring Boot / Maven / JPA", level: 70 },
            { name: "Java", level: 75 },
            { name: "JavaScript / TypeScript", level: 80 },
            { name: "C# / .NET / MonoGame", level: 70 },
            { name: "Python", level: 70 },
            { name: "PHP / MySQL / Hibernate", level: 70 },
            { name: "HTML / CSS / Bootstrap", level: 80 },
            { name: "XML, XSD, XSLT", level: 70 },
          ],
        },
        {
          category: "Système & Cloud",
          icon: "⬢",
          skills: [
            { name: "Linux / Bash", level: 80 },
            { name: "Docker / Swarm", level: 65 },
            { name: "AWS", level: 60 },
          ],
        },
        {
          category: "Outils & Méthodes",
          icon: "◈",
          skills: [
            { name: "Git / CI/CD", level: 70 },
            { name: "Tests automatisés", level: 60 },
            { name: "Slack / Jira", level: 75 },
            { name: "Méthodologie Agile", level: 80 },
            { name: "UML / Modélisation", level: 75 },
          ],
        },
      ],
    },
    projects: {
      tag: "Réalisations",
      heading: "Mes projets",
      items: [
        {
          title: "Application de planification de tournées",
          description:
            "Application web pour visualiser sur carte et planifier automatiquement des tournées optimisées (distance, durée, coût), avec sélection des commandes, camions et équipes.",
          tags: ["Angular", "Spring Boot", "PostgreSQL", "Agile"],
          link: "https://github.com/youcef1712/Projet-Integrateur",
          accent: "var(--accent)",
        },
        {
          title: "Développement d'un jeu vidéo",
          description:
            "Développement d'un jeu avec C# et le framework MonoGame. Intégration d'une gestion de données avec XML, XSD, XSLT, et collaboration avec Slack, Jira et Git.",
          tags: ["C#", ".NET", "MonoGame", "XML", "Git"],
          link: "https://github.com/youcef1712/pacman",
          accent: "#8b5cf6",
        },
        {
          title: "Robot en C – Détection d'obstacles",
          description:
            "Création d'un robot se déplaçant sur une carte et détectant les obstacles. Réalisation de tests fonctionnels et de robustesse.",
          tags: ["C", "Algorithmique", "Tests"],
          link: "https://github.com/youcef1712/Projet_robot_curiosity",
          accent: "#0ea5e9",
        },
        {
          title: "Site Web Burger Code",
          description:
            "Site web réalisé en auto-formation avec PHP, MySQL, CSS, Bootstrap et jQuery. Intégration front-end complète et gestion de base de données.",
          tags: ["PHP", "MySQL", "Bootstrap", "jQuery"],
          link: "https://github.com/youcef1712/Site_burger",
          accent: "#10b981",
        },
        {
          title: "Dames Chinoises",
          description:
            "Programme OCaml simulant un jeu de stratégie sur un plateau hexagonal avec intelligence artificielle.",
          tags: ["OCaml"],
          link: "https://github.com/youcef1712/dame_chinoise",
          accent: "#f59e0b",
        },
        {
          title: "Portfolio Angular",
          description:
            "Portfolio personnel développé avec Angular mettant en avant mon parcours, mes projets et mes compétences.",
          tags: ["Angular", "TypeScript", "SCSS"],
          link: "https://github.com/youcefbendra/portfolio-angular",
          accent: "#ec4899",
        },
        {
          title: "Formulaire PHP",
          description:
            "Un formulaire de contact moderne permettant aux utilisateurs d'envoyer un message avec validation dynamique via AJAX.",
          tags: ["PHP", "JavaScript", "AJAX", "CSS"],
          link: "https://github.com/youcef1712/Formulaire-php",
          accent: "#fd6c9e",
        },
      ],
    },
    contact: {
      tag: "Contact",
      heading: "Travaillons ensemble",
      subheading:
        "Un projet en tête ? Je suis disponible pour des missions et des opportunités de collaboration.",
      email_label: "Email",
      location_label: "Localisation",
      location_value: "Lyon, Grenoble",
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
        error_title: "Erreur d'envoi",
        error_msg: "Une erreur est survenue. Réessayez ou contactez-moi directement par email.",
      },
    },
    footer: {
      copy: "Conçu et développé avec passion.",
      back_top: "↑ Retour en haut",
      made_with: "Fait avec Next.js & passion",
    },
  },

  en: {
    nav: {
      about: "About",
      experience: "Journey",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      available: "Available",
      title: "Youcef Bendra",
      roles: [
        "Full Stack Developer",
        "Application Builder",
        "Code Enthusiast",
        "Web Architect",
      ],
      description:
        "Passionate about web development and new technologies, I design modern, performant and intuitive applications. Curious, autonomous and motivated, I want to join a dynamic team to develop my skills on innovative and varied projects.",
      cta_projects: "View my projects",
      cta_contact: "Contact me",
      cta_cv: "Download CV",
      scroll: "Discover",
    },
    about: {
      tag: "About",
      heading1: "Versatile & passionate about",
      heading2: "technical challenges",
      p1: "Full Stack developer specializing in web and software development, with hands-on experience on projects using Angular, Spring Boot, JavaScript and REST APIs. Passionate about building modern applications, automating processes and continuously improving technical solutions. Curious, versatile and motivated by technical challenges and continuous learning.",
      p2: "Based in Lyon · Available for professional opportunities.",
      cta: "Let's work together →",
      stats: [
        { value: "10+", label: "Technologies mastered" },
        { value: "7", label: "Projects completed" },
        { value: "3", label: "Languages spoken" },
        { value: "2", label: "Certifications" },
      ],
    },
    experience: {
      tag: "Journey",
      heading: "Education & Experience",
      items: [
        {
          period: "2022 — 2025",
          title: "Bachelor's in Computer Science (MIAGE)",
          company: "Grenoble Alpes University",
          description:
            "Applied Computer Methods for Enterprise Management. Full Stack development, agile project management and information systems.",
          tags: ["Angular", "Spring Boot", "Agile", "IS"],
          type: "education" as const,
        },
        {
          period: "2019 — 2022",
          title: "Bachelor's in Computer Science",
          company: "UAT University, Algeria",
          description:
            "Comprehensive computer science education: algorithms, object-oriented programming, databases, networks and system architecture.",
          tags: ["Java", "Python", "C", "SQL", "Linux"],
          type: "education" as const,
        },
        {
          period: "2024",
          title: "Showcase Website Development",
          company: "Freelance project",
          description:
            "Design and development of a responsive website for a local service. Modern user interface, contact form and deployment on GitHub Pages / Netlify.",
          tags: ["HTML", "CSS", "JavaScript", "Responsive"],
          type: "work" as const,
        },
      ],
    },
    certifications: {
      tag: "Certifications",
      items: [
        { title: "Web Development", provider: "Udemy" },
        { title: "AWS Certification", provider: "In progress" },
      ],
    },
    skills: {
      tag: "Skills",
      heading: "Tech stack",
      categories: [
        {
          category: "Development",
          icon: "⬡",
          skills: [
            { name: "Angular", level: 90 },
            { name: "Spring Boot / Maven / JPA", level: 75 },
            { name: "Java", level: 85 },
            { name: "JavaScript / TypeScript", level: 85 },
            { name: "C# / .NET / MonoGame", level: 70 },
            { name: "Python", level: 70 },
            { name: "PHP / MySQL / Hibernate", level: 70 },
            { name: "HTML / CSS / Bootstrap", level: 85 },
            { name: "XML, XSD, XSLT", level: 70 },
          ],
        },
        {
          category: "System & Cloud",
          icon: "⬢",
          skills: [
            { name: "Linux / Bash", level: 88 },
            { name: "Docker / Swarm", level: 85 },
            { name: "AWS", level: 60 },
          ],
        },
        {
          category: "Tools & Methods",
          icon: "◈",
          skills: [
            { name: "Git / CI/CD", level: 40 },
            { name: "Automated Testing", level: 40 },
            { name: "Slack / Jira", level: 75 },
            { name: "Agile Methodology", level: 80 },
            { name: "UML / Modeling", level: 75 },
          ],
        },
      ],
    },
    projects: {
      tag: "Work",
      heading: "My projects",
      items: [
        {
          title: "Tour Planning Application",
          description:
            "Web application for map visualization and automatic route planning optimization (distance, duration, cost), with selection of orders, trucks and teams.",
          tags: ["Angular", "Spring Boot", "PostgreSQL", "Agile"],
          link: "https://github.com/youcef1712/Projet-Integrateur",
          accent: "var(--accent)",
        },
        {
          title: "Video Game Development",
          description:
            "Development of a game using C# and MonoGame framework. Data management using XML, XSD, XSLT, and collaboration with Slack, Jira and Git.",
          tags: ["C#", ".NET", "MonoGame", "XML", "Git"],
          link: "https://github.com/youcef1712/pacman",
          accent: "#8b5cf6",
        },
        {
          title: "C Robot – Obstacle Detection",
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
          title: "Chinese Checkers",
          description:
            "OCaml program simulating a strategy game on a hexagonal board with artificial intelligence.",
          tags: ["OCaml"],
          link: "https://github.com/youcef1712/dame_chinoise",
          accent: "#f59e0b",
        },
        {
          title: "Angular Portfolio",
          description:
            "Personal portfolio developed with Angular showcasing my background, projects and skills.",
          tags: ["Angular", "TypeScript", "SCSS"],
          link: "https://github.com/youcefbendra/portfolio-angular",
          accent: "#ec4899",
        },
        {
          title: "PHP Contact Form",
          description:
            "Modern contact form allowing users to send a message with dynamic validation via AJAX.",
          tags: ["PHP", "JavaScript", "AJAX", "CSS"],
          link: "https://github.com/youcef1712/Formulaire-php",
          accent: "#fd6c9e",
        },
      ],
    },
    contact: {
      tag: "Contact",
      heading: "Let's work together",
      subheading:
        "A project in mind? I am available for missions and collaboration opportunities.",
      email_label: "Email",
      location_label: "Location",
      location_value: "Lyon, Grenoble",
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
        error_title: "Sending failed",
        error_msg: "Something went wrong. Please try again or contact me directly by email.",
      },
    },
    footer: {
      copy: "Designed and developed with passion.",
      back_top: "↑ Back to top",
      made_with: "Built with Next.js & passion",
    },
  },
} as const;

export type Translations = typeof translations.fr;
