const BASE_URL = 'https://pixabay.com';
const API_KEY = '21175244-7c66133e2371767f9955ec31b';
const pageNumber = 1;

export default function fetchImage(searchQuery) {
  const url = `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${API_KEY}`;
  return fetch(url).then(response => response.json());
}

// fetchImage('pudding').then(dataArray => {
//   const body = document.querySelector('body');
//   const newArray = dataArray.hits
//     .map(el => `<img src="${el.webformatURL}">`)
//     .join('');
//   body.innerHTML = newArray;
// });
