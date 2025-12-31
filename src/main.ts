// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initMobileMenu();
    initScrollEffects();
    initContactForm();
});

// Smooth scrolling functionality
function initSmoothScroll(): void {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e: Event) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId) {
                const targetSection = document.querySelector<HTMLElement>(targetId);
                if (targetSection) {
                    const navHeight = document.querySelector<HTMLElement>('.navbar')?.offsetHeight || 0;
                    const targetPosition = targetSection.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const navMenu = document.querySelector<HTMLElement>('.nav-menu');
                    if (navMenu?.classList.contains('active')) {
                        navMenu.classList.remove('active');
                    }
                }
            }
        });
    });

    // Smooth scroll for CTA buttons
    const ctaButtons = document.querySelectorAll<HTMLAnchorElement>('.btn[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e: Event) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            if (targetId) {
                const targetSection = document.querySelector<HTMLElement>(targetId);
                if (targetSection) {
                    const navHeight = document.querySelector<HTMLElement>('.navbar')?.offsetHeight || 0;
                    const targetPosition = targetSection.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Mobile menu toggle
function initMobileMenu(): void {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector<HTMLElement>('.nav-menu');

    mobileMenuToggle?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.navbar')) {
            navMenu?.classList.remove('active');
            mobileMenuToggle?.classList.remove('active');
        }
    });
}

// Scroll effects - navbar background and fade-in animations
function initScrollEffects(): void {
    const navbar = document.querySelector<HTMLElement>('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add background to navbar on scroll
        if (scrollTop > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        // Fade in elements on scroll
        const fadeElements = document.querySelectorAll<HTMLElement>('.product-card, .benefit-item, .contact-card');
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                element.classList.add('visible');
            }
        });

        lastScrollTop = scrollTop;
    });
}

// Contact form handling
function initContactForm(): void {
    const contactForm = document.getElementById('contactForm') as HTMLFormElement;
    const formMessage = document.getElementById('formMessage') as HTMLElement;

    contactForm?.addEventListener('submit', async (e: Event) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string
        };

        // Validate form
        if (!data.name || !data.email || !data.phone || !data.message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // In a real application, you would send this to a backend API
        // For now, we'll just show a success message
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        } catch (error) {
            showFormMessage('Something went wrong. Please try again later.', 'error');
        }
    });
}

function showFormMessage(message: string, type: 'success' | 'error'): void {
    const formMessage = document.getElementById('formMessage') as HTMLElement;
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector<HTMLElement>('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
