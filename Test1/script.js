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
    const animatedElements = document.querySelectorAll('.feature-card, .route-card, .service-item, .pricing-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .route-card, .pricing-card');
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

    // Add mobile menu toggle (for future mobile navigation)
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

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Add counter animation for pricing
    const animateCounter = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = `From £${current}`;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Observe pricing cards for counter animation
    const pricingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const priceElement = entry.target.querySelector('.price');
                if (priceElement) {
                    const priceText = priceElement.textContent;
                    const priceMatch = priceText.match(/From £(\d+)/);
                    if (priceMatch) {
                        const finalPrice = parseInt(priceMatch[1]);
                        animateCounter(priceElement, 0, finalPrice, 1000);
                    }
                }
                pricingObserver.unobserve(entry.target);
            }
        });
    });

    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        pricingObserver.observe(card);
    });
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
