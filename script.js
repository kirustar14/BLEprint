// BLEprint Website - Interactive Features
// Smooth scrolling, animations, and enhanced UX

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // Smooth Scroll for Navigation Links
    // ==========================================
    
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .hero-cta[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ==========================================
    // Scroll Animation Observer
    // ==========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
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
        '.problem-item, .solution-card, .traction-card, .team-card, .market-item'
    );
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(element);
    });
    
    // ==========================================
    // Add stagger effect to grid items
    // ==========================================
    
    const staggerGroups = [
        document.querySelectorAll('.solution-card'),
        document.querySelectorAll('.traction-card')
    ];
    
    staggerGroups.forEach(group => {
        group.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
    
    // ==========================================
    // Parallax Effect for Hero Background
    // ==========================================
    
    const heroSection = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroSection && heroBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;
            
            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.5;
                heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    // ==========================================
    // Nav Background on Scroll
    // ==========================================
    
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
    
    // ==========================================
    // Counter Animation for Stats
    // ==========================================
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (target - start) * easeOutQuart);
            
            // Format number with commas if it's large
            if (typeof target === 'number') {
                element.textContent = current.toLocaleString();
            } else {
                element.textContent = target;
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    // Observe stats for counter animation
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                
                const text = entry.target.textContent.trim();
                
                // Check if it's a number that should be animated
                if (text === '100+') {
                    entry.target.textContent = '0';
                    setTimeout(() => {
                        animateCounter(entry.target, '100+');
                    }, 200);
                } else if (text === '$100K+') {
                    entry.target.textContent = '$0';
                    setTimeout(() => {
                        animateCounter(entry.target, '$100K+');
                    }, 400);
                } else if (text === '1') {
                    entry.target.textContent = '0';
                    setTimeout(() => {
                        animateCounter(entry.target, '1');
                    }, 600);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-number').forEach(stat => {
        statObserver.observe(stat);
    });
    
    // ==========================================
    // Mobile Menu Toggle (if needed in future)
    // ==========================================
    
    // Placeholder for mobile menu functionality
    // Can be expanded if hamburger menu is added
    
    // ==========================================
    // Video Lazy Loading Optimization
    // ==========================================
    
    const videoWrapper = document.querySelector('.video-wrapper iframe');
    
    if (videoWrapper) {
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Video is already embedded, but we can add analytics or other tracking
                    console.log('Demo video is visible');
                }
            });
        }, { threshold: 0.5 });
        
        videoObserver.observe(videoWrapper);
    }
    
    // ==========================================
    // Performance: Reduce animations on low-power mode
    // ==========================================
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable complex animations for users who prefer reduced motion
        document.querySelectorAll('*').forEach(element => {
            element.style.animation = 'none';
            element.style.transition = 'none';
        });
    }
    
    // ==========================================
    // Log page view (can be replaced with analytics)
    // ==========================================
    
    console.log('BLEprint - Y Combinator Application Site Loaded');
    console.log('Applying to: AI Guidance for Physical Work Track');
    
});

// ==========================================
// Handle external links
// ==========================================

document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    
    if (target && target.hostname !== window.location.hostname) {
        // External link - can add analytics tracking here
        console.log('External link clicked:', target.href);
    }
});

// ==========================================
// Page visibility for pause/resume animations
// ==========================================

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is not visible
        console.log('Page hidden - pausing animations');
    } else {
        // Resume animations when page is visible
        console.log('Page visible - resuming animations');
    }
});
