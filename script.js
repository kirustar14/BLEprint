// BLEprint Website - Enhanced Interactive Features
// Modern animations, smooth scrolling, and professional UX

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // Smooth Scroll for Navigation Links
    // ==========================================
    
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .hero-cta[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ==========================================
    // Intersection Observer for Scroll Animations
    // ==========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elements to animate on scroll
    const elementsToAnimate = document.querySelectorAll(
        '.problem-item, .solution-card, .validation-card, .team-card, .market-item, .workflow-step, .incident-card, .demo-description'
    );
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(element);
    });
    
    // ==========================================
    // Stagger Animation Delays
    // ==========================================
    
    const staggerGroups = [
        document.querySelectorAll('.solution-card'),
        document.querySelectorAll('.validation-card'),
        document.querySelectorAll('.workflow-step'),
        document.querySelectorAll('.ai-example')
    ];
    
    staggerGroups.forEach(group => {
        group.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
    
    // ==========================================
    // Nav Background on Scroll
    // ==========================================
    
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 20px rgba(10, 14, 39, 0.1)';
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ==========================================
    // Counter Animation for Stats
    // ==========================================
    
    function animateCounter(element, target, suffix = '', duration = 2000) {
        const startTime = performance.now();
        const isNumber = !isNaN(parseInt(target));
        const targetValue = isNumber ? parseInt(target) : 0;
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            if (isNumber) {
                const current = Math.floor(targetValue * easeOutQuart);
                element.textContent = current + suffix;
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    // Observe validation stats for counter animation
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                
                const text = entry.target.textContent.trim();
                
                // Animate different stat types
                if (text.includes('50+')) {
                    entry.target.textContent = '0';
                    setTimeout(() => animateCounter(entry.target, '50+'), 200);
                } else if (text.includes('100%')) {
                    entry.target.textContent = '0%';
                    setTimeout(() => animateCounter(entry.target, '100%'), 300);
                } else if (text.includes('$30B')) {
                    entry.target.textContent = '$0B';
                    setTimeout(() => animateCounter(entry.target, '$30B'), 400);
                } else if (text.includes('$1.9T')) {
                    entry.target.textContent = '$0T';
                    setTimeout(() => animateCounter(entry.target, '$1.9T'), 500);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.validation-stat, .market-number').forEach(stat => {
        statObserver.observe(stat);
    });
    
    // ==========================================
    // Parallax Effect for Hero Grid Pattern
    // ==========================================
    
    const heroSection = document.querySelector('.hero');
    const gridPattern = document.querySelector('.grid-pattern');
    
    if (heroSection && gridPattern) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;
            
            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.3;
                gridPattern.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    // ==========================================
    // Video Wrapper Interaction
    // ==========================================
    
    const videoWrapper = document.querySelector('.video-wrapper iframe');
    
    if (videoWrapper) {
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Demo video visible to user');
                }
            });
        }, { threshold: 0.5 });
        
        videoObserver.observe(videoWrapper);
    }
    
    // ==========================================
    // Smooth Card Hover Effects
    // ==========================================
    
    const cards = document.querySelectorAll('.solution-card, .validation-card, .team-card, .market-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
    
    // ==========================================
    // Active Section Highlighting in Nav
    // ==========================================
    
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // ==========================================
    // Handle External Links
    // ==========================================
    
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a');
        
        if (target && target.hostname !== window.location.hostname && target.getAttribute('target') === '_blank') {
            console.log('External link clicked:', target.href);
        }
    });
    
    // ==========================================
    // Accessibility: Keyboard Navigation
    // ==========================================
    
    const focusableElements = document.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // ==========================================
    // Performance: Reduce Motion for Accessibility
    // ==========================================
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable complex animations for users who prefer reduced motion
        document.querySelectorAll('*').forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            if (computedStyle.animationDuration !== '0s') {
                element.style.animationDuration = '0.01s';
            }
            if (computedStyle.transitionDuration !== '0s') {
                element.style.transitionDuration = '0.01s';
            }
        });
    }
    
    // ==========================================
    // Easter Egg: Konami Code
    // ==========================================
    
    let konamiCode = [];
    const konamiPattern = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
        'b', 'a'
    ];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === konamiPattern.join(',')) {
            document.body.style.animation = 'rainbow 2s linear infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
        }
    });
    
    // ==========================================
    // Page Load Analytics
    // ==========================================
    
    console.log('%c🏗️ BLEprint - Computer Vision for Construction Safety', 
        'font-size: 20px; font-weight: bold; color: #00D9FF;');
    console.log('%cBuilt for Y Combinator Application', 
        'font-size: 14px; color: #64748B;');
    console.log('%cWebsite loaded successfully', 
        'font-size: 12px; color: #10B981;');
    
    // Track page visibility
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            console.log('Page hidden - user switched tabs');
        } else {
            console.log('Page visible - user returned');
        }
    });
    
});

// ==========================================
// Rainbow animation for easter egg
// ==========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
