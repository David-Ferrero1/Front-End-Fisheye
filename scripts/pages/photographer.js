
let photographers = [];
let medias = [];

// Récupération des données dans le fichier JSON
async function getPhotographers(data) {
    const urlParams = new URLSearchParams(window.location.search); // on recherche dans l'url de la page
    const photographerLinkId = urlParams.get('id'); // on récupère l'Id du photographe dans l'url

    return new Photographer(data.find((p) => p.id == photographerLinkId));
}

function displayProfileCard(photographer) {
    const container = document.querySelector(".profile");
    const userCard = photographer.createProfileCard();
    container.appendChild(userCard);
}

/* Gets the media corresponding to the photographer id */
async function getMedia(data, photographerId) {
    return data.filter((media) => media.photographerId == photographerId);
}

/* Displays the media card components */
function displayMediaCard(media) {
    media.forEach((medium) => {
        const mediaData = new MediaFactory(medium, media);
        const mediaCard = mediaData.createMediaCard();
        mediaContainer.appendChild(mediaCard);
    });
}

async function init() {
    const { photographers, media } = await getPhotographers();
    
    const photographer = await getPhotographer(photographers);
    displayProfileCard(photographer);
    document.title = `${photographer.name} - Fisheye`;

    const modalTitleName = document.getElementById("modal_titleName");
    modalTitleName.textContent = photographer.name;

    const photographerMedia = await getMedia(media, photographer.id);
    sort(photographerMedia, sortByPopularity);
    displayLikeCounter(photographerMedia, photographer.price);
};

init();