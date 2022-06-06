const modal = document.getElementById('modalContainer');
const body = document.querySelector('body');
const closeIcon = document.querySelector('.modal_close');
const firstNameForm = document.getElementById('firstName');
const lastNameForm = document.getElementById('lastName');
const emailForm = document.getElementById('email');
const messageForm = document.getElementById('message');
const submitButton = document.querySelector('.modal-form-submit');

function displayModal() {
    modal.style.display = 'flex';
    // header.setAttribute('aria-hidden', true);
    main.setAttribute('aria-hidden', true);
    body.style.height = '100vh';
    body.style.width = '100vw';
    body.style.overflow = 'hidden';
    firstNameForm.focus();
}

function closeModal() {
    modal.style.display = 'none';
    // header.setAttribute('aria-hidden', false);
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

function logFormResults() {
    console.log(`Prénom : ${firstNameForm.value}`);
    console.log(`Nom : ${lastNameForm.value}`);
    console.log(`Email : ${emailForm.value}`);
    console.log(`Message : ${messageForm.value}`);
}
