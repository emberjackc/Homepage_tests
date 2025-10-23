// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add scroll effect to navigation
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.98)';
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.data-card, .route-card, .feature, .map-stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.data-card, .route-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click handlers for buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Live map simulation
    const simulateLiveMap = () => {
        const routePoints = document.querySelectorAll('.route-point');
        const mapStats = document.querySelectorAll('.map-stat .stat-value');
        
        // Simulate coach movement
        let currentCoach = 0;
        setInterval(() => {
            routePoints.forEach((point, index) => {
                point.classList.remove('active');
            });
            
            if (currentCoach < routePoints.length) {
                routePoints[currentCoach].classList.add('active');
                currentCoach++;
            } else {
                currentCoach = 0;
            }
        }, 3000);
        
        // Simulate live stats updates
        setInterval(() => {
            const coachCount = Math.floor(Math.random() * 5) + 10;
            const chargeLevel = Math.floor(Math.random() * 10) + 90;
            const eta = (Math.random() * 0.5 + 2).toFixed(1);
            
            if (mapStats[0]) mapStats[0].textContent = coachCount;
            if (mapStats[1]) mapStats[1].textContent = chargeLevel + '%';
            if (mapStats[2]) mapStats[2].textContent = eta + 'h';
        }, 5000);
    };

    // Start live map simulation
    simulateLiveMap();


    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });


    // Add mobile menu toggle
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav-container');
        const mobileMenuButton = document.createElement('button');
        mobileMenuButton.innerHTML = '☰';
        mobileMenuButton.className = 'mobile-menu-button';
        mobileMenuButton.style.display = 'none';
        
        // Add mobile menu styles
        const style = document.createElement('style');
        style.textContent = `
            .mobile-menu-button {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                padding: 8px;
                color: white;
            }
            
            @media (max-width: 768px) {
                .mobile-menu-button {
                    display: block !important;
                }
                .nav-links {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
        
        nav.appendChild(mobileMenuButton);
    };

    createMobileMenu();

    // Mobile hero stats carousel
    const slides = document.querySelectorAll('.stat-slide');
    let currentSlide = 0;
    let carouselInterval;

    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Add active class to current slide
        slides[index].classList.add('active');
        
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    function startCarousel() {
        carouselInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    // Start carousel on mobile
    if (window.innerWidth <= 768) {
        startCarousel();
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            startCarousel();
        } else {
            stopCarousel();
        }
    });

    // Pause carousel on hover (if on desktop with mobile view)
    const carousel = document.querySelector('.stat-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopCarousel);
        carousel.addEventListener('mouseleave', function() {
            if (window.innerWidth <= 768) {
                startCarousel();
            }
        });
    }
});

// Add ripple effect styles
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .btn-primary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);
