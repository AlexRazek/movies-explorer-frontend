export default class MoviesApi {
    constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
    }
  
    _resResponse(res) {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getAllMovies() {
      return fetch(`${this._url}`, {
        method: "GET",
        credentials: "include",
        headers: this._headers,
      }).then((res) => this._resResponse(res));
    }
} 



export const moviesApi = new MoviesApi({
  // url: "http://localhost:3000",
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-type": "application/json",
    // authorization: "940ae192-79e3-4af0-9ee8-6874bf99bd0d",
  },
});