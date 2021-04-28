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
//  3 Cycle methods:
let numCycle = 50;
// 1. while cycle
while (numCycle <= 55) {
    console.log(numCycle);
    numCycle++;
}
let numCycleTwo = 50;
// 2. do cycle
do {
    console.log(numCycleTwo);
    numCycleTwo++;
}
while (numCycleTwo <= 55);
// 3. for cycle
let numCycle3 = 50;
for (let i  = 1; i < 8; i++) {
    console.log(numCycle3);
    numCycle3++
}  //i - iterator, будет повторять столько сколько мы указали раз. 
// break - прервать цикл досрочно. contunue - позволяет пропустить тот шаг, который нам не нужен.
for (let i  = 1; i < 10; i++) {
    if (i === 6) {
        //break; (когда дойдет до 6, цикл будет прерван.)
        continue; // т.е. пропускает 6 шаг.
    }

    console.log(i);
}
