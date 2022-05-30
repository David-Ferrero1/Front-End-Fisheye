import { MediaFactory } from '../factories/factoryMedia.js';

const mediaGallery = document.querySelector('.portfolio');

//tableau vide des medias
var PhotographerMedias = [];

const Gallery = async () => {
    const fetchMedias = await fetch('./data/photographers.json'); // anciennement requete ajax
    const mediasd = await fetchMedias.json();
    const medias = mediasd.media;
    //recherche de l'id du photographe dans l'url
    //const idPhotographer = `photographer.html?id=${data.id}`;

    //recherche des medias par photographe avec id
    PhotographerMedias = medias.filter(
        (media) => media.photographerId === parseInt(idPhotographer),
    );
    displayGallery();
};
Gallery();

function displayGallery() {
    mediaGallery.innerHTML = '';

    PhotographerMedias.forEach((media) => {
        //création pour chaque médias de l'élément Html "article"
        let card = document.createElement('section');
        mediaGallery.appendChild(card);

        //recupération de la mediaFactory sans le mot cle new (fonction static)  TEST
        let Template = MediaFactory.createMediaCard(media);
        card.innerHTML = Template.createMediaCard();
    });
}
