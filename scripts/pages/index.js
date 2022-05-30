async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    let photographers = [];
    // et bien retourner le tableau photographers seulement une fois
    const response = await fetch('./data/photographers.json'); // anciennement requete ajax
    const photographer = await response.json();
    return photographer;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(
        '.photographer-section',
    );

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        // const photographerLink = photographers.map(e=>e.id);
        photographersSection.appendChild(userCardDOM);
        // userCardDOM.addEventListener('click', event=>{
        // window.open(`photographer.html?${photographerLink}`, "_self")
        // })
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();
