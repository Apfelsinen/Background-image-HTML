"use strict";

/* Lesson #15
Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

//Old old code
const numberOfFilms = +prompt('How many movie did saw?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};
//Task #1
// const a = prompt('Какой последний фильм вы смотрели?', ''), //запишем напр: 1
//     b = prompt('На сколько оцените его?', ''), //запишем напр: 2
//     c = prompt('Вы смотрели фильмы Пиксар?', ''), //запишем напр: 3
//     d = prompt('На сколько оцените ихние фильмы?', ''); //запишем напр: 4

for (let i = 0; i < 2; i++) {
    const a = prompt('Оди из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
// Цикл происходит 2 раза, т.е. i равен 0, увеличиваем до меньше двух, на 1.
// personaMovieDB.movies[a] = b;
//Task #2
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('Error!');
        i--;
    }
}
//Task #3:
if(personalMovieDB < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >=30) {
    console.log("Вы киноман");
} else {
    console.log("Error!")
}

console.log(personalMovieDB);