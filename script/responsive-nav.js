// Responsive navigation manager
class ResponsiveNavigation {
  constructor() {
    this.init();
  }

  init() {
    this.updateBrandNames();
    // Listen for window resize to update brand names
    window.addEventListener('resize', () => this.updateBrandNames());
  }

  updateBrandNames() {
    const brandElements = document.querySelectorAll('.brand');
    
    brandElements.forEach(brand => {
      // Store original text if not already stored
      if (!brand.getAttribute('data-original-text')) {
        brand.setAttribute('data-original-text', brand.textContent.trim());
      }
      
      // Always use the original text to rebuild
      const originalText = brand.getAttribute('data-original-text');
      let fullName, shortName;
      
      if (originalText === 'antoine duteyrat.') {
        fullName = 'antoine duteyrat.';
        shortName = 'antoine.';
      } else if (originalText.includes('–')) {
        // For pages like "antoine duteyrat. – whoami."
        const parts = originalText.split('–');
        const baseName = parts[0].trim();
        const pageName = parts[1].trim();

        fullName = `${baseName} <span class="brand-page">${pageName}</span>`;
        shortName = 'antoine.';
      } else {
        // Fallback
        fullName = originalText;
        shortName = 'antoine.';
      }
      
      // Update the HTML with new structure
      brand.innerHTML = `
        <span class="full-name">${fullName}</span>
        <span class="short-name">${shortName}</span>
      `;
    });
  }
}

// Export for global use
window.ResponsiveNavigation = ResponsiveNavigation;
