function displayModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';
    main.style.display = 'none';
    headerbcg.style.display = 'none';
}

function closeModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'none';
    main.style.display = 'block';
    headerbcg.style.display = 'block';
}
