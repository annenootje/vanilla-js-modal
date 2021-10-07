
// Modal
const modalOpeners = document.querySelectorAll('.-open-modal');
const modals = document.querySelectorAll('.modal');

if (modalOpeners.length) {
    modalOpeners.forEach(opener => {
        opener.addEventListener("click", () => {
            
            modals.forEach(modal => {
                modal.classList.remove('-active');

                if (opener.dataset.modal === modal.dataset.modal) {
                    modal.classList.add('-active');
                }
            })
        });
    });
}

if (modals.length) {
    modals.forEach(modal => {
        const cross = modal.querySelector('.modal__cross');

        cross.addEventListener('click', () => {
            modal.classList.remove('-active');
        });
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === "Escape") {
            modals.forEach(modal => {
                modal.classList.remove('-active');
            });
       }
   });
}