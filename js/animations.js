export function initializeScrollAnimations() {
    // Select all elements you want to animate
    const elementsToFadeIn = document.querySelectorAll('.fade-in-element');

    // Set up the observer options
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (i.e., on screen)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing the element so the animation doesn't repeat
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach the observer to each of the elements
    elementsToFadeIn.forEach(element => {
        observer.observe(element);
    });
}