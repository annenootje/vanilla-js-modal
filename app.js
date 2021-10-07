
// Modal
const modelOpeners = document.querySelectorAll('.-open-model');
const models = document.querySelectorAll('.model');

if (modelOpeners.length) {
    modelOpeners.forEach(opener => {
        opener.addEventListener("click", () => {
            
            models.forEach(model => {
                model.classList.remove('-active');

                if (opener.dataset.model === model.dataset.model) {
                    model.classList.add('-active');
                }
            })
        });
    });
}

if (models.length) {
    models.forEach(model => {
        const cross = model.querySelector('.model__cross');

        cross.addEventListener('click', () => {
            model.classList.remove('-active');
        });
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === "Escape") {
            models.forEach(model => {
                model.classList.remove('-active');
            });
       }
   });
}