"use strict";

const numberOfFilms = +prompt('How many movie did saw?', '');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};

const a = prompt('Какой последний фильм вы смотрели?', ''),
      b = prompt('На сколько оцените?', ''),
      c = prompt('Вы смотрели фильмы Пиксар?', ''),
      d = prompt('И последний вопрос, сколько вам лет', '');

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);
if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;

if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log("Too Much!");
} else {
    console.log('Ok!');
}
(num === 50) ? console.log('Ok!') : console.log('Error');

const numTwo = 50;
switch (numTwo) { //строгое соответствие
    case 49:
        console.log('Error!');
        break;
    case 100:
        console.log('Error!');
        break;
    case 50:
        console.log('Ok!');
        break;
    default:
        console.log('error');
        break;
}