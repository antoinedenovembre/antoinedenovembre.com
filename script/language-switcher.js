// Language switcher functionality
class LanguageSwitcher {
  constructor(translationSystem) {
    this.translationSystem = translationSystem;
  }

  create() {
    // Check if switcher already exists
    if (document.querySelector('.lang-switcher')) {
      return;
    }
    
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
      <button class="lang-btn ${this.translationSystem.currentLang === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
      <button class="lang-btn ${this.translationSystem.currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
    `;
    
    // Add to body so it can be positioned fixed
    document.body.appendChild(switcher);
    
    // Add event listeners
    this.addEventListeners(switcher);
  }

  addEventListeners(switcher) {
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.translationSystem.switchLanguage(btn.getAttribute('data-lang'));
      });
    });
  }
}

// Export for global use
window.LanguageSwitcher = LanguageSwitcher;
