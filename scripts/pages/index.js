/* eslint-disable no-undef */
async function displayData(photographers) {
    const photographersSection = document.querySelector('.userList');

    photographers.forEach((photographer) => {
        const photographerObject = new Photographer(photographer);
        const userCardDOM = photographerObject.createUserCard();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();
