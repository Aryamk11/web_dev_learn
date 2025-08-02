export function initializeBackToTopButton() {
    const backToTopBtn = document.querySelector('#back-to-top-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
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
}
