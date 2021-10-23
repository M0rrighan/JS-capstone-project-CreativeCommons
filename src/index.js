/* eslint-disable no-use-before-define */
import './style.css';
import * as CCApi from './cc-api';
import { generateListHtml } from './utils';
import * as Involvment from './involvment-api';
import commentModal from './comments';
import counter from './counter';

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
      <p data-close-modal class="btn close_modal">
      <i class="far fa-times-square"></i>
      </p>
      <a href="${url}" target="_blank" class="image-placeholder">
          <img src="${url}" alt="${title}">
      </a>
      <h2>${title}</h2>
      <div class="item-details">
        <p> <i class="fas fa-info"></i> Creator: ${(creator !== null) ? creator : 'Unknown'}</p>
        <p> <i class="fas fa-info"></i> License: ${license}</p>      
        <p> <i class="fas fa-info"></i> Source: ${source}</p>
        <p> <i class="fas fa-info"></i> <a href="${sourcePageUrl}">Visit Source</a></p>
      </div>   
      `;
      document.querySelector('body').appendChild(modal);
      modal.appendChild(commentModal(id));
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
  const numOfItems = counter.loadedItems(processedData);
  const listHeader = document.querySelector('[data-loaded-items]');
  listHeader.textContent = `Category: Photographs.    Items loaded: ${numOfItems}`;
  generateListHtml(processedData, ulContainer, JSON.parse(likes));
  listenAddLikeBtns(pageNum, document.querySelectorAll('[data-add-like]'));
  listenOpenModalBtns(document.querySelectorAll('[data-open-modal]'));

  // positioning section - layout
  const section = document.querySelector('section');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  section.style.top = `${header.offsetHeight + 16}px`;
  section.style.height = `calc(100vh - ${header.offsetHeight + footer.offsetHeight + 32}px)`;
  window.addEventListener('resize', () => {
    section.style.top = `${header.offsetHeight + 16}px`;
    section.style.height = `calc(100vh - ${header.offsetHeight + footer.offsetHeight + 32}px)`;
  });
};

renderPage(7);
