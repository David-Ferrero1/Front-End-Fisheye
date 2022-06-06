class Media {
    constructor(media, mediaArray) {
        this.data = media;
        this.likes = media.likes;
        this.photographerId = media.photographerId;
        this.title = media.title;
        this.mediaArray = mediaArray;
    }

    createMediaCaption(media, mediaArray, data) {
        const article = document.createElement("article");

        media.setAttribute("alt", `${this.title}, close-up view`);
        media.setAttribute("lang", "fr");
        media.setAttribute("class", "mediaCard");
        media.setAttribute("role", "link");
        media.setAttribute("tabindex", 0);
        media.addEventListener("click", function () {
            openLightbox(mediaArray, mediaArray.indexOf(data));
        });       

        const caption = document.createElement("div");
        caption.setAttribute("class", "mediaCard_caption");

        const pTitle = document.createElement("p");
        pTitle.setAttribute("class", "mediaCard_title");
        pTitle.setAttribute("lang", "fr");
        pTitle.textContent = this.title;

        caption.append(pTitle);

        article.appendChild(media);
        article.appendChild(caption);

        return (article);
    }
}