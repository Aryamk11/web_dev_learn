// Import all modules
import { initializeClock } from './clock.js';
import { initializeModal } from './modal.js';
import { initializeBackToTopButton } from './backToTop.js';
import { initializeScrollAnimations } from './animations.js';
import { initializeTeamCards } from './teamCards.js';
import { initializeLearnMoreButton } from './learnMore.js';
import { initializeFormHandler } from './formHandler.js';

// Main application function
async function initializeApp() {
    try {
        // --- Initialize all features ---
        initializeClock();
        initializeLearnMoreButton();
        initializeBackToTopButton();
        initializeModal();
        initializeScrollAnimations();
        await initializeTeamCards();
        await initializeFormHandler();

        // Any code that doesn't fit in a module can stay here
        // For example, the main heading change is simple enough to live here.
        const mainHeading = document.querySelector('.primary-text');
        mainHeading.textContent = 'Welcome! This page is now interactive.';

    } catch (error) {
        console.error('Failed to initialize the application:', error);
    }
}

// Start the application
initializeApp();