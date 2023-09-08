export default class MainApi {
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

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then((res) => this._resResponse(res));
  }

  updateUserInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      // body: JSON.stringify({name: data.nameauthor, about: data.aboutauthor})
      body: JSON.stringify({ name, email }),
    }).then((res) => this._resResponse(res));
  }

  getSavedCards() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then((res) => this._resResponse(res));
  }

  addSavedCard(data) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ 
        country: data.country,
        // created_at: data.created_at,
        description: data.description,
        director: data.director,
        duration: data.duration,
        image: `https://api.nomoreparties.co${data.image.url}`,
        nameEN: data.nameEN,
        nameRU: data.nameRU,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.url}`,
        movieId: data.id,
        year: data.year,
      }),
    }).then((res) => this._resResponse(res));
  }

  deleteCard(idCard) {
    return fetch(`${this._url}/movies/${idCard}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then((res) => this._resResponse(res));
  }
}

export const mainApi = new MainApi({
  // url: "http://localhost:3000",
  url: "https://api.alexmovie.nomoredomains.xyz",
  headers: {
    "Content-type": "application/json",
    // authorization: "940ae192-79e3-4af0-9ee8-6874bf99bd0d",
  },
});
