// Smooth scrolling function
function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #38bdf8;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // You can integrate with email service here (e.g., EmailJS, Formspree)
        console.log('Form submitted with data:', {
            name: contactForm.children[0].children[0].value,
            email: contactForm.children[1].children[0].value,
            message: contactForm.children[2].children[0].value
        });

        // Show success message
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Message Sent! ✓';
        submitBtn.style.background = 'linear-gradient(135deg, #34d399, #10b981)';

        // Reset form
        contactForm.reset();

        // Restore button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Add animation to elements on scroll
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

// Observe all cards and glass panels
document.querySelectorAll('.glass-panel-interactive').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.7)';
        navbar.style.backdropFilter = 'blur(20px) saturate(130%)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = '';
        navbar.style.backdropFilter = '';
        navbar.style.boxShadow = '';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Add some interactive features to skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Parallax effect for hero section
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
}

// Typewriter effect for title
const titleElement = document.querySelector('.title');
if (titleElement) {
    const originalText = titleElement.textContent;
    titleElement.textContent = '';
    let index = 0;

    function typeWriter() {
        if (index < originalText.length) {
            titleElement.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typewriter when page loads
    setTimeout(typeWriter, 300);
}

// Initialize tooltips for social icons
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) translateY(-5px)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe statistics for animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const text = entry.target.textContent;
            const numberMatch = text.match(/\d+/);
            if (numberMatch) {
                animateCounter(entry.target, parseInt(numberMatch[0]));
                entry.target.classList.add('animated');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.achievement-stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Log initialization
console.log('✓ Portfolio initialized successfully');
console.log('✓ All interactive features loaded');
console.log('🎨 Glassmorphism UI is active');
