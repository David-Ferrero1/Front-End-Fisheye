function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/images/Photographers ID Photos/${portrait}`;

    // Création card sur index.html
    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        const h2 = document.createElement('h2');
        h2.textContent = name;

        // ajout data ville
        const ville = document.createElement('h3');
        ville.classList.add('ville');
        ville.textContent = `${city}, ${country}`;

        // ajout data TAG
        const tag = document.createElement('p');
        tag.classList.add('tag');
        tag.textContent = tagline;

        // ajout data Price
        const prize = document.createElement('span');
        prize.classList.add('prize');
        prize.textContent = `${price} €/jour`;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(ville);
        article.appendChild(tag);
        article.appendChild(prize);
        return article;
    }
    return { name, picture, country, tagline, price, city, getUserCardDOM };
}
