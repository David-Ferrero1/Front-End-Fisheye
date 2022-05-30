function galleryFactory(data) {
    const portfolio = document.querySelector('.portfolio');
    const galleryDisplay = document.createElement('ul');
    galleryDisplay.classList.add('galeries');
    portfolio.appendChild(galleryDisplay);
    function setPictures() {
        data.forEach((element) => {
            const linked = element.image;
            const linkedVideo = element.video;
            const { title } = element;
            const { photographerId } = element;
            const { likes } = element;

            if (element.hasOwnProperty('video')) {
                galleryDisplay.innerHTML += `
                  <li class="gallery-item">
                      <a href="assets/photographers/images/${photographerId}/${linkedVideo}" class="gallery-img-link">
                      <img src="assets/photographers/images/${photographerId}/thumb/${linked}" alt="Photograph ${title}"  title="${title}" aria-label="${title}" role="video">
                      </a>
                     <div class="gal-info">
                      <h3>${title}</h3>
                      <button class="likes" data-likes="${likes}" aria-label="likes">${likes}</button>
                      </div>
                  </li>
              `;
            } else {
                galleryDisplay.innerHTML += `
                  <li class="gallery-item">
                      <a href="assets/photographers/images/${photographerId}/${linked}" class="gallery-img-link">
                      <img src="assets/photographers/images/${photographerId}/thumb/${linked}" alt="Photograph ${title}"  title="${title}" aria-label="${title}" role="img">
                      </a>
                      <div class="gal-info">
                      <h3>${title}</h3>
                      <button class="likes" data-likes="${likes}" aria-label="likes">${likes}</button>
                      </div>
                  </li>
              `;
            }
        });

        return galleryDisplay;
    }
    return { setPictures };
}
