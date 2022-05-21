function cardFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;
    const picture = `assets/images/Photographers ID Photos/${portrait}`;

    // Construction du bloc affichage fiche
    function getUserCard() {
        const photographHeader = document.querySelector('.photograph-header');
        const contact = document.createElement('article');
        contact.setAttribute('role', 'info du protrait');
        contact.classList.add('portrait-info');
        const button = document.createElement('button');
        const img = document.createElement('img');
        const spanImg = document.createElement('span');
        img.setAttribute('src', picture);
        img.setAttribute('alt', `Portrait de ${name}, ${city}-${country}`);
        img.setAttribute('aria-label', `Portrait de ${name}, ${city}`);
        img.setAttribute('role', 'img');
        const h2 = document.createElement('h2');
        const ville = document.createElement('h3');
        ville.classList.add('ville');

        const info = document.createElement('p');
        const sectionInfo = document.createElement('div');
        sectionInfo.classList.add('portrait-info');
        h2.textContent = name;
        ville.textContent = `${city} , ${country}`;
        info.textContent = tagline;
        button.classList.add('contact-button');
        button.textContent = 'Contactez-moi';
        button.setAttribute('onclick', 'displayModal()');
        spanImg.appendChild(img);
        photographHeader.appendChild(spanImg);
        photographHeader.appendChild(button);
        contact.appendChild(h2);
        contact.appendChild(ville);
        contact.appendChild(info);
        return contact;
    }
    return { name, portrait, id, city, country, tagline, price, getUserCard };
}
