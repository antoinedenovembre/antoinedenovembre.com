// Main application initializer
class AppInitializer {
  constructor() {
    this.translationSystem = null;
    this.languageSwitcher = null;
    this.resumeManager = null;
  }

  init() {
    console.log('Initializing application...');
    
    // Initialize translation system
    this.translationSystem = new window.TranslationSystem();
    
    // Initialize language switcher
    this.languageSwitcher = new window.LanguageSwitcher(this.translationSystem);
    
    // Initialize resume manager
    this.resumeManager = new window.ResumeManager(this.translationSystem);
    
    // Add resume manager to translation system
    this.translationSystem.updateResumeContent = () => {
      this.resumeManager.updateContent();
    };
    
    // Add language switcher to translation system
    this.translationSystem.addLanguageSwitcher = () => {
      this.languageSwitcher.create();
    };
    
    // Initialize everything
    this.translationSystem.init();
    
    // Initialize date
    this.initializeDate();
    
    console.log('Application initialized successfully');
  }

  initializeDate() {
    const yearSpan = document.getElementById('year');
    if (yearSpan && !yearSpan.textContent) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }
}

// Initialize when DOM is ready
let appInitializer;

function initializeApp() {
  appInitializer = new window.AppInitializer();
  appInitializer.init();
}

// Export for global use
window.AppInitializer = AppInitializer;
window.initializeApp = initializeApp;

// Run when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
