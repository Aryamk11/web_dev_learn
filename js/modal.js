export function initializeModal() {
    const openModalBtn = document.querySelector('.secondary-btn');
    const closeModalBtn = document.querySelector('#modal-close-btn');
    const modal = document.querySelector('#modal');
    const overlay = document.querySelector('#modal-overlay');

    function openModal() {
        modal.classList.add('open');
        overlay.classList.add('open');
    }

    function closeModal() {
        modal.classList.remove('open');
        overlay.classList.remove('open');
    }

    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
}