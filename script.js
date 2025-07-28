async function initializeApp() {
    try {
        const clockElement = document.querySelector('#clock');
        function updateClock(){
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            clockElement.textContent = now.toLocaleString('en-GB', options);
        }

        setInterval(updateClock, 1000)
        updateClock();
        
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

        const backToTopBtn = document.querySelector('#back-to-top-btn');    

        window.addEventListener('scroll', () => {
            if(window.scrollY > 300){
                backToTopBtn.classList.add('show')
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', (event) => {
        event.preventDefault(); 
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            });
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

    } catch (error) { 
        console.error('Failed to initialize the application:', error);
    }
}

initializeApp();