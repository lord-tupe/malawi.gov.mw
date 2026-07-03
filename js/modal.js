/**
 * Modal Management - Open, Close, and Form Handling
 */

function openServiceModal(key) {
    event.preventDefault();
    const content = serviceContent[key];
    if (content) {
        document.getElementById('overlayBody').innerHTML = `<h2>${content.title}</h2>${content.body}`;
        document.getElementById('serviceOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function openGovModal(key) {
    event.preventDefault();
    const content = govContent[key];
    if (content) {
        document.getElementById('overlayBody').innerHTML = `<h2>${content.title}</h2>${content.body}`;
        document.getElementById('serviceOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function openBizModal(key) {
    event.preventDefault();
    const content = bizContent[key];
    if (content) {
        document.getElementById('overlayBody').innerHTML = `<h2>${content.title}</h2>${content.body}`;
        document.getElementById('serviceOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeOverlay() {
    document.getElementById('serviceOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Close overlay on background click
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('serviceOverlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) closeOverlay();
        });
    }
});

// Close overlay on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeOverlay();
});

// Contact form handler
function handleContactForm(e) {
    e.preventDefault();
    alert('Thank you for your inquiry. We will respond within 3 business days.');
    e.target.reset();
}
