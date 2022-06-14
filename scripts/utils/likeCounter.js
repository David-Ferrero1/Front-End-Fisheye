/* eslint-disable no-unused-vars */
function createLikeCounter(likes, price) {
    const likeCounterContent = document.createElement('div');
    likeCounterContent.setAttribute('class', 'likeCounter-content');

    const divLikes = document.createElement('div');
    divLikes.setAttribute('class', 'likeCounter-likes');

    const likeAmount = document.createElement('p');
    likeAmount.setAttribute('class', 'likeCounter-amount');
    likeAmount.textContent = likes;

    const likeIcon = document.createElement('div');
    likeIcon.setAttribute('class', 'fas fa-heart likeCounter-icon');

    divLikes.appendChild(likeAmount);
    divLikes.appendChild(likeIcon);

    const pPrice = document.createElement('p');
    pPrice.setAttribute('class', 'likeCounter-price');
    pPrice.textContent = `${price}€/jour`;

    likeCounterContent.appendChild(divLikes);
    likeCounterContent.appendChild(pPrice);

    return likeCounterContent;
}
