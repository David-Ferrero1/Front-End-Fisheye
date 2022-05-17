async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    let photographers = [];
    // et bien retourner le tableau photographers seulement une fois
    const response = await fetch('./data/photographers.json'); // anciennement requete ajax
    const photographer = await response.json();
    //console.log(response);
    return photographer;
    // photographers = data.photographers;
    // console.log(data);
    // console.log(photographers);
    // return photographers
    // });
    // return {
    //     photographers: []
    // };
    return {
        photographers: [],
    };
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(
        '.photographer-section',
    );

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
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
