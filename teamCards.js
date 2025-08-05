export async function initializeTeamCards() {
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
}