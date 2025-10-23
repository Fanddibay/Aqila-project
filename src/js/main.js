/**
 * MieMore Agents - Main JavaScript File
 * Modern ES6+ JavaScript with carousel functionality and smooth animations
 */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function () {
    console.log('🍜 MieMore Agents project initialized successfully!');

    // Initialize all components
    initializeAOS();
    initializeNavigation();
    initializeMobileMenu();
    initializeCarousels();
    initializeScrollEffects();
    initializeSmoothScrolling();
    initializeImageLazyLoading();
});

/**
 * Initialize AOS (Animate On Scroll) library
 */
function initializeAOS() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        delay: 0,
        anchorPlacement: 'top-bottom'
    });
}

/**
 * Navigation functionality
 */
function initializeNavigation() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            nav.classList.add('backdrop-blur-md', 'bg-white/95');
            nav.classList.remove('bg-white/90');
        } else {
            nav.classList.remove('backdrop-blur-md', 'bg-white/95');
            nav.classList.add('bg-white/90');
        }
    });
}

/**
 * Mobile menu functionality
 */
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = mobileMenuButton.querySelector('.hamburger-icon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    let isMenuOpen = false;

    // Toggle mobile menu
    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('show');
            hamburgerIcon.classList.add('open');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            mobileMenu.classList.remove('show');
            hamburgerIcon.classList.remove('open');
            document.body.style.overflow = ''; // Restore scrolling

            // Hide menu after animation completes
            setTimeout(() => {
                if (!isMenuOpen) {
                    mobileMenu.classList.add('hidden');
                }
            }, 300);
        }
    }

    // Close mobile menu
    function closeMobileMenu() {
        if (isMenuOpen) {
            toggleMobileMenu();
        }
    }

    // Event listeners
    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking on nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMobileMenu();
        }
    });

    // Close menu on window resize (if switching to desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && isMenuOpen) {
            closeMobileMenu();
        }
    });

    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                closeMobileMenu();
            }
        }, 100);
    });

    // Add touch support for mobile menu items
    mobileNavLinks.forEach(link => {
        link.addEventListener('touchstart', function () {
            this.style.transform = 'scale(0.98)';
        });

        link.addEventListener('touchend', function () {
            this.style.transform = '';
        });
    });
}

/**
 * Initialize all carousels
 */
function initializeCarousels() {
    // Define carousel configurations
    const carouselConfigs = {
        pmf: {
            prefix: 'PMF',
            start: 1,
            end: 8,
            title: 'Preparing Millet Flours'
        },
        pbf: {
            prefix: 'PBD',
            start: 1,
            end: 9,
            title: 'Preparing Breadfruit Flours'
        },
        pml: {
            prefix: 'PML',
            start: 1,
            end: 8,
            title: 'Preparing Moringa Leaves'
        },
        nm: {
            prefix: 'NM',
            start: 1,
            end: 9,
            title: 'Noodle Making'
        }
    };

    // Initialize each carousel
    Object.keys(carouselConfigs).forEach(carouselId => {
        const config = carouselConfigs[carouselId];
        createCarousel(carouselId, config);
    });
}

/**
 * Create a carousel with the given configuration
 */
function createCarousel(carouselId, config) {
    const container = document.querySelector(`[data-carousel="${carouselId}"]`);
    if (!container) return;

    const slidesContainer = container.querySelector('.carousel-slides');
    const dotsContainer = container.querySelector('.carousel-dots');
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');

    let currentSlide = 0;
    const totalSlides = config.end - config.start + 1;

    // Generate slides
    for (let i = config.start; i <= config.end; i++) {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <img src="src/assets/images/${config.prefix}-${i}.jpeg" 
                 alt="${config.title} - Step ${i}" 
                 loading="lazy"
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE2MCAxMDBIMjQwTDIwMCAxNTBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3MjgwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPg=='">
        `;
        slidesContainer.appendChild(slide);
    }

    // Generate dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    // Update carousel display
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        slidesContainer.style.transform = `translateX(${translateX}%)`;

        // Update dots
        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-slide functionality
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Pause auto-slide on hover
    container.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    container.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (container.matches(':hover')) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        }
    });

    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    let isDragging = false;

    slidesContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        clearInterval(autoSlideInterval); // Pause auto-slide during touch
    });

    slidesContainer.addEventListener('touchmove', (e) => {
        if (isDragging) {
            e.preventDefault(); // Prevent scrolling while swiping
        }
    });

    slidesContainer.addEventListener('touchend', (e) => {
        if (isDragging) {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
            isDragging = false;

            // Resume auto-slide after touch
            setTimeout(() => {
                autoSlideInterval = setInterval(nextSlide, 5000);
            }, 1000);
        }
    });

    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Mouse drag support for desktop
    let mouseStartX = 0;
    let mouseEndX = 0;
    let isMouseDragging = false;

    slidesContainer.addEventListener('mousedown', (e) => {
        mouseStartX = e.clientX;
        isMouseDragging = true;
        clearInterval(autoSlideInterval);
        slidesContainer.style.cursor = 'grabbing';
    });

    slidesContainer.addEventListener('mousemove', (e) => {
        if (isMouseDragging) {
            e.preventDefault();
        }
    });

    slidesContainer.addEventListener('mouseup', (e) => {
        if (isMouseDragging) {
            mouseEndX = e.clientX;
            handleMouseDrag();
            isMouseDragging = false;
            slidesContainer.style.cursor = 'grab';

            setTimeout(() => {
                autoSlideInterval = setInterval(nextSlide, 5000);
            }, 1000);
        }
    });

    slidesContainer.addEventListener('mouseleave', () => {
        if (isMouseDragging) {
            isMouseDragging = false;
            slidesContainer.style.cursor = 'grab';
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
    });

    function handleMouseDrag() {
        const threshold = 50;
        const diff = mouseStartX - mouseEndX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Set initial cursor style
    slidesContainer.style.cursor = 'grab';
}

/**
 * Scroll effects and parallax
 */
function initializeScrollEffects() {
    let ticking = false;

    function updateScrollEffects() {
        const scrolled = window.pageYOffset;

        // Parallax effect for hero section
        const heroSection = document.querySelector('#hero');
        if (heroSection) {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            heroSection.style.transform = `translateY(${yPos}px)`;
        }

        // Fade in elements as they come into view
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('aos-animate');
            }
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
}

/**
 * Smooth scrolling for all anchor links
 */
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Lazy loading for images
 */
function initializeImageLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

/**
 * Utility functions
 */

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-full`;

    const colors = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white',
        warning: 'bg-yellow-500 text-black'
    };

    notification.className += ` ${colors[type] || colors.info}`;
    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

// Generate random ID
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Preload images
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Smooth reveal animation for elements
function revealElements() {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

// Add reveal class to elements that should animate on scroll
document.addEventListener('DOMContentLoaded', function () {
    const animateElements = document.querySelectorAll('[data-aos]');
    animateElements.forEach(element => {
        element.classList.add('reveal');
    });

    window.addEventListener('scroll', debounce(revealElements, 100));
});

// Export functions for global use
window.MieMoreAgents = {
    showNotification,
    debounce,
    throttle,
    formatDate,
    generateId,
    isInViewport,
    preloadImages,
    revealElements
};

// Add CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .loaded {
        opacity: 1;
        transform: scale(1);
    }
    
    img {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
`;
document.head.appendChild(style);