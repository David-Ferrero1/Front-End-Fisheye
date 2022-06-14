// eslint-disable-next-line no-unused-vars
class MediaFactory {
    constructor(media, mediaArray) {
        if (media.video) {
            // eslint-disable-next-line no-undef
            return new Video(media, mediaArray);
        } else {
            return new Image(media, mediaArray);
        }
    }
}
