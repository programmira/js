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


let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов Вы уже просмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов Вы уже просмотрели?", "");
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const filmName = prompt("Один из последних просмотренных фильмов?", ""),
              filmRate = prompt("На сколько оцените его?", "");
    
        if (filmName != "" && filmRate != "" && filmName != null && filmRate != null && filmName.length < 50) {
            console.log("done");
        } else {   
            console.log("error");
            i--;
            console.log(i);
        }
    
    }
}
// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else {
        console.log("Вы киноман!");
    }
    
}
// detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
// showMyDB(personalMovieDB.privat);

function writeYourGenres() {

    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый фильм под номером ${i}`, "");
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();