class Image extends Media {
    constructor(image, mediaArray) {
        super(image, mediaArray);
        this.image = image.image;
    }

    createMediaCard() {
        const media = document.createElement("img");
        media.setAttribute("src", `assets/images/${this.photographerId}/${this.image}`);
        return this.createMediaCaption(media, this.mediaArray, this.data);
    }
}