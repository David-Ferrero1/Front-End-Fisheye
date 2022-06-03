async function getPhotographers() {
    return await (await fetch("./data/photographers.json")).json();
  }
  async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
    const { media } = await getPhotographers();
    displayData(media);
  }
  
  init();