/* eslint-disable import/prefer-default-export */
const ccBaseUrl = 'https://api.creativecommons.engineering/v1/images';
const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });

const fetchPage = async (pageNum) => {
  const result = await fetch(`${ccBaseUrl}?categories=photograph&page=${pageNum}`, {
    method: 'GET',
    headers: header,
    mode: 'cors',
  });
  return result.json();
};

const fetchItemDetails = async (id) => {
  const result = await fetch(`${ccBaseUrl}/${id}`);
  return result.json();
};

const getPageData = async (pageNum) => {
  const dataFromApi = await fetchPage(pageNum);
  return dataFromApi.results;
};

export const processPageResult = async (pageNum) => {
  const returnedDataForPage = await getPageData(pageNum);
  return [...returnedDataForPage]
    .map((item) => ({ id: item.id, thumbnailUrl: item.thumbnail, title: item.title }));
};

export const getDetailsForItem = async (id) => {
  const itemDetails = await fetchItemDetails(id);
  return ({
    title: itemDetails.title,
    url: itemDetails.url,
    creator: itemDetails.creator,
    license: itemDetails.license,
    source: itemDetails.source,
    sourcePageUrl: itemDetails.foreign_landing_url,
  });
};
