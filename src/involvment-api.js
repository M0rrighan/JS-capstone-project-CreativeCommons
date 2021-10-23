/* eslint-disable import/prefer-default-export */
const involvmentBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appKey = 'A15Lv9pSHXff9hlMtBe4';
const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });

export const getLikes = async () => {
  const likesResult = await fetch(`${involvmentBaseUrl}apps/${appKey}/likes/`, { method: 'GET' });
  const likes = await likesResult.text();
  return likes;
};

export const postLike = async (itemId) => {
  await fetch(`${involvmentBaseUrl}apps/${appKey}/likes/`, {
    method: 'POST',
    headers: header,
    body: JSON.stringify({
      item_id: `${itemId}`,
    }),
  });
};

export const getComments = async (itemID) => {
  const res = await fetch(
    `${involvmentBaseUrl}apps/${appKey}/comments?item_id=${itemID}`,
    { method: 'GET' },
  );
  if (!res.ok) {
    return 'No comments available for this item';
  }
  const data = await res.json();
  console.log('involvment.getComments returned data', data);
  return data;
};

export const postComment = async (itemId, username, comment) => {
  const res = await fetch(
    `${involvmentBaseUrl}apps/${appKey}/comments/`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: header,
    },
  );
  if (!res.ok) {
    throw new Error(`API error! status: ${res.status}`);
  } else {
    const data = await res.text();
    return data;
  }
};
