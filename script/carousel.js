/**
 * Carousel functionality for projects display
 * Controls the sliding of project cards
 */
class Carousel {
    constructor(containerSelector) {
        // Main elements
        this.container = document.querySelector(containerSelector);
        this.carousel = this.container.querySelector('.carousel');
        this.slides = this.container.querySelectorAll('.carousel-slide');
        
        // Controls
        this.prevButton = this.container.querySelector('.carousel-prev');
        this.nextButton = this.container.querySelector('.carousel-next');
        this.indicators = this.container.querySelectorAll('.carousel-indicator');
        
        // State
        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        
        // Initialize
        this.init();
    }
    
    init() {
        // Set initial active slide
        this.updateSlideState();
        
        // Add event listeners
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.nextSlide());
        
        // Add indicator event listeners
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Add touch support
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }
    
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
        this.updateSlideState();
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slideCount;
        this.updateSlideState();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlideState();
    }
    
    updateSlideState() {
        // Update carousel position
        this.carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        
        // Update active slide
        this.slides.forEach((slide, index) => {
            if (index === this.currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50; // Minimum distance to be considered a swipe
        const diff = startX - endX;
        
        if (diff > threshold) {
            // Swiped left, go to next slide
            this.nextSlide();
        } else if (diff < -threshold) {
            // Swiped right, go to previous slide
            this.prevSlide();
        }
    }
}

// Initialize the carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const projectCarousel = new Carousel('.carousel-container');
});