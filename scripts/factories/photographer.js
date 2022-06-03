class Photographer {
    constructor(photographer) {
        this.name = photographer.name;
        this.picture = `assets/photographers/${photographer.portrait}`;
        this.id = photographer.id;
        this.city = photographer.city;
        this.country = photographer.country;
        this.price = photographer.price;
        this.tagline = photographer.tagline;
    }