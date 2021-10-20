/* eslint-disable import/prefer-default-export */
const readLikesNum = (likesArray, id) => {
  const likedItem = likesArray.find((likeItem) => likeItem.item_id === id);
  if (!likedItem) {
    return 0;
  }
  return likedItem.likes;
};


export const generateListHtml = (list, ulContainer, likesArray) => {
  let ulInner = '';
  list.forEach((item) => {
    const { id, thumbnailUrl, title } = item;
    const likesNum = readLikesNum(likesArray, id);
    ulInner += `
    <li id="${id}" class="item-card">
      <div data-open-modal class="card-top">
        <div class="thumbnail-placeholder">
          <img src="${thumbnailUrl}" alt="thumbnail of ${title}">
        </div>
        <p>${title.substring(0, 20)}...</p>
      </div>
      <div class="likes">
        <p data-add-like='${id}' class="btn">Click to Like</p>
        <p>${likesNum} likes</p>
      </div>
      <p data-open-modal class="btn">Comments</p>
    </li>`;
  });
  ulContainer.innerHTML = ulInner;
};
