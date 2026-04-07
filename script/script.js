// Smooth scrolling and navigation
function scrollToExplore() {
    document.querySelector('.learning-paths').scrollIntoView({ behavior: 'smooth' });
}

function navigateTo(page) {
    window.location.href = page;
}

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth transitions on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});