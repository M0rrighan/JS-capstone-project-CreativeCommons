/* eslint-disable no-use-before-define */
import './style.css';
import * as CCApi from './cc-api';
import { generateListHtml } from './utils';
import * as Involvment from './involvment-api';

const ulContainer = document.querySelector('[data-list-container]');
const overlay = document.getElementsByClassName('overlay')[0];

const listenAddLikeBtns = (pageNum, buttons) => {
  buttons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      await Involvment.postLike(btn.dataset.addLike);
      renderPage(pageNum);
    });
  });
};

const listenOpenModalBtns = (buttons) => {
  buttons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const { id } = e.target.parentElement;
      const itemDetails = await CCApi.getDetailsForItem(id);
      const {
        title, url, creator, license, source, sourcePageUrl,
      } = itemDetails;
      overlay.classList.add('active');
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.classList.add('active');
      modal.innerHTML = `
      <p data-close-modal class="btn close_modal"> Close </p>
      <a href="${url}" target="_blank" class="image-placeholder">
          <img src="${url}" alt="${title}">
      </a>
      <p>${title}</p>
      <div class="item-details">
        <p>Creator: ${(creator !== null) ? creator : 'Unknown'}</p>
        <p>License: ${license}</p>      
        <p>Source: ${source}</p>
        <p><a href="${sourcePageUrl}"> Visit Source</a></p>
      </div>
      <div class="popup-comments"> Comments Here
      <p>Comments: ${Involvment.getComments}</p>
      </div>     
      `;
      document.querySelector('body').appendChild(modal);
      listenCloseModalBtn(modal);
    });
  });
};

const listenCloseModalBtn = (childToBeRemoved) => {
  document.querySelector('[data-close-modal]').addEventListener('click', () => {
    document.querySelector('body').removeChild(childToBeRemoved);
    overlay.classList.remove('active');
  });
};

const renderPage = async (pageNum) => {
  const processedData = await CCApi.processPageResult(pageNum);
  const likes = await Involvment.getLikes();
  generateListHtml(processedData, ulContainer, JSON.parse(likes));
  listenAddLikeBtns(pageNum, document.querySelectorAll('[data-add-like]'));
  listenOpenModalBtns(document.querySelectorAll('[data-open-modal]'));
};

renderPage(17);
