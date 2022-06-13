const modal = document.getElementById('modalContainer');
const modalId = document.getElementById('modal-id');
const body = document.querySelector('body');
const closeIcon = document.querySelector('.modal-close');
const formFirst = document.getElementById('firstName');
const formLast = document.getElementById('lastName');
const formEmail = document.getElementById('email');
const formMessage = document.getElementById('message');
const submitButton = document.querySelector('.modal-form-submit');

function displayModal() {
    modal.style.display = 'flex';
    main.setAttribute('aria-hidden', true);
    body.style.height = '100vh';
    body.style.width = '100vw';
    body.style.overflow = 'hidden';
    formFirst.focus();
}

function closeModal() {
    modal.style.display = 'none';
    main.setAttribute('aria-hidden', false);
    body.style.height = '100%';
    body.style.width = '100%';
    body.style.overflow = 'visible';
}

closeIcon.addEventListener('click', closeModal);
closeIcon.addEventListener('keydown', function (event) {
    if (event.code == 'Enter' || event.code == 'Space') {
        closeModal();
    }
});

// console.log(modalId.firstName);
// modalId.firstName.addEventListener('change', function() {
//     formIsValidFirstName(this)
// })


modalId.addEventListener("submit", function() {
    alert('Formulaire envoyé!');
})

function validate() {
    console.log(`Prénom : ${formFirst.value}`);
    console.log(`Nom : ${formLast.value}`);
    console.log(`Email : ${formEmail.value}`);
    console.log(`Message : ${formMessage.value}`);
}
