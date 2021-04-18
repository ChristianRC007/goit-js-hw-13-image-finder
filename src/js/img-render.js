import FetchAPI from './apiService.js';
import cardTemplate from '../templates/img-card-thumb.hbs';
import refs from './refs.js';
import cautionNotify from './notify.js';
import * as basicLightbox from 'basiclightbox';

refs.searchForm.addEventListener('submit', findImg);
refs.imgList.addEventListener('click', openGallery);
// refs.loadButton.addEventListener('click', onLoadMore);

async function findImg(e) {
  e.preventDefault();
  FetchAPI.searchQuery = e.currentTarget.elements.query.value;
  if (FetchAPI.searchQuery === '') {
    return;
  }
  try {
    FetchAPI.resetPage();
    const imagesList = await FetchAPI.fetchImage();
    clearImgContainer();
    appendImagesMarkup(imagesList);
  } catch (error) {
    cautionNotify();
    throw new Error(error);
  }
}

async function onLoadMore() {
  if (FetchAPI.searchQuery === '') {
    return;
  }
  try {
    const imagesList = await FetchAPI.fetchImage();
    appendImagesMarkup(imagesList);
  } catch (error) {
    cautionNotify();
    throw new Error(error);
  }
}

function appendImagesMarkup(images) {
  refs.imgList.insertAdjacentHTML('beforeend', cardTemplate(images));
}

function clearImgContainer() {
  refs.imgList.innerHTML = '';
}

function openGallery(e) {
  if (e.target.localName === 'img') {
    const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`);

    instance.show();
  }
}
