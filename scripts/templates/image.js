/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
class Image extends Media {
    constructor(image, mediaArray) {
        super(image, mediaArray);
        this.image = image.image;
    }

    createMediaCard() {
        const media = document.createElement('img');
        media.setAttribute(
            'src',
            `assets/photographers/${this.photographerId}/thumbnails/${this.image}`,
        );
        return this.createMediaCaption(media, this.mediaArray, this.data);
    }
}
