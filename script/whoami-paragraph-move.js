// Déplace dynamiquement le dernier paragraphe selon la largeur du viewport
function moveWhoamiParagraph() {
  let lastPara = document.querySelector('p[data-translate="modal.whoami.content.2"]');
  const textDiv = document.querySelector('.profile-side .content-text');
  let fullDiv = document.querySelector('.content-full');
  if (!lastPara || !textDiv) return;

  if (window.innerWidth > 768) {
    // Sur desktop, remonter le paragraphe dans la div principale
    if (!textDiv.contains(lastPara)) {
      textDiv.appendChild(lastPara);
    }
    // Si la div .content-full existe et est vide, la supprimer
    if (fullDiv && fullDiv.children.length === 0) {
      fullDiv.parentNode.removeChild(fullDiv);
    }
  } else {
    // Sur mobile, replacer le paragraphe dans la div full largeur
    if (!fullDiv) {
      // Crée la div si elle n'existe pas
      fullDiv = document.createElement('div');
      fullDiv.className = 'content-body content-full';
      fullDiv.style.marginTop = '1em';
      // Place juste après .profile-side
      const profileSide = document.querySelector('.profile-side');
      if (profileSide && profileSide.parentNode) {
        profileSide.parentNode.insertBefore(fullDiv, profileSide.nextSibling);
      }
    }
    if (!fullDiv.contains(lastPara)) {
      fullDiv.appendChild(lastPara);
    }
  }
}

window.addEventListener('resize', moveWhoamiParagraph);
document.addEventListener('DOMContentLoaded', moveWhoamiParagraph);
