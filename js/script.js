"use strict";

const numberOfFilms = +prompt('How many movie did saw?', '');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('Какой последний фильм вы смотрели?', ''),
      b = prompt( 'На сколько оцените?', ''),
      c = prompt('Вы смотрели фильмы Пиксар?', ''),
      d = prompt('И последний вопрос, сколько вам лет', '');

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);