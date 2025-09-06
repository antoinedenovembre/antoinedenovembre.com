// Wait for DOM and translation system
function initializeScripts() {
  // Add date to copyright (if not handled by translation system)
  const yearSpan = document.getElementById('year');
  if (yearSpan && !yearSpan.textContent) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Calculate age function
  function calculateAge() {
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

  // Update age if element exists
  function updateAge() {
    const ageSpan = document.getElementById('age');
    if (ageSpan) {
      ageSpan.textContent = calculateAge();
    }
  }

  // Initial age update
  updateAge();

  // Export calculateAge function globally
  window.calculateAge = calculateAge;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeScripts);
} else {
  // DOM already loaded, wait a bit for translation system
  setTimeout(initializeScripts, 100);
}
