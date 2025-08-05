export function initializeLearnMoreButton() {
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
}