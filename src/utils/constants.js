export const emailPattern =
  "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@((d{1,3}.d{1,3}.d{1,3}.d{1,3}(:d{1,3})?)|(((([a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9])|([a-zA-Z0-9]{1,2}))[.]{1})+([a-zA-Z]{2,4})))$";

export const namePattern = "^([A-Za-z-']{3,30})|([А-Яа-я-']{3,30})$";

export const moviesURL = "https://api.nomoreparties.co";

export const LARGE_ROW_CARD_COUNT = 4;
export const MIDLE_ROW_CARD_COUNT = 4;
export const SMALL_ROW_CARD_COUNT = 5;

export const LARGE_INITIAL_CARD_COUNT = 16;
export const MIDLE_INITIAL_CARD_COUNT = 8;
export const SMALL_INITIAL_CARD_COUNT = 5;

export const filterAllMovies = (items, searchStrings) => {
  return items.filter((item) => {
    return Object.values(item)
      .join(" ")
      // .trim()
      .toLowerCase()
      .includes(searchStrings.toLowerCase());
  });
};

export const cards = [
  {
    _id: 1,
    image: "https://media.filmz.ru/photos/full/filmz.ru_f_41893.jpg",
    nameRU: "33 слова о дизайне",
    duration: "1ч 42м",
    likes: true,
  },
  {
    _id: 2,
    image: "https://s1.1zoom.ru/big0/743/307661-alexfas01.jpg",
    nameRU: "Киноальманах «100 лет дизайна»",
    duration: "1ч 42м",
    likes: true,
  },
  {
    _id: 3,
    image:
      "https://wp-s.ru/wallpapers/16/18/330308743030668/samyj-luchshij-film-s-dzhekom-vorobem.jpg",
    nameRU: "В погоне за Бенкси",
    duration: "1ч 42м",
    likes: true,
  },
  {
    _id: 4,
    image: "https://media.filmz.ru/photos/full/filmz.ru_f_41893.jpg",
    nameRU: "Баския: Взрыв реальности",
    duration: "1ч 42м",
    likes: true,
  },
  {
    _id: 5,
    image:
      "https://avatars.dzeninfra.ru/get-zen_doc/8118234/pub_64106241a5011f3a0e4afee5_6410632d501643726a41fa3d/scale_1200",
    nameRU: "Бег это свобода",
    duration: "1ч 42м",
    likes: true,
  },
  {
    _id: 6,
    image: "https://s1.1zoom.ru/big0/743/307661-alexfas01.jpg",
    nameRU: "Перевал через Гринзби",
    duration: "1ч 42м",
    likes: true,
  },
  {
    _id: 7,
    image: "https://i.artfile.ru/1920x1200_454422_[www.ArtFile.ru].jpg",
    nameRU: "Зиндия - дорога по морю ",
    duration: "1ч 42м",
    likes: true,
  },
];

export const cardsShort = [
  {
    _id: 1,
    image:
      "https://avatars.dzeninfra.ru/get-zen_doc/8118234/pub_64106241a5011f3a0e4afee5_6410632d501643726a41fa3d/scale_1200",
    nameRU: "33 слова о дизайне",
    duration: "1ч 42м",
    likes: true,
  },
  {
    _id: 2,
    image: "https://s1.1zoom.ru/big0/743/307661-alexfas01.jpg",
    nameRU: "Киноальманах «100 лет дизайна»",
    duration: "1ч 42м",
    likes: true,
  },
  {
    _id: 3,
    image: "https://media.filmz.ru/photos/full/filmz.ru_f_41893.jpg",
    nameRU: "В погоне за Бенкси",
    duration: "1ч 42м",
    likes: true,
  },
];
