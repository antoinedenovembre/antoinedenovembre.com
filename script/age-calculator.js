// Age calculation utilities
class AgeCalculator {
  constructor(birthYear = 2002, birthMonth = 11, birthDay = 1) {
    this.birthYear = birthYear;
    this.birthMonth = birthMonth;
    this.birthDay = birthDay;
  }

  calculate() {
    const today = new Date();
    let age = today.getFullYear() - this.birthYear;
    const m = today.getMonth() + 1 - this.birthMonth;
    
    if (m < 0 || (m === 0 && today.getDate() < this.birthDay)) {
      age--;
    }
    
    return age;
  }

  updateAgeElement(elementId = 'age') {
    const ageSpan = document.getElementById(elementId);
    if (ageSpan) {
      ageSpan.textContent = this.calculate();
    }
  }
}

// Create global instance
const ageCalculator = new AgeCalculator();

// Export for global use
window.ageCalculator = ageCalculator;
window.calculateAge = () => ageCalculator.calculate();
