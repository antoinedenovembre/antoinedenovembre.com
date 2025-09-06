// Resume page management
class ResumeManager {
  constructor(translationSystem) {
    this.translationSystem = translationSystem;
  }

  updateContent() {
    // Update resume links and preview based on current language
    const withPhotoLink = document.getElementById('resume-with-photo');
    const withoutPhotoLink = document.getElementById('resume-without-photo');
    const previewImg = document.getElementById('resume-preview-img');
    
    if (withPhotoLink && withoutPhotoLink && previewImg) {
      if (this.translationSystem.currentLang === 'fr') {
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
}

// Export for global use
window.ResumeManager = ResumeManager;
