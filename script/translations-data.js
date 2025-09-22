// Translation data
const TRANSLATIONS = {
  fr: {
    nav: {
      whoami: "QUI SUIS-JE?",
      work: "TRAVAUX",
      resume: "CV",
      contact: "CONTACT"
    },
    modal: {
      whoami: {
        title: "QUI SUIS-JE?",
        content: [
          "Je suis Antoine, j'ai <span id=\"age\"></span> ans et je suis ingénieur en logiciel et traitement d'image embarqué.",
          "Je suis spécialisé dans les langages C/C++ et j'adore automatiser des tâches en Bash ou par CI/CD.",
          "J'aime créer des choses simples, efficaces et faciles à utiliser."
        ]
      },
      contact: {
        title: "CONTACT",
        content: [
          "Envoyez-moi un message pour discuter de vos projets :",
          "Vous pouvez aussi me retrouver sur :"
        ],
        success: {
          title: "SUCCÈS",
          content: [
            "Votre message a été envoyé avec succès !",
            "← Retourner à l'accueil"
          ]
        },
        links: {
          github: "GitHub",
          linkedin: "LinkedIn"
        }
      }
    },
    resume: {
      title: "CV",
      download_label: "Télécharger le CV français",
      actions: {
        with_photo: "PDF (avec photo)",
        without_photo: "PDF (sans photo)"
      }
    },
    form: {
      name_placeholder: "NOM",
      email_placeholder: "EMAIL",
      message_placeholder: "MESSAGE"
    },
    projects: {
      project1: {
        title: "Projet Un",
        description: "Une application web complète construite avec React et Node.js. Ce projet démontre les principes de conception responsive et les pratiques JavaScript modernes.",
        demo: "Démo",
        github: "GitHub",
        caseStudy: "Étude de cas"
      },
      project2: {
        title: "Projet Deux",
        description: "Une plateforme e-commerce avec traitement de paiement intégré. Les fonctionnalités incluent l'authentification des utilisateurs, la gestion des produits et le suivi des commandes.",
        visit: "Visiter le site",
        caseStudy: "Étude de cas"
      },
      project3: {
        title: "Projet Trois",
        description: "Une application mobile-first développée avec Flutter. Cette solution multi-plateforme offre des performances natives tout en maintenant une base de code unique.",
        appStore: "App Store",
        playStore: "Play Store"
      }
    },
    footer: {
      copyright: "© {{year}} — Antoine Duteyrat"
    },
    header: {
      contact_label: "écrivez-moi."
    }
  },
  en: {
    nav: {
      whoami: "WHO AM I?",
      work: "WORK",
      resume: "RESUME", 
      contact: "CONTACT"
    },
    modal: {
      whoami: {
        title: "WHO AM I?",
        content: [
            "I'm Antoine, I'm <span id=\"age\"></span> years old and I'm an embedded software and image processing engineer.",
            "I specialize in C/C++ languages and I love automating tasks using Bash or CI/CD.",
            "I enjoy creating simple, efficient, and user-friendly solutions."
        ]
      },
      contact: {
        title: "CONTACT",
        content: [
          "Send me a message to discuss your projects:",
          "You can also find me on:"
        ],
        success: {
          title: "SUCCESS",
          content: [
            "Your message has been sent successfully!",
            "← Back to home"
          ]
        },
        links: {
          github: "GitHub",
          linkedin: "LinkedIn"
        }
      }
    },
    resume: {
      title: "RESUME",
      download_label: "Download English resume",
      actions: {
        with_photo: "PDF (with photo)",
        without_photo: "PDF (no photo)"
      }
    },
    form: {
      name_placeholder: "NAME",
      email_placeholder: "EMAIL",
      message_placeholder: "MESSAGE"
    },
    projects: {
      project1: {
        title: "Project One",
        description: "A comprehensive web application built with React and Node.js. This project demonstrates responsive design principles and modern JavaScript practices.",
        demo: "Demo",
        github: "GitHub",
        caseStudy: "Case Study"
      },
      project2: {
        title: "Project Two",
        description: "An e-commerce platform with integrated payment processing. Features include user authentication, product management, and order tracking.",
        visit: "Visit Site",
        caseStudy: "Case Study"
      },
      project3: {
        title: "Project Three",
        description: "A mobile-first application developed with Flutter. This cross-platform solution delivers native performance while maintaining a single codebase.",
        appStore: "App Store",
        playStore: "Play Store"
      }
    },
    footer: {
      copyright: "© {{year}} — Antoine Duteyrat"
    },
    header: {
      contact_label: "email me."
    }
  }
};

// Export for global use
window.TRANSLATIONS = TRANSLATIONS;
