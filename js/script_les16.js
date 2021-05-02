"use strict";
//Lesson #16
//###Структура:
//showFistMessages - название нашей функции
//в () мы будем передовать аргументы функции
//внутри {} выполняются какието действия
function showFirstMessages() {
    console.log("Hello World!");
}
//теперь, когда мы создали функцию, нужно его использовать, т.к. она в данный момент не выполняется. Просто есть.
//Для того чтобы она заработала ее нужно вызвать:
showFirstMessages();
//Важно! Не забыть вызвать функцию для работы функции.
//Есть не гласное правило, название должно быть глаголом с припиской что оно должно выполнять

//###Использование аргумента:
function showFirstMessages(text) {
    console.log(text);
}
showFirstMessages("text - Hello World!");
//###Переменные внутри функции
function showFirstMessages(text) {
    console.log(text);
    let num = 20; //Код не может ее достать от сюда, т.к. обьявили переменную внутри функции. То снаружи она будет не доступна.
}
console.log(num);
//Чтобы работало необходимо обьявить функцию за пределы локальной функции.
let num = 20;
function showFirstMessages(text) {
    console.log(text);
    num = 10; //внутри функции можно применять и обьявлять глобальные переменные. И поменять переменную.
}
showFirstMessages("text - Hello World!");
console.log(num); //результат 10
let num = 20;
function showFirstMessages(text) {
    console.log(text);
    let num = 10; //внутри функции можно применять и обьявлять глобальные переменные. И поменять переменную.
}
showFirstMessages("text - Hello World!");
console.log(num); //результат 20
//т.к. тет обьявло 2 отдельных переменных, глобальный и локальный. По этой причине и результат 20.
//###Замыкание функции.
let num = 20;
function showFirstMessages(text) {
    console.log(text);
    let num = 10;
    console.log(num) //результат 10. Так как вначале ищет локально, а после идет искать на уровень выше.
}
showFirstMessages("text - Hello World!");
console.log(num); //результат 20
//###Ключевое слово Return:
function calc(a, b) { //создаем функцию с наванием calc. В ней две переменные a и b.
    return (a + b); //тут мы даем команду вернуть а и b, а так-же выплнить вычисление.
    console.log('example'); //этот код unreachable. Его не достать, будет лежать мертвым грузом. Потому что был записан после RETURN
    //По это причине после команды return нет стоит, продолжать писать код.
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 8));

function ret() {
    let num = 50;
    return num; //return возвращает локальные данные
}
const anotherNum = ret(); //создаем переменную anotherNum, которая должна быть снаружи локальной функции и которая ссылается на результат работы функции ret.
console.log(anotherNum);

//###Классификация функции,
//1. Function declaration
//Созжается до начала выполнения скрипта, можно вызвать перед обьявлением.
// function foo() {
    //Code here
// }

//2. Function Expression
//Создается только тогда, когда доходит поток кода, можно вызвать только после обьявления.
// let foo = function() {
    //Code here
// }
const logger = function() {
    console.log("Hello");
}; //Function Expression требуется в конце писать ;
logger();
//3. Стрелочные Функции
//Не имеет своего контекста (this)
// () =>
const calc2 = (a, b) => a + b;
const calc3 = (a, b) => { return a + b }; //Same to previous
//Но в использавании есть некоторые НО, о которых надо знать