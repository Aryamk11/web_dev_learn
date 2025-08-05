export async function initializeFormHandler() {
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
}