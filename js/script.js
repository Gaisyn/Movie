'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви вже подивилися?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  'actors': {},
  genres: [],
  privat: false
};

const a = prompt('Один із останіх переглянутих фільмів?', ''),
  b = prompt('Наскільки оцінете його?', ''),
  c = prompt('Один із останіх переглянутих фільмів?', ''),
  d = prompt('Наскільки оцінете його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);