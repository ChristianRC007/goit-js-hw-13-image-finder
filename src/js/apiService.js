const API_KEY = '21175244-7c66133e2371767f9955ec31b';
const BASE_URL = 'https://pixabay.com/api/';

class FetchImageApi {
  constructor() {
    this.searchQuery = '';
    this.pageNumber = 1;
  }
  fetchImage() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${API_KEY}`;
    return fetch(url)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  }

  incrementPage() {
    this.pageNumber += 1;
  }

  resetPage() {
    this.pageNumber = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export default new FetchImageApi();
