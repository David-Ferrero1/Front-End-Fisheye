const urlParams = new URLSearchParams(window.location.search); // on recherche dans l'url de la page
const photographerLinkId = urlParams.get('id'); // on récupère l'Id du photographe dans l'url
let photographers = [];

// Récupération des données dans le fichier JSON
async function getPhotographers() {
    await fetch(`data/photographers.json`)
        .then((res) => res.json())
        .then((data) => (photographers = data.photographers));

    return photographers;
}

// Affichage de la card photographe
async function cardPhotographer() {
    const photographHeader = document.querySelector('.photograph-header');
    await getPhotographers();

    const cardP = photographers.find(
        (photographer) => photographer.id == photographerLinkId,
    );
    const photographerDetails = cardFactory(cardP);
    const getUserCard = photographerDetails.getUserCard();
    photographHeader.appendChild(getUserCard);
}
cardPhotographer();
