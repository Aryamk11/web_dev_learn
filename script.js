import { initializeClock } from './clock.js';
import { initializeModal } from './modal.js';
import { initializeBackToTopButton } from './backToTop.js';
import { initializeScrollAnimations } from './animations.js';
async function initializeApp() {
    try {
        initializeClock();
        initializeBackToTopButton();
        initializeModal();

        // --- Main Heading Change Start ---
        const mainHeading = document.querySelector('.primary-text');
        mainHeading.textContent = 'Welcome! This page is now interactive.';
        // --- Main Heading Change End ---

        // --- "Learn More" Button Toggle Start ---
        const learnMoreBtn = document.querySelector('.primary-btn');
        const cardText = document.querySelector('.card-text');
        const originalText = cardText.textContent;
        let isTextModified = false;

        learnMoreBtn.addEventListener('click', function () {
            if (isTextModified === false) {
                cardText.textContent = 'Really? Wanna learn more?';
                cardText.style.color = '#8a4baf';
                isTextModified = true;
            } else {
                cardText.textContent = originalText;
                cardText.style.color = '';
                isTextModified = false;
            }
        });
        // --- "Learn More" Button Toggle End ---

        
        // --- Scroll-Triggered Fade-In Animations Start ---
        const elementsToFadeIn = document.querySelectorAll('.fade-in-element');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elementsToFadeIn.forEach(element => {
            observer.observe(element);
        });
        // --- Scroll-Triggered Fade-In Animations End ---

        // --- Team Cards Interaction Start ---
        const response = await fetch('instructors.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const instructors = await response.json();

        const teamCards = document.querySelectorAll('.team-member-card');
        teamCards.forEach(card => {
            card.addEventListener('click', () => {
                const instructorKey = card.dataset.instructor;
                const instructorInfo = instructors[instructorKey];

                const memberBio = card.querySelector('.member-bio');
                memberBio.textContent = `Fact: ${instructorInfo.fact}`;

                card.style.backgroundColor = '#333';
                card.style.border = '1px solid #8a4baf';
                setTimeout(() => {
                    card.style.border = '';
                }, 1000);
            });
        });
        // --- Team Cards Interaction End ---

        // --- Form Submission Start ---
        const signupForm = document.querySelector('.signup-form');
        signupForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = {
                name: document.querySelector('#name').value,
                email: document.querySelector('#email').value,
                reason: document.querySelector('#reason').value,
                agreedToTerms: document.querySelector('#terms').checked
            };

            try {
                const response = await fetch('http://localhost:3000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                console.log('Server response:', result);

                alert(result.message);

                signupForm.reset();

            } catch (error) {
                console.error('Failed to send form data:', error);
                alert('There was an error submitting the form.');
            }
        });
        // --- Form Submission End ---

    } catch (error) {
        console.error('Failed to initialize the application:', error);
    }
}

initializeApp();