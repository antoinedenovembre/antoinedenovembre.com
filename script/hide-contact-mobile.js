// Ensure all contact elements stay hidden on mobile
document.addEventListener('DOMContentLoaded', function() {
    function ensureContactHidden() {
        if (window.innerWidth <= 768) {
            // Cacher tous les éléments avec la classe .contact
            const contactElements = document.querySelectorAll('.contact');
            contactElements.forEach(contact => {
                contact.style.display = 'none !important';
                contact.style.visibility = 'hidden !important';
                contact.style.opacity = '0 !important';
                contact.style.pointerEvents = 'none !important';
            });
            
            // Cacher tous les éléments a[href^="mailto:"]
            const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
            mailtoLinks.forEach(link => {
                link.style.display = 'none !important';
                link.style.visibility = 'hidden !important';
                link.style.opacity = '0 !important';
                link.style.pointerEvents = 'none !important';
            });
            
            // Cacher tous les éléments small qui contiennent email me/écrivez-moi
            const smallElements = document.querySelectorAll('small[data-translate="header.contact_label"]');
            smallElements.forEach(small => {
                small.style.display = 'none !important';
                small.style.visibility = 'hidden !important';
                small.style.opacity = '0 !important';
                small.style.pointerEvents = 'none !important';
            });
        }
    }
    
    // Run immediately
    ensureContactHidden();
    
    // Run on window resize
    window.addEventListener('resize', ensureContactHidden);
    
    // Run periodically to catch any JS that might change visibility
    setInterval(ensureContactHidden, 100); // Augmenter la fréquence
});