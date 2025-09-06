// Inline translations to avoid loading issues
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

// Simple Translation system
class SimpleTranslation {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.isReady = true;
  }

  detectLanguage() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && ['fr', 'en'].includes(savedLang)) {
      return savedLang;
    }
    
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    return ['fr', 'en'].includes(browserLang) ? browserLang : 'fr';
  }

  init() {
    console.log('Initializing translation system with language:', this.currentLang);
    
    // Apply translations
    this.applyTranslations();
    
    // Add language switcher
    this.addLanguageSwitcher();
    
    console.log('Translation system ready');
  }

  t(key, params = {}) {
    const keys = key.split('.');
    let value = TRANSLATIONS[this.currentLang];
    
    // Navigate through the object
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Fallback to French if not found
    if (!value && this.currentLang !== 'fr') {
      value = TRANSLATIONS.fr;
      for (const k of keys) {
        value = value?.[k];
      }
    }
    
    // Replace parameters if it's a string
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      for (const [param, replacement] of Object.entries(params)) {
        value = value.replace(`{{${param}}}`, replacement);
      }
    }
    
    return value || key;
  }

  applyTranslations() {
    console.log('Applying translations for language:', this.currentLang);
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      let translation = this.t(key);
      
      // Handle array index notation (e.g., "modal.whoami.content.0")
      if (key.includes('.') && key.match(/\.\d+$/)) {
        const parts = key.split('.');
        const index = parseInt(parts.pop());
        const baseKey = parts.join('.');
        const baseTranslation = this.t(baseKey);
        
        if (Array.isArray(baseTranslation) && baseTranslation[index]) {
          translation = baseTranslation[index];
        }
      }
      
      console.log(`Translating ${key} -> ${translation}`);
      
      if (Array.isArray(translation)) {
        element.innerHTML = translation.join('<br>');
      } else {
        // Handle HTML content for elements that may contain spans
        if (translation.includes('<span')) {
          element.innerHTML = translation;
          
          // Update age if this element contains age span
          const ageSpan = element.querySelector('#age');
          if (ageSpan) {
            ageSpan.textContent = this.calculateAge();
          }
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update modal content specifically (legacy - now used for pages)
    this.updatePageContent();
    
    // Update resume page content
    this.updateResumeContent();
    
    // Update footer with year
    this.updateFooter();
  }

  calculateAge() {
    const birthYear = 2002;
    const birthMonth = 11;
    const birthDay = 1;
    const today = new Date();
    let age = today.getFullYear() - birthYear;
    const m = today.getMonth() + 1 - birthMonth;
    if (m < 0 || (m === 0 && today.getDate() < birthDay)) {
      age--;
    }
    return age;
  }

  updatePageContent() {
    // Update age on pages that contain it (whoami page)
    const ageSpan = document.getElementById('age');
    if (ageSpan) {
      ageSpan.textContent = this.calculateAge();
    }
  }

  updateResumeContent() {
    // Update resume links and preview based on current language
    const withPhotoLink = document.getElementById('resume-with-photo');
    const withoutPhotoLink = document.getElementById('resume-without-photo');
    const previewImg = document.getElementById('resume-preview-img');
    
    if (withPhotoLink && withoutPhotoLink && previewImg) {
      if (this.currentLang === 'fr') {
        withPhotoLink.href = 'https://github.com/antoinedenovembre/resume/releases/latest/download/resume_fr.pdf';
        withoutPhotoLink.href = 'https://github.com/antoinedenovembre/resume/releases/latest/download/resume-no-image-fr.pdf';
        previewImg.src = 'https://raw.githubusercontent.com/antoinedenovembre/resume/main/assets/previews/preview_fr.png';
        previewImg.alt = 'Aperçu du CV français';
      } else {
        withPhotoLink.href = 'https://github.com/antoinedenovembre/resume/releases/latest/download/resume_en.pdf';
        withoutPhotoLink.href = 'https://github.com/antoinedenovembre/resume/releases/latest/download/resume-no-image-en.pdf';
        previewImg.src = 'https://raw.githubusercontent.com/antoinedenovembre/resume/main/assets/previews/preview_en.png';
        previewImg.alt = 'English resume preview';
      }
    }
  }

  updateFooter() {
    const yearSpan = document.getElementById('year');
    if (yearSpan && yearSpan.parentElement) {
      const year = new Date().getFullYear();
      const footerText = this.t('footer.copyright', { year });
      yearSpan.parentElement.innerHTML = footerText;
    }
  }

  addLanguageSwitcher() {
    // Check if switcher already exists
    if (document.querySelector('.lang-switcher')) {
      return;
    }
    
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
      <button class="lang-btn ${this.currentLang === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
      <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
    `;
    
    // Add to body so it can be positioned fixed
    document.body.appendChild(switcher);
    
    // Add event listeners
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  switchLanguage(lang) {
    if (['fr', 'en'].includes(lang)) {
      this.currentLang = lang;
      console.log('Switching to language:', lang);
      
      this.applyTranslations();
      
      // Update active button
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      });
      
      // Store preference
      localStorage.setItem('preferred-language', lang);
    }
  }
}

// Initialize translation system when DOM is ready
let translationSystem;

function initTranslation() {
  translationSystem = new SimpleTranslation();
  translationSystem.init();
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTranslation);
} else {
  initTranslation();
}

// Export for global use
window.t = (key, params) => translationSystem?.t(key, params) || key;
