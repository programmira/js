"use strict";

// Задачи на конструкции if-else, switch-case в JavaScript

// Задача №1
// let a = 4;
// if(a === 5) {
//     alert("Верно");
// } else {
//     alert("Неверно");
// }


// Задача №2
// let min = +prompt('Сколько сейчас минут', '');
// if(min >=0 && min <=14) {
//     alert("Это первая четверть часа");
// } else if(min >=15 && min <=30) {
//     alert("Это вторая четверть часа");
// } else if(min >=31 && min <=45) {
//     alert("Это третья четверть часа");
// } else if (min >=46 && min <=59) {
//     alert("Это четвертая четверть часа");
// }


// Задача №3
// if-метод
// var lang = 'ru';
// if(lang === 'ru') {
//     var arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// }
// if(lang === 'en') {
//     arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// }
// alert(arr);


// switch-метод
// var lang = 'en';
// switch (lang) {
//     case 'ru':
//         var arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//     break;
//     case 'en':
//         arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     break;
// }
// alert(arr);

// Многомерный массив
// var lang = 'en';
// var arr = [   
//     ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// ];

// lang === 'ru' ? alert(arr[0]) : alert(arr[1]);

// var lang = 'en';
// var arr = {   
//     'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// };

// alert(arr[lang]);

// Работа с if-else
// Задача №1
// let a = -3;
// if(a === 0) {
//     alert("Верно!");
// } else {
//     alert("Неверно!");
// }

// Задача №2
// let a = -3;
// if(a > 0) {
//     alert("Верно!")
// } else {
//     alert("Неверно!");
// }

// Задача №3
// let a = 1;
// if(a < 0) {
//     alert("Верно!")
// } else {
//     alert("Неверно!");
// }

// Задача №4

// let a = -3;
// if(a >= 0) {
//     alert("Верно!")
// } else {
//     alert("Неверно!");
// }


// Задача №5

// let a = 1;
// if(a <= 0) {
//     alert("Верно!")
// } else {
//     alert("Неверно");
// }

// Задача №6

// let a = 1;
// if(a != 0) {
//     alert("Верно!")
// } else {
//     alert("Неверно!");
// }

// Задача №7

// let a =  3;
// if(a === 'test') {
//     alert("Верно");
// } else {
//     alert("Неверно");
// }

// Задача №7

// let a = 3;
// if(a === '1') {
//     alert("Верно!");
// } else {
//     alert("Неверно!");
// }

// Работа с логическими переменными
// Задача №8
// let test = false;
// test == true ? alert("Верно!") : alert("Неверно!");

// Задача №9
//  let test = false;
//  if(test != true) {
//      alert("Верно!");
//  } else {
//      alert("Неверно!");
//  }

// let test = 3;
// test !== true ? alert("Верно!") : alert("Неверно!");

// Работа с && (и) и || (или)

// Задача №10

// let a = 2;
// if(a > 0 && a < 5) {
//     alert("Verno!");
// } else {
//     alert("Neverno!");
// }

// Задача №11

// let a = -3;
// if(a === 2 || a === 0) {
//     a += 7;
// } else {
//     a /= 10;
// }

// alert(a);


// Задача №12

// let a = 3;
// let b = 5;
// if(a <= 1 && b >= 3) {
//     alert(a + b);
// } else {
//     alert(a - b);
// }

// Задача №14

// let a = 0;
// let b = 0;
// if((a > 2 && a < 11 ) || (b >= 6 && b < 14)) {
//     alert("Verno!");
// } else {
//     alert("Neverno!");
// }

// На switch-case

// Задача №15
// let num = +prompt("Введите число от 1 до 4", "");
// if(num > 0 && num < 5) {
//     alert(getSeasonOfYear(num));
// } else {
//     alert("Ошибка! Введите число от 1 до 4!");
// }


// function getSeasonOfYear(num) {
//     let result;
//     switch (num) {
//         case 1:
//         result = 'зима';
//         break;
//         case 2:
//         result = 'весна';
//         break;
//         case 3:
//         result = 'лето';
//         break;
//         case 4:
//         result = 'осень';
//         break;
//     }

//     return result;
// }

// Задачи
// Задача №16

// let day = 10;
// if(day > 0 && day < 11) {
//     alert("Первая декада!");
// } else if(day > 10 && day < 21) {
//     alert("Вторая декада!")
// } else if (day > 20 && day < 32) {
//     alert("Третья декада!");
// }

// Задача №17
// let month = 12;
// if(month > 0 && month < 3) {
//     alert("Поздравляю, сейчас зима!");
// } else if(month > 2 && month < 6) {
//     alert("Поздравляю, сейчас весна!");
// } else if(month > 5 && month < 9) {
//     alert("Поздравляю, сейчас лето!");
// } else if(month > 8 && month < 12) {
//     alert("Поздравляю, сейчас осень!");
// } else if(month === 12) {
//     alert("Поздравляю, сейчас зима!");
// }

// Задача №18

// let a = 'abcde';
// if(a[0] === 'a') {
//     alert("Да");
// } else {
//     alert("Нет");  
// }

// Задача №19
// let a = '12345';
// if(a[0] === '1' || a[0] === '2' || a[0] === '3') {
//     alert("Да!");
// } else{
//     alert("Нет!");
// }

// Задача №20

// let a = '569';
// let b = +a[0];
// let c = +a[1];
// let d = +a[2];
// alert(b + c + d);


// Задача №21

// let a = "111111";
// let b = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[2]);
// let c = parseInt(a[3]) + parseInt(a[4]) + parseInt(a[5]);
// if(b === c){
//     alert("Да!");
// } else {
//     alert("Нет!");
// }


// let numberOfFilms;

// function start() {
//     numberOfFilms = prompt("Сколько фильмов Вы уже просмотрели?", "");

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt("Сколько фильмов Вы уже просмотрели?", "");
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const filmName = prompt("Один из последних просмотренных фильмов?", ""),
//               filmRate = prompt("На сколько оцените его?", "");
    
//         if (filmName != "" && filmRate != "" && filmName != null && filmRate != null && filmName.length < 50) {
//             console.log("done");
//         } else {   
//             console.log("error");
//             i--;
//             console.log(i);
//         }
    
//     }
// }
// rememberMyFilms();


// function detectPersonalLevel() {
//     if (personalMovieDB.count <= 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else {
//         console.log("Вы киноман!");
//     }
    
// }
// detectPersonalLevel();

// console.log(personalMovieDB);

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {

//     for(let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый фильм под номером ${i}`, "");
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }
// writeYourGenres();

// function first() {
//     setTimeout(function() {
//             console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок! Уррраа!');
// }

// learnJS('Python', done);

// Задачи на циклы while, for в JavaScript

// Примеры решения задач

// Задача № 1

// var i = 1;
// while (i <= 50) {
// 	document.write(i + '<br>');
// 	i++;
// }

// Задача № 2

// let num = [1, 2, 3, 4, 5];
// for(let i = 0; i < num.length; i++) {
//     document.write(num[i] + '<br>');
// }


// Задача № 3
// let result = 1;
// let arr = [2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++) {
//     result = result * arr[i];
//     console.log(result);
// }

// Задача . Цикл for-in

// let obj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
// };

// for (let key in obj) {
//    document.write(`${key} - это ${obj[key]} <br>`);
// }

// Циклы while и for
// Циклы while
// Задача №1

// let num = 1;
// while(num < 101) {
//     document.write(num + '<br>');
//     num++;
// }

// Задача №2
// let num = 11;
// while(num < 34) {
//     document.write(num + '<br>');
//     num++;
// }

// Задача №3

// let num = 0;
// while(num < 101) {
//     if(Number.isInteger(num / 2)) {
//         document.write(num + '<br>');
//     }
//     num++;
// }

// let num = 0;
// while(num < 101) {
//     if(num % 2 == 0) {
//         document.write(num + '<br>');
//     }
//     num++;
// }

// Задача №4
// let result = 0;
// let num = 1;
// while(num < 101) {
//     result = result + num;
//     console.log(result);
//     num++;
// }

// Циклы for

// Задача №1
// for(let i = 1; i < 101; i++){
//     document.write(i + '<br>');
// }

// Задача №2

// for(let i = 11; i < 34; i++) {
//     document.write(i + '<br>');
// }

// Задача №3
// for(let i = 0; i < 101; i++) {
//     if(i % 2 == 0) {
//         document.write(i + '<br>');
//     }
// }

// Задача №4
// let result = 0;
// for(let i = 1; i < 100; i++) {
//     result = result + i;
//     document.write(result + '<br>');
// }


// Работа с for для массивов

// Задача №5
// let num = [1, 2, 3, 4, 5];
// for(let i = 0; i < num.length; i++) {
//     document.write(num[i] + '<br>');
// }

// Задача №6
// let result = 0;
// let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++) {
//     result = result + arr[i];
// }
// console.log(result);

// Работа с for-in

// Задача №7
// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
// for(let key in obj) {
//     document.write(key + ': ' + obj[key] + '<br>');
// }

// Задача №8
// var obj = {Коля: '200',
//  Вася: '300', 
//  Петя: '400'
// };

// for(let key in obj) {
//     document.write(key + ' - ' + ' зарплата ' + obj[key] + ' долларов.' + '<br>');
// }

// Задачи

// Задача №9
// let arr = [2, 5, 9, 15, 0, 4];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 3 && arr[i] < 11) {
//         document.write(arr[i] + '<br>');
//     }
// }

// Задача №10
// let result = 0;
// let arr = [2, 5, -9, -15, 0, 4];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//         result = result + arr[i];
//     }
// }
// document.write(result);


// Задача №11
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === 4) {
//         alert("Есть!");
//     }
// }

// Задача №12
// let arr = [10, 20, 30, 50, 235, 3000];
// for(let i = 0; i < arr.length; i++) {
//     let num = arr[i].toString()[0];
//     if(num === '1' || num === '2' || num === '5') {
//         document.write(arr[i] + '<br>');
//     }
// }


// Задача №13
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < arr.length; i++){
//      document.write('-' + arr[i]);
// }
// document.write('-');

// Задача №14

// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === 'Суббота' || arr[i] === 'Воскресенье') {
//         document.write(arr[i].bold() + '<br>');
//     } else {
//         document.write(arr[i] + '<br>');
//     }
// }

// Задача №15

// let day = 'Пятница';
// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// for(let i = 0; i < arr.length; i++) {
//     if(day === arr[i]) {
//         document.write(day.italics() + '<br>');
//     } else {
//         document.write(arr[i] + '<br>');
//     }
// }

// Задача №16

// let n = 1000;
// while(n > 50){
//     n = n / 2;
//     if(n > 50) {
//         console.log(n);;
//     }
// }
// let n = 1000;
// let prev = 0;
// let num = 0;
// while(n > 50){
//     prev = n;
//     n = n / 2;
//     num += 1;
// }
// console.log(n);
// console.log(num);
// console.log(prev);
  
// Урок про объекты, деструктуризацию объектов
// const obj = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };
// obj.makeTest();
// console.log(Object.keys(obj).length);


// const {bg, border} = obj.colors;
// console.log(border);
// delete obj.name;
// console.log(obj);

// let counter = 0;

// for(let key in obj) {
    // if(typeof(obj[key]) === 'object') {
    //     for(let i in obj[key]) {
    //         console.log(`Свойство ${key} имеет значение ${obj[key][i]}`);
    //         counter++;
    //     }
    // }else {
    //     console.log(`Свойство ${key} имеет значение ${obj[key]}`);
        // counter++;
    // }
// }
// console.log(counter);

// Массивы и псевдомассивы

// let arr = [1, 2, 3, 4, 5];
// arr.pop();
// arr.push(10);
// arr.shift(3);
// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let value of arr) {
//     console.log(value);
// }

// console.log(arr.length);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt('', '');
// let products = str.split();
// products.sort();
// console.log(products.join('; '));

// arr.sort(compareNum);
// function compareNum(a, b) {
//     return a - b;
// }
// console.log(arr);

// Передача по ссылке или по значению, Spread оператор
// let a = 8,
//     b = a;

// b = b + 2;

// console.log(a);
// console.log(b);

// const numbers = {
//     a: 1,
//     b: 3,
//     c: {
//         x: 1,
//         y: 2
//     }
// };

// function copy(

// ) = {

// }

// function showNumer(number) {
//     let normilizedNumber = normalizeNumber(number);

//     return normilizedNumber;
// }

// function normalizeNumber(number) {
//     return `+38${number}`;
// }

// console.log(normalizeNumber('0987776655'));

// function sumElements(array, exp) {
//     for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] * exp;
//     }
//     return array;
// }

// let array1 = [1, 2,5,6,7,8,8];
// let array2 = [1,2,3,4,5,6,7,8];
// console.log(sumElements(array1, 4));
// console.log(sumElements(array2, 7));

// function sumElements(array, exp) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i] * exp;
//       }
//       return array;
// }


// let sumElements1 = function(array, exp) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i] * exp;
//       }
//       return array;
// };


// let sumElements2 = (array, exp) => {
//    for (let i = 0; i < array.length; i++) {
//      array[i] = array[i] * exp;
//    }
//    return array;
// };

// function showNumber(normalizeFunction, number) {
//     return normalizeFunction(number);
// }

// let normalizeUkranianNumber = function (number) {
//     return `+38${number}`;
// }

// let normalizeRussianNumber = function(number) {
//     return `+7${number}`;
// }

// let user1 = {
//     country: 'Russian',
//     name: 'Vasia',
//     number: '0976665544'
// } 

// let user2 = {
//     country: 'Ukraine',
//     name: 'Vasia',
//     number: '0976665544'
// } 

// if(user1.country == 'Ukraine') {
//     console.log(showNumber(normalizeUkranianNumber, user1.number));
// } else {
//    console.log(showNumber(normalizeRussianNumber, user1.number));
// }


// const checkConsistentOutput = (func, val) => {
//     let firstTry = func(val);
//     let secondTry = func(val);
//     if (firstTry === secondTry) {
//         return `Good. Result is ${firstTry}`;
//     } else {
//         return 'This function returned inconsistent results';
//     }
// };

// let func = function(arg) {
   
// };

// let result = checkConsistentOutput(func, 'Ira');

// console.log(result);

// let func = num => num + 2;

// let func1 = (num) => { 
//     return num + 2;
// };

// console.log(func());
// const numbers = {
//     x: 5,
//     y: 4,
//     d: {
//         f: 5,
//         c: 7
//     }
// };

// function copy(mainObj) {
//     let objCopy = {};
//     for(let key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const newNumbers = copy(numbers);

// newNumbers.y = 10;
// newNumbers.d.f = 3;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     b: 9,
//     s: 0
// }

// // console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.b = 3;
// console.log(clone);
// console.log(add);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'd';
// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blog = ['wordpress', 'livejournal', 'blogger'],
//     internet = [... video, ... blog, 'vk', 'instagram'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 4, 7];
// log(...num);

// const newArr = ['a', 'b', 'c'];
// const newerArr = [...newArr, 'gh'];
// console.log(newerArr);

// const g = {
//     x: 9,
//     y: 6,
//     c: {
//         v: 1,
//         b: 8
//     }
// };

// const n = {...g};
// n.x = 3;
// console.log(n);
// console.log(g);


// Объектно-оринтированное программирование _ урок 23

// let str = 'some';
// let strObj = new String(str);
// console.log(typeof (str));
// console.log(typeof (strObj));

// const soldier = {
//     health: 500,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// // console.log(soldier);
// let john = Object.create(soldier);
//  john = {
//     armor: 250,
//     font: 350
// };
// Object.setPrototypeOf(soldier, john);

// john.__proto__ = soldier;
// console.log(john.sayHello);

// Урок 24 - Практика, ч. 4, используем объекты

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = prompt("Сколько фильмов Вы уже просмотрели?", "");
    
//         while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = prompt("Сколько фильмов Вы уже просмотрели?", "");
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const filmName = prompt("Один из последних просмотренных фильмов?", ""),
//                   filmRate = prompt("На сколько оцените его?", "");
        
//             if (filmName != "" && filmRate != "" && filmName != null && filmRate != null && filmName.length < 50) {
//                 console.log("done");
//             } else {   
//                 console.log("error");
//                 i--;
//                 console.log(i);
//             }
        
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count <= 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else {
//             console.log("Вы киноман!");
//         }
        
//     },
//     toggleVisibleMyDB: function() {
//         if(personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenre: function() {
        // for(let i = 1; i <= 3; i++) {
        //     let genre = prompt(`Ваш любимый фильм под номером ${i}`, "");
        //     if (genre === '' || genre === null){
        //         console.log('Вы ввели некоретные данные');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }
        // }
//         for(let i = 1; i < 2; i++) {
//             let genres = prompt(`Введите ваши любимые жанры через запятую`, "").toLowerCase();
//             if (genres === '' || genres === null){
//                 console.log('Вы ввели некоретные данные');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//         }
//     personalMovieDB.genres.forEach((item, i) => {
//         console.log(`Дюбимый жанр ${i + 1} - это ${item}`);
//     });
//     }
// };

// Динамическая типизация JS

// console.log(typeof(toString(null)));
// const num = 25;
// console.log('https://vk.com/catalog/' + num);

// console.log(typeof(Number('2')));
// console.log(typeof(+ '2'));
// console.log(typeof(parseInt('2')));

// let switcher = null;
// if(switcher) {
//     console.log('Working...');
// }

// switcher = 1;
// if(switcher) {
//     console.log('Working...');
// }

// console.log(typeof(Boolean('2')));

// console.log(typeof(!!'2'));

// Задачи с реальных собеседований
// #1
// let x = 5;
// alert(x++);
// #2
// let y = [] + false - null + true;
// console.log(y);

// #3
// let y = 1;
// let x = y = 2;
// alert(x);

// #4
// let x = [] + 1 + 2;
// console.log(x);

// #5
// alert('1'[0]);

// #6
// let x = 2 && 1 && null && 0 && undefined;
// console.log(x);

// #7
// alert(null || 2 && 3 || 4);

// #8
// let a = [1, 2, 3];
// let b = [1, 2, 3];
// if(a == b){
//     console.log('Hello!');
// } else {
//     console.log("not");
// }

// #9

// alert(+"Infinity");

// Задачи на математические функции JavaScript
// Работа с %
// Задача №1
// let a = 10;
// let b = 3;
// function del() {
//     let c = a % b;
//     console.log(c);
// }
// del();


// Задача №2
// let a = 10;
// let b = 3;
// let c = a % b;
// if(c === 0) {
//     console.log(`Делится ${a / b}`);
// } else {
//     console.log(`Делится с остатком ${c}`);
// }

// Работа со степенью и корнем
// Задача №3

// let st = Math.pow(2, 10);
// console.log(st);

// Задача №4
// let a = Math.sqrt(245);
// console.log(a);

// Задача №5
// let c = [4, 2, 5, 19, 13, 0, 10];
// let b = 0;
// for(let i = 0; i < c.length; i++) {
//     b = Math.pow(c[i], 2) + b;
// }
// console.log(Math.sqrt(b));

// Работа с функциями округления

// Задача №6

// console.log(Math.round(Math.sqrt(379)));

// let num = Math.sqrt(379);
// console.log(num.toFixed(2));

// let num = Math.sqrt(379);
// console.log(num.toFixed(1));

// Задача №7
// let c = {
//     'floor': Math.floor(Math.sqrt(587)),
//     'ceil': Math.ceil(Math.sqrt(587))
// };
// console.log(c);


// Задача №8

// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));


// Работа с рандомом

// Задача №9

// document.write(Math.round(Math.random() * 100));

// Задача №10
// let a = [];
// for(let i = 0; i < 10; i++){
//     a = Math.round(Math.random() * 10) + ',' +` ${a}`;
// }
// console.log(a);

// let arr = [];
// for (let i = 0; i < 10; i++) {
// 	arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// }
// alert(arr);


// Работа с модулем
// Задача №11
// let a = -3;
// let b = 1;
// console.log(Math.abs(a-b));

// Задача №12
// let a = 3;
// let b = 5;
// let c = Math.abs(a - b);
// console.log(c);

// let a = 6;
// let b = 1;
// let c = Math.abs(a - b);
// console.log(c);

// Задачи
// Задача №13
// let arr = [12, 15, 20, 25, 59, 79];
// let b = 0;
// for(let i = 0; i < arr.length; i++){
//     b = arr[i] + b;
// }
// console.log(b / arr.length);

// Задача №14
// let num = 4;
//     for(let i = num - 1; i > 0; i--){
//          num *= i;
//      } 
//    console.log(num);

// Получение элементов со страницы

// const box = window.document.getElementById("box");
// console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns[0]);

// const oneHeart = document.querySelector('div');
// console.log(oneHeart);

// Действия с элементами на странице

// box[2].style.borderRadius = '30%';
// box.button.style.cssText = 'background-color: blue, width: 500px';


const div = document.createElement('div');
const box = document.getElementsByClassName('box'),
    btns = document.getElementsByTagName('button');
div.classList.add('red');
document.body.append(div);
// document.querySelector('.box').prepend(div);
// document.querySelector('.box').append(div);

// document.box.button[1].before(div);
// btns[3].after(div);
// btns.insertBefore(div, btns[3]);

// div.innerHTML = '<h1>Hello Vlad! How are you doing?</h1>';
div.getContent = 'Hello';