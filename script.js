/**
 * YUVA FRONTEND INTERNSHIP - WEEK 1 TASK
 * Interactive JavaScript Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. MOBILE MENU TOGGLE
    // ----------------------------------------------------------------------
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ----------------------------------------------------------------------
    // 2. LIGHT / DARK THEME TOGGLE
    // ----------------------------------------------------------------------
    const themeToggle = document.getElementById('themeToggle');
    const storedTheme = localStorage.getItem('yuva-theme');

    if (storedTheme) {
        document.documentElement.setAttribute('data-theme', storedTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('yuva-theme', newTheme);
        });
    }

    // ----------------------------------------------------------------------
    // 3. ACTIVE NAV LINK ON SCROLL
    // ----------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (targetLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    targetLink.classList.add('active');
                } else {
                    targetLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // ----------------------------------------------------------------------
    // 4. PORTFOLIO FILTER TABS
    // ----------------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active tab button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                // Filter cards
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filterValue === 'all' || filterValue === cardCategory) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ----------------------------------------------------------------------
    // 5. PRICING BILLING TOGGLE
    // ----------------------------------------------------------------------
    const billingToggle = document.getElementById('billingToggle');
    const priceAmounts = document.querySelectorAll('.amount');
    const monthlyLabel = document.getElementById('monthlyLabel');
    const annualLabel = document.getElementById('annualLabel');

    if (billingToggle) {
        billingToggle.addEventListener('change', () => {
            const isAnnual = billingToggle.checked;

            if (monthlyLabel && annualLabel) {
                monthlyLabel.classList.toggle('active', !isAnnual);
                annualLabel.classList.toggle('active', isAnnual);
            }

            priceAmounts.forEach(amountEl => {
                const monthlyPrice = amountEl.getAttribute('data-monthly');
                const annualPrice = amountEl.getAttribute('data-annual');
                amountEl.textContent = isAnnual ? annualPrice : monthlyPrice;
            });
        });
    }

    // ----------------------------------------------------------------------
    // 6. CONTACT FORM VALIDATION & SUBMISSION SIMULATION
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const nameInput = document.getElementById('fullName');
            const emailInput = document.getElementById('emailAddress');
            const messageInput = document.getElementById('message');

            // Reset errors
            [nameInput, emailInput, messageInput].forEach(input => {
                if (input && input.parentElement) {
                    input.parentElement.classList.remove('error');
                }
            });

            // Validate Name
            if (!nameInput.value.trim()) {
                nameInput.parentElement.classList.add('error');
                isValid = false;
            }

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
                emailInput.parentElement.classList.add('error');
                isValid = false;
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                messageInput.parentElement.classList.add('error');
                isValid = false;
            }

            if (isValid) {
                if (formAlert) {
                    formAlert.className = 'form-alert success';
                    formAlert.innerHTML = '✨ Thank you! Your message has been sent successfully. We will get back to you shortly.';
                    formAlert.hidden = false;
                }
                contactForm.reset();

                setTimeout(() => {
                    if (formAlert) formAlert.hidden = true;
                }, 6000);
            }
        });
    }

    // ----------------------------------------------------------------------
    // 7. BACK TO TOP BUTTON
    // ----------------------------------------------------------------------
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
