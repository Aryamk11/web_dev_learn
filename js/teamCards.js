// In js/teamCards.js

export async function initializeTeamCards() {
    // FIX: The path must go up one directory to find the JSON file
    const response = await fetch('../instructors.json');
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

            // (The rest of the styling logic remains the same)
            card.style.backgroundColor = '#333';
            card.style.border = '1px solid #8a4baf';
            setTimeout(() => {
                card.style.border = '';
            }, 1000);
        });
    });
}