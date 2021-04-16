// export default function fetchImage(searchQuery) {
//   const url = `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${API_KEY}`;
//   return fetch(url).then(response => response.json());
// }

class FetchImageApi {
  #key = '21175244-7c66133e2371767f9955ec31b';

  constructor() {
    this.searchQuery = '';
    this.pageNumber = 1;
  }
  fetchImage() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${
      this.searchQuery
    }&page=${this.pageNumber}&per_page=12&key=${this.#key}`;
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
