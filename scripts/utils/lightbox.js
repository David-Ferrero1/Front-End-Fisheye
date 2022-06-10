const lightbox = document.getElementById('lightbox');
const header = document.querySelector('header');
const main = document.getElementById('main');
const modalContainer = document.getElementById('modalContainer');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxPrevious = document.querySelector('.lightbox-previous');
const lightboxNext = document.querySelector('.lightbox-next');

function createImage(path) {
    const image = document.createElement('img');
    image.setAttribute('src', path);
    image.setAttribute('lang', 'fr');
    return image;
}

function createVideo(path) {
    const video = document.createElement('video');
    const source = document.createElement('source');
    source.setAttribute('src', path);
    source.setAttribute('type', 'video/mp4');
    video.setAttribute('controls', 'controls');
    video.setAttribute('lang', 'fr');
    video.appendChild(source);
    return video;
}

function openLightbox(mediaArray, id, effect) {
    lightbox.style.display = 'flex';
    header.style.display = 'none';
    main.style.display = 'none';
    modalContainer.style.display = 'none';

    let media = '';
    const { photographerId, video, image, title } = mediaArray[id];

    if (video) {
        media = createVideo(`assets/photographers/${photographerId}/${video}`);
    } else if (image) {
        media = createImage(`assets/photographers/${photographerId}/${image}`);
    } else {
        media = document.createElement('p');
        media.textContent = "Désolés, nous n'avons pas trouvé ce fichier.";
    }

    media.setAttribute('class', 'lightbox-media');
    media.setAttribute('tabindex', 0);

    const pTitle = document.createElement('h3');
    pTitle.setAttribute('class', 'lightbox-title');
    pTitle.textContent = title;

    if (effect == 'next') {
        lightboxContent.style.animation = 'slideOutNext 0.4s ease';
        setTimeout(function () {
            deleteCards(lightboxContent);
            lightboxContent.style.animation = 'slideInNext 0.4s ease';
            lightboxContent.appendChild(media);
            lightboxContent.appendChild(pTitle);
        }, 300);
    } else if (effect == 'previous') {
        lightboxContent.style.animation = 'slideOutPrevious 0.4s ease';
        setTimeout(function () {
            deleteCards(lightboxContent);
            lightboxContent.style.animation = 'slideInPrevious 0.4s ease';
            lightboxContent.appendChild(media);
            lightboxContent.appendChild(pTitle);
        }, 300);
    } else {
        deleteCards(lightboxContent);
        lightboxContent.appendChild(media);
        lightboxContent.appendChild(pTitle);
    }

    lightboxPrevious.onclick = function () {
        if (id == 0) {
            openLightbox(mediaArray, mediaArray.length - 1, 'previous');
        } else {
            openLightbox(mediaArray, id - 1, 'previous');
        }
    };
    lightboxPrevious.onkeydown = function (event) {
        if (event.code == 'Enter' || event.code == 'Space') {
            if (id == 0) {
                openLightbox(mediaArray, mediaArray.length - 1, 'previous');
            } else {
                openLightbox(mediaArray, id - 1, 'previous');
            }
        }
    };

    lightboxNext.onclick = function () {
        if (id + 1 == mediaArray.length) {
            openLightbox(mediaArray, 0, 'next');
        } else {
            openLightbox(mediaArray, id + 1, 'next');
        }
    };
    lightboxNext.onkeydown = function (event) {
        if (event.code == 'Enter' || event.code == 'Space') {
            if (id + 1 == mediaArray.length) {
                openLightbox(mediaArray, 0, 'previous');
            } else {
                openLightbox(mediaArray, id + 1, 'next');
            }
        }
    };

    document.onkeydown = function (event) {
        if (event.code == 'ArrowLeft') {
            if (id == 0) {
                openLightbox(mediaArray, mediaArray.length - 1, 'previous');
            } else {
                openLightbox(mediaArray, id - 1, 'previous');
            }
        } else if (event.code == 'ArrowRight') {
            if (id + 1 == mediaArray.length) {
                openLightbox(mediaArray, 0, 'previous');
            } else {
                openLightbox(mediaArray, id + 1, 'next');
            }
        }
    };
}

function closeLightbox() {
    lightbox.style.display = 'none';
    header.style.display = 'flex';
    main.style.display = 'block';
    modalContainer.style.display = 'none';
    deleteCards(lightboxContent);
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxClose.addEventListener('keydown', function (event) {
    if (event.code == 'Enter' || event.code == 'Space') {
        closeLightbox();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') {
        closeLightbox();
    }
});
