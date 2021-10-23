/* eslint-disable import/prefer-default-export */
const ccBaseUrl = 'https://api.creativecommons.engineering/v1/images';
const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });

export const categories = {
  options: ['photograph', 'illustration', 'digitized_artwork'],
  active: 'illustration',
};

const fetchPage = async (pageNum, itemsPerPage) => {
  if (pageNum === null) { pageNum = 1; }
  const result = await fetch(`${ccBaseUrl}?categories=${categories.active}&page_size=${itemsPerPage}&page=${pageNum}`, {
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

const getPageData = async (pageNum, itemsPerPage) => {
  const dataFromApi = await fetchPage(pageNum, itemsPerPage);
  return dataFromApi.results;
};

export const processPageResult = async (pageNum, itemsPerPage) => {
  const returnedDataForPage = await getPageData(pageNum, itemsPerPage);
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
