function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/images/Photographers ID Photos/${portrait}`;
    const link = `photographer.html?id=${data.id}`;

    // Création card sur index.html
    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        const h2 = document.createElement('h2');
        const spanImg = document.createElement('span');
        h2.textContent = name;

        // ajout data ville
        const ville = document.createElement('h3');
        ville.classList.add('ville');
        ville.textContent = `${city}, ${country}`;

        // ajout data TAG
        const tag = document.createElement('p');
        tag.classList.add('tag');
        tag.textContent = tagline;
        const href = document.createElement('a');
        href.setAttribute('href', link);

        // ajout data Price
        const prize = document.createElement('span');
        prize.classList.add('prize');
        prize.textContent = `${price} €/jour`;

        article.appendChild(href);
        article.appendChild(img);
        article.appendChild(spanImg);
        spanImg.appendChild(img);
        href.appendChild(spanImg);
        article.appendChild(h2);
        article.appendChild(ville);
        article.appendChild(tag);
        article.appendChild(prize);
        return article;
    }
    return { name, picture, id, country, tagline, price, city, getUserCardDOM };
}
