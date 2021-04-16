import FetchAPI from './apiService.js';
import cardTemplate from '../templates/img-card-thumb.hbs';
import refs from './refs.js';

refs.searchForm.addEventListener('submit', findImg);
refs.loadButton.addEventListener('click', onLoadMore);

function findImg(e) {
  e.preventDefault();
  FetchAPI.searchQuery = e.currentTarget.elements.query.value;
  if (FetchAPI.searchQuery === '') {
    return;
  }
  FetchAPI.resetPage();
  FetchAPI.fetchImage().then(images => {
    clearImgContainer();

    appendImagesMarkup(images);
  });
}

function onLoadMore() {
  if (FetchAPI.searchQuery === '') {
    return;
  }
  FetchAPI.fetchImage().then(appendImagesMarkup);
}

function appendImagesMarkup(images) {
  refs.imgList.insertAdjacentHTML('beforeend', cardTemplate(images));
}

function clearImgContainer() {
  refs.imgList.innerHTML = '';
}
