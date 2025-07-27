async function initializeApp() {
    try {
        const mainHeading = document.querySelector('.primary-text');
        mainHeading.textContent = 'Welcome! This page is now interactive.';

        const learnMoreBtn = document.querySelector('.primary-btn');
        const cardText = document.querySelector('.card-text');
        const originalText = cardText.textContent;
        let isTextModified = false;

        learnMoreBtn.addEventListener('click', function() {
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
        const signupForm = document.querySelector('.signup-form');

        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const nameInput = document.querySelector('#name');
            const emailInput = document.querySelector('#email');
            const reasonSelect = document.querySelector('#reason');
            const termsCheckbox = document.querySelector('#terms');

            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                reason: reasonSelect.value,
                agreedToTerms: termsCheckbox.checked 
    
            };
            console.log('Form data captured:', formData);
            alert(`Thank you ${formData.name}! your journey begins now.`)
            
            signupForm.reset();
        });


    } catch (error) {
        console.error('Could not initialize the application:', error);
    }
}

initializeApp();