// async function getPhotographers() {
//     let photographers = [];
//     const response = await fetch('./data/photographers.json');
//     const photographer = await response.json();
//     return photographer;
// }

async function displayData(photographers) {
    const photographersSection = document.querySelector(
        '.photographer-section',
    );

    photographers.forEach((photographer) => {
        const photographerModel = new Photographer(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();
