"use strict";
//Lesson #18
let numberOfFilms;
function start() {
    numberOfFilms = +promt('How many movies did you watched?', ''); //+для того чтобы был числовой тип данных

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +promt('How many movies did you watched?', '');
    }
}

start();