import Api from "../utils/Api";

export const api = new Api({
  url: "http://localhost:3000",
  // url: "https://api.alexmovie.nomoredomains.xyz",
  headers: {
    "Content-type": "application/json",
    // authorization: "940ae192-79e3-4af0-9ee8-6874bf99bd0d",
  },
});
