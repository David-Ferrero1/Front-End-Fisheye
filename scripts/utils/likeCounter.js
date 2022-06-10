function createLikeCounter(likes, price) {
    const likeCounterContent = document.createElement("div");
    likeCounterContent.setAttribute("class", "likeCounter-content");

    const divLikes = document.createElement("div");
    divLikes.setAttribute("class", "likeCounter_likes");

    const likeAmount = document.createElement("p");
    likeAmount.setAttribute("class", "likeCounter_amount");
    likeAmount.textContent = likes;

    



    return (likeCounterContent);
}