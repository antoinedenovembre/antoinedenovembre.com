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
          "Bonjour! Je suis Antoine, j'ai <span id=\"age\"></span> ans et je suis ingénieur en logiciel et traitement d'image embarqué.",
          "Je suis spécialisé dans les langages C/C++ et j'adore automatiser des tâches en Bash ou par CI/CD.",
          "J'aime créer des choses simples, efficaces et faciles à utiliser."
        ]
      },
      contact: {
        title: "CONTACT",
        content: [
          "Envoyez-moi un email pour discuter de vos projets :",
          "Vous pouvez aussi me retrouver sur :"
        ],
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
        without_photo: "Sans photo"
      }
    },
    footer: {
      copyright: "© {{year}} — Antoine Duteyrat"
    },
    header: {
      contact_label: "email me"
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
          "Send me an email to discuss your projects:",
          "You can also find me on:"
        ],
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
        without_photo: "Without photo"
      }
    },
    footer: {
      copyright: "© {{year}} — Antoine Duteyrat"
    },
    header: {
      contact_label: "email me"
    }
  }
};

// Export for global use
window.TRANSLATIONS = TRANSLATIONS;
