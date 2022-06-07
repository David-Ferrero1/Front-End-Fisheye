class Media {
    constructor(media, mediaArray) {
        this.data = media;
        this.likes = media.likes;
        this.photographerId = media.photographerId;
        this.title = media.title;
        this.mediaArray = mediaArray;
    }

    createMediaCaption(media, mediaArray, data) {
        const article = document.createElement('article');

        media.setAttribute('alt', `${this.title}, close-up view`);
        media.setAttribute('lang', 'fr');
        media.setAttribute('class', 'mediaCard');
        media.setAttribute('role', 'link');
        media.setAttribute('tabindex', 0);

        const caption = document.createElement('div');
        caption.setAttribute('class', 'mediaCard_caption');

        const pTitle = document.createElement('p');
        pTitle.setAttribute('class', 'mediaCard_title');
        pTitle.setAttribute('lang', 'fr');
        pTitle.textContent = this.title;

        const likeContainer = document.createElement('div');
        likeContainer.setAttribute('class', 'mediaCard_likes');

        const likeAmount = document.createElement('p');
        likeAmount.textContent = this.likes;

        const likeButton = document.createElement('button');
        likeButton.setAttribute(
            'class',
            'mediaCard_likeButton mediaCard_likeButton--notLiked',
        );
        const likeIcon = document.createElement('div');
        likeIcon.setAttribute('class', 'fas fa-heart');
        likeButton.setAttribute('aria-label', 'likes');
        likeButton.setAttribute('lang', 'fr');

        likeButton.append(likeIcon);
        likeContainer.append(likeAmount);
        likeContainer.append(likeButton);

        caption.append(pTitle);
        caption.append(likeContainer);

        article.appendChild(media);
        article.appendChild(caption);

        return article;
    }
}
