// Main Translation system
class TranslationSystem {
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
    let value = window.TRANSLATIONS[this.currentLang];
    
    // Navigate through the object
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Fallback to French if not found
    if (!value && this.currentLang !== 'fr') {
      value = window.TRANSLATIONS.fr;
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
          if (ageSpan && window.ageCalculator) {
            ageSpan.textContent = window.ageCalculator.calculate();
          }
        } else {
          element.textContent = translation;
        }
      }

    });

    // Update all elements with data-translate-placeholder attribute (for input/textarea placeholders)
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      const translation = this.t(key);
      if (translation) {
        element.setAttribute('placeholder', translation);
      }
    });

    // Update page content
    this.updatePageContent();
    
    // Update resume page content
    this.updateResumeContent();
    
    // Update footer with year
    this.updateFooter();
  }

  updatePageContent() {
    // Update age on pages that contain it (whoami page)
    if (window.ageCalculator) {
      window.ageCalculator.updateAgeElement();
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

// Export for global use
window.TranslationSystem = TranslationSystem;
