const mediaContainer = document.querySelector('.portfolio');

// Prendre l'ID dans l'URL
async function getPhotographer(data) {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const id = urlParams.get('id');

    return new Photographer(data.find((p) => p.id == id));
}

// Affichage du profil
function displayProfileCard(photographer) {
    const container = document.querySelector('.profile');
    const userCard = photographer.createProfileCard();
    container.appendChild(userCard);
}

// Obtenir les media par photograph
async function getMedia(data, photographerId) {
    return data.filter((media) => media.photographerId == photographerId);
}

// Affichage des media
function displayMediaCard(media) {
    media.forEach((medium) => {
        const mediaData = new MediaFactory(medium, media);
        const mediaCard = mediaData.createMediaCard();
        mediaContainer.appendChild(mediaCard);
    });
}

function totalLikes(media) {
    let sum = 0;
    media.map(medium => {
        sum += medium.likes;
    });
    return(sum);
}

async function displayLikeCounter(media, price) {
    const likeCounterContainer = document.querySelector(".likeCounter");
    const likeCounter = createLikeCounter(totalLikes(media), price);
    likeCounterContainer.appendChild(likeCounter);
}

//On lance init
async function init() {
    const { photographers, media } = await getPhotographers();

    const photographer = await getPhotographer(photographers);
    displayProfileCard(photographer);
    document.title = `${photographer.name} - Fisheye`;

    const modalTitleName = document.getElementById('modal-titleName');
    modalTitleName.textContent = photographer.name;

    const photographerMedia = await getMedia(media, photographer.id);
    sort(photographerMedia, sortByPopularity);

    const optionLikes = document.getElementById('likes');
    optionLikes.addEventListener('click', function () {
        sort(photographerMedia, sortByPopularity);
    });
    optionLikes.addEventListener('keydown', function (event) {
        if (event.code == 'Enter' || event.code == 'Space') {
            sort(photographerMedia, sortByPopularity);
        }
    });

    const optionDate = document.getElementById('date');
    optionDate.addEventListener('click', function () {
        sort(photographerMedia, sortByDate);
    });
    optionDate.addEventListener('keydown', function (event) {
        if (event.code == 'Enter' || event.code == 'Space') {
            sort(photographerMedia, sortByDate);
        }
    });

    const optionTitle = document.getElementById('title');
    optionTitle.addEventListener('click', function () {
        sort(photographerMedia, sortByTitle);
    });
    optionTitle.addEventListener('keydown', function (event) {
        if (event.code == 'Enter' || event.code == 'Space') {
            sort(photographerMedia, sortByTitle);
        }
    });
}

init();
