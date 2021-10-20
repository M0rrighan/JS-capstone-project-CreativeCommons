/* eslint-disable import/prefer-default-export */
const involvmentBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appKey = 'A15Lv9pSHXff9hlMtBe4';

export const getLikes = async () => {
  const likesResult = await fetch(`${involvmentBaseUrl}apps/${appKey}/likes/`, { method: 'GET' });
  const likes = await likesResult.text();
  return likes;
};

export const postLike = async (itemId) => {
  await fetch(`${involvmentBaseUrl}apps/${appKey}/likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${itemId}`,
    }),
  });
};
