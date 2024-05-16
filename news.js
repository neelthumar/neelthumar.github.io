// JavaScript for the Movie Magic homepage

document.addEventListener('DOMContentLoaded', function () {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function () {
        alert('Welcome to Movie Magic! Enjoy personalized movie recommendations.');
    });

    // Background image rotation
    const heroBackground = document.querySelector('.hero-background');
    const images = [
        'url(genre-exploration.jpg)',
        'url(1.jpg)',
        'url(2.jpg)',
        'url(3.jpg)',
        'url(5.jpg)',
        'url(personalized-recommendations.jpg)',
        'url(magic-algorithms.jpg)',
        'url(search-filter.jpg)',
        'url(ratings-reviews.jpg)',
        'url(customized-profiles.jpg)'
    ];
    let currentImageIndex = 0;

    function changeBackground() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        heroBackground.style.backgroundImage = images[currentImageIndex];
    }

    setInterval(changeBackground, 5000);

    // Initial background setup
    heroBackground.style.backgroundImage = images[currentImageIndex];
});
