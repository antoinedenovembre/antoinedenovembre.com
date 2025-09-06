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
      // Skip if already processed
      if (brand.querySelector('.full-name')) {
        return;
      }
      
      const originalText = brand.textContent.trim();
      let fullName, shortName;
      
      // Check if there's a link inside
      const link = brand.querySelector('a');
      let linkHref = '';
      let linkText = '';
      
      if (link) {
        linkHref = link.getAttribute('href');
        linkText = link.textContent.trim();
      }
      
      if (originalText === 'antoine duteyrat.') {
        fullName = 'antoine duteyrat.';
        shortName = 'antoine.';
      } else if (originalText.includes(' - ')) {
        // For pages like "antoine duteyrat. - whoami."
        const parts = originalText.split(' - ');
        const pageName = parts[1];
        
        if (link) {
          fullName = `<a href="${linkHref}">${linkText}</a> - ${pageName}`;
          shortName = `<a href="${linkHref}">antoine.</a>`; // No suffix on mobile
        } else {
          fullName = originalText;
          shortName = `antoine.`; // No suffix on mobile
        }
      } else {
        // Fallback
        fullName = originalText;
        shortName = 'antoine.';
      }
      
      brand.innerHTML = `
        <span class="full-name">${fullName}</span>
        <span class="short-name">${shortName}</span>
      `;
    });
  }
}

// Export for global use
window.ResponsiveNavigation = ResponsiveNavigation;
