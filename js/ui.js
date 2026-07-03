/**
 * UI Interactions - Navigation, Mobile Menu, Font Size
 */

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('open');
}

// Font size adjustment
let currentFontSize = 100;
function changeFontSize(delta) {
    currentFontSize += delta * 10;
    currentFontSize = Math.max(80, Math.min(130, currentFontSize));
    document.documentElement.style.fontSize = currentFontSize + '%';
}

// Scroll to top button visibility
window.addEventListener('scroll', function() {
    const btn = document.getElementById('scrollTop');
    if (window.scrollY > 400) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Active nav highlighting on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Scroll animations using Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .gov-card, .news-card, .quick-action-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Dynamic footer copyright year
document.addEventListener('DOMContentLoaded', function() {
    const footerYear = document.getElementById('footerYear');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});
