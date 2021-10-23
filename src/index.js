/* eslint-disable no-use-before-define */
import './style.css';
import * as CCApi from './cc-api';
import { generateListHtml } from './utils';
import * as Involvment from './involvment-api';
import commentModal from './comments';
import counter from './counter';

const pageOpts = {
  pageN: 1,
  itemsXpage: 20,
};

const ulContainer = document.querySelector('[data-list-container]');
const overlay = document.getElementsByClassName('overlay')[0];

const listenAddLikeBtns = (pageNum, buttons) => {
  buttons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      await Involvment.postLike(btn.dataset.addLike);
      renderList(pageNum);
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

const renderList = async (pageNum = pageOpts.pageN, itemsPerPage = pageOpts.itemsXpage) => {
  const processedData = await CCApi.processPageResult(pageNum, itemsPerPage);
  const likes = await Involvment.getLikes();
  const numOfItems = counter.loadedItems(processedData);
  const listHeader = document.querySelector('[data-loaded-items]');
  listHeader.textContent = `Category: ${CCApi.categories.active} Items loaded: ${numOfItems} Page: ${pageNum}.`;
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

const listenCategories = () => {
  const categories = document.querySelectorAll('.d-navbar li');
  const cats = document.querySelectorAll('.navbar ul li');
  console.log('categories', cats[1]);
  categories.forEach((cat) => {
    // remove underline to all
    cat.addEventListener('click', (e) => {
      cats.forEach((unselected) => {
        unselected.style.textDecoration = 'none';
      });

      // underline only targeted
      e.target.style.textDecoration = 'underline';

      // set active category
      CCApi.categories.active = e.target.dataset.category;
      renderList();
    });
  });
};

const listenPageOptions = () => {
  const form = document.getElementById('options');
  const itemsXpageField = document.getElementById('items-per-page');
  const pageNumField = document.getElementById('page-number');

  itemsXpageField.value = pageOpts.itemsXpage;
  pageNumField.value = pageOpts.pageN;
  pageNumField.max = parseInt(1000 / pageOpts.itemsXpage, 10);

  itemsXpageField.addEventListener('change', () => {
    pageOpts.itemsXpage = itemsXpageField.value;
    pageNumField.max = parseInt(1000 / pageOpts.itemsXpage, 10);
  });

  pageNumField.addEventListener('change', () => {
    pageOpts.pageN = pageNumField.value;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderList();
    listenCategories();
    listenPageOptions();
  });
};

renderList();
listenCategories();
listenPageOptions();
