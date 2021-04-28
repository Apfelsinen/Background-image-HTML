"use strict";
//Lesson #12
const numberOfFilms = +prompt('How many movie did saw?', '');
// numberOfFilms это переменная
// promt - отображает диалоговое окно, где 'How many movie did saw?' это наш вопрос, '' это пустая область с будщим ответом.
// +promt - т.к. ответ является числовы, то правильней будет добавить +

//Далее надо создать обьект, с данными со свойствами:
//movies: {} содержит пустое свойство, данные мы добавим в будушем.
const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};
//Задаем доп вопросы, где abcd это переменные с ответами от пользователя
const a = prompt('Какой последний фильм вы смотрели?', ''), //запишем напр: 1
      b = prompt('На сколько оцените его?', ''), //запишем напр: 2
      c = prompt('Вы смотрели фильмы Пиксар?', ''), //запишем напр: 3
      d = prompt('На сколько оцените ихние фильмы?', ''); //запишем напр: 4
//Далее нам надо записать наши полученые ответы в формате ключ - значение.
//Для этого мы обращаемся к переменной personalMovieDB 
personaMovieDB.movies[a] = b; //переменная a = prompt('Какой последний фильм вы смотрели?', ''),a = prompt('Какой последний фильм вы смотрели?', ''), к которой мы присваеваем ответ b = prompt('На сколько оцените его?', ''),
personaMovieDB.movies[c] = d; //ответ даст movies: {1: "2", 3: "4"}
//Лучше использовать квадратные скобки, так не будет багов.
console.log(personaMovieDB);
//Программирование в цело это условия. Урок #13
//if (условие) {действие} else {другое действие} 
//Например проверим условие 4 равен 9
if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}
//Тут мы создадим переменную num = 50
const num = 50;
//При помощи условия if мы проверяем условие num < 49, то...
if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log("Too Much!");
} else {
    console.log('Ok!');
}
//Так же можно проверить условие при помощи тенарного оператора
//(num === 50) описываем условие
//оператор ? т.е. это замена if
//оператор : т.е. else
(num === 50) ? console.log('Ok!') : console.log('Error');
//Switch конструкция
//Где можно проверить строгое соответсвие  
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
