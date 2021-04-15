import fetchImage from './apiService.js';
import cardTemplate from '../templates/img-card-thumb.hbs';
import refs from './refs.js';

refs.searchButton.addEventListener('click', findImg);

function findImg(e) {
  let query;
  e.preventDefault();
  query = refs.searchInput.value;
  if (query === '') {
    return;
  }
  fetchImage(query).then(data => {
    const newArray = data.hits.reduce((acc, el) => cardTemplate(el) + acc, '');
    refs.imgList.insertAdjacentHTML('beforeend', newArray);
  });
}
