"use strict";

const numberOfFilms = +prompt('How many movie did saw?', '');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('One of last watched movie?', ''),
      b = prompt( 'На сколько оцените?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('Вопрос №4', '');

personaMovieDB.movies[a] = b;