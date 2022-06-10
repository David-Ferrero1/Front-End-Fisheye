const listbox = document.querySelector('.media-sorter-listbox');
const button = document.querySelector('.media-sorter-button');
const selectDefaultValue = document.querySelector('.media-sorter-button-text');

// Dropdown du tri
function toggleDropdown() {
    if (listbox.style.display == 'flex') {
        listbox.style.display = 'none';
    } else {
        listbox.style.display = 'flex';
    }
}

button.addEventListener('click', toggleDropdown);

// Closes dropdown
function closeDropdown() {
    listbox.style.display = 'none';
}

// fermer le dropdown au clic sur la page
document.addEventListener(
    'click',
    function (event) {
        if (
            !event.target.closest('.media-sorter-button') &&
            listbox.style.display == 'flex'
        ) {
            closeDropdown();
        }
    },
    false,
);

// Fermer le dropdown avec echap
document.addEventListener(
    'keydown',
    function (event) {
        if (event.code == 'Escape' && listbox.style.display == 'flex') {
            closeDropdown();
        }
    },
    false,
);

//  tri media par date
function sortByDate(a, b) {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate - aDate;
}

//  tri media par popularity
function sortByPopularity(a, b) {
    return b.likes - a.likes;
}

//  tri media par title
function sortByTitle(a, b) {
    return a.title.localeCompare(b.title);
}

//  tri media sur bouton
function sort(media, sortingFunc) {
    media.sort(sortingFunc);
    switch (sortingFunc) {
        case sortByPopularity:
            selectDefaultValue.textContent = 'Popularité';
            break;
        case sortByDate:
            selectDefaultValue.textContent = 'Date';
            break;
        case sortByTitle:
            selectDefaultValue.textContent = 'Titre';
            break;
    }
    closeDropdown();
    deleteCards(mediaContainer);
    displayMediaCard(media);
}
