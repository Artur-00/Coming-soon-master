
const form = document.querySelector('form');
const emailInput = document.querySelector('[required]');
const errorWarning = document.querySelector('.error')


emailInput.addEventListener('invalid', event => {
    errorWarning.style.visibility = 'visible';
    emailInput.classList.add('error-icon');
})

function removeErrorWarning() {
    errorWarning.style.visibility = 'hidden';
    emailInput.classList.remove('error-icon');
}

emailInput.addEventListener('focusout', event => {
    removeErrorWarning();
})

form.addEventListener('submit', event => {
    removeErrorWarning();
})
