document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navWrapper = document.querySelector('.nav-wrapper');

    if (menuIcon && navWrapper) {
        menuIcon.addEventListener('click', (e) => {
            e.preventDefault();
            navWrapper.classList.toggle('is-active');
        });

        // Optionnel : fermer le menu si on clique en dehors
        navWrapper.addEventListener('click', (e) => {
            if (e.target === navWrapper) {
                navWrapper.classList.remove('is-active');
            }
        });
    }
});
