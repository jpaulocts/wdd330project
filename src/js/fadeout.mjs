
export function fadeOutHeroOnScroll() {
    // Select the main image
    const heroImage = document.getElementById('hero-main');

    // Check if the element exist
    if (!heroImage) return;

    // Add a listener to detect page scroll
    window.addEventListener('scroll', function() {
        // calculate the opacity based on scroll
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const heroImageHeight = heroImage.offsetHeight;
        const distanceFromTop = heroImage.offsetTop;
        let opacity = 1 - (scrollPosition - distanceFromTop + windowHeight) / (heroImageHeight + windowHeight);

        // assure that opacity is in the range [0,1]
        opacity = Math.min(Math.max(opacity, 0), 1);

        // Define the opacity of hero image
        heroImage.style.opacity = opacity.toFixed(2); // Fix to 2 decimal places
    });
}
