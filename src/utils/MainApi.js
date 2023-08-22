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

  getAllCards() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then((res) => this._resResponse(res));
  }

  addSavedCard({ name, link }) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then((res) => this._resResponse(res));
  }

  deleteCard(idCard) {
    return fetch(`${this._url}/movies/${idCard}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then((res) => this._resResponse(res));
  }
  // editAvatarInfo(data) {
  //   return fetch(`${this._url}/users/me/avatar`, {
  //     method: "PATCH",
  //     credentials: "include",
  //     headers: this._headers,
  //     body: JSON.stringify({ avatar: data.avatar }),
  //   }).then((res) => this._resResponse(res));
  // }

  // changeLikeCardStatus(idCard, isLiked) {
  //   if (isLiked) {
  //     return fetch(`${this._url}/cards/${idCard}/likes`, {
  //       method: "PUT",
  //       credentials: "include",
  //       headers: this._headers,
  //     }).then((res) => this._resResponse(res));
  //   } else {
  //     return fetch(`${this._url}/cards/${idCard}/likes`, {
  //       method: "DELETE",
  //       credentials: "include",
  //       headers: this._headers,
  //     }).then((res) => this._resResponse(res));
  //   }
  // }
}

export const mainApi = new MainApi({
  // url: "http://localhost:3000",
  url: "https://api.alexmovie.nomoredomains.xyz",
  headers: {
    "Content-type": "application/json",
    // authorization: "940ae192-79e3-4af0-9ee8-6874bf99bd0d",
  },
});
